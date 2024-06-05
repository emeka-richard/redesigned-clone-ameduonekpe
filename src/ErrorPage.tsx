import React from 'react';
import "./index.css"

const ErrorPage: React.FC = () => {

  return (
    <section id="error-page">
      <h1>Oops!</h1>
      <p data-testid="error-message">Sorry, an unexpected error has occurred while using the App.</p>
      <button className='btn' role='button' onClick={() => window.history.back()}>
        Go back
      </button>
    </section>
  );
};

export default ErrorPage;