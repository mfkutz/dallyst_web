import ThemeToggle from "./ThemeToggle";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.martinkutzner.cotask";

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3.609 1.814 13.792 12 3.609 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .61-.92zM14.499 12.707l2.692 2.692-11.04 6.246zM20.834 11.013a1 1 0 0 1 0 1.974l-2.566 1.452-3.062-3.063 3.062-3.062zM5.151 2.355l11.04 6.246-2.692 2.692z" />
  </svg>
);

export default function Home() {
  return (
    <>
      {/* Top meta bar */}
      <div className="meta-bar">
        <div className="container meta-bar-inner">
          <span className="mono">
            <span className="meta-dot" />
            v1.7.0 · Android
          </span>
          <div className="meta-right">
            <a href="#features">Features</a>
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
              Download
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Nav */}
        <nav className="nav">
          <a href="/" className="brand">
            <div className="brand-mark">D</div>
            <span>Dallyst</span>
          </a>
          <div className="nav-links">
            <a href="#features">Product</a>
            <a href="#features">Why Dallyst</a>
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
              Download
            </a>
          </div>
          <div className="nav-actions">
            <ThemeToggle />
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Get the app
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </nav>

        {/* Hero */}
        <section className="hero">
          <div className="hero-text">
            <div className="hero-meta mono">
              <span>For Android</span>
              <span className="divider" />
              <span>Built for two or twenty</span>
            </div>
            <h1 className="hero-title">
              Your lists,
              <br />
              <span className="accent">together</span>
              <span className="light">.</span>
            </h1>
            <div className="hero-bottom">
              <p className="hero-desc">
                A calm, collaborative list app for the people you actually live
                with. Share groceries, plan trips, and keep track of what
                matters — in real time.
              </p>
              <div className="cta-stack">
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <PlayIcon />
                  <span className="play-label">
                    <small>GET IT ON</small>
                    <strong>Google Play</strong>
                  </span>
                </a>
                <span className="cta-meta">
                  <span>Free, forever</span>
                  <span className="sep" />
                  <span>No ads</span>
                  <span className="sep" />
                  <span>Premium available</span>
                </span>
              </div>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="phone-stage" aria-hidden="true">
            <div className="phone">
              <div className="phone-screen">
                <div className="phone-notch" />

                <div className="status-bar">
                  <span>9:41</span>
                  <div className="status-icons">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2 22h2v-4H2v4zm4 0h2V14H6v8zm4 0h2v-12h-2v12zm4 0h2V6h-2v16zm4 0h2V2h-2v20z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C17.93 2.93 6.07 2.93 2 9zm8 8l2 2 2-2c-1.1-1.1-2.9-1.1-4 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C16.69 9.31 7.31 9.31 6 13z" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.34C7 21.4 7.6 22 8.33 22h7.34c.74 0 1.33-.59 1.33-1.33V5.33C17 4.6 16.4 4 15.67 4z" />
                    </svg>
                  </div>
                </div>

                <div className="app-header">
                  <div className="h-left">
                    <span className="h-meta">Shared with 3</span>
                    <h2>Groceries</h2>
                  </div>
                  <div className="avatars">
                    <div className="avatar">M</div>
                    <div className="avatar">J</div>
                    <div className="avatar">A</div>
                  </div>
                </div>

                <div className="list-tabs">
                  <div className="list-tab active">Groceries</div>
                  <div className="list-tab">Lisbon trip</div>
                  <div className="list-tab">House</div>
                </div>

                <div className="list-section-label">
                  <span>To buy · 4</span>
                  <span>Today</span>
                </div>

                <div className="list-items">
                  <div className="list-item">
                    <div className="check" />
                    <span className="list-item-text">
                      Olive oil — the good one
                      <small>Mira added a note</small>
                    </span>
                    <span className="list-item-meta you">You</span>
                  </div>
                  <div className="list-item">
                    <div className="check" />
                    <span className="list-item-text">
                      Tomatoes, basil, mozzarella
                    </span>
                    <span className="list-item-meta">Mira</span>
                  </div>
                  <div className="list-item">
                    <div className="check" />
                    <span className="list-item-text">Coffee beans</span>
                    <span className="list-item-meta">Jordan</span>
                  </div>
                  <div className="list-item">
                    <div className="check" />
                    <span className="list-item-text">Lemons (3)</span>
                    <span className="list-item-meta you">You</span>
                  </div>
                  <div className="list-item done">
                    <div className="check done">
                      <CheckIcon />
                    </div>
                    <span className="list-item-text">Sourdough loaf</span>
                    <span className="list-item-meta">Mira</span>
                  </div>
                  <div className="list-item done">
                    <div className="check done">
                      <CheckIcon />
                    </div>
                    <span className="list-item-text">Eggs</span>
                    <span className="list-item-meta">Avi</span>
                  </div>
                </div>

                <div className="add-bar">
                  <div className="plus">+</div>
                  <span>Add an item…</span>
                  <span className="send">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="trust">
          <div className="trust-grid">
            <div className="trust-item">
              <span className="trust-num">
                Real<span className="accent">-time</span>
              </span>
              <span className="trust-label">sync between all members</span>
            </div>
            <div className="trust-item">
              <span className="trust-num">
                6<span className="accent"> langs</span>
              </span>
              <span className="trust-label">
                EN · ES · PT · FR · DE · IT
              </span>
            </div>
            <div className="trust-item">
              <span className="trust-num">
                &lt;120<span className="accent">ms</span>
              </span>
              <span className="trust-label">
                median sync latency between devices
              </span>
            </div>
            <div className="trust-item">
              <span className="trust-num">
                0<span className="accent"> ads</span>
              </span>
              <span className="trust-label">no tracking, no upsells, ever</span>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="features" id="features">
          <div className="section-head">
            <div className="label mono">
              <span>§ 01</span>
              <span
                style={{
                  width: 24,
                  height: 1,
                  background: "var(--border-strong)",
                  display: "inline-block",
                }}
              />
              <span>The essentials</span>
            </div>
            <h2>
              Built around the way real households actually keep track of things{" "}
              <span className="light">
                — quietly, in the background, together.
              </span>
            </h2>
          </div>

          <div className="features-grid">
            <div className="feature">
              <div className="feature-num">01 / Sync</div>
              <div className="feature-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12a9 9 0 0 1-15 6.7L3 21" />
                  <path d="M3 12a9 9 0 0 1 15-6.7L21 3" />
                  <path d="M21 3v6h-6" />
                  <path d="M3 21v-6h6" />
                </svg>
              </div>
              <h3>Real-time sync</h3>
              <p>
                Add, check, and edit items together. Changes appear instantly on
                every device — no refresh, no friction, no conflicts.
              </p>
            </div>
            <div className="feature">
              <div className="feature-num">02 / Share</div>
              <div className="feature-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="9" cy="7" r="4" />
                  <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  <path d="M21 21v-2a4 4 0 0 0-3-3.87" />
                </svg>
              </div>
              <h3>Collaborative lists</h3>
              <p>
                Share any list with a tap. See who added what, who&apos;s still
                shopping, and who finally remembered the milk.
              </p>
            </div>
            <div className="feature">
              <div className="feature-num">03 / Notify</div>
              <div className="feature-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </div>
              <h3>Smart notifications</h3>
              <p>
                Quiet by default. A nudge only when something&apos;s actually
                for you — never for a list you&apos;ve muted or a chore that
                isn&apos;t yours.
              </p>
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="cta-strip">
          <div className="cta-card">
            <div>
              <h2>
                Stop texting
                <br />
                screenshots of lists.{" "}
                <span className="light">Start sharing them.</span>
              </h2>
              <p>
                Free on Google Play. Set up your first shared list in under a
                minute — no account needed for the people you invite.
              </p>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <PlayIcon />
                <span className="play-label">
                  <small>GET IT ON</small>
                  <strong>Google Play</strong>
                </span>
              </a>
            </div>
            <div className="cta-illustration">
              <div className="cta-mini-list">
                <div className="mini-head">
                  Lisbon trip <small>Mira · Avi</small>
                </div>
                <div className="mini-row done">
                  <div className="mini-check done">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="mini-text">Book the apartment</span>
                </div>
                <div className="mini-row done">
                  <div className="mini-check done">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="mini-text">Train tickets</span>
                </div>
                <div className="mini-row">
                  <div className="mini-check" />
                  <span className="mini-text">Sunset reservation</span>
                </div>
                <div className="mini-row">
                  <div className="mini-check" />
                  <span className="mini-text">Pack swimsuits</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="/" className="brand">
                <div className="brand-mark">D</div>
                <span>Dallyst</span>
              </a>
              <p>
                A calm, collaborative list app for the people you live with.
                Made independently. Available now on Google Play.
              </p>
            </div>
            <div className="footer-col">
              <h4>Product</h4>
              <ul>
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <ul>
                <li>
                  <a href="/privacy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms">Terms</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href="mailto:support@dallyst.com">Support</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-base">
            <span className="copyright">© 2026 Dallyst</span>
            <span className="made">Made for Android · Coming to iOS</span>
          </div>
        </footer>
      </div>
    </>
  );
}
