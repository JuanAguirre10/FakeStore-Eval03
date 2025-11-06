import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=6')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>🛍️ Bienvenido a FakeStore Catalog</h1>
          <p>Explora nuestra colección de productos increíbles con los mejores precios del mercado.</p>
          <Link to="/entities" className="hero-button">
            Ver todos los productos
          </Link>
        </div>
      </section>

      <section className="featured-products">
        <h2>Productos Destacados</h2>
        {loading ? (
          <div className="loading">Cargando productos...</div>
        ) : (
          <div className="products-preview">
            {products.map(product => (
              <div key={product.id} className="product-preview-card">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p className="price">${product.price}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;