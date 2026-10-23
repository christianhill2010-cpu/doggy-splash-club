import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Private Secure Dog Walking Field | Doggy Splash Club",
  description:
    "Enjoy a private secure dog walking field in Kings Langley. One-hour sessions for up to four dogs, from £12 on weekdays and £16 at weekends.",
};

export default function DogWalkingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="booking-intro">
          <p className="eyebrow">Private. Secure. Happy dogs.</p>
          <h1>Private secure dog walking field.</h1>
          <p>
            Give your dogs time to walk, sniff and explore with a private
            one-hour session at The Doggy Splash Club in Kings Langley.
            Our field is around 1.5 acres, with a fully secured perimeter and
            private car parking for up to 2 vehicles.
          </p>
        </section>

        <section className="pricing-grid" aria-label="Private secure dog walking sessions">
          <article className="session-card pricing-card">
            <p className="eyebrow">Private secure walking</p>
            <h2>An hour to explore</h2>
            <dl className="price-list">
              <div>
                <dt>1 hour</dt>
                <dd>Weekdays <strong>£12</strong></dd>
                <dd>Weekends <strong>£16</strong></dd>
              </div>
            </dl>
            <p>Up to 4 dogs per session.</p>
            <a className="button button-primary" href="mailto:hello@thedoggysplashclub.co.uk?subject=Private%20secure%20dog%20walking%20field%20enquiry">
              Enquire about a session
            </a>
          </article>

          <article className="session-card pricing-card">
            <p className="eyebrow">Plan your visit</p>
            <h2>Time for your dogs</h2>
            <ul className="check-list">
              <li>Around 1.5 acres to walk, sniff and explore.</li>
              <li>A fully secured perimeter.</li>
              <li>Private car parking for up to 2 vehicles.</li>
            </ul>
            <p>
              Contact us with your preferred date, time and number of dogs to
              enquire about availability for the private secure walking field.
            </p>
            <a className="button button-secondary" href="/pricing">View all prices</a>
          </article>
        </section>

        <section className="contact-band">
          <div>
            <p className="eyebrow">Regular walks</p>
            <h2>Make time for more adventures.</h2>
            <p>Please enquire about bulk purchasing of sessions.</p>
          </div>
          <a className="button button-primary" href="mailto:hello@thedoggysplashclub.co.uk?subject=Bulk%20walking%20session%20enquiry">
            Enquire about bulk sessions
          </a>
        </section>
      </main>
    </>
  );
}
