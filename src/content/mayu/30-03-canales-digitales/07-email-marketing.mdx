# Email Marketing

Configuración desde cero · Manual operativo

Abril 2026

El email marketing es el canal de fidelización y reactivación de mayor ROI a mediano plazo. No puede arrancar sin lista de contactos — por eso este documento trabaja en paralelo: construir la lista mientras se configura la plataforma.

---

# 01 · Elección de plataforma

Para la etapa actual de Mayu — lista pequeña, necesidad de automatizaciones de ciclo de vida y gestión B2C + B2B en paralelo — ActiveCampaign es la recomendación. No por precio, sino por funcionalidad.

| **Plataforma** | **Precio entrada** | **Fortaleza principal** | **Por qué sí / no para Mayu** |
| --- | --- | --- | --- |
| **ActiveCampaign** | $15-29/mes (hasta 500 contactos) | CRM + automatizaciones complejas + segmentación avanzada | Recomendada. Permite gestionar ciclo de vida del paciente, B2C y B2B en la misma herramienta. |
| **Mailchimp** | $0-13/mes (hasta 500 contactos) | Fácil de usar, buena plantilla de emails | Aceptable si el presupuesto es el factor. Automatizaciones más limitadas — no ideal para ciclo de vida. |
| **Klaviyo** | $20+/mes | E-commerce y segmentación por comportamiento de compra | No recomendada en esta etapa. Orientada a e-commerce con tienda online activa. |
| **Brevo (ex-Sendinblue)** | $0-25/mes | Buen equilibrio precio-funcionalidad, incluye SMS | Alternativa válida a ActiveCampaign si se quiere más simplicidad. |

Prerequisito no negociable: Mayu necesita un email de dominio propio antes de crear la cuenta. hola@mayuecuador.com o farmacia@mayuecuador.com — no centromayu@gmail.com. Los emails desde Gmail tienen tasa de entrega significativamente menor y dañan la percepción de profesionalismo.

---

# 02 · Configuración técnica de la cuenta

Cuatro configuraciones técnicas que deben hacerse antes de enviar el primer email. Si se omiten, los correos van a spam o la cuenta queda suspendida.

## 2.1 Autenticación del dominio de envío

Tres registros DNS que le dicen a los servidores de correo que Mayu está autorizado para enviar desde su dominio. Se configuran en el panel de DNS del proveedor de hosting (GoDaddy, Namecheap, Cloudflare o similar).

| **Registro** | **Qué hace** | **Cómo configurar** |
| --- | --- | --- |
| **SPF** | Autoriza a ActiveCampaign a enviar emails en nombre de mayuecuador.com | Agregar registro TXT en DNS: v=spf1 include:emsd1.com ~all (ActiveCampaign provee el valor exacto en su panel de configuración) |
| **DKIM** | Firma digitalmente cada email para probar que no fue modificado en tránsito | Agregar dos registros CNAME en DNS con los valores que provee ActiveCampaign en Configuración → Dominio de correo electrónico |
| **DMARC** | Le dice a los servidores qué hacer si un email falla SPF o DKIM | Agregar registro TXT: v=DMARC1; p=quarantine; rua=mailto:hola@mayuecuador.com |

Sin SPF y DKIM configurados, hasta el 40-60% de los emails pueden ir directo a spam. Es la configuración más importante del proceso. El proveedor de hosting puede hacerlo en menos de 30 minutos con las instrucciones de ActiveCampaign.

---

## 2.2 Dominio de tracking personalizado

ActiveCampaign rastrea aperturas y clics desde un subdominio de Mayu (ej: track.mayuecuador.com) en lugar del dominio genérico de ActiveCampaign. Mejora la entregabilidad y hace los links más confiables para los filtros de spam.

- En ActiveCampaign: Configuración → Avanzado → Dominio de seguimiento personalizado
- Crear un subdominio CNAME en el DNS: track.mayuecuador.com apuntando al servidor de tracking de ActiveCampaign
- Verificar que el subdominio esté activo antes de enviar la primera campaña

## 2.3 Dirección física en el footer

Requerimiento legal en la mayoría de jurisdicciones y obligatorio en ActiveCampaign para activar la cuenta. Configurar en la plantilla de email base:

- Nombre comercial: MAYU Farmacia Magistral Fitoterapéutica
- Dirección física: incluir la dirección del local de Quito (ubicación principal) y Cuenca
- Link de baja: ActiveCampaign lo inserta automáticamente — nunca eliminarlo

