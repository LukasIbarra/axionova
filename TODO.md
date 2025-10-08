# TODO: Agregar Formulario de Contacto/Cotización en Página de Contacto

## Pasos a Implementar
- [x] Agregar sección de formulario a src/pages/contacto.astro con fondo oscuro (bg-gray-900 con backdrop-blur).
- [x] Copiar y adaptar el formulario de src/components/Contact.astro, incluyendo campos: nombre, empresa, email, telefono, servicio, mensaje.
- [x] Agregar action="https://formspree.io/f/YOUR_FORM_ID" method="POST" al formulario para envío de emails via Formspree.
- [x] Ajustar estilos para que el formulario se integre bien en la página de contacto.
- [x] Probar el formulario en el servidor de desarrollo.
- [x] Instruir al usuario para reemplazar YOUR_FORM_ID con el ID real de Formspree.

## Notas
- Usar Formspree para funcionalidad de email sin necesidad de backend.
- Fondo oscuro para contrastar con las secciones anteriores.
- Mantener consistencia con el diseño existente.
