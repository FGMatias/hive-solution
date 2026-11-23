# Referencias — Landing Hive Soluciones

> **Estado (nov 2026):** las referencias de abajo fueron la base de la exploración. La dirección vigente es "la celda que se llena" (ver `DESIGN.md` y `brief.md`). Descartadas en el camino: la lámina de naturalista (por simple) y el neón como firma (queda solo como brillo del botón). Las capturas de las demos que se publican están en `src/assets/` y `src/assets/demos/` y no llevan la insignia de Netlify; las de `docs/redesign/demo-shots/` son las versiones antiguas, solo de archivo. La foto original a color de las abejas está en `docs/redesign/refs/hero-bees-original.jpg` (el sitio usa una copia en grises).

> Sitios **candidatos**. Verificar que cargan y revisarlos en el navegador antes de usarlos. Cada referencia dice **qué tomar** y **qué no**.
> Uso previsto: revisar la estructura y el comportamiento, y reimplementar en Astro con nuestro propio estilo. No copiar HTML, CSS, textos ni imágenes tal cual: tienen derechos de autor y además chocarían con nuestra identidad.

## A. Para mostrar el proceso (prioridad 1)
| URL | Tomar | No tomar |
|---|---|---|
| https://basecamp.com | Voz directa y honesta, explicación de "cómo trabajamos" sin jerga, tono para negocios pequeños. | Longitud excesiva de página. |
| https://www.thoughtbot.com | Cómo una consultora de software explica su proceso y sus fases. | Tono corporativo y foco en clientes grandes. |
| https://linear.app | Secciones que alternan texto con producto real; ritmo claro. | Estética oscura de herramienta de desarrolladores. |

## B. Para mostrar trabajos y demos (prioridad 1)
| URL | Tomar | No tomar |
|---|---|---|
| https://www.framer.com | Presentación de productos con capturas grandes y recorte cuidado. | Efectos pesados que dañan rendimiento móvil. |
| https://resend.com | Cómo la interfaz real es protagonista del hero. | Fondo oscuro y vocabulario técnico. |
| https://cal.com | Hero con prueba visible y CTA de agendar (mismo objetivo de conversión). | Su público de producto SaaS. |

## C. Para hero y conversión (prioridad 2)
| URL | Tomar | No tomar |
|---|---|---|
| https://stripe.com | Jerarquía tipográfica y calidad de detalle. | Complejidad, mucho contenido simultáneo. |
| https://www.notion.com | Cercanía hacia usuarios no técnicos, ilustración con personalidad. | Genericidad de muchos bloques idénticos. |
| https://vercel.com | Disciplina de espacio y ritmo en secciones. | Look técnico/monocromo. |

## D. Anti-referencias (lo que NO queremos parecer)
- Landings de agencia genéricas: "Soluciones innovadoras para tu empresa", stock de gente en reunión.
- Plantillas SaaS con degradado morado y tarjetas idénticas con iconos.
- Sitios con logos de clientes y testimonios que nosotros no tenemos.

## E. Inspiración visual (imágenes, Dribbble)
- Dribbble sirve como inspiración de estilo, no como referencia técnica. Son imágenes: no hay HTML que descargar. Anotar qué se rescata de cada una.
  - https://dribbble.com/shots/27764709-SolarSync-Smart-Solar-Energy-Management — `[ABIERTO: qué se rescata]`
  - https://dribbble.com/shots/21852709-Atlantis-Technology-2023 — `[ABIERTO]`
  - https://dribbble.com/shots/27322169-JSOOR-Software-house — `[ABIERTO]` (la más cercana a nuestro rubro: software house)
  - https://dribbble.com/shots/27471259-Landing-Page-for-Wearable-Technology-Skip — `[ABIERTO]`
  - https://dribbble.com/shots/26442416-Mortgage-Website-Design — `[ABIERTO]`
- Imágenes guardadas en `docs/redesign/refs/` (16 archivos, prefijo = shot). Lectura abajo.

### Lectura de los 5 shots (qué tomar y qué no, para Hive)
**Patrón común:** tres de cinco usan acento naranja (SolarSync, JSOOR, y el `#f2840f` que Hive ya usa). La paleta actual de Hive es coherente con lo que te atrae; no hace falta cambiar de color, sí de composición.

