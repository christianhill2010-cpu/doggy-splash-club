import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Pricing | Doggy Splash Club",
  description:
    "View prices for private dog swimming and private secure walking at The Doggy Splash Club in Kings Langley.",
};

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="booking-intro">
          <p className="eyebrow">Pricing</p>
          <h1>Private. Secure. Happy dogs.</h1>
          <p>Choose a private swimming session or time to explore our secure walking space.</p>
        </section>

        <section className="pricing-grid" aria-label="Session prices">
          <article className="session-card pricing-card">
            <p className="eyebrow">Private swimming · Per dog</p>
            <h2>Make a splash</h2>
            <dl className="price-list">
              <div>
                <dt>30 minutes</dt>
                <dd>Mon–Fri <strong>£20</strong></dd>
                <dd>Weekends &amp; Bank Holidays <strong>£30</strong></dd>
              </div>
              <div>
                <dt>45 minutes</dt>
                <dd>Mon–Fri <strong>£30</strong></dd>
                <dd>Weekends &amp; Bank Holidays <strong>£35</strong></dd>
              </div>
            </dl>
            <p>Additional dogs: <strong>£7 each</strong></p>
            <p>Up to 4 dogs per session.</p>
            <a className="button button-primary" href="/book">Book a swim</a>
          </article>

          <article className="session-card pricing-card">
            <p className="eyebrow">Private secure walking</p>
            <h2>Room to explore</h2>
            <dl className="price-list">
              <div>
                <dt>1 hour</dt>
                <dd>Weekdays <strong>£12</strong></dd>
                <dd>Weekends <strong>£16</strong></dd>
              </div>
            </dl>
            <p>Up to 4 dogs per session.</p>
            <a className="button button-secondary" href="mailto:hello@thedoggysplashclub.co.uk?subject=Private%20secure%20walking%20enquiry">Enquire about walking</a>
          </article>
        </section>

        <section className="contact-band">
          <div>
            <p className="eyebrow">More happy visits</p>
            <h2>Planning regular sessions?</h2>
            <p>Please enquire about bulk purchasing of sessions.</p>
          </div>
          <a className="button button-primary" href="mailto:hello@thedoggysplashclub.co.uk?subject=Bulk%20session%20enquiry">Enquire about bulk sessions</a>
        </section>
      </main>
    </>
  );
}
