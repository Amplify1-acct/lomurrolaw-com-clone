import type { Metadata } from "next";
import { Playfair_Display, Open_Sans } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LoMurro Law",
  description: "Professional legal services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${openSans.variable}`}>
      <body style={{ margin: 0, padding: 0, fontFamily: "var(--font-open-sans), system-ui, -apple-system, sans-serif", backgroundColor: "#ffffff", color: "#1a1a1a" }}>
        <nav style={{ position: "sticky", top: 0, backgroundColor: "#1a1a1a", color: "#ffffff", zIndex: 1000, boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontSize: "28px", fontWeight: "700", fontFamily: "var(--font-playfair), serif", color: "#d4af37" }}>
              LoMurro Law
            </div>
            <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
              <a href="#home" style={{ color: "#ffffff", textDecoration: "none", fontSize: "16px", fontWeight: "400", transition: "color 0.3s" }}>Home</a>
              <a href="#about" style={{ color: "#ffffff", textDecoration: "none", fontSize: "16px", fontWeight: "400", transition: "color 0.3s" }}>About</a>
              <a href="#services" style={{ color: "#ffffff", textDecoration: "none", fontSize: "16px", fontWeight: "400", transition: "color 0.3s" }}>Services</a>
              <a href="#contact" style={{ color: "#ffffff", textDecoration: "none", fontSize: "16px", fontWeight: "400", transition: "color 0.3s" }}>Contact</a>
              <a href="#contact" style={{ backgroundColor: "#d4af37", color: "#1a1a1a", padding: "12px 28px", textDecoration: "none", fontWeight: "600", fontSize: "16px", borderRadius: "4px", transition: "background-color 0.3s" }}>
                Get Consultation
              </a>
            </div>
          </div>
        </nav>

        <main>{children}</main>

        <footer style={{ backgroundColor: "#1a1a1a", color: "#ffffff", padding: "60px 40px 30px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "40px", marginBottom: "50px" }}>
              <div>
                <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "24px", marginBottom: "20px", color: "#d4af37", fontWeight: "600" }}>
                  LoMurro Law
                </h3>
                <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#cccccc", margin: 0 }}>
                  Providing exceptional legal services with integrity, dedication, and expertise.
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: "18px", marginBottom: "20px", fontWeight: "600", color: "#ffffff" }}>Practice Areas</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: "12px" }}>
                    <a href="#" style={{ color: "#cccccc", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>Personal Injury</a>
                  </li>
                  <li style={{ marginBottom: "12px" }}>
                    <a href="#" style={{ color: "#cccccc", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>Family Law</a>
                  </li>
                  <li style={{ marginBottom: "12px" }}>
                    <a href="#" style={{ color: "#cccccc", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>Criminal Defense</a>
                  </li>
                  <li style={{ marginBottom: "12px" }}>
                    <a href="#" style={{ color: "#cccccc", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>Estate Planning</a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 style={{ fontSize: "18px", marginBottom: "20px", fontWeight: "600", color: "#ffffff" }}>Quick Links</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: "12px" }}>
                    <a href="#" style={{ color: "#cccccc", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>About Us</a>
                  </li>
                  <li style={{ marginBottom: "12px" }}>
                    <a href="#" style={{ color: "#cccccc", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>Our Team</a>
                  </li>
                  <li style={{ marginBottom: "12px" }}>
                    <a href="#" style={{ color: "#cccccc", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>Testimonials</a>
                  </li>
                  <li style={{ marginBottom: "12px" }}>
                    <a href="#" style={{ color: "#cccccc", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>Blog</a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 style={{ fontSize: "18px", marginBottom: "20px", fontWeight: "600", color: "#ffffff" }}>Contact Info</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: "12px", fontSize: "14px", color: "#cccccc", lineHeight: "1.6" }}>
                    Phone: (555) 123-4567
                  </li>
                  <li style={{ marginBottom: "12px", fontSize: "14px", color: "#cccccc", lineHeight: "1.6" }}>
                    Email: info@lomurrolaw.com
                  </li>
                  <li style={{ marginBottom: "12px", fontSize: "14px", color: "#cccccc", lineHeight: "1.6" }}>
                    Office Hours:<br />Mon-Fri: 9AM - 5PM
                  </li>
                </ul>
              </div>
            </div>

            <div style={{ borderTop: "1px solid #333333", paddingTop: "30px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <p style={{ fontSize: "14px", color: "#cccccc", margin: 0 }}>
                © 2024 LoMurro Law. All rights reserved.
              </p>
              <div style={{ display: "flex", gap: "20px" }}>
                <a href="#" style={{ color: "#cccccc", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>Privacy Policy</a>
                <a href="#" style={{ color: "#cccccc", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>

        <a href="tel:5551234567" style={{ position: "fixed", bottom: "30px", right: "30px", backgroundColor: "#d4af37", color: "#1a1a1a", width: "60px", height: "60px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", boxShadow: "0 4px 12px rgba(212,175,55,0.4)", zIndex: 999, transition: "transform 0.3s" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 16.92V19.92C22 20.48 21.54 20.93 20.99 20.92C10.46 20.41 3.59 13.54 3.08 3.01C3.07 2.46 3.52 2 4.08 2H7.08C7.64 2 8.1 2.46 8.1 3.02C8.1 4.17 8.27 5.28 8.58 6.33C8.7 6.74 8.59 7.19 8.29 7.49L6.59 9.19C8.13 12.28 11.72 15.87 14.81 17.41L16.51 15.71C16.81 15.41 17.26 15.3 17.67 15.42C18.72 15.73 19.83 15.9 20.98 15.9C21.54 15.9 22 16.36 22 16.92Z" fill="#1a1a1a"/>
          </svg>
        </a>
      </body>
    </html>
  );
}