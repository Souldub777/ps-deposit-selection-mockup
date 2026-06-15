import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Peter Sage — Deposit Onboarding",
  description:
    "Enter the email you used for your deposit to book your onboarding call."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
