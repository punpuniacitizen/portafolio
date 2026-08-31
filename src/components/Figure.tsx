import type { ReactNode } from "react";

/** Marco de lámina: el dibujo adentro y la leyenda abajo, como en un plano. */
export default function Figure({
  caption,
  children,
}: {
  caption: string;
  children: ReactNode;
}) {
  return (
    <figure className="mt-8">
      <div className="corner-marks relative overflow-x-auto border border-[var(--blueprint-30)] bg-[var(--paper-2)] p-5 sm:p-7">
        {children}
      </div>
      <figcaption className="tech-label mt-3 text-[var(--ink-40)]">
        {caption}
      </figcaption>
    </figure>
  );
}
