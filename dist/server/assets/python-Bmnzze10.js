import { t as cn } from "./utils-C_uf36nf.js";
import { i as GlassCard, n as CTAButton, o as Section, r as Eyebrow, s as SectionHeading, t as useRevealAll } from "./use-reveal-b167KTr4.js";
import { t as Blobs } from "./Blobs-Brdd1bAk.js";
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Award, BookOpen, Calculator, Calendar, Check, ChevronDown, ChevronRight, Clock, Code, Code2, Cpu, FileText, Gamepad2, GraduationCap, HeartHandshake, HelpCircle, Layers, Lock, Mail, Quote, Sparkles, Star, Target, Terminal, Trophy, Users, Video, Zap } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
//#region src/components/ui/accordion.tsx
var Accordion = AccordionPrimitive.Root;
var AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, {
	className: "flex",
	children: /* @__PURE__ */ jsxs(AccordionPrimitive.Trigger, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Content, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ jsx("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
//#endregion
//#region src/routes/bootcamp/python.tsx?tsr-split=component
var valueCards = [
	{
		icon: Video,
		title: "8 Live Interactive Classes",
		desc: "Step-by-step live guidance with real-time Q&A"
	},
	{
		icon: Layers,
		title: "2 Milestone Projects",
		desc: "Student Information System & Interactive Quiz Game"
	},
	{
		icon: Gamepad2,
		title: "Capstone Project",
		desc: "Build a complete multi-game Python Arcade"
	},
	{
		icon: Award,
		title: "Certificate of Completion",
		desc: "Official NSC certificate upon final showcase presentation"
	},
	{
		icon: HeartHandshake,
		title: "Mentor Support",
		desc: "Interactive feedback and dedicated 1-on-1 help"
	},
	{
		icon: Target,
		title: "Beginner Friendly",
		desc: "Designed specifically for kids & absolute starters"
	}
];
var weeklyCurriculum = [
	{
		weekNum: "Week 1",
		theme: "Python Fundamentals",
		desc: "Start your programming journey! Learn Python basics, print statements, variables, and user input.",
		classes: [{
			classNum: "Class 1",
			title: "Welcome to Programming",
			learn: [
				"What is Programming?",
				"What is Python?",
				"Installing Python & VS Code",
				"Hello World",
				"print()",
				"Comments"
			],
			activities: [
				"Print your name in different ways",
				"Create an ASCII name banner",
				"Print a simple birthday card"
			],
			challenge: "Create a fun 'About Me' program."
		}, {
			classNum: "Class 2",
			title: "Variables & User Input",
			learn: [
				"Variables",
				"input()",
				"Data Types",
				"Type Conversion"
			],
			activities: [
				"Age Calculator",
				"Favorite Food Program",
				"BMI Calculator (simple)"
			],
			challenge: "Create a 'Meet Me' interactive program."
		}]
	},
	{
		weekNum: "Week 2",
		theme: "Decision Making & Data",
		desc: "Master conditionals and data structures like strings, lists, and dictionaries to make smart programs.",
		classes: [{
			classNum: "Class 3",
			title: "Making Decisions",
			learn: [
				"Operators",
				"Comparison Operators",
				"Logical Operators",
				"If",
				"Else",
				"Nested If"
			],
			activities: [
				"Even or Odd",
				"Grade Checker",
				"Password Checker"
			],
			challenge: "Can You Vote?"
		}, {
			classNum: "Class 4",
			title: "Working with Data",
			learn: [
				"Strings",
				"String Methods",
				"Lists",
				"Tuples (Introduction)",
				"Dictionaries (Introduction)"
			],
			activities: [
				"Favorite Movies List",
				"Shopping List",
				"Student Dictionary"
			]
		}],
		milestone: {
			badge: "Milestone Project 1",
			title: "Student Information System",
			desc: "Students build a complete program that takes user input, stores student information, displays formatted output, and uses strings, lists, dictionaries, and conditions."
		}
	},
	{
		weekNum: "Week 3",
		theme: "Repetition & Functions",
		desc: "Learn loops to automate repetitive tasks and functions to write reusable, clean Python code.",
		classes: [{
			classNum: "Class 5",
			title: "Loops",
			learn: [
				"for Loop",
				"while Loop",
				"range()",
				"Nested Loops"
			],
			activities: [
				"Countdown",
				"Multiplication Table",
				"Number Patterns",
				"Star Patterns"
			],
			challenge: "FizzBuzz (Kid Version)"
		}, {
			classNum: "Class 6",
			title: "Functions",
			learn: [
				"Why Functions?",
				"Creating Functions",
				"Parameters",
				"Return Values",
				"Variable Scope (Basic)"
			],
			activities: [
				"Greeting Function",
				"Area Calculator",
				"Simple Calculator"
			]
		}],
		milestone: {
			badge: "Milestone Project 2",
			title: "Interactive Quiz Game",
			desc: "Students build a full quiz game featuring multiple questions, score tracking, custom functions, loops, conditions, and lists."
		}
	},
	{
		weekNum: "Week 4",
		theme: "Smarter Programs & Final Project",
		desc: "Explore modules, file saving, error handling, and build the ultimate Python Arcade capstone!",
		classes: [{
			classNum: "Class 7",
			title: "Making Programs Smarter",
			learn: [
				"random Module",
				"math Module",
				"Try–Except",
				"Basic File Handling (read() & write())"
			],
			activities: [
				"Dice Roller",
				"Coin Toss",
				"Lucky Number Generator",
				"Save Notes to a File"
			],
			challenge: "Random Password Generator"
		}, {
			classNum: "Class 8",
			title: "Capstone Project & Final Showcase",
			learn: [
				"Building a Multi-Game Python Arcade",
				"Game Loop Architecture",
				"Presentation & Demo Preparation"
			],
			activities: [
				"Dice Roller Game",
				"Rock Paper Scissors",
				"Number Guessing Game",
				"Quiz Game",
				"Hangman (Optional bonus)"
			],
			challenge: "Present project in Live Showcase, receive feedback, celebrate & get certified!"
		}],
		milestone: {
			badge: "Capstone Project & Showcase",
			title: "Python Arcade",
			desc: "Students combine everything learned to build a mini arcade featuring multiple games (Dice Roller, Rock Paper Scissors, Number Guessing, Quiz Game & Hangman). Concludes with a Live Demo Showcase, Celebration & Certificate Distribution!"
		}
	}
];
var projects = [
	{
		icon: GraduationCap,
		name: "Student Information System",
		desc: "Milestone 1 — Input, store & format student data with dicts, lists & conditions"
	},
	{
		icon: HelpCircle,
		name: "Interactive Quiz Game",
		desc: "Milestone 2 — Custom question engine with live score tracking & functions"
	},
	{
		icon: Gamepad2,
		name: "Python Arcade",
		desc: "Capstone — Suite of games including Dice Roller, Rock Paper Scissors & Number Guessing"
	},
	{
		icon: Lock,
		name: "Random Password Generator",
		desc: "Security tool generating safe random passwords using Python's random module"
	},
	{
		icon: Calculator,
		name: "Age & BMI Calculators",
		desc: "Interactive math tools converting user input and displaying formatted metrics"
	},
	{
		icon: FileText,
		name: "Notes & File Saver",
		desc: "File handling app to save and read personal notes directly on your computer"
	}
];
var timelineWeeks = [
	{
		week: "W1",
		title: "Python Fundamentals",
		desc: "Welcome to coding, variables, input & 'Meet Me' challenge (Classes 1-2)"
	},
	{
		week: "W2",
		title: "Decision Making & Data",
		desc: "If/Else, lists & Milestone 1: Student Information System (Classes 3-4)"
	},
	{
		week: "W3",
		title: "Loops & Functions",
		desc: "For/While loops, custom functions & Milestone 2: Quiz Game (Classes 5-6)"
	},
	{
		week: "W4",
		title: "Smarter Programs & Arcade",
		desc: "Random, Math, files & Capstone: Python Arcade (Classes 7-8)"
	},
	{
		week: "End",
		title: "Final Showcase",
		desc: "Live demo presentation, feedback, celebration & certificate distribution!"
	}
];
var testimonials = [
	{
		name: "Rafiq Hasan",
		role: "Parent of 12yo Student",
		quote: "My son built his first Quiz game in Week 3! The Founding Batch Launch Scholarship gave him the perfect opportunity to learn."
	},
	{
		name: "Tasnim Akter",
		role: "14yo Student",
		quote: "The Python Arcade capstone project was so fun! I created Rock Paper Scissors and Number Guessing by combining functions and loops."
	},
	{
		name: "Arif Rahman",
		role: "Parent of 10yo Student",
		quote: "Neutrino Science Club's instructors are super patient and clear. Grateful for the Launch Scholarship opportunity."
	}
];
var faqs = [
	{
		q: "What is the Launch Scholarship?",
		a: "To celebrate the official launch of Neutrino Science Club's Python Bootcamp, we are offering a 100% Launch Scholarship for the Founding Batch (First 50 Registered Students). The regular fee is ৳299."
	},
	{
		q: "Who is eligible for the First 50 Students offer?",
		a: "The Launch Scholarship is open to all kids and absolute beginners who register among the first 50 applicants. No prior coding experience is needed."
	},
	{
		q: "Is this bootcamp permanently free?",
		a: "No. This is a one-time promotional Launch Scholarship specifically for our Founding Batch to build and grow the NSC community. Future batches will carry the regular fee of ৳299."
	},
	{
		q: "How long is the bootcamp and when are classes?",
		a: "The bootcamp lasts 4 weeks, with 2 live interactive classes per week (total of 8 live sessions). Recordings are also uploaded within 24 hours."
	},
	{
		q: "What hardware or software is required?",
		a: "A desktop or laptop computer (Windows, Mac, or Linux) with an internet connection. We guide students step-by-step through installing Python and VS Code."
	},
	{
		q: "Will students receive a certificate?",
		a: "Yes! Every student who completes the bootcamp and presents their project during the Final Showcase will receive an official Neutrino Science Club Certificate of Completion."
	}
];
var pricingFeatures = [
	"8 Live Interactive Classes",
	"Milestone Project 1: Student Information System",
	"Milestone Project 2: Interactive Quiz Game",
	"Capstone Project: Python Arcade Suite",
	"Official Certificate of Completion",
	"1-on-1 Mentor Support & Feedback",
	"Recorded Sessions & Lifetime Material Access",
	"Founding Batch Community Access"
];
function PythonBootcamp() {
	return /* @__PURE__ */ jsxs("div", {
		ref: useRevealAll(),
		children: [
			/* @__PURE__ */ jsx(ScarcityBanner, {}),
			/* @__PURE__ */ jsx(BootcampHero, {}),
			/* @__PURE__ */ jsx(ValueSection, {}),
			/* @__PURE__ */ jsx(CurriculumSection, {}),
			/* @__PURE__ */ jsx(WhatYoullBuild, {}),
			/* @__PURE__ */ jsx(MeetInstructor, {}),
			/* @__PURE__ */ jsx(LearningTimeline, {}),
			/* @__PURE__ */ jsx(TestimonialsSection, {}),
			/* @__PURE__ */ jsx(FAQSection, {}),
			/* @__PURE__ */ jsx(PricingSection, {}),
			/* @__PURE__ */ jsx(FinalCTA, {})
		]
	});
}
function ScarcityBanner() {
	return /* @__PURE__ */ jsx("div", {
		className: "relative z-40 bg-gradient-to-r from-primary/20 via-cyan/25 to-purple-500/20 border-b border-primary/30 pt-24 pb-3 px-4 text-center text-xs sm:text-sm font-medium",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl flex items-center justify-center gap-2 flex-wrap text-foreground/90",
			children: [/* @__PURE__ */ jsxs("span", {
				className: "inline-flex items-center gap-1.5 rounded-full bg-primary/20 border border-primary/40 px-2.5 py-0.5 text-[11px] font-bold text-primary",
				children: [/* @__PURE__ */ jsx(Zap, { className: "h-3 w-3" }), " Launch Scholarship"]
			}), /* @__PURE__ */ jsxs("span", { children: [
				"Regular Fee ",
				/* @__PURE__ */ jsx("span", {
					className: "line-through text-muted-foreground font-normal",
					children: "৳299"
				}),
				" • ",
				/* @__PURE__ */ jsx("strong", { children: "FREE for the First 50 Students Only" }),
				" (Founding Batch Offer)"
			] })]
		})
	});
}
function BootcampHero() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx(Blobs, {}),
			/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 grid-bg opacity-60" }),
			/* @__PURE__ */ jsx("div", {
				className: "relative mx-auto max-w-7xl px-4 sm:px-6",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid gap-12 lg:grid-cols-12 items-center",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-7 animate-blur-in",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs animate-glow-border",
								children: [/* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5 text-primary" }), /* @__PURE__ */ jsx("span", {
									className: "uppercase tracking-[0.18em] font-semibold text-primary",
									children: "Founding Batch • Launch Scholarship"
								})]
							}),
							/* @__PURE__ */ jsxs("h1", {
								className: "mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-balance",
								children: [
									"Learn Python Through",
									" ",
									/* @__PURE__ */ jsx("span", {
										className: "text-gradient",
										children: "Fun & Real Projects."
									})
								]
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "mt-5 text-lg text-muted-foreground leading-relaxed max-w-xl",
								children: [
									"Master coding step-by-step — from your first ",
									/* @__PURE__ */ jsx("code", {
										className: "text-cyan font-mono text-base px-1.5 py-0.5 rounded bg-white/5",
										children: "print(\"Hello World\")"
									}),
									" to building your own interactive ",
									/* @__PURE__ */ jsx("strong", {
										className: "text-foreground font-semibold",
										children: "Python Arcade"
									}),
									"."
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-6 flex flex-wrap gap-3 text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ jsxs("span", {
										className: "inline-flex items-center gap-1.5 rounded-full glass px-3.5 py-1.5 text-foreground/90 font-medium",
										children: [/* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 text-primary" }), " 4 Weeks (8 Live Classes)"]
									}),
									/* @__PURE__ */ jsxs("span", {
										className: "inline-flex items-center gap-1.5 rounded-full glass px-3.5 py-1.5 text-foreground/90 font-medium",
										children: [/* @__PURE__ */ jsx(Users, { className: "h-4 w-4 text-primary" }), " Beginner Friendly"]
									}),
									/* @__PURE__ */ jsxs("span", {
										className: "inline-flex items-center gap-1.5 rounded-full glass px-3.5 py-1.5 text-foreground/90 font-medium",
										children: [/* @__PURE__ */ jsx(Award, { className: "h-4 w-4 text-primary" }), " Official Certificate"]
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ jsx(CTAButton, {
									href: "https://forms.gle/UzsuiN3qGDn4Xuge7",
									target: "_blank",
									rel: "noopener noreferrer",
									children: "Register Now"
								}), /* @__PURE__ */ jsxs("a", {
									href: "#curriculum",
									className: "group inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium hover:bg-white/10 transition-colors",
									children: [/* @__PURE__ */ jsx(BookOpen, { className: "h-4 w-4 text-primary" }), "View 4-Week Syllabus"]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-8 flex items-center gap-4 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ jsx("div", {
									className: "flex -space-x-2",
									children: [
										Code2,
										Gamepad2,
										Star,
										Trophy
									].map((IconComponent, i) => /* @__PURE__ */ jsx("div", {
										className: "grid h-8 w-8 place-items-center rounded-full bg-gradient-primary text-primary-foreground text-xs font-bold ring-2 ring-background",
										children: /* @__PURE__ */ jsx(IconComponent, { className: "h-4 w-4 text-primary-foreground" })
									}, i))
								}), /* @__PURE__ */ jsx("span", { children: "Join Founding Batch students building real programs" })]
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "lg:col-span-5 animate-blur-in",
						style: { animationDelay: "200ms" },
						children: /* @__PURE__ */ jsx(HeroScholarshipCard, {})
					})]
				})
			})
		]
	});
}
function HeroScholarshipCard() {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative rounded-3xl glass-strong p-6 sm:p-8 border border-primary/30 shadow-elevated overflow-hidden animate-glow-border",
		children: [
			/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" }),
			/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-cyan/20 blur-3xl" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between gap-2",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-xs uppercase tracking-widest font-semibold text-muted-foreground font-mono",
							children: "NSC Python Bootcamp"
						}), /* @__PURE__ */ jsxs("span", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-gradient-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-glow",
							children: [/* @__PURE__ */ jsx(Sparkles, { className: "h-3 w-3" }), " Launch Scholarship"]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-6 border-y border-white/10 py-5",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-sm text-muted-foreground",
								children: "Regular Fee"
							}), /* @__PURE__ */ jsx("span", {
								className: "text-lg font-medium text-muted-foreground line-through decoration-primary/70",
								children: "৳299"
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "mt-3 flex items-center justify-between",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								className: "text-xs font-bold uppercase tracking-wider text-cyan",
								children: "Launch Scholarship"
							}), /* @__PURE__ */ jsx("div", {
								className: "text-[11px] text-muted-foreground",
								children: "First 50 Students Only"
							})] }), /* @__PURE__ */ jsx("div", {
								className: "text-right",
								children: /* @__PURE__ */ jsx("span", {
									className: "font-display text-4xl sm:text-5xl font-bold text-gradient",
									children: "FREE"
								})
							})]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-5 space-y-2 text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-primary shrink-0" }), /* @__PURE__ */ jsx("span", { children: "4 Weeks • 8 Live Classes" })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-primary shrink-0" }), /* @__PURE__ */ jsx("span", { children: "2 Milestone Projects & Python Arcade" })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-primary shrink-0" }), /* @__PURE__ */ jsx("span", { children: "Official Completion Certificate" })]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-7 flex flex-col gap-3",
						children: [/* @__PURE__ */ jsx(CTAButton, {
							href: "https://forms.gle/UzsuiN3qGDn4Xuge7",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "w-full justify-center text-sm py-3.5",
							children: "Register Now"
						}), /* @__PURE__ */ jsxs("a", {
							href: "#curriculum",
							className: "inline-flex items-center justify-center gap-2 rounded-full glass px-4 py-2.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors",
							children: [/* @__PURE__ */ jsx(BookOpen, { className: "h-3.5 w-3.5" }), "View Curriculum"]
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-center text-[11px] text-muted-foreground",
						children: "Early Bird Offer • Limited seats for the Founding Batch"
					})
				]
			})
		]
	});
}
function ValueSection() {
	return /* @__PURE__ */ jsxs(Section, { children: [/* @__PURE__ */ jsx("div", {
		"data-reveal": true,
		className: "reveal",
		children: /* @__PURE__ */ jsx(SectionHeading, {
			eyebrow: "What Students Receive",
			title: /* @__PURE__ */ jsxs(Fragment, { children: ["Everything included in your ", /* @__PURE__ */ jsx("span", {
				className: "text-gradient",
				children: "Launch Scholarship"
			})] }),
			description: "A complete hands-on learning experience designed to build confidence, practical skills, and real projects.",
			align: "center"
		})
	}), /* @__PURE__ */ jsx("div", {
		className: "mt-14 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
		children: valueCards.map(({ icon: I, title, desc }, i) => /* @__PURE__ */ jsx("div", {
			"data-reveal": true,
			className: "reveal",
			style: { transitionDelay: `${i * 60}ms` },
			children: /* @__PURE__ */ jsxs(GlassCard, {
				className: "h-full p-6 hover:border-primary/40 transition-colors",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary shadow-glow",
						children: /* @__PURE__ */ jsx(I, { className: "h-5 w-5 text-primary-foreground" })
					}),
					/* @__PURE__ */ jsxs("h3", {
						className: "font-display text-lg font-semibold flex items-center gap-2",
						children: [/* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-primary shrink-0" }), title]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-2 text-xs text-muted-foreground leading-relaxed",
						children: desc
					})
				]
			})
		}, title))
	})] });
}
function CurriculumSection() {
	return /* @__PURE__ */ jsxs(Section, {
		id: "curriculum",
		children: [/* @__PURE__ */ jsx("div", {
			"data-reveal": true,
			className: "reveal",
			children: /* @__PURE__ */ jsx(SectionHeading, {
				eyebrow: "4-Week Syllabus",
				title: /* @__PURE__ */ jsxs(Fragment, { children: ["8 Live Classes. ", /* @__PURE__ */ jsx("span", {
					className: "text-gradient",
					children: "Step-by-step curriculum."
				})] }),
				description: "Detailed breakdown of what kids learn, build, and challenge themselves with each week.",
				align: "center"
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-14 space-y-8 max-w-4xl mx-auto",
			children: weeklyCurriculum.map((week, wIdx) => /* @__PURE__ */ jsxs("div", {
				"data-reveal": true,
				className: "reveal rounded-3xl glass-strong p-6 sm:p-8 shadow-elevated border border-white/10",
				style: { transitionDelay: `${wIdx * 100}ms` },
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6",
						children: /* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsxs("div", {
								className: "inline-flex items-center gap-2 rounded-full bg-gradient-primary/20 border border-primary/40 px-3 py-1 text-xs font-semibold text-primary",
								children: [/* @__PURE__ */ jsx(Calendar, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ jsx("span", { children: week.weekNum })]
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-2 font-display text-2xl font-bold",
								children: week.theme
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: week.desc
							})
						] })
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-6 grid gap-6 md:grid-cols-2",
						children: week.classes.map((cls) => /* @__PURE__ */ jsxs("div", {
							className: "rounded-2xl glass p-5 flex flex-col justify-between border border-white/5 hover:border-white/10 transition-colors",
							children: [/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("div", {
									className: "flex items-center justify-between",
									children: /* @__PURE__ */ jsxs("span", {
										className: "inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-cyan",
										children: [/* @__PURE__ */ jsx(BookOpen, { className: "h-3.5 w-3.5" }), cls.classNum]
									})
								}),
								/* @__PURE__ */ jsx("h4", {
									className: "mt-2 font-display text-lg font-semibold",
									children: cls.title
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-4",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-1.5 text-xs font-semibold text-foreground/90 uppercase tracking-wider mb-2",
										children: [/* @__PURE__ */ jsx(GraduationCap, { className: "h-3.5 w-3.5 text-primary" }), /* @__PURE__ */ jsx("span", { children: "Learn" })]
									}), /* @__PURE__ */ jsx("ul", {
										className: "space-y-1.5 text-xs text-muted-foreground",
										children: cls.learn.map((item) => /* @__PURE__ */ jsxs("li", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ jsx(ChevronRight, { className: "h-3 w-3 text-primary shrink-0" }), /* @__PURE__ */ jsx("span", { children: item })]
										}, item))
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-4",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-1.5 text-xs font-semibold text-foreground/90 uppercase tracking-wider mb-2",
										children: [/* @__PURE__ */ jsx(Terminal, { className: "h-3.5 w-3.5 text-cyan" }), /* @__PURE__ */ jsx("span", { children: "Hands-on Activities" })]
									}), /* @__PURE__ */ jsx("div", {
										className: "flex flex-wrap gap-1.5",
										children: cls.activities.map((act) => /* @__PURE__ */ jsxs("span", {
											className: "inline-flex items-center gap-1 rounded-md glass px-2 py-1 text-[11px] text-foreground/80",
											children: [
												/* @__PURE__ */ jsx(Code, { className: "h-2.5 w-2.5 text-cyan" }),
												" ",
												act
											]
										}, act))
									})]
								})
							] }), cls.challenge && /* @__PURE__ */ jsxs("div", {
								className: "mt-5 rounded-xl bg-primary/10 border border-primary/20 p-3 text-xs",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-1 font-semibold text-primary mb-0.5",
									children: [/* @__PURE__ */ jsx(Target, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ jsx("span", { children: "Coding Challenge" })]
								}), /* @__PURE__ */ jsx("span", {
									className: "text-foreground/90",
									children: cls.challenge
								})]
							})]
						}, cls.classNum))
					}),
					week.milestone && /* @__PURE__ */ jsxs("div", {
						className: "mt-6 rounded-2xl bg-gradient-to-r from-primary/20 via-cyan/15 to-purple-500/20 border border-primary/40 p-6 shadow-glow",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "flex items-center gap-2",
								children: /* @__PURE__ */ jsxs("span", {
									className: "inline-flex items-center gap-1.5 rounded-full bg-gradient-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-glow",
									children: [/* @__PURE__ */ jsx(Layers, { className: "h-3.5 w-3.5" }), week.milestone.badge]
								})
							}),
							/* @__PURE__ */ jsx("h4", {
								className: "mt-3 font-display text-xl font-bold",
								children: week.milestone.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm text-muted-foreground leading-relaxed",
								children: week.milestone.desc
							})
						]
					})
				]
			}, week.weekNum))
		})]
	});
}
function WhatYoullBuild() {
	return /* @__PURE__ */ jsxs(Section, { children: [/* @__PURE__ */ jsx("div", {
		"data-reveal": true,
		className: "reveal",
		children: /* @__PURE__ */ jsx(SectionHeading, {
			eyebrow: "Student Showcase",
			title: /* @__PURE__ */ jsxs(Fragment, { children: ["Hands-on ", /* @__PURE__ */ jsx("span", {
				className: "text-gradient",
				children: "projects & games"
			})] }),
			description: "Students transform concepts into real working Python programs they can show off to family and friends!",
			align: "center"
		})
	}), /* @__PURE__ */ jsx("div", {
		className: "mt-14 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
		children: projects.map(({ icon: I, name, desc }, i) => /* @__PURE__ */ jsx("div", {
			"data-reveal": true,
			className: "reveal",
			style: { transitionDelay: `${i * 60}ms` },
			children: /* @__PURE__ */ jsxs(GlassCard, {
				className: "h-full p-6 text-left hover:border-primary/40 transition-colors",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "mb-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary shadow-glow",
						children: /* @__PURE__ */ jsx(I, { className: "h-5 w-5 text-primary-foreground" })
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "font-display font-semibold text-lg",
						children: name
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-2 text-xs text-muted-foreground leading-relaxed",
						children: desc
					})
				]
			})
		}, name))
	})] });
}
function MeetInstructor() {
	return /* @__PURE__ */ jsxs(Section, {
		id: "instructor",
		children: [/* @__PURE__ */ jsx("div", {
			"data-reveal": true,
			className: "reveal",
			children: /* @__PURE__ */ jsx(SectionHeading, {
				eyebrow: "Trust & Guidance",
				title: /* @__PURE__ */ jsxs(Fragment, { children: ["Meet Your ", /* @__PURE__ */ jsx("span", {
					className: "text-gradient",
					children: "Instructor"
				})] }),
				description: "Dedicated to creating a supportive, interactive environment where every student thrives.",
				align: "center"
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-14 max-w-5xl mx-auto",
			"data-reveal": true,
			children: /* @__PURE__ */ jsxs("div", {
				className: "relative overflow-hidden rounded-[32px] glass-strong p-8 sm:p-12 shadow-elevated border border-primary/20",
				children: [
					/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -top-32 -left-32 h-[350px] w-[350px] rounded-full opacity-20 blur-3xl bg-primary" }),
					/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -bottom-32 -right-32 h-[350px] w-[350px] rounded-full opacity-20 blur-3xl bg-cyan" }),
					/* @__PURE__ */ jsxs("div", {
						className: "grid gap-10 lg:grid-cols-12 items-center",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "lg:col-span-5 flex flex-col items-center text-center",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "relative group",
									children: [/* @__PURE__ */ jsx("div", { className: "absolute -inset-1.5 rounded-3xl bg-gradient-primary opacity-50 blur-lg group-hover:opacity-75 transition duration-500" }), /* @__PURE__ */ jsx("img", {
										src: "/instructor_mahi.png",
										alt: "Didarul Azam Mahi - Lead Instructor",
										className: "relative h-72 w-72 object-cover object-center rounded-2xl border border-white/10 shadow-elevated"
									})]
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-6 font-display text-2xl font-bold",
									children: "Didarul Azam Mahi"
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-2 flex flex-col items-center gap-1 text-xs text-muted-foreground",
									children: [/* @__PURE__ */ jsxs("span", {
										className: "inline-flex items-center gap-1.5 text-primary font-medium",
										children: [/* @__PURE__ */ jsx(GraduationCap, { className: "h-3.5 w-3.5" }), " President, Neutrino Science Club"]
									}), /* @__PURE__ */ jsx("span", { children: "AI & Software Developer • Technology Educator" })]
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "lg:col-span-7 space-y-6",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "space-y-4 text-sm text-muted-foreground leading-relaxed",
									children: [
										/* @__PURE__ */ jsx("p", {
											className: "text-foreground/90 font-medium text-base",
											children: "Hi! I'm Didarul Azam Mahi, President of the Neutrino Science Club."
										}),
										/* @__PURE__ */ jsx("p", { children: "I enjoy building AI applications and software, but one of my biggest passions is helping young students discover programming through fun, interactive, and project-based learning." }),
										/* @__PURE__ */ jsx("p", { children: "I designed this bootcamp specifically for beginners so students learn by building real projects instead of memorizing syntax. My goal is to help them develop confidence, logical thinking, creativity, and problem-solving skills." })
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "pt-2",
									children: [/* @__PURE__ */ jsx("div", {
										className: "text-xs uppercase tracking-wider font-semibold text-foreground/80 mb-3",
										children: "Highlights & Focus Areas"
									}), /* @__PURE__ */ jsx("div", {
										className: "flex flex-wrap gap-2",
										children: [
											{
												label: "Python Programming",
												icon: Code2
											},
											{
												label: "AI & Software Development",
												icon: Cpu
											},
											{
												label: "Project-Based Learning",
												icon: Layers
											},
											{
												label: "President, Neutrino Science Club",
												icon: GraduationCap
											},
											{
												label: "Interactive Teaching",
												icon: Sparkles
											}
										].map(({ label, icon: IconComponent }) => /* @__PURE__ */ jsxs("span", {
											className: "inline-flex items-center gap-1.5 rounded-lg glass px-3 py-1.5 text-xs font-medium text-foreground/90 border border-white/10 hover:border-primary/40 transition-colors",
											children: [/* @__PURE__ */ jsx(IconComponent, { className: "h-3.5 w-3.5 text-primary" }), label]
										}, label))
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-6 rounded-2xl bg-gradient-to-r from-primary/15 via-cyan/10 to-purple-500/15 border border-primary/30 p-5 sm:p-6 shadow-glow",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary",
										children: [/* @__PURE__ */ jsx(HeartHandshake, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: "My Promise to Every Student" })]
									}), /* @__PURE__ */ jsx("p", {
										className: "mt-3 text-sm text-foreground/90 leading-relaxed italic",
										children: "\"Every student deserves a supportive learning environment. I will guide each learner step by step, encourage questions, and ensure no one feels left behind. By the end of this bootcamp, students will have built real Python programs and gained the confidence to continue learning.\""
									})]
								})
							]
						})]
					})
				]
			})
		})]
	});
}
function LearningTimeline() {
	const scrollRef = useRef(null);
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		const el = scrollRef.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)), { threshold: .2 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ jsxs(Section, { children: [/* @__PURE__ */ jsx("div", {
		"data-reveal": true,
		className: "reveal",
		children: /* @__PURE__ */ jsx(SectionHeading, {
			eyebrow: "Learning Journey",
			title: /* @__PURE__ */ jsxs(Fragment, { children: ["Your ", /* @__PURE__ */ jsx("span", {
				className: "text-gradient",
				children: "4-week roadmap"
			})] }),
			description: "Clear progression from first line of code to python arcade & showcase.",
			align: "center"
		})
	}), /* @__PURE__ */ jsx("div", {
		ref: scrollRef,
		className: "mt-14 overflow-x-auto pb-4 scrollbar-hide",
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative flex items-start gap-0 min-w-[850px] px-4",
			children: [/* @__PURE__ */ jsx("div", {
				className: "absolute top-8 left-8 right-8 h-0.5 bg-white/10",
				children: /* @__PURE__ */ jsx("div", {
					className: "h-full bg-gradient-primary origin-left transition-transform duration-[2s] ease-out",
					style: { transform: visible ? "scaleX(1)" : "scaleX(0)" }
				})
			}), timelineWeeks.map((item, i) => /* @__PURE__ */ jsxs("div", {
				className: "relative flex-1 text-center px-3",
				style: {
					opacity: visible ? 1 : 0,
					transform: visible ? "translateY(0)" : "translateY(24px)",
					transition: `opacity 0.6s ease ${i * 150}ms, transform 0.6s ease ${i * 150}ms`
				},
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-primary shadow-glow text-primary-foreground font-bold text-sm",
						children: item.week
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "mt-4 font-display font-semibold text-sm",
						children: item.title
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-1 text-xs text-muted-foreground leading-relaxed",
						children: item.desc
					})
				]
			}, item.week))]
		})
	})] });
}
function TestimonialsSection() {
	const [active, setActive] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setActive((prev) => (prev + 1) % testimonials.length);
		}, 5e3);
		return () => clearInterval(interval);
	}, []);
	return /* @__PURE__ */ jsxs(Section, { children: [/* @__PURE__ */ jsx("div", {
		"data-reveal": true,
		className: "reveal",
		children: /* @__PURE__ */ jsx(SectionHeading, {
			eyebrow: "Reviews & Feedback",
			title: "What kids and parents say",
			align: "center"
		})
	}), /* @__PURE__ */ jsxs("div", {
		className: "mt-14 max-w-3xl mx-auto",
		children: [/* @__PURE__ */ jsx("div", {
			className: "relative overflow-hidden rounded-3xl",
			"data-reveal": true,
			children: /* @__PURE__ */ jsx("div", {
				className: "flex transition-transform duration-700 ease-in-out",
				style: { transform: `translateX(-${active * 100}%)` },
				children: testimonials.map((t) => /* @__PURE__ */ jsx("div", {
					className: "w-full shrink-0 px-2",
					children: /* @__PURE__ */ jsxs(GlassCard, {
						hover: false,
						className: "p-8 sm:p-10",
						children: [
							/* @__PURE__ */ jsx(Quote, { className: "h-8 w-8 text-primary/60" }),
							/* @__PURE__ */ jsxs("p", {
								className: "mt-5 text-lg text-foreground/90 leading-relaxed italic",
								children: [
									"\"",
									t.quote,
									"\""
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-6 flex items-center gap-3 border-t border-white/5 pt-5",
								children: [/* @__PURE__ */ jsx("div", {
									className: "grid h-12 w-12 place-items-center rounded-full bg-gradient-primary text-primary-foreground font-bold",
									children: t.name.split(" ").map((s) => s[0]).slice(0, 2).join("")
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
									className: "font-medium",
									children: t.name
								}), /* @__PURE__ */ jsx("div", {
									className: "text-sm text-muted-foreground",
									children: t.role
								})] })]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-3 flex gap-0.5",
								children: Array.from({ length: 5 }).map((_, k) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-primary text-primary" }, k))
							})
						]
					})
				}, t.name))
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-6 flex justify-center gap-2",
			children: testimonials.map((_, i) => /* @__PURE__ */ jsx("button", {
				onClick: () => setActive(i),
				className: `h-2 rounded-full transition-all duration-300 ${i === active ? "w-8 bg-gradient-primary" : "w-2 bg-white/20"}`
			}, i))
		})]
	})] });
}
function FAQSection() {
	return /* @__PURE__ */ jsxs(Section, { children: [/* @__PURE__ */ jsx("div", {
		"data-reveal": true,
		className: "reveal",
		children: /* @__PURE__ */ jsx(SectionHeading, {
			eyebrow: "FAQ",
			title: /* @__PURE__ */ jsxs(Fragment, { children: ["Frequently asked ", /* @__PURE__ */ jsx("span", {
				className: "text-gradient",
				children: "questions"
			})] }),
			align: "center"
		})
	}), /* @__PURE__ */ jsx("div", {
		className: "mt-14 mx-auto max-w-3xl",
		children: /* @__PURE__ */ jsx(Accordion, {
			type: "single",
			collapsible: true,
			className: "space-y-3",
			children: faqs.map((faq, i) => /* @__PURE__ */ jsxs(AccordionItem, {
				value: `faq-${i}`,
				className: "rounded-2xl glass border-none overflow-hidden",
				"data-reveal": true,
				style: { transitionDelay: `${i * 60}ms` },
				children: [/* @__PURE__ */ jsx(AccordionTrigger, {
					className: "px-6 py-4 hover:no-underline hover:bg-white/[0.03] transition-colors text-left font-display font-semibold",
					children: faq.q
				}), /* @__PURE__ */ jsx(AccordionContent, {
					className: "px-6 pb-5 text-muted-foreground leading-relaxed text-sm",
					children: faq.a
				})]
			}, faq.q))
		})
	})] });
}
function PricingSection() {
	return /* @__PURE__ */ jsxs(Section, { children: [/* @__PURE__ */ jsx("div", {
		"data-reveal": true,
		className: "reveal",
		children: /* @__PURE__ */ jsx(SectionHeading, {
			eyebrow: "Founding Batch Scholarship",
			title: /* @__PURE__ */ jsxs(Fragment, { children: ["Claim your ", /* @__PURE__ */ jsx("span", {
				className: "text-gradient",
				children: "Launch Scholarship"
			})] }),
			description: "To celebrate our program launch, the first 50 registered students receive 100% OFF for the Founding Batch.",
			align: "center"
		})
	}), /* @__PURE__ */ jsx("div", {
		className: "mt-14 mx-auto max-w-lg",
		"data-reveal": true,
		children: /* @__PURE__ */ jsx("div", {
			className: "relative overflow-hidden rounded-[28px] glass-strong p-px shadow-elevated animate-glow-border",
			children: /* @__PURE__ */ jsxs("div", {
				className: "relative rounded-[27px] bg-card/80 p-8 sm:p-10",
				children: [/* @__PURE__ */ jsx("div", {
					className: "pointer-events-none absolute -top-20 -right-20 h-[300px] w-[300px] rounded-full opacity-25 blur-3xl",
					style: { background: "radial-gradient(circle, oklch(0.72 0.19 245 / 0.5), transparent 60%)" }
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "text-center",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs",
									children: [/* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5 text-primary" }), /* @__PURE__ */ jsx("span", {
										className: "uppercase tracking-[0.18em] text-primary font-semibold",
										children: "Founding Batch Offer"
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-6 flex items-center justify-center gap-3",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "text-left",
											children: [/* @__PURE__ */ jsx("div", {
												className: "text-xs text-muted-foreground uppercase font-medium",
												children: "Regular Price"
											}), /* @__PURE__ */ jsx("div", {
												className: "text-lg font-bold text-muted-foreground line-through decoration-primary/70",
												children: "৳299"
											})]
										}),
										/* @__PURE__ */ jsx("div", { className: "h-8 w-px bg-white/10" }),
										/* @__PURE__ */ jsxs("div", {
											className: "text-left",
											children: [/* @__PURE__ */ jsx("div", {
												className: "text-xs font-bold uppercase text-cyan tracking-wider",
												children: "Launch Scholarship"
											}), /* @__PURE__ */ jsx("div", {
												className: "text-xs font-semibold text-green-400",
												children: "100% OFF"
											})]
										})
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-4 pt-3 border-t border-white/10",
									children: [/* @__PURE__ */ jsx("div", {
										className: "text-xs text-muted-foreground uppercase font-semibold tracking-wider",
										children: "Today You Pay"
									}), /* @__PURE__ */ jsx("div", {
										className: "mt-1 font-display text-5xl sm:text-6xl font-bold text-gradient",
										children: "FREE"
									})]
								})
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-6 rounded-xl bg-primary/10 border border-primary/20 p-3 text-center text-xs text-primary font-medium",
							children: "⚡ This scholarship is available only for the first 50 registrations."
						}),
						/* @__PURE__ */ jsx("ul", {
							className: "mt-6 space-y-3",
							children: pricingFeatures.map((feature) => /* @__PURE__ */ jsxs("li", {
								className: "flex items-center gap-3 text-sm",
								children: [/* @__PURE__ */ jsx("div", {
									className: "grid h-5 w-5 place-items-center rounded-full bg-gradient-primary shrink-0",
									children: /* @__PURE__ */ jsx(Check, { className: "h-3 w-3 text-primary-foreground" })
								}), /* @__PURE__ */ jsx("span", {
									className: "text-foreground/90",
									children: feature
								})]
							}, feature))
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-8",
							children: /* @__PURE__ */ jsxs("a", {
								href: "https://forms.gle/UzsuiN3qGDn4Xuge7",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.02] transition-transform",
								children: ["Register Now — Claim Launch Scholarship", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
							})
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 text-center text-xs text-muted-foreground",
							children: "Limited batch size • Early bird scholarship for Founding Batch"
						})
					]
				})]
			})
		})
	})] });
}
function FinalCTA() {
	return /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", {
		"data-reveal": true,
		className: "reveal relative overflow-hidden rounded-[32px] glass-strong p-10 sm:p-16 text-center shadow-elevated",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "pointer-events-none absolute inset-0 opacity-70",
				style: { background: "var(--gradient-hero)" }
			}),
			/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 grid-bg opacity-40" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative mx-auto max-w-2xl",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "flex justify-center",
						children: /* @__PURE__ */ jsx(Eyebrow, { children: "Early Bird Launch Scholarship" })
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "mt-5 font-display text-4xl sm:text-5xl font-semibold tracking-tight text-balance",
						children: [
							"Join the Founding Batch of",
							" ",
							/* @__PURE__ */ jsx("span", {
								className: "text-gradient",
								children: "Python Coders."
							})
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-muted-foreground leading-relaxed",
						children: "Claim your 100% Launch Scholarship (Regular ৳299). First 50 students learn Python fundamentals, build milestone projects, and launch their own Python Arcade!"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-8 flex flex-wrap justify-center gap-3",
						children: [/* @__PURE__ */ jsxs("a", {
							href: "https://forms.gle/UzsuiN3qGDn4Xuge7",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform",
							children: ["Register Now ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
						}), /* @__PURE__ */ jsxs(Link, {
							to: "/contact",
							className: "inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/10 transition-colors",
							children: [/* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }), "Ask a Question"]
						})]
					})
				]
			})
		]
	}) });
}
//#endregion
export { PythonBootcamp as component };
