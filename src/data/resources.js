const resources = [
  // --- TEXTBOOKS ---
  {
    id: "t1",
    title: "Introduction to Classical Mechanics",
    description: "Deep dive into Newtonian mechanics, Lagrangian formalism, and Hamiltonian dynamics.",
    category: "Textbooks",
    year: "Year 1",
    topic: "Classical Mechanics",
    type: "Book",
    fileUrl: "#",
    createdAt: "2026-05-02"
  },
  {
    id: "t2",
    title: "Principles of Electromagnetism",
    description: "Comprehensive coverage of Maxwell's equations, wave propagation, and radiation.",
    category: "Textbooks",
    year: "Year 2",
    topic: "Electromagnetism",
    type: "Book",
    fileUrl: "#",
    createdAt: "2026-05-02"
  },
  {
    id: "t3",
    title: "Modern Quantum Mechanics",
    description: "Fundamental principles, wave-particle duality, and the Schrodinger equation.",
    category: "Textbooks",
    year: "Year 3",
    topic: "Quantum Mechanics",
    type: "Book",
    fileUrl: "#",
    createdAt: "2026-05-02"
  },
  {
    id: "t4",
    title: "Thermodynamics & Statistical Physics",
    description: "Laws of thermodynamics, entropy, and statistical distributions.",
    category: "Textbooks",
    year: "Year 2",
    topic: "Thermodynamics",
    type: "Book",
    fileUrl: "#",
    createdAt: "2026-05-02"
  },

  // --- NOTES ---
  {
    id: "n1",
    title: "Multivariable Calculus Summary",
    description: "Vector fields, line integrals, and Green's theorem simplified.",
    category: "Notes",
    year: "Year 1",
    topic: "Calculus",
    type: "PDF",
    fileUrl: "#",
    createdAt: "2026-05-02"
  },
  {
    id: "n2",
    title: "Linear Algebra Fundamentals",
    description: "Matrices, vector spaces, and eigenvalues for physics students.",
    category: "Notes",
    year: "Year 1",
    topic: "Algebra",
    type: "PDF",
    fileUrl: "#",
    createdAt: "2026-05-02"
  },
  {
    id: "n3",
    title: "Optics & Light Properties",
    description: "Interference, diffraction, and the wave nature of light.",
    category: "Notes",
    year: "Year 2",
    topic: "Optics",
    type: "PDF",
    fileUrl: "#",
    createdAt: "2026-05-02"
  },
  {
    id: "n4",
    title: "Differential Equations in Physics",
    description: "Solving wave equations and harmonic oscillators.",
    category: "Notes",
    year: "Year 2",
    topic: "Differential Equations",
    type: "PDF",
    fileUrl: "#",
    createdAt: "2026-05-02"
  },

  // --- PRACTICE PROBLEMS ---
  {
    id: "p1",
    title: "Classical Dynamics Challenge",
    description: "Complex problems on orbital mechanics and rigid body rotation.",
    category: "Practice Problems",
    year: "Year 1",
    topic: "Classical Mechanics",
    type: "PDF",
    fileUrl: "#",
    createdAt: "2026-05-02"
  },
  {
    id: "p2",
    title: "Electromagnetic Wave Problems",
    description: "Calculations on reflection, refraction, and waveguides.",
    category: "Practice Problems",
    year: "Year 2",
    topic: "Electromagnetism",
    type: "PDF",
    fileUrl: "#",
    createdAt: "2026-05-02"
  },
  {
    id: "p3",
    title: "Quantum Operator Exercises",
    description: "Practice with commutator relations and Hilbert spaces.",
    category: "Practice Problems",
    year: "Year 3",
    topic: "Quantum Mechanics",
    type: "PDF",
    fileUrl: "#",
    createdAt: "2026-05-02"
  },
  {
    id: "p4",
    title: "Statistical Mechanics Quiz",
    description: "Problems on partition functions and ensemble theory.",
    category: "Practice Problems",
    year: "Year 2",
    topic: "Thermodynamics",
    type: "PDF",
    fileUrl: "#",
    createdAt: "2026-05-02"
  },

  // --- LECTURES ---
  {
    id: "l1",
    title: "Intro to Solid-State Physics",
    description: "Lectures on crystal structures and X-ray diffraction.",
    category: "Lectures",
    year: "Year 3",
    topic: "Solid-State Physics",
    type: "Video",
    fileUrl: "#",
    createdAt: "2026-05-02"
  },
  {
    id: "l2",
    title: "General Relativity Seminars",
    description: "The mathematical foundations of curved spacetime.",
    category: "Lectures",
    year: "Year 4",
    topic: "Classical Mechanics",
    type: "Video",
    fileUrl: "#",
    createdAt: "2026-05-02"
  },
  {
    id: "l3",
    title: "Non-Euclidean Geometry",
    description: "Exploring spherical and hyperbolic geometry for physicists.",
    category: "Lectures",
    year: "Year 3",
    topic: "Geometry",
    type: "Video",
    fileUrl: "#",
    createdAt: "2026-05-02"
  },
  {
    id: "l4",
    title: "Quantum Field Theory Intro",
    description: "Canonical quantization and the Klein-Gordon field.",
    category: "Lectures",
    year: "Year 4",
    topic: "Quantum Mechanics",
    type: "Video",
    fileUrl: "#",
    createdAt: "2026-05-02"
  },

  // --- RESEARCH PAPERS ---
  {
    id: "r1",
    title: "Topological Phase Transitions",
    description: "Recent breakthroughs in topological insulators and superconductors.",
    category: "Research Papers",
    year: "Year 3",
    topic: "Solid-State Physics",
    type: "Paper",
    fileUrl: "#",
    createdAt: "2026-05-02"
  },
  {
    id: "r2",
    title: "Black Hole Thermodynamics",
    description: "Exploring the link between gravity and entropy.",
    category: "Research Papers",
    year: "Year 4",
    topic: "Thermodynamics",
    type: "Paper",
    fileUrl: "#",
    createdAt: "2026-05-02"
  },
  {
    id: "r3",
    title: "Quantum Computing Algorithms",
    description: "Scalability of Shor's algorithm in noisy environments.",
    category: "Research Papers",
    year: "Year 4",
    topic: "Quantum Mechanics",
    type: "Paper",
    fileUrl: "#",
    createdAt: "2026-05-02"
  },
  {
    id: "r4",
    title: "Photonics in Fiber Optics",
    description: "Advanced signal processing using non-linear optics.",
    category: "Research Papers",
    year: "Year 3",
    topic: "Optics",
    type: "Paper",
    fileUrl: "#",
    createdAt: "2026-05-02"
  }
];

export default resources;
