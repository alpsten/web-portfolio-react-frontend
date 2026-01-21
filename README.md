
# Emil Alpsten – Portfolio Website

A personal portfolio website built with **React + TypeScript** (frontend) and **Java / Spring Boot** backend).
The site showcases my projects and provides a **Contact Me form** that stores submissions in PostgreSQL
and also triggers an email notification via **Brevo**.

---

## Tech Stack

**Frontend:**
- React (TypeScript + Vite)
- SCSS modules for styling
- React Icons
- Netlify for deployment

**Backend:**
- Java Spring Boot
- REST API for contact form
- Deployed with Render
- PostgreSQL for persistence

---

## Features

- **Hero Section** with profile picture, intro, and social links.
- **Expertise Section** highlighting skills (Java, React, Docker, etc).
- **Projects Section** with screenshots, descriptions, and links (GitHub, APIs, live demos).
- **Spotify Section** embedding one of my personal playlists.
- **Contact Form** with validation, connected to my backend (Spring Boot API).
- **Fun Facts Section** for a personal touch.
- **Footer** with external links (GitHub, LinkedIn, Suicide Zero).

---

## Deployment
- Deployment Frontend: Deployed with Netlify
- Backend: Deployed with Render
- Both environments are connected via environment variables for correct API routing.

---

## Contact Form Flow
User fills in First Name, Last Name, Email, Phone (optional), and Message.
Frontend validates the input.
Form data is sent via fetch → Spring Boot REST API (/api/contact).
Backend stores the message in PostgreSQL + triggers email notification.
User sees a confirmation message in the UI.

---

## Future Plans
- Add more personal and better(!) projects with live demos.
- Interactive demo of my Java 15 Puzzle Game inside the browser.
- Blog section for writing about programming & learning.
- A toggle switch so the background changes color.


---

# Acknowledgements
Thanks to [@YujiSato](https://github.com/yujisatojr/react-portfolio-template/tree/master?tab=readme-ov-file)
for template inspiration and [@mnauliady](https://www.flaticon.com/authors/mnauliady) for the favicon.
