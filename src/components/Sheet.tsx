import type { ReactNode } from "react";

type SheetProps = {
  id: string;
  doc: string;
  title: string;
  note?: string;
  children: ReactNode;
};

/** Cada sección es una hoja de un dossier técnico, con su rótulo y sus marcas de escuadra. */
export default function Sheet({ id, doc, title, note, children }: SheetProps) {
  return (
    <section
      id={id}
      className="relative border-t border-[var(--blueprint-30)] scroll-mt-16"
    >
      <div className="corner-marks relative mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 md:py-28">
        <header className="mb-12 flex flex-wrap items-baseline gap-x-6 gap-y-2">
          <span className="tech-label text-[var(--accent)]">
            Doc. {doc}
          </span>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {note ? (
            <span className="tech-label w-full text-[var(--ink-40)] sm:ml-auto sm:w-auto">
              {note}
            </span>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  );
}
