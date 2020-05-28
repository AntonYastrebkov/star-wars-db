import React from 'react';
import { Redirect } from 'react-router-dom';

const SecretPage = ({isLoggedIn}) => {
  if (isLoggedIn) {
    return (
      <div className="jumbotron rounded">
        <h3>Absolutely secret page!</h3>
      </div>
    );
  }

  return <Redirect to="/login" />;
};

export default SecretPage;