| Shot | Tomar | No tomar |
|---|---|---|
| **SolarSync** (`solarsync-*`) | Fondo crema cálido + naranja; titulares grandes y limpios; **producto dentro de un dispositivo** (`solarsync-04`) para mostrar el panel real; fila de 4 cifras con líneas conectadas; wordmark gigante en el footer (`-07`); tarjetas translúcidas sobre imagen. | Fotografía 3D de casas (no tenemos ese tipo de imagen). Testimonio "Alex Morgan", "50K+ usuarios" y logos de marcas: serían invención en nuestro caso. |
| **Atlantis** (`atlantis-*`) | **Ilustración lineal de personas** y copy narrativo ("It is a time for builders"). Es la alternativa honesta a no tener fotos del equipo: personajes ilustrados que cuentan el proceso sin simular fotos. | Tono grandilocuente corporativo ("Projects of Consequence"); confeti decorativo. |
| **JSOOR** (`jsoor-*`) | **"Selected Work" con filtro y mockups** (`-04`): es exactamente el formato para nuestras 3 demos. Tarjeta de CTA final translúcida (`-05`). Tarjetas de servicio con 2 bullets (`-02`). | Franja de logos "Trusted by", cifras "+90 clientes" (no las tenemos). Degradados oscuros con brillo naranja: es un recurso muy repetido y baja la diferenciación. Blog de IA genérico. |
| **Skip** (`skip-01-hero`) | Escala tipográfica enorme y un único CTA de color vivo. | Fotografía a pantalla completa y colaboración con marca: no aplican. |
| **Mortgage** (`mortgage-01-hero`) | **Tarjetas de interfaz flotando alrededor del hero** (incluye una tarjeta "Demo call" con hora): análogo directo a nuestro CTA de agendar llamada. Podríamos flotar fragmentos de nuestras demos (una cita, un turno, una deuda). | Foto de persona con IA y la insignia de financiamiento "Raised $14.2M". |

**Tres ideas candidatas que salen de aquí (para la fase de dirección):**
1. *Hero con fragmentos de tus demos flotando* (Mortgage + SolarSync-04), con el CTA de WhatsApp como la "tarjeta de llamada".
2. *Trabajos como galería filtrable de mockups* (JSOOR-04) con las 11 capturas.
3. *Proceso narrado con ilustración* (Atlantis) en vez de fotos del equipo.

## F0. Capturas de demos (guardadas en `docs/redesign/demo-shots/`)
| Demo | Archivo | Qué muestra | Uso sugerido |
|---|---|---|---|
| Barbería | `barberia-pos.png` | Caja (POS) con catálogo de servicios con fotos y ticket | Hero de la demo o tarjeta principal (la más vistosa) |
| Barbería | `barberia-cliente.png` | Ficha de cliente: gasto, visitas, puntos de fidelidad, historial | "Conoces a cada cliente" |
| Barbería | `barberia-servicios.png` | Tabla de servicios con precio, duración, comisión, activo | Secundaria |
| Barbería | `barberia-staff-jornada.png` | Jornada del barbero: agenda del día, ingresos, comisiones semanales | "Sabes cuánto gana cada quien" |
| Barbería | `barberia-staff-portafolio.png` | Perfil y portafolio de un barbero | Secundaria |
| Banco de Sangre | `banco-registro-paciente.png` | Registro en 3 pasos | "Del papel a 3 pasos" |
| Banco de Sangre | `banco-lista-deuda-a4.png` | Documento A4 imprimible con doble copia | La más reveladora: muestra un entregable real |
| Banco de Sangre | `banco-auditoria.png` | Exportación CSV y bitácora de auditoría | Confianza y control |
| Pool System | `pool-validacion-qr.png` | Validación de ingreso por QR con casos de prueba | Hero de la demo |
| Pool System | `pool-turnos.png` | Gestión de turnos con cupo y aforo | Secundaria |
| Pool System | `pool-matriculas.png` | Matrículas y alumnos con vigencia y clases | Secundaria |

Observaciones para el diseño:
- **Tres estilos visuales distintos:** barbería oscura y con fotos, banco de sangre claro con barra lateral azul, piscinas claro y minimal. En la landing hay que presentarlas dentro de un mismo marco (mismo recorte, mismo mockup, misma sombra) para que se lea como amplitud y no como inconsistencia.
- **Insignia "Powered by Netlify"** visible abajo a la derecha en todas. Recortar o volver a capturar sin ella.
- **Barbería usa fotos de personas reales** (probablemente de stock). Para la landing, recortar sobre la interfaz o confirmar que tienen licencia.
- Tamaño 1920×1080: sirve para escritorio. Para móvil hay que recortar a zonas concretas; no reducir la captura completa porque el texto queda ilegible.

## F. Assets propios disponibles
- `src/assets/` con 4 imágenes (hero, demo barbería, demo banco de sangre, una más) y las 11 capturas de F0.
- Demos publicadas: jhonnatan-barber.netlify.app, demo-banco-sangre-peru.netlify.app, pool-system.netlify.app (3 capturas disponibles: validación QR, turnos, matrículas).
- Identidad actual: colmena hexagonal, naranja `#f2840f`, Geist.

## G. Flujo para estudiar una referencia con IA
1. Pedir a la IA que abra la URL y describa: estructura de secciones, jerarquía tipográfica, espaciado, comportamiento en móvil, animaciones.
2. Pedirle que lo traduzca a nuestras reglas (`DESIGN.md` cuando exista) en lugar de copiar el código.
3. Registrar aquí qué se adoptó de cada sitio.