## 2.4 Listas y segmentos iniciales

Crear la estructura de listas y segmentos desde el primer día, aunque estén vacíos. Cambiar esto después cuando la lista ya tiene contactos es mucho más costoso en tiempo.

| **Lista / Segmento** | **Tipo** | **Criterio de inclusión** |
| --- | --- | --- |
| **Pacientes Mayu** | Lista principal | Todo contacto B2C — paciente actual o potencial |
| **Médicos aliados** | Lista secundaria | Todo contacto B2B — médico, naturópata, terapeuta del programa de prescriptores |
| **Ciudad: Quito** | Segmento | Campo ciudad = Quito |
| **Ciudad: Cuenca** | Segmento | Campo ciudad = Cuenca |
| **Clientes activos** | Segmento | Ha realizado al menos una compra en los últimos 90 días |
| **Clientes inactivos** | Segmento | Sin compra en más de 90 días |
| **Suscriptores sin compra** | Segmento | En la lista pero sin registro de compra — leads en nurturing |
| **VIP (alta frecuencia)** | Segmento | Compra más de una vez por mes — candidatos a beneficios exclusivos |

# 03 · Cómo construir la lista de contactos

Sin lista no hay email marketing. Las cuatro fuentes inmediatas de contactos para Mayu no requieren publicidad — solo un proceso de captura activo.

**Fuente 1 · Base de clientes existente  ·  Impacto: alto · Tiempo: inmediato**

---

La fuente más valiosa. Cualquier cliente que haya comprado y dejado su email es un contacto válido. Revisar: registros de WhatsApp, hojas de cálculo, sistema de facturación, libretas de consulta.

- Exportar todos los contactos con: nombre, email, ciudad, fecha de última compra
- Limpiar duplicados y emails inválidos antes de importar
- Importar a ActiveCampaign con los campos ciudad y tipo de cliente (B2C / B2B)
- Asignar a los segmentos correspondientes desde la importación

Solo importar personas que dieron consentimiento explícito o implícito (compraron y dejaron su email). En Ecuador aplica la Ley Orgánica de Protección de Datos Personales. Un email importado sin consentimiento es riesgo legal y daña la reputación del dominio de envío.

---

**Fuente 2 · Flujo de WhatsApp post-compra  ·  Impacto: medio-alto · Tiempo: inmediato**

---

Integrar la captura de email en el flujo de seguimiento post-compra que ya existe en el protocolo de WhatsApp.

- En el mensaje de seguimiento a los 7 días añadir: "Si quieres recibir contenido sobre salud natural y novedades de Mayu, déjame tu email — enviamos una vez al mes, sin spam."
- Registrar el email en ActiveCampaign manualmente o con una integración simple (Google Sheets → ActiveCampaign vía Zapier)
- Confirmar al paciente que quedó registrado con un mensaje de WhatsApp de 1 línea

**Fuente 3 · Formulario en el sitio web  ·  Impacto: medio · Tiempo: 1-2 semanas**

---

Un formulario de suscripción en la home y en el blog conectado directamente a ActiveCampaign. ActiveCampaign provee el código HTML del formulario para pegar en el sitio.

- Título del formulario: "Salud natural, una vez al mes" — no "Suscríbete a nuestro newsletter"
- Campos mínimos: nombre + email + ciudad (para segmentación inmediata)
- Texto de confirmación: "Perfecto. Te enviaremos contenido sobre salud natural una vez al mes. Sin spam."
- Activar doble opt-in: el contacto recibe un email de confirmación antes de quedar en la lista. Reduce rebotes y problemas legales.
- Ubicación en el sitio: al final de cada artículo de blog + sección dedicada en la home

**Fuente 4 · Local físico  ·  Impacto: medio · Tiempo: inmediato**

---

Captura en el punto de mayor confianza: el local físico de Mayu, justo después de la consulta.

- Tablet o iPad en caja con el formulario web de ActiveCampaign abierto — el paciente lo llena mientras espera su producto
- Alternativa: papel simple con nombre, email y ciudad — cargar manualmente al final del día
- Guión para el operador: "Si quieres recibir tips de salud y novedades de Mayu una vez al mes, puedes dejar tu email aquí. Es opcional."
- Nunca presionar — la captura forzada genera baja de lista inmediata y daña la reputación del dominio

