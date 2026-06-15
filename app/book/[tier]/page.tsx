import Link from "next/link";
import { notFound } from "next/navigation";
import { isTierSlug, tiersBySlug } from "../../ui/tiers";

// TODO: Swap these placeholders with the real booking URLs from Björn before going live.
// Until then, the "Book your onboarding call" button points at placeholder hrefs.
const BOOKING_URLS: Record<"initiate" | "master" | "council", string> = {
  initiate: "PLACEHOLDER_INITIATE_URL",
  master: "PLACEHOLDER_MASTER_URL",
  council: "PLACEHOLDER_COUNCIL_URL",
};

type PageProps = {
  params: Promise<{
    tier: string;
  }>;
};

export default async function BookingPage({ params }: PageProps) {
  const { tier: tierSlug } = await params;

  if (!isTierSlug(tierSlug)) {
    notFound();
  }

  const tier = tiersBySlug[tierSlug];
  const bookingUrl = BOOKING_URLS[tierSlug];

  return (
    <main className="shell">
      <section className="hero">
        <div className="brandMark">Peter Sage</div>
        <div className="bookingLayout">
          <div className="panel bookingPanel">
            <p className="eyebrow">{tier.kicker}</p>
            <h1>Your {tier.name} Onboarding Call</h1>
            <p className="lede">
              To complete your enrollment, please book your onboarding call.
              This call allows the team to confirm your details and guide you
              into the next step.
            </p>
            <a
              className="primaryButton"
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book your onboarding call
            </a>
          </div>
          <aside className="callPreview" aria-label={`${tier.name} call preview`}>
            <span className="tierKicker">{tier.kicker}</span>
            <strong>{tier.name}</strong>
            <p>{tier.detail}</p>
            <div className="previewLine" />
            <div className="previewMeta">
              <span>Onboarding</span>
              <span>Private call</span>
            </div>
          </aside>
        </div>
        <Link className="subtleLink" href="/select">
          Choose a different level
        </Link>
      </section>
    </main>
  );
}
