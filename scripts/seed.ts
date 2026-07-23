/// <reference types="node" />
import "dotenv/config";
import { createClient } from "@supabase/supabase-js";

const url = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || "";
const key = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

if (!url || !key) {
  console.error("Missing Supabase credentials.");
  console.error("Add SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to your .env file.");
  console.error("Get your service_role key from: Supabase Dashboard -> Settings -> API -> service_role key");
  process.exit(1);
}

const supabase = createClient(url, key);

const events = [
  { title: "NeutrinoCon 2026", tag: "Flagship", date: "Mar 14–16, 2026", time: "All day", city: "Main Auditorium", description: "Three days on the frontiers of AI, physics and engineering.", grad: "from-blue-500/50 to-cyan-400/30", status: "upcoming", sort_order: 1 },
  { title: "Deep Learning Sprint", tag: "Bootcamp", date: "Feb 08, 2026", time: "9:00 – 21:00", city: "Lab 3B", description: "Build a transformer end-to-end in one weekend.", grad: "from-indigo-500/50 to-blue-400/30", status: "upcoming", sort_order: 2 },
  { title: "Stargazing Night", tag: "Field", date: "Jan 22, 2026", time: "20:00 – 00:00", city: "Observatory Hill", description: "Deep-sky targets with 8-inch Dobsonians. Bring warm layers.", grad: "from-purple-500/50 to-cyan-400/30", status: "upcoming", sort_order: 3 },
  { title: "Rover Reveal", tag: "Demo", date: "Jan 10, 2026", time: "18:00", city: "Robotics Lab", description: "Helios rover unveiled with a live obstacle course.", grad: "from-cyan-500/50 to-blue-500/30", status: "upcoming", sort_order: 4 },
  { title: "Quantum Reading Night", tag: "Study", date: "Dec 12, 2025", time: "19:00", city: "Library Loft", description: "Group read-along of Nielsen & Chuang chapters 4–5.", grad: "from-blue-500/40 to-indigo-500/30", status: "past", sort_order: 5 },
  { title: "Hackathon: Climate", tag: "Hack", date: "Nov 04, 2025", time: "24h", city: "Innovation Hall", description: "48 teams, 27 projects, one winner: an ocean-plastic classifier.", grad: "from-cyan-400/40 to-purple-500/30", status: "past", sort_order: 6 },
];

const bootcamps = [
  { name: "Deep Learning Sprint", weeks: 6, level: "Intermediate", seats: 24, description: "Build a transformer from scratch, fine-tune it, deploy it.", stack: ["PyTorch", "JAX", "Weights & Biases"], gradient: "from-blue-500/50 to-cyan-400/30", sort_order: 1 },
  { name: "Robotics Lab", weeks: 4, level: "Beginner", seats: 20, description: "Design, print, wire and program a differential-drive robot.", stack: ["ROS 2", "ESP32", "Fusion 360"], gradient: "from-cyan-400/50 to-indigo-500/30", sort_order: 2 },
  { name: "Quantum 101", weeks: 3, level: "Beginner", seats: 30, description: "From qubits to Grover — with hands-on Qiskit simulations.", stack: ["Qiskit", "NumPy"], gradient: "from-indigo-500/50 to-blue-500/30", sort_order: 3 },
  { name: "Bioinformatics", weeks: 5, level: "Intermediate", seats: 18, description: "Sequencing pipelines, alignment, and open genomic datasets.", stack: ["Biopython", "R", "Nextflow"], gradient: "from-purple-500/50 to-cyan-400/30", sort_order: 4 },
  { name: "Data Engineering", weeks: 5, level: "Intermediate", seats: 22, description: "Airflow, dbt, warehousing — production-grade data pipelines.", stack: ["Airflow", "dbt", "DuckDB"], gradient: "from-blue-400/50 to-purple-500/30", sort_order: 5 },
  { name: "Astronomy Studio", weeks: 4, level: "All levels", seats: 26, description: "Astrophotography, stacking, spectroscopy and public outreach.", stack: ["PixInsight", "SkyX"], gradient: "from-cyan-500/50 to-blue-500/30", sort_order: 6 },
];