# 04 · Flujos de automatización

Tres automatizaciones que deben estar activas antes de enviar la primera campaña manual. Funcionan solas una vez configuradas y generan el mayor impacto en fidelización.

**Automatización 1 · Bienvenida al nuevo suscriptor**

---

Se activa cuando un contacto se agrega a la lista principal, ya sea por formulario web, importación o captura manual. Secuencia de 3 emails en 7 días.

| **Email** | **Cuándo** | **Objetivo** |
| --- | --- | --- |
| **Email 1** | Inmediato (día 0) | Confirmación de bienvenida y expectativa de qué van a recibir |
| **Email 2** | Día 3 | Presentar el diferencial de Mayu: asesoría gratuita + personalización + credenciales técnicas |
| **Email 3** | Día 7 | Prueba social: testimonios reales + CTA a primera consulta gratuita |

**Email 1 de bienvenida · Día 0 · Inmediato**

---

**Asunto:**

**Bienvenido/a a Mayu 🌿**

**Preheader:** *Ya eres parte de nuestra comunidad de salud natural*

---

**Cuerpo:**

Hola [Nombre],

Gracias por unirte a Mayu.

Una vez al mes te compartiremos contenido sobre salud natural: cómo funcionan las plantas medicinales, hábitos que hacen diferencia y novedades de nuestras fórmulas magistrales.

Sin spam. Sin excesos. Solo lo que creemos que te puede ser útil.

Si tienes alguna pregunta sobre tu salud o quieres explorar si una fórmula magistral tiene sentido para ti, escríbenos por WhatsApp. La primera consulta es gratuita y sin compromiso.

*— El equipo de Mayu*

---

**Botón CTA:** Escribirnos por WhatsApp →

---

**Nota:** *Link del botón: número de WhatsApp de Mayu con mensaje preescrito: 'Hola, me registré en la lista de email y quiero más información'*

---

**Email 2 de bienvenida · Día 3 · El diferencial**

---

**Asunto:**

**Por qué Mayu no es una tienda naturista más**

**Preheader:** *La diferencia está en lo que hacemos antes de recomendarte algo*

---

**Cuerpo:**

Hola [Nombre],

En Mayu somos una Farmacia Magistral Fitoterapéutica. Eso significa que no vendemos lo que tenemos en el estante — elaboramos fórmulas naturales específicamente para cada paciente.

Antes de cualquier formulación, un especialista hace una consulta gratuita contigo para entender tu caso: qué síntomas tienes, qué tratamientos has probado, cómo es tu estilo de vida. Solo después se formula.

Cada fórmula que elaboramos tiene:

- Extractos estandarizados con concentración garantizada
- Certificados de análisis por lote
- Registro ARCSA
- Conservantes naturales

Es la diferencia entre tomar manzanilla en té y un extracto estandarizado al 4% de apigenina. La dosis activa importa.

Si tienes curiosidad sobre qué puede tener sentido para tu caso, la consulta es gratuita.

*— El equipo de Mayu*

---

**Botón CTA:** Agendar consulta gratuita →

---

**Email 3 de bienvenida · Día 7 · Prueba social**

---

**Asunto:**

**Lo que dicen quienes ya lo probaron**

**Preheader:** *118 reseñas con 5 estrellas. Estas son algunas.*

---

**Cuerpo:**

Hola [Nombre],

Antes de recomendarte nada, creemos que lo más honesto es mostrarte lo que dicen quienes ya pasaron por Mayu.

Tenemos más de 118 reseñas con 5 estrellas en Google. Algunos extractos:

“La atención es increíble. Por primera vez siento que alguien entiende lo que me pasa antes de recetarme algo.”

*— Paciente de Quito*

“Llevo 3 meses con mi fórmula y es la primera vez en años que duermo bien toda la noche.”

*— Paciente de Cuenca*

“Lo que más me sorprendió fue que no me vendieron nada en la primera consulta. Primero me escucharon.”

*— Paciente de Quito*

Si quieres ver todas las reseñas, están en nuestro perfil de Google.

Y si quieres ser el siguiente, la primera consulta es gratuita.

*— El equipo de Mayu*

---

**Botón CTA:** Ver reseñas en Google →

---

**Nota:** *Incluir un segundo botón secundario: 'Agendar consulta gratuita' — texto en color ACCENT, sin fondo de botón*

