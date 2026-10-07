export default function SiteHeader() {
  return (
    <header className="site-header" aria-label="Main navigation">
      <a className="brand" href="/" aria-label="Doggy Splash Club home">
        <span className="brand-mark" aria-hidden="true">
          DSC
        </span>
        <span>Doggy Splash Club</span>
      </a>
      <nav className="nav-links" aria-label="Primary">
        <a href="/#sessions">Sessions</a>
        <a href="/#safety">Safety</a>
        <a href="/#contact">Contact</a>
      </nav>
      <a
        className="header-contact-link header-location"
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
      <a
        className="header-contact-link"
        href="mailto:hello@thedoggysplashclub.co.uk"
        aria-label="Email Doggy Splash Club"
      >
        <svg
          className="contact-icon"
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M4 6h16v12H4V6Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m4 7 8 6 8-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>hello@thedoggysplashclub.co.uk</span>
      </a>
      <a className="header-book-button" href="/book">
        Book Now
      </a>
    </header>
  );
}
