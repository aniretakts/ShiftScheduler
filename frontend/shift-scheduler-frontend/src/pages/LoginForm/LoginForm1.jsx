import { useState } from 'react'
import { login } from "../services/api";
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    console.log("Attempting to login with", { email, password });
    try {
      const data = await login(email, password);
      console.log("Login successful", data);
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-400 to-yellow-300">
      <div className="w-full max-w-sm p-8 bg-white rounded-2xl shadow-2xl">
        {/* Store Logo */}
        <div className="flex justify-center mb-6">
          <img src="/stathmos.jpg" alt="Store Logo" className="h-16 w-auto" />
        </div>

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back
        </h1>

        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-1 font-medium">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          <button
            type="button"
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition font-semibold"
            onClick={handleLogin}
          >
            Login NOT
          </button>
        </form>
      </div>
    </div>
  );
}
