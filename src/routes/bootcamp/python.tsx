import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  Clock, Users, FolderGit2, Award, HeartHandshake, Video,
  Calculator, GraduationCap, Lock, Terminal, Cpu, Code2, ChevronRight, Star, Quote, Check, ArrowRight,
  Mail, BookOpen, Target, Trophy, HelpCircle, FileText, Sparkles, Gamepad2, Calendar, Layers, ShieldCheck, Code, Gift, Zap
} from "lucide-react";
import { Blobs } from "@/components/site/Blobs";
import { Section, SectionHeading, Eyebrow, GlassCard, CTAButton } from "@/components/site/primitives";
import { useRevealAll } from "@/hooks/use-reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/bootcamp/python")({
  head: () => ({
    meta: [
      { title: "NSC Python Bootcamp — Launch Scholarship | Neutrino Science Club" },
      { name: "description", content: "Claim your Launch Scholarship for the Founding Batch of NSC Python Bootcamp. Regular ৳299 — FREE for the First 50 Students. 4 Weeks, 8 Live Classes, Projects & Certificate." },
      { property: "og:title", content: "NSC Python Bootcamp — Launch Scholarship" },
      { property: "og:description", content: "FREE for First 50 Students (Regular ৳299). 4 Weeks · 8 Live Classes · Milestone Projects · Python Arcade · Certificate." },
      { property: "og:url", content: "https://nsc-official.vercel.app/bootcamp/python" },
      { property: "og:image", content: "https://nsc-official.vercel.app/og-python-bootcamp.png" },
      { name: "twitter:title", content: "NSC Python Bootcamp — FREE for First 50 Students" },
      { name: "twitter:description", content: "4 Weeks · 8 Live Classes · Milestone Projects · Python Arcade · Certificate." },
      { name: "twitter:image", content: "https://nsc-official.vercel.app/og-python-bootcamp.png" },
    ],
  }),
  component: PythonBootcamp,
});

/* ==================== DATA ==================== */

const valueCards = [
  { icon: Video, title: "8 Live Interactive Classes", desc: "Step-by-step live guidance with real-time Q&A" },
  { icon: Layers, title: "2 Milestone Projects", desc: "Student Information System & Interactive Quiz Game" },
  { icon: Gamepad2, title: "Capstone Project", desc: "Build a complete multi-game Python Arcade" },
  { icon: Award, title: "Certificate of Completion", desc: "Official NSC certificate upon final showcase presentation" },
  { icon: HeartHandshake, title: "Mentor Support", desc: "Interactive feedback and dedicated 1-on-1 help" },
  { icon: Target, title: "Beginner Friendly", desc: "Designed specifically for kids & absolute starters" },
];

