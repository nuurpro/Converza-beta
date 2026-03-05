
import React, { useState } from 'react';

interface LoginPageProps {
  onLogin: (email: string) => Promise<void>;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      await onLogin(email);
    } else {
      setError('Please enter a valid email address.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-zinc-50">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-md w-full border border-zinc-200">
        <div className="mb-8">
             <h1 className="text-4xl font-black text-zinc-900 tracking-tighter mb-2 uppercase">CONVERZA</h1>
             <p className="text-zinc-500">Sign in to access your agent workspace.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="text-left">
              <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                placeholder="name@company.com"
                className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-yellow-400/20 focus:border-yellow-400 focus:outline-none transition-all text-zinc-900 placeholder:text-zinc-400"
                required
              />
          </div>
          {error && <p className="text-red-500 text-sm text-left">{error}</p>}
          <button
            type="submit"
            className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-bold py-3.5 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02]"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
