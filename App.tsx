import { useState } from "react";

type Role = {
  name: string;
  description: string;
  icon: string;
  tone: string;
};

const roles: Role[] = [
  {
    name: "Student",
    description: "Classes, assignments, and your AI Tutor",
    icon: "✦",
    tone: "lavender",
  },
  {
    name: "Teacher",
    description: "Your classes, routines, and classroom tools",
    icon: "◈",
    tone: "mint",
  },
  {
    name: "Parent or guardian",
    description: "A simple view of your child’s school day",
    icon: "♡",
    tone: "blue",
  },
  {
    name: "School leader",
    description: "Briefings, tasks, and institution overview",
    icon: "▦",
    tone: "yellow",
  },
  {
    name: "Institution admin",
    description: "Modules, users, and school-wide settings",
    icon: "⚙",
    tone: "yellow",
  },
];

const features = [
  {
    number: "01",
    title: "Students stay in flow",
    description: "A clear view of classes, deadlines, and support when they need it.",
  },
  {
    number: "02",
    title: "Teachers get time back",
    description: "Bring routines, assignments, and classroom updates into one space.",
  },
  {
    number: "03",
    title: "AI that meets you there",
    description: "Helpful explanations and everyday support, built around people.",
  },
];

function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <button className="brand" onClick={onClick} type="button" aria-label="Nexora home">
      <span className="brand-mark">✳</span>
      NEXORA
    </button>
  );
}

function StudentPreview() {
  return (
    <div className="student-preview" aria-label="Student dashboard preview">
      <aside className="preview-sidebar">
        <Brand />
        <nav>
          <span className="active">Overview</span>
          <span>AI Tutor</span>
          <span>My classes</span>
        </nav>
      </aside>
      <div className="preview-main">
        <h2>Good morning, Ayesha 👋</h2>
        <p className="preview-subtitle">Here’s your day at a glance.</p>
        <div className="class-card">
          <span>UP NEXT · 10:30 AM</span>
          <strong>Biology · Cell systems</strong>
          <small>Room 204&nbsp; · &nbsp;Ms. Chen</small>
        </div>
        <div className="preview-grid">
          <div className="tutor-card">
            <b className="spark">✦</b>
            <strong>Ask your AI Tutor</strong>
            <p>
              Get an explanation that
              <br />
              makes sense to you.
            </p>
            <button type="button">Ask a question&nbsp; →</button>
          </div>
          <div className="week-card">
            <span>THIS WEEK</span>
            <strong>4</strong>
            <small>classes today</small>
            <div className="progress">
              <i />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LandingPage({ openRoles }: { openRoles: () => void }) {
  const scrollToFeatures = () =>
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="landing">
      <header className="site-header">
        <Brand />
        <nav className="header-nav" aria-label="Main navigation">
          <a href="#features">Platform</a>
          <a href="#features">For students</a>
          <a href="#features">For educators</a>
        </nav>
        <button className="header-cta" type="button" onClick={openRoles}>
          Sign in
        </button>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="announcement">✦&nbsp; A more thoughtful school day</div>
          <h1>
            One clear place to <span>learn, teach &amp; grow.</span>
          </h1>
          <p className="hero-description">
            Meet the AI-powered workspace bringing students, teachers, and school leaders together.
            <br />
            Less busywork. More room for what matters.
          </p>
          <div className="hero-actions">
            <button className="primary-button" type="button" onClick={openRoles}>
              Explore the demo&nbsp; →
            </button>
            <button className="secondary-button" type="button" onClick={scrollToFeatures}>
              See how it works
            </button>
          </div>
          <p className="community-label">BUILT FOR THE WHOLE SCHOOL COMMUNITY</p>
          <div className="audiences" aria-label="Nexora audiences">
            <span>Students</span>
            <span>Educators</span>
            <span>School leaders</span>
          </div>
        </div>
        <StudentPreview />
      </section>

      <section className="features" id="features">
        <p className="eyebrow">ONE CONNECTED EXPERIENCE</p>
        <h2>Made for the moments that matter.</h2>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <span>{feature.number}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function RoleSelection({ goHome }: { goHome: () => void }) {
  const [selected, setSelected] = useState(roles[0]);
  const [continued, setContinued] = useState(false);

  return (
    <main className="role-page">
      <header className="role-header">
        <Brand onClick={goHome} />
        <span className="demo-badge">DEMO MODE · NO ACCOUNT NEEDED</span>
      </header>

      <div className="role-layout">
        <section className="welcome-panel">
          <div className="large-spark">✦</div>
          <h1>
            A more thoughtful
            <br />
            school day starts
            <br />
            <span>here.</span>
          </h1>
          <p>
            One connected space for the people
            <br />
            who make a school community.
          </p>
          <div className="welcome-cards">
            <article>
              <b>✧</b>
              <strong>Students</strong>
              <small>Build your own learning rhythm.</small>
            </article>
            <article>
              <b>◇</b>
              <strong>Educators</strong>
              <small>Bring the school day together.</small>
            </article>
          </div>
          <small className="panel-note">Thoughtful tools for every part of the school day.</small>
        </section>

        <section className="role-form">
          <p className="eyebrow">YOUR NEXORA SPACE</p>
          <h2>Welcome to NEXORA</h2>
          <p className="role-intro">Choose your space to explore the demo.</p>
          <div className="role-options" role="radiogroup" aria-label="Choose your Nexora role">
            {roles.map((role) => {
              const isSelected = selected.name === role.name;
              return (
                <button
                  className={`role-option ${isSelected ? "selected" : ""}`}
                  key={role.name}
                  onClick={() => {
                    setSelected(role);
                    setContinued(false);
                  }}
                  role="radio"
                  aria-checked={isSelected}
                  type="button"
                >
                  <span className={`role-icon ${role.tone}`}>{role.icon}</span>
                  <span className="role-text">
                    <strong>{role.name}</strong>
                    <small>{role.description}</small>
                  </span>
                  <span className="radio-dot" aria-hidden="true" />
                </button>
              );
            })}
          </div>
          <button className="continue-button" type="button" onClick={() => setContinued(true)}>
            Continue as {selected.name}&nbsp;&nbsp; →
          </button>
          {continued ? (
            <p className="success-message" role="status">
              Your {selected.name.toLowerCase()} demo space is ready.
            </p>
          ) : (
            <div className="form-note">
              <p>This is a demo role selector, not a secure sign-in.</p>
              <p>No personal account or school data is connected.</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default function App() {
  const [screen, setScreen] = useState<"landing" | "roles">("landing");

  return screen === "landing" ? (
    <LandingPage openRoles={() => setScreen("roles")} />
  ) : (
    <RoleSelection goHome={() => setScreen("landing")} />
  );
}
