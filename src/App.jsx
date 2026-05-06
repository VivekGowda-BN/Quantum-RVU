import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Resources from './pages/Resources';
import Updates from './pages/Updates';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Admin from './pages/Admin';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Standalone full-screen routes — no Navbar / footer */}
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

        {/* Main site shell with Navbar + footer */}
        <Route
          path="/*"
          element={
            <div className="min-h-screen bg-transparent text-white flex flex-col font-sans relative">
              <Navbar />
              <main className="flex-grow z-0">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="/updates" element={<Updates />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
              <footer className="border-t border-gray-800 py-8 px-6">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                  <p className="text-sm text-gray-600">
                    &copy; {new Date().getFullYear()} Quantum Program. All rights reserved.
                  </p>
                  <Link
                    to="/login"
                    className="text-[10px] tracking-[0.25em] uppercase transition-all duration-300"
                    style={{ color: 'rgba(255,255,255,0.15)', textDecoration: 'none' }}
                    onMouseEnter={(e) => {
                      e.target.style.color = 'rgba(255,255,255,0.45)';
                      e.target.style.textDecoration = 'underline';
                      e.target.style.textUnderlineOffset = '3px';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'rgba(255,255,255,0.15)';
                      e.target.style.textDecoration = 'none';
                    }}
                  >
                    Faculty Access
                  </Link>
                </div>
              </footer>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
