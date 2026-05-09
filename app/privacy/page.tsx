import type { Metadata } from "next";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle";

export const metadata: Metadata = {
  title: "Privacy Policy — Dallyst",
  description: "How Dallyst collects, uses, and protects your information.",
};

export default function PrivacyPage() {
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
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-date">Last updated: March 19, 2025</p>
        </div>
      </header>

      <main className="legal-main">
        <div className="container">
          <div className="legal-body">
            <p className="legal-lead">
              This Privacy Policy describes how Dallyst (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects,
              uses, and protects your information when you use the Dallyst mobile application.
            </p>

            <section className="legal-section">
              <div className="legal-section-num">01</div>
              <h2>Information We Collect</h2>
              <p>We collect the following information when you use Dallyst:</p>
              <ul>
                <li><strong>Account information:</strong> your email address and display name when you register or sign in via Google.</li>
                <li><strong>Profile data:</strong> the avatar icon you select within the app.</li>
                <li><strong>List data:</strong> the lists you create, items within those lists, and their completion status.</li>
                <li><strong>Collaboration data:</strong> the email addresses of people you invite to shared lists, and your membership in lists owned by others.</li>
                <li><strong>Push notification token:</strong> used to send you in-app notifications (e.g., list invitations).</li>
              </ul>
            </section>

            <section className="legal-section">
              <div className="legal-section-num">02</div>
              <h2>How We Use Your Information</h2>
              <p>We use the information collected solely to provide and improve the Dallyst service:</p>
              <ul>
                <li>To authenticate your identity and maintain your session.</li>
                <li>To store and synchronize your lists across devices in real time.</li>
                <li>To enable sharing lists with other users via email invitation.</li>
                <li>To send push notifications related to list activity.</li>
                <li>To monitor app stability and diagnose errors (via Sentry).</li>
              </ul>
            </section>

            <section className="legal-section">
              <div className="legal-section-num">03</div>
              <h2>Data Storage</h2>
              <p>
                Your data is stored securely in Google Firebase (Firestore), a cloud database service
                provided by Google LLC. Data is stored in servers located in the United States. Firebase
                applies industry-standard security measures including encryption in transit (TLS) and at rest.
              </p>
            </section>

            <section className="legal-section">
              <div className="legal-section-num">04</div>
              <h2>Data Sharing</h2>
              <p>We do not sell, rent, or share your personal data with third parties for marketing purposes. Your data may be shared with:</p>
              <ul>
                <li><strong>Other Dallyst users:</strong> when you share a list, other members can see the list name, items, and your display name.</li>
                <li><strong>Google Firebase:</strong> for data storage and authentication.</li>
                <li><strong>Sentry:</strong> for error monitoring. Sentry may receive anonymized technical data about crashes.</li>
                <li><strong>RevenueCat:</strong> for managing in-app purchases, if applicable.</li>
              </ul>
            </section>

            <section className="legal-section">
              <div className="legal-section-num">05</div>
              <h2>Data Retention</h2>
              <p>
                Your data is retained for as long as your account is active. If you delete your account,
                your personal data will be removed from our systems within 30 days, except where retention
                is required by law.
              </p>
            </section>

            <section className="legal-section">
              <div className="legal-section-num">06</div>
              <h2>Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access the personal data we hold about you.</li>
                <li>Request correction of inaccurate data.</li>
                <li>Request deletion of your account and associated data.</li>
                <li>Withdraw consent for notifications at any time through your device settings.</li>
              </ul>
              <p>
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:martinkutzner.dev@gmail.com">martinkutzner.dev@gmail.com</a>.
              </p>
            </section>

            <section className="legal-section">
              <div className="legal-section-num">07</div>
              <h2>Children&apos;s Privacy</h2>
              <p>
                Dallyst is not directed at children under the age of 13. We do not knowingly collect
                personal information from children. If you believe a child has provided us with personal
                data, please contact us and we will delete it promptly.
              </p>
            </section>

            <section className="legal-section">
              <div className="legal-section-num">08</div>
              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of significant
                changes by updating the date at the top of this page. Continued use of the app after
                changes constitutes acceptance of the revised policy.
              </p>
            </section>

            <section className="legal-section">
              <div className="legal-section-num">09</div>
              <h2>Contact</h2>
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
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
