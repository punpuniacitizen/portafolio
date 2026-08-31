type Layer = {
  name: string;
  shape: string;
  /** Altura del bloque: representa el tamaño espacial del tensor. */
  h: number;
  /** Ancho del bloque: representa la profundidad (cantidad de filtros). */
  w: number;
  accent?: boolean;
};

/** Datos tomados del modelo real: entrada 64×64×3, salida de 36 clases. */
const layers: Layer[] = [
  { name: "Input", shape: "64×64×3", h: 108, w: 14 },
  { name: "Conv2D_1", shape: "64×64×32", h: 108, w: 34 },
  { name: "MaxPool_1", shape: "32×32×32", h: 76, w: 34 },
  { name: "Conv2D_2", shape: "32×32×64", h: 76, w: 44 },
  { name: "MaxPool_2", shape: "16×16×64", h: 50, w: 44 },
  { name: "Conv2D_3", shape: "16×16×64", h: 50, w: 44 },
  { name: "MaxPool_3", shape: "8×8×64", h: 30, w: 44 },
  { name: "Flatten", shape: "4096", h: 118, w: 8 },
  { name: "Dense", shape: "128", h: 70, w: 8 },
  { name: "Dense", shape: "36 · salida", h: 44, w: 8, accent: true },
];

const SLOT = 92;
const MID = 96;
const WIDTH = layers.length * SLOT;

export default function ArchitectureDiagram() {
  return (
    <svg
      viewBox={`0 0 ${WIDTH} 210`}
      className="h-auto w-full min-w-[46rem] text-[var(--blueprint)]"
      role="img"
      aria-label="Arquitectura de la red: entrada de 64 por 64 píxeles, tres bloques de convolución y submuestreo, aplanado y dos capas densas con salida de 36 clases."
    >
      {/* Eje que une las capas */}
      <line
        x1={SLOT / 2}
        y1={MID}
        x2={WIDTH - SLOT / 2}
        y2={MID}
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="3 3"
        opacity="0.5"
      />

      {layers.map((l, i) => {
        const cx = SLOT / 2 + i * SLOT;
        const color = l.accent ? "var(--accent)" : "var(--blueprint)";
        return (
          <g key={`${l.name}-${i}`}>
            <rect
              x={cx - l.w / 2}
              y={MID - l.h / 2}
              width={l.w}
              height={l.h}
              fill={l.accent ? "var(--accent-15)" : "var(--paper-3)"}
              stroke={color}
              strokeWidth="1"
            />
            <text
              x={cx}
              y={MID + 78}
              textAnchor="middle"
              fill="var(--ink)"
              fontSize="10"
              fontFamily="var(--font-plex-mono), monospace"
            >
              {l.name}
            </text>
            <text
              x={cx}
              y={MID + 92}
              textAnchor="middle"
              fill="var(--ink-40)"
              fontSize="9"
              fontFamily="var(--font-plex-mono), monospace"
            >
              {l.shape}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
