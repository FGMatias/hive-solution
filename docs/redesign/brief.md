# Brief de rediseño — Landing Hive Soluciones

Modo: **Persuade** (el visitante decide y actúa).
Fuentes: `PRODUCT.md`, skills `impeccable` (shape, new-work) y `landing-page-design`.

## 1. Trabajo y audiencia
- **Quién llega:** dueños, gerentes o independientes de cualquier rubro que necesitan un software y no saben por dónde empezar. Llegan por recomendación, redes o WhatsApp, probablemente desde el celular.
- **Estado mental:** curiosos y desconfiados. No saben cómo se trabaja con una empresa de software ni si una startup nueva cumplirá.
- **Qué saben al llegar:** casi nada de Hive.

## 2. Objetivo y éxito
- **Acción única:** agendar una llamada de 30 min por WhatsApp.
- **Conversión:** clic en el botón de WhatsApp (mensaje prellenado).
- **Éxito del rediseño:** el visitante entiende en menos de un minuto qué hace Hive, **ve cómo trabajan** (proceso) y **ve trabajos funcionando** (demos), y siente que escribir es de bajo riesgo.

## 3. Mensaje central
Hive construye el software que se ajusta a tu negocio, por partes, y te lo muestra funcionando antes de seguir.

## 4. Prueba disponible
- 3 demos funcionando de rubros distintos (barbería, banco de sangre, piscinas), hechas a pedido de prospectos. Datos ficticios. Sin 4ta por ahora.
- Proceso de 4 pasos.
- Postura honesta de startup nueva.

**Brecha a cerrar:** el proceso hoy es solo texto. Debe volverse visible **sin fotos del equipo**, usando artefactos que sí existen o se pueden producir con verdad:
1. "De la conversación al sistema": para una demo (p. ej. Pool System), mostrar el problema inicial en una frase (turnos y cupos en cuaderno), y la pantalla que lo resolvió. Es el proceso contado con producto real.
2. Plantilla de propuesta de alcance (documento real de Hive con datos de ejemplo), para el paso 2.
3. Línea de tiempo de una demo con fechas reales y capturas de cada avance, para el paso 3. Requiere guardar capturas de ahora en adelante.
4. Mensaje de WhatsApp real de coordinación de la llamada (sin datos de terceros), para el paso 1.
5. Video corto de pantalla (30 a 60 s) recorriendo una demo, narrado por quien la construyó.
Regla: si un paso no tiene artefacto real, se queda en texto. No usar fotos de stock ni inventar fotos del equipo.

## 5. Objeciones principales
1. "Son nuevos, ¿qué respaldo tengo?" → mostrar demos reales navegables y avances por etapas.
2. "¿Cuánto cuesta y cuánto demora?" → explicar cómo se define (propuesta escrita tras la llamada), sin inventar cifras.
3. "¿Esto es para mi tipo de negocio?" → demos de rubros distintos como prueba de amplitud.
4. "No sé de tecnología." → lenguaje llano, la llamada no exige preparación.

## 6. Estructura propuesta (layout B: historia larga, para vencer escepticismo)
1. Hero: letrero de neón + caja de luz con las abejas + cartel ABIERTO (CTA WhatsApp); la prueba va en la segunda pantalla (vitrina).
2. Problema reconocible.
3. **Cómo trabajamos** (con evidencia visual).
4. **Trabajos / demos** (3 a 4, navegables).
5. Qué construimos (servicios, con ejemplos de rubros variados).
6. Nosotros, de frente.
7. FAQ (objeciones).
8. CTA final idéntico al hero.

La sección de tagline exigida por `landing-page-design` (B11) se resuelve en `sections.md`.

## 7. Dirección de diseño (ELEGIDA, ronda 2): El letrero de neón
La ronda 1 eligió "La lámina de naturalista" y fue descartada por el usuario por sentirla simple. En la ronda 2 (register bolder) el usuario eligió **El letrero de neón**. Compromisos fijos: abejas (foto de Unsplash) como identidad, un solo CTA a WhatsApp, demos como protagonistas, creativo y elegante.

