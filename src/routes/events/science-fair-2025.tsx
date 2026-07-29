import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  CalendarDays, MapPin, ArrowLeft, Trophy, Users, Award, Sparkles,
  X, ChevronLeft, ChevronRight, Maximize2, ImageIcon
} from "lucide-react";
import { PageHero, Section, GlassCard, Eyebrow } from "@/components/site/primitives";
import { useRevealAll } from "@/hooks/use-reveal";

export const Route = createFileRoute("/events/science-fair-2025")({
  head: () => ({
    meta: [
      { title: "Junior Science Fest & Olympiad 2025 — Neutrino Science Club" },
      { name: "description", content: "Recap & highlights of Junior Science Fest & Olympiad 2025 jointly organized by Neutrino Science Club (NSC) and Fulkuri Ashor Gazipur City Branch." },
      { property: "og:title", content: "Junior Science Fest & Olympiad 2025 — Neutrino Science Club" },
      { property: "og:description", content: "43 Science projects, science quiz competition, and prize distribution." },
      { property: "og:url", content: "https://nsc-official.vercel.app/events/science-fair-2025" },
      { property: "og:image", content: "https://nsc-official.vercel.app/images/event1.jpg" },
      { name: "twitter:title", content: "Junior Science Fest & Olympiad 2025" },
      { name: "twitter:description", content: "Recap & highlights of Science Fair 2025 hosted by NSC & Fulkuri Ashor." },
      { name: "twitter:image", content: "https://nsc-official.vercel.app/images/event1.jpg" },
    ]
  }),
  component: ScienceFair2025,
});

const eventImages = [
  { src: "/images/event1.jpg", title: "জুনিয়র সায়েন্স ফেস্ট ও অলিম্পিয়াড ২০২৫ — প্রজেক্ট প্রদর্শনী" },
  { src: "/images/event2.jpg", title: "জুনিয়র সায়েন্স ফেস্ট ও অলিম্পিয়াড ২০২৫ — শিক্ষার্থীদের প্রজেক্ট" },
  { src: "/images/event3.jpg", title: "জুনিয়র সায়েন্স ফেস্ট ও অলিম্পিয়াড ২০২৫ — অতিথিবৃন্দ" },
  { src: "/images/event4.jpg", title: "জুনিয়র সায়েন্স ফেস্ট ও অলিম্পিয়াড ২০২৫ — পুরস্কার বিতরণী" },
  { src: "/images/event5.jpg", title: "জুনিয়র সায়েন্স ফেস্ট ও অলিম্পিয়াড ২০২৫ — ফটোসেশন" },
];

const highlights = [
  { icon: Trophy, label: "Projects Displayed", value: "৪৩টি বিজ্ঞানভিত্তিক প্রজেক্ট" },
  { icon: Users, label: "Participants", value: "অনূর্ধ্ব ১০ম শ্রেণির শিক্ষার্থী" },
  { icon: Award, label: "Prize Money & Awards", value: "৳৩,০০০ প্রাইজমানি + সম্মাননা" },
  { icon: Sparkles, label: "Special Event", value: "বিজ্ঞান কুইজ ও অলিম্পিয়াড" },
];

