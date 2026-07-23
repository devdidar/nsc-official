import { createServerFn } from "@tanstack/react-start";
import { supabase, getSupabaseAdmin } from "./supabase";

export const sendContactEmail = createServerFn({ method: "POST" })
  .validator(
    (data: {
      name: string
      email: string
      subject: string | null
      message: string
    }) => data,
  )
  .handler(async ({ data }) => {
    console.log("[sendContactEmail] Handler invoked with:", data);

    const apiKey = process.env.RESEND_API_KEY || process.env.VITE_RESEND_API_KEY;
    console.log("[sendContactEmail] RESEND_API_KEY present:", !!apiKey, "length:", apiKey?.length);

    if (!apiKey) {
      console.error("[sendContactEmail] Missing RESEND_API_KEY in environment variables.");
      return { success: false, error: "Email service is not configured. Please add RESEND_API_KEY to Vercel." };
    }

    try {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);

      const fromEmail = process.env.RESEND_FROM_EMAIL || process.env.VITE_RESEND_FROM_EMAIL || "NSC Contact <onboarding@resend.dev>";
      const toEmail = process.env.RESEND_TO_EMAIL || process.env.VITE_RESEND_TO_EMAIL || "neutrinoscienceclub@gmail.com";
      console.log("[sendContactEmail] Sending email from:", fromEmail, "to:", toEmail);

      const response = await resend.emails.send({
        from: fromEmail,
        to: [toEmail],
        subject: data.subject || "New contact form message",
        html: `<p><strong>Name:</strong> ${data.name}</p><p><strong>Email:</strong> ${data.email}</p><p><strong>Message:</strong></p><p>${data.message.replace(/\n/g, "<br>")}</p>`,
      });

      console.log("[sendContactEmail] Resend response:", response);

      if (response.error) {
        console.error("[sendContactEmail] Resend API error:", response.error);
        return { success: false, error: `Email failed: ${response.error.message || "Unknown error"}` };
      }

      // Try inserting message to Supabase database (non-blocking if table or RLS is unconfigured)
      try {
        const supabaseClient = (process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_SERVICE_ROLE_KEY) 
          ? getSupabaseAdmin() 
          : supabase;

        const { error: submitError } = await supabaseClient
          .from("contact_messages")
          .insert([data]);

        if (submitError) {
          console.warn("[sendContactEmail] Supabase insert warning (email sent successfully):", submitError);
        }
      } catch (dbError) {
        console.warn("[sendContactEmail] Supabase insert failed silently (email sent successfully):", dbError);
      }

      console.log("[sendContactEmail] Success");
      return { success: true };
    } catch (error: any) {
      console.error("[sendContactEmail] Caught error:", error);
      return { success: false, error: error?.message || "Failed to send message. Please try again." };
    }
  });
