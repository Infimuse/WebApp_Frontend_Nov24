import React, { useState } from 'react';
import SignUp from './SignUp'; // Import the SignUp component

function SignIn({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between SignIn and SignUp

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://whatever.lat/api/v1/customers/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful', data);
        // Handle successful login (e.g., redirect, show success message, etc.)
        onClose();
      } else {
        console.error('Login failed', data);
        // Handle login failure (e.g., show error message)
      }
    } catch (error) {
      console.error('An error occurred', error);
      // Handle network or other errors
    } finally {
      setLoading(false);
    }
  };

  const handleClickOutside = (e) => {
    if (e.target.id === 'sign-in-modal') {
      onClose();
    }
  };

  if (isSignUp) {
    return <SignUp onClose={onClose} />;
  }

  return (
    <div
      id="sign-in-modal"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleClickOutside}
    >
      <div className="bg-white p-8 rounded-lg text-black shadow-lg w-full max-w-md relative">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-[#12B9f3]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-[#12B9f3]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#12B9f3] text-white py-2 rounded-lg hover:bg-[#12B9f3] transition duration-300"
            disabled={loading}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
        <p className="mt-4 text-center">
          Dont have an account?{' '}
          <span className="text-[#12B9f3] cursor-pointer" onClick={() => setIsSignUp(true)}>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignIn;