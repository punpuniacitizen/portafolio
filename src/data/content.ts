export type Skill = {
  id: string;
  code: string;
  label: string;
  category: string;
  meta: string;
  detail: string;
  tags: string[];
  /** Posición en el diagrama despiezado, en % del contenedor */
  x: number;
  y: number;
};

/** Cada habilidad es una pieza del despiece. El código imita la numeración de un plano. */
export const skills: Skill[] = [
  {
    id: "frontend",
    code: "A-01",
    label: "Front end",
    category: "Desarrollo web",
    meta: "Interfaces y experiencia",
    detail:
      "Construcción de interfaces desde el maquetado hasta el detalle de interacción. Trabajo con HTML, CSS y JavaScript moderno, y con frameworks de componentes; me interesa especialmente la parte donde el diseño y el código se tocan: animación, tipografía, layout y accesibilidad.",
    tags: ["HTML", "CSS", "JavaScript", "React", "UI"],
    x: 16,
    y: 14,
  },
  {
    id: "backend",
    code: "A-02",
    label: "Back end",
    category: "Desarrollo web",
    meta: "Servidores, APIs y datos",
    detail:
      "Diseño e implementación de la lógica del lado del servidor: APIs, autenticación, modelado de datos y la integración entre el servicio y su base. Trabajo pensando en que el back sea entendible y mantenible, no solo en que funcione.",
    tags: ["APIs REST", "Autenticación", "Node", "Python"],
    x: 40,
    y: 8,
  },
  {
    id: "databases",
    code: "B-01",
    label: "Bases de datos",
    category: "Datos",
    meta: "Oracle · PostgreSQL · SQLite",
    detail:
      "Dominio de Oracle, PostgreSQL y SQLite: modelado relacional, normalización, consultas complejas y el criterio para elegir cuál de las tres corresponde a cada proyecto. Es una de las áreas donde la escuela técnica y el trabajo freelance se reforzaron mutuamente.",
    tags: ["Oracle", "PostgreSQL", "SQLite", "SQL", "Modelado"],
    x: 68,
    y: 16,
  },
  {
    id: "ml",
    code: "B-02",
    label: "Machine learning",
    category: "Datos",
    meta: "Aprendizaje automático aplicado",
    detail:
      "El interés por la IA fue la puerta de entrada al desarrollo web y sigue siendo una línea propia: entender cómo se entrena un modelo, qué puede y qué no puede resolver, y cómo se integra a un producto real en vez de quedar en el notebook.",
    tags: ["Machine learning", "Python", "IA aplicada"],
    x: 78,
    y: 34,
  },
  {
    id: "blender",
    code: "C-01",
    label: "Modelado 3D",
    category: "3D y diseño",
    meta: "2 años · Blender",
    detail:
      "Dos años de experiencia modelando en Blender. Empezó a los 13 años rehaciendo los assets de un juego que me molestaba lo mal hechos que estaban, y terminó siendo la disciplina que me abrió la puerta a todo lo demás: modelado, texturizado y preparación de assets para motores.",
    tags: ["Blender", "Modelado", "Texturizado", "Assets"],
    x: 10,
    y: 46,
  },
  {
    id: "gamedev",
    code: "C-02",
    label: "Gamedev",
    category: "3D y diseño",
    meta: "Varias disciplinas del pipeline",
    detail:
      "Dos a tres años saltando entre disciplinas del desarrollo de videojuegos: arte, assets, programación de mecánicas. Ese recorrido lateral es el que me dio la costumbre de aprender una herramienta nueva cada vez que un proyecto la pide.",
    tags: ["Game dev", "Pipeline", "Mecánicas"],
    x: 34,
    y: 56,
  },
  {
    id: "industrial",
    code: "C-03",
    label: "Diseño industrial",
    category: "3D y diseño",
    meta: "Del dibujo técnico al objeto",
    detail:
      "Formación en dibujo técnico en la escuela industrial, aplicada al diseño de piezas y objetos. Es la base que sostiene tanto el modelado 3D como la robótica: pensar un objeto en cortes, vistas y tolerancias antes de fabricarlo.",
    tags: ["Dibujo técnico", "Diseño de piezas", "CAD"],
    x: 60,
    y: 62,
  },
  {
    id: "robotics",
    code: "D-01",
    label: "Robótica",
    category: "Hardware",
    meta: "Hobby activo",
    detail:
      "Robótica como hobby: donde el diseño industrial, la electrónica y la programación se juntan en un mismo objeto. Es el lugar donde pruebo ideas sin la presión de un entregable, y donde más rápido aprendo cosas que después terminan sirviendo en el trabajo.",
    tags: ["Electrónica", "Microcontroladores", "Prototipado"],
    x: 74,
    y: 72,
  },
  {
    id: "english",
    code: "E-01",
    label: "Inglés",
    category: "Idiomas",
    meta: "Dominio completo",
    detail:
      "Dominio perfecto del inglés, hablado y escrito. En la práctica significa poder trabajar con documentación técnica, clientes y equipos internacionales sin fricción, y aprender de fuentes de primera mano apenas salen.",
    tags: ["Lectura técnica", "Conversación", "Escritura"],
    x: 20,
    y: 78,
  },
];

