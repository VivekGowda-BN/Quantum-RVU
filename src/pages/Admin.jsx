import { useState } from 'react';
import { Link } from 'react-router-dom';
import StarBackground from '../components/StarBackground';
import logo from '../assets/logo.png';

const CATEGORIES = ['Textbooks', 'Notes', 'Practice Problems'];
const YEARS = ['Year 1', 'Year 2', 'Year 3', 'Year 4'];
const TOPICS = [
  'Classical Mechanics', 'Electromagnetism', 'Quantum Mechanics',
  'Thermodynamics', 'Optics', 'Solid-State Physics',
  'Calculus', 'Algebra', 'Differential Equations', 'Geometry',
];

/* ─── Reusable field label ─── */
function FieldLabel({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="text-[11px] font-semibold text-white/35 tracking-[0.2em] uppercase">
      {children}
    </label>
  );
}

/* ─── Styled text/file input ─── */
function AdminInput({ id, type = 'text', placeholder, value, onChange, accept }) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      accept={accept}
      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 outline-none transition-all duration-300"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
      onFocus={(e) => {
        e.target.style.border = '1px solid rgba(255,255,255,0.25)';
        e.target.style.boxShadow = '0 0 0 3px rgba(255,255,255,0.03)';
      }}
      onBlur={(e) => {
        e.target.style.border = '1px solid rgba(255,255,255,0.08)';
        e.target.style.boxShadow = 'none';
      }}
    />
  );
}

/* ─── Styled select ─── */
function AdminSelect({ id, value, onChange, options, placeholder }) {
  return (
    <select
      id={id}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 appearance-none cursor-pointer"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        color: value ? 'white' : 'rgba(255,255,255,0.25)',
      }}
      onFocus={(e) => {
        e.target.style.border = '1px solid rgba(255,255,255,0.25)';
        e.target.style.boxShadow = '0 0 0 3px rgba(255,255,255,0.03)';
      }}
      onBlur={(e) => {
        e.target.style.border = '1px solid rgba(255,255,255,0.08)';
        e.target.style.boxShadow = 'none';
      }}
    >
      <option value="" disabled style={{ background: '#0a0a0a' }}>{placeholder}</option>
      {options.map((o) => (
        <option key={o} value={o} style={{ background: '#0a0a0a', color: 'white' }}>{o}</option>
      ))}
    </select>
  );
}

/* ─── Dashboard stat card ─── */
function DashCard({ icon, title, subtitle, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex-1 min-w-[160px] flex flex-col gap-3 p-5 rounded-2xl text-left transition-all duration-300 group"
      style={{
        background: active
          ? 'rgba(255,255,255,0.08)'
          : 'rgba(255,255,255,0.03)',
        border: active
          ? '1px solid rgba(255,255,255,0.18)'
          : '1px solid rgba(255,255,255,0.07)',
        boxShadow: active ? '0 8px 32px rgba(255,255,255,0.06)' : 'none',
      }}
      onMouseEnter={(e) => {
        if (!active) {
          e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
          e.currentTarget.style.transform = 'translateY(0)';
        }
      }}
    >
      <span className="text-2xl">{icon}</span>
      <div>
        <p className={`text-sm font-semibold ${active ? 'text-white' : 'text-white/60'}`}>{title}</p>
        <p className="text-[11px] text-white/30 mt-0.5">{subtitle}</p>
      </div>
      {active && (
        <div className="h-[2px] w-8 rounded-full bg-white/40 mt-1" />
      )}
    </button>
  );
}

