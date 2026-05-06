import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import StarBackground from '../components/StarBackground';
import logo from '../assets/logo.png';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getFriendlyError = (code) => {
    switch (code) {
      case 'auth/user-not-found':
      case 'auth/wrong-password':
      case 'auth/invalid-credential':
        return 'Invalid credentials. Please try again.';
      case 'auth/invalid-email':
        return 'Please enter a valid email address.';
      case 'auth/too-many-requests':
        return 'Too many attempts. Please wait and try again.';
      case 'auth/network-request-failed':
        return 'Network error. Check your connection.';
      default:
        return err?.message || 'Unauthorized access.';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Signed in:', userCredential.user);
      navigate('/admin');
    } catch (err) {
      console.log(err);
      console.log(err.code);
      console.log(err.message);
      setError(getFriendlyError(err.code));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Star Background */}
      <StarBackground density={0.8} />

      {/* Subtle radial glow behind the card */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 70%)',
        }}
      />

      {/* Card */}
      <div
        className="relative z-10 w-full max-w-sm"
        style={{ animation: 'fadeUpLogin 0.7s ease-out forwards' }}
      >
        {/* Logo + Branding */}
        <div className="flex flex-col items-center mb-10">
          <Link to="/" className="mb-5 opacity-90 hover:opacity-100 transition-opacity duration-300">
            <img
              src={logo}
              alt="Quantum Logo"
              className="h-14 w-auto object-contain"
              style={{ filter: 'brightness(1.2) contrast(1.1)' }}
            />
          </Link>

          <p className="text-[10px] font-semibold tracking-[0.35em] text-white/30 uppercase mb-4">
            Quantum&nbsp;·&nbsp;RVU
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
            Faculty Access
          </h1>

          <p className="text-sm text-white/40 tracking-wide">
            Authorized faculty only
          </p>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/8 mb-8" />

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="login-email" className="text-xs font-medium text-white/40 tracking-widest uppercase">
              Email
            </label>
            <input
              id="login-email"
              type="email"
              autoComplete="email"
              placeholder="faculty@rvu.edu.in"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 outline-none transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: 'none',
              }}
              onFocus={(e) => {
                e.target.style.border = '1px solid rgba(255,255,255,0.3)';
                e.target.style.boxShadow = '0 0 0 3px rgba(255,255,255,0.04)';
              }}
              onBlur={(e) => {
                e.target.style.border = '1px solid rgba(255,255,255,0.1)';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="login-password" className="text-xs font-medium text-white/40 tracking-widest uppercase">
              Password
            </label>
            <div className="relative">
              <input
                id="login-password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 pr-12 rounded-xl text-sm text-white placeholder-white/20 outline-none transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: 'none',
                }}
                onFocus={(e) => {
                  e.target.style.border = '1px solid rgba(255,255,255,0.3)';
                  e.target.style.boxShadow = '0 0 0 3px rgba(255,255,255,0.04)';
                }}
                onBlur={(e) => {
                  e.target.style.border = '1px solid rgba(255,255,255,0.1)';
                  e.target.style.boxShadow = 'none';
                }}
              />
              {/* Show / hide toggle */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors duration-200"
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  // Eye-off icon
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M10.477 10.477A3 3 0 0013.5 13.5M6.228 6.228A10.45 10.45 0 003 12c1.665 4.095 5.654 7 9 7a10.43 10.43 0 005.772-1.728M9.53 9.53A3 3 0 0112 9c1.657 0 3 1.343 3 3 0 .345-.058.676-.163.984M17.772 17.772A10.45 10.45 0 0121 12c-1.665-4.095-5.654-7-9-7a10.43 10.43 0 00-4.544 1.03" />
                  </svg>
                ) : (
                  // Eye icon
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Error message */}
          {error && (
            <p
              className="text-xs text-center tracking-wide"
              style={{
                color: 'rgba(255, 100, 100, 0.85)',
                animation: 'fadeUpLogin 0.3s ease-out forwards',
              }}
            >
              {error}
            </p>
          )}

          {/* Login Button */}
          <button
            id="login-submit"
            type="submit"
            disabled={loading}
            className="mt-2 w-full py-3 rounded-xl text-sm font-semibold tracking-widest uppercase transition-all duration-300"
            style={{
              background: loading ? 'rgba(255,255,255,0.5)' : 'white',
              color: 'black',
              letterSpacing: '0.12em',
              cursor: loading ? 'not-allowed' : 'pointer',
            }}
            onMouseEnter={(e) => {
              if (loading) return;
              e.target.style.background = 'rgba(255,255,255,0.88)';
              e.target.style.transform = 'translateY(-1px)';
              e.target.style.boxShadow = '0 8px 24px rgba(255,255,255,0.12)';
            }}
            onMouseLeave={(e) => {
              if (loading) return;
              e.target.style.background = 'white';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            {loading ? 'Signing In...' : 'Login'}
          </button>
        </form>

        {/* Divider */}
        <div className="h-px w-full bg-white/8 mt-8 mb-6" />

        {/* Security notice */}
        <div className="flex items-center justify-center gap-2 text-white/20">
          {/* Lock icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="text-[10px] tracking-[0.25em] uppercase">
            Restricted upload portal
          </span>
        </div>

        {/* Back link */}
        <div className="text-center mt-5">
          <Link
            to="/"
            className="text-[11px] text-white/20 hover:text-white/50 tracking-widest uppercase transition-colors duration-300"
          >
            ← Back to site
          </Link>
        </div>
      </div>

      {/* Keyframe for card entrance */}
      <style>{`
        @keyframes fadeUpLogin {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
