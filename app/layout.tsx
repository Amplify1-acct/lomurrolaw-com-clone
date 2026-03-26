import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lomurro Law",
  description: "Personal Injury and Legal Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, fontFamily: "'Open Sans', sans-serif", color: "#2c2c2c" }}>
        <header style={{ position: "sticky", top: 0, zIndex: 1000, backgroundColor: "#fff", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
          <div style={{ backgroundColor: "#f8f8f8", borderBottom: "1px solid #e0e0e0" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "8px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "13px" }}>
              <div style={{ color: "#2c2c2c" }}>
                We accept all calls 24/7 • <span style={{ color: "#8B1538", fontWeight: 600 }}>(724) 914-8645</span>
              </div>
              <div style={{ display: "flex", gap: "15px" }}>
                <a href="/client-portal" style={{ color: "#2c2c2c", textDecoration: "none" }}>CLIENT PORTAL</a>
                <a href="/pay-online" style={{ color: "#2c2c2c", textDecoration: "none" }}>PAY ONLINE</a>
              </div>
            </div>
          </div>
          <nav style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src="/logo.png" alt="Lomurro Law" style={{ height: "60px" }} />
            </div>
            <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0, gap: "35px" }}>
              <li>
                <a href="/" style={{ color: "#2c2c2c", textDecoration: "none", fontFamily: "'Oswald', sans-serif", fontSize: "14px", fontWeight: 400, letterSpacing: "1px", textTransform: "uppercase" }}>HOME</a>
              </li>
              <li>
                <a href="/about" style={{ color: "#2c2c2c", textDecoration: "none", fontFamily: "'Oswald', sans-serif", fontSize: "14px", fontWeight: 400, letterSpacing: "1px", textTransform: "uppercase" }}>ABOUT</a>
              </li>
              <li>
                <a href="/practice-areas" style={{ color: "#2c2c2c", textDecoration: "none", fontFamily: "'Oswald', sans-serif", fontSize: "14px", fontWeight: 400, letterSpacing: "1px", textTransform: "uppercase" }}>PRACTICE AREAS</a>
              </li>
              <li>
                <a href="/case-results" style={{ color: "#2c2c2c", textDecoration: "none", fontFamily: "'Oswald', sans-serif", fontSize: "14px", fontWeight: 400, letterSpacing: "1px", textTransform: "uppercase" }}>CASE RESULTS</a>
              </li>
              <li>
                <a href="/contact" style={{ color: "#2c2c2c", textDecoration: "none", fontFamily: "'Oswald', sans-serif", fontSize: "14px", fontWeight: 400, letterSpacing: "1px", textTransform: "uppercase" }}>CONTACT</a>
              </li>
            </ul>
          </nav>
        </header>

        <main>{children}</main>

        <footer style={{ backgroundColor: "#2c2c2c", color: "#fff" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px 40px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "40px", marginBottom: "40px" }}>
              <div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "16px", fontWeight: 700, marginTop: 0, marginBottom: "20px", letterSpacing: "1px", textTransform: "uppercase" }}>PRACTICE AREAS</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: "12px" }}>
                    <a href="/serious-injury" style={{ color: "#fff", textDecoration: "none", fontSize: "14px" }}>SERIOUS INJURY</a>
                  </li>
                  <li style={{ marginBottom: "12px" }}>
                    <a href="/workers-compensation" style={{ color: "#fff", textDecoration: "none", fontSize: "14px" }}>WORKERS COMPENSATION</a>
                  </li>
                  <li style={{ marginBottom: "12px" }}>
                    <a href="/employment-law" style={{ color: "#fff", textDecoration: "none", fontSize: "14px" }}>EMPLOYMENT LAW</a>
                  </li>
                  <li style={{ marginBottom: "12px" }}>
                    <a href="/traffic-offenses" style={{ color: "#fff", textDecoration: "none", fontSize: "14px" }}>TRAFFIC OFFENSES</a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "16px", fontWeight: 700, marginTop: 0, marginBottom: "20px", letterSpacing: "1px", textTransform: "uppercase" }}>MORE AREAS</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: "12px" }}>
                    <a href="/family-law" style={{ color: "#fff", textDecoration: "none", fontSize: "14px" }}>FAMILY LAW</a>
                  </li>
                  <li style={{ marginBottom: "12px" }}>
                    <a href="/wills-estates" style={{ color: "#fff", textDecoration: "none", fontSize: "14px" }}>WILLS & ESTATES</a>
                  </li>
                  <li style={{ marginBottom: "12px" }}>
                    <a href="/real-estate" style={{ color: "#fff", textDecoration: "none", fontSize: "14px" }}>REAL ESTATE</a>
                  </li>
                  <li style={{ marginBottom: "12px" }}>
                    <a href="/general-law" style={{ color: "#fff", textDecoration: "none", fontSize: "14px" }}>GENERAL LAW</a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "16px", fontWeight: 700, marginTop: 0, marginBottom: "20px", letterSpacing: "1px", textTransform: "uppercase" }}>CONTACT INFO</h3>
                <p style={{ fontSize: "14px", lineHeight: "1.8", margin: 0 }}>
                  <strong>PHONE:</strong><br />
                  (724) 914-8645<br /><br />
                  <strong>ADDRESS:</strong><br />
                  3 W. Main St.<br />
                  Uniontown, PA 15401<br /><br />
                  <strong>EMAIL:</strong><br />
                  info@lomurrolaw.com
                </p>
              </div>

              <div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "16px", fontWeight: 700, marginTop: 0, marginBottom: "20px", letterSpacing: "1px", textTransform: "uppercase" }}>OFFICE HOURS</h3>
                <p style={{ fontSize: "14px", lineHeight: "1.8", margin: 0 }}>
                  <strong>MONDAY - FRIDAY:</strong><br />
                  9:00 AM - 5:00 PM<br /><br />
                  <strong>SATURDAY:</strong><br />
                  By Appointment<br /><br />
                  <strong>SUNDAY:</strong><br />
                  Closed
                </p>
              </div>
            </div>

            <div style={{ borderTop: "1px solid #444", paddingTop: "30px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", gap: "15px" }}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ width: "35px", height: "35px", borderRadius: "50%", backgroundColor: "#8B1538", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", textDecoration: "none" }}>f</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ width: "35px", height: "35px", borderRadius: "50%", backgroundColor: "#8B1538", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", textDecoration: "none" }}>t</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ width: "35px", height: "35px", borderRadius: "50%", backgroundColor: "#8B1538", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", textDecoration: "none" }}>in</a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ width: "35px", height: "35px", borderRadius: "50%", backgroundColor: "#8B1538", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", textDecoration: "none" }}>yt</a>
              </div>
              <p style={{ fontSize: "13px", margin: 0, color: "#999" }}>
                © {new Date().getFullYear()} Lomurro Law. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

        <a href="tel:7249148645" style={{ position: "fixed", bottom: "30px", right: "30px", backgroundColor: "#8B1538", color: "#fff", padding: "15px 25px", borderRadius: "50px", textDecoration: "none", fontFamily: "'Oswald', sans-serif", fontSize: "16px", fontWeight: 700, letterSpacing: "1px", boxShadow: "0 4px 15px rgba(139, 21, 56, 0.4)", zIndex: 999 }}>
          CALL NOW
        </a>
      </body>
    </html>
  );
}