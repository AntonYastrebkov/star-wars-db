import React from 'react';
import { Redirect } from 'react-router-dom';

const LoginPage = ({ isLoggedIn, onLogin }) => {
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }
  
  return (
    <div className="jumbotron">
      <p>You should log in to see secrets!</p>
      <button 
          className="btn btn-primary"
          onClick={ onLogin }>
        Login
      </button>
    </div>
  );
};

export default LoginPage;