# Ranyme Kellakh | Personal Portfolio

[![Live Site](https://img.shields.io/badge/Live_Site-GitHub_Pages-80426e?style=for-the-badge&logo=github)](https://rankell05.github.io/portfolio_ranyme/)
[![Repository](https://img.shields.io/badge/Repository-GitHub-522d60?style=for-the-badge&logo=github)](https://github.com/rankell05/portfolio_ranyme)
![HTML5](https://img.shields.io/badge/HTML5-e34f26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572b6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-f7df1e?style=flat-square&logo=javascript&logoColor=black)

> A responsive, accessible, dependency-free portfolio showcasing my studies, projects and experience in systems security, AI and front-end development.

**[View the live portfolio](https://rankell05.github.io/portfolio_ranyme/)**

---

## Student Name

**Ranyme Kellakh**

Systems Security engineering student, National Higher School of Advanced Technologies (ENSTA), Bordj El Kiffan, Algiers.

| | |
|---|---|
| **Email** | [ar.kellakh@ensta.edu.dz](mailto:ar.kellakh@ensta.edu.dz) |
| **GitHub** | [github.com/rankell05](https://github.com/rankell05) |
| **Academic year** | 2025–2026 |

---

## Project Description

This project is my personal portfolio website. It presents who I am, what I have studied, the skills I have built and the projects I have worked on, in a single-page site that is easy to browse for recruiters, teachers and collaborators.

The content is organized around three areas that define my profile:

- **Systems and network security:** my engineering degree at ENSTA, with foundations in networks, Linux and operating systems.
- **Artificial intelligence:** an Explainable AI (XAI) internship project at the Algerian Space Agency, classifying satellite images with PyTorch and interpreting the results with Grad-CAM, SHAP and LIME.
- **Front-end development and UI/UX:** React and React Native projects, and interface prototypes designed in Figma.

The site is written with plain HTML, CSS and JavaScript only: no frameworks, no build step, no external libraries. This keeps it fast, easy to maintain and fully under my control.

**Sections:** About · Skills · Experience · Projects · Playground (Caesar cipher) · Education · Contact

---

## Technologies Used

| Category | Technologies |
|---|---|
| **Markup** | HTML5 with semantic elements (`header`, `nav`, `main`, `section`, `article`, `footer`) and ARIA attributes |
| **Styling** | CSS3: custom properties for theming, Grid and Flexbox, `clamp()` fluid typography, media queries, `backdrop-filter` |
| **Scripting** | Vanilla JavaScript (ES6+), no dependencies |
| **Browser APIs** | Canvas 2D, Intersection Observer, Clipboard, Web Storage (`localStorage`), `matchMedia` |
| **Fonts** | [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque) (headings) and [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans) (body) via Google Fonts |
| **Tools** | Git, GitHub, GitHub Pages |
| **Design** | Colour palette from [Color Hunt](https://colorhunt.co/palette/522d6080426ef2a67bffd38b) |

---

## Implemented Features

- **Light and dark themes:** a toggle in the navigation bar, automatic detection of the system preference, and the choice saved in `localStorage`. An inline script in the `<head>` sets the theme before the page renders, which avoids a flash of the wrong theme.
- **Animated hero section:** the name is revealed with a character-decoding effect, and a rotating line shows what I am currently interested in.
- **Interactive background:** a canvas network of drifting nodes that connect to each other and to the cursor. It adapts to the screen size and theme colour.
- **Filterable skills grid:** skills are grouped into *Systems & networks*, *Development*, *AI & data* and *Design & tools*, with filter tabs and a level indicator for each skill.
- **Experience case study:** the XAI internship at the Algerian Space Agency, presented with key figures (21 land-use classes, VGG16, 224×224 inputs, 80/10/10 data split) and the work accomplished.
- **Expandable project cards:** CS Students Dashboard, GeoAI Lab (Sentinel-2), ENSTEINS club website and the CodeBattle mobile app, each with a *Show details* toggle that updates `aria-expanded`.
- **Caesar cipher playground:** type a message, choose a shift from 0 to 25 and see the result live, with a *brute-force* view listing all 25 possible shifts to show how easily this cipher is broken.
- **Education and languages:** an academic timeline, language proficiency cards (Arabic, French, English, Kabyle) and areas of interest.
- **Contact section:** email link, GitHub link, and a *Copy address* button using the Clipboard API.
- **Navigation:** sticky header, active-section highlighting, scroll progress bar, smooth scrolling, a back-to-top button and a mobile menu that closes with the `Escape` key.
- **Scroll-reveal animations:** content fades in as it enters the viewport.
- **Responsive and accessible design:** adapts from mobile to desktop, supports keyboard navigation with visible focus styles, and respects `prefers-reduced-motion` by disabling animations.

---

## Project Structure

```
portfolio_ranyme/
├── index.html        # Page structure and content
├── css/
│   └── style.css     # Themes, layout, components and animations
├── js/
│   └── script.js     # Skills data, canvas, cipher, theme, menu and interactions
└── README.md
```

---

## Run Locally

No installation or build step is needed.

```bash
git clone https://github.com/rankell05/portfolio_ranyme.git
cd portfolio

# Option 1: open index.html directly in a browser
# Option 2: serve it locally
python -m http.server 8000
# then visit http://localhost:8000
```

---

## Deployment

The site is hosted with **GitHub Pages** from the `main` branch (root folder) and is available at  
https://rankell05.github.io/portfolio_ranyme/

---

## Author

**Ranyme Kellakh**: [GitHub](https://github.com/rankell05) · [Email](mailto:ar.kellakh@ensta.edu.dz)