export type Milestone = {
  age: string;
  title: string;
  body: string;
};

/** La trayectoria se dibuja como una línea de cota: se mide en años de edad. */
export const milestones: Milestone[] = [
  {
    age: "13",
    title: "Primer modelo 3D",
    body: "Un juego con assets mal hechos, un mensaje a los desarrolladores y modelado 3D básico aprendido para hacer versiones mejores. Nunca más paré.",
  },
  {
    age: "14–16",
    title: "Desarrollo de videojuegos",
    body: "Dos a tres años saltando entre disciplinas del desarrollo de videojuegos, sin quedarme quieto en ninguna.",
  },
  {
    age: "16–17",
    title: "IA y desarrollo web",
    body: "El interés por la inteligencia artificial derivó en machine learning y desarrollo web. Sin darme cuenta, terminé trabajando de esto.",
  },
  {
    age: "18",
    title: "Escuela técnica y freelance",
    body: "Cursando la tecnicatura en programación en el Instituto Industrial Cristo Obrero, trabajando freelance en desarrollo web y con la robótica como hobby.",
  },
];

export type ProjectFigure =
  | { kind: "image"; src: string; alt: string; width: number; height: number; caption: string }
  | { kind: "pipeline"; caption: string }
  | { kind: "video"; caption: string; note: string }
  | { kind: "architecture"; caption: string };

export type ProjectSection = {
  doc: string;
  title: string;
  body: string[];
  /** Puntos sueltos, para secciones que se leen mejor como lista. */
  items?: string[];
  figure?: ProjectFigure;
};

export type ProjectDetail = {
  /** Va en la URL: /proyectos/<slug> */
  slug: string;
  /** URL del repositorio. Si está vacía, el botón de GitHub no se muestra. */
  repo?: string;
  lead: string;
  stats: [string, string][];
  /** Sección debajo de la cual se muestran las cifras. */
  statsAfterDoc: string;
  sections: ProjectSection[];
};

export type Project = {
  code: string;
  title: string;
  discipline: string;
  status: string;
  /** Resumen corto: es lo que se lee en la ficha chica. */
  summary: string;
  /** Texto largo: solo aparece en la hoja ampliada. */
  body: string;
  /** Filas de la ficha técnica de la hoja ampliada. */
  specs?: [string, string][];
  /** Qué va en el espacio reservado para imagen o video. */
  mediaNote?: string;
  /** Si existe, el proyecto tiene página propia y aparece el botón "Ver ficha completa". */
  detail?: ProjectDetail;
  href?: string;
};

