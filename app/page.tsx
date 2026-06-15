import { EmailRouterForm } from "./ui/email-router-form";

export default function Home() {
  return (
    <main className="shell">
      <section className="hero heroCenter">
        <div className="brandMark">Peter Sage</div>
        <div className="panel entryPanel">
          <p className="eyebrow">Deposit onboarding</p>
          <h1>Complete Your Enrollment</h1>
          <p className="lede">
            Enter the email address you used for your deposit and we&apos;ll
            guide you to the correct onboarding call.
          </p>
          <EmailRouterForm />
        </div>
      </section>
    </main>
  );
}
