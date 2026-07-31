# Facebook Ads

Restructuración a modelo de retargeting

Abril 2026

Situación actual: 94.5% de las visualizaciones en Facebook son pagas. El orgánico es casi inexistente. El presupuesto se gasta en adquisición fría con contenido duplicado de Instagram. Este documento restructura Facebook como canal de cierre, no de descubrimiento.

---

# 01 · El cambio de lógica

Facebook Ads en Mayu tiene un problema de rol, no de presupuesto. Está haciendo el trabajo equivocado: hablar con audiencias frías que no conocen la marca, en un canal donde Mayu no tiene ventaja competitiva frente a Instagram.

| **Modelo actual (problema)** | **Modelo nuevo (solución)** |
| --- | --- |
| Pauta a audiencias frías sin conocimiento de marca | Solo audiencias que ya tuvieron contacto con Mayu |
| Contenido orgánico de Instagram duplicado como anuncio | Creatividades diseñadas específicamente para retargeting |
| Objetivo: alcance y visualizaciones | Objetivo único: conversión a WhatsApp o consulta |
| Mismo mensaje para todos | Mensaje diferenciado por nivel de intención |
| Presupuesto disperso en muchas campañas | Presupuesto concentrado en 3 audiencias prioritarias |
| Sin esfuerzo editorial orgánico | Sin esfuerzo editorial orgánico (se mantiene igual — correcto) |

Instagram es el canal de descubrimiento de Mayu. Facebook es el canal de cierre. No compiten — se complementan. Una persona que ve un carrusel educativo en Instagram y no convierte puede recibir un anuncio de retargeting en Facebook 3 días después.

---

# 02 · Las tres audiencias prioritarias

El retargeting funciona con audiencias pequeñas y calientes. Las tres audiencias de Mayu están ordenadas por temperatura de intención: de más a menos caliente.

**Audiencia 1 · Visitantes web sin conversión  ·  Temperatura: alta**

---

Personas que llegaron a mayuecuador.com pero no hicieron clic en WhatsApp ni en la página de Contacto. Conocen Mayu, les interesó lo suficiente para entrar al sitio, pero no dieron el siguiente paso.

| **Parámetro** | **Configuración** |
| --- | --- |
| **Tipo de audiencia** | Audiencia personalizada — Sitio web |
| **Ventana de tiempo** | 30 días (principal) + 60 días (secundaria) |
| **Inclusión** | Todos los visitantes del sitio web |
| **Exclusión** | Personas que ya hicieron clic en WhatsApp o llegaron a página de Contacto (ya convirtieron) |
| **Tamaño estimado** | Depende del tráfico — con 790 usuarios/mes, audiencia de 30 días: ~500-700 personas |
| **Objetivo de campaña** | Mensajes (clic a WhatsApp) o Tráfico (clic a página de consulta) |
| **Presupuesto sugerido** | 40% del presupuesto total de retargeting |

**Audiencia 2 · Engagement en Instagram  ·  Temperatura: media-alta**

---

Personas que interactuaron con el contenido de @mayuecuador: guardaron un post, vieron un reel más del 50%, respondieron una encuesta en stories, o enviaron un mensaje directo. Mostraron interés en el tema pero no llegaron al sitio ni contactaron.

| **Parámetro** | **Configuración** |
| --- | --- |
| **Tipo de audiencia** | Audiencia personalizada — Cuenta de Instagram |
| **Ventana de tiempo** | 30 días |
| **Inclusión** | Personas que guardaron una publicación o reel · Personas que enviaron un mensaje · Personas que interactuaron con una publicación o anuncio |
| **Exclusión** | Personas que ya visitaron el sitio web (ya están en Audiencia 1) |
| **Segmentación avanzada (opcional)** | Crear sub-audiencias por contenido visto: quienes vieron contenido de sueño reciben anuncio de sueño; quienes vieron contenido de estrés reciben anuncio de estrés |
| **Objetivo de campaña** | Mensajes (clic a WhatsApp) o Tráfico al sitio web |
| **Presupuesto sugerido** | 35% del presupuesto total de retargeting |

