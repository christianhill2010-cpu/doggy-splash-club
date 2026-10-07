import type { Metadata } from "next";
import SimplyBookWidget from "../components/SimplyBookWidget";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Book a Swim | Doggy Splash Club",
  description:
    "Book a Doggy Splash Club swimming session for your dog in Kings Langley.",
};

export default function BookPage() {
  return (
    <>
      <SiteHeader />

      <main className="booking-page">
        <section className="booking-intro">
          <p className="eyebrow">Book a swim</p>
          <h1>Choose a session that suits your dog.</h1>
          <p>
            Use the booking panel below to choose a swim, add your dog&apos;s
            details, and request a suitable slot.
          </p>
        </section>

        <section className="booking-widget-section" aria-label="Booking form">
          <SimplyBookWidget />
        </section>
      </main>
    </>
  );
}
