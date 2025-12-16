"use client"

import { useState, useEffect } from "react"
import "./Carousel.css"

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const juices = [
    {
      id: 1,
      name: "Tropical Paradise",
      description: "Mango, piña y maracuyá",
      price: "$5.99",
      color: "#ffa500",
      image: "/tropical-juice.jpg",
    },
    {
      id: 2,
      name: "Green Detox",
      description: "Espinaca, manzana verde y jengibre",
      price: "$6.99",
      color: "#c6f50f",
      image: "/green-detox.jpg",
    },
    {
      id: 3,
      name: "Berry Blast",
      description: "Fresas, arándanos y frambuesas",
      price: "$6.49",
      color: "#f67453",
      image: "/berry-blast.jpg",
    },
    {
      id: 4,
      name: "Citrus Sunrise",
      description: "Naranja, limón y toronja",
      price: "$4.99",
      color: "#f6c653",
      image: "/citrus-sunrise.jpg",
    },
    {
      id: 5,
      name: "Mint Cooler",
      description: "Sandía, menta y lima",
      price: "$5.49",
      color: "#66cdaa",
      image: "/mint-cooler.jpg",
    },
    {
      id: 6,
      name: "Passion Fusion",
      description: "Maracuyá, durazno y naranja",
      price: "$6.99",
      color: "#ffa500",
      image: "/passion-fusion.jpg",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % juices.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + juices.length) % juices.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 4000)

    return () => clearInterval(interval)
  }, [currentIndex, isAutoPlaying])

  return (
    <div className="carousel-container">
      <div className="carousel-header">
        <h2 className="carousel-title">Nuestro Catálogo</h2>
        <p className="carousel-subtitle">Descubre nuestros jugos naturales y frescos</p>
      </div>

      <div className="carousel-wrapper">
        <button
          className="carousel-button carousel-button-prev"
          onClick={prevSlide}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="carousel-track-container">
          <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {juices.map((juice, index) => (
              <div key={juice.id} className="carousel-slide">
                <div className="carousel-card">
                  <div className="carousel-card-image-wrapper">
                    <div
                      className="carousel-card-image"
                      style={{
                        backgroundImage: `url(${juice.image})`,
                        borderColor: juice.color,
                      }}
                    />
                    <div className="carousel-card-glow" style={{ backgroundColor: juice.color }} />
                  </div>

                  <div className="carousel-card-content">
                    <div className="carousel-card-badge" style={{ backgroundColor: juice.color }}>
                      Nuevo
                    </div>
                    <h3 className="carousel-card-title">{juice.name}</h3>
                    <p className="carousel-card-description">{juice.description}</p>

                    <div className="carousel-card-footer">
                      <span className="carousel-card-price">{juice.price}</span>
                      <button
                        className="carousel-card-button"
                        style={{
                          backgroundColor: juice.color,
                          boxShadow: `0 4px 20px ${juice.color}40`,
                        }}
                      >
                        Ordenar Ahora
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="carousel-button carousel-button-next"
          onClick={nextSlide}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="carousel-indicators">
        {juices.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            style={
              index === currentIndex
                ? {
                    backgroundColor: juices[currentIndex].color,
                    boxShadow: `0 0 15px ${juices[currentIndex].color}`,
                  }
                : {}
            }
          />
        ))}
      </div>

      <div className="carousel-decorations">
        <div className="carousel-decoration carousel-decoration-1" />
        <div className="carousel-decoration carousel-decoration-2" />
        <div className="carousel-decoration carousel-decoration-3" />
      </div>
    </div>
  )
}
