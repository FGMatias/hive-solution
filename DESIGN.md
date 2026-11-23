---
name: Hive Soluciones
description: Software a medida que ordena tu operación, armado celda por celda como una colmena.
colors:
  wall: "#0e0b09"
  wall-raised: "#15100c"
  metal: "#2c241d"
  metal-light: "#40342a"
  cream: "#f6e8d4"
  cream-soft: "#d9c5ab"
  ink: "#1e1a16"
  ink-soft: "#4a3f34"
  honey: "#ff7a1a"
  honey-hot: "#e5392b"
  honey-rim: "#ffbe78"
typography:
  display:
    fontFamily: "Geist Variable, Geist, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.2rem + 4.8vw, 4.75rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Geist Variable, Geist, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 1.1rem + 2.6vw, 3.25rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Geist Variable, Geist, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 2rem
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Geist Variable, Geist, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.75rem
  body:
    fontFamily: "Geist Variable, Geist, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5rem
  subtitle:
    fontFamily: "Geist Variable, Geist, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.75rem
  numeral:
    fontFamily: "Geist Variable, Geist, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 600
    lineHeight: 1
  wordmark:
    fontFamily: "Geist Variable, Geist, system-ui, sans-serif"
    fontSize: "clamp(7rem, 30vw, 22rem)"
    fontWeight: 600
    lineHeight: 0.74
    letterSpacing: "-0.04em"
  numeral-lg:
    fontFamily: "Geist Variable, Geist, system-ui, sans-serif"
    fontSize: "2rem"
    fontWeight: 600
    lineHeight: 1
  label:
    fontFamily: "Geist Variable, Geist, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.25rem
rounded:
  hair: "1px"
  sm: "4px"
  md: "10px"
  lg: "14px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "64px"
  section: "128px"
components:
  button-primary:
    backgroundColor: "{colors.honey}"
    textColor: "{colors.wall}"
    rounded: "{rounded.md}"
    padding: "12px 32px"
    height: "52px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.cream}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
    height: "44px"
  panel-paper:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
---

# Design System: Hive Soluciones

## Overview

**Creative North Star: "La celda que se llena"**

Hive es una casa de software chica y honesta que se presenta como una colmena: nada se construye de una vez, se arma celda por celda y cada celda ya sirve. La página es oscura y sobria, con una foto real de abejas en blanco y negro como atmósfera, y un solo color que significa algo: el naranja es la miel. Aparece únicamente donde algo está activo o completo.

El sistema rechaza la plantilla de software house (hero con captura, fila de logos, tarjetas iguales) y también la decoración temática: no hay abejas dibujadas, tarros de miel ni iconos. Lo temático vive en la geometría: el hexágono como unidad, y el llenado como gesto.

**Key Characteristics:**
- Oscuridad cálida (marrón casi negro, no gris frío), tipografía crema.
- Una sola familia tipográfica; la jerarquía sale del tamaño y el peso.
- Un acento: el naranja miel, reservado a lo activo.
- Hexágonos de línea fina; llenado de abajo hacia arriba como única animación firma.
- Una pausa clara (crema) en "Cómo trabajamos" para dar ritmo.

## Colors

Paleta de cuatro grises cálidos más un acento. El naranja nunca se usa como decoración.

