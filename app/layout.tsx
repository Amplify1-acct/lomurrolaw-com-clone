
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lomurro Law - New Jersey Attorneys',
  description: 'IN NJ WITH ALL FIVE SUPREME COURT CERTIFICATIONS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Attorneys', href: '/attorneys' },
    { label: 'Practice Areas', href: '/practice-areas' },
    { label: 'Case Results', href: '/case-results' },
    { label: 'News', href: '/news' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  const footerLinks = [
    { label: 'Personal Injury', href: '/practice-areas/personal-injury' },
    { label: 'Medical Malpractice', href: '/practice-areas/medical-malpractice' },
    { label: 'Workers Compensation', href: '/practice-areas/workers-compensation' },
    { label: 'Criminal Law', href: '/practice-areas/criminal-law' },
    { label: 'DUI/DWI Defense', href: '/practice-areas/dui-dwi-defense' },
    { label: 'Family Law', href: '/practice-areas/family-law' },
  ];

  const primaryColor = '#8B1B3F';
  const secondaryColor = '#1A1A2E';

  const styles = {
    html: {
      scrollBehavior: 'smooth' as const,
    },
    body: {
      margin: 0,
      padding: 0,
      fontFamily: "'Open Sans', sans-serif",
      color: '#333',
      lineHeight: 1.6,
    },
    topBar: {
      backgroundColor: secondaryColor,
      color: '#fff',
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
    topBarPhone: {
      color: '#fff',
      textDecoration: 'none',
    },
    header: {
      position: 'sticky' as const,
      top: 0,
      zIndex: 1000,
      backgroundColor: '#fff',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    },
    headerContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '80px',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
    },
    logoText: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '28px',
      fontWeight: 700,
      color: primaryColor,
      letterSpacing: '1px',
    },
    logoSubtext: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '14px',
      color: secondaryColor,
      letterSpacing: '3px',
      marginLeft: '5px',
    },
    nav: {
      display: 'flex',
      gap: '25px',
    },
    navLink: {
      color: secondaryColor,
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: 600,
      textTransform: 'uppercase' as const,
      letterSpacing: '0.5px',
      transition: 'color 0.3s ease',
    },
    footer: {
      backgroundColor: secondaryColor,
      color: '#fff',
      padding: '60px 0 0 0',
    },
    footerContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    footerGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '40px',
      paddingBottom: '40px',
    },
    footerColumn: {
      display: 'flex',
      flexDirection: 'column' as const,
    },
    footerTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '20px',
      fontWeight: 700,
      marginBottom: '20px',
      color: '#fff',
    },
    footerLink: {
      color: '#ccc',
      textDecoration: 'none',
      marginBottom: '10px',
      fontSize: '14px',
      transition: 'color 0.3s ease',
    },
    footerText: {
      color: '#ccc',
      fontSize: '14px',
      marginBottom: '5px',
    },
    footerBottom: {
      borderTop: '1px solid rgba(255,255,255,0.1)',
      padding: '20px 0',
      textAlign: 'center' as const,
    },
    footerCopyright: {
      color: '#999',
      fontSize: '13px',
    },
    floatingCTA: {
      position: 'fixed' as const,
      bottom: '20px',
      right: '20px',
      backgroundColor: primaryColor,
      color: '#fff',
      padding: '15px 25px',
      borderRadius: '50px',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      boxShadow: '0 4px 15px rgba(139, 27, 63, 0.4)',
      zIndex: 999,
      fontWeight: 600,
      fontSize: '16px',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    phoneIcon: {
      width: '20px',
      height: '20px',
    },
    contactBanner: {
      backgroundColor: primaryColor,
      padding: '15px 0',
      textAlign: 'center' as const,
    },
    contactBannerText: {
      color: '#fff',
      fontSize: '18px',
      margin: 0,
    },
  };

  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Open+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={styles.body}>
        <div style={styles.topBar}>
          <div style={styles.topBarContainer}>
            <span style={{ marginRight: '20px' }}>We Listen | We Fight For You</span>
            <a href="tel:732-414-3100" style={styles.topBarPhone}>
              Call 732-414-3100
            </a>
          </div>
        </div>

        <header style={styles.header}>
          <div style={styles.headerContainer}>
            <a href="/" style={styles.logo}>
              <span style={styles.logoText}>LOMURRO</span>
              <span style={styles.logoSubtext}>LAW</span>
            </a>
            <nav style={styles.nav}>
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  style={styles.navLink}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <div style={styles.contactBanner}>
          <p style={styles.contactBannerText}>
            Justice for you and your family begins today.
          </p>
        </div>

        <footer style={styles.footer}>
          <div style={styles.footerContainer}>
            <div style={styles.footerGrid}>
              <div style={styles.footerColumn}>
                <h3 style={styles.footerTitle}>Contact The Office</h3>
                <p style={styles.footerText}>FREEHOLD OFFICE</p>
                <p style={styles.footerText}>100 Meridian Centre</p>
                <p style={styles.footerText}>Freehold, NJ 07728</p>
                <p style={{ ...styles.footerText, marginTop: '10px' }}>
                  Phone: <a href="tel:732-414-3100" style={{ color: '#fff', textDecoration: 'none' }}>732-414-3100</a>
                </p>
              </div>

              <div style={styles.footerColumn}>
                <h3 style={styles.footerTitle}>Practice Areas</h3>
                {footerLinks.slice(0, 3).map((link, index) => (
                  <a key={index} href={link.href} style={styles.footerLink}>
                    {link.label}
                  </a>
                ))}
              </div>

              <div style={styles.footerColumn}>
                <h3 style={styles.footerTitle}>More Practice Areas</h3>
                {footerLinks.slice(3).map((link, index) => (
                  <a key={index} href={link.href} style={styles.footerLink}>
                    {link.label}
                  </a>
                ))}
              </div>

              <div style={styles.footerColumn}>
                <h3 style={styles.footerTitle}>Quick Links</h3>
                {navLinks.slice(1, 5).map((link, index) => (
                  <a key={index} href={link.href} style={styles.footerLink}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div style={styles.footerBottom}>
              <p style={styles.footerCopyright}>
                © {new Date().getFullYear()} Lomurro Law. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>

        <a href="tel:732-414-3100" style={styles.floatingCTA}>
          <svg
            style={styles.phoneIcon}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          732-414-3100
        </a>
      </body>
    </html>
  );
}
