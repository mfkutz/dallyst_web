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

                {/* Status bar */}
                <div className="app-status-bar">
                  <span>7:57</span>
                  <div className="app-status-icons">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 18h2v-6H0v6zm4 0h2V9H4v9zm4 0h2V3H8v15zm4 0h2V0h-2v18z"/></svg>
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C17.93 2.93 6.07 2.93 2 9zm8 8l2 2 2-2c-1.1-1.1-2.9-1.1-4 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C16.69 9.31 7.31 9.31 6 13z"/></svg>
                    <svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="7" width="20" height="11" rx="2" ry="2"/><path d="M22 11V13"/></svg>
                  </div>
                </div>

                {/* Top bar: Dallyst + Premium + Bell */}
                <div className="app-top-bar">
                  <div className="app-top-left">
                    <span className="app-name-pill">Dallyst</span>
                    <span className="app-premium-badge">⚡ Premium</span>
                  </div>
                  <div className="app-bell">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                    </svg>
                    <span className="app-bell-badge">2</span>
                  </div>
                </div>

                {/* Greeting + name */}
                <div className="app-hero-bg">
                  <div className="app-greeting">Good evening</div>
                  <div className="app-username-row">
                    <span className="app-username">Alex Johnson</span>
                    <div className="app-gear">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="3"/>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Stats cards */}
                <div className="app-stats">
                  <div className="app-stat-card">
                    <div className="app-stat-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="4" rx="1"/><rect x="2" y="10" width="20" height="4" rx="1"/><rect x="2" y="17" width="20" height="4" rx="1"/>
                      </svg>
                    </div>
                    <div>
                      <div className="app-stat-num">11</div>
                      <div className="app-stat-label">Lists</div>
                    </div>
                  </div>
                  <div className="app-stat-card">
                    <div className="app-stat-icon grey">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </div>
                    <div>
                      <div className="app-stat-num">0</div>
                      <div className="app-stat-label">Invitations</div>
                    </div>
                  </div>
                </div>

                {/* Recent lists */}
                <div className="app-section-title">Recent lists</div>
                <div className="app-list-items">
                  <div className="app-list-item">
                    <div className="app-list-item-top">
                      <div className="app-list-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/></svg>
                      </div>
                      <div className="app-list-info">
                        <div className="app-list-name">Groceries</div>
                        <div className="app-list-sub">2 members · 3 pending</div>
                      </div>
                      <div className="app-list-menu">
                        <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
                      </div>
                    </div>
                    <div className="app-progress-row">
                      <div className="app-progress-bar"><div className="app-progress-fill" style={{width:"55%"}}/></div>
                      <span className="app-progress-count">5/9</span>
                    </div>
                  </div>

                  <div className="app-list-item">
                    <div className="app-list-item-top">
                      <div className="app-list-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                      </div>
                      <div className="app-list-info">
                        <div className="app-list-name">Lisbon trip</div>
                        <div className="app-list-sub">1 member · 4 pending</div>
                      </div>
                      <div className="app-list-menu">
                        <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
                      </div>
                    </div>
                    <div className="app-progress-row">
                      <div className="app-progress-bar"><div className="app-progress-fill" style={{width:"0%"}}/></div>
                      <span className="app-progress-count">0/4</span>
                    </div>
                  </div>

                  <div className="app-list-item">
                    <div className="app-list-item-top">
                      <div className="app-list-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="4" rx="1"/><rect x="2" y="10" width="20" height="4" rx="1"/><rect x="2" y="17" width="20" height="4" rx="1"/></svg>
                      </div>
                      <div className="app-list-info">
                        <div className="app-list-name">Weekly chores</div>
                        <div className="app-list-sub">1 member · 6 pending</div>
                      </div>
                      <div className="app-list-menu">
                        <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
                      </div>
                    </div>
                    <div className="app-progress-row">
                      <div className="app-progress-bar"><div className="app-progress-fill" style={{width:"0%"}}/></div>
                      <span className="app-progress-count">0/6</span>
                    </div>
                  </div>
                </div>

                {/* Bottom nav */}
                <div className="app-bottom-nav">
                  <div className="app-nav-item active">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
                  </div>
                  <div className="app-nav-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div className="app-nav-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  </div>
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
                <li>
                  <a href="/delete-account">Delete Account</a>
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
