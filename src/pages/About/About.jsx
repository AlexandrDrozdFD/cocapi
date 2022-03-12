import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="section about-section">
      <h1 className="section-title">about us</h1>
      <p>
        Welcome to TheCocktailDB
        An open, crowd-sourced database of drinks and cocktails from around the world.
        We also offer a free JSON API for anyone wanting to use it.
        If you like the site, please consider supporting us on Patreon.
      </p>
    </section>
  );
}

export default About;