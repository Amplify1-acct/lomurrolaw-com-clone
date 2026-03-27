import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LoMurro Law",
  description: "TE NJ With All Five Supreme Court Certifications",
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
      <body style={{ margin: 0, padding: 0, fontFamily: "'Open Sans', sans-serif", color: "#2C2C2C" }}>
        <nav style={{
          position: "sticky",
          top: 0,
          backgroundColor: "#FFFFFF",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
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
              <img 
                src="/logo.png" 
                alt="LoMurro Law" 
                style={{ height: "50px", marginRight: "10px" }}
              />
            </div>
            <div style={{
              display: "flex",
              gap: "30px",
              alignItems: "center"
            }}>
              <a href="/" style={{
                textDecoration: "none",
                color: "#2C2C2C",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.5px",
                transition: "color 0.3s"
              }}>HOME</a>
              <a href="/about" style={{
                textDecoration: "none",
                color: "#2C2C2C",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.5px",
                transition: "color 0.3s"
              }}>ABOUT</a>
              <a href="/practice-areas" style={{
                textDecoration: "none",
                color: "#2C2C2C",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.5px",
                transition: "color 0.3s"
              }}>PRACTICE AREAS</a>
              <a href="/case-results" style={{
                textDecoration: "none",
                color: "#2C2C2C",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.5px",
                transition: "color 0.3s"
              }}>CASE RESULTS</a>
              <a href="/blog" style={{
                textDecoration: "none",
                color: "#2C2C2C",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.5px",
                transition: "color 0.3s"
              }}>BLOG</a>
              <a href="/contact" style={{
                textDecoration: "none",
                color: "#2C2C2C",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.5px",
                transition: "color 0.3s"
              }}>CONTACT</a>
            </div>
          </div>
        </nav>

        <main>{children}</main>

        <footer style={{
          backgroundColor: "#2C2C2C",
          color: "#FFFFFF",
          padding: "60px 20px 20px"
        }}>
          <div style={{
            maxWidth: "1200px",
            margin: "0 auto"
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "40px",
              marginBottom: "40px"
            }}>
              <div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  marginBottom: "20px",
                  letterSpacing: "0.5px"
                }}>LOMURRO LAW</h3>
                <p style={{
                  fontSize: "14px",
                  lineHeight: "1.8",
                  margin: "0 0 15px 0"
                }}>TE NJ With All Five Supreme Court Certifications</p>
              </div>
              
              <div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  marginBottom: "20px",
                  letterSpacing: "0.5px"
                }}>QUICK LINKS</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <a href="/" style={{
                    color: "#FFFFFF",
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "color 0.3s"
                  }}>Home</a>
                  <a href="/about" style={{
                    color: "#FFFFFF",
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "color 0.3s"
                  }}>About</a>
                  <a href="/practice-areas" style={{
                    color: "#FFFFFF",
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "color 0.3s"
                  }}>Practice Areas</a>
                  <a href="/case-results" style={{
                    color: "#FFFFFF",
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "color 0.3s"
                  }}>Case Results</a>
                </div>
              </div>

              <div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  marginBottom: "20px",
                  letterSpacing: "0.5px"
                }}>CONTACT INFO</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <p style={{
                    fontSize: "14px",
                    margin: 0,
                    lineHeight: "1.8"
                  }}>New Jersey</p>
                </div>
              </div>

              <div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  marginBottom: "20px",
                  letterSpacing: "0.5px"
                }}>FOLLOW US</h3>
                <div style={{ display: "flex", gap: "15px" }}>
                  <a href="#" style={{
                    color: "#FFFFFF",
                    fontSize: "20px",
                    transition: "color 0.3s"
                  }}>f</a>
                  <a href="#" style={{
                    color: "#FFFFFF",
                    fontSize: "20px",
                    transition: "color 0.3s"
                  }}>t</a>
                  <a href="#" style={{
                    color: "#FFFFFF",
                    fontSize: "20px",
                    transition: "color 0.3s"
                  }}>in</a>
                </div>
              </div>
            </div>

            <div style={{
              borderTop: "1px solid #444",
              paddingTop: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "20px"
            }}>
              <p style={{
                fontSize: "12px",
                margin: 0,
                color: "#999"
              }}>© 2024 LoMurro Law. All rights reserved.</p>
              <div style={{ display: "flex", gap: "20px" }}>
                <a href="#" style={{
                  color: "#999",
                  textDecoration: "none",
                  fontSize: "12px"
                }}>Privacy Policy</a>
                <a href="#" style={{
                  color: "#999",
                  textDecoration: "none",
                  fontSize: "12px"
                }}>Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>

        <a href="tel:" style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          backgroundColor: "#8B1538",
          color: "#FFFFFF",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(139, 21, 56, 0.4)",
          textDecoration: "none",
          fontSize: "24px",
          fontWeight: "bold",
          zIndex: 999,
          transition: "transform 0.3s, box-shadow 0.3s"
        }}>📞</a>
      </body>
    </html>
  );
}