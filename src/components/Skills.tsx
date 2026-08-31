"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { skills } from "@/data/content";

type Line = { x1: number; y1: number; x2: number; y2: number };

/**
 * Diagrama despiezado: cada habilidad es una pieza suelta y la seleccionada
 * queda unida a su ficha técnica por una línea de callout medida en vivo.
 * Las piezas entran escalonadas al aparecer en pantalla y flotan apenas;
 * la elegida deja de flotar para que la línea no se mueva con ella.
 */
export default function Skills() {
  const [activeId, setActiveId] = useState(skills[0].id);
  const [line, setLine] = useState<Line | null>(null);
  const [revealed, setRevealed] = useState(false);
  // Una vez terminada la entrada se sueltan los retrasos escalonados, para que
  // el hover y el click respondan al instante.
  const [settled, setSettled] = useState(false);

  const wrapRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef(new Map<string, HTMLButtonElement>());

  const active = skills.find((s) => s.id === activeId) ?? skills[0];

  const measure = useCallback(() => {
    const wrap = wrapRef.current;
    const panel = panelRef.current;
    const node = nodeRefs.current.get(activeId);
    if (!wrap || !panel || !node) return;

    const w = wrap.getBoundingClientRect();
    const n = node.getBoundingClientRect();
    const p = panel.getBoundingClientRect();

    setLine({
      x1: n.left + n.width / 2 - w.left,
      y1: n.top + n.height / 2 - w.top,
      x2: p.left - w.left,
      y2: p.top + 44 - w.top,
    });
  }, [activeId]);

  useLayoutEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const ro = new ResizeObserver(measure);
    ro.observe(wrap);
    window.addEventListener("scroll", measure, { passive: true });
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", measure);
    };
  }, [measure]);

  // Las piezas aparecen cuando la sección entra en pantalla, no antes.
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(wrap);
    return () => observer.disconnect();
  }, []);

  // La entrada mueve las piezas: hay que volver a medir cuando termina.
  useEffect(() => {
    if (!revealed) return;
    const timer = window.setTimeout(() => {
      setSettled(true);
      measure();
    }, 1100);
    return () => window.clearTimeout(timer);
  }, [revealed, measure]);

  return (
    <div ref={wrapRef} className="relative">
      {/* Línea de callout entre la pieza activa y su ficha */}
      {line ? (
        <svg
          className="pointer-events-none absolute inset-0 hidden h-full w-full text-[var(--accent)] lg:block"
          aria-hidden="true"
        >
          <g key={activeId} className="callout-in">
            <polyline
              points={`${line.x1},${line.y1} ${line.x1 + (line.x2 - line.x1) * 0.78},${line.y1} ${line.x2 - 16},${line.y2} ${line.x2},${line.y2}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <circle cx={line.x1} cy={line.y1} r="3.5" fill="currentColor" />
            <line
              x1={line.x2}
              y1={line.y2 - 6}
              x2={line.x2}
              y2={line.y2 + 6}
              stroke="currentColor"
              strokeWidth="1"
            />
          </g>
        </svg>
      ) : null}

      <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        {/* Despiece */}
        <div className="relative flex flex-wrap gap-3 lg:block lg:h-[500px]">
          {skills.map((skill, i) => {
            const isActive = skill.id === activeId;
            const enterDelay = revealed && !settled ? i * 70 : 0;
            return (
              <div
                key={skill.id}
                style={
                  {
                    "--x": `${skill.x}%`,
                    "--y": `${skill.y}%`,
                  } as React.CSSProperties
                }
                className="lg:absolute lg:top-[var(--y)] lg:left-[var(--x)] lg:-translate-x-1/2 lg:-translate-y-1/2"
              >
                <button
                  type="button"
                  ref={(el) => {
                    if (el) nodeRefs.current.set(skill.id, el);
                    else nodeRefs.current.delete(skill.id);
                  }}
                  onClick={() => setActiveId(skill.id)}
                  aria-pressed={isActive}
                  style={{
                    // Entrada lenta y escalonada; respuesta al puntero, corta.
                    transition: [
                      `opacity 420ms ease ${enterDelay}ms`,
                      `transform 220ms ease ${enterDelay}ms`,
                      "background-color 160ms ease",
                      "border-color 160ms ease",
                      "color 160ms ease",
                      "box-shadow 160ms ease",
                    ].join(", "),
                    animationDelay: `${i * 480}ms`,
                  }}
                  className={`group flex items-center gap-2.5 border px-3 py-2 text-left ${
                    revealed
                      ? "translate-y-0 opacity-100"
                      : "translate-y-3 opacity-0"
                  } ${
                    isActive
                      ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--paper)] shadow-[0_6px_20px_-12px_var(--ink)]"
                      : `border-[var(--blueprint-30)] bg-[var(--paper-2)] text-[var(--ink)] hover:border-[var(--blueprint)] ${revealed ? "piece-float" : ""}`
                  }`}
                >
                  <span
                    className={`tech-label whitespace-nowrap transition-colors duration-[160ms] ${isActive ? "text-[var(--paper)]" : "text-[var(--blueprint)]"}`}
                  >
                    {skill.code}
                  </span>
                  <span className="text-sm whitespace-nowrap">
                    {skill.label}
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Ficha técnica de la pieza seleccionada */}
        <div
          ref={panelRef}
          className="corner-marks relative border border-[var(--blueprint-30)] bg-[var(--paper-2)] p-6 sm:p-8 lg:sticky lg:top-10 lg:self-start"
        >
          <div key={active.id} className="sheet-in">
            <div className="flex items-baseline justify-between gap-4 border-b border-[var(--blueprint-30)] pb-3">
              <span className="tech-label text-[var(--accent)]">
                Pieza {active.code}
              </span>
              <span className="tech-label text-[var(--ink-40)]">
                {active.category}
              </span>
            </div>

            <h3 className="font-display mt-6 text-2xl font-semibold tracking-tight sm:text-3xl">
              {active.label}
            </h3>
            <p className="tech-label mt-2 text-[var(--blueprint)]">
              {active.meta}
            </p>

            <p className="mt-5 leading-relaxed text-[var(--ink-60)]">
              {active.detail}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {active.tags.map((tag) => (
                <li
                  key={tag}
                  className="tech-label border border-[var(--blueprint-30)] px-2.5 py-1 text-[var(--blueprint)]"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
