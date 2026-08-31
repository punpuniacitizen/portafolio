import { milestones } from "@/data/content";

/** La trayectoria dibujada como una línea de cota: se mide en años de edad. */
export default function Timeline() {
  return (
    <div>
      {/* Cota horizontal (desktop). Las marcas se alinean con el inicio de cada columna. */}
      <div className="relative mb-10 hidden h-10 md:block" aria-hidden="true">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-[var(--blueprint)]" />
        <span className="absolute top-1/2 left-0 h-0 w-0 -translate-y-1/2 border-y-[5px] border-r-[14px] border-y-transparent border-r-[var(--blueprint)]" />
        <span className="absolute top-1/2 right-0 h-0 w-0 -translate-y-1/2 border-y-[5px] border-l-[14px] border-y-transparent border-l-[var(--blueprint)]" />
        <div className="grid h-full grid-cols-4 gap-6">
          {milestones.map((m) => (
            <div key={m.age} className="relative">
              <span className="absolute top-1/2 left-0 h-6 w-px -translate-y-1/2 bg-[var(--blueprint)]" />
            </div>
          ))}
        </div>
      </div>

      <ol className="grid gap-10 md:grid-cols-4 md:gap-6">
        {milestones.map((m) => (
          <li
            key={m.age}
            className="relative border-l border-[var(--blueprint-30)] pl-5 md:border-l-0 md:border-t md:pt-5 md:pl-0"
          >
            <span className="font-display block text-3xl font-semibold text-[var(--accent)]">
              {m.age}
            </span>
            <span className="tech-label mt-1 block text-[var(--ink-40)]">
              años
            </span>
            <h3 className="mt-4 text-base font-medium">{m.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--ink-60)]">
              {m.body}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
