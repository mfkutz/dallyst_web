import type { Metadata } from "next";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle";

export const metadata: Metadata = {
  title: "Terms of Use — Dallyst",
  description: "The terms and conditions governing your use of the Dallyst app.",
};

export default function TermsPage() {
  return (
    <div className="legal-page">
      <nav className="legal-nav-bar">
        <div className="container">
          <div className="legal-nav-inner">
            <Link href="/" className="brand">
              <span className="brand-mark">D</span>
              Dallyst
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <header className="legal-hero">
        <div className="container">
          <Link href="/" className="legal-back">Back to home</Link>
          <div className="legal-tag">Legal</div>
          <h1 className="legal-title">Terms of Use</h1>
          <p className="legal-date">Last updated: March 19, 2025</p>
        </div>
      </header>

      <main className="legal-main">
        <div className="container">
          <div className="legal-body">
            <p className="legal-lead">
              Please read these Terms of Use carefully before using the Dallyst mobile application.
              By downloading or using Dallyst, you agree to be bound by these terms.
            </p>

            <section className="legal-section">
              <div className="legal-section-num">01</div>
              <h2>Acceptance of Terms</h2>
              <p>
                By accessing or using Dallyst, you confirm that you are at least 13 years old and
                agree to these Terms of Use. If you do not agree, do not use the app.
              </p>
            </section>

            <section className="legal-section">
              <div className="legal-section-num">02</div>
              <h2>Description of Service</h2>
              <p>
                Dallyst is a collaborative list application that allows users to create, manage, and
                share lists with other users. Features include real-time synchronization, member
                invitations, and item management.
              </p>
            </section>

            <section className="legal-section">
              <div className="legal-section-num">03</div>
              <h2>User Accounts</h2>
              <p>
                To use Dallyst you must create an account using a valid email address or a Google account.
                You are responsible for:
              </p>
              <ul>
                <li>Maintaining the confidentiality of your account credentials.</li>
                <li>All activity that occurs under your account.</li>
                <li>Notifying us immediately of any unauthorized use of your account.</li>
              </ul>
            </section>

            <section className="legal-section">
              <div className="legal-section-num">04</div>
              <h2>Acceptable Use</h2>
              <p>You agree to use Dallyst only for lawful purposes. You must not:</p>
              <ul>
                <li>Use the service to harass, abuse, or harm other users.</li>
                <li>Attempt to gain unauthorized access to other users&apos; data or lists.</li>
                <li>Use automated tools to access or scrape the service.</li>
                <li>Violate any applicable local, national, or international laws or regulations.</li>
              </ul>
            </section>

            <section className="legal-section">
              <div className="legal-section-num">05</div>
              <h2>User Content</h2>
              <p>
                You retain ownership of the content you create in Dallyst (lists, items, etc.). By using
                the service, you grant us a limited license to store and process that content solely to
                provide the service to you. We do not claim ownership of your data.
              </p>
            </section>

            <section className="legal-section">
              <div className="legal-section-num">06</div>
              <h2>Shared Lists</h2>
              <p>
                When you invite another user to a shared list, that user will have access to view and
                edit the list. You are responsible for who you invite. Any member of a list may delete
                items or the entire list. Use the sharing feature responsibly.
              </p>
            </section>

            <section className="legal-section">
              <div className="legal-section-num">07</div>
              <h2>Service Availability</h2>
              <p>
                We strive to keep Dallyst available at all times, but we do not guarantee uninterrupted
                or error-free service. We may modify, suspend, or discontinue the service at any time
                without prior notice.
              </p>
            </section>

            <section className="legal-section">
              <div className="legal-section-num">08</div>
              <h2>Disclaimer of Warranties</h2>
              <p>
                Dallyst is provided &quot;as is&quot; without warranties of any kind, either express or implied.
                We do not warrant that the service will be error-free, secure, or available at all times.
              </p>
            </section>

            <section className="legal-section">
              <div className="legal-section-num">09</div>
              <h2>Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Dallyst shall not be liable for any indirect,
                incidental, special, or consequential damages arising from your use of the service,
                including loss of data or loss of profits.
              </p>
            </section>

            <section className="legal-section">
              <div className="legal-section-num">10</div>
              <h2>Changes to Terms</h2>
              <p>
                We may update these Terms of Use at any time. Continued use of the app after changes
                constitutes acceptance of the revised terms. We will update the date at the top of this
                page when changes are made.
              </p>
            </section>

            <section className="legal-section">
              <div className="legal-section-num">11</div>
              <h2>Governing Law</h2>
              <p>
                These terms are governed by the laws of Argentina. Any disputes shall be resolved in
                the courts of Argentina.
              </p>
            </section>

            <section className="legal-section">
              <div className="legal-section-num">12</div>
              <h2>Contact</h2>
              <p>For any questions regarding these Terms of Use, please contact us:</p>
              <div className="legal-contact-card">
                <p><strong>Dallyst</strong></p>
                <p>
                  <a href="mailto:martinkutzner.dev@gmail.com">martinkutzner.dev@gmail.com</a>
                </p>
                <p>Argentina</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="legal-footer-bar">
        <div className="container">
          <div className="legal-footer-inner">
            <span className="legal-footer-copy">© 2026 Dallyst</span>
            <nav className="legal-footer-links">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/delete-account">Delete Account</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