const weeklyCurriculum = [
  {
    weekNum: "Week 1",
    theme: "Python Fundamentals",
    desc: "Start your programming journey! Learn Python basics, print statements, variables, and user input.",
    classes: [
      {
        classNum: "Class 1",
        title: "Welcome to Programming",
        learn: [
          "What is Programming?",
          "What is Python?",
          "Installing Python & VS Code",
          "Hello World",
          "print()",
          "Comments",
        ],
        activities: [
          "Print your name in different ways",
          "Create an ASCII name banner",
          "Print a simple birthday card",
        ],
        challenge: "Create a fun 'About Me' program.",
      },
      {
        classNum: "Class 2",
        title: "Variables & User Input",
        learn: [
          "Variables",
          "input()",
          "Data Types",
          "Type Conversion",
        ],
        activities: [
          "Age Calculator",
          "Favorite Food Program",
          "BMI Calculator (simple)",
        ],
        challenge: "Create a 'Meet Me' interactive program.",
      },
    ],
  },
  {
    weekNum: "Week 2",
    theme: "Decision Making & Data",
    desc: "Master conditionals and data structures like strings, lists, and dictionaries to make smart programs.",
    classes: [
      {
        classNum: "Class 3",
        title: "Making Decisions",
        learn: [
          "Operators",
          "Comparison Operators",
          "Logical Operators",
          "If",
          "Else",
          "Nested If",
        ],
        activities: [
          "Even or Odd",
          "Grade Checker",
          "Password Checker",
        ],
        challenge: "Can You Vote?",
      },
      {
        classNum: "Class 4",
        title: "Working with Data",
        learn: [
          "Strings",
          "String Methods",
          "Lists",
          "Tuples (Introduction)",
          "Dictionaries (Introduction)",
        ],
        activities: [
          "Favorite Movies List",
          "Shopping List",
          "Student Dictionary",
        ],
      },
    ],
    milestone: {
      badge: "Milestone Project 1",
      title: "Student Information System",
      desc: "Students build a complete program that takes user input, stores student information, displays formatted output, and uses strings, lists, dictionaries, and conditions.",
    },
  },
  {
    weekNum: "Week 3",
    theme: "Repetition & Functions",
    desc: "Learn loops to automate repetitive tasks and functions to write reusable, clean Python code.",
    classes: [
      {
        classNum: "Class 5",
        title: "Loops",
        learn: [
          "for Loop",
          "while Loop",
          "range()",
          "Nested Loops",
        ],
        activities: [
          "Countdown",
          "Multiplication Table",
          "Number Patterns",
          "Star Patterns",
        ],
        challenge: "FizzBuzz (Kid Version)",
      },
      {
        classNum: "Class 6",
        title: "Functions",
        learn: [
          "Why Functions?",
          "Creating Functions",
          "Parameters",
          "Return Values",
          "Variable Scope (Basic)",
        ],
        activities: [
          "Greeting Function",
          "Area Calculator",
          "Simple Calculator",
        ],
      },
    ],
    milestone: {
      badge: "Milestone Project 2",
      title: "Interactive Quiz Game",
      desc: "Students build a full quiz game featuring multiple questions, score tracking, custom functions, loops, conditions, and lists.",
    },
  },
  {
    weekNum: "Week 4",
    theme: "Smarter Programs & Final Project",
    desc: "Explore modules, file saving, error handling, and build the ultimate Python Arcade capstone!",
    classes: [
      {
        classNum: "Class 7",
        title: "Making Programs Smarter",
        learn: [
          "random Module",
          "math Module",
          "Try–Except",
          "Basic File Handling (read() & write())",
        ],
        activities: [
          "Dice Roller",
          "Coin Toss",
          "Lucky Number Generator",
          "Save Notes to a File",
        ],
        challenge: "Random Password Generator",
      },
      {
        classNum: "Class 8",
        title: "Capstone Project & Final Showcase",
        learn: [
          "Building a Multi-Game Python Arcade",
          "Game Loop Architecture",
          "Presentation & Demo Preparation",
        ],
        activities: [
          "Dice Roller Game",
          "Rock Paper Scissors",
          "Number Guessing Game",
          "Quiz Game",
          "Hangman (Optional bonus)",
        ],
        challenge: "Present project in Live Showcase, receive feedback, celebrate & get certified!",
      },
    ],
    milestone: {
      badge: "Capstone Project & Showcase",
      title: "Python Arcade",
      desc: "Students combine everything learned to build a mini arcade featuring multiple games (Dice Roller, Rock Paper Scissors, Number Guessing, Quiz Game & Hangman). Concludes with a Live Demo Showcase, Celebration & Certificate Distribution!",
    },
  },
];