---

**Automatización 2 · Seguimiento post-compra**

---

Se activa cuando un contacto es marcado como 'cliente activo' en ActiveCampaign — después de su primera compra. Objetivo: asegurar la recompra y activar la tarjeta de fidelización.

| **Email** | **Cuándo** | **Objetivo** |
| --- | --- | --- |
| **Email 1** | Día 7 post-compra | Check-in de experiencia + recordatorio de uso correcto |
| **Email 2** | Día 30 post-compra | Recordatorio de reposición antes del agotamiento |
| **Email 3** | Día 45 post-compra (si no recompró) | Reactivación suave con contenido educativo relacionado |

**Email post-compra 1 · Día 7 · Check-in**

---

**Asunto:**

**¿Cómo va la primera semana con tu fórmula?**

**Preheader:** *Una pregunta rápida sobre tu experiencia*

---

**Cuerpo:**

Hola [Nombre],

Ya pasó una semana desde tu consulta en Mayu. Queríamos saber cómo te está yendo.

Si tienes alguna duda sobre el uso — horarios, dosis, cómo combinar con otros productos o medicamentos — escríbenos. Estamos para ayudarte.

Y si el tratamiento te está funcionando, una reseña en Google nos ayuda mucho a llegar a más personas que están buscando lo mismo que tú buscabas.

*— El equipo de Mayu*

---

**Botón CTA:** Escribirnos por WhatsApp →

---

**Nota:** *Incluir link a reseña de Google como texto secundario, no como botón: 'Dejar una reseña en Google →'*

---

**Email post-compra 2 · Día 30 · Reposición**

---

**Asunto:**

**Tu fórmula se está por agotar**

**Preheader:** *Es un buen momento para planificar la reposición*

---

**Cuerpo:**

Hola [Nombre],

Las fórmulas magistrales de Mayu tienen una duración aproximada de 30-45 días según la dosis indicada. Si empezaste tu tratamiento hace un mes, probablemente ya estás pensando en la reposición.

Para continuar sin interrupción, puedes:

- Escribirnos por WhatsApp y pedimos tu fórmula para que esté lista cuando vengas
- Visitarnos en el local — el equipo ya conoce tu caso

Los tratamientos de mayor efectividad requieren constancia. Los primeros 30 días son el inicio del proceso — el cuerpo necesita más tiempo para responder de forma sostenida.

*— El equipo de Mayu*

---

**Botón CTA:** Pedir mi reposición por WhatsApp →

---

**Email post-compra 3 · Día 45 · Reactivación suave**

---

**Asunto:**

**Contenido para ti: [tema relacionado a su compra]**

**Preheader:** *Algo que creemos que te puede interesar*

---

**Cuerpo:**

Hola [Nombre],

Aunque haya pasado un tiempo desde tu última visita, queremos seguir siendo útiles.

Preparamos un artículo sobre [tema relacionado al producto que compró — ej: 'por qué el magnesio glicinato funciona mejor que el magnesio óxido' si compró fórmula con magnesio].

[Párrafo de 3-4 líneas del artículo educativo relacionado al tema de su fórmula]

Si quieres seguir con tu tratamiento o explorar algo nuevo, la consulta de seguimiento también es gratuita para pacientes de Mayu.

*— El equipo de Mayu*

---

**Botón CTA:** Agendar consulta de seguimiento →

---

**Nota:** *La personalización por tema de compra requiere que en ActiveCampaign se etiquete a cada contacto con el área de su primera compra (sueño, estrés, energía, dolor o digestión) al momento del registro.*

---

**Automatización 3 · Reactivación de inactivos**

---

Se activa cuando un contacto lleva más de 60 días sin abrir un email y sin compra registrada. Mantiene la lista limpia y la tasa de apertura alta.

| **Email** | **Cuándo** | **Objetivo** |
| --- | --- | --- |
| **Email 1** | Día 0 (al entrar en segmento inactivo) | Preguntar si sigue interesado — dar opción de quedarse o salir |
| **Email 2** | 7 días después (si no abrió el Email 1) | Último intento antes de mover a lista inactiva |
| **Acción post-flujo** | Si no abrió ninguno de los dos | Mover a lista inactiva — dejar de enviarles campañas para proteger reputación del dominio |

**Reactivación 1 · ¿Seguimos en contacto?**

---

