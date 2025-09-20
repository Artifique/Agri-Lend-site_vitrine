
import React from 'react';

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2>Nos Solutions</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Vente Directe Simplifiée</h3>
            <p>Une plateforme intuitive pour que les agriculteurs vendent leurs produits directement aux acheteurs, sans intermédiaire.</p>
          </div>
          <div className="service-card">
            <h3>Transactions Sécurisées par Blockchain</h3>
            <p>Les transactions sont sécurisées par la technologie blockchain, assurant des transactions fiables et transparentes.</p>
          </div>
          <div className="service-card">
            <h3>Logistique Optimisée</h3>
            <p>Nous gérons la collecte et la livraison des produits fraîchement récoltés.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