const projects = [
  { icon: GraduationCap, name: "Student Information System", desc: "Milestone 1 — Input, store & format student data with dicts, lists & conditions" },
  { icon: HelpCircle, name: "Interactive Quiz Game", desc: "Milestone 2 — Custom question engine with live score tracking & functions" },
  { icon: Gamepad2, name: "Python Arcade", desc: "Capstone — Suite of games including Dice Roller, Rock Paper Scissors & Number Guessing" },
  { icon: Lock, name: "Random Password Generator", desc: "Security tool generating safe random passwords using Python's random module" },
  { icon: Calculator, name: "Age & BMI Calculators", desc: "Interactive math tools converting user input and displaying formatted metrics" },
  { icon: FileText, name: "Notes & File Saver", desc: "File handling app to save and read personal notes directly on your computer" },
];

const instructors = [
  {
    name: "Didarul Azam Mahi",
    role: "Lead Instructor",
    experience: "3+ years in Python & STEM Education",
    bio: "Passionate developer and educator dedicated to making programming fun, intuitive, and engaging for kids.",
    linkedin: "#",
  },
  {
    name: "Shahin Alom",
    role: "Teaching Assistant",
    experience: "2+ years Python Development",
    bio: "Experienced assistant specializing in guiding young learners through hands-on coding challenges.",
    linkedin: "#",
  },
];

const timelineWeeks = [
  { week: "W1", title: "Python Fundamentals", desc: "Welcome to coding, variables, input & 'Meet Me' challenge (Classes 1-2)" },
  { week: "W2", title: "Decision Making & Data", desc: "If/Else, lists & Milestone 1: Student Information System (Classes 3-4)" },
  { week: "W3", title: "Loops & Functions", desc: "For/While loops, custom functions & Milestone 2: Quiz Game (Classes 5-6)" },
  { week: "W4", title: "Smarter Programs & Arcade", desc: "Random, Math, files & Capstone: Python Arcade (Classes 7-8)" },
  { week: "End", title: "Final Showcase", desc: "Live demo presentation, feedback, celebration & certificate distribution!" },
];

const testimonials = [
  { name: "Rafiq Hasan", role: "Parent of 12yo Student", quote: "My son built his first Quiz game in Week 3! The Founding Batch Launch Scholarship gave him the perfect opportunity to learn." },
  { name: "Tasnim Akter", role: "14yo Student", quote: "The Python Arcade capstone project was so fun! I created Rock Paper Scissors and Number Guessing by combining functions and loops." },
  { name: "Arif Rahman", role: "Parent of 10yo Student", quote: "Neutrino Science Club's instructors are super patient and clear. Grateful for the Launch Scholarship opportunity." },
];

const faqs = [
  { q: "What is the Launch Scholarship?", a: "To celebrate the official launch of Neutrino Science Club's Python Bootcamp, we are offering a 100% Launch Scholarship for the Founding Batch (First 50 Registered Students). The regular fee is ৳299." },
  { q: "Who is eligible for the First 50 Students offer?", a: "The Launch Scholarship is open to all kids and absolute beginners who register among the first 50 applicants. No prior coding experience is needed." },
  { q: "Is this bootcamp permanently free?", a: "No. This is a one-time promotional Launch Scholarship specifically for our Founding Batch to build and grow the NSC community. Future batches will carry the regular fee of ৳299." },
  { q: "How long is the bootcamp and when are classes?", a: "The bootcamp lasts 4 weeks, with 2 live interactive classes per week (total of 8 live sessions). Recordings are also uploaded within 24 hours." },
  { q: "What hardware or software is required?", a: "A desktop or laptop computer (Windows, Mac, or Linux) with an internet connection. We guide students step-by-step through installing Python and VS Code." },
  { q: "Will students receive a certificate?", a: "Yes! Every student who completes the bootcamp and presents their project during the Final Showcase will receive an official Neutrino Science Club Certificate of Completion." },
];

const pricingFeatures = [
  "8 Live Interactive Classes",
  "Milestone Project 1: Student Information System",
  "Milestone Project 2: Interactive Quiz Game",
  "Capstone Project: Python Arcade Suite",
  "Official Certificate of Completion",
  "1-on-1 Mentor Support & Feedback",
  "Recorded Sessions & Lifetime Material Access",
  "Founding Batch Community Access",
];

