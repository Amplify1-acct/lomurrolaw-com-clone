import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lomurro Law",
  description: "Trial with all Five Supreme Court Certifications",
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
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Crimson+Text:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: "'Raleway', sans-serif", color: "#2C2C2C" }}>
        <header style={{ position: "sticky", top: 0, zIndex: 1000, backgroundColor: "#FFFFFF", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px 40px", maxWidth: "1400px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <img src="/logo.png" alt="Lomurro Law" style={{ height: "50px" }} />
              <div>
                <div style={{ fontFamily: "'Crimson Text', serif", fontSize: "18px", fontWeight: 700, color: "#2C2C2C", lineHeight: "1.2" }}>LOMURRO LAW</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px" }}>
              <span style={{ color: "#2C2C2C" }}>To schedule an appointment call</span>
              <a href="tel:7244108346" style={{ color: "#8B1538", textDecoration: "none", fontWeight: 700 }}>(724) 410-8346</a>
            </div>
          </div>
          <nav style={{ backgroundColor: "#8B1538", padding: "0" }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", maxWidth: "1400px", margin: "0 auto" }}>
              <a href="/" style={{ color: "#FFFFFF", textDecoration: "none", padding: "15px 25px", fontSize: "13px", fontWeight: 700, letterSpacing: "1px", borderBottom: "3px solid transparent", transition: "border-color 0.3s" }}>HOME</a>
              <a href="/about" style={{ color: "#FFFFFF", textDecoration: "none", padding: "15px 25px", fontSize: "13px", fontWeight: 700, letterSpacing: "1px", borderBottom: "3px solid transparent", transition: "border-color 0.3s" }}>ABOUT US</a>
              <a href="/practice-areas" style={{ color: "#FFFFFF", textDecoration: "none", padding: "15px 25px", fontSize: "13px", fontWeight: 700, letterSpacing: "1px", borderBottom: "3px solid transparent", transition: "border-color 0.3s" }}>PRACTICE AREAS</a>
              <a href="/case-results" style={{ color: "#FFFFFF", textDecoration: "none", padding: "15px 25px", fontSize: "13px", fontWeight: 700, letterSpacing: "1px", borderBottom: "3px solid transparent", transition: "border-color 0.3s" }}>CASE RESULTS</a>
              <a href="/blog" style={{ color: "#FFFFFF", textDecoration: "none", padding: "15px 25px", fontSize: "13px", fontWeight: 700, letterSpacing: "1px", borderBottom: "3px solid transparent", transition: "border-color 0.3s" }}>BLOG</a>
              <a href="/contact" style={{ color: "#FFFFFF", textDecoration: "none", padding: "15px 25px", fontSize: "13px", fontWeight: 700, letterSpacing: "1px", borderBottom: "3px solid transparent", transition: "border-color 0.3s" }}>CONTACT</a>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer style={{ backgroundColor: "#2C2C2C", color: "#FFFFFF", padding: "60px 40px 30px" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "40px", marginBottom: "50px" }}>
              <div>
                <h3 style={{ fontFamily: "'Crimson Text', serif", fontSize: "16px", fontWeight: 700, marginBottom: "20px", letterSpacing: "1px" }}>CRIMINAL DEFENSE</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "13px", lineHeight: "2" }}>
                  <li><a href="/practice-areas/dui" style={{ color: "#FFFFFF", textDecoration: "none" }}>DUI</a></li>
                  <li><a href="/practice-areas/drug-crimes" style={{ color: "#FFFFFF", textDecoration: "none" }}>Drug Crimes</a></li>
                  <li><a href="/practice-areas/assault" style={{ color: "#FFFFFF", textDecoration: "none" }}>Assault</a></li>
                  <li><a href="/practice-areas/theft" style={{ color: "#FFFFFF", textDecoration: "none" }}>Theft</a></li>
                  <li><a href="/practice-areas/sex-crimes" style={{ color: "#FFFFFF", textDecoration: "none" }}>Sex Crimes</a></li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontFamily: "'Crimson Text', serif", fontSize: "16px", fontWeight: 700, marginBottom: "20px", letterSpacing: "1px" }}>PERSONAL INJURY</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "13px", lineHeight: "2" }}>
                  <li><a href="/practice-areas/car-accidents" style={{ color: "#FFFFFF", textDecoration: "none" }}>Car Accidents</a></li>
                  <li><a href="/practice-areas/truck-accidents" style={{ color: "#FFFFFF", textDecoration: "none" }}>Truck Accidents</a></li>
                  <li><a href="/practice-areas/motorcycle-accidents" style={{ color: "#FFFFFF", textDecoration: "none" }}>Motorcycle Accidents</a></li>
                  <li><a href="/practice-areas/slip-and-fall" style={{ color: "#FFFFFF", textDecoration: "none" }}>Slip and Fall</a></li>
                  <li><a href="/practice-areas/wrongful-death" style={{ color: "#FFFFFF", textDecoration: "none" }}>Wrongful Death</a></li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontFamily: "'Crimson Text', serif", fontSize: "16px", fontWeight: 700, marginBottom: "20px", letterSpacing: "1px" }}>WORKERS COMPENSATION</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "13px", lineHeight: "2" }}>
                  <li><a href="/practice-areas/workplace-injuries" style={{ color: "#FFFFFF", textDecoration: "none" }}>Workplace Injuries</a></li>
                  <li><a href="/practice-areas/disability-benefits" style={{ color: "#FFFFFF", textDecoration: "none" }}>Disability Benefits</a></li>
                  <li><a href="/practice-areas/workers-comp-appeals" style={{ color: "#FFFFFF", textDecoration: "none" }}>Appeals</a></li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontFamily: "'Crimson Text', serif", fontSize: "16px", fontWeight: 700, marginBottom: "20px", letterSpacing: "1px" }}>CORPORATE LAW</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "13px", lineHeight: "2" }}>
                  <li><a href="/practice-areas/business-formation" style={{ color: "#FFFFFF", textDecoration: "none" }}>Business Formation</a></li>
                  <li><a href="/practice-areas/contracts" style={{ color: "#FFFFFF", textDecoration: "none" }}>Contracts</a></li>
                  <li><a href="/practice-areas/mergers" style={{ color: "#FFFFFF", textDecoration: "none" }}>Mergers & Acquisitions</a></li>
                </ul>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "40px", marginBottom: "50px" }}>
              <div>
                <h3 style={{ fontFamily: "'Crimson Text', serif", fontSize: "16px", fontWeight: 700, marginBottom: "20px", letterSpacing: "1px" }}>TRAFFIC OFFENSES</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "13px", lineHeight: "2" }}>
                  <li><a href="/practice-areas/speeding" style={{ color: "#FFFFFF", textDecoration: "none" }}>Speeding Tickets</a></li>
                  <li><a href="/practice-areas/reckless-driving" style={{ color: "#FFFFFF", textDecoration: "none" }}>Reckless Driving</a></li>
                  <li><a href="/practice-areas/suspended-license" style={{ color: "#FFFFFF", textDecoration: "none" }}>Suspended License</a></li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontFamily: "'Crimson Text', serif", fontSize: "16px", fontWeight: 700, marginBottom: "20px", letterSpacing: "1px" }}>FAMILY LAW</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "13px", lineHeight: "2" }}>
                  <li><a href="/practice-areas/divorce" style={{ color: "#FFFFFF", textDecoration: "none" }}>Divorce</a></li>
                  <li><a href="/practice-areas/custody" style={{ color: "#FFFFFF", textDecoration: "none" }}>Child Custody</a></li>
                  <li><a href="/practice-areas/support" style={{ color: "#FFFFFF", textDecoration: "none" }}>Child Support</a></li>
                  <li><a href="/practice-areas/protection-orders" style={{ color: "#FFFFFF", textDecoration: "none" }}>Protection Orders</a></li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontFamily: "'Crimson Text', serif", fontSize: "16px", fontWeight: 700, marginBottom: "20px", letterSpacing: "1px" }}>WILLS & TRUSTS</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "13px", lineHeight: "2" }}>
                  <li><a href="/practice-areas/estate-planning" style={{ color: "#FFFFFF", textDecoration: "none" }}>Estate Planning</a></li>
                  <li><a href="/practice-areas/wills" style={{ color: "#FFFFFF", textDecoration: "none" }}>Wills</a></li>
                  <li><a href="/practice-areas/trusts" style={{ color: "#FFFFFF", textDecoration: "none" }}>Trusts</a></li>
                  <li><a href="/practice-areas/probate" style={{ color: "#FFFFFF", textDecoration: "none" }}>Probate</a></li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontFamily: "'Crimson Text', serif", fontSize: "16px", fontWeight: 700, marginBottom: "20px", letterSpacing: "1px" }}>APPELLATE LAW</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "13px", lineHeight: "2" }}>
                  <li><a href="/practice-areas/criminal-appeals" style={{ color: "#FFFFFF", textDecoration: "none" }}>Criminal Appeals</a></li>
                  <li><a href="/practice-areas/civil-appeals" style={{ color: "#FFFFFF", textDecoration: "none" }}>Civil Appeals</a></li>
                  <li><a href="/practice-areas/pcra" style={{ color: "#FFFFFF", textDecoration: "none" }}>PCRA Petitions</a></li>
                </ul>
              </div>
            </div>

            <div style={{ borderTop: "1px solid #444", paddingTop: "40px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "40px" }}>
              <div>
                <h3 style={{ fontFamily: "'Crimson Text', serif", fontSize: "16px", fontWeight: 700, marginBottom: "15px", letterSpacing: "1px" }}>CRANBERRY OFFICE</h3>
                <p style={{ fontSize: "13px", lineHeight: "1.8", margin: 0 }}>
                  2 Federal Drive<br />
                  Cranberry Township, PA 16066
                </p>
                <p style={{ fontSize: "13px", lineHeight: "1.8", marginTop: "15px" }}>
                  <a href="tel:7244108346" style={{ color: "#FFFFFF", textDecoration: "none" }}>Phone: (724) 410-8346</a><br />
                  <a href="tel:7247414529" style={{ color: "#FFFFFF", textDecoration: "none" }}>Fax: (724) 741-4529</a>
                </p>
              </div>
              <div>
                <h3 style={{ fontFamily: "'Crimson Text', serif", fontSize: "16px", fontWeight: 700, marginBottom: "15px", letterSpacing: "1px" }}>PITTSBURGH OFFICE</h3>
                <p style={{ fontSize: "13px", lineHeight: "1.8", margin: 0 }}>
                  2 Gateway Center<br />
                  603 Stanwix Street, Suite 600<br />
                  Pittsburgh, PA 15222
                </p>
              </div>
              <div>
                <h3 style={{ fontFamily: "'Crimson Text', serif", fontSize: "16px", fontWeight: 700, marginBottom: "15px", letterSpacing: "1px" }}>INFORMATION</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "13px", lineHeight: "2" }}>
                  <li><a href="/" style={{ color: "#FFFFFF", textDecoration: "none" }}>Home</a></li>
                  <li><a href="/about" style={{ color: "#FFFFFF", textDecoration: "none" }}>About Us</a></li>
                  <li><a href="/practice-areas" style={{ color: "#FFFFFF", textDecoration: "none" }}>Practice Areas</a></li>
                  <li><a href="/case-results" style={{ color: "#FFFFFF", textDecoration: "none" }}>Case Results</a></li>
                  <li><a href="/blog" style={{ color: "#FFFFFF", textDecoration: "none" }}>Blog</a></li>
                  <li><a href="/contact" style={{ color: "#FFFFFF", textDecoration: "none" }}>Contact</a></li>
                </ul>
              </div>
            </div>

            <div style={{ borderTop: "1px solid #444", marginTop: "40px", paddingTop: "30px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: "12px", color: "#999" }}>
                © {new Date().getFullYear()} Lomurro Law. All rights reserved. | <a href="/privacy-policy" style={{ color: "#999", textDecoration: "none" }}>Privacy Policy</a> | <a href="/disclaimer" style={{ color: "#999", textDecoration: "none" }}>Disclaimer</a>
              </div>
              <div style={{ display: "flex", gap: "15px" }}>
                <a href="#" style={{ color: "#FFFFFF", fontSize: "18px" }}>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" style={{ color: "#FFFFFF", fontSize: "18px" }}>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" style={{ color: "#FFFFFF", fontSize: "18px" }}>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" style={{ color: "#FFFFFF", fontSize: "18px" }}>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>

        <a 
          href="tel:7244108346"
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            backgroundColor: "#8B1538",
            color: "#FFFFFF",
            padding: "15px 25px",
            borderRadius: "50px",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "14px",
            boxShadow: "0 4px 12px rgba(139, 21, 56, 0.4)",
            zIndex: 999,
            display: "flex",
            alignItems: "center",
            gap: "10px"
          }}
        >
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
          </svg>
          (724) 410-8346
        </a>
      </body>
    </html>
  );
}