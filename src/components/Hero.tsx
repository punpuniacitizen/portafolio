import { contact } from "@/data/content";

const disciplines = [
  "Desarrollo web",
  "Bases de datos",
  "Modelado 3D",
  "Machine learning",
  "Robótica",
  "Diseño industrial",
];

export default function Hero() {
  return (
    <header className="blueprint-grid relative overflow-hidden">
      <div className="corner-marks relative mx-auto w-full max-w-6xl px-6 pt-16 pb-20 sm:px-10 md:pt-24 md:pb-28">
        {/* Rótulo superior de la hoja */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2 border-b border-[var(--blueprint-30)] pb-4">
          <span className="tech-label text-[var(--accent)]">Hoja 00 — Portada</span>
          <span className="tech-label text-[var(--ink-40)]">Escala 1:1</span>
          <span className="tech-label text-[var(--ink-40)]">Rev. 01</span>
          <span className="tech-label ml-auto text-[var(--ink-40)]">
            {contact.location}
          </span>
        </div>

        <div className="draw-in pt-16 md:pt-24">
          <h1 className="font-display text-[clamp(2.5rem,9.5vw,7rem)] leading-[0.92] font-semibold tracking-[-0.035em]">
            Nicolás
            <br />
            Florentín
          </h1>

          {/* Cota que mide el nombre y lo anota, como una pieza acotada */}
          <div className="mt-7 max-w-xl">
            <svg
              className="h-3 w-full text-[var(--blueprint)]"
              viewBox="0 0 600 12"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <line x1="1" y1="0" x2="1" y2="12" stroke="currentColor" strokeWidth="1" />
              <line x1="599" y1="0" x2="599" y2="12" stroke="currentColor" strokeWidth="1" />
              <line x1="1" y1="6" x2="599" y2="6" stroke="currentColor" strokeWidth="1" />
              <path d="M1 6 L14 2.5 L14 9.5 Z" fill="currentColor" />
              <path d="M599 6 L586 2.5 L586 9.5 Z" fill="currentColor" />
            </svg>
            <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <span className="font-mono text-sm tracking-[0.18em] text-[var(--accent)] uppercase sm:text-base">
                Creative Developer
              </span>
              <span className="tech-label text-[var(--blueprint)]">18 años</span>
            </div>
          </div>

          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-[var(--ink-60)] sm:text-xl">
            Hago demasiadas cosas como para definirme con una sola. Desarrollo web
            de punta a punta, bases de datos, modelado 3D, machine learning,
            robótica y diseño industrial — todo empezó porque un juego tenía los
            assets mal hechos.
          </p>

          {/* Disciplinas como listado de piezas */}
          <ul className="mt-12 grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {disciplines.map((d, i) => (
              <li
                key={d}
                className="flex items-baseline gap-3 border-b border-[var(--blueprint-15)] pb-2"
              >
                <span className="tech-label text-[var(--blueprint)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-[var(--ink-60)]">{d}</span>
              </li>
            ))}
          </ul>

          <div className="mt-14 flex flex-wrap gap-4">
            <a
              href="#habilidades"
              className="border border-[var(--accent)] bg-[var(--accent)] px-6 py-3 text-sm font-medium text-[var(--paper)] transition-colors hover:bg-transparent hover:text-[var(--accent)]"
            >
              Ver habilidades
            </a>
            <a
              href="#contacto"
              className="border border-[var(--blueprint-30)] px-6 py-3 text-sm font-medium text-[var(--blueprint)] transition-colors hover:border-[var(--blueprint)]"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
