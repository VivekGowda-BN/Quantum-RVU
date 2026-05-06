import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

export default function ProtectedRoute({ children }) {
  const [user, setUser] = useState(undefined); // undefined = still checking

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser ?? null);
    });
    return () => unsubscribe();
  }, []);

  // Still verifying — show loading screen
  if (user === undefined) {
    return (
      <div
        className="min-h-screen bg-black flex flex-col items-center justify-center gap-4"
        style={{ animation: 'fadeInVerify 0.4s ease-out forwards' }}
      >
        {/* Pulse ring */}
        <div className="relative flex items-center justify-center">
          <div
            className="h-8 w-8 rounded-full"
            style={{
              border: '1px solid rgba(255,255,255,0.15)',
              animation: 'pingVerify 1.2s cubic-bezier(0,0,0.2,1) infinite',
            }}
          />
          <div
            className="absolute h-3 w-3 rounded-full"
            style={{ background: 'rgba(255,255,255,0.3)' }}
          />
        </div>

        <p
          className="text-[11px] text-white/30 tracking-[0.3em] uppercase"
          style={{ letterSpacing: '0.3em' }}
        >
          Verifying access...
        </p>

        <style>{`
          @keyframes fadeInVerify {
            from { opacity: 0; }
            to   { opacity: 1; }
          }
          @keyframes pingVerify {
            0%   { transform: scale(1);   opacity: 0.6; }
            80%  { transform: scale(2.2); opacity: 0; }
            100% { transform: scale(2.2); opacity: 0; }
          }
        `}</style>
      </div>
    );
  }

  // Not authenticated → redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Authenticated → render children
  return children;
}
