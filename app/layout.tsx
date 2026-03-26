import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lomurro Law',
  description: 'IN NJ WITH ALL FIVE SUPREME COURT CERTIFICATIONS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const styles = {
    html: {
      scrollBehavior: 'smooth' as const,
    },
    body: {
      margin: 0,
      padding: 0,
      fontFamily: "'Open Sans', sans-serif",
      color: '#333',
      backgroundColor: '#fff',
    },
    header: {
      position: 'sticky' as const,
      top: 0,
      zIndex: 1000,
      backgroundColor: '#fff',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    },
    topBar: {
      backgroundColor: '#1A1A2E',
      padding: '8px 0',
      fontSize: '14px',
    },
    topBarContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    topBarText: {
      color: '#fff',
      marginRight: '10px',
    },
    topBarPhone: {
      color: '#fff',
      textDecoration: 'none',
      fontWeight: 700,
    },
    mainNav: {
      backgroundColor: '#fff',
      padding: '15px 0',
      borderBottom: '1px solid #eee',
    },
    navContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
    },
    logoText: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '28px',
      fontWeight: 700,
      color: '#8B1D3F',
      textDecoration: 'none',
      letterSpacing: '1px',
    },
    logoSubtext: {
      fontSize: '12px',
      color: '#1A1A2E',
      marginLeft: '5px',
      textTransform: 'uppercase' as const,
      letterSpacing: '2px',
    },
    navLinks: {
      display: 'flex',
      gap: '25px',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    navLink: {
      color: '#1A1A2E',
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: 600,
      textTransform: 'uppercase' as const,
      letterSpacing: '0.5px',
      transition: 'color 0.3s ease',
    },
    main: {
      minHeight: '100vh',
    },
    footer: {
      backgroundColor: '#1A1A2E',
      color: '#fff',
      paddingTop: '60px',
    },
    footerContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    footerTop: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '40px',
      paddingBottom: '40px',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
    },
    footerColumn: {
      display: 'flex',
      flexDirection: 'column' as const,
    },
    footerLogo: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '24px',
      fontWeight: 700,
      color: '#fff',
      marginBottom: '20px',
    },
    footerHeading: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '18px',
      fontWeight: 700,
      color: '#fff',
      marginBottom: '20px',
      textTransform: 'uppercase' as const,
    },
    footerLink: {
      color: '#ccc',
      textDecoration: 'none',
      fontSize: '14px',
      marginBottom: '10px',
      transition: 'color 0.3s ease',
    },
    footerText: {
      color: '#ccc',
      fontSize: '14px',
      lineHeight: 1.8,
      marginBottom: '5px',
    },
    footerBottom: {
      backgroundColor: '#8B1D3F',
      padding: '20px 0',
      textAlign: 'center' as const,
    },
    footerBottomText: {
      color: '#fff',
      fontSize: '14px',
      margin: 0,
    },
    floatingCTA: {
      position: 'fixed' as const,
      bottom: '20px',
      right: '20px',
      backgroundColor: '#8B1D3F',
      color: '#fff',
      padding: '15px 25px',
      borderRadius: '50px',
      textDecoration: 'none',
      fontWeight: 700,
      fontSize: '16px',
      boxShadow: '0 4px 20px rgba(139, 29, 63, 0.4)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    phoneIcon: {
      width: '20px',
      height: '20px',
    },
    contactInfo: {
      marginTop: '10px',
    },
  }

  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={styles.body}>
        <header style={styles.header}>
          <div style={styles.topBar}>
            <div style={styles.topBarContainer}>
              <span style={styles.topBarText}>We Answer Calls After Hours. Call</span>
              <a href="tel:732-414-3300" style={styles.topBarPhone}>732-414-3300</a>
            </div>
          </div>
          <nav style={styles.mainNav}>
            <div style={styles.navContainer}>
              <a href="/" style={styles.logo}>
                <span style={styles.logoText}>LOMURRO</span>
                <span style={styles.logoSubtext}>LAW</span>
              </a>
              <ul style={styles.navLinks}>
                <li><a href="/" style={styles.navLink}>Home</a></li>
                <li><a href="/attorneys" style={styles.navLink}>Attorneys</a></li>
                <li><a href="/practice-areas" style={styles.navLink}>Practice Areas</a></li>
                <li><a href="/case-results" style={styles.navLink}>Case Results</a></li>
                <li><a href="/news" style={styles.navLink}>News</a></li>
                <li><a href="/blog" style={styles.navLink}>Blog</a></li>
                <li><a href="/contact" style={styles.navLink}>Contact</a></li>
              </ul>
            </div>
          </nav>
        </header>

        <main style={styles.main}>
          {children}
        </main>

        <footer style={styles.footer}>
          <div style={styles.footerContainer}>
            <div style={styles.footerTop}>
              <div style={styles.footerColumn}>
                <div style={styles.footerLogo}>LOMURRO LAW</div>
                <p style={styles.footerText}>IN NJ WITH ALL FIVE SUPREME COURT CERTIFICATIONS</p>
                <div style={styles.contactInfo}>
                  <p style={styles.footerText}>100 Willowbrook Road</p>
                  <p style={styles.footerText}>Freehold, NJ 07728</p>
                  <p style={styles.footerText}>732-414-3300</p>
                </div>
              </div>
              <div style={styles.footerColumn}>
                <h4 style={styles.footerHeading}>Practice Areas</h4>
                <a href="/practice-areas/personal-injury" style={styles.footerLink}>Personal Injury</a>
                <a href="/practice-areas/medical-malpractice" style={styles.footerLink}>Medical Malpractice</a>
                <a href="/practice-areas/workers-compensation" style={styles.footerLink}>Workers Compensation</a>
              </div>
              <div style={styles.footerColumn}>
                <h4 style={styles.footerHeading}>More Areas</h4>
                <a href="/practice-areas/criminal-law" style={styles.footerLink}>Criminal Law</a>
                <a href="/practice-areas/dui-dwi-defense" style={styles.footerLink}>DUI/DWI Defense</a>
                <a href="/practice-areas/family-law" style={styles.footerLink}>Family Law</a>
              </div>
              <div style={styles.footerColumn}>
                <h4 style={styles.footerHeading}>Quick Links</h4>
                <a href="/" style={styles.footerLink}>Home</a>
                <a href="/attorneys" style={styles.footerLink}>Attorneys</a>
                <a href="/case-results" style={styles.footerLink}>Case Results</a>
                <a href="/news" style={styles.footerLink}>News</a>
                <a href="/blog" style={styles.footerLink}>Blog</a>
                <a href="/contact" style={styles.footerLink}>Contact</a>
              </div>
            </div>
          </div>
          <div style={styles.footerBottom}>
            <p style={styles.footerBottomText}>Justice for you and your family begins today.</p>
            <p style={{ ...styles.footerBottomText, marginTop: '10px', opacity: 0.8 }}>
              © {new Date().getFullYear()} Lomurro Law. All Rights Reserved.
            </p>
          </div>
        </footer>

        <a href="tel:732-414-3300" style={styles.floatingCTA}>
          <svg style={styles.phoneIcon} fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
          </svg>
          732-414-3300
        </a>
      </body>
    </html>
  )
}