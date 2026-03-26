/** @jsxImportSource react */
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lomurro Law | Pittsburgh Personal Injury & Medical Malpractice Lawyers',
  description: 'Top-rated Pittsburgh personal injury attorneys with all five Supreme Court certifications. Proven results with millions recovered for clients. Free consultation.',
  openGraph: {
    title: 'Lomurro Law | Pittsburgh Personal Injury & Medical Malpractice Lawyers',
    description: 'Top-rated Pittsburgh personal injury attorneys with all five Supreme Court certifications. Proven results with millions recovered for clients.',
    url: 'https://www.lomurrolaw.com/',
    siteName: 'Lomurro Law',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.lomurrolaw.com/'
  }
}

export default function HomePage() {
  return (
    <div style={{ fontFamily: "'Open Sans', sans-serif", margin: 0, padding: 0, color: '#2c2c2c' }}>
      <header style={{ backgroundColor: '#fff', padding: '15px 0', borderBottom: '1px solid #e0e0e0', position: 'relative', zIndex: 100 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginRight: '30px' }}>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: '24px', fontWeight: 700, color: '#2c2c2c', letterSpacing: '2px' }}>
                LOMURRO LAW
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
            <div style={{ fontSize: '13px', color: '#2c2c2c' }}>
              We welcome calls anytime, including weekends: <strong>(724) 914-8645</strong>
            </div>
          </div>
        </div>
        <nav style={{ backgroundColor: '#f8f8f8', padding: '12px 0', marginTop: '15px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', gap: '35px', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            <a href="/" style={{ color: '#2c2c2c', textDecoration: 'none', fontWeight: 600 }}>HOME</a>
            <a href="/about" style={{ color: '#2c2c2c', textDecoration: 'none' }}>ABOUT US</a>
            <a href="/practice-areas" style={{ color: '#2c2c2c', textDecoration: 'none' }}>PRACTICE AREAS</a>
            <a href="/results" style={{ color: '#2c2c2c', textDecoration: 'none' }}>RESULTS</a>
            <a href="/blog" style={{ color: '#2c2c2c', textDecoration: 'none' }}>BLOG</a>
            <a href="/contact" style={{ color: '#2c2c2c', textDecoration: 'none' }}>CONTACT</a>
          </div>
        </nav>
      </header>

      <section style={{ position: 'relative', height: '600px', backgroundImage: 'url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600)', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}></div>
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', color: '#fff', maxWidth: '900px', padding: '0 20px' }}>
          <h1 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '56px', fontWeight: 700, margin: '0 0 25px 0', lineHeight: '1.2', textTransform: 'uppercase', letterSpacing: '2px' }}>
            ONLY WITH ALL FIVE SUPREME<br />COURT CERTIFICATIONS
          </h1>
          <p style={{ fontSize: '18px', lineHeight: '1.8', margin: '0 0 35px 0', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
            Full Knowledge of the Rules — At All Levels — To Ensure You'll Get the Maximum Recovery For Your Injuries. We handle Personal Injury, Medical Malpractice, Wrongful Death, and more throughout Pennsylvania.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" style={{ backgroundColor: '#8B1538', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontFamily: "'Oswald', sans-serif", fontSize: '16px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-block', transition: 'background-color 0.3s' }}>
              Free Consultation
            </a>
            <a href="/results" style={{ backgroundColor: 'transparent', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontFamily: "'Oswald', sans-serif", fontSize: '16px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-block', border: '2px solid #fff', transition: 'background-color 0.3s' }}>
              View Our Results
            </a>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
          <div style={{ width: '40px', height: '60px', border: '2px solid #fff', borderRadius: '20px', display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
            <div style={{ width: '4px', height: '10px', backgroundColor: '#fff', borderRadius: '2px', animation: 'scroll 2s infinite' }}></div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '42px', fontWeight: 700, color: '#2c2c2c', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '2px' }}>
              Case Results
            </h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: '#8B1538' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '40px' }}>
            <div style={{ border: '1px solid #e0e0e0', padding: '30px', backgroundColor: '#f9f9f9' }}>
              <div style={{ fontSize: '13px', color: '#8B1538', fontWeight: 600, marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                CATASTROPHIC MEDICAL MALPRACTICE DEATH
              </div>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: '36px', fontWeight: 700, color: '#8B1538', marginBottom: '20px' }}>
                $2,500,000
              </div>
              <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#555' }}>
                A 54-year-old man went to the hospital with chest pain. Despite clear warning signs, doctors failed to properly diagnose and treat his condition, leading to his death. The family recovered $2.5 million.
              </p>
            </div>

            <div style={{ border: '1px solid #e0e0e0', padding: '30px', backgroundColor: '#f9f9f9' }}>
              <div style={{ fontSize: '13px', color: '#8B1538', fontWeight: 600, marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                WRONGFUL DEATH OF A CHILD
              </div>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: '36px', fontWeight: 700, color: '#8B1538', marginBottom: '20px' }}>
                $2,300,000
              </div>
              <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#555' }}>
                Medical error during delivery resulted in the wrongful death of a newborn. The hospital and doctors were held accountable for their negligence and the family received compensation.
              </p>
            </div>

            <div style={{ border: '1px solid #e0e0e0', padding: '30px', backgroundColor: '#f9f9f9' }}>
              <div style={{ fontSize: '13px', color: '#8B1538', fontWeight: 600, marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                AUTOMOBILE ACCIDENT WITH BRAIN INJURY
              </div>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: '36px', fontWeight: 700, color: '#8B1538', marginBottom: '20px' }}>
                $1,550,000
              </div>
              <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#555' }}>
                A negligent driver caused a serious accident resulting in permanent brain injury to our client. After extensive litigation, we secured a significant recovery for ongoing medical care.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="/results" style={{ backgroundColor: '#8B1538', color: '#fff', padding: '14px 35px', textDecoration: 'none', fontFamily: "'Oswald', sans-serif", fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-block' }}>
              SEE MORE RESULTS
            </a>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#8B1538', padding: '80px 20px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div style={{ color: '#fff' }}>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '42px', fontWeight: 700, marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '2px' }}>
              Legal Experience To Work For You
            </h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: '#fff', marginBottom: '30px' }}></div>
          </div>
          <div style={{ color: '#fff' }}>
            <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
              At Lomurro Law, we understand that when you've been injured, you need more than just legal representation — you need advocates who truly care about your recovery and your future.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
              Our firm is built on a foundation of trust and results. We've recovered millions for our clients and maintain the highest certifications in Pennsylvania. When you work with us, you're working with a team that has proven success at every level of the court system.
            </p>
          </div>
        </div>
        <div style={{ position: 'absolute', top: 0, right: '-200px', width: '600px', height: '100%', backgroundColor: '#fff', transform: 'skewX(-15deg)' }}></div>
      </section>

      <section style={{ padding: '80px 20px', backgroundColor: '#2c2c2c' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            <div>
              <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '18px', fontWeight: 700, color: '#8B1538', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                PERSONAL INJURY
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#fff', fontSize: '14px', lineHeight: '2' }}>
                <li>Car Accidents</li>
                <li>Truck Accidents</li>
                <li>Motorcycle Accidents</li>
                <li>Slip and Fall</li>
                <li>Dog Bites</li>
              </ul>
            </div>

            <div>
              <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '18px', fontWeight: 700, color: '#8B1538', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                MEDICAL MALPRACTICE
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#fff', fontSize: '14px', lineHeight: '2' }}>
                <li>Surgical Errors</li>
                <li>Birth Injuries</li>
                <li>Misdiagnosis</li>
                <li>Medication Errors</li>
                <li>Hospital Negligence</li>
              </ul>
            </div>

            <div>
              <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '18px', fontWeight: 700, color: '#8B1538', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                WORKERS COMPENSATION
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#fff', fontSize: '14px', lineHeight: '2' }}>
                <li>On-the-job Injuries</li>
                <li>Occupational Diseases</li>
                <li>Denied Claims</li>
                <li>Disability Benefits</li>
                <li>Third-party Claims</li>
              </ul>
            </div>

            <div>
              <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '18px', fontWeight: 700, color: '#8B1538', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                WRONGFUL DEATH
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#fff', fontSize: '14px', lineHeight: '2' }}>
                <li>Medical Malpractice Death</li>
                <li>Fatal Car Accidents</li>
                <li>Workplace Fatalities</li>
                <li>Nursing Home Abuse</li>
                <li>Defective Products</li>
              </ul>
            </div>

            <div>
              <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '18px', fontWeight: 700, color: '#8B1538', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                NURSING HOME ABUSE
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#fff', fontSize: '14px', lineHeight: '2' }}>
                <li>Physical Abuse</li>
                <li>Neglect</li>
                <li>Bed Sores</li>
                <li>Malnutrition</li>
                <li>Medication Errors</li>
              </ul>
            </div>

            <div>
              <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '18px', fontWeight: 700, color: '#8B1538', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                MASS & TOXIC TORTS
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#fff', fontSize: '14px', lineHeight: '2' }}>
                <li>Defective Drugs</li>
                <li>Defective Medical Devices</li>
                <li>Toxic Exposure</li>
                <li>Environmental Hazards</li>
                <li>Consumer Products</li>
              </ul>
            </div>

            <div>
              <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '18px', fontWeight: 700, color: '#8B1538', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                BRAIN & SPINAL INJURY
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#fff', fontSize: '14px', lineHeight: '2' }}>
                <li>Traumatic Brain Injury</li>
                <li>Spinal Cord Injury</li>
                <li>Paralysis</li>
                <li>Catastrophic Injuries</li>
                <li>Permanent Disability</li>
              </ul>
            </div>

            <div>
              <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '18px', fontWeight: 700, color: '#8B1538', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                COMMERCIAL LITIGATION
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#fff', fontSize: '14px', lineHeight: '2' }}>
                <li>Business Disputes</li>
                <li>Contract Disputes</li>
                <li>Partnership Disputes</li>
                <li>Breach of Fiduciary Duty</li>
                <li>Fraud Claims</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '13px', color: '#8B1538', fontWeight: 600, marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                LOMURRO LAW BOOK | COMING SOON
              </div>
              <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '42px', fontWeight: 700, color: '#2c2c2c', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '2px' }}>
                What Sets Lomurro Law Apart
              </h2>
              <div style={{ width: '80px', height: '4px', backgroundColor: '#8B1538', marginBottom: '30px' }}></div>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                Attorney Arthur Lomurro is one of only a handful of attorneys in Pennsylvania who holds all five Supreme Court certifications. This distinction means he has demonstrated the highest level of knowledge and expertise in civil trial practice, including:
              </p>
              <ul style={{ fontSize: '16px', lineHeight: '1.8', color: '#555', paddingLeft: '20px' }}>
                <li>Civil Trial Advocacy</li>
                <li>Medical Malpractice</li>
                <li>Workers' Compensation</li>
                <li>Elder Law</li>
                <li>Pennsylvania Supreme Court Certification</li>
              </ul>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555', marginTop: '20px' }}>
                This comprehensive knowledge allows us to handle complex cases that other firms might not take on, and to achieve results that exceed our clients' expectations.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ backgroundColor: '#2c2c2c', padding: '40px', display: 'inline-block', position: 'relative' }}>
                <div style={{ width: '300px', height: '400px', backgroundColor: '#8B1538', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <div style={{ textAlign: 'center', padding: '40px' }}>
                    <div style={{ fontSize: '72px', marginBottom: '20px' }}>▶</div>
                    <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: '28px', fontWeight: 700, marginBottom: '15px', textTransform: 'uppercase' }}>
                      Medical<br />Malpractice<br />Law
                    </div>
                    <div style={{ fontSize: '18px', marginBottom: '10px' }}>By Arthur Lomurro</div>
                    <div style={{ fontSize: '14px', opacity: 0.8 }}>Coming Soon</div>
                  </div>
                </div>
              </div>
              <p style={{ fontSize: '14px', color: '#555', marginTop: '20px', lineHeight: '1.6' }}>
                Attorney Lomurro is currently authoring a comprehensive guide on medical malpractice law in Pennsylvania. This book will be an invaluable resource for those who have been injured due to medical negligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 20px', backgroundColor: '#8B1538', color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '36px', fontWeight: 700, marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '2px' }}>
            For More Information
          </h2>
          <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '30px' }}>
            Contact us today for a free consultation. Call us at <strong>(724) 914-8645</strong> or fill out our contact form.
          </p>
          <a href="/contact" style={{ backgroundColor: '#fff', color: '#8B1538', padding: '16px 40px', textDecoration: 'none', fontFamily: "'Oswald', sans-serif", fontSize: '16px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-block' }}>
            Contact Us Today
          </a>
        </div>
      </section>

      <section style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '42px', fontWeight: 700, color: '#2c2c2c', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '2px' }}>
              Meet Our Team
            </h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: '#8B1538', margin: '0 auto' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '100%', height: '300px', backgroundColor: '#e0e0e0', marginBottom: '20px', backgroundImage: 'url(https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '22px', fontWeight: 700, color: '#2c2c2c', marginBottom: '10px', textTransform: 'uppercase' }}>
                Arthur Lomurro
              </h3>
              <div style={{ fontSize: '14px', color: '#8B1538', fontWeight: 600 }}>Founding Attorney</div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '100%', height: '300px', backgroundColor: '#e0e0e0', marginBottom: '20px', backgroundImage: 'url(https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '22px', fontWeight: 700, color: '#2c2c2c', marginBottom: '10px', textTransform: 'uppercase' }}>
                Sharon D. Brown
              </h3>
              <div style={{ fontSize: '14px', color: '#8B1538', fontWeight: 600 }}>Associate Attorney</div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '100%', height: '300px', backgroundColor: '#e0e0e0', marginBottom: '20px', backgroundImage: 'url(https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '22px', fontWeight: 700, color: '#2c2c2c', marginBottom: '10px', textTransform: 'uppercase' }}>
                Jayson Luis Esteves
              </h3>
              <div style={{ fontSize: '14px', color: '#8B1538', fontWeight: 600 }}>Associate Attorney</div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '100%', height: '300px', backgroundColor: '#e0e0e0', marginBottom: '20px', backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '22px', fontWeight: 700, color: '#2c2c2c', marginBottom: '10px', textTransform: 'uppercase' }}>
                Robert Piper
              </h3>
              <div style={{ fontSize: '14px', color: '#8B1538', fontWeight: 600 }}>Of Counsel</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 20px', backgroundColor: '#8B1538', color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '36px', fontWeight: 700, marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '2px' }}>
            Justice for you and your family begins today.
          </h2>
        </div>
      </section>

      <section style={{ padding: '80px 20px', backgroundColor: '#2c2c2c' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
            <div>
              <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '32px', fontWeight: 700, color: '#fff', marginBottom: '30px', textTransform: 'uppercase', letterSpacing: '2px' }}>
                Contact The Office
              </h2>
              <form action="/api/contact" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label htmlFor="name" style={{ display: 'block', color: '#fff', fontSize: '14px', marginBottom: '8px', fontWeight: 600 }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    style={{ width: '100%', padding: '12px', fontSize: '14px', border: '1px solid #555', backgroundColor: '#3c3c3c', color: '#fff', boxSizing: 'border-box' }}
                  />
                </div>
                <div>
                  <label htmlFor="phone" style={{ display: 'block', color: '#fff', fontSize: '14px', marginBottom: '8px', fontWeight: 600 }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    style={{ width: '100%', padding: '12px', fontSize: '14px', border: '1px solid #555', backgroundColor: '#3c3c3c', color: '#fff', boxSizing: 'border-box' }}
                  />
                </div>
                <div>
                  <label htmlFor="email" style={{