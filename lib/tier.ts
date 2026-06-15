export type Tier =
  | "initiate"
  | "initiate-resit"
  | "master"
  | "master-resit"
  | "council";

const TIER_LOOKUP_BASE_URL =
  process.env.NEXT_PUBLIC_TIER_LOOKUP_URL ??
  "https://buhbkxyqgahbajvvehzt.supabase.co/functions/v1/ghl-proxy";

function isTier(value: unknown): value is Tier {
  return (
    value === "initiate" ||
    value === "initiate-resit" ||
    value === "master" ||
    value === "master-resit" ||
    value === "council"
  );
}

export async function tierFromEmail(email: string): Promise<Tier | null> {
  const normalized = email.trim().toLowerCase();
  if (!normalized) return null;

  const url = `${TIER_LOOKUP_BASE_URL}?action=tier_lookup_by_email&email=${encodeURIComponent(
    normalized,
  )}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { Accept: "application/json" },
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(
        `[tierFromEmail] lookup failed: HTTP ${response.status} for ${normalized}`,
      );
      return null;
    }

    const data = (await response.json()) as { tier?: unknown };
    return isTier(data?.tier) ? data.tier : null;
  } catch (error) {
    console.error("[tierFromEmail] network error:", error);
    return null;
  }
}
