
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("myzdroey");

  if (state.succeeded) {
      return <p>Merci pour votre message !</p>;
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contactez-nous</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input id="name" type="text" name="name" placeholder="Votre nom" required />
          <input id="email" type="email" name="email" placeholder="Votre email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea id="message" name="message" placeholder="Votre message" required></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
          <button type="submit" className="btn btn-primary" disabled={state.submitting}>
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
