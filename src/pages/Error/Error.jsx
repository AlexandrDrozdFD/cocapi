import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container"> 
        <h1 className="section-title">No such page</h1>
        <Link to="/" className="btn btn-primary">Back Home</Link>
      </div>
    </section>
  );
}

export default Error;