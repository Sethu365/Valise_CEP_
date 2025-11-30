// src/components/common/Header.jsx
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(72);

  const headerRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024 && open) setOpen(false);
      computeHeaderHeight();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  const computeHeaderHeight = () => {
    const el = headerRef.current;
    if (el) {
      const h = Math.round(el.getBoundingClientRect().height);
      setHeaderHeight(h);
      el.style.setProperty("--header-height", `${h}px`);
    }
  };

  useLayoutEffect(() => {
    computeHeaderHeight();
    const t = setTimeout(computeHeaderHeight, 300);
    return () => clearTimeout(t);
  }, []);

  const onLogoLoad = () => computeHeaderHeight();

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header
        ref={headerRef}
        className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
        style={{ ["--header-height"]: `${headerHeight}px` }}
      >
        <div className={styles.inner}>
          <Link to="/" className={styles.brand} aria-label="Homepage" onClick={closeMenu}>
            <img
              ref={logoRef}
              src={logo}
              alt="Site logo"
              className={styles.brandLogo}
              onLoad={onLogoLoad}
              draggable="false"
            />
          </Link>

          {/* ------------------ DESKTOP NAV ------------------ */}
          <nav className={styles.desktopNav} aria-label="Primary navigation">
            <Link to="/" className={styles.navLink} onClick={closeMenu}>Home</Link>
            <Link to="/courses" className={styles.navLink} onClick={closeMenu}>Courses</Link>
            <Link to="/about" className={styles.navLink} onClick={closeMenu}>About</Link>
            <Link to="/blog" className={styles.navLink} onClick={closeMenu}>Blog</Link> {/* ⭐ Added */}
            <Link to="/careers" className={styles.navLink} onClick={closeMenu}>Careers</Link>
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div className={styles.actions}>
              <Link to="/contact" className={styles.signupBtn} onClick={closeMenu}>Contact Us</Link>
            </div>

            <button
              className={styles.mobileToggle}
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {!open ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M6 6l12 12M18 6L6 18" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ------------------ MOBILE MENU ------------------ */}
      {open && (
        <>
          <div
            className={styles.mobileBackdrop}
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <aside
            id="mobile-menu"
            className={styles.mobilePanel}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
          >
            <nav className={styles.mobileNav}>
              <Link to="/" className={styles.mobileNavLink} onClick={closeMenu}>Home</Link>
              <Link to="/courses" className={styles.mobileNavLink} onClick={closeMenu}>Courses</Link>
              <Link to="/about" className={styles.mobileNavLink} onClick={closeMenu}>About</Link>
              <Link to="/blog" className={styles.mobileNavLink} onClick={closeMenu}>Blog</Link> {/* ⭐ Added */}
              <Link to="/careers" className={styles.mobileNavLink} onClick={closeMenu}>Careers</Link>

              <div style={{ marginTop: "auto", padding: "12px 18px" }}>
                <Link to="/contact" className={styles.mobileBtnAccent} style={{ display: "block", padding: "12px 14px" }} onClick={closeMenu}>
                  Get Started
                </Link>
              </div>
            </nav>
          </aside>
        </>
      )}
    </>
  );
}
