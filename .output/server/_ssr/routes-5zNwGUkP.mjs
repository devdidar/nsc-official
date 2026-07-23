import { i as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as Bot, F as FlaskConical, H as CodeXml, Z as CalendarDays, _ as School, b as Microscope, c as Trophy, f as Star, i as Wrench, it as ArrowRight, m as Sigma, o as Users, p as Sparkles, u as Telescope, v as Rocket, w as Mail, y as Quote, z as Cpu } from "../_libs/lucide-react.mjs";
import { a as Section, i as PageHero, n as Eyebrow, o as SectionHeading, r as GlassCard, s as useRevealAll, t as CTAButton } from "./use-reveal-b167KTr4.mjs";
import { t as supabase } from "./supabase-CPni-6uY.mjs";
import { t as Blobs } from "./Blobs-Brdd1bAk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-5zNwGUkP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var pillars = [
	{
		icon: CodeXml,
		title: "Programming",
		desc: "From first Python script to production systems."
	},
	{
		icon: Cpu,
		title: "Artificial Intelligence",
		desc: "Neural networks, LLMs and applied ML research."
	},
	{
		icon: Bot,
		title: "Robotics",
		desc: "Autonomous machines, embedded systems, kinematics."
	},
	{
		icon: Telescope,
		title: "Astronomy",
		desc: "Observation nights, astrophysics, deep-sky imaging."
	},
	{
		icon: FlaskConical,
		title: "Science Projects",
		desc: "End-to-end experiments across disciplines."
	},
	{
		icon: Sigma,
		title: "Mathematics",
		desc: "Olympiad training, proofs, applied problem solving."
	},
	{
		icon: Microscope,
		title: "Research",
		desc: "Mentored papers, replications, open datasets."
	},
	{
		icon: Sparkles,
		title: "Innovation",
		desc: "Rapid prototyping, hackathons, moonshots."
	}
];
var events = [
	{
		tag: "Flagship",
		title: "NeutrinoCon 2026",
		date: "March 14–16",
		city: "Main Auditorium",
		desc: "A three-day summit on frontier science and engineering.",
		grad: "from-blue-500/40 to-cyan-400/30"
	},
	{
		tag: "Bootcamp",
		title: "Deep Learning Sprint",
		date: "Feb 08",
		city: "Lab 3B",
		desc: "Build a transformer from scratch in one weekend.",
		grad: "from-indigo-500/40 to-blue-400/30"
	},
	{
		tag: "Field",
		title: "Stargazing Night",
		date: "Jan 22",
		city: "Observatory Hill",
		desc: "8-inch Dobsonians, deep-sky targets, hot cocoa.",
		grad: "from-purple-500/40 to-cyan-400/30"
	}
];
var projects = [
	{
		name: "Kepler-Vision",
		stack: "PyTorch · CV",
		desc: "Automated exoplanet transit detection from light curves."
	},
	{
		name: "Helios Rover",
		stack: "ROS 2 · ESP32",
		desc: "Solar-powered autonomous rover with SLAM navigation."
	},
	{
		name: "Axion",
		stack: "Rust · WASM",
		desc: "A physics-first differential equation playground for the browser."
	},
	{
		name: "Nimbus LLM",
		stack: "Transformers",
		desc: "Small language model trained on open scientific abstracts."
	}
];
var stats = [
	{
		value: 1200,
		suffix: "+",
		label: "Active members"
	},
	{
		value: 180,
		suffix: "+",
		label: "Workshops hosted"
	},
	{
		value: 74,
		suffix: "",
		label: "Live projects"
	},
	{
		value: 22,
		suffix: "",
		label: "Partner schools"
	},
	{
		value: 46,
		suffix: "",
		label: "Awards & prizes"
	}
];
var timeline = [
	{
		year: "2019",
		title: "Founded",
		desc: "Twelve students, one whiteboard, a lot of questions."
	},
	{
		year: "2021",
		title: "First bootcamp",
		desc: "48-hour AI sprint kicks off our flagship series."
	},
	{
		year: "2023",
		title: "Research wing",
		desc: "Mentored papers accepted at three regional conferences."
	},
	{
		year: "2024",
		title: "Robotics lab",
		desc: "A dedicated lab with 3D printers, mills and dev boards."
	},
	{
		year: "2026",
		title: "1000+ members",
		desc: "A global network across 22 partner institutions."
	}
];
var testimonials = [
	{
		name: "Aditi Sharma",
		role: "ML Engineer, formerly NSC ‘23",
		quote: "NSC didn't just teach me to code — it taught me how researchers think. Every workshop pushed me deeper."
	},
	{
		name: "Marco Silva",
		role: "Physics Undergrad",
		quote: "The observatory nights got me hooked on astrophysics. Now I'm publishing my first paper with a mentor from NSC."
	},
	{
		name: "Ren Takeda",
		role: "Robotics Lead",
		quote: "Nowhere else do students get this much lab time, mentorship and freedom to build weird, brilliant things."
	}
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: useRevealAll(),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mission, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatWeDo, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedEvents, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedProjects, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Research, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryPreview, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Partners, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newsletter, {})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-[100svh] pt-32 pb-24 flex items-center overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Blobs, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 grid-bg opacity-70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingCodeSnippets, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingGlyphs, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto max-w-7xl px-4 sm:px-6 w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-4xl text-center animate-blur-in",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs animate-glow-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-gradient-primary animate-pulse-glow" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "uppercase tracking-[0.18em] text-muted-foreground",
									children: "Science in Thought · Innovation in Creation"
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-balance",
							children: ["Empowering Young Minds Through ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "Science & Innovation"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed",
							children: "A student-led community building the next generation of scientists, engineers, and researchers. Hands-on projects, mentored research, bootcamps, and observation nights."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-9 flex flex-wrap justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
								to: "/bootcamp/python",
								children: "Explore Python Bootcamp"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/about",
								className: "group inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium hover:bg-white/10 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-6 w-6 place-items-center rounded-full bg-white/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rocket, { className: "h-3 w-3" })
								}), "About Our Club"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-16 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-10 animate-marquee whitespace-nowrap text-xs uppercase tracking-[0.3em] text-muted-foreground",
								children: Array.from({ length: 2 }).map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex gap-10 shrink-0",
									children: [
										"Programming",
										"Artificial Intelligence",
										"Robotics",
										"Astronomy",
										"Science Projects",
										"Mathematics",
										"Research",
										"Innovation"
									].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: x }, x + k))
								}, k))
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
				children: "Scroll ↓"
			})
		]
	});
}
function FloatingCodeSnippets() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: "pointer-events-none absolute inset-0 hidden md:block",
		children: [
			{
				code: "print(\"Hello, World!\")",
				top: "20%",
				left: "3%",
				delay: "0s"
			},
			{
				code: "for i in range(10):",
				top: "65%",
				right: "4%",
				delay: "-2s"
			},
			{
				code: "def learn():",
				top: "75%",
				left: "5%",
				delay: "-4s"
			},
			{
				code: "import python_bootcamp",
				top: "30%",
				right: "6%",
				delay: "-1s"
			}
		].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute glass rounded-xl px-3 py-2 animate-float-code shadow-elevated",
			style: {
				top: s.top,
				left: s.left,
				right: s.right,
				animationDelay: s.delay
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
				className: "text-xs font-mono text-cyan/80",
				children: s.code
			})
		}, i))
	});
}
function FloatingGlyphs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: "pointer-events-none absolute inset-0",
		children: [
			{
				top: "18%",
				left: "6%",
				Icon: Telescope,
				size: 20,
				delay: "0s"
			},
			{
				top: "28%",
				right: "8%",
				Icon: Cpu,
				size: 18,
				delay: "-3s"
			},
			{
				top: "70%",
				left: "10%",
				Icon: FlaskConical,
				size: 22,
				delay: "-6s"
			},
			{
				top: "62%",
				right: "12%",
				Icon: Sigma,
				size: 20,
				delay: "-2s"
			},
			{
				top: "42%",
				left: "14%",
				Icon: Sparkles,
				size: 16,
				delay: "-4s"
			},
			{
				top: "38%",
				right: "18%",
				Icon: Bot,
				size: 18,
				delay: "-5s"
			}
		].map(({ Icon, ...pos }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute glass rounded-2xl p-3 animate-float shadow-elevated",
			style: {
				top: pos.top,
				left: pos.left,
				right: pos.right,
				animationDelay: pos.delay
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: "text-primary",
				style: {
					width: pos.size,
					height: pos.size
				}
			})
		}, i))
	});
}
function Mission() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-12 lg:grid-cols-[1.1fr_1fr] items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-reveal": true,
			className: "reveal",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Our mission" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-5 font-display text-4xl sm:text-5xl font-semibold tracking-tight text-balance",
					children: [
						"Build scientists.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Not just science projects."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-5 text-lg text-muted-foreground leading-relaxed",
					children: [
						"We believe learning happens fastest when students ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "not-italic text-foreground",
							children: "build things that don't exist yet."
						}),
						" NSC exists to give every curious mind the mentors, tools and community to turn wild ideas into working prototypes — and working prototypes into real research."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
						to: "/about",
						children: "Read our story"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
						to: "/research",
						variant: "ghost",
						children: "Explore research"
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-reveal": true,
			className: "reveal",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-4",
				children: [
					{
						icon: Rocket,
						k: "Ship real work",
						v: "Every semester ends with a demo day."
					},
					{
						icon: Users,
						k: "Peer-led",
						v: "Students teaching students, deeply."
					},
					{
						icon: Trophy,
						k: "Compete",
						v: "Olympiads, hackathons and research fairs."
					},
					{
						icon: Wrench,
						k: "Build",
						v: "Full access to labs, boards and compute."
					}
				].map(({ icon: I, k, v }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { className: "h-5 w-5 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display font-semibold",
							children: k
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground leading-relaxed",
							children: v
						})
					]
				}, k))
			})
		})]
	}) });
}
function WhatWeDo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-reveal": true,
		className: "reveal",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "What we do",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Eight disciplines.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gradient",
				children: " One community."
			})] }),
			description: "From first principles to frontier research — pick a track, or wander across all of them.",
			align: "center"
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
		children: pillars.map(({ icon: I, title, desc }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-reveal": true,
			className: "reveal",
			style: { transitionDelay: `${i * 60}ms` },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				className: "h-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-6 inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary shadow-glow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { className: "h-5 w-5 text-primary-foreground" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg font-semibold",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground leading-relaxed",
						children: desc
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 inline-flex items-center gap-1 text-xs text-primary/90",
						children: ["Learn more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
					})
				]
			})
		}, title))
	})] });
}
function FeaturedEvents() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6",
		"data-reveal": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Featured events",
			title: "What's happening next",
			description: "A curated slice of our upcoming calendar — from summits to weekend field trips."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/events",
			className: "group inline-flex items-center gap-1 text-sm text-primary/90 hover:text-primary",
			children: ["All events ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-12 grid gap-5 md:grid-cols-3",
		children: events.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			"data-reveal": true,
			className: "reveal group relative overflow-hidden rounded-3xl glass hover-lift",
			style: { transitionDelay: `${i * 80}ms` },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `relative h-48 overflow-hidden bg-gradient-to-br ${e.grad}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-60" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-14 w-14 text-white/70" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-4 top-4 rounded-full glass-strong px-3 py-1 text-[10px] uppercase tracking-widest",
						children: e.tag
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: e.date }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: e.city })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 font-display text-xl font-semibold",
						children: e.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground leading-relaxed",
						children: e.desc
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 inline-flex items-center gap-1 text-xs text-primary/90",
						children: ["Reserve seat ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
					})
				]
			})]
		}, e.title))
	})] });
}
function useCounter(target, active, duration = 1600) {
	const [n, setN] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!active) return;
		let raf = 0;
		const start = performance.now();
		const tick = (t) => {
			const p = Math.min(1, (t - start) / duration);
			const eased = 1 - Math.pow(1 - p, 3);
			setN(Math.round(target * eased));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [
		active,
		target,
		duration
	]);
	return n;
}
function Stats() {
	const ref = (0, import_react.useRef)(null);
	const [active, setActive] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(true)), { threshold: .3 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: "relative overflow-hidden rounded-[32px] glass p-8 sm:p-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 md:grid-cols-5 gap-8",
			children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatItem, {
				...s,
				active
			}, s.label))
		})
	}) });
}
function StatItem({ value, suffix, label, active }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "font-display text-4xl sm:text-5xl font-semibold tabular-nums text-gradient",
			children: [useCounter(value, active).toLocaleString(), suffix]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground",
			children: label
		})]
	});
}
function Timeline() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-reveal": true,
		className: "reveal",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Timeline",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"A short history of ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient",
					children: "going far"
				}),
				"."
			] }),
			description: "Milestones from a scrappy club to a global learning community.",
			align: "center"
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto mt-16 max-w-3xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute left-4 sm:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/60 to-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "space-y-10",
			children: timeline.map((t, i) => {
				const right = i % 2 === 1;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					"data-reveal": true,
					className: "reveal relative sm:grid sm:grid-cols-2 sm:gap-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `hidden sm:block ${right ? "order-2" : ""}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `relative pl-12 sm:pl-0 ${right ? "sm:pr-10 sm:text-right sm:order-1" : "sm:pl-10"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute left-2 sm:left-1/2 top-1.5 -translate-x-1/2 grid h-5 w-5 place-items-center rounded-full bg-gradient-primary shadow-glow",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-white" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
							className: "p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-[0.2em] text-primary/90",
									children: t.year
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-display text-xl font-semibold",
									children: t.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground leading-relaxed",
									children: t.desc
								})
							]
						})]
					})]
				}, t.year);
			})
		})]
	})] });
}
function FeaturedProjects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6",
		"data-reveal": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Featured projects",
			title: "Built by students. Shipped in public.",
			description: "A selection of what our members have prototyped, researched and open-sourced."
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-12 grid gap-5 md:grid-cols-2",
		children: projects.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
			className: "p-8",
			"data-reveal": true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-white/5 px-2 py-0.5",
						children: p.stack
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "· open-source" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-4 font-display text-2xl font-semibold",
					children: p.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted-foreground leading-relaxed",
					children: p.desc
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 inline-flex items-center gap-1 text-sm text-primary/90",
					children: ["Explore project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})
			]
		}, p.name))
	})] });
}
function Research() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-10 lg:grid-cols-2 items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-reveal": true,
			className: "reveal",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Research" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-5 font-display text-4xl sm:text-5xl font-semibold tracking-tight text-balance",
					children: [
						"Papers, replications & ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "open datasets"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed",
					children: "Our research wing pairs undergraduates with mentors to run rigorous, reproducible projects — from ML replication to observational astronomy."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-7 flex flex-wrap gap-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAButton, {
						to: "/research",
						children: "Browse research"
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3",
			"data-reveal": true,
			children: [
				{
					t: "Replicating BERT on scientific corpora",
					meta: "NLP · Preprint"
				},
				{
					t: "Photometric variability of RR Lyrae stars",
					meta: "Astronomy · Data release"
				},
				{
					t: "SLAM benchmarks for indoor micro-rovers",
					meta: "Robotics · Dataset"
				}
			].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				className: "p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-widest text-muted-foreground",
					children: r.meta
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 font-display text-lg font-semibold",
					children: r.t
				})]
			}, r.t))
		})]
	}) });
}
function GalleryPreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-end justify-between gap-6",
		"data-reveal": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Gallery",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"Moments from the ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient",
					children: "lab"
				}),
				"."
			] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/gallery",
			className: "group inline-flex items-center gap-1 text-sm text-primary/90",
			children: ["Open gallery ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-10 columns-2 md:columns-4 gap-4 [column-fill:_balance]",
		children: [
			{
				h: 220,
				c: "from-blue-500/50 to-cyan-400/30"
			},
			{
				h: 320,
				c: "from-purple-500/40 to-blue-500/30"
			},
			{
				h: 260,
				c: "from-cyan-400/40 to-indigo-500/30"
			},
			{
				h: 280,
				c: "from-indigo-500/50 to-cyan-400/30"
			},
			{
				h: 200,
				c: "from-blue-400/40 to-purple-500/30"
			},
			{
				h: 300,
				c: "from-cyan-500/40 to-blue-500/30"
			},
			{
				h: 240,
				c: "from-purple-500/40 to-cyan-400/30"
			},
			{
				h: 260,
				c: "from-blue-500/40 to-indigo-500/30"
			}
		].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-4 break-inside-avoid overflow-hidden rounded-2xl glass hover-lift",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `relative bg-gradient-to-br ${t.c}`,
				style: { height: t.h },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-50" })
			})
		}, i))
	})] });
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-reveal": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Voices",
			title: "What our alumni say",
			align: "center"
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-14 grid gap-5 md:grid-cols-3",
		children: testimonials.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
			className: "p-7",
			"data-reveal": true,
			style: { transitionDelay: `${i * 80}ms` },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-6 w-6 text-primary" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-foreground/90 leading-relaxed",
					children: [
						"\"",
						t.quote,
						"\""
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex items-center gap-3 border-t border-white/5 pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-10 w-10 place-items-center rounded-full bg-gradient-primary text-primary-foreground font-semibold",
						children: t.name.split(" ").map((s) => s[0]).slice(0, 2).join("")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-medium",
						children: t.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground",
						children: t.role
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex gap-0.5",
					children: Array.from({ length: 5 }).map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-primary text-primary" }, k))
				})
			]
		}, t.name))
	})] });
}
function Partners() {
	const logos = [
		"Photon Labs",
		"Kepler Institute",
		"Vector School",
		"OpenBio",
		"AtlasAI",
		"NovaCollege",
		"Helix Foundation",
		"Quanta Works"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-reveal": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Trusted by",
			title: "Institutions we build alongside",
			align: "center"
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex gap-14 animate-marquee whitespace-nowrap",
			children: [...logos, ...logos].map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 text-xl font-display font-semibold text-foreground/60 hover:text-foreground transition-colors",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(School, { className: "h-5 w-5" }), l]
			}, i))
		})
	})] });
}
function Newsletter() {
	const [subscribed, setSubscribed] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const handleSubscribe = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError("");
		const email = new FormData(e.currentTarget).get("email");
		const { error: submitError } = await supabase.from("newsletter_subscribers").insert([{ email }]);
		setLoading(false);
		if (submitError) if (submitError.code === "23505") setSubscribed(true);
		else {
			console.error("Error subscribing:", submitError);
			setError("Failed to subscribe. Please try again.");
		}
		else setSubscribed(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-reveal": true,
		className: "reveal relative overflow-hidden rounded-[32px] glass-strong p-10 sm:p-16 text-center shadow-elevated",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-0 opacity-70",
			style: { background: "var(--gradient-hero)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Stay in orbit" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-5 font-display text-4xl sm:text-5xl font-semibold tracking-tight text-balance",
					children: [
						"The ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "Neutrino"
						}),
						" dispatch"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: "One thoughtful email a month — new bootcamps, research drops, and reading."
				}),
				subscribed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 text-primary font-medium p-4 rounded-full glass-strong",
					children: "Thanks for subscribing! Keep an eye on your inbox."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubscribe,
					className: "mt-8 mx-auto flex max-w-md items-center gap-2 rounded-full glass p-1.5 relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pl-3 text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							required: true,
							name: "email",
							placeholder: "neutrinoscienceclub@gmail.com",
							disabled: loading,
							className: "flex-1 bg-transparent px-2 py-2 text-sm outline-none placeholder:text-muted-foreground disabled:opacity-50"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							disabled: loading,
							className: "rounded-full bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform disabled:opacity-70 disabled:hover:scale-100",
							children: loading ? "Wait..." : "Subscribe"
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -bottom-8 left-0 right-0 text-xs text-destructive text-center",
							children: error
						})
					]
				})
			]
		})]
	}) });
}
//#endregion
export { PageHero, Home as component };
