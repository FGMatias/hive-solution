# Secciones — Landing Hive Soluciones (estado actual)

Refleja la página tal como está construida. Firma visual: "la celda que se llena" (ver `DESIGN.md`). Copy de `landing-page-design`: beneficio primero, sin guiones dentro de oraciones, `text-wrap` balanceado, un solo CTA a WhatsApp repetido idéntico.

| # | Sección | Componente | Objetivo | Estado |
|---|---|---|---|---|
| 1 | Hero | `Hero.astro` | Entender qué hacemos y dar el siguiente paso. Foto de panal en blanco y negro bajo header y copy, malla hexagonal, una celda naranja que se llena, reflejo naranja que sigue al cursor. | Hecho |
| 2 | Seguro te suena | `Problems.astro` | Reconocimiento: 4 problemas comunes. El primero lidera en tamaño. Cada uno lleva un enlace a la demo que muestra cómo se ve resuelto (lleva el carrusel al proyecto correcto); el tercero apunta a las demos en general. | Hecho |
| 3 | Sistemas que ya funcionan | `Demos.astro` + `src/data/demos.json` | Carrusel de proyectos (una diapositiva por demo). Captura completa y grande, descripción, Antes y Ahora, enlace a la demo en vivo, y las demás pantallas apiladas como cartas, que cambian con flechas o al tocar la carta de arriba. Al final, un enlace de texto a WhatsApp ("¿Quieres uno así para tu negocio?"). Para sumar un proyecto, se agrega una entrada en `demos.json`. | Hecho |
| 4 | Tagline | `Tagline.astro` | Momento memorable (B11): "Una colmena no se construye de una vez. Se arma celda por celda, y cada celda ya sirve." Palabras que se encienden una a una al hacer scroll. | Hecho |
| 5 | Cómo trabajamos | `Process.astro` | Los 4 pasos como 4 celdas que se llenan en orden, sobre fondo crema. Cada paso cierra con "Qué recibes" (el entregable), alineado entre columnas. | Hecho, **falta evidencia real** (propuesta de ejemplo, avances con fecha, mensaje de WhatsApp) |
| 6 | Qué construimos | `Services.astro` | 4 servicios en filas: nombre, descripción con ejemplo, y enlace "Míralo en acción" a la demo que lo muestra (lleva el carrusel al proyecto). Integraciones no tiene demo y lo dice. Invita a quien tenga otro rubro a contar cómo trabaja. | Hecho |
| 7 | Somos nuevos | `About.astro` | Convertir la desventaja de ser nuevos en confianza, con tres hechos en columnas: tres demos que se pueden abrir, hablas con quienes lo programan, si no podemos te lo decimos. Sin cifras ni numerales grandes. | Hecho |
| 8 | Preguntas frecuentes | `Faq.astro` | 8 preguntas con respuestas concretas y solo lo confirmado (llamada gratis y sin compromiso; precio, plazo y titularidad del código se acuerdan por escrito en la propuesta). Incluye datos estructurados `FAQPage`. | Hecho. Pendiente: "¿Qué pasa con mis datos?" (sin respuesta del equipo) |
| 9 | Cierre | `CtaSection.astro` | Mismo botón del hero, con la línea "La llamada es gratis y sin compromiso. Coordinamos el horario por WhatsApp." (idéntica en el hero). | Hecho |

Páginas y piezas de publicación: `/privacidad` y `/terminos` (borrador, requieren revisión legal), 404 con el hexágono vacío, menú móvil, sección actual en el menú, `og:image`, canonical, `sitemap.xml` y `robots.txt`.

Pendientes de contenido (dependen del equipo): evidencia del proceso, decisiones abiertas de `PRODUCT.md` (mencionar IA en las demos, permiso para decir que gustaron, rango de precio o plazo) y analítica de clics a WhatsApp.