**Audiencia 3 · Lookalike de clientes activos  ·  Temperatura: fría cualificada**

---

La única audiencia 'fría' que vale la pena en Facebook. Se construye a partir de la lista de clientes actuales de Mayu — Meta encuentra personas con comportamiento digital similar a quienes ya compraron.

| **Parámetro** | **Configuración** |
| --- | --- |
| **Tipo de audiencia** | Audiencia similar (Lookalike) |
| **Audiencia fuente** | Lista de clientes activos subida como audiencia personalizada (mínimo 100 personas, ideal 500+) |
| **Porcentaje de similitud** | 1% (más similar, más pequeña) para conversión · 2-3% para mayor alcance con menor precisión |
| **País** | Ecuador |
| **Exclusión** | Excluir clientes actuales de la audiencia fuente + visitantes web recientes |
| **Objetivo de campaña** | Tráfico al sitio web + retargeting posterior a visita |
| **Presupuesto sugerido** | 25% del presupuesto total |

La audiencia lookalike necesita al menos 100 clientes en la lista fuente para funcionar. Cuantos más, mejor — 500+ da resultados notablemente mejores. Si Mayu aún no tiene esta lista estructurada, es la primera tarea antes de activar esta campaña.

---

# 03 · Configuración técnica del pixel

Sin pixel funcionando correctamente no hay retargeting. Este es el prerequisito técnico más importante antes de activar cualquier campaña. El pixel de Meta debe estar instalado en mayuecuador.com y midiendo los eventos correctos.

## 3.1 Eventos mínimos a configurar

| **Evento** | **Prioridad** | **Qué dispara** |
| --- | --- | --- |
| **PageView** | Obligatorio | Se dispara en cada página visitada. Base de toda audiencia de retargeting web. |
| **Contact (clic WhatsApp)** | Obligatorio | Clic en el botón de WhatsApp del sitio. Es el evento de conversión principal de Mayu. |
| **ViewContent (página Farmacia)** | Importante | Visita a la página de Farmacia Fitoterapéutica o Servicios. Indica intención más alta que el home. |
| **ViewContent (página Contacto)** | Importante | Visita a la página de Contacto. Intención de conversión alta — aunque no haya completado el contacto. |
| **Lead (formulario completado)** | Deseable | Si se activa un formulario de consulta en el sitio. Hoy no existe pero es recomendado activarlo. |

## 3.2 Cómo verificar que el pixel funciona

| **01** | **Instalar la extensión Meta Pixel Helper en Chrome**
Disponible en Chrome Web Store. Gratis. Muestra en tiempo real qué eventos se disparan al navegar el sitio. |
| --- | --- |

| **02** | **Navegar mayuecuador.com con el Pixel Helper activo**
Verificar que PageView se dispara en cada página. Hacer clic en el botón de WhatsApp y confirmar que el evento Contact se registra. |
| --- | --- |

| **03** | **Revisar en el Administrador de Eventos de Meta**
Meta Business Suite → Fuentes de datos → Pixel → Eventos. Confirmar que los eventos llegan con menos de 24h de antigüedad. |
| --- | --- |

| **04** | **Activar Conversions API (recomendado)**
La Conversions API envía eventos directamente desde el servidor, no solo desde el navegador. Mejora la precisión un 20-30% especialmente con usuarios que tienen bloqueadores de anuncios. |
| --- | --- |

# 04 · Estructura de campañas en el Administrador

Tres campañas separadas, una por audiencia. Nunca mezclar audiencias de diferente temperatura en la misma campaña — cada una necesita mensajes distintos y métricas distintas.

| **Campaña** | **Audiencia** | **Objetivo** | **Presupuesto** | **Duración mínima** |
| --- | --- | --- | --- | --- |
| **RT-1 · Visitantes web** | Personalizada — Sitio web · 30 días | Mensajes | 40% del total | Activa siempre (evergreen) |
| **RT-2 · Engagement IG** | Personalizada — Instagram · 30 días | Mensajes o Tráfico | 35% del total | Activa siempre (evergreen) |
| **RT-3 · Lookalike clientes** | Similar · 1% Ecuador | Tráfico al sitio | 25% del total | Mínimo 30 días para optimización |