/* ==================== MAIN COMPONENT ==================== */

function PythonBootcamp() {
  const ref = useRevealAll<HTMLDivElement>();
  return (
    <div ref={ref}>
      <ScarcityBanner />
      <BootcampHero />
      <ValueSection />
      <CurriculumSection />
      <WhatYoullBuild />
      <MeetInstructor />
      <LearningTimeline />
      <TestimonialsSection />
      <FAQSection />
      <PricingSection />
      <FinalCTA />
    </div>
  );
}

/* ==================== SCARCITY BANNER ==================== */

function ScarcityBanner() {
  return (
    <div className="relative z-40 bg-secondary/80 border-b border-secondary pt-20 sm:pt-24 pb-3 px-4 text-center text-xs sm:text-sm font-medium">
      <div className="mx-auto max-w-7xl flex items-center justify-center gap-2 flex-wrap text-foreground">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-2.5 py-0.5 text-[11px] font-bold">
          <Zap className="h-3 w-3" /> Launch Scholarship
        </span>
        <span>
          Regular Fee <span className="line-through text-muted-foreground font-normal">৳299</span> • <strong>FREE for the First 50 Students Only</strong> (Founding Batch Offer)
        </span>
      </div>
    </div>
  );
}

/* ==================== HERO ==================== */

function BootcampHero() {
  return (
    <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden">
      <Blobs />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* Left — Content */}
          <div className="lg:col-span-7 animate-blur-in">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="uppercase tracking-[0.18em] font-semibold text-primary">Founding Batch • Launch Scholarship</span>
            </div>

            <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-balance">
              Learn Python Through{" "}
              <span className="text-gradient">Fun & Real Projects.</span>
            </h1>

            <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Master coding step-by-step — from your first <code className="text-secondary-foreground font-mono text-base px-2 py-0.5 rounded-md bg-secondary">print("Hello World")</code> to building your own interactive <strong className="text-foreground font-semibold">Python Arcade</strong>.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 rounded-full glass px-3.5 py-1.5 text-foreground/90 font-medium">
                <Clock className="h-4 w-4 text-primary" /> 4 Weeks (8 Live Classes)
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full glass px-3.5 py-1.5 text-foreground/90 font-medium">
                <Users className="h-4 w-4 text-primary" /> Beginner Friendly
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full glass px-3.5 py-1.5 text-foreground/90 font-medium">
                <Award className="h-4 w-4 text-primary" /> Official Certificate
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton href="https://forms.gle/UzsuiN3qGDn4Xuge7" target="_blank" rel="noopener noreferrer">
                Register Now
              </CTAButton>
              <a href="#curriculum" className="group inline-flex items-center gap-2 rounded-full bg-white/80 border border-black/5 px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-white transition-colors">
                <BookOpen className="h-4 w-4 text-primary" />
                View 4-Week Syllabus
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[Code2, Gamepad2, Star, Trophy].map((IconComponent, i) => (
                  <div key={i} className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground text-xs font-bold ring-2 ring-background">
                    <IconComponent className="h-4 w-4 text-primary-foreground" />
                  </div>
                ))}
              </div>
              <span>Join Founding Batch students building real programs</span>
            </div>
          </div>

          {/* Right — Premium Launch Scholarship Card */}
          <div className="lg:col-span-5 animate-blur-in" style={{ animationDelay: "200ms" }}>
            <HeroScholarshipCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroScholarshipCard() {
  return (
    <div className="relative rounded-3xl bg-white/90 border border-black/5 p-6 sm:p-8 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-secondary blur-3xl" />

      <div className="relative">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs uppercase tracking-widest font-semibold text-muted-foreground font-mono">NSC Python Bootcamp</span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
            <Sparkles className="h-3 w-3" /> Launch Scholarship
          </span>
        </div>

        <div className="mt-6 border-y border-black/5 py-5">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Regular Fee</span>
            <span className="text-lg font-medium text-muted-foreground line-through decoration-primary/70">৳299</span>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-cyan">Launch Scholarship</div>
              <div className="text-[11px] text-muted-foreground">First 50 Students Only</div>
            </div>
            <div className="text-right">
              <span className="font-display text-4xl sm:text-5xl font-bold text-gradient">FREE</span>
            </div>
          </div>
        </div>

        <div className="mt-5 space-y-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-primary shrink-0" />
            <span>4 Weeks • 8 Live Classes</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-primary shrink-0" />
            <span>2 Milestone Projects & Python Arcade</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-primary shrink-0" />
            <span>Official Completion Certificate</span>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-3">
          <CTAButton href="https://forms.gle/UzsuiN3qGDn4Xuge7" target="_blank" rel="noopener noreferrer" className="w-full justify-center text-sm py-3.5">
            Register Now
          </CTAButton>
          <a
            href="#curriculum"
            className="inline-flex items-center justify-center gap-2 rounded-full glass px-4 py-2.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors"
          >
            <BookOpen className="h-3.5 w-3.5" />
            View Curriculum
          </a>
        </div>

        <p className="mt-4 text-center text-[11px] text-muted-foreground">
          Early Bird Offer • Limited seats for the Founding Batch
        </p>
      </div>
    </div>
  );
}

