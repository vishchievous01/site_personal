import React, { useEffect, useState } from "react";

function Navbar() {
  const [navbarOpacity, setNavbarOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollFadeStart = 50;   // Start fading after 50px
      const scrollFadeEnd = 250;    // Fully transparent after 250px
      const scrollY = window.scrollY;

      if (scrollY < scrollFadeStart) {
        setNavbarOpacity(1);
      } else if (scrollY > scrollFadeEnd) {
        setNavbarOpacity(0);
      } else {
        // Smooth fade between 1 and 0
        const fadeRange = scrollFadeEnd - scrollFadeStart;
        const fadeAmount = (scrollY - scrollFadeStart) / fadeRange;
        setNavbarOpacity(1 - fadeAmount);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="navbar bg-body-tertiary fixed-top px-3"
      style={{
        transition: "opacity 0.4s",
        opacity: navbarOpacity,
      }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center py-2">
        {/* Name Centered */}
        <div className="flex-grow-1 text-center">
          <a className="navbar-brand m-0" href="#home">
            <h6 className="fw-light mb-0" style={{ fontSize: "22px" }}>
              Vishnu Narayanan
            </h6>
          </a>
        </div>
      </div>
      <style>
        {`
          .menu-items {
            gap: 15px;
          }
          .nav-link {
            font-size: 15px;
            font-weight: 300;
            color: black;
            text-decoration: none;
            padding: 6px 0;
            transition: color 0.3s;
          }
          .nav-link:hover {
            color: rgb(66, 66, 66);
          }
          .navbar {
            min-height: 50px;
          }
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;
