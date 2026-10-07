export default function Home() {
  return (
    <>
      <div className="top-bar">
        <a
          className="location-link"
          href="https://www.google.com/maps/search/?api=1&query=Kings+Langley"
          target="_blank"
          rel="noreferrer"
          aria-label="View Doggy Splash Club location in Kings Langley"
        >
          <svg
            className="location-icon"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 21s7-5.4 7-12a7 7 0 1 0-14 0c0 6.6 7 12 7 12Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 12.25a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Kings Langley</span>
        </a>
        <button className="top-book-button" type="button">
          Book Now
        </button>
      </div>

      <header className="site-header" aria-label="Main navigation">
        <a className="brand" href="/" aria-label="Doggy Splash Club home">
          <span className="brand-mark" aria-hidden="true">
            DSC
          </span>
          <span>Doggy Splash Club</span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#sessions">Sessions</a>
          <a href="#safety">Safety</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Safe, supervised dog swims</p>
            <h1>A clean, friendly pool built for happy dogs.</h1>
            <p className="hero-text">
              Private swimming sessions for dogs who love water, need gentle exercise,
              or are taking their first splash with patient support.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Ask about booking
              </a>
              <a className="button button-secondary" href="#sessions">
                View sessions
              </a>
            </div>
          </div>
          <div className="hero-image" aria-label="A happy dog swimming in a clean pool" />
        </section>

        <section className="intro" aria-label="Why visit Doggy Splash Club">
          <div>
            <span className="stat">1:1</span>
            <p>Private sessions available for nervous, young, or first-time swimmers.</p>
          </div>
          <div>
            <span className="stat">Warm</span>
            <p>A calm indoor space designed around comfort, cleanliness, and confidence.</p>
          </div>
          <div>
            <span className="stat">Easy</span>
            <p>Simple enquiry process, clear guidance, and support before your visit.</p>
          </div>
        </section>

        <section className="section" id="sessions">
          <div className="section-heading">
            <p className="eyebrow">Sessions</p>
            <h2>Start simple, then build confidence.</h2>
          </div>
          <div className="session-grid">
            <article className="session-card">
              <h3>Intro Swim</h3>
              <p>A slow first session for dogs who are new to swimming or unsure around water.</p>
            </article>
            <article className="session-card">
              <h3>Fun Swim</h3>
              <p>A private swim slot for confident dogs who need exercise, enrichment, and play.</p>
            </article>
            <article className="session-card">
              <h3>Gentle Exercise</h3>
              <p>Low-impact swimming for older dogs or dogs who benefit from calm movement.</p>
            </article>
          </div>
        </section>

        <section className="split-section" id="safety">
          <div>
            <p className="eyebrow">Safety first</p>
            <h2>Clear rules make the pool better for every dog.</h2>
          </div>
          <ul className="check-list">
            <li>Pre-session questions help match each dog to the right swim.</li>
            <li>Life jackets and gentle handling can be used when helpful.</li>
            <li>Vaccination, health, and behaviour requirements are confirmed before booking.</li>
            <li>Reactive or anxious dogs can be discussed before visiting.</li>
          </ul>
        </section>

        <section className="contact-band" id="contact">
          <div>
            <p className="eyebrow">Now taking enquiries</p>
            <h2>Ready to plan your dog&apos;s first swim?</h2>
            <p>
              Send a few details about your dog and preferred dates. We will reply with
              availability and what to bring.
            </p>
          </div>
          <a className="button button-primary" href="mailto:hello@doggysplashclub.co.uk">
            Email us
          </a>
        </section>
      </main>
    </>
  );
}
