import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lomurro Law",
  description: "NJ with all five supreme court certifications",
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
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: "'Open Sans', sans-serif", color: "#2c2c2c" }}>
        <nav style={{
          position: "sticky",
          top: 0,
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e0e0e0",
          zIndex: 1000,
          padding: "0"
        }}>
          <div style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px 20px"
          }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Link href="/" style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <span style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#2c2c2c",
                  letterSpacing: "2px"
                }}>LOMURRO</span>
                <span style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "#2c2c2c",
                  letterSpacing: "3px",
                  marginTop: "-2px"
                }}>LAW</span>
              </Link>
            </div>
            <div style={{ display: "flex", gap: "35px", alignItems: "center" }}>
              <Link href="/" style={{
                textDecoration: "none",
                color: "#2c2c2c",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "1.5px"
              }}>HOME</Link>
              <Link href="/about" style={{
                textDecoration: "none",
                color: "#2c2c2c",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "1.5px"
              }}>ABOUT</Link>
              <Link href="/services" style={{
                textDecoration: "none",
                color: "#2c2c2c",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "1.5px"
              }}>SERVICES</Link>
              <Link href="/contact" style={{
                textDecoration: "none",
                color: "#2c2c2c",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "1.5px"
              }}>CONTACT</Link>
            </div>
            <div style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              color: "#2c2c2c"
            }}>
              <a href="tel:7328420030" style={{ color: "#2c2c2c", textDecoration: "none" }}>(732) 842-0030</a>
            </div>
          </div>
        </nav>

        {children}

        <footer style={{
          backgroundColor: "#2c2c2c",
          color: "#ffffff",
          padding: "60px 20px 30px 20px"
        }}>
          <div style={{
            maxWidth: "1200px",
            margin: "0 auto"
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "60px",
              marginBottom: "50px"
            }}>
              <div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  marginBottom: "20px",
                  letterSpacing: "1px",
                  color: "#ffffff"
                }}>CONTACT THE OFFICE</h3>
                <div style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "14px",
                  lineHeight: "1.8",
                  color: "#cccccc"
                }}>
                  <p style={{ margin: "10px 0" }}>
                    <strong style={{ color: "#ffffff" }}>Address:</strong>
                  </p>
                  <p style={{ margin: "5px 0" }}>Lomurro Law</p>
                  <p style={{ margin: "5px 0" }}>NJ</p>
                  <p style={{ margin: "15px 0" }}>
                    <strong style={{ color: "#ffffff" }}>Phone:</strong>
                  </p>
                  <p style={{ margin: "5px 0" }}>
                    <a href="tel:7328420030" style={{ color: "#cccccc", textDecoration: "none" }}>(732) 842-0030</a>
                  </p>
                </div>
              </div>

              <div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  marginBottom: "20px",
                  letterSpacing: "1px",
                  color: "#ffffff"
                }}>OFFICE HOURS</h3>
                <div style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "14px",
                  lineHeight: "1.8",
                  color: "#cccccc"
                }}>
                  <p style={{ margin: "10px 0" }}>
                    <strong style={{ color: "#ffffff" }}>Monday - Friday:</strong>
                  </p>
                  <p style={{ margin: "5px 0" }}>9:00 AM - 5:00 PM</p>
                  <p style={{ margin: "15px 0" }}>
                    <strong style={{ color: "#ffffff" }}>Saturday - Sunday:</strong>
                  </p>
                  <p style={{ margin: "5px 0" }}>Closed</p>
                </div>
              </div>

              <div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  marginBottom: "20px",
                  letterSpacing: "1px",
                  color: "#ffffff"
                }}>QUICK LINKS</h3>
                <div style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "14px",
                  lineHeight: "2.2",
                  color: "#cccccc"
                }}>
                  <p style={{ margin: "5px 0" }}>
                    <Link href="/" style={{ color: "#cccccc", textDecoration: "none" }}>Home</Link>
                  </p>
                  <p style={{ margin: "5px 0" }}>
                    <Link href="/about" style={{ color: "#cccccc", textDecoration: "none" }}>About</Link>
                  </p>
                  <p style={{ margin: "5px 0" }}>
                    <Link href="/services" style={{ color: "#cccccc", textDecoration: "none" }}>Services</Link>
                  </p>
                  <p style={{ margin: "5px 0" }}>
                    <Link href="/contact" style={{ color: "#cccccc", textDecoration: "none" }}>Contact</Link>
                  </p>
                </div>
              </div>
            </div>

            <div style={{
              borderTop: "1px solid #444444",
              paddingTop: "30px",
              textAlign: "center"
            }}>
              <p style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "13px",
                color: "#999999",
                margin: 0
              }}>
                © {new Date().getFullYear()} Lomurro Law. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

        <a href="tel:7328420030" style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          backgroundColor: "#8b1538",
          color: "#ffffff",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
          boxShadow: "0 4px 12px rgba(139, 21, 56, 0.4)",
          zIndex: 999,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "24px",
          fontWeight: 700
        }}>
          ☎
        </a>
      </body>
    </html>
  );
}