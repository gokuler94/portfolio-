
# Gokul E R - Personal Portfolio

This is a modern, single-page personal portfolio for Gokul E R, a Full Stack Developer specializing in AI and Machine Learning. The website is built with React, TypeScript, and Tailwind CSS, featuring smooth animations and interactive UI components to showcase skills, projects, and achievements in a professional and engaging way.

**Live Demo:** [Link to your deployed portfolio]

---

## Features

- **Interactive Hero Section:** A stunning hero section with a `Spotlight` effect that follows the cursor and animated `Background Beams` that create an explosion effect on collision.
- **Smooth Scrolling & Navigation:** A sticky header with links that smoothly scroll to the corresponding sections on the page. The active section is automatically highlighted.
- **Dynamic Animations:** Components gracefully animate into view on scroll, powered by Framer Motion.
- **Component-Based Architecture:** Built with reusable React components for each section (About, Skills, Projects, etc.), making the code clean and maintainable.
- **Responsive Design:** Fully responsive layout that looks great on all devices, from mobile phones to desktops.
- **Functional Components:** Includes a working "Download Resume" button and clickable contact links for email, phone, and location (Google Maps).

---

## Tech Stack

- **Frontend:** [React](https://reactjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **UI Components:** [Aceternity UI](https://ui.aceternity.com/) (Spotlight, Background Beams)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)

This project uses a modern setup without a traditional bundler like Vite or Webpack for the development environment. Instead, it relies on a `script type="importmap"` in `index.html` to handle ES module imports directly in the browser.

---

## Getting Started

Follow these instructions to get a local copy up and running.

### Prerequisites

You need a simple local server to serve the files, as browser security policies prevent ES modules from working with the `file://` protocol. The easiest way is using a tool like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for VS Code.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-portfolio-repo.git
    cd your-portfolio-repo
    ```

2.  **Add your resume:**
    - Place your resume file named `resume.pdf` inside a new `public` directory in the project's root.
    ```
    /
    ├── public/
    │   └── resume.pdf
    └── ...
    ```

3.  **Run the project:**
    - If you are using VS Code and have the **Live Server** extension installed, simply right-click the `index.html` file and select "Open with Live Server".
    - Alternatively, you can use any simple HTTP server. For example, with Python installed:
      ```bash
      python -m http.server
      ```
    - The site will be available at `http://localhost:8000` (or a similar address).

---

## Customization

To make this portfolio your own, follow these steps:

1.  **Update Personal Data:**
    - Open `src/constants.tsx`.
    - Modify the `NAV_LINKS`, `SKILLS_DATA`, `PROJECTS_DATA`, `ACHIEVEMENTS_DATA`, and `CONTACT_INFO_DATA` arrays with your personal information.

2.  **Update Hero Section Text:**
    - Open `src/components/HeroSection.tsx`.
    - Change the main heading and the paragraph text to reflect your name and tagline.

3.  **Update Metadata:**
    - Open `metadata.json` to change the site's name and description.
    - Open `index.html` to update the `<title>` tag.

4.  **Update Social Links:**
    - Open `src/components/Footer.tsx`.
    - Change the `href` attributes for the GitHub and LinkedIn links to your profile URLs.

---

## File Structure

The project is organized with a clear and logical file structure:

```
/
├── public/
│   └── resume.pdf              # Static assets
├── index.html                  # Main HTML entry point with importmap
├── index.tsx                   # React root renderer
├── metadata.json               # Application metadata
├── README.md                   # Project documentation
├── types.ts                    # TypeScript type definitions
├── constants.tsx               # Centralized data for the site
├── lib/
│   └── utils.ts                # Utility functions (e.g., cn)
└── components/
    ├── Header.tsx
    ├── HeroSection.tsx
    ├── About.tsx
    ├── Skills.tsx
    ├── Projects.tsx
    ├── Achievements.tsx
    ├── Contact.tsx
    ├── Footer.tsx
    ├── ui/
    │   └── spotlight.tsx         # Spotlight component
    └── backgrounds/
        └── BackgroundBeams.tsx   # Background component
```
---

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.
