import { notFound } from "next/navigation";
import { isTierSlug, tiersBySlug, type TierSlug } from "../../ui/tiers";

// Real booking URLs from Björn 2026-06-15. Each tier maps to its dedicated
// "Deposit Success Calls (Live Challenge)" calendar in GHL.
const BOOKING_URLS: Record<TierSlug, string> = {
  initiate: "https://link.petersage.com/widget/booking/cjC8mZBOO2cWSFNTjUtB",
  "initiate-resit":
    "https://link.petersage.com/widget/booking/HlSplewReiEQiCqwce1e",
  master: "https://link.petersage.com/widget/booking/UO6dxBKGZCuRQQ4jInpc",
  "master-resit":
    "https://link.petersage.com/widget/booking/xPfr2Lgyw16IKfiPlWou",
  council: "https://link.petersage.com/widget/booking/QHYrT3LZVtoZ0YMtYI78",
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
      </section>
    </main>
  );
}