/* ═══════════════════════════════════════════ */
export default function Admin() {
  const [activeCard, setActiveCard] = useState('upload');

  // Form state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [year, setYear] = useState('');
  const [topic, setTopic] = useState('');
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    e.preventDefault();
    // Upload logic will be wired later
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col px-4 py-10 relative overflow-hidden">
      <StarBackground density={0.6} />

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(255,255,255,0.03) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto w-full" style={{ animation: 'fadeUpAdmin 0.6s ease-out forwards' }}>

        {/* ── Top bar ── */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <Link to="/" className="opacity-60 hover:opacity-100 transition-opacity duration-300">
              <img src={logo} alt="Quantum" className="h-9 w-auto object-contain" style={{ filter: 'brightness(1.1)' }} />
            </Link>
            <div className="h-6 w-px bg-white/10" />
            <div>
              <h1 className="text-lg font-bold tracking-tight text-white leading-none">
                Faculty Resource Portal
              </h1>
              <p className="text-[11px] text-white/30 tracking-widest uppercase mt-0.5">
                Manage quantum resources
              </p>
            </div>
          </div>

          {/* Sign out placeholder */}
          <button
            id="admin-signout"
            className="text-[11px] text-white/25 hover:text-white/60 tracking-widest uppercase transition-colors duration-300 flex items-center gap-1.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Sign Out
          </button>
        </div>

        {/* ── Divider ── */}
        <div className="h-px w-full bg-white/6 mb-10" />

        {/* ── Dashboard cards ── */}
        <div className="flex flex-wrap gap-4 mb-10">
          <DashCard
            icon="📤"
            title="Upload Resource"
            subtitle="Add new materials"
            active={activeCard === 'upload'}
            onClick={() => setActiveCard('upload')}
          />
          <DashCard
            icon="📂"
            title="Manage Resources"
            subtitle="Edit or remove files"
            active={activeCard === 'manage'}
            onClick={() => setActiveCard('manage')}
          />
          <DashCard
            icon="🕐"
            title="Recent Uploads"
            subtitle="View activity log"
            active={activeCard === 'recent'}
            onClick={() => setActiveCard('recent')}
          />
        </div>

        {/* ── Upload form panel ── */}
        {activeCard === 'upload' && (
          <div
            className="rounded-2xl p-8"
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(12px)',
              animation: 'fadeUpAdmin 0.4s ease-out forwards',
            }}
          >
            {/* Panel header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-8 w-8 rounded-xl flex items-center justify-center text-base"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}>
                📤
              </div>
              <div>
                <h2 className="text-base font-semibold text-white">Upload Resource</h2>
                <p className="text-[11px] text-white/30">Fill in the details and attach a file</p>
              </div>
            </div>

            <form onSubmit={handleUpload} className="flex flex-col gap-6">
              {/* Title */}
              <div className="flex flex-col gap-2">
                <FieldLabel htmlFor="admin-title">Resource Title</FieldLabel>
                <AdminInput
                  id="admin-title"
                  placeholder="e.g. Introduction to Quantum Mechanics"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              {/* Description */}
              <div className="flex flex-col gap-2">
                <FieldLabel htmlFor="admin-desc">Description</FieldLabel>
                <textarea
                  id="admin-desc"
                  rows={3}
                  placeholder="Brief description of the resource..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 outline-none transition-all duration-300 resize-none"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onFocus={(e) => {
                    e.target.style.border = '1px solid rgba(255,255,255,0.25)';
                    e.target.style.boxShadow = '0 0 0 3px rgba(255,255,255,0.03)';
                  }}
                  onBlur={(e) => {
                    e.target.style.border = '1px solid rgba(255,255,255,0.08)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Row: Category + Year */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <FieldLabel htmlFor="admin-category">Category</FieldLabel>
                  <AdminSelect
                    id="admin-category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    options={CATEGORIES}
                    placeholder="Select category"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <FieldLabel htmlFor="admin-year">Year</FieldLabel>
                  <AdminSelect
                    id="admin-year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    options={YEARS}
                    placeholder="Select year"
                  />
                </div>
              </div>

              {/* Topic */}
              <div className="flex flex-col gap-2">
                <FieldLabel htmlFor="admin-topic">Topic</FieldLabel>
                <AdminSelect
                  id="admin-topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  options={TOPICS}
                  placeholder="Select topic"
                />
              </div>

              {/* File upload */}
              <div className="flex flex-col gap-2">
                <FieldLabel htmlFor="admin-file">File</FieldLabel>
                <label
                  htmlFor="admin-file"
                  className="flex flex-col items-center justify-center gap-3 w-full py-8 rounded-xl cursor-pointer transition-all duration-300 group"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px dashed rgba(255,255,255,0.12)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                    e.currentTarget.style.border = '1px dashed rgba(255,255,255,0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                    e.currentTarget.style.border = '1px dashed rgba(255,255,255,0.12)';
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white/20 group-hover:text-white/40 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <div className="text-center">
                    <p className="text-sm text-white/40">
                      {file ? (
                        <span className="text-white/70">{file.name}</span>
                      ) : (
                        <>Drop file here or <span className="text-white/60 underline underline-offset-2">browse</span></>
                      )}
                    </p>
                    <p className="text-[11px] text-white/20 mt-1">PDF, DOCX, PPTX — max 50MB</p>
                  </div>
                  <input
                    id="admin-file"
                    type="file"
                    accept=".pdf,.doc,.docx,.ppt,.pptx"
                    className="hidden"
                    onChange={(e) => setFile(e.target.files[0] || null)}
                  />
                </label>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/6" />

              {/* Submit */}
              <button
                id="admin-upload-submit"
                type="submit"
                className="w-full py-3.5 rounded-xl text-sm font-semibold tracking-widest uppercase transition-all duration-300"
                style={{ background: 'white', color: 'black', letterSpacing: '0.12em', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.88)';
                  e.target.style.transform = 'translateY(-1px)';
                  e.target.style.boxShadow = '0 8px 28px rgba(255,255,255,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'white';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Upload Resource
              </button>
            </form>
          </div>
        )}

        {/* ── Manage Resources placeholder ── */}
        {activeCard === 'manage' && (
          <div
            className="rounded-2xl p-12 flex flex-col items-center justify-center gap-4 text-center"
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(12px)',
              animation: 'fadeUpAdmin 0.4s ease-out forwards',
            }}
          >
            <span className="text-4xl opacity-40">📂</span>
            <p className="text-white/30 text-sm tracking-wide">Resource management coming soon</p>
          </div>
        )}

        {/* ── Recent Uploads placeholder ── */}
        {activeCard === 'recent' && (
          <div
            className="rounded-2xl p-12 flex flex-col items-center justify-center gap-4 text-center"
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(12px)',
              animation: 'fadeUpAdmin 0.4s ease-out forwards',
            }}
          >
            <span className="text-4xl opacity-40">🕐</span>
            <p className="text-white/30 text-sm tracking-wide">No recent uploads yet</p>
          </div>
        )}

        {/* Footer */}
        <p className="text-center text-[10px] text-white/15 tracking-[0.25em] uppercase mt-12">
          🔒 Restricted portal · Quantum RVU
        </p>
      </div>

      <style>{`
        @keyframes fadeUpAdmin {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
