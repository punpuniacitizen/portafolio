import { contact } from "@/data/content";

const PENDING = "PENDIENTE";

const waHref = `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(contact.whatsappMessage)}`;

type Row = { label: string; value: string; href?: string };

const rows: Row[] = [
  { label: "Nombre", value: contact.name },
  { label: "Rol", value: contact.role },
  { label: "Ubicación", value: contact.location },
  {
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    label: "GitHub",
    value: `@${contact.github}`,
    href: `https://github.com/${contact.github}`,
  },
  {
    label: "WhatsApp",
    value: contact.showWhatsappNumber
      ? contact.whatsapp
      : "Abrir chat de WhatsApp",
    href: waHref,
  },
  {
    label: "LinkedIn",
    value: contact.linkedin,
    href: contact.linkedin === PENDING ? undefined : contact.linkedin,
  },
];

/** Cuadro de datos, como el title block en la esquina de un plano real. */
export default function TitleBlock() {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
      <p className="max-w-md text-lg leading-relaxed text-[var(--ink-60)]">
        Trabajo freelance, bajo el nombre Codium, y estoy abierto a proyectos
        de desarrollo web, 3D o cualquier cosa que cruce disciplinas. Escribime
        por el canal que te quede más cómodo — si es WhatsApp, del otro lado
        estoy yo.
      </p>

      <div className="border border-[var(--blueprint)]">
        {rows.map((row, i) => (
          <div
            key={row.label}
            className={`grid grid-cols-[7rem_1fr] items-baseline gap-4 px-4 py-3 sm:grid-cols-[9rem_1fr] sm:px-5 ${
              i === 0 ? "" : "border-t border-[var(--blueprint-30)]"
            }`}
          >
            <span className="tech-label text-[var(--blueprint)]">
              {row.label}
            </span>
            {row.href ? (
              <a
                href={row.href}
                target={row.href.startsWith("http") ? "_blank" : undefined}
                rel={row.href.startsWith("http") ? "noreferrer" : undefined}
                className="text-sm break-words text-[var(--ink)] underline decoration-[var(--accent)] decoration-1 underline-offset-4 transition-colors hover:text-[var(--accent)]"
              >
                {row.value}
              </a>
            ) : (
              <span
                className={`text-sm break-words ${
                  row.value === PENDING
                    ? "tech-label text-[var(--ink-40)]"
                    : "text-[var(--ink)]"
                }`}
              >
                {row.value === PENDING ? "Pendiente" : row.value}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
