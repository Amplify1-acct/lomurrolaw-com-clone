

import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'LoMurro Law - Trial Attorneys in Morgantown, WV | Supreme Court Certified',
  description: 'Trial Attorneys in Morgantown, West Virginia. All attorneys with all five West Virginia Supreme Court certifications. Proven case results. Call (724) 841-0346.',
  openGraph: {
    title: 'LoMurro Law - Trial Attorneys in Morgantown, WV | Supreme Court Certified',
    description: 'Trial Attorneys in Morgantown, West Virginia. All attorneys with all five West Virginia Supreme Court certifications. Proven case results.',
    url: 'https://www.lomurrolaw.com/',
    siteName: 'LoMurro Law',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.lomurrolaw.com/',
  },
}

export default function HomePage() {
  return (
    <div style={{ fontFamily: "'Open Sans', sans-serif", margin: 0, padding: 0 }}>
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: 'rgba(255, 255, 255, 0.95)', zIndex: 1000, borderBottom: '1px solid #e5e5e5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '50px', height: '50px', position: 'relative' }}>
              <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
                <text x="50" y="55" fontSize="40" fontWeight="bold" textAnchor="middle" fill="#8B0F28" fontFamily="'Oswald', sans-serif">L</text>
              </svg>
            </div>
            <div>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: '24px', fontWeight: 700, color: '#2C2C2C', letterSpacing: '1px' }}>LOMURRO LAW</div>
            </div>
          </div>
          <div style={{ fontSize: '12px', color: '#2C2C2C', textAlign: 'right' }}>
            <div>Se habla español | Se parla Italiano</div>
            <div style={{ fontWeight: 'bold', fontSize: '14px', marginTop: '3px' }}>(724) 841-0346</div>
          </div>
        </div>
        <nav style={{ backgroundColor: '#f8f8f8', borderTop: '1px solid #e5e5e5' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', gap: '30px' }}>
              <li style={{ padding: '12px 0' }}><a href="/" style={{ color: '#2C2C2C', textDecoration: 'none', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>HOME</a></li>
              <li style={{ padding: '12px 0' }}><a href="/attorneys" style={{ color: '#2C2C2C', textDecoration: 'none', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>ATTORNEYS</a></li>
              <li style={{ padding: '12px 0' }}><a href="/practice-areas" style={{ color: '#2C2C2C', textDecoration: 'none', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>PRACTICE AREAS</a></li>
              <li style={{ padding: '12px 0' }}><a href="/contact" style={{ color: '#2C2C2C', textDecoration: 'none', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>CONTACT</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <main style={{ marginTop: '120px' }}>
        <section style={{ position: 'relative', height: '600px', overflow: 'hidden', backgroundImage: 'url(/hero-books.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
          <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', color: '#fff', maxWidth: '900px', padding: '0 20px' }}>
            <h1 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '52px', fontWeight: 700, margin: '0 0 20px 0', letterSpacing: '2px', lineHeight: '1.2', textTransform: 'uppercase' }}>
              TRIAL ATTORNEYS WITH ALL FIVE WEST VIRGINIA SUPREME COURT CERTIFICATIONS
            </h1>
            <p style={{ fontSize: '18px', lineHeight: '1.6', margin: '0 0 30px 0', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
              Full board certification in all five areas as recognized by the West Virginia Supreme Court of Appeals. Our attorneys are certified in Personal Injury Trial Advocacy, Civil Trial Advocacy, Civil Pretrial Practice Advocacy, Medical Malpractice, and Workers' Compensation.
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '30px' }}>
              <a href="/free-consultation" style={{ backgroundColor: '#8B0F28', color: '#fff', padding: '15px 35px', textDecoration: 'none', fontFamily: "'Oswald', sans-serif", fontSize: '16px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s' }}>
                FREE CONSULTATION
              </a>
              <a href="/about" style={{ backgroundColor: 'transparent', color: '#fff', padding: '15px 35px', textDecoration: 'none', fontFamily: "'Oswald', sans-serif", fontSize: '16px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', border: '2px solid #fff', cursor: 'pointer', transition: 'background-color 0.3s' }}>
                LEARN MORE
              </a>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: '#f8f8f8', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '36px', fontWeight: 700, color: '#2C2C2C', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>Case Results</h2>
              <div style={{ width: '60px', height: '3px', backgroundColor: '#8B0F28', marginBottom: '30px' }}></div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
              <div style={{ backgroundColor: '#fff', padding: '30px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '12px', color: '#666', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  CATASTROPHIC PERSONAL INJURY SETTLEMENT IN WEST VIRGINIA
                </div>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: '32px', fontWeight: 700, color: '#8B0F28', marginBottom: '15px' }}>
                  $2,500,000
                </div>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#444', margin: 0 }}>
                  Our client sustained a catastrophic brain injury when he was struck by a vehicle while crossing the street. Through aggressive litigation and expert testimony, we secured a $2.5 million settlement that provides for our client's lifetime care needs.
                </p>
              </div>

              <div style={{ backgroundColor: '#fff', padding: '30px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '12px', color: '#666', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  WRONGFUL DEATH SETTLEMENT
                </div>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: '32px', fontWeight: 700, color: '#8B0F28', marginBottom: '15px' }}>
                  $2,300,000
                </div>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#444', margin: 0 }}>
                  Our client's family member died as a result of nursing home neglect and abuse. We fought tirelessly to hold the facility accountable and obtained a $2.3 million settlement for the family.
                </p>
              </div>

              <div style={{ backgroundColor: '#fff', padding: '30px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '12px', color: '#666', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  MEDICAL MALPRACTICE VERDICT
                </div>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: '32px', fontWeight: 700, color: '#8B0F28', marginBottom: '15px' }}>
                  $1,550,000
                </div>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#444', margin: 0 }}>
                  A jury awarded our client $1.55 million after a surgeon's negligence resulted in permanent nerve damage. This verdict compensated our client for medical expenses, lost wages, and pain and suffering.
                </p>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <a href="/case-results" style={{ backgroundColor: '#8B0F28', color: '#fff', padding: '12px 30px', textDecoration: 'none', fontFamily: "'Oswald', sans-serif", fontSize: '14px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', display: 'inline-block' }}>
                SEE MORE RESULTS
              </a>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: '#fff', padding: '80px 20px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '50%', height: '100%', backgroundColor: '#8B0F28', clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}></div>
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div style={{ color: '#fff' }}>
              <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '42px', fontWeight: 700, marginBottom: '20px', letterSpacing: '1px', lineHeight: '1.2', textTransform: 'uppercase' }}>
                Get The Best Legal Experience To Work For You
              </h2>
              <div style={{ width: '60px', height: '3px', backgroundColor: '#fff', marginBottom: '20px' }}></div>
            </div>
            <div style={{ color: '#2C2C2C' }}>
              <p style={{ fontSize: '15px', lineHeight: '1.8', marginBottom: '20px' }}>
                The LoMurro Law team is dedicated to providing exceptional legal representation for clients throughout West Virginia. Our attorneys have achieved the highest level of professional recognition by earning all five West Virginia Supreme Court certifications.
              </p>
              <p style={{ fontSize: '15px', lineHeight: '1.8', margin: 0 }}>
                With a track record of multimillion-dollar verdicts and settlements, we have the experience and expertise to handle even the most complex cases. From personal injury to medical malpractice, wrongful death to workers' compensation, we fight tirelessly for the rights of our clients.
              </p>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: '#2C2C2C', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
              <div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  PERSONAL INJURY
                </h3>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, fontSize: '14px', lineHeight: '1.8', color: '#ccc' }}>
                  <li style={{ marginBottom: '8px' }}>• Car Accidents</li>
                  <li style={{ marginBottom: '8px' }}>• Truck Accidents</li>
                  <li style={{ marginBottom: '8px' }}>• Motorcycle Accidents</li>
                  <li style={{ marginBottom: '8px' }}>• Slip and Fall</li>
                  <li style={{ marginBottom: '8px' }}>• Dog Bites</li>
                </ul>
              </div>

              <div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  MEDICAL MALPRACTICE
                </h3>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, fontSize: '14px', lineHeight: '1.8', color: '#ccc' }}>
                  <li style={{ marginBottom: '8px' }}>• Surgical Errors</li>
                  <li style={{ marginBottom: '8px' }}>• Birth Injuries</li>
                  <li style={{ marginBottom: '8px' }}>• Misdiagnosis</li>
                  <li style={{ marginBottom: '8px' }}>• Medication Errors</li>
                  <li style={{ marginBottom: '8px' }}>• Hospital Negligence</li>
                </ul>
              </div>

              <div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  WORKERS' COMPENSATION
                </h3>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, fontSize: '14px', lineHeight: '1.8', color: '#ccc' }}>
                  <li style={{ marginBottom: '8px' }}>• Workplace Injuries</li>
                  <li style={{ marginBottom: '8px' }}>• Occupational Diseases</li>
                  <li style={{ marginBottom: '8px' }}>• Denied Claims</li>
                  <li style={{ marginBottom: '8px' }}>• Permanent Disability</li>
                  <li style={{ marginBottom: '8px' }}>• Appeals</li>
                </ul>
              </div>

              <div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  WRONGFUL DEATH
                </h3>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, fontSize: '14px', lineHeight: '1.8', color: '#ccc' }}>
                  <li style={{ marginBottom: '8px' }}>• Fatal Accidents</li>
                  <li style={{ marginBottom: '8px' }}>• Medical Negligence</li>
                  <li style={{ marginBottom: '8px' }}>• Nursing Home Abuse</li>
                  <li style={{ marginBottom: '8px' }}>• Defective Products</li>
                  <li style={{ marginBottom: '8px' }}>• Workplace Deaths</li>
                </ul>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginTop: '40px' }}>
              <div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  NURSING HOME ABUSE
                </h3>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, fontSize: '14px', lineHeight: '1.8', color: '#ccc' }}>
                  <li style={{ marginBottom: '8px' }}>• Physical Abuse</li>
                  <li style={{ marginBottom: '8px' }}>• Neglect</li>
                  <li style={{ marginBottom: '8px' }}>• Bedsores</li>
                  <li style={{ marginBottom: '8px' }}>• Malnutrition</li>
                  <li style={{ marginBottom: '8px' }}>• Medication Errors</li>
                </ul>
              </div>

              <div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  PRODUCT LIABILITY
                </h3>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, fontSize: '14px', lineHeight: '1.8', color: '#ccc' }}>
                  <li style={{ marginBottom: '8px' }}>• Defective Products</li>
                  <li style={{ marginBottom: '8px' }}>• Dangerous Drugs</li>
                  <li style={{ marginBottom: '8px' }}>• Medical Devices</li>
                  <li style={{ marginBottom: '8px' }}>• Auto Defects</li>
                  <li style={{ marginBottom: '8px' }}>• Consumer Products</li>
                </ul>
              </div>

              <div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  MASS & TOXIC TORTS
                </h3>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, fontSize: '14px', lineHeight: '1.8', color: '#ccc' }}>
                  <li style={{ marginBottom: '8px' }}>• Chemical Exposure</li>
                  <li style={{ marginBottom: '8px' }}>• Environmental Hazards</li>
                  <li style={{ marginBottom: '8px' }}>• Asbestos</li>
                  <li style={{ marginBottom: '8px' }}>• Class Actions</li>
                  <li style={{ marginBottom: '8px' }}>• Mass Litigation</li>
                </ul>
              </div>

              <div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  CATASTROPHIC INJURY
                </h3>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, fontSize: '14px', lineHeight: '1.8', color: '#ccc' }}>
                  <li style={{ marginBottom: '8px' }}>• Traumatic Brain Injury</li>
                  <li style={{ marginBottom: '8px' }}>• Spinal Cord Injury</li>
                  <li style={{ marginBottom: '8px' }}>• Amputations</li>
                  <li style={{ marginBottom: '8px' }}>• Severe Burns</li>
                  <li style={{ marginBottom: '8px' }}>• Paralysis</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: '#f8f8f8', padding: '80px 20px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'flex-start' }}>
              <div>
                <div style={{ marginBottom: '30px' }}>
                  <div style={{ fontSize: '12px', color: '#8B0F28', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
                    COMMONLY ASKED QUESTIONS
                  </div>
                  <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '36px', fontWeight: 700, color: '#2C2C2C', marginBottom: '15px', letterSpacing: '1px', lineHeight: '1.2' }}>
                    What Sets LoMurro Law Apart
                  </h2>
                  <div style={{ width: '60px', height: '3px', backgroundColor: '#8B0F28', marginBottom: '20px' }}></div>
                </div>

                <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#444', marginBottom: '20px' }}>
                  At LoMurro Law, we pride ourselves on our unique qualifications and commitment to excellence. Our attorneys are the only team in West Virginia where every lawyer holds all five Supreme Court certifications—a distinction that sets us apart from other firms.
                </p>

                <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#444', marginBottom: '20px' }}>
                  We don't just handle cases—we fight for justice. Our track record speaks for itself, with numerous multimillion-dollar verdicts and settlements that have changed our clients' lives. We combine aggressive litigation tactics with compassionate client care.
                </p>

                <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#444', margin: 0 }}>
                  When you choose LoMurro Law, you're choosing a team that will stand by your side through every step of the legal process. We offer free consultations and work on a contingency fee basis, which means you pay nothing unless we win your case.
                </p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{ backgroundColor: '#fff', padding: '30px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', marginBottom: '20px' }}>
                  <div style={{ width: '200px', height: '280px', backgroundColor: '#8B0F28', margin: '0 auto 20px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: "'Oswald', sans-serif", fontSize: '18px', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '20px', left: '20px', right: '20px', bottom: '20px', border: '2px solid rgba(255,255,255,0.5)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                      <div style={{ fontSize: '32px', fontWeight: 700, marginBottom: '10px' }}>West Virginia</div>
                      <div style={{ fontSize: '16px', marginBottom: '15px' }}>Medical Malpractice Law</div>
                      <div style={{ fontSize: '14px', fontStyle: 'italic', marginBottom: '5px' }}>Featuring</div>
                      <div style={{ fontSize: '18px', fontWeight: 600 }}>Arthur S. LoMurro</div>
                    </div>
                  </div>
                  <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '22px', fontWeight: 700, color: '#2C2C2C', marginBottom: '10px', textTransform: 'uppercase' }}>
                    Best Lawyers In Morgantown Law
                  </h3>
                </div>

                <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#444', marginBottom: '20px' }}>
                  LoMurro Law attorney Arthur S. LoMurro has been featured as a leading authority in West Virginia medical malpractice law. His expertise and dedication to the field have earned him recognition among the state's top legal professionals.
                </p>

                <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#444', margin: 0 }}>
                  This recognition is just one example of the numerous accolades our firm has received for outstanding legal representation and client advocacy.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: '#8B0F28', padding: '60px 20px', textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '36px', fontWeight: 700, color: '#fff', marginBottom: '20px', letterSpacing: '1px', textTransform: 'uppercase' }}>
              For More Information
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#fff', marginBottom: '30px' }}>
              If you or a loved one has been injured, contact LoMurro Law for a free consultation. Call us at (724) 841-0346 or click below.
            </p>
            <a href="/contact" style={{ backgroundColor: '#fff', color: '#8B0F28', padding: '15px 40px', textDecoration: 'none', fontFamily: "'Oswald', sans-serif", fontSize: '16px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', display: 'inline-block' }}>
              SCHEDULE A CONSULTATION
            </a>
          </div>
        </section>

        <section style={{ backgroundColor: '#fff', padding: '80px 20px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ marginBottom: '50px', textAlign: 'center' }}>
              <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '42px', fontWeight: 700, color: '#2C2C2C', marginBottom: '15px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Meet Our Team
              </h2>
              <div style={{ width: '60px', height: '3px', backgroundColor: '#8B0F28', margin: '0 auto 20px auto' }}></div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '100%', height: '280px', backgroundColor: '#e5e5e5', marginBottom: '20px', overflow: 'hidden' }}>
                  <div style={{ width: '100%', height: '100%', backgroundColor: '#d4b896' }}></div>
                </div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '20px', fontWeight: 700, color: '#2C2C2C', marginBottom: '5px', textTransform: 'uppercase' }}>
                  Arthur LoMurro
                </h3>
                <p style={{ fontSize: '14px', color: '#8B0F28', margin: 0 }}>Managing Partner</p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '100%', height: '280px', backgroundColor: '#e5e5e5', marginBottom: '20px', overflow: 'hidden' }}>
                  <div style={{ width: '100%', height: '100%', backgroundColor: '#c9b8a8' }}></div>
                </div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '20px', fontWeight: 700, color: '#2C2C2C', marginBottom: '5px', textTransform: 'uppercase' }}>
                  Jason D. Brown
                </h3>
                <p style={{ fontSize: '14px', color: '#8B0F28', margin: 0 }}>Partner</p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '100%', height: '280px', backgroundColor: '#e
