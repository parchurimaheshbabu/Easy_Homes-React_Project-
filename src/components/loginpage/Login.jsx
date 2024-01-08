import React, { useState } from 'react';

const LoginForm = () => {
  const [emailPhone, setEmailPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to a server)
    console.log('Email/Phone:', emailPhone);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email_phone">Email/Phone:</label>
          <input
            type="text"
            id="email_phone"
            name="email_phone"
            value={emailPhone}
            onChange={(e) => setEmailPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
        <p style={{ marginTop: '10px' }}>
    If you don't have an account, <a href="/register">Register Here</a>.
  </p>
      </form>
    </div>
  );
};

export default LoginForm;
