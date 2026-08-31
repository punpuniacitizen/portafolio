import type { Metadata } from "next";
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import Figure from "@/components/Figure";
import PipelineDiagram from "@/components/PipelineDiagram";
import { contact, projects, type ProjectFigure } from "@/data/content";

const detailed = projects.filter((p) => p.detail);

export function generateStaticParams() {
  return detailed.map((p) => ({ slug: p.detail!.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/proyectos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = detailed.find((p) => p.detail!.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Nicolás Florentín`,
    description: project.detail!.lead,
  };
}

function FigureBlock({ figure }: { figure: ProjectFigure }) {
  if (figure.kind === "pipeline") {
    return (
      <Figure caption={figure.caption}>
        <PipelineDiagram />
      </Figure>
    );
  }

  if (figure.kind === "video") {
    return (
      <Figure caption={figure.caption}>
        <div className="flex min-h-64 flex-col items-center justify-center border border-dashed border-[var(--blueprint-30)] p-6 text-center">
          <span className="tech-label text-[var(--ink-40)]">
            Vista reservada
          </span>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--ink-40)]">
            {figure.note}
          </p>
        </div>
      </Figure>
    );
  }

  if (figure.kind === "architecture") {
    return (
      <Figure caption={figure.caption}>
        <ArchitectureDiagram />
      </Figure>
    );
  }

  return (
    <Figure caption={figure.caption}>
      <Image
        src={figure.src}
        alt={figure.alt}
        width={figure.width}
        height={figure.height}
        className="mx-auto h-auto w-full max-w-lg"
      />
    </Figure>
  );
}

export default async function ProjectPage({
  params,
}: PageProps<"/proyectos/[slug]">) {
  const { slug } = await params;
  const project = detailed.find((p) => p.detail!.slug === slug);
  if (!project) notFound();

  const detail = project.detail!;

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-[var(--blueprint-30)] bg-[var(--paper)]/85 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-6xl items-center gap-6 px-6 py-3 sm:px-10">
          <Link href="/" className="tech-label text-[var(--ink)]">
            N. Florentín
          </Link>
          <Link
            href="/#proyectos"
            className="tech-label ml-auto text-[var(--ink-40)] transition-colors hover:text-[var(--accent)]"
          >
            ← Volver a proyectos
          </Link>
        </div>
      </nav>

      <main className="flex-1">
        <header className="blueprint-grid relative">
          <div className="corner-marks relative mx-auto w-full max-w-6xl px-6 pt-12 pb-16 sm:px-10 md:pt-16 md:pb-20">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2 border-b border-[var(--blueprint-30)] pb-4">
              <span className="tech-label text-[var(--accent)]">
                Hoja {project.code}
              </span>
              <span className="tech-label text-[var(--ink-40)]">
                Escala 1:1
              </span>
              <span className="tech-label text-[var(--ink-40)]">Rev. 01</span>
              <span className="tech-label ml-auto text-[var(--ink-40)]">
                {contact.location}
              </span>
            </div>

            <h1 className="font-display mt-12 max-w-4xl text-[clamp(2rem,5.5vw,4rem)] leading-[1.02] font-semibold tracking-[-0.03em]">
              {project.title}
            </h1>

            {/* Cota que acota el título y trae el terracota al bloque */}
            <div className="mt-7 max-w-2xl">
              <svg
                className="h-3 w-full text-[var(--accent)]"
                viewBox="0 0 600 12"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <line
                  x1="1"
                  y1="0"
                  x2="1"
                  y2="12"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <line
                  x1="599"
                  y1="0"
                  x2="599"
                  y2="12"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <line
                  x1="1"
                  y1="6"
                  x2="599"
                  y2="6"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <path d="M1 6 L14 2.5 L14 9.5 Z" fill="currentColor" />
                <path d="M599 6 L586 2.5 L586 9.5 Z" fill="currentColor" />
              </svg>
              <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <span className="font-mono text-sm tracking-[0.18em] text-[var(--accent)] uppercase">
                  {project.discipline}
                </span>
                <span className="tech-label text-[var(--ink-40)]">
                  {project.status}
                </span>
              </div>
            </div>

            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-[var(--ink-60)] sm:text-xl">
              {detail.lead}
            </p>
          </div>
        </header>

        {detail.sections.map((section) => (
          <Fragment key={section.doc}>
            <section className="border-t border-[var(--blueprint-30)]">
              <div className="corner-marks relative mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 md:py-20">
                <div className="grid gap-8 lg:grid-cols-[10rem_1fr] lg:gap-14">
                  <span className="tech-label text-[var(--accent)]">
                    {section.doc}
                  </span>
                  {/* min-w-0: sin esto el ítem de grilla se estira para encajar
                    los diagramas anchos en vez de dejarlos scrollear. */}
                  <div className="min-w-0">
                    <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                      {section.title}
                    </h2>
                    {section.body.length > 0 ? (
                      <div className="mt-6 max-w-2xl space-y-5 leading-relaxed text-[var(--ink-60)]">
                        {section.body.map((paragraph) => (
                          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                        ))}
                      </div>
                    ) : null}

                    {section.items ? (
                      <ul className="mt-6 max-w-2xl">
                        {section.items.map((item, i) => (
                          <li
                            key={item.slice(0, 40)}
                            className="grid grid-cols-[2.5rem_1fr] items-baseline gap-2 border-b border-[var(--blueprint-15)] py-4 first:border-t"
                          >
                            <span className="tech-label text-[var(--accent)]">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="leading-relaxed text-[var(--ink-60)]">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {section.figure ? (
                      <FigureBlock figure={section.figure} />
                    ) : null}

                    {section.doc === detail.statsAfterDoc ? (
                      <dl className="mt-10 grid gap-x-8 gap-y-6 border-t border-[var(--blueprint-30)] pt-6 sm:grid-cols-2 lg:grid-cols-4">
                        {detail.stats.map(([value, label]) => (
                          <div key={label}>
                            <dt className="font-display text-xl font-semibold">
                              {value}
                            </dt>
                            <dd className="tech-label mt-1.5 text-[var(--ink-40)]">
                              {label}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    ) : null}
                  </div>
                </div>
              </div>
            </section>
          </Fragment>
        ))}

        <section className="border-t border-[var(--blueprint-30)]">
          <div className="mx-auto flex w-full max-w-6xl flex-wrap gap-4 px-6 py-16 sm:px-10">
            {detail.repo ? (
              <a
                href={detail.repo}
                target="_blank"
                rel="noreferrer"
                className="tech-label inline-flex items-center gap-2 border border-[var(--accent)] bg-[var(--accent)] px-6 py-3 text-[var(--paper)] transition-colors hover:bg-transparent hover:text-[var(--accent)]"
              >
                Ver el código en GitHub
                <span aria-hidden="true">↗</span>
              </a>
            ) : null}
            <Link
              href="/#proyectos"
              className="tech-label inline-block border border-[var(--blueprint-30)] px-6 py-3 text-[var(--blueprint)] transition-colors hover:border-[var(--blueprint)] hover:text-[var(--accent)]"
            >
              ← Volver a proyectos
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--blueprint-30)]">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-x-8 gap-y-2 px-6 py-6 sm:px-10">
          <span className="tech-label text-[var(--ink-40)]">
            {contact.name} — {contact.role}
          </span>
          <span className="tech-label ml-auto text-[var(--ink-40)]">
            Hoja {project.code} · Rev. 01
          </span>
        </div>
      </footer>
    </>
  );
}
