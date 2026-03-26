import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lomurro Law - Western Pennsylvania Personal Injury & Criminal Defense Attorneys',
  description: 'Experienced legal representation in personal injury, medical malpractice, criminal defense, and more. Serving Western Pennsylvania.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: "'Lato', sans-serif", color: '#2C2C2C' }}>
        <div style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: '#FFFFFF', borderBottom: '1px solid #E5E5E5' }}>
          <div style={{ backgroundColor: '#2C2C2C', padding: '8px 0', textAlign: 'center' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
              <div style={{ color: '#FFFFFF', fontSize: '13px', fontWeight: 300 }}>
                WE SUPPORT AND SERVE THE LEGAL NEEDS OF INJURED WORKERS
              </div>
              <a href="tel:7248348046" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '14px', fontWeight: 700 }}>
                CALL (724) 834-8046
              </a>
            </div>
          </div>
          
          <nav style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
            <a href="/" style={{ textDecoration: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '50px', height: '50px', backgroundColor: '#8B1538', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel', serif", color: '#FFFFFF', fontSize: '24px', fontWeight: 700 }}>
                  L
                </div>
                <div>
                  <div style={{ fontFamily: "'Cinzel', serif", fontSize: '24px', fontWeight: 700, color: '#2C2C2C', letterSpacing: '2px' }}>
                    LOMURRO LAW
                  </div>
                </div>
              </div>
            </a>
            
            <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
              <a href="/" style={{ color: '#2C2C2C', textDecoration: 'none', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', transition: 'color 0.3s' }}>
                HOME
              </a>
              <a href="/attorneys" style={{ color: '#2C2C2C', textDecoration: 'none', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', transition: 'color 0.3s' }}>
                ATTORNEYS
              </a>
              <a href="/practice-areas" style={{ color: '#2C2C2C', textDecoration: 'none', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', transition: 'color 0.3s' }}>
                PRACTICE AREAS
              </a>
              <a href="/case-results" style={{ color: '#2C2C2C', textDecoration: 'none', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', transition: 'color 0.3s' }}>
                CASE RESULTS
              </a>
              <a href="/blog" style={{ color: '#2C2C2C', textDecoration: 'none', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', transition: 'color 0.3s' }}>
                BLOG
              </a>
              <a href="/contact" style={{ color: '#2C2C2C', textDecoration: 'none', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', transition: 'color 0.3s' }}>
                CONTACT
              </a>
            </div>
          </nav>
        </div>

        <main>
          {children}
        </main>

        <footer style={{ backgroundColor: '#2C2C2C', color: '#FFFFFF', padding: '60px 0 0 0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', marginBottom: '60px' }}>
              <div>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '14px', fontWeight: 700, marginBottom: '20px', letterSpacing: '1px', color: '#FFFFFF' }}>
                  PERSONAL INJURY
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '10px' }}>
                    <a href="/practice-areas/personal-injury" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '13px', fontWeight: 300 }}>
                      Auto Accidents
                    </a>
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <a href="/practice-areas/personal-injury" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '13px', fontWeight: 300 }}>
                      Slip and Fall
                    </a>
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <a href="/practice-areas/personal-injury" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '13px', fontWeight: 300 }}>
                      Wrongful Death
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '14px', fontWeight: 700, marginBottom: '20px', letterSpacing: '1px', color: '#FFFFFF' }}>
                  MEDICAL MALPRACTICE
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '10px' }}>
                    <a href="/practice-areas/medical-malpractice" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '13px', fontWeight: 300 }}>
                      Surgical Errors
                    </a>
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <a href="/practice-areas/medical-malpractice" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '13px', fontWeight: 300 }}>
                      Misdiagnosis
                    </a>
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <a href="/practice-areas/medical-malpractice" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '13px', fontWeight: 300 }}>
                      Birth Injuries
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '14px', fontWeight: 700, marginBottom: '20px', letterSpacing: '1px', color: '#FFFFFF' }}>
                  WORKERS COMPENSATION
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '10px' }}>
                    <a href="/practice-areas/workers-compensation" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '13px', fontWeight: 300 }}>
                      Workplace Injuries
                    </a>
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <a href="/practice-areas/workers-compensation" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '13px', fontWeight: 300 }}>
                      Occupational Diseases
                    </a>
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <a href="/practice-areas/workers-compensation" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '13px', fontWeight: 300 }}>
                      Benefits Claims
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '14px', fontWeight: 700, marginBottom: '20px', letterSpacing: '1px', color: '#FFFFFF' }}>
                  CRIMINAL LAW
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '10px' }}>
                    <a href="/practice-areas/criminal-law" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '13px', fontWeight: 300 }}>
                      DUI Defense
                    </a>
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <a href="/practice-areas/criminal-law" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '13px', fontWeight: 300 }}>
                      Drug Charges
                    </a>
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <a href="/practice-areas/criminal-law" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '13px', fontWeight: 300 }}>
                      Theft Crimes
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', paddingBottom: '60px', borderBottom: '1px solid #444' }}>
              <div>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '14px', fontWeight: 700, marginBottom: '20px', letterSpacing: '1px', color: '#FFFFFF' }}>
                  TRAFFIC LAW
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '10px' }}>
                    <a href="/practice-areas/traffic-law" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '13px', fontWeight: 300 }}>
                      Traffic Violations
                    </a>
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <a href="/practice-areas/traffic-law" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '13px', fontWeight: 300 }}>
                      License Suspension
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '14px', fontWeight: 700, marginBottom: '20px', letterSpacing: '1px', color: '#FFFFFF' }}>
                  FAMILY LAW
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '10px' }}>
                    <a href="/practice-areas/family-law" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '13px', fontWeight: 300 }}>
                      Divorce
                    </a>
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <a href="/practice-areas/family-law" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '13px', fontWeight: 300 }}>
                      Child Custody
                    </a>
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <a href="/practice-areas/family-law" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '13px', fontWeight: 300 }}>
                      Support
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '14px', fontWeight: 700, marginBottom: '20px', letterSpacing: '1px', color: '#FFFFFF' }}>
                  WILLS & ESTATES
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '10px' }}>
                    <a href="/practice-areas/wills-estates" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '13px', fontWeight: 300 }}>
                      Estate Planning
                    </a>
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <a href="/practice-areas/wills-estates" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '13px', fontWeight: 300 }}>
                      Wills & Trusts
                    </a>
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <a href="/practice-areas/wills-estates" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '13px', fontWeight: 300 }}>
                      Probate
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '14px', fontWeight: 700, marginBottom: '20px', letterSpacing: '1px', color: '#FFFFFF' }}>
                  APPELLATE LAW
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '10px' }}>
                    <a href="/practice-areas/appellate-law" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '13px', fontWeight: 300 }}>
                      Appeals
                    </a>
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <a href="/practice-areas/appellate-law" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '13px', fontWeight: 300 }}>
                      Post-Conviction Relief
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div style={{ padding: '40px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '16px', fontWeight: 700, marginBottom: '15px', letterSpacing: '1px', color: '#FFFFFF' }}>
                  CONTACT THE OFFICE
                </h3>
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '5px', color: '#FFFFFF' }}>
                    GENERAL PHONE
                  </div>
                  <a href="tel:7248348046" style={{ color: '#8B1538', textDecoration: 'none', fontSize: '16px', fontWeight: 700 }}>
                    (724) 834-8046
                  </a>
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '5px', color: '#FFFFFF' }}>
                    ADDRESS
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 300, lineHeight: '1.6', color: '#FFFFFF' }}>
                    500 THIRD STREET<br />
                    BEAVER, PA 15009
                  </div>
                </div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '10px', color: '#FFFFFF' }}>
                  OFFICE HOURS
                </div>
                <div style={{ fontSize: '13px', fontWeight: 300, lineHeight: '1.8', color: '#FFFFFF' }}>
                  MON - FRI: 9:00 AM - 5:00 PM<br />
                  SAT - SUN: CLOSED
                </div>
              </div>

              <div>
                <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '15px', textAlign: 'center', color: '#FFFFFF' }}>
                  INFORMATION
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a href="/contact" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '13px', fontWeight: 300, textAlign: 'center' }}>
                    Contact
                  </a>
                  <a href="/privacy-policy" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '13px', fontWeight: 300, textAlign: 'center' }}>
                    Privacy Policy
                  </a>
                </div>
                <div style={{ display: 'flex', gap: '15px', marginTop: '20px', justifyContent: 'center' }}>
                  <a href="#" style={{ color: '#FFFFFF', fontSize: '18px' }}>
                    <span style={{ display: 'inline-block', width: '30px', height: '30px', backgroundColor: '#8B1538', borderRadius: '50%', textAlign: 'center', lineHeight: '30px' }}>f</span>
                  </a>
                  <a href="#" style={{ color: '#FFFFFF', fontSize: '18px' }}>
                    <span style={{ display: 'inline-block', width: '30px', height: '30px', backgroundColor: '#8B1538', borderRadius: '50%', textAlign: 'center', lineHeight: '30px' }}>in</span>
                  </a>
                  <a href="#" style={{ color: '#FFFFFF', fontSize: '18px' }}>
                    <span style={{ display: 'inline-block', width: '30px', height: '30px', backgroundColor: '#8B1538', borderRadius: '50%', textAlign: 'center', lineHeight: '30px' }}>t</span>
                  </a>
                  <a href="#" style={{ color: '#FFFFFF', fontSize: '18px' }}>
                    <span style={{ display: 'inline-block', width: '30px', height: '30px', backgroundColor: '#8B1538', borderRadius: '50%', textAlign: 'center', lineHeight: '30px' }}>y</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: '#8B1538', padding: '20px 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', color: '#FFFFFF', fontSize: '12px', fontWeight: 300, padding: '0 20px' }}>
              © {new Date().getFullYear()} Lomurro Law. All Rights Reserved. | Website Design by Your Agency
            </div>
          </div>
        </footer>

        <a 
          href="tel:7248348046"
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            backgroundColor: '#8B1538',
            color: '#FFFFFF',
            padding: '18px 30px',
            borderRadius: '50px',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 700,
            letterSpacing: '1px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            zIndex: 999,
            transition: 'transform 0.3s, box-shadow 0.3s'
          }}
        >
          📞 CALL NOW
        </a>
      </body>
    </html>
  )
}