function ScienceFair2025() {
  const ref = useRevealAll<HTMLDivElement>();
  const [selectedImgIndex, setSelectedImgIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImgIndex(index);
  const closeLightbox = () => setSelectedImgIndex(null);
  const nextImage = () => setSelectedImgIndex((prev) => (prev !== null ? (prev + 1) % eventImages.length : null));
  const prevImage = () => setSelectedImgIndex((prev) => (prev !== null ? (prev - 1 + eventImages.length) % eventImages.length : null));

  return (
    <div ref={ref}>
      <PageHero
        eyebrow="Past Event Recap · 2025"
        title={<>Junior <span className="text-gradient">Science Fest & Olympiad</span> 2025</>}
        description="জুনিয়র সায়েন্স ফেস্ট ও অলিম্পিয়াড ২০২৫ — যৌথ আয়োজনে: নিউট্রিনো সায়েন্স ক্লাব (NSC) ও ফুলকুঁড়ি আসর, গাজীপুর মহানগরী শাখা।"
      >
        <Link
          to="/events"
          className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-black/10 px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to All Events
        </Link>
      </PageHero>

      {/* Key Details Bar */}
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <GlassCard key={h.label} className="p-6">
              <div className="inline-grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary mb-3">
                <h.icon className="h-5 w-5" />
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{h.label}</div>
              <div className="mt-1 text-base font-bold text-foreground">{h.value}</div>
            </GlassCard>
          ))}
        </div>

        {/* Photo Gallery Section */}
        <div className="mt-6">
          <GlassCard className="p-5 sm:p-7 border border-primary/20 shadow-lg" data-reveal>
            <div className="flex items-center justify-between mb-4">
              <div>
                <Eyebrow>Event Gallery</Eyebrow>
              </div>
              <span className="text-xs text-muted-foreground hidden sm:inline-block">Click photo to view full size</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {eventImages.map((img, idx) => (
                <div
                  key={img.src}
                  onClick={() => openLightbox(idx)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-black/10 bg-secondary/40 aspect-[4/3] hover-lift shadow-sm"
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="h-6 w-6 text-white drop-shadow-md" />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Full Bengali Description Article */}
        <div className="mt-6 max-w-4xl mx-auto">
          <GlassCard className="p-6 sm:p-10 border border-black/10 shadow-lg" data-reveal>
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-5 mb-6">
              <div>
                <Eyebrow>Official Event Recap</Eyebrow>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-foreground">
                  জুনিয়র সায়েন্স ফেস্ট ও অলিম্পিয়াড ২০২৫
                </h2>
              </div>
              <div className="space-y-1 text-xs font-medium text-muted-foreground sm:text-right">
                <div className="flex items-center gap-1.5 sm:justify-end text-primary">
                  <CalendarDays className="h-4 w-4" /> ২৪ অক্টোবর ২০২৫ (শুক্রবার)
                </div>
                <div className="flex items-center gap-1.5 sm:justify-end">
                  <MapPin className="h-4 w-4" /> টঙ্গী পাইলট স্কুল অ্যান্ড গার্লস কলেজ
                </div>
              </div>
            </div>

            <article className="prose prose-slate max-w-none space-y-6 text-foreground/90 leading-relaxed text-base sm:text-lg">
              <p className="font-bold text-lg sm:text-xl text-foreground border-l-4 border-primary pl-5 py-2 bg-primary/5 rounded-r-xl">
                নিউট্রিনো সায়েন্স ক্লাব (NSC) ও জাতীয় শিশুকিশোর সংগঠন ফুলকুঁড়ি আসর, গাজীপুর মহানগরী শাখার যৌথ আয়োজনে অনুষ্ঠিত হলো "জুনিয়র সায়েন্স ফেস্ট ও অলিম্পিয়াড ২০২৫"।
              </p>

              <p>
                জাতীয় শিশুকিশোর সংগঠন ফুলকুঁড়ি আসরের ৫১তম প্রতিষ্ঠাবার্ষিকী উপলক্ষে নিউট্রিনো সায়েন্স ক্লাব (NSC) এবং ফুলকুঁড়ি আসর, গাজীপুর মহানগরী শাখার যৌথ উদ্যোগে আজ ২৪ অক্টোবর (শুক্রবার) টঙ্গী পাইলট স্কুল অ্যান্ড গার্লস কলেজ প্রাঙ্গণে অনূর্ধ্ব ১০ম শ্রেণির শিক্ষার্থীদের অংশগ্রহণে অনুষ্ঠিত হলো <strong>"জুনিয়র সায়েন্স ফেস্ট ও অলিম্পিয়াড ২০২৫"</strong>।
              </p>

              <p>
                অনুষ্ঠানে গাজীপুরের বিভিন্ন সরকারি ও বেসরকারি শিক্ষা প্রতিষ্ঠানের শিক্ষার্থীরা মোট <strong>৪৩টি বিজ্ঞানভিত্তিক প্রজেক্ট</strong> নিয়ে অংশগ্রহণ করে। দিনব্যাপী প্রদর্শনী ও বিচারকার্যের মাধ্যমে শিক্ষার্থীরা তাদের উদ্ভাবনী চিন্তা, বৈজ্ঞানিক দক্ষতা এবং সৃজনশীলতা উপস্থাপন করে।
              </p>

              <p>
                অনুষ্ঠানে প্রধান অতিথি হিসেবে উপস্থিত ছিলেন বাংলাদেশ শিশুকল্যাণ পরিষদের কাউন্সিলর ও ফুলকুঁড়ি আসরের প্রধান পরিচালক <strong>মুজাহিদুল ইসলাম</strong>। বিশেষ অতিথি হিসেবে উপস্থিত ছিলেন গাজীপুর মহানগরীর প্রাক্তন পরিচালক <strong>এম. জাকারিয়া হোসেন</strong>, বাংলাদেশ সুপ্রিম কোর্টের আইনজীবী <strong>অ্যাডভোকেট লুৎফর রহমান প্রধান</strong>, কেন্দ্রীয় অর্থ সম্পাদক <strong>মোজাম্মেল হক</strong>সহ অন্যান্য সম্মানিত অতিথিবৃন্দ।
              </p>

              <p>
                অনুষ্ঠান পরিচালনার দায়িত্বে ছিলেন গাজীপুর মহানগরীর পরিচালক <strong>আবুল আলা</strong> এবং সার্বিক ব্যবস্থাপনায় ছিলেন শাখা সহকারী পরিচালক <strong>অগ্র. ফয়সাল আব্দুল্লাহ ফাহিম</strong>।
              </p>

              <p>
                বিচারক হিসেবে উপস্থিত ছিলেন <strong>মো. কাউসার</strong> (লেকচারার, ফার্মেসি বিভাগ, মানারাত আন্তর্জাতিক বিশ্ববিদ্যালয়, ঢাকা) এবং <strong>সাইফুল ইসলাম</strong>।
              </p>

              <p>
                সকাল ৯টা থেকে ১১টা ৩০ মিনিট পর্যন্ত প্রজেক্ট প্রদর্শনী ও বিচারকার্য অনুষ্ঠিত হয়। পাশাপাশি অনূর্ধ্ব ১০ম শ্রেণির শিক্ষার্থী এবং দর্শনার্থীদের জন্য ছিল বিজ্ঞান কুইজের আয়োজন। পরে দুপুর ১২টা ৩০ মিনিটে স্কুলের হলরুমে অনুষ্ঠিত হয় পুরস্কার বিতরণী অনুষ্ঠান।
              </p>

              <p>
                অনুষ্ঠানে বিজ্ঞান কুইজে বিজয়ী ৫ জন শিক্ষার্থীকে এবং চ্যাম্পিয়ন প্রজেক্টকে <strong>৩,০০০ টাকা</strong> প্রাইজমানিসহ সেরা ৩টি প্রজেক্টকে সম্মাননা ও পুরস্কার প্রদান করা হয়।
              </p>

              <p className="italic text-muted-foreground bg-secondary/50 p-6 rounded-2xl border border-black/5">
                নিউট্রিনো সায়েন্স ক্লাব (NSC) এবং ফুলকুঁড়ি আসর, গাজীপুর মহানগরী শাখার এই যৌথ আয়োজন শিক্ষার্থীদের বিজ্ঞানমনস্কতা, উদ্ভাবনী চিন্তাশক্তি এবং গবেষণার প্রতি আগ্রহ বৃদ্ধিতে গুরুত্বপূর্ণ ভূমিকা রাখবে বলে আয়োজকরা আশাবাদ ব্যক্ত করেন।
              </p>
            </article>

            <div className="mt-10 pt-6 border-t border-black/10 flex justify-between items-center">
              <Link
                to="/events"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:scale-[1.02] transition-all"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Events
              </Link>
            </div>
          </GlassCard>
        </div>
      </Section>

      {/* Lightbox Modal for Event Images */}
      {selectedImgIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-fade-in">
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
            aria-label="Close image viewer"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 z-10 grid h-12 w-12 place-items-center rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          <div className="max-w-4xl max-h-[85vh] p-2 flex flex-col items-center">
            <img
              src={eventImages[selectedImgIndex].src}
              alt={eventImages[selectedImgIndex].title}
              className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl"
            />
            <p className="mt-4 text-center text-sm font-medium text-white/90">
              {eventImages[selectedImgIndex].title} ({selectedImgIndex + 1} / {eventImages.length})
            </p>
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 z-10 grid h-12 w-12 place-items-center rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>
      )}
    </div>
  );
}
