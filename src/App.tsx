import React, { useState } from 'react';
import SignIn from './features/user/services/SignIn';
import SignUp from './features/user/services/SignUp';
import './App.css';


const App: React.FC = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  return (
    
    <div className="app-container">
      {isLoginForm ? (
        <div>
          <SignIn />
          <p className="switch-form-text">
            Don't have an account?{' '}
            <span
              onClick={() => setIsLoginForm(false)}
              style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
            >
              Register
            </span>
          </p>
        </div>
      ) : (
        <div>
          <SignUp />
          <p className="switch-form-text">
            Already have an account?{' '}
            <span
              onClick={() => setIsLoginForm(true)}
              style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
            >
              Login
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
