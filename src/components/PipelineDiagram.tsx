const steps = [
  { n: "01", title: "Captura", body: "La cámara toma el video en vivo." },
  {
    n: "02",
    title: "Detección",
    body: "MediaPipe encuentra la mano y devuelve sus 21 puntos.",
  },
  {
    n: "03",
    title: "Normalización",
    body: "La mano se centra y se escala al 70 % del lienzo, y se dibuja como esqueleto.",
  },
  {
    n: "04",
    title: "Clasificación",
    body: "La red reduce el dibujo a 64×64 y decide cuál de las 36 señas es.",
  },
];

export default function PipelineDiagram() {
  return (
    <ol className="grid min-w-[36rem] grid-cols-4 gap-0">
      {steps.map((s, i) => (
        <li key={s.n} className="relative pr-6">
          <div className="flex h-full flex-col border-t border-[var(--blueprint)] pt-4">
            <span className="tech-label text-[var(--accent)]">{s.n}</span>
            <span className="mt-2 text-base font-medium">{s.title}</span>
            <span className="mt-2 text-sm leading-relaxed text-[var(--ink-60)]">
              {s.body}
            </span>
          </div>
          {i < steps.length - 1 ? (
            <svg
              className="absolute top-0 right-1 h-3 w-4 -translate-y-1/2 text-[var(--blueprint)]"
              viewBox="0 0 16 12"
              aria-hidden="true"
            >
              <path d="M0 6 H14 M9 2 L14 6 L9 10" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
