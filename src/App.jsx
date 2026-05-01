import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Resources from './pages/Resources';
import Updates from './pages/Updates';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
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
        <footer className="border-t border-gray-800 py-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Quantum Program. All rights reserved.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
