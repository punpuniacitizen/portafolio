const notes = [
  ["Origen", "La tecnología en casa: mi papá trabajaba con ella y fue mi primera inspiración."],
  ["Formación", "Instituto Industrial Cristo Obrero — Villa Carlos Paz, Córdoba."],
  ["En curso", "Tecnicatura en programación."],
  ["Modalidad", "Freelance."],
];

export default function About() {
  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_0.6fr] lg:gap-16">
      <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-[var(--ink-60)]">
        <p className="font-display text-2xl leading-snug text-[var(--ink)] sm:text-3xl">
          A los 13 años me molestaba tanto que un juego tuviera los assets mal
          hechos que le escribí a los devs y aprendí modelado 3D para
          hacer versiones mejores. Una vez que empecé, no pude parar.
        </p>
        <p>
          Desde chico me encantó la tecnología. Mi papá trabajaba con esta y fue
          una gran inspiración para mí. Después de ese primer modelo pasé los
          siguientes dos o tres años saltando entre disciplinas del desarrollo de
          videojuegos con la plataforma hiddendevs, hasta que me empezaron a interesar el desarrollo web y la
          inteligencia artificial. Me puse a aprender machine learning y
          desarrollo web y, sin darme cuenta, terminó siendo mi trabajo.
        </p>
        <p>
          Haber ido a una escuela técnica me fué de mucha ayuda: desde el dibujo
          técnico, que me sirvió para el diseño industrial y más tarde se
          transformó en mi hobby de robótica, hasta la especialidad de
          programación, que me ayudó a asentar y profundizar todo lo que había
          aprendido como gamedev. Hoy sigo estudiando y quiero
          recibirme con mi tecnicatura en programación para comenzar a estudiar ingenieria aeroespacial.
        </p>
        <p className="text-[var(--ink)]">
          Por esto presento como creative developer: hago mcuhas cosas como
          para definirme con una sola.
        </p>
      </div>

      {/* Anotaciones al margen, como las notas de una lámina */}
      <dl className="space-y-6 border-l border-[var(--blueprint-30)] pl-6 lg:pl-8">
        {notes.map(([term, description]) => (
          <div key={term}>
            <dt className="tech-label text-[var(--accent)]">{term}</dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-[var(--ink-60)]">
              {description}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
