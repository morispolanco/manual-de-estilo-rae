
import type { Module } from './types';
import { BookOpenIcon } from './components/icons/BookOpenIcon';
import { PencilSquareIcon } from './components/icons/PencilSquareIcon';
import { ChatBubbleLeftRightIcon } from './components/icons/ChatBubbleLeftRightIcon';

export const MODULES: Module[] = [
  {
    id: 1,
    title: 'Fundamentos del estilo',
    description: 'Introducción a la norma panhispánica y la RAE.',
    longDescription: 'Comprende los conceptos clave detrás del "Libro de estilo", la importancia de la norma panhispánica, el papel de la RAE y la ASALE, y la evolución de la lengua en la era digital.',
    icon: BookOpenIcon,
    lessons: [
      {
        id: '1-1',
        title: 'La norma panhispánica',
        content: `
          <p class="mb-4">El concepto de <strong>norma panhispánica</strong> es fundamental para entender el español contemporáneo. No se trata de una norma impuesta por España, sino de un conjunto de recomendaciones consensuadas por las 23 Academias de la Lengua Española que existen en el mundo.</p>
          <p class="mb-4">Este modelo busca reflejar la unidad del idioma dentro de su diversidad. Reconoce y legitima las variantes del español de América, Filipinas, Guinea Ecuatorial y España, siempre que estén extendidas y aceptadas por las comunidades de hablantes cultos.</p>
          <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">Puntos clave:</h4>
          <ul class="list-disc list-inside space-y-2">
            <li><strong>Consenso:</strong> Las normas son acordadas por todas las academias (ASALE).</li>
            <li><strong>Policentrismo:</strong> Se reconoce que el "buen español" tiene múltiples centros.</li>
            <li><strong>Unidad en la diversidad:</strong> El objetivo es mantener una norma común que permita la comunicación fluida entre todos los hispanohablantes.</li>
          </ul>
        `,
        exercise: {
          id: '1-1-e1',
          title: 'Práctica sobre norma panhispánica',
          consigna: 'Basándote en lo aprendido, reescribe las siguientes 10 oraciones para que reflejen correctamente los principios de la norma panhispánica. Si una oración ya es correcta, indícalo. 1. La RAE impone las reglas del español de España al resto del mundo. 2. Solo hay un centro de habla "correcta" del español, que está en Madrid. 3. Las variantes del español de América son consideradas inferiores. 4. El voseo es un vulgarismo que se debe evitar. 5. La norma panhispánica ignora la evolución del idioma en los medios digitales. 6. Las academias de la lengua no colaboran entre sí. 7. El objetivo de la norma es que todos hablemos exactamente igual. 8. Un término usado en México no puede ser parte de la norma culta. 9. La diversidad del español es un problema para la unidad del idioma. 10. La norma panhispánica es un concepto estático que no cambia.'
        }
      },
      {
        id: '1-2',
        title: 'El papel de la RAE y la ASALE',
        content: `
          <p class="mb-4">La <strong>Real Academia Española (RAE)</strong>, fundada en 1713, y la <strong>Asociación de Academias de la Lengua Española (ASALE)</strong>, creada en 1951, son las instituciones encargadas de velar por la unidad y el buen uso del idioma español.</p>
          <p class="mb-4">La RAE, junto con las otras 22 academias, elabora las obras de referencia que sustentan la norma panhispánica, como el <em>Diccionario de la lengua española</em>, la <em>Gramática</em> y la <em>Ortografía</em>.</p>
          <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">Funciones principales:</h4>
          <ul class="list-disc list-inside space-y-2">
            <li>Elaborar obras de referencia lingüística.</li>
            <li>Resolver dudas de los hablantes a través de servicios como "RAEInforma".</li>
            <li>Estudiar la evolución de la lengua e incorporar nuevos términos o usos.</li>
            <li>Promover una norma común que cohesione a la comunidad hispanohablante.</li>
          </ul>
        `,
        exercise: {
          id: '1-2-e1',
          title: 'Ejercicio sobre RAE y ASALE',
          consigna: 'Completa o corrige las siguientes 10 frases sobre las funciones de la RAE y la ASALE. 1. La ASALE es una institución más antigua que la RAE. 2. La RAE ___________ las obras de referencia como el Diccionario. 3. El servicio "RAEInforma" sirve para comprar libros. 4. La principal función de las academias es __________ nuevas palabras. 5. Las 23 academias trabajan de forma totalmente independiente. 6. La RAE no tiene en cuenta el español hablado en América. 7. El Diccionario de la lengua española es creado únicamente por la RAE. 8. La ASALE promueve normas ___________ para todo el mundo hispanohablante. 9. Las academias se oponen a la incorporación de neologismos. 10. La Gramática y la Ortografía son obras que no se actualizan.'
        }
      },
      {
        id: '1-3',
        title: 'El español, una lengua policéntrica',
        content: `
          <p class="mb-4">El concepto de <strong>policentrismo</strong> significa que el español no tiene un único centro "correcto" de habla. La norma culta de las principales ciudades de habla hispana, como Madrid, Ciudad de México, Bogotá o Buenos Aires, se considera igualmente válida.</p>
          <p class="mb-4">Esto implica que ciertas expresiones o pronunciaciones pueden ser estándar en una región y no en otra, y ambas son aceptadas dentro de la norma panhispánica, siempre que pertenezcan al registro culto formal.</p>
          <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">Ejemplo de policentrismo:</h4>
          <p>El uso del pronombre <strong>vos</strong> en lugar de <strong>tú</strong> (voseo) es la norma culta en Argentina, Uruguay y otras regiones de América Latina, y es plenamente aceptado por la norma panhispánica.</p>
        `,
        quiz: [
          {
            id: '1-3-q1',
            question: "¿Qué significa que el español es una lengua 'policéntrica'?",
            options: [
                "Que solo el español de España es el correcto.",
                "Que la norma culta de las principales capitales hispanohablantes se considera igualmente válida.",
                "Que se debe escribir de muchas formas diferentes."
            ],
            correctAnswerIndex: 1,
            explanation: "Policentrismo significa que hay múltiples 'centros' de norma culta. El español de Ciudad de México, Bogotá o Buenos Aires es tan válido como el de Madrid."
          },
          {
            id: '1-3-q2',
            question: "El uso del 'voseo' (usar 'vos' en lugar de 'tú')...",
            options: [
                "...es un error que debe evitarse siempre.",
                "...solo se permite en el habla informal.",
                "...es la norma culta en países como Argentina y Uruguay y es aceptado por la RAE."
            ],
            correctAnswerIndex: 2,
            explanation: "El voseo es un perfecto ejemplo de policentrismo. Es la norma para millones de hablantes cultos y es plenamente aceptado por la norma panhispánica."
          }
        ],
        exercise: {
          id: '1-3-e1',
          title: 'Práctica sobre policentrismo',
          consigna: 'Analiza las siguientes 10 situaciones y explica en una frase si son un ejemplo de policentrismo aceptado por la norma panhispánica y por qué. 1. Usar "vos" en lugar de "tú" en Argentina. 2. Pronunciar "z" como "s" (seseo) en Colombia. 3. Usar la palabra "computadora" en México y "ordenador" en España. 4. Decir "carro" en Venezuela y "coche" en España. 5. Escribir "sicología" en lugar de "psicología". 6. El uso de "che" en el español rioplatense. 7. La aspiración de la "s" final en el Caribe. 8. Usar "platicar" por "charlar" en México. 9. El uso del pronombre "ustedes" para la segunda persona del plural en Canarias. 10. La existencia de diferentes acentos en distintas regiones de España.'
        }
      },
      {
        id: '1-4',
        title: 'La evolución de la lengua',
        content: `
          <p class="mb-4">La lengua es un organismo vivo que cambia constantemente. Las academias no "imponen" reglas de forma arbitraria, sino que observan, analizan y registran los cambios que los propios hablantes consolidan con el uso.</p>
          <p class="mb-4">La incorporación de neologismos (palabras nuevas) y la adaptación de extranjerismos son ejemplos de esta evolución. Un término como <strong>"tuitear"</strong>, impensable hace unas décadas, hoy está recogido en el diccionario.</p>
        `,
        exercise: {
          id: '1-4-e1',
          title: 'Práctica sobre evolución lingüística',
          consigna: 'Para cada uno de los siguientes 10 términos, indica si es un neologismo o un extranjerismo y escribe una oración coherente usándolo. 1. Tuitear. 2. Selfi. 3. Spoiler. 4. Viralizar. 5. Podcast. 6. Cliquear. 7. Bloguero. 8. Wasapear. 9. Emoticono. 10. Link.'
        }
      },
      {
        id: '1-5',
        title: 'Adaptación a nuevos medios',
        content: `
          <p class="mb-4">La revolución digital ha planteado nuevos desafíos para el idioma. La comunicación en redes sociales, chats o correos electrónicos tiene sus propias características de inmediatez y brevedad.</p>
          <p class="mb-4">El "Libro de estilo" ofrece pautas para adaptar las normas lingüísticas a estos nuevos medios sin sacrificar la corrección y la claridad. Se abordan temas como el uso de emoticonos, las abreviaturas en chats o la estructura de un correo electrónico formal.</p>
        `,
        exercise: {
          id: '1-5-e1',
          title: 'Ejercicio de adaptación a medios digitales',
          consigna: "Adapta el siguiente texto formal para una publicación en la red social X (antes Twitter), que tiene un límite de caracteres y un estilo más directo. Texto original: 'Se informa a todos los interesados que el evento programado para el próximo viernes ha sido pospuesto debido a circunstancias imprevistas. Se comunicará una nueva fecha a la brevedad posible.'"
        }
      },
      {
        id: '1-6',
        title: '¿Cómo usar esta guía?',
        content: `
          <p class="mb-4">Esta plataforma está diseñada para ser tu compañera en el perfeccionamiento del español. Te recomendamos seguir un orden lógico por los módulos, pero siéntete libre de saltar a los temas que más te interesen.</p>
          <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">Consejos de aprendizaje:</h4>
          <ul class="list-disc list-inside space-y-2">
            <li><strong>Lee con atención:</strong> Dedica tiempo a entender los conceptos de cada lección.</li>
            <li><strong>Realiza las actividades:</strong> Los cuestionarios y ejercicios de escritura son clave para afianzar el conocimiento.</li>
            <li><strong>Aplica lo aprendido:</strong> Intenta usar las reglas y recomendaciones en tu escritura diaria.</li>
            <li><strong>No temas equivocarte:</strong> El error es parte del aprendizaje. La retroalimentación de la IA te ayudará a mejorar.</li>
          </ul>
        `,
        exercise: {
          id: '1-6-e1',
          title: 'Ejercicio de autoevaluación',
          consigna: 'Reflexiona sobre tu propio proceso de aprendizaje del español. Responde a las siguientes 10 preguntas en una o dos frases cada одна. 1. ¿Cuál es tu mayor fortaleza en el uso del español? 2. ¿Qué aspecto de la gramática te resulta más difícil? 3. ¿Qué tipo de error ortográfico cometes con más frecuencia? 4. ¿Cómo aplicas lo que aprendes en tu vida diaria? 5. ¿Qué lección de este módulo te ha parecido más útil hasta ahora? 6. ¿Utilizas alguna herramienta de consulta como el DLE? 7. ¿Cuál es tu objetivo al usar esta guía? 8. ¿Te sientes más seguro/a al escribir en español ahora? 9. ¿Qué tema te gustaría profundizar más? 10. Describe un hábito que podrías adoptar para mejorar tu español.'
        }
      }
    ]
  },
  {
    id: 2,
    title: 'Cuestiones gramaticales',
    description: 'Dominio de la gramática esencial del español.',
    longDescription: 'Refuerza tu conocimiento sobre el uso correcto de género y número, la conjugación verbal, los pronombres, la concordancia y otras construcciones esenciales para una comunicación precisa.',
    icon: PencilSquareIcon,
    lessons: [
      {
        id: '2-1',
        title: 'Género y número: reglas y excepciones',
        content: `
          <p class="mb-4">La concordancia de género (masculino/femenino) y número (singular/plural) es fundamental en español. Aunque las reglas generales son conocidas, existen numerosos casos que generan dudas.</p>
          <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">Casos especiales:</h4>
          <ul class="list-disc list-inside space-y-2">
            <li><strong>Nombres ambiguos en cuanto al género:</strong> <em>el mar / la mar</em>.</li>
            <li><strong>Sustantivos que cambian de significado según el género:</strong> <em>el cólera</em> (enfermedad) vs. <em>la cólera</em> (ira).</li>
            <li><strong>Formación del plural:</strong> Palabras terminadas en vocal tónica (<em>menú > menús</em>), en consonante (<em>álbum > álbumes</em>) o invariables (<em>la crisis > las crisis</em>).</li>
            <li><strong>Femeninos de profesiones:</strong> Se recomienda el uso de formas como <em>la jueza</em>, <em>la médica</em>, <em>la ingeniera</em>.</li>
          </ul>
        `,
        exercise: {
          id: '2-1-e1',
          title: 'Práctica de género y número',
          consigna: 'Escribe el plural de las siguientes 5 palabras y el femenino de las siguientes 5 profesiones. 1. Régimen. 2. Carácter. 3. Espécimen. 4. Menú. 5. Club. 6. El poeta. 7. El alcalde. 8. El juez. 9. El concejal. 10. El médico.'
        }
      },
      {
        id: '2-2',
        title: 'Uso de pronombres: leísmo, laísmo y loísmo',
        content: `
          <p class="mb-4">El uso incorrecto de los pronombres <strong>lo, la, le</strong> y sus plurales es un error muy extendido. Estos fenómenos se conocen como leísmo, laísmo y loísmo.</p>
          <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">Norma general:</h4>
          <ul class="list-disc list-inside space-y-2 bg-slate-100 p-4 rounded-lg">
            <li><strong>Complemento Directo (CD):</strong> Se usan <strong>lo, los</strong> (masculino) y <strong>la, las</strong> (femenino). <em>Vi a Juan -> <strong>Lo</strong> vi.</em> | <em>Vi a María -> <strong>La</strong> vi.</em></li>
            <li><strong>Complemento Indirecto (CI):</strong> Se usa <strong>le, les</strong> (para ambos géneros). <em>Di un regalo a Juan -> <strong>Le</strong> di un regalo.</em> | <em>Di un regalo a María -> <strong>Le</strong> di un regalo.</em></li>
          </ul>
          <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">Excepción aceptada:</h4>
          <p>Se admite el <strong>leísmo de persona masculino singular</strong>: <em>Vi a Juan -> <strong>Le</strong> vi.</em> (Aceptado junto a <em>Lo vi</em>).</p>
        `,
        quiz: [
          {
            id: '2-2-q1',
            question: "Completa la frase: 'A tus amigas no ______ he visto en la fiesta.'",
            options: ['les', 'las'],
            correctAnswerIndex: 1,
            explanation: "El complemento directo es 'a tus amigas' (femenino plural), por lo tanto, el pronombre correcto es 'las'."
          },
          {
            id: '2-2-q2',
            question: "Completa la frase: '______ enviaré un correo a los clientes.'",
            options: ['Los', 'Les'],
            correctAnswerIndex: 1,
            explanation: "'A los clientes' es el complemento indirecto (¿A quiénes enviaré un correo?), por lo que se debe usar 'les'."
          }
        ],
        exercise: {
          id: '2-2-e1',
          title: 'Práctica de leísmo, laísmo y loísmo',
          consigna: 'Sustituye el complemento por el pronombre adecuado (lo, la, le, los, las, les) en las siguientes 10 oraciones. 1. Compré un libro para mi padre. 2. Vi a tus hermanas en el cine. 3. Dieron el premio a los ganadores. 4. He visto el coche nuevo. 5. Escribí una carta a la directora. 6. Acompañé a mi amigo al médico. (Admite leísmo de persona). 7. Entregaron las llaves a los inquilinos. 8. Recogí a los niños del colegio. 9. La policía detuvo a los ladrones. 10. Puse la falda en el armario.'
        }
      },
      {
        id: '2-3',
        title: 'Concordancia: sujeto-verbo y nominal',
        content: `
          <p class="mb-4">La concordancia es la coincidencia obligada de determinados accidentes gramaticales (género, número y persona) entre distintos elementos de la oración.</p>
          <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">Tipos principales:</h4>
          <ul class="list-disc list-inside space-y-2">
            <li><strong>Concordancia Verbal:</strong> El verbo concuerda en número y persona con el sujeto. <em><strong>El niño</strong> <strong>juega</strong> / <strong>Los niños</strong> <strong>juegan</strong>.</em></li>
            <li><strong>Concordancia Nominal:</strong> El sustantivo concuerda en género y número con sus determinantes y adjetivos. <em><strong>La</strong> <strong>casa</strong> <strong>blanca</strong> / <strong>Los</strong> <strong>coches</strong> <strong>nuevos</strong>.</em></li>
          </ul>
          <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">Casos que crean dudas:</h4>
          <p>Sujetos compuestos por varios elementos (<em>Juan y María <strong>son</strong>...</em>), sujetos colectivos (<em>La gente <strong>piensa</strong>...</em>), o el uso del pronombre 'se' (<em>Se venden casas</em>).</p>
        `,
        exercise: {
            id: '2-3-e1',
            title: 'Ejercicio de concordancia',
            consigna: "Corrige los errores de concordancia en las siguientes oraciones: 1. La gente, en el fondo, son buenas. 2. El calor y la humedad ambiental era insoportable. 3. El grupo de turistas llegaron cansados al hotel. 4. Hubieron muchas personas que protestaron. 5. La mayoría de los diputados votó en contra. 6. Se alquila apartamentos en la costa. 7. Entra y sale muchos trenes de la estación. 8. Tanto el padre como el hijo era muy alto. 9. Me gusta el cine y el teatro clásico. 10. El clave de la cuestión son los detalles."
        }
      },
      {
        id: '2-4',
        title: 'Verbo "haber" impersonal',
        content: `
          <p class="mb-4">Uno de los errores más comunes en español es la conjugación del verbo <strong>haber</strong> cuando funciona como impersonal, es decir, cuando significa 'existir' o 'suceder'. En estos casos, el verbo siempre debe ir en tercera persona del singular.</p>
          <p class="mb-4">El elemento que parece ser el sujeto (p. ej., "muchas personas") en realidad es el complemento directo. Por lo tanto, no debe haber concordancia en número.</p>
          <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">Ejemplos correctos:</h4>
          <ul class="list-disc list-inside space-y-2 bg-slate-100 p-4 rounded-lg">
            <li><span class="font-semibold text-green-700">Correcto:</span> <code class="bg-green-100 px-1 rounded">Hubo</code> muchas personas.</li>
            <li><span class="font-semibold text-red-700">Incorrecto:</span> <code class="bg-red-100 px-1 rounded line-through">Hubieron</code> muchas personas.</li>
            <li><span class="font-semibold text-green-700">Correcto:</span> Siempre <code class="bg-green-100 px-1 rounded">ha habido</code> problemas.</li>
            <li><span class="font-semibold text-red-700">Incorrecto:</span> <code class="bg-red-100 px-1 rounded line-through">Han habido</code> problemas.</li>
          </ul>
        `,
        quiz: [
          {
            id: '2-4-q1',
            question: "Selecciona la opción correcta: 'Ayer ______ muchas personas en la manifestación.'",
            options: ['hubieron', 'hubo'],
            correctAnswerIndex: 1,
            explanation: "El verbo 'haber' cuando denota existencia (hay, hubo, habrá) es impersonal y se usa siempre en tercera persona del singular. 'Muchas personas' es el complemento directo, no el sujeto."
          },
          {
            id: '2-4-q2',
            question: "Completa la frase: 'No creo que ______ problemas con el nuevo sistema.'",
            options: ['hayan', 'haya'],
            correctAnswerIndex: 1,
            explanation: "Incluso en subjuntivo, 'haber' como impersonal se mantiene en singular. Lo correcto es 'haya problemas'."
          }
        ],
        exercise: {
          id: '2-4-e1',
          title: 'Práctica del verbo haber',
          consigna: 'Elige la forma correcta del verbo "haber" para cada una de las siguientes 10 oraciones. 1. (Hubo/Hubieron) muchos problemas. 2. Mañana (habrá/habrán) dos reuniones. 3. No creo que (haya/hayan) suficientes sillas. 4. Siempre (ha habido/han habido) personas así. 5. Si (hubiera/hubieran) sabido, no venían. 6. En mi clase (hay/somos) veinte alumnos. (¡Cuidado con esta!). 7. El año pasado (hubo/hubieron) varias tormentas. 8. Es posible que (haya/hayan) cambios. 9. ¿(Había/Habían) muchas nubes ayer?. 10. Ojalá no (haya/hayan) más incidentes.'
        }
      },
      {
        id: '2-5',
        title: 'Queísmo y dequeísmo',
        content: `
          <p class="mb-4">Estos son vicios del lenguaje relacionados con el uso incorrecto de la preposición 'de' junto a la conjunción 'que'.</p>
          <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">Definiciones:</h4>
          <ul class="list-disc list-inside space-y-2">
            <li><strong>Dequeísmo:</strong> Uso indebido de 'de que' cuando no corresponde. *Incorrecto: <em>Pienso <s>de que</s> es tarde.</em> -> Correcto: <em>Pienso <strong>que</strong> es tarde.</em></li>
            <li><strong>Queísmo:</strong> Supresión indebida de 'de' antes de 'que'. *Incorrecto: <em>Me alegro <s>que</s> hayas venido.</em> -> Correcto: <em>Me alegro <strong>de que</strong> hayas venido.</em></li>
          </ul>
          <p class="mt-4">Un truco útil es sustituir la oración subordinada por 'eso'. Si la frase tiene sentido con 'de eso', se usa 'de que'. Si solo tiene sentido con 'eso', se usa 'que'. (Ej: <em>Me alegro <strong>de eso</strong></em> -> <em>Me alegro <strong>de que</strong>...</em>)</p>
        `,
        quiz: [
          {
            id: '2-5-q1',
            question: "Selecciona la oración correcta:",
            options: ["Me di cuenta que era tarde.", "Me di cuenta de que era tarde."],
            correctAnswerIndex: 1,
            explanation: "El verbo 'darse cuenta' exige la preposición 'de'. Un truco es sustituir por 'eso': 'Me di cuenta DE ESO', por lo tanto, es 'Me di cuenta de que'."
          },
          {
            id: '2-5-q2',
            question: "¿Cuál de estas frases contiene 'dequeísmo'?",
            options: ["Opino de que deberías ir.", "Estoy seguro de que vendrá.", "No te olvides de que mañana hay examen."],
            correctAnswerIndex: 0,
            explanation: "'Opino que' no lleva preposición. El truco: 'Opino ESO', no 'Opino de eso'. Por tanto, usar 'de que' es incorrecto (dequeísmo)."
          },
          {
            id: '2-5-q3',
            question: "¿Cuál de estas frases contiene 'queísmo'?",
            options: ["Me acuerdo que llovía mucho.", "Insistió en que fuéramos.", "Pienso que tienes razón."],
            correctAnswerIndex: 0,
            explanation: "El verbo 'acordarse' rige la preposición 'de' ('acordarse DE algo'). Omitirla es un caso de queísmo. Lo correcto es 'Me acuerdo de que llovía mucho'."
          }
        ],
        exercise: {
          id: '2-5-e1',
          title: 'Práctica de queísmo y dequeísmo',
          consigna: 'Corrige las siguientes 10 oraciones eliminando los casos de queísmo o dequeísmo. Si una oración es correcta, indícalo. 1. Pienso de que deberíamos irnos. 2. Me alegro que te guste. 3. Estoy seguro que lo lograrás. 4. Le informé de que no había plazas. 5. Me di cuenta que era tarde. 6. No cabe duda de que es un gran artista. 7. Insistió de que le pagaran. 8. Me acuerdo que llovía. 9. Le aconsejo que estudie más. 10. Es hora que te vayas.'
        }
      },
      {
        id: '2-6',
        title: 'Preposiciones y adverbios: usos dudosos',
        content: `
          <p class="mb-4">Algunas preposiciones y adverbios presentan dificultades en su uso, llevando a construcciones imprecisas o incorrectas.</p>
          <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">Casos frecuentes:</h4>
          <ul class="list-disc list-inside space-y-2">
            <li><strong>a / en:</strong> <em>Sentarse <strong>a</strong> la mesa</em> (correcto), no <em>en la mesa</em> (que significa encima de ella).</li>
            <li><strong>bajo / desde:</strong> <em><strong>Desde</strong> mi punto de vista</em> (correcto), no <em>bajo mi punto de vista</em> (calco del francés).</li>
            <li><strong>contra / cuanto:</strong> <em><strong>Cuanto</strong> más estudies, mejor</em> (correcto), no <em>contra más estudies</em>.</li>
            <li><strong>cerca de / cerca a:</strong> Se prefiere <em><strong>cerca de</strong></em> en el español general.</li>
          </ul>
        `,
        exercise: {
          id: '2-6-e1',
          title: 'Práctica de preposiciones y adverbios',
          consigna: 'Elige la opción correcta para cada una de las siguientes 10 oraciones. 1. Siéntate (en/a) la mesa. 2. Lo haré (de acuerdo a/de acuerdo con) tus instrucciones. 3. (Bajo/Desde) mi punto de vista, estás equivocado. 4. (Contra/Cuanto) más lo pienso, menos lo entiendo. 5. Vivo cerca (a/de) la playa. 6. El jarrón está hecho (a/de) cristal. 7. Discrepo (con/de) tu opinión. 8. Salí (en/de) dirección al norte. 9. La cocina (a/de) gas es más rápida. 10. Tengo afición (por/a) la lectura.'
        }
      }
    ]
  },
  {
    id: 3,
    title: 'Ortografía y puntuación',
    description: 'Reglas de acentuación, puntuación y uso de mayúsculas.',
    longDescription: 'Aprende y aplica las reglas de acentuación, el uso correcto de mayúsculas y minúsculas, los signos de puntuación, y el manejo de abreviaturas, siglas y símbolos para una escritura impecable.',
    icon: PencilSquareIcon,
    lessons: [
        {
            id: '3-1',
            title: 'Reglas generales de acentuación',
            content: `
              <p class="mb-4">La acentuación gráfica (el uso de la tilde) sigue unas reglas generales bien definidas en español, que dependen de la sílaba tónica (la que se pronuncia con más fuerza).</p>
              <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">Clasificación de palabras:</h4>
              <ul class="list-disc list-inside space-y-2">
                <li><strong>Agudas:</strong> Sílaba tónica en la última posición. Llevan tilde si terminan en <strong>-n</strong>, <strong>-s</strong> o <strong>vocal</strong>. Ej: <em>can<strong>ción</strong></em>, <em>com<strong>pás</strong></em>, <em>ca<strong>fé</strong></em>.</li>
                <li><strong>Graves (o llanas):</strong> Sílaba tónica en la penúltima posición. Llevan tilde si <strong>NO</strong> terminan en -n, -s o vocal. Ej: <em><strong>ár</strong>bol</em>, <em><strong>cárc</strong>el</em>, <em><strong>fá</strong>cil</em>.</li>
                <li><strong>Esdrújulas y Sobresdrújulas:</strong> Sílaba tónica en la antepenúltima o anterior posición. Llevan tilde <strong>siempre</strong>. Ej: <em><strong>má</strong>gico</em>, <em><strong>miér</strong>coles</em>, <em>en<strong>tré</strong>gaselo</em>.</li>
              </ul>
            `,
            quiz: [
                {
                    id: '3-1-q1',
                    question: "La palabra 'examenes'...",
                    options: ["Está bien escrita.", "Debería llevar tilde: 'exámenes'."],
                    correctAnswerIndex: 1,
                    explanation: "'Examen' (grave terminada en N) no lleva tilde, pero su plural 'exámenes' es una palabra esdrújula, y todas las esdrújulas llevan tilde."
                },
                {
                    id: '3-1-q2',
                    question: "La palabra 'arbol'...",
                    options: ["Está bien escrita.", "Debería llevar tilde: 'árbol'."],
                    correctAnswerIndex: 1,
                    explanation: "'Árbol' es una palabra grave o llana que termina en 'l', una consonante distinta de -n o -s. Por lo tanto, debe llevar tilde."
                },
                {
                    id: '3-1-q3',
                    question: "La palabra 'camion'...",
                    options: ["Debería llevar tilde: 'camión'.", "Está bien escrita."],
                    correctAnswerIndex: 0,
                    explanation: "'Camión' es una palabra aguda terminada en -n. Las agudas que terminan en -n, -s o vocal siempre llevan tilde."
                }
            ],
            exercise: {
              id: '3-1-e1',
              title: 'Práctica de acentuación',
              consigna: 'Coloca la tilde en las siguientes 10 palabras que la necesiten y justifica por qué (aguda, grave, esdrújula). 1. arbol. 2. cancion. 3. helicoptero. 4. caracter. 5. cafe. 6. util. 7. examenes. 8. marmol. 9. comite. 10. dieciseis.'
            }
        },
        {
            id: '3-2',
            title: 'La tilde diacrítica',
            content: `
                <p class="mb-4">La tilde diacrítica se usa para diferenciar palabras que se escriben igual pero tienen significados o funciones gramaticales distintas. Afecta principalmente a monosílabos.</p>
                <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">Pares comunes:</h4>
                <ul class="list-disc list-inside space-y-2 bg-slate-100 p-4 rounded-lg">
                    <li><strong>el</strong> (artículo) / <strong>él</strong> (pronombre personal): <em><strong>El</strong> perro es de <strong>él</strong>.</em></li>
                    <li><strong>tu</strong> (posesivo) / <strong>tú</strong> (pronombre personal): <em><strong>Tú</strong> tienes <strong>tu</strong> libro.</em></li>
                    <li><strong>mas</strong> (conjunción, = pero) / <strong>más</strong> (adverbio de cantidad): <em>Quiero ir, <strong>mas</strong> no puedo. / Quiero <strong>más</strong> tarta.</em></li>
                    <li><strong>si</strong> (conjunción condicional) / <strong>sí</strong> (adverbio de afirmación, pronombre): <em><strong>Si</strong> vienes, te digo que <strong>sí</strong>.</em></li>
                    <li><strong>de</strong> (preposición) / <strong>dé</strong> (del verbo dar): <em>Espero que me <strong>dé</strong> el libro <strong>de</strong> aventuras.</em></li>
                </ul>
                <p class="mt-4">La palabra <strong>solo</strong> (tanto adjetivo como adverbio) y los pronombres demostrativos (<strong>este, ese, aquel</strong>) ya <strong>NO</strong> llevan tilde en ningún caso según la última Ortografía de la RAE.</p>
            `,
            quiz: [
                {
                    id: '3-2-q1',
                    question: "¿Qué frase está correctamente escrita?",
                    options: ['Tú coche es más rápido que el de él.', 'Tu coche es mas rápido que el de él.', 'Tu coche es más rápido que el de él.'],
                    correctAnswerIndex: 2,
                    explanation: "'Tu' como posesivo va sin tilde. 'Más' de cantidad lleva tilde. 'El' artículo va sin tilde, y 'él' pronombre lleva tilde. La correcta es la tercera opción."
                },
                {
                    id: '3-2-q2',
                    question: "Completa la frase: 'No __ por qué __ enfadó tanto, __ que no le dije nada.'",
                    options: ['se / se / se', 'sé / se / sé', 'sé / se / se'],
                    correctAnswerIndex: 2,
                    explanation: "'Sé' del verbo saber; 'se' pronombre reflexivo; 'sé' del verbo saber. La frase correcta es: 'No sé por qué se enfadó tanto, si sé que no le dije nada'."
                }
            ],
            exercise: {
              id: '3-2-e1',
              title: 'Práctica de tilde diacrítica',
              consigna: 'Completa las siguientes 10 oraciones con la opción correcta (con o sin tilde diacrítica). 1. No (se/sé) que hacer. 2. (El/Él) es mi mejor amigo. 3. ¿Quieres (mas/más) café? 4. (Tu/Tú) tienes la culpa. 5. Iré (si/sí) me invitas. 6. Me lo dio para (mi/mí). 7. Quiero un té (de/dé) menta. 8. Lo intentó, (mas/más) no pudo. 9. (Si/Sí), estoy de acuerdo. 10. Este es (el/él) libro (de/dé) Juan.'
            }
        },
        {
            id: '3-3',
            title: 'Uso de mayúsculas y minúsculas',
            content: `
              <p class="mb-4">El uso de mayúsculas tiene reglas precisas que van más allá de empezar una oración o escribir nombres propios.</p>
              <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">Recordatorios importantes:</h4>
              <ul class="list-disc list-inside space-y-2">
                <li>Los nombres de los <strong>días de la semana, meses y estaciones</strong> se escriben con minúscula: <em>lunes, agosto, primavera</em>.</li>
                <li>Los <strong>cargos o títulos</strong> van con minúscula: <em>el rey, la presidenta, el papa</em>.</li>
                <li>Después de dos puntos (:) se escribe con minúscula, salvo que se inicie una cita textual.</li>
                <li>Las mayúsculas <strong>siempre</strong> llevan tilde si les corresponde: <em>ÁFRICA</em>.</li>
              </ul>
            `,
            exercise: {
              id: '3-3-e1',
              title: 'Práctica de mayúsculas y minúsculas',
              consigna: 'Reescribe las siguientes 10 frases corrigiendo los errores en el uso de mayúsculas y minúsculas. 1. El próximo Miércoles tengo cita con el Dentista. 2. La Reina Letizia es muy elegante. 3. El Río Ebro pasa por Zaragoza. 4. En Invierno nieva mucho en los Pirineos. 5. Estudié Historia del Arte en la universidad. 6. El Papa vive en la Ciudad del Vaticano. 7. Me encanta la comida Japonesa. 8. ¿Hablas Inglés? 9. El Océano Pacífico es el más grande. 10. El Presidente del Gobierno dio una rueda de Prensa.'
            }
        },
        {
            id: '3-4',
            title: 'Signos de puntuación: el punto y la coma',
            content: `
              <p class="mb-4">El <strong>punto (.)</strong> y la <strong>coma (,)</strong> son los signos de puntuación más básicos y esenciales para estructurar un texto y darle sentido.</p>
              <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">Usos fundamentales:</h4>
              <ul class="list-disc list-inside space-y-2">
                <li><strong>Punto y seguido:</strong> Separa oraciones dentro de un mismo párrafo.</li>
                <li><strong>Punto y aparte:</strong> Separa párrafos.</li>
                <li><strong>Punto final:</strong> Cierra un texto.</li>
                <li><strong>Coma para enumerar:</strong> <em>Compré pan, leche, huevos y fruta.</em></li>
                <li><strong>Coma para incisos o aclaraciones:</strong> <em>Mi vecino, que es un encanto, me ayudó.</em></li>
                <li><strong>Coma antes de conjunciones adversativas:</strong> <em>Es caro, pero bueno.</em></li>
              </ul>
              <p class="mt-4 font-semibold text-red-700">Error común: Nunca se debe poner una coma entre el sujeto y el verbo de una oración.</p>
            `,
            exercise: {
                id: '3-4-e1',
                title: 'Práctica de puntuación',
                consigna: "Añade los puntos y las comas necesarios en el siguiente texto para que tenga sentido: 'Mi hermano que es el mayor estudia medicina mi hermana la pequeña quiere ser arquitecta yo por mi parte aún no lo he decidido pero me gustan las ciencias'"
            }
        },
        {
            id: '3-5',
            title: 'Otros signos de puntuación',
            content: `
              <p class="mb-4">Además del punto y la coma, existen otros signos que nos ayudan a organizar las ideas con mayor precisión.</p>
              <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">Funciones:</h4>
              <ul class="list-disc list-inside space-y-2">
                <li><strong>Punto y coma (;):</strong> Indica una pausa mayor que la coma pero menor que el punto. Separa elementos de una enumeración que ya contienen comas o proposiciones yuxtapuestas. <em>Visitamos Roma, la Ciudad Eterna; París, la capital de Francia; y Madrid.</em></li>
                <li><strong>Dos puntos (:):</strong> Anuncian una enumeración, una cita textual o una conclusión. <em>Como dijo Descartes: "Pienso, luego existo".</em></li>
                <li><strong>Puntos suspensivos (...):</strong> Indican una interrupción, una duda o un final abierto. Son siempre tres y solo tres.</li>
              </ul>
            `,
            exercise: {
              id: '3-5-e1',
              title: 'Práctica de puntuación avanzada',
              consigna: 'Añade los signos de puntuación que faltan (punto y coma, dos puntos, puntos suspensivos) en las siguientes 10 oraciones. 1. Eran demasiados los invitados no cabíamos en el salón. 2. Como decía el refrán A quien madruga, Dios le ayuda. 3. Compró de todo para la fiesta refrescos, patatas, aceitunas y dulces. 4. No sé si ir, si quedarme, si llamarte 5. El niño lloraba la madre lo consolaba. 6. Queridos abuelos Les escribo para contarles mis aventuras. 7. El discurso fue brillante sin embargo, nadie aplaudió. 8. Lo miró fijamente y entonces le dijo la verdad. 9. Puedes hacer lo que quieras ir al cine, quedarte en casa, salir con amigos 10. Quizás, si hubiera estudiado más '
            }
        },
        {
            id: '3-6',
            title: 'Abreviaturas, siglas y símbolos',
            content: `
              <p class="mb-4">Estos elementos permiten acortar la escritura, pero deben usarse correctamente.</p>
              <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">Diferencias clave:</h4>
              <ul class="list-disc list-inside space-y-2">
                <li><strong>Abreviaturas:</strong> Llevan punto final (o barra). <em>pág.</em> (página), <em>c/</em> (calle). El plural se forma añadiendo -s (<em>págs.</em>).</li>
                <li><strong>Siglas:</strong> Se forman con las iniciales de varias palabras. Se escriben sin puntos y en mayúscula (<em>ONU, FMI</em>). No forman plural gráfico (*<s>las ONGs</s> -> <em>las ONG</em>).</li>
                <li><strong>Símbolos:</strong> Son representaciones de conceptos científicos o técnicos. Se escriben sin punto y no tienen plural (<em>kg, m, €</em>). Se separan con un espacio del número al que acompañan: <em>100 m, 50 kg</em>.</li>
              </ul>
            `,
            exercise: {
              id: '3-6-e1',
              title: 'Práctica de abreviaturas y siglas',
              consigna: 'Corrige o completa las siguientes 10 frases prestando atención al uso de abreviaturas, siglas y símbolos. 1. La ONGs ayudan a mucha gente. 2. La sede de la O.N.U. está en Nueva York. 3. El precio es de 50€. (Corrige el espaciado). 4. Vivo en la c/ Alcalá. (Escribe la forma completa y la abreviatura). 5. La película dura 120 min. (Corrige el punto). 6. Consulte la pag. 25. (Escribe la abreviatura del plural: páginas). 7. Etc... (Corrige la puntuación). 8. El paquete pesa 5 Kgs. (Corrige el símbolo y el plural). 9. El Dr Pérez es un gran profesional. (Añade el punto). 10. La R.A.E. publica el diccionario.'
            }
        }
    ]
  },
   {
    id: 4,
    title: 'Ortotipografía y formato',
    description: 'Uso de tipografía, estilos, citas y referencias.',
    longDescription: 'Domina las normas de presentación de textos: uso de negritas y cursivas, espaciado correcto, formato de citas y elaboración de referencias bibliográficas.',
    icon: PencilSquareIcon,
    lessons: [
      {
        id: '4-1',
        title: 'La elección tipográfica: fuentes y estilos',
        content: `
          <p class="mb-4">La ortotipografía se ocupa de las convenciones para escribir usando elementos tipográficos. Una de las decisiones más importantes es el uso de los estilos de letra.</p>
          <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">Usos principales:</h4>
          <ul class="list-disc list-inside space-y-2">
            <li><strong>Cursiva:</strong> Se usa para extranjerismos no adaptados (<em>software</em>, <em>ballet</em>), títulos de obras (libros, películas), alias o apodos, y para dar énfasis.</li>
            <li><strong>Negrita:</strong> Se reserva para resaltar elementos dentro de un texto de manera muy marcada, como en títulos o subtítulos. No se debe abusar de ella en el cuerpo del texto.</li>
            <li><strong>Comillas:</strong> Se usan para citas textuales, para indicar que una palabra se usa en sentido irónico o especial, y para títulos de artículos o capítulos de un libro ("El capítulo se titula «El inicio»"). Las comillas angulares (« ») son las recomendadas en español.</li>
          </ul>
        `,
        quiz: [
            {
                id: '4-1-q1',
                question: "Para escribir el título de un libro, como *Cien años de soledad*, la norma recomienda usar:",
                options: ["Negrita", "Comillas", "Cursiva"],
                correctAnswerIndex: 2,
                explanation: "Los títulos de obras extensas (libros, películas, discos) se escriben en cursiva para distinguirlos del resto del texto."
            },
            {
                id: '4-1-q2',
                question: "La palabra 'software' es un extranjerismo no adaptado. ¿Cómo debe escribirse?",
                options: ["software", "en cursiva: *software*", "en negrita: **software**"],
                correctAnswerIndex: 1,
                explanation: "Los extranjerismos crudos o no adaptados al español se escriben en cursiva para indicar su procedencia foránea."
            },
            {
                id: '4-1-q3',
                question: "¿Qué tipo de comillas recomienda la RAE como primera opción en textos en español?",
                options: ["Inglesas (“ ”)", "Simples (‘ ’)", "Angulares (« »)"],
                correctAnswerIndex: 2,
                explanation: "La RAE recomienda el uso de las comillas angulares o latinas (« ») como primera opción, reservando las inglesas y las simples para entrecomillar dentro de un texto ya entrecomillado."
            }
        ],
        exercise: {
          id: '4-1-e1',
          title: 'Práctica de ortotipografía',
          consigna: 'Indica qué recurso tipográfico (cursiva, negrita o comillas) usarías en cada uno de los siguientes 10 casos. 1. Para el título de un libro. 2. Para una palabra extranjera no adaptada como "marketing". 3. Para resaltar una palabra clave en un título. 4. Para una cita textual corta. 5. Para el título de un artículo de periódico. 6. Para indicar que una palabra se usa con ironía. 7. Para el nombre de una película. 8. Para el apodo de una persona. 9. Para una palabra que se está definiendo. 10. Para los nombres de barcos.'
        }
      },
      {
        id: '4-2',
        title: 'Formato de párrafos y espaciado',
        content: `
          <p class="mb-4">Un texto bien estructurado visualmente es más fácil de leer. El espaciado es clave para lograrlo.</p>
          <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">Reglas de espaciado:</h4>
          <ul class="list-disc list-inside space-y-2">
            <li>Se deja <strong>un solo espacio</strong> después de un punto, una coma, un punto y coma o dos puntos.</li>
            <li>Los signos de puntuación se escriben <strong>pegados</strong> a la palabra que les precede y separados por un espacio de la que les sigue.</li>
            <li>Los párrafos deben separarse con una línea en blanco o con sangría en la primera línea (pero no ambas cosas a la vez).</li>
          </ul>
        `,
        exercise: {
          id: '4-2-e1',
          title: 'Práctica de espaciado',
          consigna: 'Reescribe las siguientes 10 frases corrigiendo los errores de espaciado. 1. Fui al cine.Y me gustó mucho. 2. ¿ Qué quieres ?. 3. Compré pan ,leche y huevos. 4. Dijo : "Volveré pronto". 5. Me encanta el libro( sobre todo el final). 6. ¡ Qué sorpresa ! 7. Es un gran profesional ;además,es muy amable. 8. El resultado es 10 000. (Revisa si es correcto). 9. El 25 % de los alumnos aprobó. (Revisa si es correcto). 10. Me lo contó todo ...y se fue.'
        }
      },
      {
        id: '4-3',
        title: 'Cifras, números y caracteres especiales',
        content: `
          <p class="mb-4">La escritura de números también sigue unas normas.</p>
          <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">Pautas generales:</h4>
          <ul class="list-disc list-inside space-y-2">
            <li>Se escriben con palabras los números del cero al nueve. A partir del diez, se recomienda usar cifras, especialmente en textos técnicos.</li>
            <li>Los millares se separan con un espacio, no con punto ni coma: <em>10 000</em> (no <em>10.000</em>). Los decimales se separan con coma: <em>3,1416</em>.</li>
            <li>Los porcentajes se escriben con el símbolo separado del número: <em>25 %</em>.</li>
          </ul>
        `,
        quiz: [
            {
                id: '4-3-q1',
                question: "¿Cuál es la forma correcta de escribir el número 'veintidós mil quinientos' con cifras?",
                options: ["22.500", "22,500", "22 500"],
                correctAnswerIndex: 2,
                explanation: "Para facilitar la lectura de números de más de cuatro cifras, la norma internacional recomienda separar los grupos de tres con un espacio, no con punto ni coma."
            },
            {
                id: '4-3-q2',
                question: "¿Cuál es la forma correcta de escribir un porcentaje?",
                options: ["25%", "25 %"],
                correctAnswerIndex: 1,
                explanation: "El símbolo de porcentaje (%) se escribe separado por un espacio del número al que acompaña, ya que no es un sufijo sino un símbolo que representa 'por ciento'."
            }
        ],
        exercise: {
          id: '4-3-e1',
          title: 'Práctica con números y símbolos',
          consigna: 'Escribe correctamente las siguientes 10 expresiones que involucran números, cifras y símbolos. 1. El premio fue de 25.000 euros. 2. Tengo treinta y cinco años. (Escríbelo con cifra). 3. La temperatura es de 30ºC. (Corrige el espaciado). 4. La 2ª Guerra Mundial. (Usa números romanos). 5. Es el capítulo nueve. (Escríbelo con cifra). 6. El 50% de la población. (Corrige el espaciado). 7. El número premiado fue el 1.000. (Corrige el separador de millar). 8. Compré tres bolígrafos. (Escríbelo con cifra si lo consideras apropiado). 9. Son las 8 de la tarde. (Escríbelo con cifra). 10. Mi código postal es 28014. (Añade separador de millar si es necesario).'
        }
      },
      {
        id: '4-4',
        title: 'Elementos de titulación y listas',
        content: `
          <p class="mb-4">Los títulos y las listas ayudan a jerarquizar y organizar la información.</p>
          <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">Normas para títulos:</h4>
          <p>Los títulos de un libro o capítulo no llevan punto final.</p>
          <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">Normas para listas:</h4>
          <ul class="list-disc list-inside space-y-2">
            <li>Si los elementos de la lista son frases cortas o palabras, pueden empezar con minúscula y terminar con coma (o punto y coma), excepto el último que termina con punto.</li>
            <li>Si son oraciones completas, cada elemento empieza con mayúscula y termina con punto.</li>
          </ul>
        `,
        exercise: {
          id: '4-4-e1',
          title: 'Práctica de títulos y listas',
          consigna: 'Puntúa correctamente el final de los siguientes 5 títulos y de los 5 elementos de la siguiente lista. TÍTULOS: 1. El invierno en Lisboa 2. Capítulo I 3. La importancia de la puntuación 4. Instrucciones de uso 5. Introducción. LISTA: Necesito comprar: 6. pan 7. leche 8. huevos 9. aceite 10. y fruta'
        }
      },
      {
        id: '4-5',
        title: 'Cómo citar correctamente: citas y notas',
        content: `
          <p class="mb-4">En textos académicos o formales, es crucial citar las fuentes de información. Una cita es la reproducción de las palabras de otra persona.</p>
          <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">Tipos de citas:</h4>
          <ul class="list-disc list-inside space-y-2">
            <li><strong>Cita directa corta:</strong> Menos de 40 palabras. Se integra en el párrafo y se encierra entre comillas.</li>
            <li><strong>Cita directa larga:</strong> Más de 40 palabras. Se escribe en un párrafo aparte, con sangría y sin comillas.</li>
          </ul>
          <p class="mt-4">Las <strong>notas a pie de página</strong> o al final se usan para hacer aclaraciones, añadir información secundaria o incluir la referencia bibliográfica completa.</p>
        `,
        exercise: {
          id: '4-5-e1',
          title: 'Ejercicio de formato de cita',
          consigna: "Formatea la siguiente cita directa larga y su referencia según las normas de estilo. Texto original: 'El Quijote es una de las cumbres de la literatura universal. Su influencia se extiende por todo el mundo.' Autor: Martín de Riquer. Año: 1980. Página: 45."
        }
      },
      {
        id: '4-6',
        title: 'Elaboración de referencias bibliográficas',
        content: `
          <p class="mb-4">Al final de un trabajo, se debe incluir una lista con todas las fuentes citadas. Hay varios sistemas de citación (APA, Chicago, MLA), pero todos comparten una estructura básica.</p>
          <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">Estructura básica (estilo humanístico):</h4>
          <p>Apellido, Nombre del autor, <em>Título de la obra en cursiva</em>, Lugar de publicación, Editorial, Año.</p>
          <p class="bg-slate-100 p-3 rounded-lg mt-2">Ejemplo: <br>García Márquez, Gabriel, <em>Cien años de soledad</em>, Buenos Aires, Sudamericana, 1967.</p>
        `,
        exercise: {
          id: '4-6-e1',
          title: 'Práctica de referencias',
          consigna: 'Ordena los siguientes 10 elementos para formar una referencia bibliográfica correcta de un libro según el estilo humanístico (Apellido, Nombre, Título, Lugar, Editorial, Año). 1. Cien años de soledad (Título) 2. 1967 (Año) 3. García Márquez, Gabriel (Autor) 4. Sudamericana (Editorial) 5. Buenos Aires (Lugar). Ahora, haz lo mismo con los siguientes 5 elementos para una referencia de un artículo de revista: 6. "La nueva ortografía" (Título del artículo) 7. 2010 (Año) 8. Gutiérrez Ordóñez, Salvador (Autor) 9. pp. 15-25 (Páginas) 10. Revista de Filología Española, vol. 90 (Nombre de la revista y volumen).'
        }
      }
    ]
  },
  {
    id: 5,
    title: 'Pronunciación y elocución',
    description: 'Pautas para una pronunciación correcta y clara.',
    longDescription: 'Mejora tu español hablado con pautas para una pronunciación correcta, una entonación adecuada y un ritmo fluido, abordando errores comunes.',
    icon: ChatBubbleLeftRightIcon,
    lessons: [
        {
            id: '5-1',
            title: 'Fundamentos de la fonética española',
            content: `
              <p class="mb-4">El español es un idioma de fonética relativamente sencilla. La correspondencia entre cómo se escribe una palabra (grafía) y cómo se pronuncia (fonema) es muy alta.</p>
              <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">Las vocales:</h4>
              <p>El español tiene 5 sonidos vocálicos puros y estables: /a/, /e/, /i/, /o/, /u/. Es crucial pronunciarlas siempre de la misma forma, sin diptongar ni relajar su sonido, a diferencia del inglés.</p>
              <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">Las consonantes:</h4>
              <p>Algunas consonantes como la 'r' (simple y vibrante), la 'j' o la 'ñ' requieren práctica específica para hablantes no nativos.</p>
            `,
            exercise: {
              id: '5-1-e1',
              title: 'Ejercicio sobre fonética',
              consigna: 'Describe brevemente cómo se articulan los siguientes 10 sonidos del español. 1. La vocal /a/. 2. La vocal /i/. 3. La consonante /p/. 4. La consonante /m/. 5. La consonante /s/ (en seseo). 6. La consonante /l/. 7. La vibrante simple /ɾ/ (en "caro"). 8. La vibrante múltiple /r/ (en "carro"). 9. El fonema /x/ de "gente" o "jamón". 10. El fonema /ɲ/ de "ñu".'
            }
        },
        {
            id: '5-2',
            title: 'Seseo y ceceo: variantes de pronunciación',
            content: `
                <p class="mb-4">Estos son dos de los fenómenos más característicos de la diversidad del español.</p>
                <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">Definiciones:</h4>
                <ul class="list-disc list-inside space-y-2">
                    <li><strong>Distinción (Norte y Centro de España):</strong> Se pronuncia la 's' como /s/ y la 'c' (ante e, i) y la 'z' como /θ/ (sonido interdental, como la 'th' en "thing"). Ej: <em>ca<strong>s</strong>a</em> vs. <em>ca<strong>z</strong>a</em> suenan diferente.</li>
                    <li><strong>Seseo (América Latina, Canarias, parte de Andalucía):</strong> No se distingue. Tanto 's' como 'c' (ante e, i) y 'z' se pronuncian como /s/. Ej: <em>ca<strong>s</strong>a</em> y <em>ca<strong>z</strong>a</em> suenan igual.</li>
                    <li><strong>Ceceo (Algunas zonas de Andalucía):</strong> Fenómeno minoritario donde 's', 'c' y 'z' se pronuncian como /θ/.</li>
                </ul>
                <p class="mt-4">Tanto la <strong>distinción</strong> como el <strong>seseo</strong> son aceptados como parte de la norma culta del español.</p>
            `,
            quiz: [
                {
                    id: '5-2-q1',
                    question: "¿Qué es el seseo?",
                    options: ['Pronunciar la "s" como "z".', 'Pronunciar la "z" y la "c" (ante e,i) como "s".', 'No pronunciar la "s" al final de las palabras.'],
                    correctAnswerIndex: 1,
                    explanation: "El seseo es el fenómeno mayoritario en el mundo hispanohablante y consiste en pronunciar el sonido que representan las letras 'c' (ante e, i) y 'z' con el mismo fonema /s/ de la letra 's'."
                }
            ],
            exercise: {
              id: '5-2-e1',
              title: 'Práctica sobre seseo',
              consigna: 'Indica para cada una de las siguientes 10 palabras si sonarían igual o diferente para un hablante seseante. 1. Casa / Caza. 2. Sien / Cien. 3. Sumo / Zumo. 4. Coser / Cocer. 5. Tasa / Taza. 6. Beso / Bezo. 7. Sera / Cera. 8. Cima / Sima. 9. Casar / Cazar. 10. Saco / Zaco.'
            }
        },
        {
            id: '5-3',
            title: 'El yeísmo: pronunciación de "ll" e "y"',
            content: `
              <p class="mb-4">El yeísmo es la pronunciación idéntica de la 'll' (elle) y la 'y' (ye). Es el fenómeno general en la mayor parte del mundo hispanohablante.</p>
              <p class="mb-4">Para un hablante yeísta, las palabras <em>calló</em> y <em>cayó</em> suenan exactamente igual. La distinción entre ambos sonidos (/ʎ/ para 'll' y /ʝ/ para 'y') se mantiene solo en algunas zonas de España y América del Sur.</p>
              <p class="mt-4">Al igual que el seseo, el <strong>yeísmo</strong> está plenamente aceptado en la norma culta.</p>
            `,
            exercise: {
              id: '5-3-e1',
              title: 'Práctica sobre yeísmo',
              consigna: 'Indica para cada uno de los siguientes 10 pares de palabras si sonarían igual o diferente para un hablante yeísta. 1. Calló / Cayó. 2. Hulla / Huya. 3. Rallar / Rayar. 4. Valla / Vaya. 5. Pollo / Poyo. 6. Sayo / Sallo. 7. Malla / Maya. 8. Pulla / Puya. 9. Callado / Cayado. 10. Halla / Haya.'
            }
        },
        {
            id: '5-4',
            title: 'Errores comunes de pronunciación',
            content: `
              <p class="mb-4">Existen algunos errores de pronunciación (a veces llamados vicios de dicción) que conviene evitar en el habla formal.</p>
              <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">Ejemplos a evitar:</h4>
              <ul class="list-disc list-inside space-y-2">
                <li>Añadir una 's' al final de la segunda persona del pretérito perfecto simple: *<s>dijistes</s>, <s>vinistes</s> -> <em>dijiste, viniste</em>.</li>
                <li>Cambiar el orden de las consonantes en palabras como: *<s>cocreta</s> -> <em>croqueta</em>.</li>
                <li>Pronunciar incorrectamente palabras cultas: *<s>aereopuerto</s> -> <em>aeropuerto</em>.</li>
              </ul>
            `,
            quiz: [
                {
                    id: '5-4-q1',
                    question: "¿Cuál es la forma correcta del verbo 'decir' en el pretérito perfecto simple para la segunda persona del singular (tú)?",
                    options: ["Dijistes", "Dijiste"],
                    correctAnswerIndex: 1,
                    explanation: "Es un error muy común añadir una '-s' final a la segunda persona del singular del pretérito perfecto simple. Lo correcto es siempre sin '-s': dijiste, viniste, comiste."
                },
                {
                    id: '5-4-q2',
                    question: "Selecciona la palabra correcta:",
                    options: ["Aereopuerto", "Aeropuerto", "Areopuerto"],
                    correctAnswerIndex: 1,
                    explanation: "La palabra correcta es 'aeropuerto', formada por el prefijo 'aero-' (aire). La pronunciación incorrecta es muy frecuente."
                },
                {
                    id: '5-4-q3',
                    question: "Elige la oración correcta:",
                    options: ["Venden 'cocretas' en ese bar.", "Me encantan las croquetas de jamón."],
                    correctAnswerIndex: 1,
                    explanation: "El término correcto es 'croqueta'. 'Cocreta' es una metátesis (cambio de lugar de sonidos) muy extendida pero incorrecta."
                }
            ],
            exercise: {
              id: '5-4-e1',
              title: 'Práctica de vicios de dicción',
              consigna: 'Escribe la forma correcta de las siguientes 10 palabras o expresiones, que contienen errores comunes de pronunciación. 1. Dijistes. 2. Cocreta. 3. Aereopuerto. 4. Vinistes. 5. Monstruo (a menudo se dice *mounstro*). 6. Dentífrico (a menudo se dice *dentrifico*). 7. Preveer. 8. Calculista (a menudo se dice *calculisto*). 9. Hubieron problemas. 10. Idos (forma imperativa de irse, a menudo se dice *iros*).'
            }
        },
        {
            id: '5-5',
            title: 'Entonación: afirmar, preguntar, exclamar',
            content: `
              <p class="mb-4">La melodía o curva de entonación de una frase es lo que nos permite diferenciar una afirmación de una pregunta o una exclamación.</p>
              <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">Patrones básicos:</h4>
              <ul class="list-disc list-inside space-y-2">
                <li><strong>Enunciativa:</strong> La entonación desciende al final. <em>Hoy es martes.</em></li>
                <li><strong>Interrogativa:</strong> La entonación asciende al final. <em>¿Vienes a la fiesta?</em></li>
                <li><strong>Exclamativa:</strong> La entonación es más enfática y puede ascender o descender bruscamente. <em>¡Qué día tan bueno!</em></li>
              </ul>
              <p class="mt-4">Una entonación incorrecta puede llevar a malentendidos, haciendo que una afirmación suene a pregunta o viceversa.</p>
            `,
            exercise: {
              id: '5-5-e1',
              title: 'Práctica sobre entonación',
              consigna: 'Escribe los signos de puntuación (¿?, ¡!, .) que correspondan al final de cada frase para darle el sentido que se indica entre paréntesis. Luego, describe en una frase si la curva melódica final sería ascendente, descendente o enfática. 1. Ha llegado el paquete (Afirmación). 2. Cuándo llega el paquete (Pregunta). 3. Ha llegado el paquete (Sorpresa). 4. Te gusta el chocolate (Pregunta). 5. Me encanta el chocolate (Énfasis). 6. El tren sale a las cinco (Afirmación). 7. A qué hora sale el tren (Pregunta). 8. No me lo puedo creer (Exclamación). 9. El cielo está nublado (Afirmación). 10. Va a llover (Pregunta con duda).'
            }
        },
        {
            id: '5-6',
            title: 'Ritmo y pausas en el habla',
            content: `
              <p class="mb-4">El ritmo del español está marcado por las sílabas. A diferencia del inglés, donde el ritmo se basa en los acentos tónicos, en español todas las sílabas tienen una duración similar (isocronía silábica). Esto le da su cadencia característica.</p>
              <p class="mb-4">Las <strong>pausas</strong> son tan importantes como los sonidos. Corresponden a los signos de puntuación en la escritura y nos permiten respirar, organizar las ideas y dar énfasis al discurso. Hablar demasiado rápido y sin pausas dificulta enormemente la comprensión.</p>
            `,
            exercise: {
              id: '5-6-e1',
              title: 'Práctica de ritmo y pausas',
              consigna: 'Lee el siguiente texto y reescríbelo añadiendo comas y puntos donde consideres que un hablante haría una pausa para dar sentido y ritmo al discurso. Tienes que añadir exactamente 10 signos de puntuación. "Hablar bien no es solo pronunciar correctamente las palabras también es darles el ritmo adecuado y hacer las pausas necesarias un discurso sin pausas es agotador para quien escucha y resta claridad al mensaje por eso la puntuación en la escritura es el reflejo del ritmo en el habla un buen orador sabe cuándo callar."'
            }
        }
    ]
  },
  {
    id: 6,
    title: 'Escritura digital',
    description: 'Normas de comunicación en redes, emails y chats.',
    longDescription: 'Adapta las normas del español a entornos digitales. Aprende a comunicarte eficazmente en correos electrónicos, redes sociales y mensajería instantánea, y conoce las recomendaciones sobre emoticonos y neologismos.',
    icon: ChatBubbleLeftRightIcon,
    lessons: [
       {
        id: '6-1',
        title: 'Principios generales de la escritura digital',
        content: `
          <p class="mb-4">La comunicación digital exige un equilibrio entre la corrección y la pragmática del medio. La RAE no condena la comunicación digital, pero sí aboga por mantener la claridad y el respeto a las normas fundamentales.</p>
          <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">Principios clave:</h4>
          <ul class="list-disc list-inside space-y-2">
            <li><strong>La informalidad no es excusa:</strong> Escribir bien demuestra respeto por el interlocutor.</li>
            <li><strong>Acentúa y puntúa:</strong> Las tildes y los signos de puntuación son necesarios para la correcta interpretación del mensaje.</li>
            <li><strong>Usa mayúsculas correctamente:</strong> Escribir todo en mayúsculas equivale a gritar.</li>
            <li><strong>Revisa antes de enviar:</strong> Un breve repaso puede evitar muchos errores y malentendidos.</li>
          </ul>
        `,
        exercise: {
          id: '6-1-e1',
          title: 'Práctica de escritura digital',
          consigna: 'Corrige los siguientes 10 enunciados para que sigan los principios básicos de la escritura digital formal (puntuación, mayúsculas, etc.). 1. HOLA, NECESITO AYUDA. 2. te envio el archivo que me pediste. 3. cuando puedas me respondes. 4. gracias x tu ayuda. 5. nos vemos mañana ok. 6. que vas a hacer esta tarde. 7. ya he llegado¡. 8. ÁFRICA ES UN CONTINENTE. (Revisa si es correcta). 9. por que no viniste ayer. 10. me parece k es una buena idea.'
        }
       },
       {
        id: '6-2',
        title: 'El correo electrónico formal e informal',
        content: `
          <p class="mb-4">El email sigue siendo una herramienta fundamental de comunicación, especialmente en el ámbito profesional. Su estructura debe ser clara.</p>
          <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">Estructura de un email formal:</h4>
          <ul class="list-disc list-inside space-y-2">
            <li><strong>Asunto:</strong> Claro y conciso. Ej: <em>Solicitud de información sobre el proyecto X</em>.</li>
            <li><strong>Saludo:</strong> Formal. <em>Estimado Sr. Pérez:</em>, <em>Apreciada Dra. García:</em>.</li>
            <li><strong>Cuerpo:</strong> Organizado en párrafos cortos. Ir al grano pero con cortesía.</li>
            <li><strong>Despedida:</strong> Cordial. <em>Atentamente,</em>, <em>Un cordial saludo,</em>.</li>
            <li><strong>Firma:</strong> Nombre completo y cargo/contacto.</li>
          </ul>
          <p class="mt-4">En emails informales, el tono es más relajado, pero la claridad y la buena ortografía siguen siendo importantes.</p>
        `,
        exercise: {
            id: '6-2-e1',
            title: 'Redacción de correo electrónico formal',
            consigna: "Redacta un correo electrónico formal. Eres un estudiante que escribe a un profesor, el Dr. Lázaro Carreter, para solicitar una prórroga de una semana para la entrega del trabajo final de la asignatura 'Lingüística Aplicada', explicando que has tenido una fuerte gripe."
        }
       },
       {
        id: '6-3',
        title: 'Comunicación en chats y mensajería',
        content: `
          <p class="mb-4">En la comunicación por chat (WhatsApp, Telegram, etc.), la rapidez es clave, lo que ha llevado a un lenguaje propio. Sin embargo, las normas básicas de la RAE siguen siendo una guía útil.</p>
          <p class="mb-4">La correcta acentuación y el uso de signos de interrogación y exclamación de apertura (<strong>¿ ¡</strong>) son cruciales para evitar ambigüedades y transmitir el tono correcto. Omitir una tilde puede cambiar el significado de una palabra (ej. <code class="bg-slate-200 px-1 rounded">mas</code> vs. <code class="bg-slate-200 px-1 rounded">más</code>).</p>
          <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">Puntos a recordar:</h4>
          <ul class="list-disc list-inside space-y-2">
            <li>Las mayúsculas <strong>sí</strong> se acentúan: <code class="bg-green-100 px-1 rounded">ÁFRICA</code>, <code class="bg-green-100 px-1 rounded">ÉXITO</code>.</li>
            <li>Los pronombres interrogativos y exclamativos siempre llevan tilde: <code class="bg-slate-200 px-1 rounded">qué</code>, <code class="bg-slate-200 px-1 rounded">quién</code>, <code class="bg-slate-200 px-1 rounded">cómo</code>, <code class="bg-slate-200 px-1 rounded">cuándo</code>.</li>
            <li>Los signos de interrogación y exclamación son dobles en español (<code class="bg-slate-200 px-1 rounded">¿?</code>, <code class="bg-slate-200 px-1 rounded">¡!</code>), incluso en chats.</li>
          </ul>
        `,
        exercise: {
            id: '6-3-e1',
            title: 'Ejercicio de corrección digital',
            consigna: "Corrige el siguiente fragmento de un mensaje de texto, prestando especial atención a la acentuación, puntuación y el uso de mayúsculas y minúsculas, según las normas de la RAE para la escritura digital: 'hola, como estas? mañana iremos al cine si o si. no te lo pierdas! que pelicula quieres ver. avisame. te espero. chao'"
        }
       },
       {
        id: '6-4',
        title: 'Redes sociales: brevedad y etiqueta',
        content: `
          <p class="mb-4">Las redes sociales imponen sus propias limitaciones (caracteres, inmediatez), pero las normas fundamentales del español siguen siendo aplicables. Una buena ortografía y gramática mejoran la credibilidad y el impacto del mensaje.</p>
          <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">Recomendaciones clave:</h4>
          <ul class="list-disc list-inside space-y-2">
            <li><strong>Abreviaturas:</strong> Usar abreviaturas comúnmente aceptadas (<code class="bg-slate-200 px-1 rounded">p. ej.</code>, <code class="bg-slate-200 px-1 rounded">etc.</code>). Evitar las que son crípticas y dificultan la lectura (como 'xq', 'tqm').</li>
            <li><strong>Etiquetas (Hashtags):</strong> Las palabras que componen una etiqueta se escriben juntas y sin tildes. Para facilitar la lectura, se pueden usar mayúsculas intermedias (CamelCase): <code class="bg-slate-200 px-1 rounded">#DiaInternacionalDelLibro</code>.</li>
          </ul>
        `,
        exercise: {
          id: '6-4-e1',
          title: 'Práctica de redes sociales',
          consigna: 'Adapta las siguientes 10 ideas a un formato adecuado para una publicación en X (antes Twitter), usando abreviaturas aceptadas y hashtags cuando sea apropiado. 1. Quería informar de que el evento ha sido un éxito rotundo. 2. El Día Internacional del Libro se celebra el 23 de abril. 3. Nuestra empresa lanza un nuevo producto revolucionario. 4. Por ejemplo, podríamos usar este tipo de formato. 5. Estoy totalmente de acuerdo con la opinión del autor. 6. La Real Academia Española ha aceptado una nueva palabra. 7. Buscamos un director o directora para el departamento de marketing. 8. Estados Unidos celebrará elecciones el próximo noviembre. 9. etcétera, etcétera, etcétera. 10. Adjunto el programa completo de la conferencia.'
        }
       },
       {
        id: '6-5',
        title: 'Emoticonos, emojis y stickers',
        content: `
          <p class="mb-4">Los elementos gráficos como emoticonos, emojis o stickers son un recurso expresivo válido en la comunicación digital informal. Aportan matices emocionales que el texto por sí solo no puede transmitir.</p>
          <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">Recomendaciones de uso:</h4>
          <ul class="list-disc list-inside space-y-2">
            <li>Según la RAE, se consideran elementos extralingüísticos. Si afectan a una frase, deben ir después del punto: <em>Hola a todos. 👋</em></li>
            <li>No deben sustituir palabras en contextos donde la claridad es importante: *Estaré allí a las 🕔* es impreciso. Mejor: <em>Estaré allí a las 5 🕔</em>.</li>
            <li>Su uso debe adecuarse al contexto y al interlocutor. En comunicaciones formales, es mejor evitarlos.</li>
          </ul>
        `,
        exercise: {
          id: '6-5-e1',
          title: 'Práctica sobre emojis',
          consigna: 'Reescribe las siguientes 10 frases colocando el emoji de forma correcta según las recomendaciones de la RAE y el contexto (formal/informal). 1. He terminado el informe.🥳 2. Le ruego me envíe la factura. 🙏 3. Vamos al cine.🍿 ¿Te apuntas?. 4. Tráeme un ☕ cuando puedas. 5. Me voy a la 🛌. 6. La reunión será a las 🕙. 7. Felicitaciones por su ascenso. 👍 8. Qué buena noticia. Me alegro mucho 😊. 9. He suspendido el examen 😭. 10. Nos vemos en la playa. 🏖️'
        }
       },
       {
        id: '6-6',
        title: 'Neologismos y extranjerismos en la red',
        content: `
          <p class="mb-4">El mundo digital es una fuente constante de nuevas palabras (neologismos) y préstamos de otros idiomas (extranjerismos), especialmente del inglés.</p>
          <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">¿Cómo tratarlos?</h4>
          <ul class="list-disc list-inside space-y-2">
            <li><strong>Extranjerismos crudos (no adaptados):</strong> Deben escribirse en cursiva. Ej: <em>Vamos a hacer un </em> meeting <em>por streaming</em>.</li>
            <li><strong>Extranjerismos adaptados:</strong> Se escriben en redonda y siguen las reglas del español. Ej: <em>tuit, selfi, güisqui</em>.</li>
            <li><strong>Alternativas en español:</strong> Siempre que sea posible, se recomienda usar la alternativa española. Ej: <em>enlace</em> en vez de <em>link</em>, <em>pirata informático</em> en vez de <em>hacker</em>.</li>
          </ul>
        `,
        quiz: [
            {
                id: '6-6-q1',
                question: "La palabra 'tuit' (mensaje de la red social X)...",
                options: ["Debe escribirse en cursiva: *tweet*.", "Es una adaptación al español y se escribe en redonda: tuit."],
                correctAnswerIndex: 1,
                explanation: "'Tuit' es una adaptación al español del inglés 'tweet' y ya está recogida en el DLE. Como tal, se escribe en redonda y sigue las reglas de acentuación del español (su plural es 'tuits')."
            },
            {
                id: '6-6-q2',
                question: "Si en un texto en español quieres usar la palabra inglesa 'meeting', ¿cuál es la forma correcta?",
                options: ["La escribo normal: meeting.", "La escribo en cursiva: *meeting*.", "Uso la alternativa en español: reunión."],
                correctAnswerIndex: 1,
                explanation: "Cuando un extranjerismo no está adaptado (extranjerismo crudo), debe escribirse en cursiva. Usar la alternativa en español ('reunión') también es una excelente opción recomendada."
            }
        ],
        exercise: {
          id: '6-6-e1',
          title: 'Práctica de neologismos y extranjerismos',
          consigna: 'Para los siguientes 10 términos, indica una alternativa en español o, si es un extranjerismo no adaptado, escribe una frase usándolo correctamente en cursiva. 1. E-mail. 2. Link. 3. Password. 4. Online. 5. Backup. 6. CEO. 7. Hashtag. 8. Smartphone. 9. Influencer. 10. Feedback.'
        }
       }
    ]
  },
  {
    id: 7,
    title: 'Recursos y consulta',
    description: 'Cómo usar diccionarios y resolver dudas frecuentes.',
    longDescription: 'Aprende a sacar el máximo partido de las obras académicas como el Diccionario de la lengua española (DLE) y a resolver las dudas más comunes de los hispanohablantes.',
    icon: BookOpenIcon,
    lessons: [
      {
        id: '7-1',
        title: 'Cómo usar el diccionario (DLE)',
        content: `
          <p class="mb-4">El <strong>Diccionario de la lengua española (DLE)</strong> es la obra de referencia por excelencia. Saber interpretarlo es clave para resolver dudas.</p>
          <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">Claves de un artículo:</h4>
          <ul class="list-disc list-inside space-y-2">
            <li><strong>Lema:</strong> Es la palabra que se define (en negrita).</li>
            <li><strong>Etimología:</strong> Origen de la palabra (entre corchetes).</li>
            <li><strong>Marcas gramaticales:</strong> Categoría (<em>adj.</em>, <em>s. m.</em>), irregularidades (<em>U. t. c. s.</em> - usado también como sustantivo).</li>
            <li><strong>Acepciones:</strong> Cada uno de los significados, numerados.</li>
            <li><strong>Marcas de uso:</strong> Indican el registro o la geografía (<em>coloq.</em> - coloquial, <em>Am.</em> - América).</li>
          </ul>
        `,
        quiz: [
          {
            id: '7-1-q1',
            question: "En una entrada del DLE, la abreviatura 'coloq.' significa:",
            options: ['Colocado', 'Coloquial', 'Colombia'],
            correctAnswerIndex: 1,
            explanation: "'coloq.' es la marca de uso que indica que un término o acepción pertenece al registro coloquial o informal."
          }
        ],
        exercise: {
          id: '7-1-e1',
          title: 'Práctica de consulta del DLE',
          consigna: 'Imagina que buscas estas 10 palabras en el DLE. ¿Qué marca gramatical (sustantivo, adjetivo, verbo...) o de uso (coloquial, culto, etc.) crees que encontrarías junto a su definición principal? 1. Bonito. 2. Correr. 3. Casa. 4. Rápidamente. 5. ¡Ojalá! 6. Tío (con el sentido de \'amigo\'). 7. Desde. 8. Pero. 9. Resiliencia. 10. Chulo (con el sentido de \'bonito\' en España).'
        }
      },
      {
        id: '7-2',
        title: 'El diccionario panhispánico de dudas (DPD)',
        content: `
          <p class="mb-4">Mientras que el DLE define, el <strong>Diccionario panhispánico de dudas (DPD)</strong> explica y recomienda. Es la herramienta ideal para resolver preguntas concretas sobre el uso correcto del español.</p>
          <p class="mb-4">El DPD aborda cuestiones de todo tipo: concordancia, conjugación de verbos, uso de preposiciones, dudas ortográficas, etc. Sus artículos suelen ser más extensos y explicativos que los del DLE.</p>
          <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">¿Cuándo usar el DPD?</h4>
          <p>Cuando tu duda no es '¿qué significa X?' sino '¿cómo se dice/usa X correctamente?'. Por ejemplo, para saber si se dice 'preveer' o 'prever', el DPD es la mejor fuente.</p>
        `,
        exercise: {
          id: '7-2-e1',
          title: 'Práctica con el DPD',
          consigna: 'Para las siguientes 10 dudas lingüísticas, indica qué par de palabras o expresión clave buscarías en el DPD para resolverlas. 1. ¿Se dice "vaso de agua" o "vaso con agua"? 2. ¿Es "imprimido" o "impreso"? 3. ¿"Detrás mío" o "detrás de mí"? 4. ¿"Preveer" o "prever"? 5. ¿"La calor" o "el calor"? 6. ¿"Adecuar" se conjuga como "averiguar" o como "licuar"? 7. ¿Se debe usar "de que" en "pienso de que está mal"? 8. ¿El plural de "currículum" es "currículums" o "currícula"? 9. ¿Se dice "la presidenta" o "la presidente"? 10. ¿Es "en base a" o "con base en"?'
        }
      },
      {
        id: '7-3',
        title: 'Otros diccionarios académicos',
        content: `
          <p class="mb-4">La RAE y la ASALE ofrecen otros recursos muy valiosos:</p>
          <ul class="list-disc list-inside space-y-2">
            <li><strong>Diccionario de americanismos:</strong> Recoge las palabras propias del español de América.</li>
            <li><strong>Diccionario del estudiante:</strong> Una versión del DLE más sencilla y orientada a aprendices.</li>
            <li><strong>Glosario de términos gramaticales:</strong> Define con precisión más de 2000 conceptos de la gramática.</li>
          </ul>
        `,
        exercise: {
          id: '7-3-e1',
          title: 'Práctica de diccionarios especializados',
          consigna: 'Indica en qué diccionario de la RAE (DLE, Diccionario de americanismos, Glosario de términos gramaticales) buscarías principalmente para resolver las siguientes 10 dudas. 1. El significado de la palabra "chévere". 2. La definición de "sintagma nominal". 3. El significado de "casa". 4. Saber qué significa "platicar" en México. 5. Entender qué es una "oración subordinada". 6. Averiguar si "parquear" es un uso aceptado. 7. La definición de "fonema". 8. El origen de la palabra "chocolate". 9. Saber qué es "el voseo". 10. El significado de la palabra "guagua" en Canarias.'
        }
      },
      {
        id: '7-4',
        title: 'Glosario de dudas frecuentes I (A-G)',
        content: `
          <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">Algunas dudas comunes:</h4>
          <ul class="list-disc list-inside space-y-2">
            <li><strong>A ver / haber:</strong> <em>A ver</em> es para mirar; <em>haber</em> es un verbo. <em>Voy a ver qué puedo haber hecho mal.</em></li>
            <li><strong>Ahí / hay / ay:</strong> <em>Ahí</em> es lugar; <em>hay</em> es del verbo haber; <em>ay</em> es una interjección. <em>Ahí hay un hombre que grita ¡ay!</em></li>
            <li><strong>Con base en / en base a:</strong> La forma correcta y preferida es <em>con base en</em>.</li>
            <li><strong>Doble negación:</strong> En español es correcta. <em>No he visto a nadie</em> (es correcto, no *No he visto a alguien*).</li>
          </ul>
        `,
        exercise: {
          id: '7-4-e1',
          title: 'Práctica de dudas frecuentes (A-G)',
          consigna: 'Elige la opción correcta para cada una de las siguientes 10 oraciones. 1. Voy (a ver/haber) qué pasa. 2. (Ahí/Hay/Ay), me he hecho daño. 3. La decisión se tomó (en base a/con base en) los datos. 4. No he visto (a nadie/a alguien). 5. El problema es (de que/que) no hay tiempo. 6. Me (alegro de que/alegro que) hayas venido. 7. (Contra/Cuanto) más lo miro, más me gusta. 8. (Debajo de/Debajo) la mesa. 9. No (caben/caven) más personas. 10. Es una persona muy (gentil/gentil).'
        }
      },
      {
        id: '7-5',
        title: 'Glosario de dudas frecuentes II (H-P)',
        content: `
          <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">Más dudas resueltas:</h4>
          <ul class="list-disc list-inside space-y-2">
            <li><strong>Halla / haya / aya:</strong> <em>Halla</em> es de hallar; <em>haya</em> es de haber o un tipo de árbol; <em>aya</em> es una niñera.</li>
            <li><strong>Imprimir:</strong> El participio es <em>impreso</em>. La forma <em>imprimido</em> es válida pero menos frecuente. Se prefiere <em>he impreso</em>.</li>
            <li><strong>Medio / media:</strong> Como adverbio, es invariable: <em>Ella está <strong>medio</strong> dormida</em> (no *media dormida*).</li>
            <li><strong>Por qué / porque / porqué / por que:</strong> <em>¿<strong>Por qué</strong> vienes?</em> (pregunta). <em>Vengo <strong>porque</strong> quiero</em> (respuesta). <em>No sé el <strong>porqué</strong></em> (sustantivo).</li>
          </ul>
        `,
        quiz: [
            {
                id: '7-5-q1',
                question: "Completa la frase: 'No entiendo el ______ de tu enfado.'",
                options: ["porqué", "porque", "por qué"],
                correctAnswerIndex: 0,
                explanation: "'Porqué' es un sustantivo masculino que significa 'causa' o 'motivo'. Se puede sustituir por 'el motivo', por lo que se escribe junto y con tilde."
            },
            {
                id: '7-5-q2',
                question: "Completa la frase: 'La atleta está ______ cansada.'",
                options: ["media", "medio"],
                correctAnswerIndex: 1,
                explanation: "Cuando 'medio' funciona como adverbio (modificando a un adjetivo, como 'cansada'), es invariable y no concuerda en género. Lo correcto es 'medio cansada'."
            }
        ],
        exercise: {
          id: '7-5-e1',
          title: 'Práctica de dudas frecuentes (H-P)',
          consigna: 'Elige la opción correcta para cada una de las siguientes 10 oraciones. 1. Cuando (halla/haya) una solución, avísame. 2. He (imprimido/impreso) el documento. 3. La encontré (media/medio) triste. 4. No sé el (porqué/por qué/porque) de su reacción. 5. ¿(Porqué/Por qué/Porque) no has venido? 6. No fui (porqué/por qué/porque) estaba enfermo. 7. Es un asunto que (incumbe a/incumbe) todos. 8. El veneno (hizo/hico) efecto. 9. La policía (intervino/intervino) en la pelea. 10. Se (prevee/prevé) lluvia para mañana.'
        }
      },
      {
        id: '7-6',
        title: 'Glosario de dudas frecuentes III (Q-Z)',
        content: `
          <h4 class="text-xl font-bold mt-6 mb-2 text-indigo-700">Últimas dudas habituales:</h4>
          <ul class="list-disc list-inside space-y-2">
            <li><strong>Sino / si no:</strong> <em>Sino</em> es una conjunción adversativa (<em>No quiero esto, <strong>sino</strong> aquello</em>). <em>Si no</em> es condicional (<em><strong>Si no</strong> vienes, me voy</em>).</li>
            <li><strong>Sobretodo / sobre todo:</strong> <em>Sobretodo</em> es una prenda de vestir. <em>Sobre todo</em> significa 'especialmente'. <em>Me gusta todo, <strong>sobre todo</strong> el postre.</em></li>
            <li><strong>Valla / vaya / baya:</strong> <em>Valla</em> es una cerca. <em>Vaya</em> es del verbo ir. <em>Baya</em> es un fruto.</li>
          </ul>
        `,
        quiz: [
            {
                id: '7-6-q1',
                question: "Completa la frase: 'No es azul, ______ verde.'",
                options: ["sino", "si no"],
                correctAnswerIndex: 0,
                explanation: "'Sino' es una conjunción adversativa que se usa para contraponer dos ideas. Se escribe en una sola palabra."
            },
            {
                id: '7-6-q2',
                question: "Completa la frase: 'Ponte el ______, que hace frío.'",
                options: ["sobre todo", "sobretodo"],
                correctAnswerIndex: 1,
                explanation: "'Sobretodo' es un sustantivo que se refiere a una prenda de vestir, un abrigo largo. 'Sobre todo' (en dos palabras) significa 'especialmente'."
            }
        ],
        exercise: {
          id: '7-6-e1',
          title: 'Práctica de dudas frecuentes (Q-Z)',
          consigna: 'Elige la opción correcta para cada una de las siguientes 10 oraciones. 1. No quiero té, (sino/si no) café. 2. (Sino/Si no) estudias, suspenderás. 3. Ponte el (sobretodo/sobre todo), que hace frío. 4. Me gustan todas las frutas, (sobretodo/sobre todo) las fresas. 5. Saltó la (valla/vaya/baya). 6. Espero que le (valla/vaya/baya) bien. 7. El color (rojo/rojo) es mi favorito. 8. Se me ha (roto/rompido) el vaso. 9. El agua (sabe/save) a cloro. 10. (Zarpar/Sarpar) es iniciar la navegación.'
        }
      }
    ]
  }
];
