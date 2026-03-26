import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lomurro Law - All Five PA Supreme Court Certifications | Personal Injury Attorney',
  description: 'Lomurro Law has all five Pennsylvania Supreme Court certifications. Experienced personal injury attorneys serving Westmoreland County and surrounding areas.',
  openGraph: {
    title: 'Lomurro Law - All Five PA Supreme Court Certifications',
    description: 'Lomurro Law has all five Pennsylvania Supreme Court certifications. Experienced personal injury attorneys serving Westmoreland County and surrounding areas.',
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
    <div style={{ fontFamily: "'Lato', sans-serif", margin: 0, padding: 0 }}>
      <header style={{ backgroundColor: '#fff', padding: '20px 0', borderBottom: '1px solid #ddd' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/logo.png" alt="Lomurro Law" style={{ height: '50px' }} />
            <span style={{ fontFamily: "'Cinzel', serif", fontSize: '24px', fontWeight: 'bold', color: '#2C2C2C' }}>LOMURRO LAW</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span style={{ fontSize: '14px', color: '#2C2C2C' }}>Se habla español | 724-834-8046</span>
          </div>
        </div>
        <nav style={{ maxWidth: '1200px', margin: '20px auto 0', padding: '0 20px' }}>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '30px', margin: 0, padding: 0, fontSize: '14px', textTransform: 'uppercase' }}>
            <li><a href="/" style={{ color: '#2C2C2C', textDecoration: 'none' }}>HOME</a></li>
            <li><a href="/about" style={{ color: '#2C2C2C', textDecoration: 'none' }}>ABOUT US</a></li>
            <li><a href="/practice-areas" style={{ color: '#2C2C2C', textDecoration: 'none' }}>PRACTICE AREAS</a></li>
            <li><a href="/results" style={{ color: '#2C2C2C', textDecoration: 'none' }}>RESULTS</a></li>
            <li><a href="/blog" style={{ color: '#2C2C2C', textDecoration: 'none' }}>BLOG</a></li>
            <li><a href="/contact" style={{ color: '#2C2C2C', textDecoration: 'none' }}>CONTACT</a></li>
          </ul>
        </nav>
      </header>

      <section style={{ position: 'relative', height: '600px', backgroundImage: 'url("/hero-books.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: '#fff', maxWidth: '900px', padding: '0 20px' }}>
          <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: '56px', fontWeight: 'bold', margin: '0 0 20px 0', lineHeight: '1.2', textTransform: 'uppercase' }}>
            LAW WITH ALL FIVE SUPREME<br />COURT CERTIFICATIONS
          </h1>
          <p style={{ fontSize: '18px', lineHeight: '1.8', margin: '0 0 30px 0' }}>
            Full-Service Law Firm, Certified to Practice in Pennsylvania, West Virginia,<br />
            Washington D.C., Michigan, and Ohio Civil Trial Advocate, Over 30 Years of Experience,<br />
            Three Generations of Practice, Located in Downtown Greensburg
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" style={{ backgroundColor: '#8B1538', color: '#fff', padding: '15px 35px', textDecoration: 'none', fontSize: '16px', fontWeight: 'bold', textTransform: 'uppercase', border: 'none', cursor: 'pointer' }}>
              FREE CONSULTATION
            </a>
            <a href="/results" style={{ backgroundColor: 'transparent', color: '#fff', padding: '15px 35px', textDecoration: 'none', fontSize: '16px', fontWeight: 'bold', textTransform: 'uppercase', border: '2px solid #fff', cursor: 'pointer' }}>
              VIEW CASE RESULTS
            </a>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#f5f5f5', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '42px', fontWeight: 'bold', color: '#2C2C2C', marginBottom: '10px' }}>Case Results</h2>
          <div style={{ width: '80px', height: '3px', backgroundColor: '#8B1538', marginBottom: '50px' }}></div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '40px' }}>
            <div style={{ backgroundColor: '#fff', padding: '30px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '14px', color: '#8B1538', textTransform: 'uppercase', marginBottom: '15px', fontWeight: 'bold' }}>
                WRONGFUL DEATH MEDICAL MALPRACTICE AND NURSING HOME ABUSE
              </div>
              <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#8B1538', marginBottom: '20px' }}>$2,500,000</div>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666', margin: 0 }}>
                Our client was a 76-year-old resident who was a ward of the state. The nursing home moved the resident to a different room without proper supervision, leading to a fall that resulted in a fatal head injury. We were able to secure a substantial settlement for the resident's estate.
              </p>
            </div>

            <div style={{ backgroundColor: '#fff', padding: '30px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '14px', color: '#8B1538', textTransform: 'uppercase', marginBottom: '15px', fontWeight: 'bold' }}>
                NURSING HOME ABUSE
              </div>
              <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#8B1538', marginBottom: '20px' }}>$2,300,000</div>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666', margin: 0 }}>
                Our client, a senior citizen, experienced neglect and abuse at a nursing home facility. Through diligent investigation and aggressive representation, we were able to hold the facility accountable for the harm done to our client.
              </p>
            </div>

            <div style={{ backgroundColor: '#fff', padding: '30px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '14px', color: '#8B1538', textTransform: 'uppercase', marginBottom: '15px', fontWeight: 'bold' }}>
                MEDICAL MALPRACTICE
              </div>
              <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#8B1538', marginBottom: '20px' }}>$1,550,000</div>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666', margin: 0 }}>
                Our client suffered permanent injuries due to surgical errors. We fought tirelessly to ensure our client received the compensation needed for ongoing medical care and lost quality of life.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="/results" style={{ display: 'inline-block', backgroundColor: '#8B1538', color: '#fff', padding: '15px 35px', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase' }}>
              SEE MORE RESULTS
            </a>
          </div>
        </div>
      </section>

      <section style={{ position: 'relative', overflow: 'hidden', minHeight: '500px' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '55%', backgroundColor: '#8B1538', clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)' }}>
          <div style={{ padding: '80px 60px', color: '#fff', maxWidth: '600px' }}>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '42px', fontWeight: 'bold', marginBottom: '10px' }}>Legal Experience To Work For You</h2>
            <div style={{ width: '80px', height: '3px', backgroundColor: '#fff', marginBottom: '30px' }}></div>
          </div>
        </div>
        <div style={{ marginLeft: '50%', padding: '80px 60px', backgroundColor: '#f9f9f9' }}>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#666', marginBottom: '20px' }}>
            At Lomurro Law, we understand that facing legal challenges can be overwhelming. With over 30 years of experience, three generations of practice, and all five Pennsylvania Supreme Court certifications, we are uniquely positioned to handle your case with the expertise and dedication it deserves.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#666', margin: 0 }}>
            From our downtown Greensburg office, we have successfully represented clients throughout Westmoreland County and beyond. Whether you're dealing with a personal injury, medical malpractice, nursing home abuse, or other legal matter, our team is committed to fighting for your rights and securing the compensation you deserve.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#2C2C2C', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            <div>
              <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '18px', color: '#8B1538', textTransform: 'uppercase', marginBottom: '20px', fontWeight: 'bold' }}>PERSONAL INJURY</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px', color: '#fff', lineHeight: '2' }}>
                <li>CAR ACCIDENTS</li>
                <li>TRUCK ACCIDENTS</li>
                <li>MOTORCYCLE ACCIDENTS</li>
                <li>SLIP AND FALL</li>
                <li>WRONGFUL DEATH</li>
              </ul>
            </div>

            <div>
              <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '18px', color: '#8B1538', textTransform: 'uppercase', marginBottom: '20px', fontWeight: 'bold' }}>MEDICAL MALPRACTICE</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px', color: '#fff', lineHeight: '2' }}>
                <li>SURGICAL ERRORS</li>
                <li>BIRTH INJURIES</li>
                <li>MISDIAGNOSIS</li>
                <li>MEDICATION ERRORS</li>
                <li>HOSPITAL NEGLIGENCE</li>
              </ul>
            </div>

            <div>
              <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '18px', color: '#8B1538', textTransform: 'uppercase', marginBottom: '20px', fontWeight: 'bold' }}>WORKERS COMPENSATION</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px', color: '#fff', lineHeight: '2' }}>
                <li>WORKPLACE INJURIES</li>
                <li>OCCUPATIONAL DISEASES</li>
                <li>DENIED CLAIMS</li>
                <li>DISABILITY BENEFITS</li>
              </ul>
            </div>

            <div>
              <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '18px', color: '#8B1538', textTransform: 'uppercase', marginBottom: '20px', fontWeight: 'bold' }}>ELDER LAW</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px', color: '#fff', lineHeight: '2' }}>
                <li>NURSING HOME ABUSE</li>
                <li>NEGLECT</li>
                <li>ELDER FRAUD</li>
                <li>ESTATE PLANNING</li>
              </ul>
            </div>

            <div>
              <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '18px', color: '#8B1538', textTransform: 'uppercase', marginBottom: '20px', fontWeight: 'bold' }}>NURSING HOME</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px', color: '#fff', lineHeight: '2' }}>
                <li>ABUSE AND NEGLECT</li>
                <li>BEDSORES</li>
                <li>MALNUTRITION</li>
                <li>FALLS AND INJURIES</li>
              </ul>
            </div>

            <div>
              <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '18px', color: '#8B1538', textTransform: 'uppercase', marginBottom: '20px', fontWeight: 'bold' }}>FAMILY LAW</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px', color: '#fff', lineHeight: '2' }}>
                <li>DIVORCE</li>
                <li>CHILD CUSTODY</li>
                <li>CHILD SUPPORT</li>
                <li>SPOUSAL SUPPORT</li>
              </ul>
            </div>

            <div>
              <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '18px', color: '#8B1538', textTransform: 'uppercase', marginBottom: '20px', fontWeight: 'bold' }}>WILLS & ESTATES</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px', color: '#fff', lineHeight: '2' }}>
                <li>WILLS</li>
                <li>TRUSTS</li>
                <li>ESTATE ADMINISTRATION</li>
                <li>PROBATE</li>
              </ul>
            </div>

            <div>
              <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '18px', color: '#8B1538', textTransform: 'uppercase', marginBottom: '20px', fontWeight: 'bold' }}>CRIMINAL LAW</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px', color: '#fff', lineHeight: '2' }}>
                <li>DUI DEFENSE</li>
                <li>DRUG CRIMES</li>
                <li>ASSAULT</li>
                <li>THEFT</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#f5f5f5', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '14px', color: '#8B1538', textTransform: 'uppercase', marginBottom: '10px', fontWeight: 'bold' }}>
                LOMURRO LAW FEATURED BOOK
              </div>
              <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '42px', fontWeight: 'bold', color: '#2C2C2C', marginBottom: '30px', lineHeight: '1.2' }}>
                What Sets Lomurro Law Apart
              </h2>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#666', marginBottom: '20px' }}>
                When you're injured and facing mounting medical bills, lost wages, and pain, you need more than just a lawyer – you need a dedicated advocate who will fight tirelessly for your rights. At Lomurro Law, we bring over three decades of experience, all five Pennsylvania Supreme Court certifications, and a proven track record of multi-million dollar verdicts and settlements.
              </p>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#666', marginBottom: '20px' }}>
                Our firm stands apart because we combine comprehensive legal knowledge with genuine compassion for our clients. We understand that behind every case is a person whose life has been disrupted, and we're committed to not only securing the compensation you deserve but also providing the personalized attention and support you need during this difficult time.
              </p>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#666', margin: 0 }}>
                From our downtown Greensburg office, we serve clients throughout Westmoreland County and beyond, handling everything from personal injury and medical malpractice to nursing home abuse and workers' compensation claims. With three generations of legal excellence and a commitment to aggressive representation, we're ready to put our experience to work for you.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <div style={{ position: 'absolute', top: '20px', right: '-40px', width: '150px', height: '150px', background: 'linear-gradient(135deg, #8B1538 0%, #5a0d23 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                  <div style={{ fontSize: '48px', fontWeight: 'bold', lineHeight: '1' }}>▶</div>
                </div>
                <img src="/book-cover.jpg" alt="Medical Malpractice" style={{ maxWidth: '100%', height: 'auto', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }} />
              </div>
              <p style={{ fontSize: '14px', color: '#666', marginTop: '30px', lineHeight: '1.6' }}>
                Attorney Matt Lomurro shares his insights on navigating Pennsylvania's complex medical malpractice laws and what you need to know to protect your rights when healthcare goes wrong.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#8B1538', padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '42px', fontWeight: 'bold', color: '#fff', marginBottom: '30px' }}>
            For More Information
          </h2>
          <p style={{ fontSize: '18px', color: '#fff', lineHeight: '1.8', marginBottom: '30px' }}>
            Contact us today for a free consultation. Call <a href="tel:7248348046" style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'underline' }}>724-834-8046</a> or fill out our <a href="/contact" style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'underline' }}>online form</a>.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#fff', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '42px', fontWeight: 'bold', color: '#2C2C2C', marginBottom: '10px', textAlign: 'center' }}>Meet Our Team</h2>
          <div style={{ width: '80px', height: '3px', backgroundColor: '#8B1538', margin: '0 auto 50px' }}></div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            <div style={{ textAlign: 'center' }}>
              <img src="/attorney-1.jpg" alt="Attorney Arthur Lomurro" style={{ width: '100%', height: '300px', objectFit: 'cover', marginBottom: '20px' }} />
              <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '20px', fontWeight: 'bold', color: '#2C2C2C', marginBottom: '5px' }}>Arthur Lomurro</h3>
              <p style={{ fontSize: '14px', color: '#8B1538', textTransform: 'uppercase', margin: 0 }}>Founding Attorney</p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <img src="/attorney-2.jpg" alt="Attorney Vincent Lomurro" style={{ width: '100%', height: '300px', objectFit: 'cover', marginBottom: '20px' }} />
              <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '20px', fontWeight: 'bold', color: '#2C2C2C', marginBottom: '5px' }}>Vincent B. Baroni</h3>
              <p style={{ fontSize: '14px', color: '#8B1538', textTransform: 'uppercase', margin: 0 }}>Senior Partner</p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <img src="/attorney-3.jpg" alt="Attorney Matthew Lomurro" style={{ width: '100%', height: '300px', objectFit: 'cover', marginBottom: '20px' }} />
              <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '20px', fontWeight: 'bold', color: '#2C2C2C', marginBottom: '5px' }}>Wayne Lee Altman</h3>
              <p style={{ fontSize: '14px', color: '#8B1538', textTransform: 'uppercase', margin: 0 }}>Partner</p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <img src="/attorney-4.jpg" alt="Attorney Robert Barr" style={{ width: '100%', height: '300px', objectFit: 'cover', marginBottom: '20px' }} />
              <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '20px', fontWeight: 'bold', color: '#2C2C2C', marginBottom: '5px' }}>Robert J. Barr</h3>
              <p style={{ fontSize: '14px', color: '#8B1538', textTransform: 'uppercase', margin: 0 }}>Partner</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#8B1538', padding: '60px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '36px', fontWeight: 'bold', color: '#fff', marginBottom: '20px' }}>
            Justice for you and your family begins today.
          </h2>
        </div>
      </section>

      <section style={{ backgroundColor: '#2C2C2C', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '42px', fontWeight: 'bold', color: '#fff', marginBottom: '50px', textAlign: 'center' }}>Contact The Office</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
            <div>
              <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '24px', color: '#8B1538', marginBottom: '30px', fontWeight: 'bold' }}>REQUEST A CONSULT</h3>
              <form action="/api/contact" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Full Name *" 
                  required 
                  style={{ padding: '15px', fontSize: '16px', border: '1px solid #555', backgroundColor: '#3a3a3a', color: '#fff' }} 
                />
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Phone Number *" 
                  required 
                  style={{ padding: '15px', fontSize: '16px', border: '1px solid #555', backgroundColor: '#3a3a3a', color: '#fff' }} 
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email Address *" 
                  required 
                  style={{ padding: '15px', fontSize: '16px', border: '1px solid #555', backgroundColor: '#3a3a3a', color: '#fff' }} 
                />
                <textarea 
                  name="message" 
                  placeholder="Message *" 
                  required 
                  rows={6} 
                  style={{ padding: '15px', fontSize: '16px', border: '1px solid #555', backgroundColor: '#3a3a3a', color: '#fff', fontFamily: "'Lato', sans-serif" }}
                ></textarea>
                <button 
                  type="submit" 
                  style={{ backgroundColor: '#8B1538', color: '#fff', padding: '15px 35px', fontSize: '16px', fontWeight: 'bold', textTransform: 'uppercase', border: 'none', cursor: 'pointer' }}
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>

            <div>
              <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '24px', color: '#8B1538', marginBottom: '30px', fontWeight: 'bold' }}>OFFICE INFORMATION</h3>
              
              <div style={{ marginBottom: '40px' }}>
                <h4 style={{ color: '#fff', fontSize: '18px', marginBottom: '15px', fontWeight: 'bold' }}>PHONE NUMBER</h4>
                <p style={{ color: '#ccc', fontSize: '16px', margin: 0 }}>
                  <a href="tel:7248348046" style={{ color: '#ccc', textDecoration: 'none' }}>724-834-8046</a>
                </p>
              </div>

              <div style={{ marginBottom: '40px' }}>
                <h4 style={{ color: '#fff', fontSize: '18px', marginBottom: '15px', fontWeight: 'bold' }}>OFFICE ADDRESS</h4>
                <p style={{ color: '#ccc', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
                  21 OTTERMAN STREET<br />
                  GREENSBURG, PA 15601
                </p>
              </div>

              <div style={{ marginBottom: '40px' }}>
                <h4 style={{ color: '#fff', fontSize: '18px', marginBottom: '15px', fontWeight: 'bold' }}>EMAIL</h4>
                <p style={{ color: '#ccc', fontSize: '16px', margin: 0 }}>
                  <a href="mailto:info@lomurrolaw.com" style={{ color: '#ccc', textDecoration: 'none' }}>info@lomurrolaw.com</a>
                </p>
              </div>

              <div>
                <h4 style={{ color: '#fff', fontSize: '18px', marginBottom: '15px', fontWeight: 'bold' }}>OFFICE HOURS</h4>
                <p style={{ color: '#ccc', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
                  Monday - Friday: 8:30 AM - 5:00 PM<br />
                  Saturday - Sunday: Closed
                </p>
              </div>

              <div style={{ marginTop: '40px', display: 'flex', gap: '15px' }}>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '