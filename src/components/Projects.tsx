"use client";

import Link from "next/link";
import { useState } from "react";
import { flushSync } from "react-dom";
import { projects } from "@/data/content";

type ViewTransition = {
  ready: Promise<void>;
  finished: Promise<void>;
};

type DocumentWithViewTransition = Document & {
  startViewTransition?: (callback: () => void) => ViewTransition;
};

/** El nombre tiene que ser único e igual para la ficha y la hoja del mismo proyecto. */
const vtName = (code: string) => `proj-${code.replace(/[^a-zA-Z0-9]/g, "")}`;

/**
 * Carrusel vertical: la ficha elegida sube y se amplía, y la que estaba
 * ampliada baja a la fila. La transición la hace el navegador con
 * View Transitions; donde no está soportado, el cambio es instantáneo.
 */
export default function Projects() {
  const [activeCode, setActiveCode] = useState(projects[0].code);
  const active = projects.find((p) => p.code === activeCode) ?? projects[0];
  const rest = projects.filter((p) => p.code !== active.code);

  const select = (code: string) => {
    if (code === activeCode) return;

    const doc = document as DocumentWithViewTransition;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!doc.startViewTransition || reduced) {
      setActiveCode(code);
      return;
    }

    const transition = doc.startViewTransition(() => {
      flushSync(() => setActiveCode(code));
    });

    // Si se elige otra ficha antes de que termine, el navegador aborta la
    // transición y rechaza sus promesas. No es un error que deba propagarse.
    transition.ready.catch(() => {});
    transition.finished.catch(() => {});
  };

  return (
    <div>
      {/* Hoja ampliada */}
      <article
        style={{ viewTransitionName: vtName(active.code) }}
        className="corner-marks relative border border-[var(--blueprint)] bg-[var(--paper-2)]"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-[var(--blueprint-30)] px-6 py-3 sm:px-8">
          <span className="tech-label text-[var(--accent)]">
            {active.code} — Hoja ampliada
          </span>
          <span className="tech-label text-[var(--ink-40)]">
            {active.status}
          </span>
        </div>

        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_0.85fr] lg:gap-10">
          <div>
            <h3 className="font-display text-2xl leading-tight font-semibold tracking-tight sm:text-3xl">
              {active.title}
            </h3>
            <p className="tech-label mt-2 text-[var(--blueprint)]">
              {active.discipline}
            </p>
            <p className="mt-5 leading-relaxed text-[var(--ink-60)]">
              {active.body}
            </p>

            {active.specs ? (
              <dl className="mt-7 border-t border-[var(--blueprint-30)]">
                {active.specs.map(([term, value]) => (
                  <div
                    key={term}
                    className="grid grid-cols-[6.5rem_1fr] items-baseline gap-4 border-b border-[var(--blueprint-15)] py-2.5 sm:grid-cols-[8rem_1fr]"
                  >
                    <dt className="tech-label text-[var(--blueprint)]">
                      {term}
                    </dt>
                    <dd className="text-sm text-[var(--ink-60)]">{value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}

            {active.detail ? (
              <Link
                href={`/proyectos/${active.detail.slug}`}
                className="mt-7 inline-block border border-[var(--accent)] px-5 py-2.5 text-sm font-medium text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-[var(--paper)]"
              >
                Ver ficha completa →
              </Link>
            ) : null}
          </div>

          {/* Espacio reservado para imagen o video del proyecto */}
          <div className="flex min-h-56 flex-col items-center justify-center border border-dashed border-[var(--blueprint-30)] p-6 text-center">
            <span className="tech-label text-[var(--ink-40)]">
              Vista reservada
            </span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--ink-40)]">
              {active.mediaNote}
            </p>
          </div>
        </div>
      </article>

      <p className="tech-label mt-10 mb-4 text-[var(--ink-40)]">
        Elegí una ficha para ampliarla
      </p>

      {/* Fichas restantes: al elegir una, sube a la hoja ampliada */}
      <ul className="flex flex-wrap gap-4">
        {rest.map((p) => (
          <li key={p.code} className="flex flex-[1_1_17rem]">
            <button
              type="button"
              onClick={() => select(p.code)}
              style={{ viewTransitionName: vtName(p.code) }}
              className="flex w-full flex-col border border-dashed border-[var(--blueprint-30)] bg-[var(--paper-2)] p-5 text-left transition-colors duration-300 hover:border-[var(--blueprint)] hover:bg-[var(--paper-3)]"
            >
              <span className="flex items-baseline justify-between gap-3 border-b border-[var(--blueprint-15)] pb-2.5">
                <span className="tech-label text-[var(--blueprint)]">
                  {p.code}
                </span>
                <span className="tech-label text-[var(--ink-40)]">
                  {p.status}
                </span>
              </span>
              <span className="mt-4 text-base leading-snug font-medium">
                {p.title}
              </span>
              <span className="tech-label mt-2 text-[var(--blueprint)]">
                {p.discipline}
              </span>
              <span className="mt-3 text-sm leading-relaxed text-[var(--ink-60)]">
                {p.summary}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
