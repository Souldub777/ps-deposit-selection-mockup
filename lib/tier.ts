export type Tier = "initiate" | "master" | "council";

export function tierFromEmail(email: string): Tier | null {
  const normalized = email.trim().toLowerCase();

  if (normalized.startsWith("i")) return "initiate";
  if (normalized.startsWith("m")) return "master";
  if (normalized.startsWith("c")) return "council";

  return null;
}