**Asunto:**

**¿Sigues por aquí?**

**Preheader:** *Solo queremos saber si este contenido sigue siendo útil para ti*

---

**Cuerpo:**

Hola [Nombre],

Notamos que hace un tiempo que no nos lees. Está bien — los emails se acumulan y no siempre hay tiempo.

Solo queremos saber si quieres seguir recibiendo contenido de Mayu sobre salud natural.

Si la respuesta es sí, haz clic abajo — seguimos en contacto.

Si prefieres salir de la lista, también puedes hacerlo desde el link al final de este email.

Sin presión. Lo que funcione para ti.

*— El equipo de Mayu*

---

**Botón CTA:** Sí, quiero seguir recibiendo contenido →

---

**Nota:** *El clic en este botón debe activar una etiqueta en ActiveCampaign que saca al contacto de la automatización de reactivación y lo vuelve a marcar como activo.*

---

**Reactivación 2 · Último intento**

---

**Asunto:**

**Nuestro último email si no quieres saber de nosotros**

**Preheader:** *Y algo que quizás te perdiste*

---

**Cuerpo:**

Hola [Nombre],

Este es el último email que te enviamos si no hay respuesta.

Antes de irnos, queríamos dejarte algo útil:

[Insertar el mejor contenido educativo del último mes — el artículo con más clics o el post de Instagram con más guardados]

Si en algún momento quieres volver, la lista sigue abierta. Y si prefieres no recibir más correos, el link de baja está al final.

Cuídate.

*— El equipo de Mayu*

---

**Botón CTA:** Volver a la lista →

---

**Nota:** *Tono deliberadamente neutral — no urgente. Los emails de reactivación con urgencia artificial ('¡última oportunidad!') generan baja de lista en contactos de salud.*

---

# 05 · Newsletters manuales

Con los flujos de automatización activos, el contenido manual es una newsletter mensual B2C y una trimestral B2B. Ambas tienen estructura fija para reducir el tiempo de producción.

**Newsletter mensual B2C · Pacientes**

---

Se envía el primer martes de cada mes. Tiempo de lectura objetivo: 3 minutos. Cuatro secciones fijas.

| **Sección** | **Extensión** | **Contenido** |
| --- | --- | --- |
| **01 · Tema del mes** | 200-250 palabras | Artículo educativo breve sobre uno de los 5 temas validados: sueño, estrés, energía, dolor o digestión. Sin jerga técnica. Cierra con CTA a consulta gratuita. |
| **02 · Del catálogo** | 80-100 palabras | Una fórmula o ingrediente destacado del mes: qué es, para qué sirve, cuándo tiene sentido. No es un anuncio — es información clínica accesible. |
| **03 · Testimonio del mes** | 60-80 palabras | La mejor reseña de Google del mes con nombre, ciudad y problema resuelto. Sin editar el texto del paciente. |
| **04 · Recuerda** | 30-40 palabras | Recordatorio suave de la consulta gratuita con link a WhatsApp. Una línea. Sin presión. |

### Estructura del asunto y preheader

El asunto es lo más importante del email — el 47% de las personas decide si abre un email solo por el asunto. Para Mayu, la fórmula que funciona es: problema concreto o dato de salud + promesa implícita de solución.

| **Asuntos que funcionan** | **Asuntos que no funcionan** |
| --- | --- |
| Por qué te despiertas a las 3am (aunque hayas dormido bien) | Newsletter de Mayu — Edición Abril |
| El magnesio que venden en farmacias probablemente no te está ayudando | Novedades y contenido del mes |
| 5 señales de que tu energía baja no es cansancio normal | Mayu te trae información sobre salud natural |
| Lo que le dijimos a 118 pacientes antes de darles una fórmula | Contenido educativo · Abril 2026 |

**Newsletter trimestral B2B · Médicos aliados**

---

Se envía en enero, abril, julio y octubre. Tono técnico pero accesible. Cuatro secciones fijas.

