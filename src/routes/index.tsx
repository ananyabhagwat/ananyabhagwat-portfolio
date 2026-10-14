import { createFileRoute, Link } from "@tanstack/react-router";
import { EMAIL, LINKEDIN, SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { ArrowUpRight, Asterisk } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ananya Bhagwat - HCI Portfolio" },
      {
        name: "description",
        content:
          "Ananya Bhagwat is an HCI designer at UCL working across health tech, interaction design and sustainable systems.",
      },
      { property: "og:title", content: "Ananya Bhagwat — HCI Designer" },
      {
        property: "og:description",
        content: "Design work grounded in research. Case studies across HCI, health and interaction design.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const BASE = "https://ananyabhagwat.github.io";

const projects = [
  {
    tag: "Interaction Design · Group",
    title: "Chippity",
    desc: "A browser extension that makes the hidden costs of ChatGPT use visible and actionable, without getting in the way of why students use it.",
    img: `${BASE}/images/chippity-card-image.png`,
    slug: "chippity",
    bg: "card-lime",
  },
  {
    tag: "Independent Project",
    title: "Pollygraph",
    desc: "An interactive polling plug-in that lets students cast votes by pointing at a shared display, replacing hand-raising with spatial, anonymous participation.",
    img: `${BASE}/images/pollygraph-card-image.png`,
    slug: "pollygraph",
    bg: "card-lilac",
  },
  {
    tag: "Independent Project",
    title: "Baggage Reclaim",
    desc: "Redesigning the information environment at baggage reclaim to reduce uncertainty and frustration, without changing how baggage handling actually works.",
    img: `${BASE}/images/baggage-card-image.png`,
    slug: "baggage",
    bg: "card-sky",
  },
  {
    tag: "HCI for Health & Wellbeing · Individual",
    title: "GQM Evaluation of Clue",
    desc: "A systematic audit of whether Clue meets the goals its users actually bring to it, grounded in CHI 2024 research on menstrual health data exploration.",
    img: `${BASE}/images/GQM-card-image.png`,
    slug: "clue",
    bg: "card-rose",
  },
  {
    tag: "HCI for Health & Wellbeing · Individual",
    title: "Menstrual Tracker Prototype",
    desc: "A prototype testing whether uncertainty-aware predictions and cross-cycle reflection actually help users make sense of their menstrual health data.",
    img: `${BASE}/images/prototype-card-image.png`,
    slug: "prototype",
    bg: "card-sand",
  },
];

const tags = [
  "Attention and Focus",
  "Workplace Communication",
  "Self-interruption",
  "Controlled Experiment",
  "Browser-based Paradigm",
];

function SectionTitle({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <h2 className="mb-10 flex items-baseline gap-3 text-2xl font-normal md:text-3xl">
      <span className="text-sm text-muted-foreground">{n}</span>
      {children}
    </h2>
  );
}

function Badge() {
  const text = "✦ NICE ✦ TO ✦ MEET ✦ YOU ";
  return (
    <div className="relative grid h-32 w-32 place-items-center rounded-full bg-lime">
      <svg viewBox="0 0 100 100" className="animate-spin-slow absolute inset-0 h-full w-full">
        <defs>
          <path id="c" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
        </defs>
        <text className="fill-foreground text-[10px] font-medium tracking-[0.2em]">
          <textPath href="#c">{text}</textPath>
        </text>
      </svg>
      <Asterisk className="h-10 w-10 text-foreground" strokeWidth={2.5} />
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <div className="mx-auto max-w-6xl px-6">
        <SiteHeader />

        {/* Hero */}
        <section className="relative pb-24 pt-20 md:pt-32">
          <div className="absolute right-0 top-10 hidden md:block">
            <Badge />
          </div>
          <p className="mb-6 text-sm text-muted-foreground">Human-Computer Interaction - UCL</p>
          <h1 className="max-w-4xl text-5xl font-normal leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
            Design work grounded
            <br />
            in research.
          </h1>
          <p className="mt-12 max-w-xl text-lg leading-relaxed md:text-xl">
            Five projects across HCI, health technology, interaction design, and sustainable systems.
            Each one started with people and ended with something testable.
          </p>
          <div className="mt-8 flex gap-6 text-sm">
            <a href={EMAIL} className="underline underline-offset-4 hover:opacity-70">Email</a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:opacity-70">LinkedIn</a>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="pb-24">
          <SectionTitle n="01">Work / Case Study</SectionTitle>
          <div className="flex flex-col gap-10">
            {projects.map((p) => (
              <Link
                key={p.title}
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className={`group grid overflow-hidden rounded-3xl ${p.bg} md:grid-cols-5`}
              >
                <div className="flex flex-col justify-between gap-6 p-8 md:col-span-2 md:p-10">
                  <div>
                    <p className="text-sm text-foreground/70">{p.tag}</p>
                    <h3 className="mt-2 text-3xl font-medium tracking-tight">{p.title}</h3>
                    <p className="mt-4 leading-relaxed text-foreground/80">{p.desc}</p>
                  </div>
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm font-medium transition group-hover:gap-3">
                    Read More <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <div className="p-6 md:col-span-3 md:pl-0 md:pt-10">
                  <img
                    src={p.img}
                    alt={`${p.title} cover`}
                    loading="lazy"
                    className="h-full max-h-96 w-full rounded-2xl object-cover shadow-xl transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Research */}
        <section id="research" className="pb-24">
          <SectionTitle n="02">Research / MSc Dissertation</SectionTitle>
          <div className="grid gap-10 rounded-3xl border p-8 md:grid-cols-3 md:p-12">
            <div>
              <span className="inline-block rounded-full bg-lime px-3 py-1 text-xs font-medium">In Progress</span>
              <h3 className="mt-4 text-3xl font-medium tracking-tight">Predictability and Focused Work</h3>
            </div>
            <div className="space-y-4 leading-relaxed text-muted-foreground md:col-span-2">
              <p>
                Modern knowledge work asks people to stay constantly available while doing cognitively demanding tasks. Slack, Teams, email, and calendar notifications fragment attention not just when they arrive, but before they do - by creating a persistent expectation that something might come in at any moment. This project investigates whether that anticipatory state, produced by unpredictable communication timing, is itself a source of distraction.
              </p>
              <p>
                The study uses a controlled browser-based experiment in which participants complete a writing or editing task while receiving simulated workplace chat messages on either a predictable or unpredictable schedule. The core question is whether unpredictability increases self-interruption behaviour, even when the total number of messages is held constant. Measures include switching frequency, task completion time, error rates, and self-reported workload.
              </p>
              <p>
                The project builds on HCI research into multitasking and interruption management, and contributes by shifting focus from interruptions as isolated events to anticipation as an ongoing attentional state produced by communication systems themselves.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {tags.map((t) => (
                  <span key={t} className="rounded-full border px-3 py-1 text-xs text-foreground">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="pb-16">
          <SectionTitle n="03">Contact</SectionTitle>
          <div className="rounded-3xl bg-primary p-10 text-primary-foreground md:p-16">
            <h3 className="max-w-2xl text-4xl font-normal leading-tight tracking-tight md:text-6xl">
              Interested in working together?
            </h3>
            <p className="mt-6 max-w-lg text-primary-foreground/70">
              Open to research-driven design roles, internships, and collaborations in HCI and
              interaction design.
            </p>
            <a
              href={EMAIL}
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-medium text-foreground transition hover:opacity-90"
            >
              <Asterisk className="h-4 w-4" /> Get in touch
            </a>
          </div>
        </section>

        <SiteFooter />
      </div>
    </div>
  );
}
