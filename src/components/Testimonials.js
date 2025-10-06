import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Agri-Lend a transformé ma façon de vendre mes récoltes. C'est simple, direct et juste.",
      author: "Jean Dupont, Agriculteur"
    },
    {
      quote: "Enfin une plateforme qui garantit la fraîcheur et la traçabilité des produits. Je recommande !",
      author: "Marie Martin, Chef de restaurant"
    },
    {
      quote: "La sécurité des transactions et la logistique optimisée me font gagner un temps précieux.",
      author: "Pauline Lefebvre, Gérante de coopérative"
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2>Ce que nos utilisateurs disent</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <p className="testimonial-author">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;