const activities = [
  { icon_name: "Code2", title: "Programming Circle", description: "Weekly problem-solving, code review and paired programming across languages.", tag: "Weekly · Wed", sort_order: 1 },
  { icon_name: "Cpu", title: "AI Lab", description: "Applied ML, LLMs and research replication with an in-house GPU cluster.", tag: "Weekly · Fri", sort_order: 2 },
  { icon_name: "Bot", title: "Robotics Guild", description: "Embedded systems, ROS 2, CAD and full-stack robots in the lab.", tag: "Weekly · Sat", sort_order: 3 },
  { icon_name: "Telescope", title: "Astronomy Nights", description: "Monthly observation with Dobsonians and astrophotography rigs.", tag: "Monthly", sort_order: 4 },
  { icon_name: "FlaskConical", title: "Experimental Sciences", description: "Chemistry, biology and physics experiments in a mentored setting.", tag: "Bi-weekly", sort_order: 5 },
  { icon_name: "Sigma", title: "Math Olympiad Prep", description: "Serious training for national and international mathematics olympiads.", tag: "Weekly · Tue", sort_order: 6 },
  { icon_name: "Microscope", title: "Research Reading Group", description: "Deep-dive discussions on recent papers across STEM.", tag: "Weekly · Sun", sort_order: 7 },
  { icon_name: "Sparkles", title: "Maker Fridays", description: "Open lab hours — 3D printers, mills, boards, whatever you're building.", tag: "Weekly · Fri", sort_order: 8 },
];

const team_members = [
  { name: "Didarul Azam Mahi", role: "President", bio: "AI & Software Developer, Technology Educator.", gradient: "from-blue-500/60 to-cyan-400/40", type: "core", sort_order: 1 },
  { name: "Marco Silva", role: "Head of Astronomy", bio: "Astrophysics, telescopes, dark skies.", gradient: "from-indigo-500/60 to-blue-400/40", type: "core", sort_order: 2 },
  { name: "Ren Takeda", role: "Robotics Lead", bio: "ROS 2, embedded, weird locomotion.", gradient: "from-cyan-400/60 to-blue-500/40", type: "core", sort_order: 3 },
  { name: "Ines Oduya", role: "Research Chair", bio: "Reproducibility & open science.", gradient: "from-purple-500/60 to-cyan-400/40", type: "core", sort_order: 4 },
  { name: "Kenji Park", role: "AI Lab Lead", bio: "Diffusion, LLMs, alignment.", gradient: "from-blue-500/60 to-purple-500/40", type: "core", sort_order: 5 },
  { name: "Sofia Vega", role: "Math Olympiad Coach", bio: "Combinatorics, geometry, proofs.", gradient: "from-cyan-500/60 to-indigo-500/40", type: "core", sort_order: 6 },
  { name: "Ana Fernandez", role: "Operations", bio: "Makes the trains run on time.", gradient: "from-indigo-500/60 to-cyan-400/40", type: "core", sort_order: 7 },
  { name: "Rohan Iyer", role: "Community", bio: "Onboarding, mentorship, events.", gradient: "from-purple-500/60 to-blue-500/40", type: "core", sort_order: 8 },
  { name: "Prof. L. Novak", role: "Mentor", bio: "CS, quantum", gradient: "", type: "mentor", sort_order: 9 },
  { name: "Dr. E. Nakamura", role: "Mentor", bio: "astrophysics", gradient: "", type: "mentor", sort_order: 10 },
  { name: "Prof. H. Ali", role: "Mentor", bio: "bioinformatics", gradient: "", type: "mentor", sort_order: 11 },
  { name: "Dr. M. Chen", role: "Mentor", bio: "robotics", gradient: "", type: "mentor", sort_order: 12 },
  { name: "Prof. S. Iyer", role: "Mentor", bio: "statistics", gradient: "", type: "mentor", sort_order: 13 },
  { name: "Dr. J. Rossi", role: "Mentor", bio: "physics", gradient: "", type: "mentor", sort_order: 14 },
];

const research_papers = [
  { title: "Small-model replications of BERT on scientific abstracts", area: "NLP", year: 2025, authors: "Sharma, Silva, Takeda", status: "Preprint", sort_order: 1 },
  { title: "Photometric variability of RR Lyrae stars in the northern sky", area: "Astronomy", year: 2025, authors: "Nakamura, Oduya", status: "Data release", sort_order: 2 },
  { title: "SLAM benchmarks for indoor micro-rovers", area: "Robotics", year: 2024, authors: "Chen, Iyer, Vega", status: "Dataset", sort_order: 3 },
  { title: "Solar magnetogram anomaly detection with autoencoders", area: "Astrophysics", year: 2024, authors: "Park, Fernandez", status: "Preprint", sort_order: 4 },
  { title: "Rapid enzyme screening with active-learning pipelines", area: "Bioinformatics", year: 2024, authors: "Ali, Novak, Chen", status: "Preprint", sort_order: 5 },
];

