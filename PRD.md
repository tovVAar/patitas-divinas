# Product Requirements Document (PRD)  
**Proyecto:** Webapp de adopción de mascotas en México  
**Versión:** 0.3  
**Fecha:** _Septiembre 5, 2025_

---

## 1. Resumen Ejecutivo
Una plataforma web (mobile first) que conecta a personas que buscan adoptar mascotas (principalmente perros y gatos) con particulares, organizaciones y veterinarias que buscan darlas en adopción. Alcance inicial: México a nivel nacional.  

---

## 2. Objetivos
- Facilitar adopciones responsables de mascotas.  
- Centralizar la oferta de animales en adopción.  
- Dar visibilidad a organizaciones y particulares.  
- Simplificar el proceso de búsqueda y contacto.  
- Fomentar un proyecto social y comunitario.  

---

## 3. Público objetivo
- **Adoptantes:** Personas interesadas en adoptar una mascota.  
- **Dadores:** Particulares, refugios, veterinarias que ofrecen mascotas en adopción.  

---

## 4. Funcionalidades Principales

### 4.1 Adoptantes
- Filtro por especie (perro/gato).  
- Búsqueda por raza, género y colores.  
- Visualización de fichas con foto, descripción, ubicación de entrega.  
- Solicitar contacto con un dador (los datos del dador solo se muestran si este lo aprueba).  

### 4.2 Dadores
- Publicar uno o más animales en adopción.  
- Campos: especie, raza, género, color, zona de entrega.  
- Subir fotos.  
- Marcar mascota como adoptada (visible para otros usuarios).  
- Opciones para compartir en redes sociales:  
  - link directo  
  - QR generado desde la UI  
  - imagen para compartir  
- Aprobar o rechazar solicitudes de contacto para compartir sus datos de forma segura.  

---

## 5. Requerimientos Técnicos

### 5.1 Frontend
- Webapp mobile-first.  
- Framework: React.  
- Navegación simple y responsiva.  
- Generación de QR desde la propia interfaz.  
- Flujo de solicitudes de contacto (solicitud → aprobación/rechazo).  

### 5.2 Backend
- API interna (no pública).  
- Almacenamiento de fichas de mascotas y usuarios.  
- Gestión de autenticación básica (para dadores).  
- Gestión de solicitudes de contacto y estado de aprobación.  

### 5.3 Infraestructura (Azure)
- **App Service**: desplegar frontend y backend.  
- **Azure SQL Database o CosmosDB**: almacenamiento de datos.  
- **Azure Blob Storage**: almacenamiento de fotos.  

---

## 6. Requerimientos No Funcionales
- Accesible desde navegadores móviles y desktop.  
- Soporte para picos de tráfico (escalabilidad en Azure).  
- Seguridad en almacenamiento de imágenes y datos personales.  
- Cumplir con normativas de protección de datos en México.  
- Privacidad: los datos de contacto de los dadores solo se muestran con su aprobación explícita.  

---

## 7. Roadmap (Tentativo)
1. **MVP**:  
   - Registro de dadores.  
   - Publicación de mascotas con foto.  
   - Búsqueda básica para adoptantes.  

2. **Versión 2**:  
   - Compartir en redes sociales (link/QR/imagen).  
   - Marcar como adoptada.  
   - Flujo de solicitud/aprobación de contacto.  

3. **Versión 3**:  
   - Filtros avanzados.  
   - Integración con ONGs y veterinarias.  
   - Opción de donativos dentro de la app (para apoyar causas sociales y comunitarias).  

---

## 8. Riesgos
- Falta de confianza en dadores particulares.  
- Necesidad de verificación de mascotas/adopciones fraudulentas.  
- Escalabilidad si crece rápido.  
- Gestión y transparencia de donativos.  
- Riesgo de compartir datos sensibles, mitigado con el flujo de aprobación de contacto.  
