import React from 'react';

export const metadata = {
  title: 'Lomurro Law | NJ With All Five Supreme Court Certifications',
  description: 'Lomurro Law has all five Supreme Court certifications in New Jersey. Experienced legal representation in personal injury, medical malpractice, and more. Call (732) 842-0030.',
  openGraph: {
    title: 'Lomurro Law | NJ With All Five Supreme Court Certifications',
    description: 'Lomurro Law has all five Supreme Court certifications in New Jersey. Experienced legal representation in personal injury, medical malpractice, and more.',
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
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      message: formData.get('message'),
    };
    
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      alert('Thank you for your message. We will contact you shortly.');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      alert('There was an error submitting your message. Please try again.');
    }
  };

  return (
    <div style={{ fontFamily: "'Open Sans', sans-serif", color: '#2c2c2c', lineHeight: '1.6' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#ffffff', padding: '20px 0', borderBottom: '1px solid #e0e0e0', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/logo.png" alt="Lomurro Law" style={{ height: '50px' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px' }}>
            <span style={{ color: '#2c2c2c' }}>WE ANSWER OUR PHONES 24/7</span>
            <a href="tel:7328420030" style={{ color: '#8b1538', fontWeight: 'bold', textDecoration: 'none', fontSize: '16px' }}>(732) 842-0030</a>
          </div>
        </div>
        <nav style={{ maxWidth: '1200px', margin: '10px auto 0', padding: '0 20px' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: '30px', fontSize: '14px', textTransform: 'uppercase', fontWeight: 600 }}>
            <li><a href="/" style={{ color: '#2c2c2c', textDecoration: 'none' }}>HOME</a></li>
            <li><a href="/attorneys" style={{ color: '#2c2c2c', textDecoration: 'none' }}>ATTORNEYS</a></li>
            <li><a href="/practice-areas" style={{ color: '#2c2c2c', textDecoration: 'none' }}>PRACTICE AREAS</a></li>
            <li><a href="/results" style={{ color: '#2c2c2c', textDecoration: 'none' }}>RESULTS</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{ 
        backgroundImage: 'url(/hero-bg.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        position: 'relative',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.6)' }}></div>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px', position: 'relative', zIndex: 1 }}>
          <h1 style={{ 
            fontFamily: "'Montserrat', sans-serif", 
            fontSize: '56px', 
            fontWeight: 700, 
            color: '#ffffff', 
            marginBottom: '30px',
            lineHeight: '1.2',
            maxWidth: '700px'
          }}>
            IN NJ WITH ALL FIVE SUPREME COURT CERTIFICATIONS
          </h1>
          <p style={{ color: '#ffffff', fontSize: '16px', maxWidth: '600px', marginBottom: '40px', lineHeight: '1.8' }}>
            At Lomurro Law, we are committed to delivering exceptional legal representation in personal injury, medical malpractice, and civil trial advocacy. With all five New Jersey Supreme Court certifications, our team has the experience and expertise to handle your most complex legal matters.
          </p>
          <a href="#contact" style={{ 
            backgroundColor: '#8b1538', 
            color: '#ffffff', 
            padding: '15px 40px', 
            textDecoration: 'none', 
            fontWeight: 600,
            fontSize: '14px',
            textTransform: 'uppercase',
            display: 'inline-block',
            border: 'none',
            cursor: 'pointer'
          }}>
            CONTACT
          </a>
        </div>
      </section>

      {/* Case Results Section */}
      <section style={{ backgroundColor: '#f5f5f5', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            fontFamily: "'Montserrat', sans-serif", 
            fontSize: '42px', 
            fontWeight: 700, 
            color: '#2c2c2c', 
            marginBottom: '10px',
            textAlign: 'left'
          }}>
            Case Results
          </h2>
          <div style={{ width: '80px', height: '4px', backgroundColor: '#8b1538', marginBottom: '50px' }}></div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div style={{ backgroundColor: '#ffffff', padding: '40px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              <h3 style={{ 
                fontFamily: "'Montserrat', sans-serif", 
                fontSize: '36px', 
                fontWeight: 700, 
                color: '#8b1538', 
                marginBottom: '20px'
              }}>
                $1,150,000
              </h3>
              <p style={{ fontSize: '14px', color: '#2c2c2c', lineHeight: '1.8', marginBottom: '20px' }}>
                A 62-year-old man died from septic shock after a delay in diagnosis. The defendants disputed causation and claimed the patient would have died even if treated earlier. The case settled prior to trial.
              </p>
              <a href="/results" style={{ 
                backgroundColor: '#8b1538', 
                color: '#ffffff', 
                padding: '12px 30px', 
                textDecoration: 'none', 
                fontWeight: 600,
                fontSize: '12px',
                textTransform: 'uppercase',
                display: 'inline-block'
              }}>
                VIEW ALL RESULTS
              </a>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '40px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              <h3 style={{ 
                fontFamily: "'Montserrat', sans-serif", 
                fontSize: '36px', 
                fontWeight: 700, 
                color: '#8b1538', 
                marginBottom: '20px'
              }}>
                $2,500,000
              </h3>
              <p style={{ fontSize: '14px', color: '#2c2c2c', lineHeight: '1.8' }}>
                A 47-year-old man was denied proper medical treatment while imprisoned, resulting in severe health complications. The settlement was reached after extensive litigation.
              </p>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '40px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              <h3 style={{ 
                fontFamily: "'Montserrat', sans-serif", 
                fontSize: '36px', 
                fontWeight: 700, 
                color: '#8b1538', 
                marginBottom: '20px'
              }}>
                $2,300,000
              </h3>
              <p style={{ fontSize: '14px', color: '#2c2c2c', lineHeight: '1.8' }}>
                A man died as a result of delays in diagnosis, treatment, and transfer to a higher level of care after presenting to an emergency room with chest pain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Experience Section */}
      <section style={{ backgroundColor: '#ffffff', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <h2 style={{ 
                fontFamily: "'Montserrat', sans-serif", 
                fontSize: '42px', 
                fontWeight: 700, 
                color: '#8b1538', 
                marginBottom: '30px',
                lineHeight: '1.2'
              }}>
                Legal Experience To Work For You
              </h2>
              <p style={{ fontSize: '15px', color: '#2c2c2c', lineHeight: '1.8', marginBottom: '20px' }}>
                At Lomurro Law, our attorneys bring decades of combined legal experience to every case. We are one of the only law firms in New Jersey to hold all five Supreme Court certifications, demonstrating our commitment to excellence across multiple practice areas.
              </p>
              <p style={{ fontSize: '15px', color: '#2c2c2c', lineHeight: '1.8', marginBottom: '20px' }}>
                Our team has successfully represented clients in complex medical malpractice cases, personal injury claims, civil trial litigation, and more. We understand the challenges you face and are dedicated to achieving the best possible outcome for your case.
              </p>
              <p style={{ fontSize: '15px', color: '#2c2c2c', lineHeight: '1.8' }}>
                When you choose Lomurro Law, you are choosing a team that will fight tirelessly for your rights and work to secure the compensation you deserve.
              </p>
            </div>
            <div>
              <p style={{ fontSize: '15px', color: '#2c2c2c', lineHeight: '1.8', marginBottom: '20px' }}>
                We pride ourselves on our personalized approach to legal representation. Every client receives individual attention and a customized legal strategy tailored to their unique circumstances.
              </p>
              <p style={{ fontSize: '15px', color: '#2c2c2c', lineHeight: '1.8', marginBottom: '20px' }}>
                Our track record speaks for itself, with millions of dollars recovered for our clients over the years. We have the resources, experience, and determination to take on even the most challenging cases.
              </p>
              <p style={{ fontSize: '15px', color: '#2c2c2c', lineHeight: '1.8' }}>
                Whether you are dealing with a medical malpractice claim, a serious personal injury, or need experienced civil trial representation, Lomurro Law is here to help. Contact us today for a free consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section style={{ backgroundColor: '#2c2c2c', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2px' }}>
            <div style={{ backgroundColor: '#8b1538', padding: '40px', minHeight: '200px' }}>
              <h3 style={{ 
                fontFamily: "'Montserrat', sans-serif", 
                fontSize: '18px', 
                fontWeight: 700, 
                color: '#ffffff', 
                marginBottom: '15px',
                textTransform: 'uppercase'
              }}>
                PERSONAL INJURY
              </h3>
              <p style={{ fontSize: '14px', color: '#ffffff', lineHeight: '1.6' }}>
                We represent victims of car accidents, slip and falls, workplace injuries, and other personal injury matters.
              </p>
            </div>

            <div style={{ backgroundColor: '#8b1538', padding: '40px', minHeight: '200px' }}>
              <h3 style={{ 
                fontFamily: "'Montserrat', sans-serif", 
                fontSize: '18px', 
                fontWeight: 700, 
                color: '#ffffff', 
                marginBottom: '15px',
                textTransform: 'uppercase'
              }}>
                MEDICAL MALPRACTICE
              </h3>
              <p style={{ fontSize: '14px', color: '#ffffff', lineHeight: '1.6' }}>
                Our team handles complex medical malpractice cases involving surgical errors, misdiagnosis, and birth injuries.
              </p>
            </div>

            <div style={{ backgroundColor: '#8b1538', padding: '40px', minHeight: '200px' }}>
              <h3 style={{ 
                fontFamily: "'Montserrat', sans-serif", 
                fontSize: '18px', 
                fontWeight: 700, 
                color: '#ffffff', 
                marginBottom: '15px',
                textTransform: 'uppercase'
              }}>
                WRONGFUL DEATH
              </h3>
              <p style={{ fontSize: '14px', color: '#ffffff', lineHeight: '1.6' }}>
                We provide compassionate representation to families who have lost loved ones due to negligence or wrongful acts.
              </p>
            </div>

            <div style={{ backgroundColor: '#8b1538', padding: '40px', minHeight: '200px' }}>
              <h3 style={{ 
                fontFamily: "'Montserrat', sans-serif", 
                fontSize: '18px', 
                fontWeight: 700, 
                color: '#ffffff', 
                marginBottom: '15px',
                textTransform: 'uppercase'
              }}>
                CRIMINAL LAW
              </h3>
              <p style={{ fontSize: '14px', color: '#ffffff', lineHeight: '1.6' }}>
                Our certified criminal trial attorneys defend clients facing serious criminal charges throughout New Jersey.
              </p>
            </div>

            <div style={{ backgroundColor: '#8b1538', padding: '40px', minHeight: '200px' }}>
              <h3 style={{ 
                fontFamily: "'Montserrat', sans-serif", 
                fontSize: '18px', 
                fontWeight: 700, 
                color: '#ffffff', 
                marginBottom: '15px',
                textTransform: 'uppercase'
              }}>
                CIVIL LITIGATION
              </h3>
              <p style={{ fontSize: '14px', color: '#ffffff', lineLine: '1.6' }}>
                We handle a wide range of civil litigation matters with skill and dedication to achieving favorable outcomes.
              </p>
            </div>

            <div style={{ backgroundColor: '#8b1538', padding: '40px', minHeight: '200px' }}>
              <h3 style={{ 
                fontFamily: "'Montserrat', sans-serif", 
                fontSize: '18px', 
                fontWeight: 700, 
                color: '#ffffff', 
                marginBottom: '15px',
                textTransform: 'uppercase'
              }}>
                APPELLATE PRACTICE
              </h3>
              <p style={{ fontSize: '14px', color: '#ffffff', lineHeight: '1.6' }}>
                Our appellate attorneys have extensive experience handling appeals in state and federal courts.
              </p>
            </div>

            <div style={{ backgroundColor: '#8b1538', padding: '40px', minHeight: '200px' }}>
              <h3 style={{ 
                fontFamily: "'Montserrat', sans-serif", 
                fontSize: '18px', 
                fontWeight: 700, 
                color: '#ffffff', 
                marginBottom: '15px',
                textTransform: 'uppercase'
              }}>
                CIVIL TRIAL ATTORNEY
              </h3>
              <p style={{ fontSize: '14px', color: '#ffffff', lineHeight: '1.6' }}>
                Our certified civil trial attorneys are prepared to take your case to trial when necessary to protect your rights.
              </p>
            </div>

            <div style={{ backgroundColor: '#8b1538', padding: '40px', minHeight: '200px' }}>
              <h3 style={{ 
                fontFamily: "'Montserrat', sans-serif", 
                fontSize: '18px', 
                fontWeight: 700, 
                color: '#ffffff', 
                marginBottom: '15px',
                textTransform: 'uppercase'
              }}>
                CONSTRUCTION LAW
              </h3>
              <p style={{ fontSize: '14px', color: '#ffffff', lineHeight: '1.6' }}>
                We represent clients in construction-related disputes, including contractor negligence and worksite accidents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section style={{ backgroundColor: '#f5f5f5', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'flex-start' }}>
            <div>
              <p style={{ 
                fontFamily: "'Montserrat', sans-serif", 
                fontSize: '14px', 
                fontWeight: 600, 
                color: '#8b1538', 
                marginBottom: '15px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                LOMURRO CERTIFIED LAWYERS
              </p>
              <h2 style={{ 
                fontFamily: "'Montserrat', sans-serif", 
                fontSize: '42px', 
                fontWeight: 700, 
                color: '#2c2c2c', 
                marginBottom: '30px',
                lineHeight: '1.2'
              }}>
                What Sets Lomurro Law Apart
              </h2>
              <p style={{ fontSize: '15px', color: '#2c2c2c', lineHeight: '1.8', marginBottom: '20px' }}>
                What truly distinguishes Lomurro Law from other firms is our unique combination of Supreme Court certifications. We are one of the only law firms in New Jersey to hold all five certifications, covering civil trial attorney, criminal trial attorney, workers' compensation, matrimonial law, and workers' compensation law.
              </p>
              <p style={{ fontSize: '15px', color: '#2c2c2c', lineHeight: '1.8', marginBottom: '20px' }}>
                These certifications represent the highest level of professional recognition in New Jersey and demonstrate our commitment to excellence in legal representation. To earn certification, attorneys must meet rigorous standards including substantial experience, peer review, continuing education, and passing comprehensive examinations.
              </p>
              <p style={{ fontSize: '15px', color: '#2c2c2c', lineHeight: '1.8' }}>
                This breadth of expertise allows us to provide comprehensive legal services and approach each case from multiple perspectives, ensuring the best possible outcome for our clients.
              </p>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ backgroundColor: '#8b1538', padding: '60px 40px', color: '#ffffff' }}>
                <h3 style={{ 
                  fontFamily: "'Montserrat', sans-serif", 
                  fontSize: '24px', 
                  fontWeight: 700, 
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  AWARD WINNING
                </h3>
                <h2 style={{ 
                  fontFamily: "'Montserrat', sans-serif", 
                  fontSize: '36px', 
                  fontWeight: 700, 
                  marginBottom: '30px',
                  textAlign: 'center',
                  lineHeight: '1.2'
                }}>
                  New Jersey Medical Malpractice Law
                </h2>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                  <div style={{ display: 'inline-block', backgroundColor: '#2c2c2c', padding: '40px', borderRadius: '50%' }}>
                    <div style={{ fontSize: '18px', fontWeight: 700 }}>SUPER</div>
                    <div style={{ fontSize: '14px' }}>LAWYERS</div>
                  </div>
                </div>
                <p style={{ fontSize: '14px', lineHeight: '1.8', textAlign: 'center' }}>
                  Lomurro Law has been recognized by Super Lawyers for our exceptional work in medical malpractice and personal injury law. This distinction is awarded to only a select group of attorneys who have demonstrated excellence in practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For More Information CTA */}
      <section style={{ backgroundColor: '#8b1538', padding: '60px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            fontFamily: "'Montserrat', sans-serif", 
            fontSize: '36px', 
            fontWeight: 700, 
            color: '#ffffff', 
            marginBottom: '20px'
          }}>
            For More Information
          </h2>
          <p style={{ fontSize: '16px', color: '#ffffff', marginBottom: '30px' }}>
            To find out more about how we can help with your legal matter, contact us today for a free, no-obligation consultation.
          </p>
          <a href="tel:7328420030" style={{ 
            backgroundColor: '#ffffff', 
            color: '#8b1538', 
            padding: '15px 40px', 
            textDecoration: 'none', 
            fontWeight: 600,
            fontSize: '14px',
            textTransform: 'uppercase',
            display: 'inline-block'
          }}>
            CALL (732) 842-0030
          </a>
        </div>
      </section>

      {/* Meet Our Team */}
      <section style={{ backgroundColor: '#f5f5f5', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            fontFamily: "'Montserrat', sans-serif", 
            fontSize: '42px', 
            fontWeight: 700, 
            color: '#2c2c2c', 
            marginBottom: '50px',
            textAlign: 'center'
          }}>
            Meet Our Team
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            <div style={{ textAlign: 'center', backgroundColor: '#ffffff', padding: '30px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              <img src="/team-1.jpg" alt="Martin J. Lomurro, Esq." style={{ width: '100%', height: '300px', objectFit: 'cover', marginBottom: '20px' }} />
              <h3 style={{ 
                fontFamily: "'Montserrat', sans-serif", 
                fontSize: '20px', 
                fontWeight: 700, 
                color: '#2c2c2c', 
                marginBottom: '5px'
              }}>
                Martin J. Lomurro, Esq.
              </h3>
              <p style={{ fontSize: '14px', color: '#8b1538', fontWeight: 600 }}>Founding Partner</p>
            </div>

            <div style={{ textAlign: 'center', backgroundColor: '#ffffff', padding: '30px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              <img src="/team-2.jpg" alt="Andrew Kimson" style={{ width: '100%', height: '300px', objectFit: 'cover', marginBottom: '20px' }} />
              <h3 style={{ 
                fontFamily: "'Montserrat', sans-serif", 
                fontSize: '20px', 
                fontWeight: 700, 
                color: '#2c2c2c', 
                marginBottom: '5px'
              }}>
                Andrew Kimson
              </h3>
              <p style={{ fontSize: '14px', color: '#8b1538', fontWeight: 600 }}>Attorney</p>
            </div>

            <div style={{ textAlign: 'center', backgroundColor: '#ffffff', padding: '30px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              <img src="/team-3.jpg" alt="Allison P. Shaw" style={{ width: '100%', height: '300px', objectFit: 'cover', marginBottom: '20px' }} />
              <h3 style={{ 
                fontFamily: "'Montserrat', sans-serif", 
                fontSize: '20px', 
                fontWeight: 700, 
                color: '#2c2c2c', 
                marginBottom: '5px'
              }}>
                Allison P. Shaw
              </h3>
              <p style={{ fontSize: '14px', color: '#8b1538', fontWeight: 600 }}>Attorney</p>
            </div>

            <div style={{ textAlign: 'center', backgroundColor: '#ffffff', padding: '30px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              <img src="/team-4.jpg" alt="Derrick Lee Tyson" style={{ width: '100%', height: '300px', objectFit: 'cover', marginBottom: '20px' }} />
              <h3 style={{ 
                fontFamily: "'Montserrat', sans-serif", 
                fontSize: '20px', 
                fontWeight: 700, 
                color: '#2c2c2c', 
                marginBottom: '5px'
              }}>
                Derrick Lee Tyson
              </h3>
              <p style={{ fontSize: '14px', color: '#8b1538', fontWeight: 600 }}>Attorney</p>
            </div>
          </div>
        </div>
      </section>

      {/* Before You Go CTA */}
      <section style={{ backgroundColor: '#8b1538', padding: '60px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            fontFamily: "'Montserrat', sans-serif", 
            fontSize: '36px', 
            fontWeight: 700, 
            color: '#ffffff', 
            marginBottom: '20px'
          }}>
            Before you go call your family lawyer today
          </h2>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" style={{ backgroundColor: '#2c2c2c', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            fontFamily: "'Montserrat', sans-serif", 
            fontSize: '36px', 
            fontWeight: 700, 
            color: '#ffffff', 
            marginBottom: '50px',
            textAlign: 'center'
          }}>
            Contact The Office
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '60px' }}>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ 
                fontFamily: "'Montserrat', sans-serif", 
                fontSize: '18px', 
                fontWeight: 700, 
                color: '#ffffff', 
                marginBottom: '20px',
                textTransform: 'uppercase'
              }}>
                FREEHOLD OFFICE
              </h3>
              <p style={{ fontSize: '14px', color: '#ffffff', lineHeight: '1.8' }}>
                33 Mechanic Street<br />
                Suite 201<br />
                Freehold, NJ 07728
              </p>
              <p style={{ fontSize: '14px', color: '#ffffff', marginTop: '15px' }}>
                <strong>Phone:</strong><br />
                <a href="tel:7328420030" style={{ color: '#ffffff', textDecoration: 'none' }}>(732) 842-0030</a>
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <h3 style={{ 
                fontFamily: "'Montserrat', sans-serif", 
                fontSize: '18px', 
                fontWeight: 700, 
                color: '#ffffff', 
                marginBottom: '20px',
                textTransform: 'uppercase'
              }}>
                OFFICE HOURS
              </h3>
              <p style={{ fontSize: '14px', color: '#ffffff', lineHeight: '1.8' }}>
                Monday - Friday<br />
                9:00 AM - 5:00 PM
              </p>
              <p style={{