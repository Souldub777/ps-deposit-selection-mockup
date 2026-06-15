import Link from "next/link";

export default function SelectPage() {
  return (
    <main className="shell">
      <section className="hero">
        <div className="brandMark">Peter Sage</div>
        <div className="panel widePanel">
          <p className="eyebrow">Confirm your email</p>
          <h1>Let&apos;s Make Sure We Find Your Deposit</h1>
          <p className="lede">
            Please check that the email address you entered is the same one you
            used for your deposit. If it is correct, reach out to{" "}
            <a className="inlineLink" href="mailto:support@petersage.com">
              support@petersage.com
            </a>{" "}
            and ask them to connect you with the person to talk to. Use the
            subject line <span className="subjectLine">I can not access my enrolment link</span>.
          </p>
          <div className="supportActions">
            <Link className="primaryButton" href="/">
              Try another email
            </Link>
            <a
              className="subtleLink"
              href="mailto:support@petersage.com?subject=I%20can%20not%20access%20my%20enrolment%20link"
            >
              Email support
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