### Primary
- **Miel** (#ff7a1a): botón primario, celdas activas o llenas, sección actual del menú, palabras destacadas del tagline. Es el naranja del gas neón real, heredado de la primera dirección.

### Secondary
- **Rojo de electrodo** (#e5392b): solo en el halo del botón primario, nunca como color de texto o relleno.

### Neutral
- **Pared** (#0e0b09): fondo base de la página.
- **Pared elevada** (#15100c): fondo de secciones alternas.
- **Metal** (#2c241d) y **Metal claro** (#40342a): marcos de capturas, bordes de botones secundarios.
- **Crema** (#f6e8d4): texto principal sobre oscuro y fondo de la sección de proceso.
- **Crema suave** (#d9c5ab): texto secundario sobre oscuro.
- **Tinta** (#1e1a16) y **Tinta suave** (#4a3f34): texto sobre crema.

### Named Rules
**La regla de la miel.** El naranja ocupa menos del 10% de cualquier pantalla y siempre significa "activo" o "completo". Si algo es naranja sin estar activo, está mal.

**La regla del halo.** El brillo (box-shadow naranja) pertenece solo al botón primario. Ningún otro elemento brilla.

## Typography

**Display, headline y body:** Geist, variable y alojada en el propio sitio (paquete `@fontsource-variable/geist`; fallback: system-ui). Una sola familia por sitio, sin cursivas ni pesos por encima de semibold.

**Character:** Geist, tensa y legible; la personalidad la ponen el tamaño grande y el tracking apretado de los títulos.

### Hierarchy
- **Display** (600, clamp 2.5 a 4.75rem, 1.02): solo el título del hero.
- **Headline** (600, clamp 1.875 a 3.25rem, 1.04): títulos de sección y la frase del tagline.
- **Title** (600, 1.5rem, 2rem): nombres de demos y pasos.
- **Lead** (400, 1.125rem, 1.75rem): bajadas de sección.
- **Body** (400, 1rem, 1.5rem): texto corrido, máximo 65 a 75 caracteres.
- **Label** (500, 0.875rem, 1.25rem): navegación, notas, pies.
- **Subtitle** (600, 1.25rem, 1.75rem): nombre de marca en el encabezado.
- **Wordmark** (600, 7 a 22rem): la palabra "Hive" recortada al fondo del pie, solo decorativa.
- **Numeral** (600, 1.75rem) y **Numeral grande** (600, 2rem): el número dentro de cada hexágono (pasos y 404).

### Named Rules
**La regla de la sola voz.** Una familia, ningún guion dentro de oraciones, `text-wrap: balance` en títulos y `pretty` en texto corrido.

**Excepción registrada.** El detector de impeccable marca Geist como fuente muy usada; se conserva porque `landing-page-design` la exige.

## Layout

Contenedor de 1280px con relleno de 16px en móvil, 32px en tablet y 64px en escritorio. Las secciones respiran con 80px de espacio vertical en móvil y 128px en escritorio. El hero ocupa hasta 880px de alto y se extiende bajo el header transparente. Las secciones se componen en dos columnas asimétricas (título a la izquierda, contenido a la derecha) o a una columna; el ritmo viene de alternar fondos (pared, pared elevada, crema).

Móvil primero: todo se ha comprobado a 390px. Por debajo de 860px la navegación se reemplaza por un menú de panel completo; por debajo de 370px se oculta el nombre junto al logo.

## Elevation & Depth

Plano por defecto. La profundidad se logra con capas tonales (pared, pared elevada, metal) y bordes finos, no con sombras. Las únicas sombras son el halo del botón primario y una sombra suave de apoyo bajo las capturas de las demos.

### Shadow Vocabulary
- **Halo de miel** (`box-shadow: 0 0 0 1px rgba(255,190,120,.4), 0 0 28px rgba(255,122,26,.45), 0 10px 30px -12px rgba(229,57,43,.6)`): botón primario.
- **Apoyo de captura** (`box-shadow: 0 0 0 1px #000, 0 40px 80px -40px #000`): marcos de capturas de demos.

## Shapes

Dos lenguajes: rectángulos de esquina contenida (4, 10 y 14px) para controles y contenedores, y el hexágono de punta hacia arriba (`clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)`) para todo lo que marca progreso o estado. Los hexágonos son de línea fina (2px) y se llenan, no se rellenan de entrada.

## Components

### Buttons
- **Shape:** esquina de 10px.
- **Primary:** fondo miel, texto pared, 52px de alto, 12px × 32px de relleno, con halo. Es el único botón relleno; se repite idéntico en hero, menú móvil y cierre.
- **Hover / Active:** sube 1px y el halo se intensifica; al presionar, escala 0.98. Foco: anillo crema de 2px con 4px de separación.
- **Ghost:** borde crema al 40%, 44px de alto; en hover el borde pasa a crema y aparece un velo del 8%.

### Hexagon cell (firma)
- **Style:** contorno de 2px (tinta sobre crema, crema sobre oscuro) y relleno de miel que sube desde abajo (`translateY(101%)` a 0, 900 a 1100ms, curva base).
- **Uses:** el índice de demos (la celda de la demo visible se llena), los cuatro pasos de "Cómo trabajamos" (se llenan en orden, una sola vez), y la celda encendida del hero.
- **State:** vacía, llena; en foco el contorno se vuelve crema y se engrosa.

### Project carousel
- Una diapositiva por proyecto, definidas en `src/data/demos.json` (agregar un proyecto = agregar una entrada). Cada diapositiva: la captura **completa y sin recortar** a todo el ancho del contenedor, con marco de metal; las demás pantallas del proyecto van apiladas detrás como cartas (la de arriba se va hacia un lado y pasa al fondo al cambiar), con el pie y las flechas de pantalla debajo; al final, tres columnas: nombre y descripción, Antes y Ahora, y el enlace a la demo.
- Controles: desplazamiento horizontal con ajuste (`scroll-snap`), flechas, y puntos con forma de hexágono (el del proyecto visible se llena de miel). Los proyectos que no están a la vista quedan `inert`. Flechas izquierda y derecha mueven el carrusel desde la barra de controles.
- Antes y Ahora en dos líneas por proyecto: el problema, y lo que hace el sistema.

### Tagline reveal
- Las palabras parten al 30% de opacidad y se encienden una a una **al ritmo del scroll** (GSAP ScrollTrigger con `scrub`): el avance de la frase es el avance de la lectura. Las cuatro últimas se encienden en naranja. Con movimiento reducido, el texto aparece completo.

### Navigation
- **Desktop:** enlaces de crema al 82% sobre header transparente que se vuelve sólido al hacer scroll; la sección actual lleva `aria-current` y una línea naranja de 2px.
- **Mobile:** botón de 44px cuyo icono se transforma en X; panel completo con desenfoque y enlaces que entran en cascada (60ms entre ellos, 24px de recorrido).

### Footer
- Cuatro columnas en escritorio (marca con una línea de propuesta, Secciones, Legal, WhatsApp) y dos más una a todo el ancho en móvil. Todos los enlaces miden al menos 44px de alto. Los enlaces a secciones usan rutas absolutas (`/#demos`) para funcionar también en las páginas legales y en la 404.
- Barra inferior con el copyright y "Volver arriba". Al fondo, la palabra "Hive" gigante recortada, en metal (`#2c241d`), decorativa y oculta a lectores de pantalla.

### Cards / Containers
No hay tarjetas. El contenido se organiza con filetes de 1px (`rgba(246,232,212,.14)`) y espacio. Las capturas de demos llevan marco de metal de 8px.

### Inputs / Fields
No hay formularios; el contacto es un enlace a WhatsApp.

## Motion

GSAP 3 con ScrollTrigger, cargado solo en la página de inicio (`src/scripts/motion.ts`, unos 46 KB comprimidos con el resto del script de la página). Curva base `expo.out` para todo lo que llega. Solo `transform` y `opacity` (y color en el tagline). Habilidades aplicadas: `gsap-core`, `gsap-scrolltrigger`, `gsap-performance`, `emil-design-eng` e `impeccable animate`.

**Tesis de movimiento.** Una firma común (los títulos de sección suben palabra por palabra detrás de una máscara, igual que el hero), y cada sección entra a su manera según lo que es. Scroll vinculado solo donde tiene significado (tagline, proceso, pie). Los títulos y los elementos se animan **una sola vez**, al entrar en vista.

| Dónde | Qué hace | Por qué |
|---|---|---|
| Hero | El titular sube palabra por palabra detrás de una máscara (0.95 s, 75 ms entre palabras); luego aparecen la bajada y el botón, y la celda se llena de miel (1.3 s). | Es el único momento autorado. Dice "se arma por partes". |
| Hero, cursor | El reflejo de la malla sigue al cursor con inercia (`quickTo`, 0.6 s). | Respuesta física a la mano; solo con puntero fino. |
| Tagline | Cada palabra se enciende según el scroll (`scrub`). | El avance de la frase es el avance de la lectura. |
| Cómo trabajamos | Cada celda se llena una sola vez al entrar en vista y luego se dibuja el hilo hacia la siguiente. En escritorio, de izquierda a derecha (240 ms entre celdas). | Es "por partes" hecho visible. |
| Carrusel | Al cambiar de proyecto o de pantalla, el contenido nuevo se asienta (0.55 a 0.8 s). | Continuidad: avisa que algo cambió. |
| Pie | La palabra "Hive" sube al llegar al final de la página (`scrub`). | Cierre de la página. |
| Todos los títulos | Suben palabra por palabra (0.8 s, 50 ms entre palabras) y su línea de apoyo se asienta. | Firma común, de la misma familia que el hero, más corta y callada. |
| Seguro te suena | Cada fila dibuja su filete de izquierda a derecha y luego sube su texto. | Se leen una por una, como una lista que se va marcando. |
| Sistemas que ya funcionan | La captura sale de la oscuridad con un recorte de arriba hacia abajo (1.2 s) y la descripción se asienta a su lado. | La captura es la protagonista. |
| Qué construimos | Cada fila entra desde la izquierda: primero el nombre, luego el detalle. | Un catálogo que se va desplegando. |
| Somos nuevos | Los tres hechos suben uno tras otro (140 ms entre ellos). | Son tres afirmaciones separadas. |
| Preguntas | Cascada corta y ligera (55 ms entre preguntas). | Se escanean, así que no debe hacer esperar. |
| Cierre | El título, luego el botón; la foto de fondo se asienta despacio (2.4 s). | Cierre de la página. |

**Movimiento reducido.** Con `prefers-reduced-motion: reduce` no se carga ninguna animación: todo aparece en su estado final (comprobado). El contenido es visible por defecto; la clase `html.motion` solo oculta los estados iniciales mientras GSAP toma el control y una red de seguridad la quita a los 4 s si el script falla.

**Regla:** el mismo efecto repetido en todas las secciones es lo que la skill llama "revelado genérico". Por eso solo los títulos comparten movimiento; el contenido de cada sección entra distinto.

## Do's and Don'ts

### Do:
- **Do** usar el naranja `#ff7a1a` solo para lo activo o completo.
- **Do** llenar las celdas de abajo hacia arriba con `cubic-bezier(0.22, 1, 0.36, 1)`.
- **Do** animar solo `transform` y `opacity` (y color en el tagline), con `expo.out`, y respetar `prefers-reduced-motion` mostrando el estado final.
- **Do** repetir el botón de WhatsApp idéntico en hero, menú y cierre.
- **Do** mostrar la foto de abejas en blanco y negro con contraste alto.

### Don't:
- **Don't** dibujar abejas, tarros de miel ni iconos temáticos: la foto real y el hexágono bastan.
- **Don't** usar hexágonos como papel tapiz; viven en hero, índice de demos y proceso.
- **Don't** poner tarjetas iguales en fila, logos de clientes, testimonios o cifras que no existan.
- **Don't** dar brillo a nada más que al botón primario.
- **Don't** usar el mismo revelado en el contenido de todas las secciones: la firma común son los títulos; lo demás entra según lo que es.
- **Don't** usar más de una familia tipográfica ni cursivas.
