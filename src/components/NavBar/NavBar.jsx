"use client"

import { useState, useEffect } from "react"
import "./NavBar.css"

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <div className="logo-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L8 6H16L12 2Z" fill="currentColor" />
              <path d="M17 6C17 6 17 8 15 10C13 12 10 12 8 10C6 8 6 6 6 6H17Z" fill="currentColor" />
              <rect x="7" y="10" width="10" height="12" rx="2" fill="currentColor" />
            </svg>
          </div>
          <span className="logo-text">Juice Bar</span>
        </div>

        <ul className="navbar-menu">
          <li>
            <a href="#inicio" className="nav-link">
              Inicio
            </a>
          </li>
          <li>
            <a href="#jugos" className="nav-link">
              Jugos
            </a>
          </li>
          <li>
            <a href="#smoothies" className="nav-link">
              Smoothies
            </a>
          </li>
          <li>
            <a href="#especiales" className="nav-link">
              Especiales
            </a>
          </li>
          <li>
            <a href="#contacto" className="nav-link">
              Contacto
            </a>
          </li>
        </ul>

        <div className="navbar-actions">
          <button className="btn-cart">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="9" cy="21" r="1" fill="currentColor" />
              <circle cx="20" cy="21" r="1" fill="currentColor" />
              <path
                d="M1 1H5L7.68 14.39C7.77 14.82 8.16 15.13 8.6 15.13H19.4C19.84 15.13 20.23 14.82 20.32 14.39L23 6H6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="cart-badge">0</span>
          </button>
          <button className="btn-order">Ordenar</button>
        </div>

        <button
          className={`mobile-menu-toggle ${mobileMenuOpen ? "active" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#inicio" onClick={() => setMobileMenuOpen(false)}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#jugos" onClick={() => setMobileMenuOpen(false)}>
              Jugos
            </a>
          </li>
          <li>
            <a href="#smoothies" onClick={() => setMobileMenuOpen(false)}>
              Smoothies
            </a>
          </li>
          <li>
            <a href="#especiales" onClick={() => setMobileMenuOpen(false)}>
              Especiales
            </a>
          </li>
          <li>
            <a href="#contacto" onClick={() => setMobileMenuOpen(false)}>
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
