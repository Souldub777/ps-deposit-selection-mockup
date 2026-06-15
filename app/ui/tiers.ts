export type TierSlug =
  | "initiate"
  | "initiate-resit"
  | "master"
  | "master-resit"
  | "council";

export const tierCards: Array<{
  slug: TierSlug;
  name: string;
  kicker: string;
  summary: string;
  detail: string;
}> = [
  {
    slug: "initiate",
    name: "Initiate",
    kicker: "Level one",
    summary: "Begin the enrollment path and confirm your first onboarding steps.",
    detail: "A focused first call to confirm your details and prepare the opening sequence."
  },
  {
    slug: "initiate-resit",
    name: "Initiate Resit",
    kicker: "Level one",
    summary: "Begin the enrollment path and confirm your first onboarding steps.",
    detail: "A focused first call to confirm your details and prepare the opening sequence."
  },
  {
    slug: "master",
    name: "Master",
    kicker: "Level two",
    summary: "Continue into a deeper onboarding call for the Master pathway.",
    detail: "A guided call for mapping your next phase and confirming the Master path."
  },
  {
    slug: "master-resit",
    name: "Master Resit",
    kicker: "Level two",
    summary: "Continue into a deeper onboarding call for the Master pathway.",
    detail: "A guided call for mapping your next phase and confirming the Master path."
  },
  {
    slug: "council",
    name: "Council",
    kicker: "Level three",
    summary: "Book the higher-touch onboarding placeholder for Council members.",
    detail: "A private onboarding placeholder for the Council experience and next steps."
  }
];

export const tiersBySlug = Object.fromEntries(
  tierCards.map((tier) => [tier.slug, tier])
) as Record<TierSlug, (typeof tierCards)[number]>;

export function isTierSlug(value: string): value is TierSlug {
  return (
    value === "initiate" ||
    value === "initiate-resit" ||
    value === "master" ||
    value === "master-resit" ||
    value === "council"
  );
}