| **Sección** | **Extensión** | **Contenido** |
| --- | --- | --- |
| **01 · Evidencia clínica** | 200-250 palabras | Un resumen de evidencia reciente sobre fitoterapia relevante para la práctica clínica. Con cita de fuente (PubMed, Cochrane). Sin afirmaciones sin respaldo. |
| **02 · Novedades del catálogo** | 100-120 palabras | Nuevas fórmulas disponibles, actualizaciones de dosis o formas farmacéuticas. Con indicaciones clínicas para cada novedad. |
| **03 · Caso de uso (anonimizado)** | 80-100 palabras | Un caso clínico real de un paciente derivado: perfil, fórmula indicada, resultado a 30 días. Sin datos identificatorios. |
| **04 · Agenda y contacto** | 40-50 palabras | Próximo webinar si hay, recordatorio del canal de WhatsApp técnico y link para derivar pacientes. |

# 06 · KPIs y benchmarks del sector salud

Los benchmarks de email en salud y bienestar son diferentes a los de e-commerce general. Las tasas de apertura son más altas porque la audiencia está genuinamente interesada en el tema.

| **KPI** | **Benchmark industria salud** | **Meta Mayu mes 3** | **Señal de alerta** |
| --- | --- | --- | --- |
| **Tasa de apertura** | ~35-40% | >35% | &lt;20% — revisar líneas de asunto y hora de envío |
| **Tasa de clic (CTR)** | ~3-5% | >3% | &lt;1.5% — revisar relevancia del contenido y CTAs |
| **Tasa de baja (unsubscribe)** | &lt;0.5% | &lt;0.3% | >1% — el contenido no es relevante o la frecuencia es excesiva |
| **Tasa de rebote duro** | &lt;1% | &lt;0.5% | >2% — limpiar la lista de emails inválidos |
| **Tasa de spam / queja** | &lt;0.08% | &lt;0.05% | >0.1% — riesgo de bloqueo del dominio de envío |
| **Conversiones a consulta (clic CTA)** | Sin dato base | Establecer semana 1 | Comparar mensualmente para ver tendencia |

# 07 · Checklist de activación

Ordenado por dependencia. No avanzar al siguiente bloque sin completar el anterior.

**Bloque 1 · Email de dominio y plataforma — semana 1**

---

- Crear email de dominio propio: hola@mayuecuador.com o farmacia@mayuecuador.com
- Crear cuenta en ActiveCampaign con el email de dominio propio
- Configurar registros SPF, DKIM y DMARC en el DNS del dominio
- Verificar autenticación con la herramienta de ActiveCampaign (Configuración → Dominio de correo)
- Configurar subdominio de tracking personalizado (track.mayuecuador.com)
- Configurar dirección física en el footer de emails

**Bloque 2 · Listas, segmentos y campos personalizados — semana 1**

---

- Crear lista principal: Pacientes Mayu
- Crear lista secundaria: Médicos aliados
- Crear los 6 segmentos: Quito / Cuenca / Clientes activos / Clientes inactivos / Suscriptores sin compra / VIP
- Crear campos personalizados: ciudad, tipo de cliente, fecha de última compra, área de salud (sueño / estrés / energía / dolor / digestión)

**Bloque 3 · Construcción inicial de la lista — semana 2**

---

- Auditar todas las fuentes de contactos existentes: WhatsApp, hojas de cálculo, sistema de facturación
- Limpiar duplicados y emails inválidos antes de importar
- Importar base de clientes existente con campos ciudad y tipo de cliente
- Asignar contactos importados a sus segmentos correspondientes
- Configurar formulario de suscripción en el sitio web con doble opt-in
- Instalar formulario en la home y al final del blog
- Instruir al equipo del local sobre captura de email en caja

**Bloque 4 · Automatizaciones — semana 2-3**

---

- Crear y activar automatización 1: Bienvenida (3 emails en 7 días)
- Crear y activar automatización 2: Post-compra (3 emails en 45 días)
- Crear y activar automatización 3: Reactivación de inactivos (2 emails en 7 días)
- Probar cada automatización con un email de prueba antes de activar

**Bloque 5 · Primera newsletter y seguimiento — semana 3-4**

---

- Preparar contenido de la primera newsletter mensual B2C
- Enviar a un segmento pequeño primero (Quito o Cuenca) para validar entregabilidad
- Enviar al resto de la lista 48h después si los resultados del primer envío son normales
- Registrar los KPIs de la primera campaña como base de comparación
- Agendar revisión mensual de métricas (primer lunes del mes, 20 minutos)

El email marketing funciona con consistencia, no con volumen. Una newsletter mensual bien escrita enviada durante 12 meses construye más relación que 4 newsletters en enero y luego silencio. La clave es no prometer más de lo que el equipo puede sostener.

---