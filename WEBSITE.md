# Website Structure

## Live Site

https://www.thedoggysplashclub.co.uk/

## Current Pages

### Home `/`

The current site is a single-page Next.js site. The homepage contains these sections:

- Hero
- Intro stats
- Sessions: `#sessions`
- Safety: `#safety`
- Contact: `#contact`

### Booking `/book`

Booking page for the SimplyBook.me widget.

- Uses the SimplyBook.me script widget configured in `app/components/SimplyBookWidget.tsx`.
- Booking account URL: `https://thedoggysplashclub.simplybook.it`

## Current Navigation

- Brand/logo: `/`
- Sessions: `#sessions`
- Safety: `#safety`
- Contact: `#contact`
- Header location: Google Maps search for Kings Langley.
- Header email: `mailto:hello@thedoggysplashclub.co.uk`
- Header Book Now button: `/book`

## Current Links and CTAs

- Primary hero CTA: `#contact`
- Secondary hero CTA: `#sessions`
- Email CTA: `mailto:hello@thedoggysplashclub.co.uk`
- Header email CTA: `mailto:hello@thedoggysplashclub.co.uk`
- Header Book Now button: `/book`

## Future Decisions

- Refine the location link when the exact maps/listing URL is ready.
- Confirm the preferred contact email before launch changes.
- Test the booking widget on mobile before launch.
- Add more pages only when the content needs it; the current site can stay single-page for now.

## Change Checklist

- Check all navigation anchors after editing sections.
- Check that external links open the intended destination.
- Run `npm.cmd run build` before pushing to `main`.
