import Image from 'next/image';
import BookingExperience from '@/components/BookingExperience';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <Link
              href="/"
              className="logo"
              aria-label="MSP Photography — South Sydney"
            >
              <Image
                src="/MSP Logo - Full Colour - Long Version.png"
                alt="MSP Photography — South Sydney"
                width={280}
                height={40}
                priority
                style={{ height: 40, width: 'auto', objectFit: 'contain' }}
              />
            </Link>
            <a href="#calendar" className="header-cta">
              Book Your Session
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-pattern"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-left fade-in-up">
              <div className="hero-badge">✨ Complimentary 2-Hour Session</div>
              <h1 className="hero-title">
                Promotional Photoshoot for Your School —{' '}
                <strong>Book in Minutes</strong>
              </h1>
              <p className="hero-subtitle">
                From leadership portraits to campus life, capture your
                school&apos;s story with a professional on-site shoot. Start
                free with 2 hours; extend in flexible 2-hour blocks for $500 as
                needed.
              </p>

              <div className="feature-pills">
                <div className="feature-pill">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                    <circle cx="12" cy="13" r="4"></circle>
                  </svg>
                  Professional Team
                </div>
                <div className="feature-pill">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  Fast Turnaround
                </div>
                <div className="feature-pill">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  Marketing-Ready Images
                </div>
              </div>

              <div
                style={{ display: 'flex', gap: 16, flexWrap: 'wrap' as const }}
              >
                <a className="btn btn-primary btn-circle" href="#calendar">
                  <span>Book Your Session</span>
                </a>
                <a className="btn btn-secondary" href="#calendar">
                  View Availability
                </a>
              </div>
            </div>

            <div className="booking-card">
              <div className="booking-header">
                <h2 className="booking-title">Select Your Package</h2>
                <p className="booking-subtitle">
                  Choose the option that suits your school&apos;s needs
                </p>
              </div>

              <fieldset
                className="package-selector"
                aria-label="Select your session package"
              >
                <div className="package-option">
                  <input
                    type="radio"
                    id="package-complimentary"
                    name="booking-package"
                    defaultChecked
                  />
                  <label
                    className="package-card"
                    htmlFor="package-complimentary"
                    aria-label="Select the complimentary photoshoot session"
                  >
                    <div className="package-badge">Most Popular</div>
                    <div className="package-header">
                      <h3 className="package-title">Complimentary Session</h3>
                      <p className="package-price">FREE</p>
                    </div>
                    <ul className="package-features">
                      <li>
                        <span className="check"></span>
                        <span>2-hour on-site photoshoot</span>
                      </li>
                      <li>
                        <span className="check"></span>
                        <span>Professional photographer and direction</span>
                      </li>
                      <li>
                        <span className="check"></span>
                        <span>Ideal for marketing and web content</span>
                      </li>
                      <li>
                        <span className="check"></span>
                        <span>Zero cost — included as partnership benefit</span>
                      </li>
                    </ul>
                  </label>
                </div>

                <div className="package-option">
                  <input
                    type="radio"
                    id="package-extended"
                    name="booking-package"
                  />
                  <label
                    className="package-card"
                    htmlFor="package-extended"
                    aria-label="Select the extended photoshoot session"
                  >
                    <div className="package-header">
                      <h3 className="package-title">Extended Session</h3>
                      <p className="package-price">$500/2hrs</p>
                    </div>
                    <ul className="package-features">
                      <li>
                        <span className="check"></span>
                        <span>Add flexible 2-hour blocks</span>
                      </li>
                      <li>
                        <span className="check"></span>
                        <span>Perfect for larger campuses</span>
                      </li>
                      <li>
                        <span className="check"></span>
                        <span>Capture more programs and facilities</span>
                      </li>
                      <li>
                        <span className="check"></span>
                        <span>Secure payment via Stripe</span>
                      </li>
                    </ul>
                  </label>
                </div>
              </fieldset>

              <a className="btn btn-primary btn-full pulse" href="#calendar">
                Book Now — Spots Limited
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Trusted Across South Sydney</p>
            <h2 className="section-title">
              Working with <strong>Leading Schools</strong>
            </h2>
          </div>

          <div className="trust-logos">
            <div className="trust-logo">NSW Department of Education</div>
            <div className="trust-logo">Catholic Schools NSW</div>
            <div className="trust-logo">Independent Schools NSW</div>
          </div>
        </div>
      </section>

      {/* Calendar Section - NEW MSP BRANDED SECTION */}
      <section
        id="calendar"
        className="calendar-section calendar-section--booking"
      >
        <div className="container">
          <div className="calendar-wrapper">
            {/* Booking Experience Component */}
            <BookingExperience />
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Everything You Need to Know</p>
            <h2 className="section-title">
              Simple Process, <strong>Professional Results</strong>
            </h2>
          </div>

          <div className="info-grid">
            <div className="info-card">
              <h3 className="info-card-title">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                What to Expect
              </h3>
              <ul className="info-list">
                <li>
                  <span className="check"></span>
                  <span>Professional photographer arrives on-site</span>
                </li>
                <li>
                  <span className="check"></span>
                  <span>Pre-planned shot list based on your goals</span>
                </li>
                <li>
                  <span className="check"></span>
                  <span>Students, staff, and facilities captured</span>
                </li>
                <li>
                  <span className="check"></span>
                  <span>High-resolution images edited and delivered</span>
                </li>
                <li>
                  <span className="check"></span>
                  <span>Full usage rights for all marketing materials</span>
                </li>
              </ul>
            </div>

            <div className="info-card">
              <h3 className="info-card-title">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                </svg>
                Rescheduling &amp; Next Steps
              </h3>
              <ul className="info-list">
                <li>
                  <span className="check"></span>
                  <span>Wet-weather reschedule at no charge</span>
                </li>
                <li>
                  <span className="check"></span>
                  <span>Flexible booking updates via Zoho</span>
                </li>
                <li>
                  <span className="check"></span>
                  <span>Reminder emails and SMS updates included</span>
                </li>
                <li>
                  <span className="check"></span>
                  <span>Images delivered within 5 business days</span>
                </li>
                <li>
                  <span className="check"></span>
                  <span>
                    Option to book regular sessions throughout the year
                  </span>
                </li>
              </ul>
              <div className="info-note">
                MSP may showcase selected images in our portfolio unless
                otherwise agreed. All usage rights for school marketing are
                included.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-grid">
            <div className="faq-header">
              <h2 className="faq-title">Frequently Asked</h2>
              <p className="faq-subtitle">Don&apos;t see your question?</p>
              <p className="faq-contact">
                Email{' '}
                <a href="mailto:southsydney@msp.com.au">
                  southsydney@msp.com.au
                </a>
                <br />
                or call <a href="tel:+61285992932">(02) 9558 3363</a>
              </p>
            </div>

            <div className="faq-list">
              <div className="faq-item">
                <h4 className="faq-question">
                  What&apos;s included in the complimentary session?
                </h4>
                <p className="faq-answer">
                  A two-hour on-site photoshoot focused on marketing and
                  promotional imagery. Expect direction from our photographer, a
                  shot list aligned to your goals, and delivery via a secure
                  download link.
                </p>
              </div>

              <div className="faq-item">
                <h4 className="faq-question">How do we pay for extra time?</h4>
                <p className="faq-answer">
                  Additional 2-hour blocks are $500 AUD each. Payment is handled
                  securely within the Zoho Bookings checkout via Stripe.
                </p>
              </div>

              <div className="faq-item">
                <h4 className="faq-question">Can we reschedule if it rains?</h4>
                <p className="faq-answer">
                  Yes. Weather happens. Use the reschedule link in your
                  confirmation email or contact us and we&apos;ll move the shoot
                  at no cost.
                </p>
              </div>

              <div className="faq-item">
                <h4 className="faq-question">When do we receive the images?</h4>
                <p className="faq-answer">
                  You&apos;ll receive an edited gallery within five business
                  days. Usage rights cover all school marketing including social
                  media, website, print, and enrolment campaigns.
                </p>
              </div>

              <div className="faq-item">
                <h4 className="faq-question">
                  Do you travel outside South Sydney?
                </h4>
                <p className="faq-answer">
                  Yes, travel within the South Sydney and Illawarra service
                  region is included. For visits outside the region, contact us
                  to confirm availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-pattern"></div>
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Showcase Your School?</h2>
            <p className="cta-subtitle">
              Join hundreds of schools who trust MSP Photography for their
              marketing imagery. Book your complimentary session today.
            </p>
            <a
              className="btn btn-circle"
              style={{ background: 'white', color: 'var(--msp-blue)' }}
              href="#calendar"
            >
              <span>
                <strong>Book Your Session Now</strong>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div>
              <div className="footer-brand">
                <Image
                  src="/MSP Logo - Full Colour - Long Version.png"
                  alt="MSP Photography — South Sydney"
                  width={280}
                  height={40}
                  style={{ height: 40, width: 'auto', objectFit: 'contain' }}
                />
              </div>
              <p className="footer-description">
                Dedicated marketing imagery for schools across South Sydney. We
                help leadership teams showcase campuses, programs, and community
                with ease.
              </p>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.5)',
                }}
              >
                ABN 52 164 157 402 • Office hours 9:00am – 5:00pm AEST
              </p>
            </div>

            <div className="footer-section">
              <h4>Contact</h4>
              <div className="footer-links">
                <a href="tel:+61295583363">(02) 9558 3363</a>
                <a href="mailto:southsydney@msp.com.su">
                  southsydney@msp.com.su
                </a>
                <a
                  href="https://www.msp.com.au/contact/"
                  target="_blank"
                  rel="noreferrer"
                >
                  MSP South Sydney
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h4>Legal</h4>
              <div className="footer-links">
                <a href="https://www.msp.com.au/privacy-policy/">
                  Privacy Policy
                </a>
                <a href="https://www.msp.com.au/msp-terms-conditions/">
                  Terms of Service
                </a>
                <a
                  href="https://www.msp.com.au/privacy-policy/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cookies
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            © 2025 MSP Photography — South Sydney. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Footer */}
      <div className="mobile-footer">
        <a className="btn btn-primary btn-full" href="#calendar">
          Book Your Free Session
        </a>
      </div>
    </main>
  );
}
