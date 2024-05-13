import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (username === 'vishu.sharma@techugo.in' && password === 'vishu123`0') {
      // Successful login
      alert('Login successful!');
    } else {
      // Invalid login
      setErrorMessage('Invalid username or password');
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <form>
        <div>
          <label>Email:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