/* ==================== VALUE SECTION ==================== */

function ValueSection() {
  return (
    <Section>
      <div data-reveal className="reveal">
        <SectionHeading
          eyebrow="What Students Receive"
          title={<>Everything included in your <span className="text-gradient">Launch Scholarship</span></>}
          description="A complete hands-on learning experience designed to build confidence, practical skills, and real projects."
          align="center"
        />
      </div>

      <div className="mt-14 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {valueCards.map(({ icon: I, title, desc }, i) => (
          <div key={title} data-reveal className="reveal" style={{ transitionDelay: `${i * 60}ms` }}>
            <GlassCard className="h-full p-6 hover:border-primary/40 transition-colors">
              <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-primary">
                <I className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold flex items-center gap-2">
                <Check className="h-4 w-4 text-primary shrink-0" />
                {title}
              </h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </GlassCard>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ==================== CURRICULUM SECTION ==================== */

function CurriculumSection() {
  return (
    <Section id="curriculum">
      <div data-reveal className="reveal">
        <SectionHeading
          eyebrow="4-Week Syllabus"
          title={<>8 Live Classes. <span className="text-gradient">Step-by-step curriculum.</span></>}
          description="Detailed breakdown of what kids learn, build, and challenge themselves with each week."
          align="center"
        />
      </div>

      <div className="mt-14 space-y-8 max-w-4xl mx-auto">
        {weeklyCurriculum.map((week, wIdx) => (
          <div
            key={week.weekNum}
            data-reveal
            className="reveal rounded-3xl glass-strong p-6 sm:p-8 border border-white/10"
            style={{ transitionDelay: `${wIdx * 100}ms` }}
          >
            {/* Week Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 border border-primary/40 px-3 py-1 text-xs font-semibold text-primary">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{week.weekNum}</span>
                </div>
                <h3 className="mt-2 font-display text-2xl font-bold">{week.theme}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{week.desc}</p>
              </div>
            </div>

            {/* Classes Grid */}
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {week.classes.map((cls) => (
                <div key={cls.classNum} className="rounded-2xl glass p-5 flex flex-col justify-between border border-white/5 hover:border-white/10 transition-colors">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-cyan">
                        <BookOpen className="h-3.5 w-3.5" />
                        {cls.classNum}
                      </span>
                    </div>
                    <h4 className="mt-2 font-display text-lg font-semibold">{cls.title}</h4>

                    {/* Learn */}
                    <div className="mt-4">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground/90 uppercase tracking-wider mb-2">
                        <GraduationCap className="h-3.5 w-3.5 text-primary" />
                        <span>Learn</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-muted-foreground">
                        {cls.learn.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <ChevronRight className="h-3 w-3 text-primary shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Hands-on Activities */}
                    <div className="mt-4">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground/90 uppercase tracking-wider mb-2">
                        <Terminal className="h-3.5 w-3.5 text-cyan" />
                        <span>Hands-on Activities</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {cls.activities.map((act) => (
                          <span key={act} className="inline-flex items-center gap-1 rounded-md glass px-2 py-1 text-[11px] text-foreground/80">
                            <Code className="h-2.5 w-2.5 text-cyan" /> {act}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Challenge if present */}
                  {cls.challenge && (
                    <div className="mt-5 rounded-xl bg-primary/10 border border-primary/20 p-3 text-xs">
                      <div className="flex items-center gap-1 font-semibold text-primary mb-0.5">
                        <Target className="h-3.5 w-3.5" />
                        <span>Coding Challenge</span>
                      </div>
                      <span className="text-foreground/90">{cls.challenge}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Milestone Card if present */}
            {week.milestone && (
              <div className="mt-6 rounded-2xl bg-primary/15 border border-primary/40 p-6">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    <Layers className="h-3.5 w-3.5" />
                    {week.milestone.badge}
                  </span>
                </div>
                <h4 className="mt-3 font-display text-xl font-bold">{week.milestone.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{week.milestone.desc}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ==================== WHAT YOU'LL BUILD ==================== */

function WhatYoullBuild() {
  return (
    <Section>
      <div data-reveal className="reveal">
        <SectionHeading
          eyebrow="Student Showcase"
          title={<>Hands-on <span className="text-gradient">projects & games</span></>}
          description="Students transform concepts into real working Python programs they can show off to family and friends!"
          align="center"
        />
      </div>

      <div className="mt-14 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {projects.map(({ icon: I, name, desc }, i) => (
          <div key={name} data-reveal className="reveal" style={{ transitionDelay: `${i * 60}ms` }}>
            <GlassCard className="h-full p-6 text-left hover:border-primary/40 transition-colors">
              <div className="mb-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-primary">
                <I className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg">{name}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </GlassCard>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ==================== MEET YOUR INSTRUCTOR ==================== */

function MeetInstructor() {
  const skillBadges = [
    { label: "Python Programming", icon: Code2 },
    { label: "AI & Software Development", icon: Cpu },
    { label: "Project-Based Learning", icon: Layers },
    { label: "President, Neutrino Science Club", icon: GraduationCap },
    { label: "Interactive Teaching", icon: Sparkles },
  ];

  return (
    <Section id="instructor">
      <div data-reveal className="reveal">
        <SectionHeading
          eyebrow="Trust & Guidance"
          title={<>Meet Your <span className="text-gradient">Instructor</span></>}
          description="Dedicated to creating a supportive, interactive environment where every student thrives."
          align="center"
        />
      </div>

      <div className="mt-14 max-w-5xl mx-auto" data-reveal>
        <div className="relative overflow-hidden rounded-[32px] glass-strong p-8 sm:p-12 border border-primary/20">
          {/* Background glow accents */}
          <div className="pointer-events-none absolute -top-32 -left-32 h-[350px] w-[350px] rounded-full opacity-20 blur-3xl bg-primary" />
          <div className="pointer-events-none absolute -bottom-32 -right-32 h-[350px] w-[350px] rounded-full opacity-20 blur-3xl bg-cyan" />

          <div className="grid gap-10 lg:grid-cols-12 items-center">
            {/* Left Column: Portrait & Details */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative group">
                <div className="absolute -inset-1.5 rounded-3xl bg-primary opacity-30 blur-lg group-hover:opacity-50 transition duration-500" />
                <img
                  src="/instructor_mahi.png"
                  alt="Didarul Azam Mahi - Lead Instructor"
                  className="relative h-72 w-72 object-cover object-center rounded-2xl border border-white/10"
                />
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold">Didarul Azam Mahi</h3>

              <div className="mt-2 flex flex-col items-center gap-1 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5 text-primary font-medium">
                  <GraduationCap className="h-3.5 w-3.5" /> President, Neutrino Science Club
                </span>
                <span>AI & Software Developer • Technology Educator</span>
              </div>
            </div>

            {/* Right Column: Bio, Skills & Promise */}
            <div className="lg:col-span-7 space-y-6">
              {/* About text */}
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p className="text-foreground/90 font-medium text-base">
                  Hi! I'm Didarul Azam Mahi, President of the Neutrino Science Club.
                </p>
                <p>
                  I enjoy building AI applications and software, but one of my biggest passions is helping young students discover programming through fun, interactive, and project-based learning.
                </p>
                <p>
                  I designed this bootcamp specifically for beginners so students learn by building real projects instead of memorizing syntax. My goal is to help them develop confidence, logical thinking, creativity, and problem-solving skills.
                </p>
              </div>

              {/* Modern Skill Badges */}
              <div className="pt-2">
                <div className="text-xs uppercase tracking-wider font-semibold text-foreground/80 mb-3">
                  Highlights & Focus Areas
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillBadges.map(({ label, icon: IconComponent }) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-1.5 rounded-lg glass px-3 py-1.5 text-xs font-medium text-foreground/90 border border-white/10 hover:border-primary/40 transition-colors"
                    >
                      <IconComponent className="h-3.5 w-3.5 text-primary" />
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Personal Promise Card */}
              <div className="mt-6 rounded-2xl bg-primary/10 border border-primary/30 p-5 sm:p-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                  <HeartHandshake className="h-4 w-4" />
                  <span>My Promise to Every Student</span>
                </div>
                <p className="mt-3 text-sm text-foreground/90 leading-relaxed italic">
                  "Every student deserves a supportive learning environment. I will guide each learner step by step, encourage questions, and ensure no one feels left behind. By the end of this bootcamp, students will have built real Python programs and gained the confidence to continue learning."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ==================== LEARNING TIMELINE ==================== */

function LearningTimeline() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Section>
      <div data-reveal className="reveal">
        <SectionHeading
          eyebrow="Learning Journey"
          title={<>Your <span className="text-gradient">4-week roadmap</span></>}
          description="Clear progression from first line of code to python arcade & showcase."
          align="center"
        />
      </div>

      <div ref={scrollRef} className="mt-14 overflow-x-auto pb-4 scrollbar-hide">
        <div className="relative flex items-start gap-0 min-w-[850px] px-4">
          <div className="absolute top-8 left-8 right-8 h-0.5 bg-white/10">
            <div
              className="h-full bg-primary origin-left transition-transform duration-[2s] ease-out"
              style={{ transform: visible ? "scaleX(1)" : "scaleX(0)" }}
            />
          </div>

          {timelineWeeks.map((item, i) => (
            <div
              key={item.week}
              className="relative flex-1 text-center px-3"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${i * 150}ms, transform 0.6s ease ${i * 150}ms`,
              }}
            >
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-primary text-primary-foreground font-bold text-sm">
                {item.week}
              </div>
              <h3 className="mt-4 font-display font-semibold text-sm">{item.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ==================== TESTIMONIALS ==================== */

function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section>
      <div data-reveal className="reveal">
        <SectionHeading
          eyebrow="Reviews & Feedback"
          title="What kids and parents say"
          align="center"
        />
      </div>

      <div className="mt-14 max-w-3xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl" data-reveal>
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div key={t.name} className="w-full shrink-0 px-2">
                <GlassCard hover={false} className="p-8 sm:p-10">
                  <Quote className="h-8 w-8 text-primary/60" />
                  <p className="mt-5 text-lg text-foreground/90 leading-relaxed italic">"{t.quote}"</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground font-bold">
                      {t.name.split(" ").map((s) => s[0]).slice(0, 2).join("")}
                    </div>
                    <div>
                      <div className="font-medium">{t.name}</div>
                      <div className="text-sm text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                  <div className="mt-3 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "w-8 bg-primary" : "w-2 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ==================== FAQ ==================== */

function FAQSection() {
  return (
    <Section>
      <div data-reveal className="reveal">
        <SectionHeading
          eyebrow="FAQ"
          title={<>Frequently asked <span className="text-gradient">questions</span></>}
          align="center"
        />
      </div>

      <div className="mt-14 mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.q}
              value={`faq-${i}`}
              className="rounded-2xl glass border-none overflow-hidden"
              data-reveal
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-white/[0.03] transition-colors text-left font-display font-semibold">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-muted-foreground leading-relaxed text-sm">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}

/* ==================== PRICING ==================== */

function PricingSection() {
  return (
    <Section>
      <div data-reveal className="reveal">
        <SectionHeading
          eyebrow="Founding Batch Scholarship"
          title={<>Claim your <span className="text-gradient">Launch Scholarship</span></>}
          description="To celebrate our program launch, the first 50 registered students receive 100% OFF for the Founding Batch."
          align="center"
        />
      </div>

      <div className="mt-14 mx-auto max-w-lg" data-reveal>
        <div className="relative overflow-hidden rounded-[28px] glass-strong p-px">
          <div className="relative rounded-[27px] bg-card/80 p-8 sm:p-10">


            <div className="relative">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  <span className="uppercase tracking-[0.18em] text-primary font-semibold">Founding Batch Offer</span>
                </div>

                <div className="mt-6 flex items-center justify-center gap-3">
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground uppercase font-medium">Regular Price</div>
                    <div className="text-lg font-bold text-muted-foreground line-through decoration-primary/70">৳299</div>
                  </div>
                  <div className="h-8 w-px bg-white/10" />
                  <div className="text-left">
                    <div className="text-xs font-bold uppercase text-cyan tracking-wider">Launch Scholarship</div>
                    <div className="text-xs font-semibold text-green-400">100% OFF</div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10">
                  <div className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Today You Pay</div>
                  <div className="mt-1 font-display text-5xl sm:text-6xl font-bold text-gradient">
                    FREE
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-primary/10 border border-primary/20 p-3 text-center text-xs text-primary font-medium">
                This scholarship is available only for the first 50 registrations.
              </div>

              <ul className="mt-6 space-y-3">
                {pricingFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <div className="grid h-5 w-5 place-items-center rounded-full bg-primary shrink-0">
                      <Check className="h-3 w-3 text-primary-foreground" />
                    </div>
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href="https://forms.gle/UzsuiN3qGDn4Xuge7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground hover:scale-[1.02] transition-transform"
                >
                  Register Now — Claim Launch Scholarship
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-4 text-center text-xs text-muted-foreground">Limited batch size • Early bird scholarship for Founding Batch</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ==================== FINAL CTA ==================== */

function FinalCTA() {
  return (
    <Section>
      <div data-reveal className="reveal relative overflow-hidden rounded-[32px] glass-strong p-10 sm:p-16 text-center">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />

        <div className="relative mx-auto max-w-2xl">
          <div className="flex justify-center">
            <Eyebrow>Early Bird Launch Scholarship</Eyebrow>
          </div>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl font-semibold tracking-tight text-balance">
            Join the Founding Batch of{" "}
            <span className="text-gradient">Python Coders.</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Claim your 100% Launch Scholarship (Regular ৳299). First 50 students learn Python fundamentals, build milestone projects, and launch their own Python Arcade!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="https://forms.gle/UzsuiN3qGDn4Xuge7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:scale-[1.03] transition-transform"
            >
              Register Now <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              <Mail className="h-4 w-4" />
              Ask a Question
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
