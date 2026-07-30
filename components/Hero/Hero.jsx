import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section position-relative d-flex align-items-center">
      <Container className="d-flex justify-content-end">
        <div className="hero-card p-5 rounded shadow-sm">
          <span className="text-uppercase fw-bold tracking-wider text-muted small">Envíos Internacionales</span>
          <h1 className="display-5 fw-bold mb-3" style={{ color: '#B88E2F' }}>
            Descubre Nuestra<br />Nueva Colección
          </h1>
          <p className="text-muted mb-4">
            Conectamos países con productos de calidad garantizada y logística aérea rápida hasta la puerta de tu hogar o empresa.
          </p>
          <Button as={Link} to="/productos" className="btn-hero px-5 py-3 fw-bold text-white border-0" style={{ backgroundColor: '#B88E2F' }}>
            COMPRAR AHORA
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default Hero;