Las campañas RT-1 y RT-2 son evergreen — no tienen fecha de fin. Se alimentan solas con el tráfico y engagement nuevo que llega cada día. RT-3 se evalúa mensualmente y se ajusta según costo por resultado.

---

## 4.1 Configuración de conjuntos de anuncios

| **Parámetro** | **Configuración para todas las campañas** |
| --- | --- |
| **Ubicaciones** | Solo Facebook feed + Instagram feed. Desactivar Audience Network, Marketplace y Stories de Messenger — baja calidad para este objetivo. |
| **Optimización** | Conversaciones (para campañas de Mensajes) o Clics en el enlace (para Tráfico) |
| **Estrategia de puja** | Costo más bajo (automático) para empezar. Con datos históricos, cambiar a costo por resultado objetivo. |
| **Programación** | Sin restricción de horario al inicio. Con datos, evaluar si hay horarios de mejor rendimiento. |
| **Frecuencia** | Cap de 3 impresiones por persona cada 7 días para RT-1 y RT-2. Evitar saturación en audiencias pequeñas. |
| **Formatos de anuncio** | Imagen estática (1:1 o 4:5) como principal. Carrusel para RT-2 con contenido específico por tema. |

# 05 · Copys de anuncios por audiencia

Seis anuncios listos para activar. Cada audiencia tiene dos variantes para test A/B. El copy está adaptado al nivel de conocimiento de la marca en cada audiencia.

Regla de tono para todos los anuncios: el mensaje no puede prometer curas ni hacer afirmaciones terapéuticas ('trata', 'cura', 'elimina'). El enfoque correcto es siempre hacia la personalización y la consulta profesional.

---

**Campaña RT-1 · Visitantes web sin conversión**

---

Estas personas ya saben qué es Mayu. El anuncio no necesita explicar la marca — necesita reducir la fricción para dar el siguiente paso. Mensaje de baja presión con la consulta gratuita como anzuelo principal.

**RT-1 · Variante A**   Imagen estática · Prueba social

---

**Texto principal:**

*Más de 118 personas en Google dejaron 5 estrellas hablando de lo mismo: que Mayu escucha antes de recomendar.  Si estás buscando una alternativa natural para tu salud, la primera consulta es gratuita. Sin compromiso.*

---

**Titular:**

*Primera consulta gratuita en Mayu*

---

**Descripción:**

*Farmacia Magistral Fitoterapéutica · Quito y Cuenca*

---

**CTA:** Enviar mensaje por WhatsApp

---

**Nota de configuración:** Usar imagen con las estrellas de Google y número de reseñas como elemento visual principal. Fondo blanco, logo Mayu. Sin stock photos.

---

**RT-1 · Variante B**   Imagen estática · Diferencial del proceso

---

**Texto principal:**

*En Mayu no te vendemos lo que tenemos en el estante.  Te formulamos lo que necesitas — después de escucharte.  Asesoría gratuita incluida antes de cualquier fórmula.*

---

**Titular:**

*Fórmulas naturales a tu medida*

---

**Descripción:**

*Asesoría clínica gratuita · Registro ARCSA · Extractos estandarizados*

---

**CTA:** Agendar consulta gratis

---

**Nota de configuración:** Imagen del local físico de Mayu o del proceso de consulta — real, no ilustrativa. El local genera confianza visual que el stock photo no tiene.

---

**Campaña RT-2 · Engagement en Instagram**

---

Estas personas interactuaron con contenido de Mayu pero no llegaron al sitio. El anuncio puede ser más específico al tema que les interesó. Si no se tiene segmentación por tema de contenido, usar el anuncio general.

**RT-2 · Variante A**   Carrusel · Tema sueño (para quienes interactuaron con contenido de sueño)

---

**Texto principal:**