export const projects: Project[] = [
  {
    code: "P-01",
    title: "Brazo robótico controlado por gestos",
    discipline: "Robótica · Visión por computadora",
    status: "En desarrollo",
    summary:
      "Un brazo robótico que se controla con la mano, sin tocar nada: la cámara sigue el gesto y el brazo lo ejecuta.",
    body: "Un brazo robótico que se controla con la mano, sin tocar nada. Una cámara sigue la mano con MediaPipe y traduce los gestos en movimiento del brazo. Es el proyecto donde se juntan todas las disciplinas que vengo acumulando: el diseño de las piezas, la electrónica que las mueve, el modelo que interpreta la mano y el código que une las tres cosas.",
    specs: [
      ["Detección", "MediaPipe · seguimiento de mano por cámara"],
      ["Control", "Gestos traducidos a movimiento del brazo"],
      ["Disciplinas", "Diseño industrial · Electrónica · Programación"],
      ["Estado", "En desarrollo — documentación en curso"],
    ],
    mediaNote: "Acá va el video del brazo siguiendo la mano.",
  },
  {
    code: "P-02",
    title: "Traductor de lenguaje de señas en tiempo real",
    discipline: "Machine learning · Visión por computadora",
    status: "Terminado",
    summary:
      "Una red neuronal entrenada desde cero que lee por cámara qué letra o número del alfabeto ASL estás haciendo con la mano.",
    body: "Un traductor de lenguaje de señas americano que funciona en vivo con la cámara. La clave está en qué ve la red: no la foto de la mano, sino su esqueleto —extraído con MediaPipe y normalizado—, así el reconocimiento no depende de la luz, el fondo ni el tono de piel.",
    specs: [
      ["Detección", "MediaPipe · 21 puntos de la mano"],
      ["Modelo", "CNN propia en TensorFlow · 36 clases"],
      ["Precisión", "97,9 % en validación · 105.420 imágenes"],
      ["Estado", "Terminado · inferencia en tiempo real con ONNX"],
    ],
    mediaNote: "Acá va el video de los gestos y las letras apareciendo en pantalla.",
    detail: {
      slug: "traductor-lenguaje-senas",
      repo: "https://github.com/punpuniacitizen/MediaPipe-ASL-sign-language-recognition",
      statsAfterDoc: "03",
      lead: "Un traductor de lenguaje de señas americano que corre en vivo con la cámara de la computadora. Reconoce las 36 señas del alfabeto y los dígitos, y las muestra en pantalla mientras las hacés.",
      stats: [
        ["36", "clases reconocidas"],
        ["105.420", "imágenes de entrenamiento"],
        ["97,9 %", "precisión en validación"],
        ["21", "puntos por mano"],
      ],
      sections: [
        {
          doc: "01",
          title: "Cómo funciona",
          body: [
            "El recorrido va de la cámara a la letra en cuatro pasos. La cámara captura el video; MediaPipe encuentra la mano y devuelve sus 21 puntos; esos puntos se normalizan y se dibujan como un esqueleto en un lienzo limpio; y ese dibujo, reducido a 64 por 64 píxeles, entra a la red que decide qué seña es.",
            "El paso de normalización es el que hace que el sistema no dependa de dónde estés parado: la mano se centra y se escala hasta ocupar el 70 % del lienzo, así una mano cerca de la cámara y una lejos llegan a la red exactamente iguales.",
          ],
          figure: {
            kind: "pipeline",
            caption: "Flujo de procesamiento, de la cámara a la clasificación.",
          },
        },
        {
          doc: "02",
          title: "La decisión clave: el esqueleto, no la foto",
          body: [
            "La red nunca ve una fotografía de una mano. Ve un dibujo de líneas y puntos generado a partir de las coordenadas que devuelve MediaPipe.",
            "Eso saca del problema todo lo que no importa. La iluminación de la habitación, el fondo, el color de la ropa y el tono de piel dejan de ser variables, porque para cuando la imagen llega a la red ya no queda nada de eso: solo la geometría de la mano. Un modelo entrenado sobre fotos tendría que aprender a ignorar todas esas cosas por su cuenta, con muchos más datos y peores resultados.",
          ],
          figure: {
            kind: "video",
            caption: "El modelo funcionando: la mano, el esqueleto y la letra reconocida.",
            note: "Acá va el video del modelo en funcionamiento.",
          },
        },
        {
          doc: "03",
          title: "La red",
          body: [
            "Una red convolucional entrenada desde cero en TensorFlow. Tres bloques de convolución y submuestreo que van extrayendo bordes y formas del esqueleto, y después dos capas densas que toman la decisión final entre las 36 clases.",
            "Es una arquitectura deliberadamente chica. Como la entrada ya viene limpia y normalizada, no hacía falta nada más grande — y una red chica entrena en minutos y corre en tiempo real sin placa de video.",
          ],
          figure: {
            kind: "architecture",
            caption: "Arquitectura de la red, capa por capa, con las dimensiones de cada tensor.",
          },
        },
        {
          doc: "04",
          title: "Entrenamiento",
          body: [
            "El modelo se entrenó durante 10 épocas sobre 105.420 imágenes, con el 20 % reservado para validación. Terminó en 99,5 % de precisión sobre los datos de entrenamiento y 97,9 % sobre los de validación.",
            "La distancia entre las dos curvas es chica y estable, que es exactamente lo que se quiere ver: si la de entrenamiento sigue subiendo mientras la de validación se estanca o baja, el modelo se está memorizando los ejemplos en vez de aprender la forma de las señas.",
          ],
          figure: {
            kind: "image",
            src: "/proyectos/traductor-lenguaje-senas/grafica-entrenamiento.png",
            alt: "Curvas de precisión de entrenamiento y validación a lo largo de 10 épocas.",
            width: 800,
            height: 800,
            caption: "Precisión por época. Azul: entrenamiento. Naranja: validación.",
          },
        },
        {
          doc: "05",
          title: "Que la lectura no tiemble",
          body: [
            "Un clasificador que acierta el 98 % de las veces igual se ve mal si parpadea. Los puntos que devuelve MediaPipe vibran unos píxeles entre cuadro y cuadro, y esa vibración se traduce en predicciones que saltan de una letra a otra varias veces por segundo.",
            "Hay dos suavizados encima. Sobre los puntos de la mano corre un promedio exponencial que arrastra la posición anterior, así el esqueleto no tiembla. Sobre las predicciones corre un promedio móvil de ocho cuadros, así la letra que se muestra es la que la red viene sosteniendo y no la de un cuadro suelto.",
          ],
        },
        {
          doc: "06",
          title: "Ver la red por dentro",
          body: [
            "El visualizador expone las salidas intermedias del modelo: los mapas de activación de la primera capa convolucional se dibujan en vivo en un mosaico, al lado de la cámara.",
            "Sirve para dos cosas. Para entender qué está mirando la red —qué bordes y qué zonas del esqueleto encienden cada filtro— y para depurar: si las activaciones están apagadas o saturadas, el problema es de la entrada y no de la clasificación.",
          ],
        },
        {
          doc: "07",
          title: "Del entrenamiento a la cámara",
          body: [
            "Para entrenar se usa TensorFlow, pero para correr en vivo el modelo se exporta a ONNX y se ejecuta con ONNX Runtime. El resultado arranca al instante y funciona en CPU, sin cargar el framework completo solo para hacer inferencia.",
          ],
        },
        {
          doc: "08",
          title: "Límites conocidos",
          body: [],
          items: [
            "En ASL la J y la Z no son poses, son movimientos. El clasificador trabaja cuadro a cuadro sobre imágenes estáticas, así que de esas dos señas reconoce la posición inicial o final, no el trazo completo.",
            "El sistema procesa una sola mano por vez: cuando hay varias en cuadro, toma la primera que detecta y descarta el resto.",
          ],
        },
      ],
    },
  },
  {
    code: "P-03",
    title: "Juego medieval en Godot",
    discipline: "Videojuegos · 3D",
    status: "Por recuperar",
    summary:
      "Un proyecto de ambientación medieval hecho en Godot, de la etapa de desarrollo de videojuegos.",
    body: "Un proyecto de ambientación medieval hecho en Godot, de la etapa en la que saltaba entre disciplinas del desarrollo de videojuegos. Pendiente de recuperar el material para documentarlo.",
    specs: [
      ["Motor", "Godot"],
      ["Ambientación", "Medieval"],
      ["Disciplinas", "Desarrollo de videojuegos · Modelado 3D"],
      ["Estado", "Por recuperar — material sin documentar"],
    ],
    mediaNote: "Acá van las capturas del juego.",
  },
  {
    code: "P-04",
    title: "Panel de control web del brazo",
    discipline: "Desarrollo web · Machine learning",
    status: "Planificado",
    summary:
      "Interfaz web para operar el brazo desde el navegador, con la detección y el estado en vivo en una sola pantalla.",
    body: "Interfaz web para operar el brazo desde el navegador: la cámara, la detección de la mano y el estado del brazo en vivo, en una sola pantalla. Es la pieza que conecta el proyecto de robótica con el desarrollo web.",
    specs: [
      ["Detección", "MediaPipe en el cliente, dentro del navegador"],
      ["Control", "Panel con el gesto detectado y el estado del brazo en vivo"],
      ["Disciplinas", "Front end · Back end · Machine learning en el cliente"],
      ["Estado", "Planificado"],
    ],
    mediaNote: "Pendiente.",
  },
];

/** Datos del cuadro de contacto. */
export const contact = {
  name: "Nicolás Florentín",
  role: "Creative Developer",
  location: "Villa Carlos Paz, Córdoba, Argentina",
  email: "nicolasflorentin.dev@gmail.com",
  github: "Nocolos4441",
  /** Línea de trabajo, en formato internacional (se limpia solo para el link de wa.me). */
  whatsapp: "+54 9 3541 649926",
  /** En false se muestra un botón; en true se muestra el número escrito. */
  showWhatsappNumber: false,
  /** Mensaje que aparece ya escrito al abrir el chat. */
  whatsappMessage:
    "Hola Nicolás, vi tu portfolio y quería consultarte por un proyecto.",
  linkedin: "PENDIENTE",
};
