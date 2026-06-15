import Link from "next/link";
import { notFound } from "next/navigation";
import { isTierSlug, tiersBySlug } from "../../ui/tiers";

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
            <button className="primaryButton" type="button">
              Book your onboarding call
            </button>
            <p className="smallNote">Placeholder only - booking link will be added later.</p>
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