const resources = [
  { icon_name: "BookOpen", title: "The Deep Learning Reading List", tag: "Reading", description: "A staff-picked path from linear algebra to transformers.", sort_order: 1 },
  { icon_name: "Video", title: "Robotics 101 — Video Course", tag: "Video", description: "Twelve short lessons from wheels to autonomous nav.", sort_order: 2 },
  { icon_name: "Code", title: "Starter: FastAPI + Postgres", tag: "Starter", description: "A production-shaped Python API scaffold.", sort_order: 3 },
  { icon_name: "FileArchive", title: "Open dataset: Northern Sky Photometry", tag: "Data", description: "5.2M rows, 220 nights, calibrated.", sort_order: 4 },
  { icon_name: "BookOpen", title: "Math Olympiad — Problem Book", tag: "Reading", description: "Curated problems by topic and year.", sort_order: 5 },
  { icon_name: "Video", title: "Live class: Diffusion Models", tag: "Video", description: "3-hour hands-on walkthrough by Prof. Iyer.", sort_order: 6 },
];

const faqs = [
  { question: "Do I need to be a member to use these?", answer: "Most resources are public. Members get access to private mentor sessions, GPU quota and the Slack.", sort_order: 1 },
  { question: "Can I contribute a resource?", answer: "Absolutely — open a PR on our GitHub or email the maintainers.", sort_order: 2 },
  { question: "Do you offer certification?", answer: "We issue attendance and project completion certificates for bootcamps.", sort_order: 3 },
  { question: "Is there a licensing policy?", answer: "All datasets ship under CC-BY-4.0 unless otherwise stated.", sort_order: 4 },
];

const testimonials = [
  { name: "Aditi Sharma", role: "ML Engineer, formerly NSC '23", quote: "NSC didn't just teach me to code — it taught me how researchers think. Every workshop pushed me deeper.", sort_order: 1 },
  { name: "Marco Silva", role: "Physics Undergrad", quote: "The observatory nights got me hooked on astrophysics. Now I'm publishing my first paper with a mentor from NSC.", sort_order: 2 },
  { name: "Ren Takeda", role: "Robotics Lead", quote: "Nowhere else do students get this much lab time, mentorship and freedom to build weird, brilliant things.", sort_order: 3 },
];

const gallery_items = [
  { height: 260, gradient: "from-blue-500/60 to-cyan-400/40", caption: "AI Lab · Sat night", sort_order: 1 },
  { height: 360, gradient: "from-purple-500/50 to-blue-500/40", caption: "Stargazing @ Observatory", sort_order: 2 },
  { height: 220, gradient: "from-cyan-400/60 to-indigo-500/40", caption: "Rover assembly", sort_order: 3 },
  { height: 300, gradient: "from-indigo-500/60 to-cyan-400/40", caption: "Diffusion workshop", sort_order: 4 },
  { height: 240, gradient: "from-blue-400/60 to-purple-500/40", caption: "Demo day 2025", sort_order: 5 },
  { height: 320, gradient: "from-cyan-500/60 to-blue-500/40", caption: "Physics olympiad prep", sort_order: 6 },
  { height: 260, gradient: "from-purple-500/50 to-cyan-400/40", caption: "Bootcamp 04 kickoff", sort_order: 7 },
  { height: 280, gradient: "from-blue-500/60 to-indigo-500/40", caption: "Late night whiteboards", sort_order: 8 },
  { height: 220, gradient: "from-cyan-400/50 to-purple-500/40", caption: "Field trip · Kepler Inst.", sort_order: 9 },
  { height: 300, gradient: "from-indigo-500/50 to-blue-400/40", caption: "Robotics guild build", sort_order: 10 },
  { height: 260, gradient: "from-blue-500/50 to-cyan-500/40", caption: "Hackathon award", sort_order: 11 },
  { height: 240, gradient: "from-purple-500/60 to-blue-500/40", caption: "Reading group", sort_order: 12 },
];

const projects = [
  { name: "Kepler-Vision", stack: "PyTorch · CV", description: "Automated exoplanet transit detection from light curves.", sort_order: 1 },
  { name: "Helios Rover", stack: "ROS 2 · ESP32", description: "Solar-powered autonomous rover with SLAM navigation.", sort_order: 2 },
  { name: "Axion", stack: "Rust · WASM", description: "A physics-first differential equation playground for the browser.", sort_order: 3 },
  { name: "Nimbus LLM", stack: "Transformers", description: "Small language model trained on open scientific abstracts.", sort_order: 4 },
];

