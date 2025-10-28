# 🗳️ Gestora-De-Votos

## 🎯 Descripción

**Gestora-De-Votos** es un sistema de votación en línea desarrollado para la **Expo Técnica**, diseñado para **estudiantes, docentes y visitantes**.

La plataforma permite:

- Registro y autenticación de usuarios.
- Visualización de proyectos.
- Votación segura y transparente (máximo 3 votos por usuario).
- Gestión administrativa de usuarios y proyectos.
- Generación de reportes de resultados.

El objetivo principal es **fomentar la participación, la transparencia y la retroalimentación** mediante un sistema confiable y fácil de usar.

---

## 🛠 Tecnologías utilizadas

- **Frontend:** HTML5, CSS3, JavaScript, Bootstrap
- **Backend:** PHP
- **Base de datos:** MySQL
- **Librerías y herramientas:** Axios

---

## ⚙️ Funcionalidades principales

### Para usuarios
- Registro e inicio de sesión.
- Exploración de proyectos con detalles e imágenes.
- Votación con límite de 3 votos por usuario.
- Visualización de resultados y rankings de proyectos.

### Para administradores
- Gestión de usuarios (alta, baja y edición).
- Gestión de proyectos (alta, baja, edición y asignación de estudiantes y docentes).
- Sistema de reportes de resultados por categoría, año y división.

---

## 🚀 Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/ThiagoR19/Gestora-De-Votos.git
```
2. Copiar los archivos en tu servidor local (XAMPP, WAMP, etc.).
3. Crear la base de datos en MySQL importando `database.sql`.
4. Configurar la conexión a la base de datos en `config.php`.
5. Abrir el proyecto en tu navegador:
```
http://localhost/Gestora-De-Votos
```

---

## 📸 Capturas de pantalla

![Pantalla de inicio](imagenes/Home.png)
*Vista principal con proyectos y votación.*

---

## 🔐 Seguridad y validaciones

- Votación limitada a 3 votos por usuario.
- Validación de inputs para prevenir ataques SQL Injection.
- Sistema de sesiones para proteger áreas restringidas.

---

## 📈 Futuras mejoras

- Notificaciones en tiempo real de resultados.
- Sistema de comentarios y feedback para cada proyecto.
- Optimización para dispositivos móviles y tablets.

---

[GitHub](https://github.com/ThiagoR19) | [LinkedIn](#)