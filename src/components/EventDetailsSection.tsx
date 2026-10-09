import { Clock, MapPin, CalendarPlus } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import { weddingData } from '../data/weddingData';

const formatCalendarDate = (dateStr: string) =>
  new Date(dateStr).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');

function getGoogleCalendarUrl() {
  const { event, venue, invite } = weddingData;
  const details = `${invite.kicker} — ${invite.line}\n\nVenue: ${venue.name}, ${venue.address}\n\nNote: ${event.note}\n`;
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: `${formatCalendarDate(event.startsAt)}/${formatCalendarDate(event.endsAt)}`,
    details,
    location: `${venue.name}, ${venue.address}`,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function EventDetailsSection() {
  const { event, venue } = weddingData;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-mist-deep to-mist px-5 py-20">

      <RevealOnScroll className="relative mx-auto max-w-md">
        <div className="paper-grain relative rounded-t-[9rem] border border-gold/50 bg-parchment px-7 pt-16 pb-10 text-center shadow-[0_30px_60px_-45px_var(--color-ink)]">
          <div className="pointer-events-none absolute inset-x-3 top-3 bottom-3 rounded-t-[8.4rem] border border-gold/30" />

          <p className="text-[0.62rem] tracking-[0.4em] text-ink/60 uppercase">
            The Engagement
          </p>

          <p className="mt-4 font-display text-4xl tracking-[0.12em] text-gold">
            {event.dateLabel}
          </p>

          <div className="gold-rule mx-auto mt-5 w-28" />

          <ul className="mt-7 space-y-4 text-sm text-ink/80">
            <li className="flex items-center justify-center gap-2">
              <Clock className="size-4 shrink-0 text-gold" aria-hidden="true" />
              <span>
                {event.dayLabel}, {event.timeLabel}
              </span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <MapPin className="size-4 shrink-0 text-gold" aria-hidden="true" />
              <span>
                {venue.name}
                <br />
                <span className="text-ink/60">{venue.address}</span>
              </span>
            </li>
          </ul>

          <p className="mt-6 font-display text-lg italic text-ink/65">
            {event.note}
          </p>

          {event.contact && (
            <div className="mt-3 flex justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-olive/35 bg-olive/10 px-4 py-1 text-[0.68rem] tracking-[0.2em] text-olive-deep uppercase">
                <span>RSVP:</span>
                <a href={`tel:${event.contact}`} className="font-semibold text-royal hover:underline">
                  {event.contact}
                </a>
              </span>
            </div>
          )}

          <div className="relative mt-8 flex justify-center">
            <a
              href={getGoogleCalendarUrl()}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-royal px-8 py-3.5 text-[0.7rem] tracking-[0.24em] text-parchment uppercase shadow-[0_8px_20px_-8px_var(--color-royal-deep)] transition-transform duration-200 hover:bg-royal/90 active:scale-95"
            >
              <CalendarPlus className="size-4 transition-transform group-hover:rotate-6" />
              Add to calendar
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
