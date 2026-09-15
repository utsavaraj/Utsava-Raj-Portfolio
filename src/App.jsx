import profilePhoto from './assets/utsava.jpeg';
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M12 2C6.48 2 2 6.57 2 12.21c0 4.47 2.87 8.26 6.84 9.6.5.1.68-.22.68-.49 0-.24-.01-1.04-.02-1.9-2.78.61-3.37-1.35-3.37-1.35-.45-1.17-1.1-1.48-1.1-1.48-.9-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.89 1.53 2.33 1.09 2.9.83.09-.65.35-1.09.63-1.34-2.22-.26-4.56-1.12-4.56-4.97 0-1.1.39-2 .99-2.71-.1-.26-.43-1.3.1-2.71 0 0 .84-.27 2.75 1.03A9.4 9.4 0 0 1 12 7.92a9.4 9.4 0 0 1 2.5.34c1.91-1.3 2.74-1.03 2.74-1.03.54 1.41.21 2.45.1 2.71.62.7.98 1.61.98 2.71 0 3.86-2.34 4.7-4.57 4.96.36.32.68.93.68 1.88 0 1.36-.01 2.46-.01 2.8 0 .27.18.6.69.49A10.21 10.21 0 0 0 22 12.21C22 6.57 17.52 2 12 2Z" fill="currentColor" />
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M6.94 8.5A1.56 1.56 0 1 1 6.9 5.38a1.56 1.56 0 0 1 .04 3.12ZM5.5 9.8h2.8v8.7H5.5V9.8Zm4.7 0h2.68v1.18h.04c.37-.7 1.28-1.44 2.65-1.44 2.83 0 3.35 1.86 3.35 4.28v6.68h-2.8v-6.25c0-1.49-.03-3.4-2.08-3.4-2.09 0-2.4 1.63-2.4 3.3v6.35h-2.8V9.8Z" fill="currentColor" />
  </svg>
);

const skills = [
    'Java',
    'Python',
    'SQL',
    'React',
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Spring Boot',
    'REST APIs',
    'System Design',
];

const projects = [
  {
    title: 'Projects Coming Soon',
    type: 'Learning & Development',
    description:
      'Currently learning Java, DSA, React and Full Stack Development. Working on building my first real-world projects.',
    tags: ['Java', 'DSA', 'React'],
  },
];

const experience = [
  {
    role: 'Core Team - Management(April 2026 - Present)/ Volunteer',
    company: 'D4 Community',
    period: 'Oct 2025 — Present',
    details: 'Organized and supported technical events, workshops, and hackathons, collaborated with team members, and contributed to building an active and supportive tech community.',
  },
];

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">UR</div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="button button-ghost" href="#contact">
          Let’s talk
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Software Developer • Problem solver</p>
            <h1>Building reliable software that turns ideas into real products.</h1>
            <p className="lead">
              I’m Utsava Raj, a software developer focused on building scalable web applications, clean APIs, and user-friendly interfaces that help businesses move faster.
            </p>
            <div className="actions">
              <a className="button" href="#work">View projects</a>
              <a className="button button-secondary" href="#about">About me</a>
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-card profile-card">
              <img
                className="profile-photo"
                src={profilePhoto}
                alt="Utsava Raj portrait"
              />
              <div className="profile-info">
                <h3>Utsava Raj</h3>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>I build software that is practical, scalable, and built for real users.</h2>
          </div>
          <div className="about-grid">
            <p>
              I’m a software developer who enjoys turning ideas into working products through clean code, thoughtful architecture, and a strong focus on user experience. I work across front-end and back-end development to build end-to-end solutions.
            </p>
            <p>
              My work involves solving technical problems, creating maintainable systems, and collaborating with teams to deliver reliable features that support productivity, performance, and business growth.
            </p>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <p className="eyebrow">Capabilities</p>
            <h2>Full-stack development, APIs, and product-focused engineering.</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <span key={skill} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="work" className="section">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Projects focused on performance, reliability, and product value.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-topline">
                  <span>{project.type}</span>
                  <span>↗</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>My Journey in Tech and Development.</h2>
          </div>
          <div className="experience-list">
            {experience.map((item) => (
              <div key={item.role} className="experience-item">
                <div className="experience-meta">
                  <span>{item.period}</span>
                </div>
                <div className="experience-content">
                  <h3>{item.role}</h3>
                  <p className="company-name">{item.company}</p>
                  <p>{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section callout">
          <p className="eyebrow">Approach</p>
          <h2>Clean engineering, thoughtful architecture, and user-first execution.</h2>
          <p>
            I focus on writing maintainable code, designing efficient systems, and delivering features that balance technical quality with business impact.
          </p>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div>
          <p className="eyebrow">Let’s build something meaningful</p>
          <a href="mailto:utsavaraj123@gmail.com" className="footer-email">
            utsavaraj123@gmail.com
          </a>
        </div>
        <div className="footer-actions">
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/utsava-raj16" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-link">
              <LinkedinIcon />
            </a>
            <a href="https://github.com/utsavaraj" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-link">
              <GithubIcon />
            </a>
          </div>
          <a href="/resume.pdf" className="resume-button" target="_blank" rel="noreferrer">
            View Resume
          </a>
        </div>
      </footer>
      <div className="copyright">
        © 2026 Utsava Raj. All rights reserved.
      </div>
    </div>
  );
}

export default App;
