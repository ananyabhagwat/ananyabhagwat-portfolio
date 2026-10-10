import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects, type Block } from "@/content/projects";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const index = projects.findIndex((p) => p.slug === params.slug);
    if (index < 0) throw notFound();
    return { project: projects[index]!, next: projects[(index + 1) % projects.length]! };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }] };
    const p = loaderData.project;
    return {
      meta: [
        { title: `${p.title} — Ananya Bhagwat` },
        { name: "description", content: p.subtitle },
        { property: "og:title", content: `${p.title} — Ananya Bhagwat` },
        { property: "og:description", content: p.subtitle },
        { property: "og:type", content: "article" },
        { property: "og:image", content: p.cover },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: p.cover },
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectPage,
});

function ProjectNotFound() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-32 text-center">
      <h1 className="text-4xl">Project not found</h1>
      <Link to="/" className="mt-6 inline-block underline underline-offset-4">Back home</Link>
    </div>
  );
}

function BlockView({ b }: { b: Block }) {
  if (b.type === "p") return <p className="leading-relaxed text-foreground/80">{b.text}</p>;
  if (b.type === "h4") return <h4 className="pt-4 text-lg font-medium">{b.text}</h4>;
  if (b.type === "list")
    return (
      <ul className="space-y-2">
        {b.items.map((i) => (
          <li key={i} className="flex gap-3 text-foreground/80">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-lime-deep" />
            {i}
          </li>
        ))}
      </ul>
    );
  return (
    <figure className="my-4">
      <div className="overflow-hidden rounded-2xl border bg-muted">
        <img src={b.src} alt={b.alt} loading="lazy" className="w-full" />
      </div>
      {b.caption && <figcaption className="mt-3 text-sm text-muted-foreground">{b.caption}</figcaption>}
    </figure>
  );
}

function ProjectPage() {
  const { project: p, next } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <div className="mx-auto max-w-6xl px-6">
        <SiteHeader />

        <Link to="/" hash="work" className="mt-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> All work
        </Link>

        <section className="pb-16 pt-10">
          <p className="mb-6 text-sm text-muted-foreground">{p.tag}</p>
          <h1 className="max-w-4xl text-4xl font-normal leading-[1.05] tracking-tight md:text-6xl">{p.title}</h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed md:text-xl">{p.subtitle}</p>
        </section>

        <div className={`overflow-hidden rounded-3xl p-6 md:p-12 ${p.bg}`}>
          <img src={p.cover} alt={`${p.title} cover`} className="w-full rounded-2xl shadow-xl" />
        </div>

        <dl className="grid gap-8 border-b py-12 sm:grid-cols-2 md:grid-cols-4">
          {p.meta.map((m) => (
            <div key={m.label}>
              <dt className="text-sm text-muted-foreground">{m.label}</dt>
              <dd className="mt-2 leading-relaxed">{m.value}</dd>
            </div>
          ))}
        </dl>

        <article className="py-16">
          {p.sections.map((s, i) => (
            <section key={s.heading} className="grid gap-6 border-b py-12 last:border-0 md:grid-cols-3">
              <h2 className="flex items-baseline gap-3 text-2xl font-normal md:sticky md:top-8 md:self-start">
                <span className="text-sm text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                {s.heading}
              </h2>
              <div className="space-y-5 md:col-span-2">
                {s.blocks.map((b, j) => <BlockView key={j} b={b} />)}
              </div>
            </section>
          ))}
        </article>

        <Link
          to="/projects/$slug"
          params={{ slug: next.slug }}
          className={`group mb-16 flex items-center justify-between rounded-3xl p-10 md:p-14 ${next.bg}`}
        >
          <div>
            <p className="text-sm text-foreground/70">Next project</p>
            <p className="mt-2 text-3xl font-medium tracking-tight md:text-4xl">{next.title}</p>
          </div>
          <span className="grid h-14 w-14 place-items-center rounded-full bg-background transition group-hover:translate-x-1">
            <ArrowRight className="h-5 w-5" />
          </span>
        </Link>

        <SiteFooter />
      </div>
    </div>
  );
}
