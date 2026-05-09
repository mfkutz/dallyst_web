import type { Metadata } from "next";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle";

export const metadata: Metadata = {
  title: "Delete Account — Dallyst",
  description: "How to permanently delete your Dallyst account and all associated data.",
};

export default function DeleteAccountPage() {
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
          <div className="legal-tag">Account</div>
          <h1 className="legal-title">Delete Account</h1>
          <p className="legal-date">Dallyst — Shared Lists &amp; Tasks</p>
        </div>
      </header>

      <main className="legal-main">
        <div className="container">
          <div className="legal-body">
            <p className="legal-lead">
              You can permanently delete your Dallyst account and all associated data directly
              from within the app. This action is immediate and cannot be undone.
            </p>

            <section className="legal-section">
              <div className="legal-section-num">How to</div>
              <h2>Delete Your Account</h2>
              <ol className="legal-steps">
                <li>Open the Dallyst app on your device.</li>
                <li>Tap the <strong>Profile</strong> tab at the bottom of the screen.</li>
                <li>Scroll down to the <strong>Danger Zone</strong> section.</li>
                <li>Tap <strong>Delete Account</strong>.</li>
                <li>Confirm the action in the dialog that appears.</li>
              </ol>
              <p>
                Your account will be deleted immediately. You may be asked to sign in again before
                the deletion is processed, as required by Firebase for security purposes.
              </p>
            </section>

            <section className="legal-section">
              <div className="legal-section-num">Data</div>
              <h2>What Gets Deleted</h2>
              <ul>
                <li>Your Firebase authentication account (email, display name, sign-in methods)</li>
                <li>All lists you created and all items within those lists</li>
                <li>Your activity history and smart suggestions data</li>
                <li>Your push notification token</li>
                <li>Your avatar preference and profile settings</li>
              </ul>
            </section>

            <section className="legal-section">
              <div className="legal-section-num">Retained</div>
              <h2>What Is Retained</h2>
              <ul>
                <li>Lists shared with other users remain accessible to those users, but your authorship is anonymized</li>
                <li>Subscription records are retained by RevenueCat as required for billing and refund purposes</li>
              </ul>

              <div className="legal-warning">
                <p>
                  ⚠️ Account deletion is permanent and cannot be undone. If you have an active
                  subscription, cancel it through Google Play before deleting your account to avoid
                  future charges.
                </p>
              </div>
            </section>

            <section className="legal-section">
              <div className="legal-section-num">Contact</div>
              <h2>Questions?</h2>
              <p>
                This page is provided by <strong>MK Nova Labs</strong>, developer of{" "}
                <strong>Dallyst — Shared Lists &amp; Tasks</strong> on Google Play.
              </p>
              <div className="legal-contact-card">
                <p><strong>MK Nova Labs</strong></p>
                <p>
                  <a href="mailto:martinkutzner.dev@gmail.com">martinkutzner.dev@gmail.com</a>
                </p>
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
