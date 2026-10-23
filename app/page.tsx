import SiteHeader from "./components/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Private swimming &amp; secure walking</p>
            <h1>A private dog swimming pool. A private, secure dog walking field.</h1>
            <p className="hero-text">
              Make a splash in our private dog swimming pool or enjoy time to
              sniff and explore in our private, secure dog walking field in Kings
              Langley. Two ways to keep your dogs active and happy.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Ask about booking
              </a>
              <a className="button button-secondary" href="/dog-walking">
                Explore the walking field
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
            <span className="stat">Private &amp; secure</span>
            <p>
              Around 1.5 acres with a fully secured perimeter and private car
              parking for up to 2 vehicles. One-hour walking sessions for up to 4 dogs.
            </p>
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
            <h2>Ready to plan your dog&apos;s next swim or walk?</h2>
            <p>
              Tell us whether you would like a swim or a walking field session, along
              with a few details about your dog and preferred dates. We will reply with
              availability and what to bring.
            </p>
          </div>
          <a className="button button-primary" href="mailto:hello@thedoggysplashclub.co.uk">
            Email us
          </a>
        </section>
      </main>
    </>
  );
}
