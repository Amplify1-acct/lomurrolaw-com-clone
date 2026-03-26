'use client'

export default function HomePage() {
  return (
    <div style={{ fontFamily: "'Open Sans', sans-serif", margin: 0, padding: 0, color: '#2c2c2c' }}>
      <header style={{ backgroundColor: '#fff', padding: '15px 0', borderBottom: '1px solid #e0e0e0', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: '24px', fontWeight: 700, color: '#8B1B3F' }}>LOMURRO LAW</div>
          <nav style={{ display: 'flex', gap: '30px' }}>
            <a href="/" style={{ color: '#2c2c2c', textDecoration: 'none', fontWeight: 600, fontSize: '13px' }}>HOME</a>
            <a href="/attorneys" style={{ color: '#2c2c2c', textDecoration: 'none', fontWeight: 600, fontSize: '13px' }}>ATTORNEYS</a>
            <a href="/practice-areas" style={{ color: '#2c2c2c', textDecoration: 'none', fontWeight: 600, fontSize: '13px' }}>PRACTICE AREAS</a>
            <a href="/contact" style={{ color: '#2c2c2c', textDecoration: 'none', fontWeight: 600, fontSize: '13px' }}>CONTACT</a>
          </nav>
          <a href="tel:7248410346" style={{ backgroundColor: '#8B1B3F', color: '#fff', padding: '10px 20px', borderRadius: '4px', textDecoration: 'none', fontWeight: 700 }}>Call (724) 841-0346</a>
        </div>
      </header>
      <section style={{ backgroundColor: '#1a1a2e', color: '#fff', padding: '100px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', color: '#8B1B3F', marginBottom: '20px' }}>The Only Law Firm</div>
          <h1 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '52px', fontWeight: 700, marginBottom: '20px', lineHeight: 1.1 }}>IN NJ WITH ALL FIVE SUPREME COURT CERTIFICATIONS</h1>
          <p style={{ fontSize: '18px', marginBottom: '40px', opacity: 0.9 }}>Eight Supreme Court-Certified Attorneys, a retired Superior Court Judge, and a former County Prosecutor — all working on your behalf.</p>
          <a href="/contact" style={{ backgroundColor: '#8B1B3F', color: '#fff', padding: '16px 40px', borderRadius: '4px', textDecoration: 'none', fontWeight: 700, fontSize: '16px' }}>Contact Us</a>
        </div>
      </section>
      <section style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '36px', marginBottom: '40px' }}>Case Results</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            {[['$1,150,000', 'Auto Accident'], ['$2,500,000', 'Personal Injury'], ['$2,300,000', 'Medical Malpractice']].map(([amount, type]) => (
              <div key={amount} style={{ padding: '30px', border: '1px solid #e0e0e0', borderTop: '4px solid #8B1B3F' }}>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: '36px', color: '#8B1B3F', fontWeight: 700 }}>{amount}</div>
                <div style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>{type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: '80px 20px', backgroundColor: '#f8f8f8' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          {['Personal Injury', 'Medical Malpractice', 'Workers Compensation', 'Criminal Law', 'DUI/DWI Defense', 'Family Law', 'Wills & Estates', 'Corporate Law'].map(area => (
            <div key={area} style={{ padding: '30px 20px', backgroundColor: '#1a1a2e', color: '#fff' }}>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: '16px', fontWeight: 700, marginBottom: '10px', textTransform: 'uppercase' }}>{area}</div>
            </div>
          ))}
        </div>
      </section>
      <footer style={{ backgroundColor: '#1a1a2e', color: '#fff', padding: '60px 20px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', marginBottom: '40px' }}>
          <div>
            <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '20px', marginBottom: '20px' }}>Freehold Office</h3>
            <p style={{ color: '#ccc', fontSize: '14px' }}>4 Paragon Way<br />Suite 100<br />Freehold, NJ 07728<br /><a href="tel:7324143100" style={{ color: '#fff' }}>732-414-3100</a></p>
          </div>
          <div>
            <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '20px', marginBottom: '20px' }}>Practice Areas</h3>
            {['Personal Injury', 'Medical Malpractice', 'Workers Compensation'].map(l => <a key={l} href="#" style={{ display: 'block', color: '#ccc', textDecoration: 'none', fontSize: '14px', marginBottom: '8px' }}>{l}</a>)}
          </div>
          <div>
            <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '20px', marginBottom: '20px' }}>More Areas</h3>
            {['Criminal Law', 'DUI/DWI Defense', 'Family Law'].map(l => <a key={l} href="#" style={{ display: 'block', color: '#ccc', textDecoration: 'none', fontSize: '14px', marginBottom: '8px' }}>{l}</a>)}
          </div>
          <div>
            <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '20px', marginBottom: '20px' }}>Quick Links</h3>
            {['Attorneys', 'Case Results', 'Blog', 'Contact'].map(l => <a key={l} href="#" style={{ display: 'block', color: '#ccc', textDecoration: 'none', fontSize: '14px', marginBottom: '8px' }}>{l}</a>)}
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', textAlign: 'center', color: '#999', fontSize: '13px' }}>
          © {new Date().getFullYear()} Lomurro Law. All Rights Reserved.
        </div>
      </footer>
      <a href="tel:7324143100" style={{ position: 'fixed', bottom: '20px', right: '20px', backgroundColor: '#8B1B3F', color: '#fff', padding: '15px 25px', borderRadius: '50px', textDecoration: 'none', fontWeight: 700, zIndex: 999 }}>📞 732-414-3100</a>
    </div>
  )
}
