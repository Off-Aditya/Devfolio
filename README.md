# Aditya's Developer Portfolio 🚀

A modern, responsive, and highly interactive developer portfolio built with **Next.js**, **React**, **Tailwind CSS**, and animated using **Framer Motion**.

## 🌟 Features

- **Dynamic Animations:** Smooth page transitions and element animations powered by Framer Motion.
- **Responsive Design:** Fully responsive layout that looks great on mobile, tablet, and desktop screens using Tailwind CSS.
- **Contact Form:** Integrated contact form using EmailJS to directly receive emails.
- **Detailed Sections:**
  - **About:** Showcasing skills, education, and professional experience.
  - **Projects:** Dedicated page to highlight featured work and projects.
  - **Contact:** An interactive way to reach out for collaboration.
- **Custom Components:** Thoughtfully crafted React components like animated headings, custom icons, and reusable layout structures.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (Pages Router)
- **Library:** [React](https://reactjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Email Service:** [EmailJS](https://www.emailjs.com/) (@emailjs/browser)
- **Deployment & Tooling:** ESLint, PostCSS, Custom Netlify setup (`@netlify/plugin-nextjs`).

## 📁 Folder Structure

```text
.
├── public/                 # Static assets (images, fonts, etc.)
└── src/
    ├── components/         # Reusable React components
    │   ├── AnimatedText.jsx  # Framer motion text animations
    │   ├── Education.jsx     # Education timeline/details
    │   ├── Experience.jsx    # Experience timeline/details
    │   ├── NavBar.jsx        # Navigation bar
    │   ├── Skills.jsx        # Skills showcase
    │   ├── HireMe.jsx        # Call to action component
    │   └── hooks/            # Custom React hooks
    ├── pages/              # Next.js Application Pages
    │   ├── index.js          # Main landing page
    │   ├── about.jsx         # About me page
    │   ├── projects.jsx      # Projects showcase
    │   ├── contact.jsx       # Contact form page
    │   └── api/              # API routes
    └── styles/             # Global CSS & Tailwind imports
```

## 🚀 Getting Started

First, ensure you have Node.js installed. Then, clone the repository and install dependencies:

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Build for Production

To create an optimized production build, run:

```bash
# Build the project
npm run build

# Start the production server
npm run start
```

## 📝 License

This project is created for personal portfolio use.
