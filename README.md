# Emil Alpsten — Portfolio Website

A personal portfolio website built with **React + TypeScript** on the frontend and a **Java / Spring Boot** backend.
The site showcases my projects and provides a contact form that stores submissions in PostgreSQL and triggers an email notification via **Brevo**.

---

## Tech Stack

**Frontend:**
- React 19 (TypeScript + Vite)
- SCSS for styling
- Framer Motion — entrance animations, parallax and magnetic interactions
- GSAP — character cascade timelines and scrubbed DrawRule animations
- Lenis — smooth infinite scroll loop
- React Icons
- Netlify for deployment

**Backend:**
- Java Spring Boot
- REST API for contact form
- PostgreSQL for persistence
- Deployed with Render

---

## Features

- **Hero** — coin-flip portrait, parallax name and social links
- **About Me** — bio with GSAP-animated quick facts and highlighted words
- **Expertise** — four skill buckets with scrolling tech marquees and GSAP entrance animations
- **Projects** — per-item GSAP timeline (number → title → description → links)
- **Music** — favourite playlists and soundtracks
- **Contact Form** — validated form connected to the Spring Boot backend
- **CV Page** — bilingual (SV/EN) expandable CV with print support
- **Infinite scroll loop** — seamless page repeat via DOM duplication and Lenis position jump
- **Animated background** — viewport-fixed radial gradient that drifts slowly across the page

---

## Deployment

- **Frontend:** Netlify
- **Backend:** Render
- Both environments are connected via environment variables (`VITE_API_BASE`) for correct API routing.

---

## Contact Form Flow

1. User fills in First Name, Last Name, Email, Phone (optional) and Message
2. Frontend validates the input
3. Form data is sent via `fetch` → Spring Boot REST API (`/api/contact`)
4. Backend stores the message in PostgreSQL and triggers an email notification via Brevo
5. User sees a confirmation message in the UI

---

## Future Plans

- Add more projects with live demos
- Interactive in-browser demo of the Java 15 Puzzle Game
- Compress and optimise remaining image assets

---

## Acknowledgements

Thanks to [@YujiSato](https://github.com/yujisatojr/react-portfolio-template/tree/master?tab=readme-ov-file) for template inspiration.