*¿Guardaste el post sobre insomnio?  Eso nos dice que el tema te importa. Si quieres saber si una fórmula magistral puede ayudarte en tu caso específico, la consulta es gratis.*

---

**Titular:**

*Soluciones naturales para el sueño, a tu medida*

---

**Descripción:**

*Valeriana · Pasiflora · Magnesio · Personalizadas en consulta*

---

**CTA:** Consultar gratis por WhatsApp

---

**Nota de configuración:** Carrusel de 3 slides: slide 1 con el problema (insomnio), slide 2 con las plantas de referencia, slide 3 con el CTA a consulta gratuita. Misma estética que el feed de Instagram.

---

**RT-2 · Variante B**   Imagen estática · General para todo tipo de engagement

---

**Texto principal:**

*Si algo del contenido de Mayu te resonó, probablemente hay una razón.  El cuerpo pide lo que necesita. Nosotros ayudamos a traducirlo en una fórmula que funcione para ti.*

---

**Titular:**

*Tu salud, formulada a medida*

---

**Descripción:**

*Asesoría gratuita · Sin compromiso · Quito y Cuenca*

---

**CTA:** Escribirnos por WhatsApp

---

**Nota de configuración:** Imagen que muestre el proceso de consulta o la variedad del catálogo de fórmulas — algo que comunique personalización de forma visual.

---

**Campaña RT-3 · Lookalike de clientes activos**

---

Audiencia fría cualificada. No conoce Mayu pero tiene comportamiento similar a clientes actuales. El anuncio necesita explicar qué es Mayu y por qué es diferente — mismo trabajo que el contenido educativo de Instagram pero en formato de anuncio directo.

**RT-3 · Variante A**   Imagen estática · Introducción a la propuesta

---

**Texto principal:**

*Una farmacia que formula lo que tú necesitas — no lo que tiene en el estante.  En Mayu elaboramos fórmulas naturales personalizadas con asesoría clínica gratuita incluida. Extractos estandarizados. Registro ARCSA. Más de 118 reseñas con 5 estrellas en Google.*

---

**Titular:**

*Mayu · Farmacia Magistral Fitoterapéutica*

---

**Descripción:**

*Quito y Cuenca · Primera consulta gratuita*

---

**CTA:** Conocer más

---

**Nota de configuración:** El destino del clic es la home del sitio web o una landing de 'qué es Mayu', no WhatsApp directamente — esta audiencia necesita un paso intermedio de conocimiento antes del contacto.

---

**RT-3 · Variante B**   Video corto · 15-20 seg · Proceso de consulta

---

**Texto principal:**

*¿Sabías que hay farmacias que elaboran fórmulas naturales específicamente para ti?  En Mayu la consulta es gratuita. Primero te escuchamos, después formulamos.*

---

**Titular:**

*Así funciona Mayu*

---

**Descripción:**

*Farmacia Magistral · Asesoría gratuita · Ecuador*

---

**CTA:** Ver cómo funciona

---

**Nota de configuración:** Video del proceso de consulta en el local: bienvenida, conversación, formulación. 15-20 segundos, sin música intrusa, con subtítulos. El video real del local convierte mejor que cualquier producción elaborada.

---

# 06 · Distribución de presupuesto

Sin dato histórico limpio, el presupuesto inicial se distribuye por temperatura de audiencia. Después de 30 días con datos reales, se ajusta según costo por resultado de cada campaña.

| **Campaña** | **% del total** | **Lógica** | **Ajuste a 30 días** |
| --- | --- | --- | --- |
| **RT-1 · Visitantes web** | 40% | Audiencia más caliente — mayor probabilidad de conversión con menor gasto | Si CPL (costo por lead) < RT-2 y RT-3: aumentar a 50%. Si CPL > RT-2: reducir a 30%. |
| **RT-2 · Engagement IG** | 35% | Segunda audiencia más caliente — interés demostrado pero intención menor que visitante web | Evaluar si la segmentación por tema de contenido mejora el CPL. Subir presupuesto a la sub-audiencia que mejor convierte. |
| **RT-3 · Lookalike** | 25% | Única audiencia fría — necesita más presupuesto para generar volumen suficiente de datos | Si el costo por visita al sitio web es razonable y las visitas entran al funnel de RT-1: mantener o aumentar. Si no convierten a visita: reducir y refinar la audiencia fuente. |