## Direction contract
- THESIS: Hive se anuncia como un letrero de neón de barrio: un solo trazo de luz naranja que se enciende, un cartel ABIERTO que es el botón de WhatsApp y las demos como pantallas de vitrina. Rechaza el hero partido en dos columnas y la plantilla de software house.
- OWN-WORLD: pared oscura (`#0E0B09`), vidrio del tubo casi blanco cálido (`#FFE3C7`), gas naranja `#FF7A1A` con halo rojo de electrodo `#E5392B`, crema `#F6E8D4` para texto, marcos de metal oscuro (`#2C241D`). El naranja de Hive es el naranja real del gas neón. El neón se usa SOLO en la palabra Hive y en el cartel-botón; la lectura larga va en crema sobre oscuro, sin brillo. Una cartela de lectura clara para contenido extenso.
- STORY: el visitante ve un letrero encendido y entiende que es un negocio con oficio de barrio; la foto de las abejas, retroiluminada en caja de luz, da el sentido del nombre; ve tres pantallas de vitrina con sistemas que ya funcionan; actúa en el cartel ABIERTO.
- FIRST VIEWPORT (DECISIÓN DEL USUARIO, reemplaza la versión anterior): la foto del panal con abejas es el fondo del header y del hero, en blanco y negro con CSS (`grayscale`) y con opacidad baja bajo un degradado oscuro; encima solo título, párrafo y un botón naranja de agendar llamada por WhatsApp. Nada más compite en el hero. El neón queda reducido a un brillo suave en el botón primario (hero y cierre idénticos).
- FORM: letrero de neón doblado a mano; seed: 188eecd1c4937403 (ronda 2, challenger `magnetism-electricity-plasma-hand-bent-neon-circuit`).
- Reglas de accesibilidad propias: la ignición del neón es una sola transición suave (sin parpadeo de más de 3 Hz); con `prefers-reduced-motion` el neón nace encendido; el texto con brillo nunca es el texto largo; contraste mínimo 4.5:1 en lectura.
- AMBICIÓN: creativo y elegante, nunca vacío; prohibido el hero partido de dos columnas.
- Path de construcción: code-led.
- FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

Decisión del usuario: no se registra el crédito de la foto de Unsplash (la licencia no lo exige).

## Firma visual vigente: "la celda que se llena" (reemplaza al neón como firma)
El neón quedó reducido al brillo del botón. La firma que recorre la página es el hexágono: el naranja es la miel y solo aparece donde algo está activo o completo. Se aplica en cuatro lugares y no más: (1) hero, malla hexagonal sobre la foto con una celda encendida y un reflejo naranja que sigue al cursor; (2) "Cómo trabajamos", cuatro celdas que se llenan en orden al hacer scroll; (3) demos como celdas del mismo panal (pendiente); (4) sección de tagline con palabras que se activan (pendiente, B11). Sin abejas dibujadas, tarros de miel ni iconos. Con `prefers-reduced-motion` todo se ve ya lleno.

## 8. Anti-objetivos
- Sin gradientes morados ni "AI slop": tarjetas idénticas en fila, iconos genéricos, stock photos.
- Sin logos, testimonios o métricas inventadas.
- Sin dos CTA compitiendo en el primer viewport.
- Sin "Más información", "Enviar" ni lenguaje de agencia ("soluciones innovadoras").
- No esconder que son nuevos.

## 9. Restricciones
Astro 5, español, móvil primero, accesibilidad (ver `PRODUCT.md`). Imágenes optimizadas, carga rápida en datos móviles.

## 10. Medición
Clics a WhatsApp por sección de origen (hero, proceso, demos, final). `[ABIERTO]` herramienta.

## 11. Decisiones abiertas
- Dirección visual (se resuelve con `impeccable` new-work usando `references.md`).
- Material del proceso (ver sección 4).
- Si se menciona el uso de IA en el desarrollo (ver `PRODUCT.md`).
