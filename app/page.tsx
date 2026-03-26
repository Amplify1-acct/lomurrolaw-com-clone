import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lomurro Law - Civil Trial Attorneys with Supreme Court Certifications',
  description: 'Lomurro Law has all five Supreme Court certifications. Experienced civil trial attorneys in Pennsylvania. Call (724) 410-8346 for a free consultation.',
  openGraph: {
    title: 'Lomurro Law - Civil Trial Attorneys with Supreme Court Certifications',
    description: 'Lomurro Law has all five Supreme Court certifications. Experienced civil trial attorneys in Pennsylvania.',
    url: 'https://www.lomurrolaw.com/',
    siteName: 'Lomurro Law',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.lomurrolaw.com/',
  },
};

export default function HomePage() {
  return (
    <div style={{ fontFamily: "'Raleway', sans-serif", color: '#2C2C2C' }}>
      <header style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 100,
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)'
      }}>
        <div>
          <img src="/logo.png" alt="Lomurro Law" style={{ height: '60px' }} />
        </div>
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <a href="tel:7244108346" style={{ color: '#fff', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
            TO SCHEDULE AN APPOINTMENT CALL (724) 410-8346
          </a>
        </div>
        <nav style={{ display: 'flex', gap: '25px' }}>
          <a href="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: 500 }}>HOME</a>
          <a href="/about" style={{ color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: 500 }}>ABOUT US</a>
          <a href="/practice-areas" style={{ color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: 500 }}>PRACTICE AREAS</a>
          <a href="/contact" style={{ color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: 500 }}>CONTACT</a>
        </nav>
      </header>

      <section style={{
        position: 'relative',
        height: '600px',
        background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/hero-bg.jpg") center/cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff'
      }}>
        <h1 style={{
          fontFamily: "'Crimson Text', serif",
          fontSize: '56px',
          fontWeight: 700,
          marginBottom: '20px',
          lineHeight: 1.2,
          maxWidth: '900px'
        }}>
          WE HAVE ALL FIVE SUPREME<br />COURT CERTIFICATIONS
        </h1>
        <p style={{
          fontSize: '16px',
          marginBottom: '30px',
          lineHeight: 1.6,
          maxWidth: '700px',
          fontWeight: 300
        }}>
          FULL BOARD CERTIFIED AS A CIVIL TRIAL ATTORNEY • AS A PRETRIAL PRACTICE ADVOCATE<br />
          AS A CIVIL TRIAL ADVOCATE • AS A CIVIL PRETRIAL PRACTICE ADVOCATE<br />
          AS A TRIAL ADVOCATE
        </p>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
          <a href="/contact" style={{
            background: '#8B1538',
            color: '#fff',
            padding: '15px 35px',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 700,
            letterSpacing: '1px',
            border: 'none',
            cursor: 'pointer'
          }}>
            SCHEDULE A FREE CONSULTATION
          </a>
        </div>
        <div style={{
          display: 'flex',
          gap: '50px',
          marginTop: '20px'
        }}>
          <div>
            <div style={{ fontSize: '36px', fontWeight: 700, marginBottom: '5px' }}>98%</div>
            <div style={{ fontSize: '12px', fontWeight: 300 }}>SUCCESS RATE</div>
          </div>
          <div>
            <div style={{ fontSize: '36px', fontWeight: 700, marginBottom: '5px' }}>35+</div>
            <div style={{ fontSize: '12px', fontWeight: 300 }}>YEARS EXPERIENCE</div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid #8B1538', paddingLeft: '20px', marginBottom: '50px' }}>
            <h2 style={{
              fontFamily: "'Crimson Text', serif",
              fontSize: '42px',
              fontWeight: 700,
              color: '#2C2C2C',
              marginBottom: '10px'
            }}>
              Case Results
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', marginBottom: '40px' }}>
            <div style={{ borderLeft: '3px solid #8B1538', paddingLeft: '20px' }}>
              <div style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>CATASTROPHIC VEHICLE ACCIDENT SETTLEMENT</div>
              <div style={{
                fontFamily: "'Crimson Text', serif",
                fontSize: '36px',
                fontWeight: 700,
                color: '#8B1538',
                marginBottom: '15px'
              }}>
                $2,500,000
              </div>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#555' }}>
                Our client was driving in the middle of the night, in the middle lane, of a busy highway. A drunk driver suddenly swerved into our client's lane and crashed into our client's vehicle. The violent crash killed the drunk driver and caused our client to be paralyzed from the chest down.
              </p>
            </div>

            <div style={{ borderLeft: '3px solid #8B1538', paddingLeft: '20px' }}>
              <div style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>WRONGFUL DEATH SETTLEMENT</div>
              <div style={{
                fontFamily: "'Crimson Text', serif",
                fontSize: '36px',
                fontWeight: 700,
                color: '#8B1538',
                marginBottom: '15px'
              }}>
                $2,300,000
              </div>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#555' }}>
                Our client was a family man, a hard worker, who fell approximately 45 feet from a crane in a serious industrial workplace accident. Our client was allegedly not secured to an appropriate safety device and suffered massive injuries that led to his death.
              </p>
            </div>

            <div style={{ borderLeft: '3px solid #8B1538', paddingLeft: '20px' }}>
              <div style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>HEAD TRAUMA VERDICT</div>
              <div style={{
                fontFamily: "'Crimson Text', serif",
                fontSize: '36px',
                fontWeight: 700,
                color: '#8B1538',
                marginBottom: '15px'
              }}>
                $1,550,000
              </div>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#555' }}>
                Following a routine medical procedure, our client suffered permanent memory loss, cognitive decline and an inability to continue her professional career. The case proceeded to trial after the defendant hospital and surgeon denied any fault.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="/case-results" style={{
              display: 'inline-block',
              background: '#8B1538',
              color: '#fff',
              padding: '15px 35px',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '1px'
            }}>
              SEE MORE RESULTS
            </a>
          </div>
        </div>
      </section>

      <section style={{
        background: '#8B1538',
        padding: '80px 40px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '50%',
          background: '#fff',
          clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)'
        }}></div>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{ color: '#fff' }}>
            <div style={{ borderLeft: '3px solid #fff', paddingLeft: '20px', marginBottom: '30px' }}>
              <h2 style={{
                fontFamily: "'Crimson Text', serif",
                fontSize: '42px',
                fontWeight: 700,
                marginBottom: '10px'
              }}>
                Legal Experience To Work For You
              </h2>
            </div>
          </div>
          <div style={{ color: '#2C2C2C' }}>
            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
              At Lomurro Law, we pride ourselves in representing the needs of our clients above all else. Our firm is built on a foundation of trust, integrity, and unwavering commitment to achieving justice for those we serve.
            </p>
            <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
              With over 30 years of experience in personal injury law, we understand that every case is unique and requires personalized attention. Our team of dedicated attorneys works tirelessly to ensure that our clients receive the compensation they deserve.
            </p>
            <p style={{ fontSize: '15px', lineHeight: 1.8 }}>
              We take pride in our track record of success, having recovered millions of dollars for our clients over the years. Whether you've been injured in a car accident, suffered from medical malpractice, or experienced a workplace injury, we have the expertise and resources to fight for your rights.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: '#2C2C2C', padding: '80px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', marginBottom: '40px' }}>
            <div style={{ color: '#fff' }}>
              <div style={{ borderLeft: '3px solid #8B1538', paddingLeft: '15px', marginBottom: '15px' }}>
                <h3 style={{
                  fontFamily: "'Crimson Text', serif",
                  fontSize: '24px',
                  fontWeight: 700,
                  marginBottom: '10px'
                }}>
                  PERSONAL INJURY
                </h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', lineHeight: 2 }}>
                <li>• Car Accidents</li>
                <li>• Truck Accidents</li>
                <li>• Motorcycle Accidents</li>
                <li>• Slip and Fall</li>
                <li>• Premises Liability</li>
              </ul>
            </div>

            <div style={{ color: '#fff' }}>
              <div style={{ borderLeft: '3px solid #8B1538', paddingLeft: '15px', marginBottom: '15px' }}>
                <h3 style={{
                  fontFamily: "'Crimson Text', serif",
                  fontSize: '24px',
                  fontWeight: 700,
                  marginBottom: '10px'
                }}>
                  MEDICAL MALPRACTICE
                </h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', lineHeight: 2 }}>
                <li>• Surgical Errors</li>
                <li>• Birth Injuries</li>
                <li>• Misdiagnosis</li>
                <li>• Medication Errors</li>
                <li>• Hospital Negligence</li>
              </ul>
            </div>

            <div style={{ color: '#fff' }}>
              <div style={{ borderLeft: '3px solid #8B1538', paddingLeft: '15px', marginBottom: '15px' }}>
                <h3 style={{
                  fontFamily: "'Crimson Text', serif",
                  fontSize: '24px',
                  fontWeight: 700,
                  marginBottom: '10px'
                }}>
                  WORKERS COMPENSATION
                </h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', lineHeight: 2 }}>
                <li>• Workplace Injuries</li>
                <li>• Construction Accidents</li>
                <li>• Repetitive Stress</li>
                <li>• Occupational Disease</li>
                <li>• Denied Claims</li>
              </ul>
            </div>

            <div style={{ color: '#fff' }}>
              <div style={{ borderLeft: '3px solid #8B1538', paddingLeft: '15px', marginBottom: '15px' }}>
                <h3 style={{
                  fontFamily: "'Crimson Text', serif",
                  fontSize: '24px',
                  fontWeight: 700,
                  marginBottom: '10px'
                }}>
                  CRIMINAL LAW
                </h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', lineHeight: 2 }}>
                <li>• DUI Defense</li>
                <li>• Drug Charges</li>
                <li>• Assault & Battery</li>
                <li>• Theft Crimes</li>
                <li>• White Collar Crimes</li>
              </ul>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
            <div style={{ color: '#fff' }}>
              <div style={{ borderLeft: '3px solid #8B1538', paddingLeft: '15px', marginBottom: '15px' }}>
                <h3 style={{
                  fontFamily: "'Crimson Text', serif",
                  fontSize: '24px',
                  fontWeight: 700,
                  marginBottom: '10px'
                }}>
                  NURSING HOME ABUSE
                </h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', lineHeight: 2 }}>
                <li>• Physical Abuse</li>
                <li>• Neglect</li>
                <li>• Medication Errors</li>
                <li>• Bedsores</li>
                <li>• Wrongful Death</li>
              </ul>
            </div>

            <div style={{ color: '#fff' }}>
              <div style={{ borderLeft: '3px solid #8B1538', paddingLeft: '15px', marginBottom: '15px' }}>
                <h3 style={{
                  fontFamily: "'Crimson Text', serif",
                  fontSize: '24px',
                  fontWeight: 700,
                  marginBottom: '10px'
                }}>
                  FAMILY LAW
                </h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', lineHeight: 2 }}>
                <li>• Divorce</li>
                <li>• Child Custody</li>
                <li>• Child Support</li>
                <li>• Spousal Support</li>
                <li>• Property Division</li>
              </ul>
            </div>

            <div style={{ color: '#fff' }}>
              <div style={{ borderLeft: '3px solid #8B1538', paddingLeft: '15px', marginBottom: '15px' }}>
                <h3 style={{
                  fontFamily: "'Crimson Text', serif",
                  fontSize: '24px',
                  fontWeight: 700,
                  marginBottom: '10px'
                }}>
                  WILLS & ESTATES
                </h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', lineHeight: 2 }}>
                <li>• Estate Planning</li>
                <li>• Wills & Trusts</li>
                <li>• Power of Attorney</li>
                <li>• Probate</li>
                <li>• Estate Administration</li>
              </ul>
            </div>

            <div style={{ color: '#fff' }}>
              <div style={{ borderLeft: '3px solid #8B1538', paddingLeft: '15px', marginBottom: '15px' }}>
                <h3 style={{
                  fontFamily: "'Crimson Text', serif",
                  fontSize: '24px',
                  fontWeight: 700,
                  marginBottom: '10px'
                }}>
                  BANKRUPTCY LAW
                </h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', lineHeight: 2 }}>
                <li>• Chapter 7 Bankruptcy</li>
                <li>• Chapter 13 Bankruptcy</li>
                <li>• Debt Relief</li>
                <li>• Foreclosure Defense</li>
                <li>• Creditor Harassment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 40px', background: '#f5f5f5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <div style={{ borderLeft: '3px solid #8B1538', paddingLeft: '20px', marginBottom: '30px' }}>
                <div style={{ fontSize: '14px', color: '#8B1538', marginBottom: '10px', fontWeight: 600 }}>
                  LOMURRO LAW FEATURED PUBLICATION
                </div>
                <h2 style={{
                  fontFamily: "'Crimson Text', serif",
                  fontSize: '42px',
                  fontWeight: 700,
                  color: '#2C2C2C',
                  marginBottom: '10px'
                }}>
                  What Sets Lomurro Law Apart
                </h2>
              </div>
              <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px', color: '#555' }}>
                When you hire Lomurro Law to handle your case, you are hiring a team of Pennsylvania Supreme Court Board Certified Civil Trial Attorneys with extensive courtroom experience. We are one of the few law firms in Pennsylvania to hold all five Supreme Court certifications.
              </p>
              <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px', color: '#555' }}>
                Our attorneys have tried hundreds of cases to verdict and have recovered millions of dollars in compensation for our clients. We understand that every case is unique and requires personalized attention and a strategic approach.
              </p>
              <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '20px', color: '#555' }}>
                At Lomurro Law, we believe that justice should be accessible to everyone. That's why we work on a contingency fee basis, which means you don't pay us unless we win your case. We are committed to fighting for your rights and ensuring that you receive the compensation you deserve.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <img src="/book-cover.jpg" alt="Medical Malpractice Law" style={{ maxWidth: '350px', boxShadow: '0 10px 40px rgba(0,0,0,0.15)' }} />
              <p style={{ fontSize: '13px', marginTop: '20px', color: '#666', lineHeight: 1.6 }}>
                Attorney Lomurro has been published in various legal publications and is recognized as a leading authority on personal injury and medical malpractice law in Pennsylvania. His book on medical malpractice has been used as a reference guide by attorneys across the state.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#8B1538', padding: '60px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Crimson Text', serif",
            fontSize: '42px',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '30px'
          }}>
            For More Information
          </h2>
          <p style={{ fontSize: '16px', color: '#fff', marginBottom: '30px' }}>
            Contact us online or call <a href="tel:7244108346" style={{ color: '#fff', fontWeight: 700 }}>(724) 410-8346</a> to schedule a <strong>FREE</strong> consultation today.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ borderLeft: '3px solid #8B1538', paddingLeft: '20px', marginBottom: '50px' }}>
            <h2 style={{
              fontFamily: "'Crimson Text', serif",
              fontSize: '42px',
              fontWeight: 700,
              color: '#2C2C2C',
              marginBottom: '10px'
            }}>
              Meet Our Team
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px' }}>
            <div style={{ textAlign: 'center' }}>
              <img src="/attorney-arthur.jpg" alt="Arthur Lomurro" style={{ width: '100%', marginBottom: '15px' }} />
              <h3 style={{
                fontFamily: "'Crimson Text', serif",
                fontSize: '24px',
                fontWeight: 700,
                marginBottom: '5px'
              }}>
                Arthur Lomurro
              </h3>
              <p style={{ fontSize: '14px', color: '#8B1538', fontWeight: 600 }}>FOUNDER</p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <img src="/attorney-cozen.jpg" alt="Cozen S. Breen" style={{ width: '100%', marginBottom: '15px' }} />
              <h3 style={{
                fontFamily: "'Crimson Text', serif",
                fontSize: '24px',
                fontWeight: 700,
                marginBottom: '5px'
              }}>
                Cozen S. Breen
              </h3>
              <p style={{ fontSize: '14px', color: '#8B1538', fontWeight: 600 }}>ATTORNEY</p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <img src="/attorney-steven.jpg" alt="Steven Luis Ettema" style={{ width: '100%', marginBottom: '15px' }} />
              <h3 style={{
                fontFamily: "'Crimson Text', serif",
                fontSize: '24px',
                fontWeight: 700,
                marginBottom: '5px'
              }}>
                Steven Luis Ettema
              </h3>
              <p style={{ fontSize: '14px', color: '#8B1538', fontWeight: 600 }}>ATTORNEY</p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <img src="/attorney-robert.jpg" alt="Robert Stec" style={{ width: '100%', marginBottom: '15px' }} />
              <h3 style={{
                fontFamily: "'Crimson Text', serif",
                fontSize: '24px',
                fontWeight: 700,
                marginBottom: '5px'
              }}>
                Robert Stec
              </h3>
              <p style={{ fontSize: '14px', color: '#8B1538', fontWeight: 600 }}>ATTORNEY</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#8B1538', padding: '50px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Crimson Text', serif",
            fontSize: '36px',
            fontWeight: 700,
            color: '#fff'
          }}>
            Justice is not just paid, justice begins today.
          </h2>
        </div>
      </section>

      <section style={{ background: '#2C2C2C', padding: '80px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{
              fontFamily: "'Crimson Text', serif",
              fontSize: '42px',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '10px'
            }}>
              Contact The Office
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '60px', marginBottom: '50px' }}>
            <div style={{ color: '#fff', textAlign: 'center' }}>
              <h3 style={{
                fontFamily: "'Crimson Text', serif",
                fontSize: '24px',
                fontWeight: 700,
                marginBottom: '20px',
                borderBottom: '2px solid #8B1538',
                paddingBottom: '10px'
              }}>
                PITTSBURGH OFFICE
              </h3>
              <div style={{ fontSize: '14px', lineHeight: 2 }}>
                <p>445 Fort Pitt Blvd</p>
                <p>Suite 503</p>
                <p>Pittsburgh, PA 15219</p>
                <p style={{ marginTop: '15px' }}>
                  <a href="tel:7244108346" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}>
                    (724) 410-8346
                  </a>
                </p>
              </div>
            </div>

            <div style={{ color: '#fff', textAlign: 'center' }}>
              <h3 style={{
                fontFamily: "'Crimson Text', serif",
                fontSize: '24px',
                fontWeight: 700,
                marginBottom: '20px',
                borderBottom: '2px solid #8B1538',
                paddingBottom: '10px'
              }}>
                INDIANA OFFICE
              </h3>
              <div style={{ fontSize: '14px', lineHeight: 2 }}>
                <p>1098 Philadelphia Street</p>
                <p>Indiana, PA 15701</p>
                <p style={{ marginTop: '15px' }}>
                  <a href="tel:7244108346" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}>
                    (724) 410-8346
                  </a>
                </p>
              </div>
            </div>

            <div style={{ color: '#fff', textAlign: 'center' }}>
              <h3 style={{
                fontFamily: "'Crimson Text', serif",
                fontSize: '24px',
                fontWeight: 700,
                marginBottom: '20px',
                borderBottom: '2px solid #8B1538',
                paddingBottom: '10px'
              }}>
                GREENSBURG OFFICE
              </h3>
              <div style={{ fontSize: '14px', lineHeight: 2 }}>
                <p>100 North Maple Avenue</p>
                <p>Greensburg, PA 15601</p>
                <p style={{ marginTop: '15px' }}>
                  <a href="tel:7244108346" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}>
                    (724) 410-8346
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <h3 style={{
              fontFamily: "'Crimson Text', serif",
              fontSize: '28px',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '20px'
            }}>
              FOLLOW US
            </h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
              <a href="#" style={{ color: '#fff', fontSize: '20px' }}>f</a>
              <a href="#" style={{ color: '#fff', fontSize: '20px' }}>in</a>
              <a href="#" style