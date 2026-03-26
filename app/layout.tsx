import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LoMurro Law",
  description: "Pennsylvania Supreme Court Certifications",
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
      <body style={{ margin: 0, padding: 0, fontFamily: "'Open Sans', sans-serif", color: "#2C2C2C" }}>
        <nav style={{
          position: "sticky",
          top: 0,
          backgroundColor: "#FFFFFF",
          borderBottom: "1px solid #E5E5E5",
          zIndex: 1000,
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
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
              <div style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "24px",
                fontWeight: 700,
                color: "#2C2C2C",
                letterSpacing: "1px"
              }}>
                LOMURRO LAW
              </div>
            </div>
            <div style={{
              display: "flex",
              gap: "30px",
              alignItems: "center"
            }}>
              <a href="/" style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "13px",
                fontWeight: 400,
                color: "#2C2C2C",
                textDecoration: "none",
                letterSpacing: "0.5px",
                transition: "color 0.3s"
              }}>HOME</a>
              <a href="/about" style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "13px",
                fontWeight: 400,
                color: "#2C2C2C",
                textDecoration: "none",
                letterSpacing: "0.5px",
                transition: "color 0.3s"
              }}>ABOUT US</a>
              <a href="/practice-areas" style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "13px",
                fontWeight: 400,
                color: "#2C2C2C",
                textDecoration: "none",
                letterSpacing: "0.5px",
                transition: "color 0.3s"
              }}>PRACTICE AREAS</a>
              <a href="/case-results" style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "13px",
                fontWeight: 400,
                color: "#2C2C2C",
                textDecoration: "none",
                letterSpacing: "0.5px",
                transition: "color 0.3s"
              }}>CASE RESULTS</a>
              <a href="/contact" style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "13px",
                fontWeight: 400,
                color: "#2C2C2C",
                textDecoration: "none",
                letterSpacing: "0.5px",
                transition: "color 0.3s"
              }}>CONTACT</a>
            </div>
            <div style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "16px",
              fontWeight: 700,
              color: "#8B0F28",
              letterSpacing: "0.5px"
            }}>
              (724) 841-0346
            </div>
          </div>
        </nav>

        <main>{children}</main>

        <footer style={{
          backgroundColor: "#2C2C2C",
          color: "#FFFFFF",
          padding: "60px 20px 30px"
        }}>
          <div style={{
            maxWidth: "1200px",
            margin: "0 auto"
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "40px",
              marginBottom: "50px"
            }}>
              <div>
                <h3 style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginTop: 0,
                  marginBottom: "20px",
                  letterSpacing: "1px"
                }}>PERSONAL INJURY</h3>
                <ul style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0
                }}>
                  <li style={{ marginBottom: "10px" }}>
                    <a href="/personal-injury" style={{
                      color: "#FFFFFF",
                      textDecoration: "none",
                      fontSize: "13px",
                      fontFamily: "'Open Sans', sans-serif"
                    }}>Motor Vehicle Accidents</a>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <a href="/personal-injury" style={{
                      color: "#FFFFFF",
                      textDecoration: "none",
                      fontSize: "13px",
                      fontFamily: "'Open Sans', sans-serif"
                    }}>Wrongful Death</a>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <a href="/personal-injury" style={{
                      color: "#FFFFFF",
                      textDecoration: "none",
                      fontSize: "13px",
                      fontFamily: "'Open Sans', sans-serif"
                    }}>Slip and Fall</a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginTop: 0,
                  marginBottom: "20px",
                  letterSpacing: "1px"
                }}>MEDICAL MALPRACTICE</h3>
                <ul style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0
                }}>
                  <li style={{ marginBottom: "10px" }}>
                    <a href="/medical-malpractice" style={{
                      color: "#FFFFFF",
                      textDecoration: "none",
                      fontSize: "13px",
                      fontFamily: "'Open Sans', sans-serif"
                    }}>Surgical Errors</a>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <a href="/medical-malpractice" style={{
                      color: "#FFFFFF",
                      textDecoration: "none",
                      fontSize: "13px",
                      fontFamily: "'Open Sans', sans-serif"
                    }}>Misdiagnosis</a>
                  </li>
                </ul>
                <h3 style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginTop: "30px",
                  marginBottom: "20px",
                  letterSpacing: "1px"
                }}>WORKERS COMPENSATION</h3>
              </div>

              <div>
                <h3 style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginTop: 0,
                  marginBottom: "20px",
                  letterSpacing: "1px"
                }}>CRIMINAL LAW</h3>
                <ul style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0
                }}>
                  <li style={{ marginBottom: "10px" }}>
                    <a href="/criminal-law" style={{
                      color: "#FFFFFF",
                      textDecoration: "none",
                      fontSize: "13px",
                      fontFamily: "'Open Sans', sans-serif"
                    }}>DUI Defense</a>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <a href="/criminal-law" style={{
                      color: "#FFFFFF",
                      textDecoration: "none",
                      fontSize: "13px",
                      fontFamily: "'Open Sans', sans-serif"
                    }}>Drug Charges</a>
                  </li>
                </ul>
                <h3 style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginTop: "30px",
                  marginBottom: "20px",
                  letterSpacing: "1px"
                }}>TRAFFIC LAW</h3>
              </div>

              <div>
                <h3 style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginTop: 0,
                  marginBottom: "20px",
                  letterSpacing: "1px"
                }}>FAMILY LAW</h3>
                <ul style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0
                }}>
                  <li style={{ marginBottom: "10px" }}>
                    <a href="/family-law" style={{
                      color: "#FFFFFF",
                      textDecoration: "none",
                      fontSize: "13px",
                      fontFamily: "'Open Sans', sans-serif"
                    }}>Divorce</a>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <a href="/family-law" style={{
                      color: "#FFFFFF",
                      textDecoration: "none",
                      fontSize: "13px",
                      fontFamily: "'Open Sans', sans-serif"
                    }}>Child Custody</a>
                  </li>
                </ul>
                <h3 style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginTop: "30px",
                  marginBottom: "20px",
                  letterSpacing: "1px"
                }}>WILLS & ESTATES</h3>
                <h3 style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginTop: "30px",
                  marginBottom: "20px",
                  letterSpacing: "1px"
                }}>BANKRUPTCY LAW</h3>
              </div>
            </div>

            <div style={{
              borderTop: "1px solid #444",
              paddingTop: "30px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
              <div>
                <h3 style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginTop: 0,
                  marginBottom: "15px",
                  letterSpacing: "1px"
                }}>CONTACT THE OFFICE</h3>
                <p style={{
                  margin: "5px 0",
                  fontSize: "14px",
                  color: "#FFFFFF"
                }}>105 BRASHEAR AVENUE</p>
                <p style={{
                  margin: "5px 0",
                  fontSize: "14px",
                  color: "#FFFFFF"
                }}>MORGAN, PA 15064</p>
                <p style={{
                  margin: "15px 0 5px",
                  fontSize: "14px",
                  color: "#FFFFFF"
                }}>PHONE: <a href="tel:7248410346" style={{ color: "#8B0F28", textDecoration: "none" }}>(724) 841-0346</a></p>
                <div style={{
                  display: "flex",
                  gap: "15px",
                  marginTop: "20px"
                }}>
                  <a href="#" style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: "#8B0F28",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                    textDecoration: "none",
                    fontSize: "14px"
                  }}>f</a>
                  <a href="#" style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: "#8B0F28",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                    textDecoration: "none",
                    fontSize: "14px"
                  }}>in</a>
                  <a href="#" style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: "#8B0F28",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                    textDecoration: "none",
                    fontSize: "14px"
                  }}>t</a>
                  <a href="#" style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: "#8B0F28",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                    textDecoration: "none",
                    fontSize: "14px"
                  }}>y</a>
                </div>
              </div>

              <div style={{ textAlign: "right" }}>
                <h3 style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginTop: 0,
                  marginBottom: "15px",
                  letterSpacing: "1px"
                }}>OFFICE HOURS</h3>
                <p style={{
                  margin: "5px 0",
                  fontSize: "14px",
                  color: "#FFFFFF"
                }}>Monday - Friday</p>
                <p style={{
                  margin: "5px 0",
                  fontSize: "14px",
                  color: "#FFFFFF"
                }}>8:30 AM - 5:00 PM</p>
              </div>
            </div>

            <div style={{
              textAlign: "center",
              marginTop: "40px",
              paddingTop: "30px",
              borderTop: "1px solid #444"
            }}>
              <p style={{
                margin: 0,
                fontSize: "12px",
                color: "#999"
              }}>© 2024 LoMurro Law. All Rights Reserved. | <a href="/privacy" style={{ color: "#999", textDecoration: "none" }}>Privacy Policy</a></p>
            </div>
          </div>
        </footer>

        <a href="tel:7248410346" style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          backgroundColor: "#8B0F28",
          color: "#FFFFFF",
          padding: "15px 25px",
          borderRadius: "50px",
          textDecoration: "none",
          fontFamily: "'Oswald', sans-serif",
          fontSize: "16px",
          fontWeight: 700,
          boxShadow: "0 4px 12px rgba(139, 15, 40, 0.4)",
          zIndex: 999,
          letterSpacing: "0.5px"
        }}>
          CALL NOW
        </a>
      </body>
    </html>
  );
}