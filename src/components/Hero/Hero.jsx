"use client"

import { useEffect, useRef } from "react"
import "./Hero.css"

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge animate-on-scroll">
            <span className="badge-dot"></span>
            100% Natural y Fresco
          </div>

          <h1 className="hero-title animate-on-scroll">
            Descubre el
            <span className="title-highlight"> Sabor Auténtico</span>
            <br />
            de lo Natural
          </h1>

          <p className="hero-description animate-on-scroll">
            Jugos y smoothies elaborados con frutas frescas seleccionadas cada día. Sin azúcares añadidos, sin
            conservantes. Solo la bondad pura de la naturaleza.
          </p>

          <div className="hero-actions animate-on-scroll">
            <button className="btn-primary">
              Ver Menú
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="btn-secondary">
              <div className="play-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                </svg>
              </div>
              Ver Video
            </button>
          </div>

          <div className="hero-stats animate-on-scroll">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Clientes Felices</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Combinaciones</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">4.9</div>
              <div className="stat-label">Rating</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="juice-card card-1 animate-on-scroll">
            <div className="card-image">
              <img src="/fresh-orange-juice.png" alt="Orange Juice" />
            </div>
            <div className="card-info">
              <h3>Naranja Fresca</h3>
              <div className="card-price">$4.99</div>
            </div>
          </div>

          <div className="juice-card card-2 animate-on-scroll">
            <div className="card-image">
              <img src="/green-smoothie-with-kiwi-in-glass.jpg" alt="Green Smoothie" />
            </div>
            <div className="card-info">
              <h3>Green Detox</h3>
              <div className="card-price">$5.99</div>
            </div>
          </div>

          <div className="juice-card card-3 animate-on-scroll">
            <div className="card-image">
              <img src="/mixed-berry-smoothie-in-glass.jpg" alt="Berry Smoothie" />
            </div>
            <div className="card-info">
              <h3>Berry Mix</h3>
              <div className="card-price">$6.49</div>
            </div>
          </div>

          <div className="floating-element element-1 animate-on-scroll">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="40" fill="#c6f50f" opacity="0.2" />
              <path d="M50 20 L60 40 L80 45 L65 60 L68 80 L50 70 L32 80 L35 60 L20 45 L40 40 Z" fill="#c6f50f" />
            </svg>
          </div>

          <div className="floating-element element-2 animate-on-scroll">
            <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="30" fill="#ffa500" opacity="0.3" />
            </svg>
          </div>

          <div className="floating-badge animate-on-scroll">
            <div className="badge-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="badge-text">
              <div className="badge-title">Premium</div>
              <div className="badge-subtitle">Quality</div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll</span>
      </div>
    </section>
  )
}
