import { createServerFn } from "@tanstack/react-start";
import { supabase } from "./supabase";

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

    const apiKey = process.env.RESEND_API_KEY;
    console.log("[sendContactEmail] RESEND_API_KEY present:", !!apiKey, "length:", apiKey?.length);

    if (!apiKey) {
      console.error("[sendContactEmail] Missing RESEND_API_KEY");
      return { success: false, error: "Email service is not configured." };
    }

    try {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);

      const fromEmail = process.env.RESEND_FROM_EMAIL || "NSC Contact <onboarding@resend.dev>";
      console.log("[sendContactEmail] Sending email from:", fromEmail, "to: neutrinoscienceclub@gmail.com");

      const response = await resend.emails.send({
        from: fromEmail,
        to: ["neutrinoscienceclub@gmail.com"],
        subject: data.subject || "New contact form message",
        html: `<p><strong>Name:</strong> ${data.name}</p><p><strong>Email:</strong> ${data.email}</p><p><strong>Message:</strong></p><p>${data.message.replace(/\n/g, "<br>")}</p>`,
      });

      console.log("[sendContactEmail] Resend response:", response);

      if (response.error) {
        console.error("[sendContactEmail] Resend API error:", response.error);
        return { success: false, error: `Email failed: ${response.error.message || "Unknown error"}` };
      }

      const { error: submitError } = await supabase
        .from("contact_messages")
        .insert([data]);

      if (submitError) {
        console.error("[sendContactEmail] Supabase insert error:", submitError);
        return { success: false, error: "Message saved but email notification failed." };
      }

      console.log("[sendContactEmail] Success");
      return { success: true };
    } catch (error) {
      console.error("[sendContactEmail] Caught error:", error);
      return { success: false, error: "Failed to send message. Please try again." };
    }
  });
