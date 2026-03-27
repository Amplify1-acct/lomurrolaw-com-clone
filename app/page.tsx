/** @jsxImportSource react */
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LoMurro Law | Business & Employment Law Attorney | Rochester, NY',
  description: 'Experienced business and employment law attorney in Rochester, NY. Providing legal counsel for businesses, employers, and executives throughout New York State.',
  openGraph: {
    title: 'LoMurro Law | Business & Employment Law Attorney | Rochester, NY',
    description: 'Experienced business and employment law attorney in Rochester, NY. Providing legal counsel for businesses, employers, and executives throughout New York State.',
    type: 'website',
    url: 'https://www.lomurrolaw.com/'
  },
  alternates: {
    canonical: 'https://www.lomurrolaw.com/'
  }
}

export default function HomePage() {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1a1a1a', lineHeight: '1.6' }}>
      <header style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e5e5e5', position: 'sticky', top: '0', zIndex: '1000' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1a1a1a' }}>
            LoMurro Law
          </div>
          <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="#about" style={{ color: '#1a1a1a', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500' }}>About</a>
            <a href="#services" style={{ color: '#1a1a1a', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500' }}>Services</a>
            <a href="#contact" style={{ color: '#1a1a1a', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500' }}>Contact</a>
          </nav>
        </div>
      </header>

      <section style={{ backgroundColor: '#1a1a1a', color: '#ffffff', padding: '6rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            Business & Employment Law
          </h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 2.5rem', opacity: '0.95', lineHeight: '1.8' }}>
            Experienced legal counsel for businesses, employers, and executives throughout New York State
          </p>
          <a href="#contact" style={{ display: 'inline-block', backgroundColor: '#ffffff', color: '#1a1a1a', padding: '1rem 2.5rem', fontSize: '1rem', fontWeight: '600', textDecoration: 'none', borderRadius: '4px', transition: 'all 0.3s' }}>
            Schedule a Consultation
          </a>
        </div>
      </section>

      <section id="about" style={{ padding: '5rem 2rem', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1a1a1a' }}>
                About LoMurro Law
              </h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#333', lineHeight: '1.8' }}>
                LoMurro Law provides strategic legal counsel to businesses and executives across New York State. With years of experience in business and employment law, we help our clients navigate complex legal challenges with confidence.
              </p>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#333', lineHeight: '1.8' }}>
                Our practice focuses on delivering practical, results-oriented legal solutions tailored to each client's unique needs. We understand that legal issues can impact your business operations and bottom line, which is why we prioritize clear communication and efficient resolution.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#333', lineHeight: '1.8' }}>
                Whether you need assistance with contract negotiations, employment disputes, business formation, or general counsel services, LoMurro Law is committed to protecting your interests and helping your business thrive.
              </p>
            </div>
            <div style={{ backgroundColor: '#f5f5f5', padding: '3rem', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1a1a1a' }}>
                Why Choose LoMurro Law
              </h3>
              <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                <li style={{ marginBottom: '1.25rem', paddingLeft: '1.5rem', position: 'relative', fontSize: '1.05rem', color: '#333' }}>
                  <span style={{ position: 'absolute', left: '0', color: '#1a1a1a', fontWeight: '700' }}>✓</span>
                  Personalized attention to every case
                </li>
                <li style={{ marginBottom: '1.25rem', paddingLeft: '1.5rem', position: 'relative', fontSize: '1.05rem', color: '#333' }}>
                  <span style={{ position: 'absolute', left: '0', color: '#1a1a1a', fontWeight: '700' }}>✓</span>
                  Deep expertise in business and employment law
                </li>
                <li style={{ marginBottom: '1.25rem', paddingLeft: '1.5rem', position: 'relative', fontSize: '1.05rem', color: '#333' }}>
                  <span style={{ position: 'absolute', left: '0', color: '#1a1a1a', fontWeight: '700' }}>✓</span>
                  Practical, cost-effective solutions
                </li>
                <li style={{ marginBottom: '1.25rem', paddingLeft: '1.5rem', position: 'relative', fontSize: '1.05rem', color: '#333' }}>
                  <span style={{ position: 'absolute', left: '0', color: '#1a1a1a', fontWeight: '700' }}>✓</span>
                  Responsive and accessible communication
                </li>
                <li style={{ paddingLeft: '1.5rem', position: 'relative', fontSize: '1.05rem', color: '#333' }}>
                  <span style={{ position: 'absolute', left: '0', color: '#1a1a1a', fontWeight: '700' }}>✓</span>
                  Serving clients throughout New York State
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="services" style={{ padding: '5rem 2rem', backgroundColor: '#f9f9f9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem', color: '#1a1a1a' }}>
              Practice Areas
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#555', maxWidth: '700px', margin: '0 auto' }}>
              Comprehensive legal services for businesses and executives
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            <div style={{ backgroundColor: '#ffffff', padding: '2.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#1a1a1a' }}>
                Business Law
              </h3>
              <p style={{ fontSize: '1rem', color: '#555', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Entity formation, contracts, mergers and acquisitions, corporate governance, and general business counsel.
              </p>
              <ul style={{ listStyle: 'none', padding: '0', margin: '0', fontSize: '0.95rem', color: '#666' }}>
                <li style={{ marginBottom: '0.5rem' }}>• Business formation & structure</li>
                <li style={{ marginBottom: '0.5rem' }}>• Contract drafting & negotiation</li>
                <li style={{ marginBottom: '0.5rem' }}>• Mergers & acquisitions</li>
                <li>• Corporate governance</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#ffffff', padding: '2.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#1a1a1a' }}>
                Employment Law
              </h3>
              <p style={{ fontSize: '1rem', color: '#555', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Employment agreements, workplace policies, discrimination claims, wage and hour disputes, and wrongful termination.
              </p>
              <ul style={{ listStyle: 'none', padding: '0', margin: '0', fontSize: '0.95rem', color: '#666' }}>
                <li style={{ marginBottom: '0.5rem' }}>• Employment contracts</li>
                <li style={{ marginBottom: '0.5rem' }}>• Workplace investigations</li>
                <li style={{ marginBottom: '0.5rem' }}>• Discrimination & harassment</li>
                <li>• Wage & hour compliance</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#ffffff', padding: '2.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#1a1a1a' }}>
                Executive Counsel
              </h3>
              <p style={{ fontSize: '1rem', color: '#555', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Executive compensation, severance negotiations, non-compete agreements, and confidentiality provisions.
              </p>
              <ul style={{ listStyle: 'none', padding: '0', margin: '0', fontSize: '0.95rem', color: '#666' }}>
                <li style={{ marginBottom: '0.5rem' }}>• Executive compensation</li>
                <li style={{ marginBottom: '0.5rem' }}>• Severance negotiations</li>
                <li style={{ marginBottom: '0.5rem' }}>• Non-compete agreements</li>
                <li>• Confidentiality & NDAs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', backgroundColor: '#1a1a1a', color: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '0.5rem' }}>15+</div>
              <div style={{ fontSize: '1.1rem', opacity: '0.9' }}>Years of Experience</div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '0.5rem' }}>500+</div>
              <div style={{ fontSize: '1.1rem', opacity: '0.9' }}>Cases Handled</div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '0.5rem' }}>100%</div>
              <div style={{ fontSize: '1.1rem', opacity: '0.9' }}>Client Focused</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" style={{ padding: '5rem 2rem', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1a1a1a' }}>
                Get in Touch
              </h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#555', lineHeight: '1.8' }}>
                Ready to discuss your legal needs? Contact LoMurro Law today to schedule a consultation. We're here to help you navigate your business and employment law challenges.
              </p>
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: '#1a1a1a' }}>
                  Office Location
                </h3>
                <p style={{ fontSize: '1rem', color: '#555', lineHeight: '1.7' }}>
                  Rochester, New York<br />
                  Serving clients throughout New York State
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: '#1a1a1a' }}>
                  Office Hours
                </h3>
                <p style={{ fontSize: '1rem', color: '#555', lineHeight: '1.7' }}>
                  Monday - Friday: 9:00 AM - 5:00 PM<br />
                  Weekend appointments available by request
                </p>
              </div>
            </div>
            <div style={{ backgroundColor: '#f5f5f5', padding: '2.5rem', borderRadius: '8px' }}>
              <form action="/api/contact" method="POST">
                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.95rem', color: '#1a1a1a' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    style={{ width: '100%', padding: '0.75rem', fontSize: '1rem', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: '#ffffff' }}
                  />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.95rem', color: '#1a1a1a' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    style={{ width: '100%', padding: '0.75rem', fontSize: '1rem', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: '#ffffff' }}
                  />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.95rem', color: '#1a1a1a' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    style={{ width: '100%', padding: '0.75rem', fontSize: '1rem', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: '#ffffff' }}
                  />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.95rem', color: '#1a1a1a' }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    style={{ width: '100%', padding: '0.75rem', fontSize: '1rem', border: '1px solid #ddd', borderRadius: '4px', resize: 'vertical', backgroundColor: '#ffffff' }}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  style={{ width: '100%', backgroundColor: '#1a1a1a', color: '#ffffff', padding: '1rem', fontSize: '1rem', fontWeight: '600', border: 'none', borderRadius: '4px', cursor: 'pointer', transition: 'all 0.3s' }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ backgroundColor: '#1a1a1a', color: '#ffffff', padding: '3rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>
            LoMurro Law
          </div>
          <p style={{ fontSize: '0.95rem', opacity: '0.8', marginBottom: '2rem' }}>
            Business & Employment Law Attorney | Rochester, NY
          </p>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '2rem', fontSize: '0.9rem', opacity: '0.7' }}>
            <p>© 2024 LoMurro Law. All rights reserved.</p>
            <p style={{ marginTop: '0.5rem' }}>
              Attorney Advertising. Prior results do not guarantee a similar outcome.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}