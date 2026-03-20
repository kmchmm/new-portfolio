import React from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'

function Home() {
  return (
    <main>
      {/* INTRODUCTION / HERO */}
      <section id="hero">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="Profile" />
        </div>

        <div className="intro-text">
          <h1>Hello, I'm Your Name 👋</h1>
          <p>
            I’m a passionate frontend developer focused on building clean and
            user-friendly web applications using modern technologies.
          </p>
        </div>
      </section>

      <div className="ticks"></div>

      {/* TOOLS / SKILLS */}
      <section id="tools">
        <h2>Tools & Technologies</h2>
        <p>Technologies I use to build projects</p>

        <div className="tools-grid">
          <div className="tool">
            <img src={reactLogo} alt="React logo" />
            <p>React</p>
          </div>

          <div className="tool">
            <img src={viteLogo} alt="Vite logo" />
            <p>Vite</p>
          </div>

          {/* Add more tools here */}
          {/* Example:
          <div className="tool">
            <img src="/icons/js.svg" alt="JavaScript" />
            <p>JavaScript</p>
          </div>
          */}
        </div>
      </section>

      <div className="ticks"></div>

      {/* PROJECTS */}
      <section id="projects">
        <h2>Projects</h2>
        <p>Some of the work I've built</p>

        <div className="projects-grid">
          <div className="project-card">
            <h3>Project One</h3>
            <p>A short description of your project.</p>
            <a href="#" target="_blank">View Project</a>
          </div>

          <div className="project-card">
            <h3>Project Two</h3>
            <p>A short description of your project.</p>
            <a href="#" target="_blank">View Project</a>
          </div>

          <div className="project-card">
            <h3>Project Three</h3>
            <p>A short description of your project.</p>
            <a href="#" target="_blank">View Project</a>
          </div>
        </div>
      </section>

      <div className="ticks"></div>

      {/* CONTACT / SOCIAL */}
      <section id="contact">
        <h2>Contact</h2>
        <p>Let’s connect</p>

        <ul className="social-links">
          <li>
            <a href="https://github.com/" target="_blank">GitHub</a>
          </li>
          <li>
            <a href="https://linkedin.com/" target="_blank">LinkedIn</a>
          </li>
          <li>
            <a href="mailto:your@email.com">Email</a>
          </li>
        </ul>
      </section>

      <section id="spacer"></section>
    </main>
  )
}

export default Home