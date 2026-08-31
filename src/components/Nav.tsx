import Link from "next/link";

const links = [
  { href: "/#sobre-mi", num: "01", label: "Sobre mí" },
  { href: "/#habilidades", num: "02", label: "Habilidades" },
  { href: "/#trayectoria", num: "03", label: "Trayectoria" },
  { href: "/#proyectos", num: "04", label: "Proyectos" },
  { href: "/#contacto", num: "05", label: "Contacto" },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--blueprint-30)] bg-[var(--paper)]/85 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-6 px-6 py-3 sm:px-10">
        <Link href="/" className="tech-label shrink-0 text-[var(--ink)]">
          N. Florentín
        </Link>
        <ul className="ml-auto flex min-w-0 items-center gap-4 sm:gap-5">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="tech-label text-[var(--ink-40)] transition-colors hover:text-[var(--accent)]"
              >
                {l.num}
                <span className="hidden lg:inline"> {l.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
