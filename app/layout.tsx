import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deposit Onboarding Router",
  description: "Local prototype for deposit onboarding routing"
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
