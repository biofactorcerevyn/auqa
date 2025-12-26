
import { useState } from "react";
import logoImage from "../assets/Aquaphilic-removebg.png";

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Home",          id: "home",          color: "#2c502eff" }, // Premium Gold
    // { label: "About Us",     id: "about",         color: "#2c502eff" }, // Deep Navy
    { label: "Products",     id: "products",      color: "#2c502eff" }, // Rich Teal
    // { label: "R&D",          id: "rnd",           color: "#2c502eff" }, // Emerald Green
    { label: "Career",       id: "career",        color: "#2c502eff" }, // Royal Purple
    { label: "Join our Network", id: "join-network", color: "#2c502eff" }, // Deep Crimson
    { label: "Downloads",    id: "downloads",     color: "#2c502eff" }, // Sophisticated Gray
    // { label: "Contact",      id: "contact",       color: "#2c502eff" }, // Warm Amber
  ];

  return (
    <>
      <header className="header " style={{backgroundColor: "#F5F6F4"}}>
        <div className="header-container">
          {/* Logo */}
          <div className="logo" onClick={() => handleNavigate("home")}>
            <img src={logoImage} alt="AquaPhilic Logo" />
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                style={{
                  color: activeSection === item.id ? item.color : "#2D2D2D",
                  "--underline": item.color,
                } as React.CSSProperties}
                className={activeSection === item.id ? "active" : ""}
                onClick={() => handleNavigate(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Hamburger */}
          <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
            <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
            <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav-overlay ${isMenuOpen ? "show" : ""}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              style={{
                color: activeSection === item.id ? item.color : "#2D2D2D",
              } as React.CSSProperties}
              className={activeSection === item.id ? "active" : ""}
              onClick={() => handleNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </header>

      {/* CSS Styling */}
      <style>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: linear-gradient(135deg, #FDFDFD 0%, #F8F9FA 100%);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid #E5E7EB;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          transition: all 0.4s ease;
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 40px;
          height: 100px;
        }

        .logo img {
          height: 72px;
          cursor: pointer;
          transition: transform 0.3s ease;
          // filter: drop-shadow(0 1px 3px rgba(0,0,0,0.1));
        }

        .logo img:hover {
          transform: scale(1.06);
        }

        /* Desktop Navigation */
        .desktop-nav {
          display: flex;
          gap: 28px;
          font-family: 'Inter', 'Segoe UI', sans-serif;
        }

        .desktop-nav button {
          position: relative;
          font-size: 16px;
          font-weight: 500;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px 0;
          transition: color 0.35s ease;
          letter-spacing: 0.3px;
        }

        .desktop-nav button::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2.5px;
          background-color: var(--underline);
          border-radius: 1px;
          transition: all 0.35s ease;
          transform: translateX(-50%);
        }

        .desktop-nav button:hover::after,
        .desktop-nav button.active::after {
          width: 100%;
        }

        .desktop-nav button:hover,
        .desktop-nav button.active {
          color: var(--underline);
        }

        /* Hamburger */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
        }

        .hamburger .bar {
          width: 26px;
          height: 3px;
          background-color: #2D2D2D;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        /* Mobile Overlay */
        .mobile-nav-overlay {
          position: absolute;
          top: 100px;
          left: Russian;
          right: 0;
          background: #FDFDFD;
          display: none;
          flex-direction: column;
          gap: 14px;
          padding: 20px 16px;
          border-top: 1px solid #E5E7EB;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          z-index: 40;
        }

        .mobile-nav-overlay.show {
          display: flex;
        }

        .mobile-nav-overlay button {
          font-size: 18px;
          font-weight: 500;
          background: none;
          border: none;
          text-align: left;
          padding: 10px 0;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .mobile-nav-overlay button.active,
        .mobile-nav-overlay button:hover {
          color: inherit;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .header-container {
            padding: 0 16px;
            height: 80px;
          }

          .desktop-nav {
            display: none;
          }

          .hamburger {
            display: flex;
          }

          .logo img {
            height: 56px;
          }

          .mobile-nav-overlay {
            top: 80px;
          }
        }
      `}</style>
    </>
  );
}