import './AboutUs.css'

export default function AboutUs() {
  return (
    <section id="nosotros" className="about-us">
      <div className="about-container">
        <div className="about-header">
          <span className="about-badge">Sobre Nosotros</span>
          <h2 className="about-title">
            Pasión por los Jugos <span className="highlight">Naturales</span>
          </h2>
          <p className="about-subtitle">
            Desde 2020, creando las mejores combinaciones de sabores naturales para tu salud y bienestar
          </p>
        </div>

        <div className="about-content">
          <div className="about-image-section">
            <div className="about-image-wrapper">
              <img src="/green-smoothie-with-kiwi-in-glass.jpg" alt="Preparando jugos frescos" className="about-image" />
              <div className="about-badge-overlay">
                <div className="badge-item">
                  <span className="badge-number">100%</span>
                  <span className="badge-text">Natural</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-text-section">
            <div className="about-card">
              <div className="card-icon">🍊</div>
              <h3 className="card-title">Ingredientes Frescos</h3>
              <p className="card-description">
                Seleccionamos cuidadosamente las mejores frutas y vegetales cada día para garantizar la máxima frescura
                y sabor en cada vaso.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">⚡</div>
              <h3 className="card-title">Energía Natural</h3>
              <p className="card-description">
                Nuestros jugos están diseñados para brindarte la energía que necesitas sin azúcares añadidos ni
                conservantes artificiales.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">💚</div>
              <h3 className="card-title">Compromiso Saludable</h3>
              <p className="card-description">
                Creemos en un estilo de vida saludable y sostenible. Cada jugo es preparado al momento con amor y
                dedicación.
              </p>
            </div>
          </div>
        </div>

        <div className="about-stats">
          <div className="stat-item">
            <div className="stat-number">5000+</div>
            <div className="stat-label">Clientes Felices</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Combinaciones</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Satisfacción</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">3</div>
            <div className="stat-label">Ubicaciones</div>
          </div>
        </div>
      </div>
    </section>
  )
}