Las campañas de retargeting necesitan al menos 50 conversiones por conjunto de anuncios en 7 días para que el algoritmo de Meta optimice correctamente. Con audiencias pequeñas, Meta puede tardar 2-3 semanas en salir de la fase de aprendizaje. No pausar campañas en esas primeras semanas.

---

# 07 · KPIs y revisión semanal

Cuatro métricas son suficientes para gestionar este modelo. Revisión semanal de 15 minutos en el Administrador de Anuncios.

| **KPI** | **Meta inicial** | **Señal de alerta** | **Acción si está en rojo** |
| --- | --- | --- | --- |
| **CPL (costo por lead / conversación iniciada)** | < $3 USD | > $6 USD | Revisar copy del anuncio y precisión de la audiencia. Pausar el anuncio de menor rendimiento. |
| **CTR (tasa de clic en el anuncio)** | > 1.5% | < 0.8% | El anuncio no engancha. Cambiar imagen o primer línea del copy. |
| **Frecuencia (impresiones por persona)** | 1.5 – 3.0 | > 4.0 | Audiencia saturada. Ampliar ventana de tiempo, agregar audiencia nueva o rotar creatividades. |
| **ROAS o conversiones a primera compra** | Dato base mes 1 | Sin conversiones en 30 días | Revisar si el evento de conversión en el pixel está bien configurado. Validar con equipo de WhatsApp si los leads de Facebook están llegando y no convirtiendo. |

# 08 · Checklist de activación

Todo lo que debe estar listo antes de activar las nuevas campañas. Ordenado por dependencia — no avanzar al siguiente paso sin completar el anterior.

**Prerrequisitos técnicos — completar primero**

---

- Verificar que el pixel de Meta está instalado en mayuecuador.com y disparando PageView
- Configurar y verificar el evento Contact en el clic del botón de WhatsApp del sitio
- Configurar evento ViewContent en las páginas de Farmacia y Contacto
- Verificar pixel con Meta Pixel Helper — todos los eventos confirmados
- Construir la lista de clientes activos para audiencia lookalike (mínimo 100, ideal 500+)

**Creación de audiencias — segundo paso**

---

- Crear audiencia personalizada: visitantes web · 30 días · excluyendo conversiones
- Crear audiencia personalizada: visitantes web · 60 días · excluyendo conversiones
- Crear audiencia personalizada: engagement Instagram · 30 días
- Subir lista de clientes y crear audiencia lookalike 1% Ecuador
- Subir lista de clientes y crear audiencia lookalike 2% Ecuador (variante)

**Campañas y anuncios — tercer paso**

---

- Archivar o pausar campañas actuales de contenido orgánico duplicado
- Crear campaña RT-1 con sus dos variantes de anuncio (A y B)
- Crear campaña RT-2 con sus dos variantes de anuncio (A y B)
- Crear campaña RT-3 con sus dos variantes de anuncio (A y B)
- Configurar cap de frecuencia: máximo 3 impresiones por persona cada 7 días
- Establecer presupuestos según distribución 40 / 35 / 25

**Seguimiento — cuarto paso**

---

- Crear dashboard simple con los 4 KPIs en el Administrador de Anuncios
- Agendar revisión semanal de 15 minutos (recomendado: lunes junto con KPIs de WhatsApp)
- Registrar datos base de la semana 1 para comparación futura
- A los 30 días: ajustar distribución de presupuesto según CPL real de cada campaña

Último punto: el retargeting funciona porque amplifica un ecosistema que ya está generando interés. Si Instagram no está publicando contenido educativo y el sitio web no tiene tráfico, no hay audiencias que retargetear. Las campañas de Facebook son el último paso del embudo, no el primero.

---