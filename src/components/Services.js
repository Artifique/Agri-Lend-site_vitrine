import React from 'react';

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2>Nos Solutions</h2>
        <p className="section-subtitle">Des outils conçus pour simplifier votre quotidien et maximiser votre rentabilité.</p>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-store"></i>
            </div>
            <h3>Vente Directe Simplifiée</h3>
            <p>Une plateforme intuitive pour que les agriculteurs vendent leurs produits directement aux acheteurs, sans intermédiaire.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>Transactions Sécurisées</h3>
            <p>Grâce à la technologie blockchain, nous assurons des transactions fiables, transparentes et immuables.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-truck"></i>
            </div>
            <h3>Logistique Optimisée</h3>
            <p>Nous prenons en charge la collecte et la livraison pour garantir la fraîcheur des produits, de la ferme à votre porte.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;