const site_stats = [
  { value: 1200, suffix: "+", label: "Active members", sort_order: 1 },
  { value: 180, suffix: "+", label: "Workshops hosted", sort_order: 2 },
  { value: 74, suffix: "", label: "Live projects", sort_order: 3 },
  { value: 22, suffix: "", label: "Partner schools", sort_order: 4 },
  { value: 46, suffix: "", label: "Awards & prizes", sort_order: 5 },
];

const timeline = [
  { year: "2019", title: "Founded", description: "Twelve students, one whiteboard, a lot of questions.", sort_order: 1 },
  { year: "2021", title: "First bootcamp", description: "48-hour AI sprint kicks off our flagship series.", sort_order: 2 },
  { year: "2023", title: "Research wing", description: "Mentored papers accepted at three regional conferences.", sort_order: 3 },
  { year: "2024", title: "Robotics lab", description: "A dedicated lab with 3D printers, mills and dev boards.", sort_order: 4 },
  { year: "2026", title: "1000+ members", description: "A global network across 22 partner institutions.", sort_order: 5 },
];

function extractMissingColumnsFromError(error: { message: string }): string[] {
  const match = error.message.match(/Could not find the '([^']+)' column of '([^']+)'/);
  if (match) {
    return [match[1]];
  }
  return [];
}

function generateAlterTableSql(tableName: string, missingColumns: string[], sampleRow: Record<string, unknown>): string {
  const alterStatements = missingColumns.map(col => {
    const value = sampleRow[col];
    let type = "TEXT";

    if (typeof value === "number") {
      type = Number.isInteger(value) ? "INTEGER" : "REAL";
    } else if (typeof value === "boolean") {
      type = "BOOLEAN";
    } else if (Array.isArray(value)) {
      type = "TEXT[]";
    }

    return `ALTER TABLE public.${tableName} ADD COLUMN IF NOT EXISTS ${col} ${type};`;
  });

  return alterStatements.join("\n");
}

async function seedTable(tableName: string, data: Record<string, unknown>[]): Promise<boolean> {
  let rowsToInsert = [...data];
  const allMissingColumns = new Set<string>();

  for (let attempt = 0; attempt < 5; attempt++) {
    const { error } = await supabase.from(tableName).insert(rowsToInsert);

    if (!error) {
      console.log(`Seeded ${tableName}${allMissingColumns.size > 0 ? ` (${allMissingColumns.size} column(s) skipped)` : ""}`);
      return true;
    }

    const missingColumns = extractMissingColumnsFromError(error);

    if (missingColumns.length === 0) {
      console.error(`Error seeding ${tableName}:`, error.message);
      console.error(`Hint: Make sure table "${tableName}" exists in Supabase and RLS allows inserts.`);
      return false;
    }

    for (const col of missingColumns) {
      allMissingColumns.add(col);
    }

    console.warn(`\n⚠️  Table "${tableName}" is missing columns: ${Array.from(allMissingColumns).join(", ")}`);
    console.warn(`   Run this SQL in Supabase SQL Editor to fix:\n`);
    console.warn(generateAlterTableSql(tableName, Array.from(allMissingColumns), data[0]));
    console.warn("");

    rowsToInsert = rowsToInsert.map(row => {
      const newRow: Record<string, unknown> = { ...row };
      for (const col of missingColumns) {
        delete newRow[col];
      }
      return newRow;
    });
  }

  console.error(`Failed to seed ${tableName} after multiple retries.`);
  return false;
}

async function seed() {
  console.log("Seeding started...\n");

  const tables = [
    { name: "events", data: events },
    { name: "bootcamps", data: bootcamps },
    { name: "activities", data: activities },
    { name: "team_members", data: team_members },
    { name: "research_papers", data: research_papers },
    { name: "resources", data: resources },
    { name: "faqs", data: faqs },
    { name: "testimonials", data: testimonials },
    { name: "gallery_items", data: gallery_items },
    { name: "projects", data: projects },
    { name: "site_stats", data: site_stats },
    { name: "timeline", data: timeline },
  ];

  let successCount = 0;
  let failCount = 0;

  for (const table of tables) {
    const result = await seedTable(table.name, table.data);
    if (result) successCount++;
    else failCount++;
  }

  console.log("\n" + "=".repeat(50));
  console.log(`Seeding complete!`);
  console.log(`  ✅ Success: ${successCount}`);
  console.log(`  ❌ Failed:  ${failCount}`);
  console.log("=".repeat(50));

  if (failCount > 0) {
    process.exit(1);
  }
}

seed().catch(console.error);
