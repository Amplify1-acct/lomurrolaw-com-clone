/** @jsxImportSource react */
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LoMurro Law - NJ Supreme Court Certified Civil Trial Attorney',
  description: 'LoMurro Law provides experienced legal representation in New Jersey with all five Supreme Court certifications. Contact us for personal injury, workers compensation, and more.',
  openGraph: {
    title: 'LoMurro Law - NJ Supreme Court Certified Civil Trial Attorney',
    description: 'LoMurro Law provides experienced legal representation in New Jersey with all five Supreme Court certifications.',
    url: 'https://www.lomurrolaw.com/',
    siteName: 'LoMurro Law',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.lomurrolaw.com/'
  }
}

export default function HomePage() {
  return (
    <div style={{ fontFamily: "'Open Sans', sans-serif", margin: 0, padding: 0 }}>
      <header style={{ 
        backgroundColor: '#FFFFFF', 
        padding: '20px 40px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        borderBottom: '1px solid #E0E0E0'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '40px', height: '40px', backgroundColor: '#8B1538' }}></div>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '24px', fontWeight: 700, color: '#2C2C2C' }}>LOMURRO LAW</span>
        </div>
        <nav style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <a href="/" style={{ color: '#2C2C2C', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>HOME</a>
          <a href="/about" style={{ color: '#2C2C2C', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>ABOUT</a>
          <a href="/practice-areas" style={{ color: '#2C2C2C', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>PRACTICE AREAS</a>
          <a href="/case-results" style={{ color: '#2C2C2C', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>CASE RESULTS</a>
          <a href="/blog" style={{ color: '#2C2C2C', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>BLOG</a>
          <a href="/contact" style={{ color: '#2C2C2C', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>CONTACT</a>
        </nav>
      </header>

      <section style={{ 
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#FFFFFF',
        padding: '0 20px'
      }}>
        <h1 style={{ 
          fontFamily: "'Montserrat', sans-serif", 
          fontSize: '48px', 
          fontWeight: 700, 
          margin: '0 0 20px 0',
          maxWidth: '900px',
          lineHeight: '1.2'
        }}>
          THE NJ LAWYER CERTIFIED IN ALL FIVE SUPREME COURT CERTIFICATIONS
        </h1>
      </section>

      <section style={{ padding: '80px 40px', backgroundColor: '#F8F8F8' }}>
        <h2 style={{ 
          fontFamily: "'Montserrat', sans-serif", 
          fontSize: '36px', 
          fontWeight: 700, 
          color: '#2C2C2C',
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          Case Results
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '40px', 
          maxWidth: '1200px', 
          margin: '0 auto' 
        }}>
          <div style={{ backgroundColor: '#FFFFFF', padding: '40px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <h3 style={{ 
              fontFamily: "'Montserrat', sans-serif", 
              fontSize: '32px', 
              fontWeight: 700, 
              color: '#8B1538',
              margin: '0 0 20px 0'
            }}>
              $1,650,000
            </h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#2C2C2C', margin: '0 0 30px 0' }}>
              Our client was involved in a motor vehicle accident that resulted in significant injuries. After extensive litigation, we secured a settlement that covered all medical expenses and provided compensation for pain and suffering.
            </p>
            <a href="/case-results" style={{ 
              display: 'inline-block',
              backgroundColor: '#8B1538', 
              color: '#FFFFFF', 
              padding: '12px 30px', 
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 600,
              textTransform: 'uppercase'
            }}>
              READ MORE
            </a>
          </div>
          <div style={{ backgroundColor: '#FFFFFF', padding: '40px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <h3 style={{ 
              fontFamily: "'Montserrat', sans-serif", 
              fontSize: '32px', 
              fontWeight: 700, 
              color: '#8B1538',
              margin: '0 0 20px 0'
            }}>
              $2,500,000
            </h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#2C2C2C', margin: '0 0 30px 0' }}>
              A workplace injury case where our client suffered permanent disability. We fought aggressively to ensure maximum compensation for lost wages and future medical care.
            </p>
            <a href="/case-results" style={{ 
              display: 'inline-block',
              backgroundColor: '#8B1538', 
              color: '#FFFFFF', 
              padding: '12px 30px', 
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 600,
              textTransform: 'uppercase'
            }}>
              READ MORE
            </a>
          </div>
          <div style={{ backgroundColor: '#FFFFFF', padding: '40px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <h3 style={{ 
              fontFamily: "'Montserrat', sans-serif", 
              fontSize: '32px', 
              fontWeight: 700, 
              color: '#8B1538',
              margin: '0 0 20px 0'
            }}>
              $3,650,000
            </h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#2C2C2C', margin: '0 0 30px 0' }}>
              A complex personal injury case involving multiple defendants. Our thorough investigation and expert testimony led to a substantial settlement for our client.
            </p>
            <a href="/case-results" style={{ 
              display: 'inline-block',
              backgroundColor: '#8B1538', 
              color: '#FFFFFF', 
              padding: '12px 30px', 
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 600,
              textTransform: 'uppercase'
            }}>
              READ MORE
            </a>
          </div>
        </div>
      </section>

      <section style={{ 
        background: 'linear-gradient(135deg, #8B1538 0%, #8B1538 60%, #2C2C2C 60%, #2C2C2C 100%)',
        padding: '80px 40px',
        color: '#FFFFFF'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <h2 style={{ 
              fontFamily: "'Montserrat', sans-serif", 
              fontSize: '36px', 
              fontWeight: 700,
              margin: '0 0 30px 0'
            }}>
              Legal Experience to Work For You
            </h2>
          </div>
          <div>
            <p style={{ fontSize: '16px', lineHeight: '1.8', margin: '0 0 20px 0' }}>
              At LoMurro Law, we bring decades of legal expertise to every case. Our firm is dedicated to providing exceptional representation and achieving the best possible outcomes for our clients.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.8', margin: 0 }}>
              We understand that legal issues can be overwhelming. That's why we take a personalized approach, ensuring that you receive the attention and support you deserve throughout the entire legal process.
            </p>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#2C2C2C', padding: '80px 40px', color: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
          <div>
            <div style={{ backgroundColor: '#8B1538', width: '60px', height: '60px', marginBottom: '20px' }}></div>
            <h3 style={{ 
              fontFamily: "'Montserrat', sans-serif", 
              fontSize: '18px', 
              fontWeight: 700,
              margin: '0 0 15px 0'
            }}>
              PERSONAL INJURY
            </h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', margin: '0 0 20px 0' }}>
              We fight for victims of accidents and negligence to ensure they receive fair compensation.
            </p>
            <a href="/practice-areas/personal-injury" style={{ color: '#8B1538', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
              LEARN MORE →
            </a>
          </div>
          <div>
            <div style={{ backgroundColor: '#8B1538', width: '60px', height: '60px', marginBottom: '20px' }}></div>
            <h3 style={{ 
              fontFamily: "'Montserrat', sans-serif", 
              fontSize: '18px', 
              fontWeight: 700,
              margin: '0 0 15px 0'
            }}>
              WORKERS COMPENSATION
            </h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', margin: '0 0 20px 0' }}>
              Helping injured workers navigate the complex workers compensation system.
            </p>
            <a href="/practice-areas/workers-compensation" style={{ color: '#8B1538', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
              LEARN MORE →
            </a>
          </div>
          <div>
            <div style={{ backgroundColor: '#8B1538', width: '60px', height: '60px', marginBottom: '20px' }}></div>
            <h3 style={{ 
              fontFamily: "'Montserrat', sans-serif", 
              fontSize: '18px', 
              fontWeight: 700,
              margin: '0 0 15px 0'
            }}>
              CIVIL LITIGATION
            </h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', margin: '0 0 20px 0' }}>
              Experienced trial attorneys ready to represent you in complex civil matters.
            </p>
            <a href="/practice-areas/civil-litigation" style={{ color: '#8B1538', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
              LEARN MORE →
            </a>
          </div>
          <div>
            <div style={{ backgroundColor: '#8B1538', width: '60px', height: '60px', marginBottom: '20px' }}></div>
            <h3 style={{ 
              fontFamily: "'Montserrat', sans-serif", 
              fontSize: '18px', 
              fontWeight: 700,
              margin: '0 0 15px 0'
            }}>
              FAMILY LAW
            </h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', margin: '0 0 20px 0' }}>
              Compassionate guidance through divorce, custody, and family law matters.
            </p>
            <a href="/practice-areas/family-law" style={{ color: '#8B1538', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
              LEARN MORE →
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 40px', backgroundColor: '#F8F8F8' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '60px' }}>
          <div>
            <h2 style={{ 
              fontFamily: "'Montserrat', sans-serif", 
              fontSize: '36px', 
              fontWeight: 700,
              color: '#2C2C2C',
              margin: '0 0 30px 0'
            }}>
              What Sets LoMurro Law Apart
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#2C2C2C', margin: '0 0 20px 0' }}>
              LoMurro Law stands out as the only attorney in New Jersey certified in all five Supreme Court certifications. This unique distinction demonstrates our commitment to excellence and comprehensive legal expertise across multiple practice areas.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#2C2C2C', margin: '0 0 20px 0' }}>
              Our firm combines decades of courtroom experience with a personalized approach to client service. We understand that every case is unique, and we dedicate ourselves to understanding your specific needs and goals.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#2C2C2C', margin: 0 }}>
              When you choose LoMurro Law, you're choosing a team that will fight tirelessly for your rights and work to achieve the best possible outcome for your case.
            </p>
          </div>
          <div style={{ backgroundColor: '#8B1538', padding: '40px', color: '#FFFFFF', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ marginBottom: '30px' }}>
              <div style={{ fontSize: '48px', fontWeight: 700, marginBottom: '10px' }}>5</div>
              <div style={{ fontSize: '18px', fontWeight: 600 }}>Supreme Court Certifications</div>
            </div>
            <div style={{ marginBottom: '30px' }}>
              <div style={{ fontSize: '48px', fontWeight: 700, marginBottom: '10px' }}>30+</div>
              <div style={{ fontSize: '18px', fontWeight: 600 }}>Years of Experience</div>
            </div>
            <div>
              <div style={{ fontSize: '48px', fontWeight: 700, marginBottom: '10px' }}>1000+</div>
              <div style={{ fontSize: '18px', fontWeight: 600 }}>Cases Won</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#8B1538', padding: '80px 40px', color: '#FFFFFF', textAlign: 'center' }}>
        <h2 style={{ 
          fontFamily: "'Montserrat', sans-serif", 
          fontSize: '36px', 
          fontWeight: 700,
          margin: '0 0 20px 0'
        }}>
          For More Information
        </h2>
        <p style={{ fontSize: '18px', margin: '0 0 30px 0' }}>
          Contact us today for a free consultation about your legal matter
        </p>
      </section>

      <section style={{ padding: '80px 40px', backgroundColor: '#F8F8F8' }}>
        <h2 style={{ 
          fontFamily: "'Montserrat', sans-serif", 
          fontSize: '36px', 
          fontWeight: 700,
          color: '#2C2C2C',
          textAlign: 'center',
          margin: '0 0 60px 0'
        }}>
          Meet Our Team
        </h2>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '40px' 
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '100%', height: '300px', backgroundColor: '#CCCCCC', marginBottom: '20px' }}></div>
            <h3 style={{ 
              fontFamily: "'Montserrat', sans-serif", 
              fontSize: '20px', 
              fontWeight: 700,
              color: '#2C2C2C',
              margin: '0 0 10px 0'
            }}>
              JAMES LOMURRO
            </h3>
            <p style={{ fontSize: '14px', color: '#8B1538', fontWeight: 600 }}>MANAGING PARTNER</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '100%', height: '300px', backgroundColor: '#CCCCCC', marginBottom: '20px' }}></div>
            <h3 style={{ 
              fontFamily: "'Montserrat', sans-serif", 
              fontSize: '20px', 
              fontWeight: 700,
              color: '#2C2C2C',
              margin: '0 0 10px 0'
            }}>
              JOHN SMITH
            </h3>
            <p style={{ fontSize: '14px', color: '#8B1538', fontWeight: 600 }}>SENIOR PARTNER</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '100%', height: '300px', backgroundColor: '#CCCCCC', marginBottom: '20px' }}></div>
            <h3 style={{ 
              fontFamily: "'Montserrat', sans-serif", 
              fontSize: '20px', 
              fontWeight: 700,
              color: '#2C2C2C',
              margin: '0 0 10px 0'
            }}>
              SARAH DAVIS
            </h3>
            <p style={{ fontSize: '14px', color: '#8B1538', fontWeight: 600 }}>ASSOCIATE</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '100%', height: '300px', backgroundColor: '#CCCCCC', marginBottom: '20px' }}></div>
            <h3 style={{ 
              fontFamily: "'Montserrat', sans-serif", 
              fontSize: '20px', 
              fontWeight: 700,
              color: '#2C2C2C',
              margin: '0 0 10px 0'
            }}>
              ROBERT JONES
            </h3>
            <p style={{ fontSize: '14px', color: '#8B1538', fontWeight: 600 }}>ATTORNEY</p>
          </div>
        </div>
      </section>

      <section style={{ 
        backgroundColor: '#8B1538', 
        padding: '60px 40px', 
        color: '#FFFFFF',
        textAlign: 'center'
      }}>
        <h2 style={{ 
          fontFamily: "'Montserrat', sans-serif", 
          fontSize: '32px', 
          fontWeight: 700,
          margin: '0 0 10px 0'
        }}>
          Ready to get started? We're here to help today.
        </h2>
      </section>

      <section style={{ backgroundColor: '#2C2C2C', padding: '80px 40px', color: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            fontFamily: "'Montserrat', sans-serif", 
            fontSize: '32px', 
            fontWeight: 700,
            textAlign: 'center',
            margin: '0 0 50px 0'
          }}>
            Contact Our Office
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '60px' }}>
            <div>
              <h3 style={{ 
                fontFamily: "'Montserrat', sans-serif", 
                fontSize: '20px', 
                fontWeight: 700,
                margin: '0 0 20px 0'
              }}>
                VISIT US AT
              </h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                123 Main Street<br />
                Suite 100<br />
                Newark, NJ 07102
              </p>
            </div>
            <div>
              <h3 style={{ 
                fontFamily: "'Montserrat', sans-serif", 
                fontSize: '20px', 
                fontWeight: 700,
                margin: '0 0 20px 0'
              }}>
                CALL US AT
              </h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                Phone: (555) 123-4567<br />
                Fax: (555) 123-4568
              </p>
            </div>
            <div>
              <h3 style={{ 
                fontFamily: "'Montserrat', sans-serif", 
                fontSize: '20px', 
                fontWeight: 700,
                margin: '0 0 20px 0'
              }}>
                EMAIL US AT
              </h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                info@lomurrolaw.com<br />
                Available 24/7
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 40px', backgroundColor: '#F8F8F8' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ 
            fontFamily: "'Montserrat', sans-serif", 
            fontSize: '32px', 
            fontWeight: 700,
            color: '#2C2C2C',
            textAlign: 'center',
            margin: '0 0 40px 0'
          }}>
            Request a Free Consultation
          </h2>
          <form action="/api/contact" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              required
              style={{ 
                padding: '15px', 
                fontSize: '16px', 
                border: '1px solid #CCCCCC',
                fontFamily: "'Open Sans', sans-serif"
              }}
            />
            <input 
              type="tel" 
              name="phone" 
              placeholder="Your Phone" 
              required
              style={{ 
                padding: '15px', 
                fontSize: '16px', 
                border: '1px solid #CCCCCC',
                fontFamily: "'Open Sans', sans-serif"
              }}
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              required
              style={{ 
                padding: '15px', 
                fontSize: '16px', 
                border: '1px solid #CCCCCC',
                fontFamily: "'Open Sans', sans-serif"
              }}
            />
            <textarea 
              name="message" 
              placeholder="Tell us about your case" 
              rows={6}
              required
              style={{ 
                padding: '15px', 
                fontSize: '16px', 
                border: '1px solid #CCCCCC',
                fontFamily: "'Open Sans', sans-serif",
                resize: 'vertical'
              }}
            ></textarea>
            <button 
              type="submit"
              style={{ 
                backgroundColor: '#8B1538', 
                color: '#FFFFFF', 
                padding: '15px 40px', 
                fontSize: '16px', 
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                textTransform: 'uppercase',
                fontFamily: "'Montserrat', sans-serif"
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      <footer style={{ backgroundColor: '#2C2C2C', padding: '40px', textAlign: 'center', color: '#FFFFFF' }}>
        <div style={{ marginBottom: '20px' }}>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '24px', fontWeight: 700 }}>LOMURRO LAW</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
          <a href="#" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Facebook</a>
          <a href="#" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Twitter</a>
          <a href="#" style={{ color: '#FFFFFF', textDecoration: 'none' }}>LinkedIn</a>
          <a href="#" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Instagram</a>
        </div>
        <p style={{ fontSize: '14px', margin: 0 }}>© 2024 LoMurro Law. All rights reserved.</p>
      </footer>
    </div>
  )
}