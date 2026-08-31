import About from "@/components/About";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Sheet from "@/components/Sheet";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import TitleBlock from "@/components/TitleBlock";
import { contact } from "@/data/content";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top" className="flex-1">
        <Hero />

        <Sheet id="sobre-mi" doc="01" title="Sobre mí" note="Memoria descriptiva">
          <About />
        </Sheet>

        <Sheet
          id="habilidades"
          doc="02"
          title="Habilidades"
          note="Diagrama despiezado"
        >
          <Skills />
        </Sheet>

        <Sheet
          id="trayectoria"
          doc="03"
          title="Trayectoria"
          note="Línea de cota · en años"
        >
          <Timeline />
        </Sheet>

        <Sheet id="proyectos" doc="04" title="Proyectos" note="Fichas técnicas">
          <Projects />
        </Sheet>

        <Sheet id="contacto" doc="05" title="Contacto" note="Cuadro de datos">
          <TitleBlock />
        </Sheet>
      </main>

      <footer className="border-t border-[var(--blueprint-30)]">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-x-8 gap-y-2 px-6 py-6 sm:px-10">
          <span className="tech-label text-[var(--ink-40)]">
            {contact.name} — {contact.role}
          </span>
          <span className="tech-label ml-auto text-[var(--ink-40)]">
            Hoja 05 de 05 · Rev. 01
          </span>
        </div>
      </footer>
    </>
  );
}
