'use client';

export default function AppNavbar({ page, setPage }) {
  const navLinks = [
    { id: "home", label: "Home" },
    { id: "jobs", label: "Find Jobs" },
    { id: "admin", label: "Admin" }
  ];

  return (
    <header style={{ 
      background: "#fff", 
      borderBottom: "1.5px solid #f1f5f9", 
      position: "sticky", 
      top: 0, 
      zIndex: 100, 
      boxShadow: "0 1px 8px rgba(0,0,0,0.04)" 
    }}>
      <div style={{ 
        maxWidth: 1200, 
        margin: "0 auto", 
        padding: "0 24px", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "space-between", 
        height: 60 
      }}>
        <div 
          style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: 8, 
            cursor: "pointer" 
          }} 
          onClick={() => setPage("home")}
        >
          <div style={{ 
            width: 32, 
            height: 32, 
            background: "#3d4ef6", 
            borderRadius: "50%", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            color: "#fff", 
            fontWeight: 900, 
            fontSize: 14 
          }}>
            Q
          </div>
          <span style={{ 
            fontWeight: 900, 
            fontSize: 17, 
            color: "#1a1d3b", 
            letterSpacing: "-0.3px" 
          }}>
            QuickHire
          </span>
        </div>

        <nav style={{ display: "flex", gap: 4 }}>
          {navLinks.map(({ id, label }) => (
            <button 
              key={id} 
              onClick={() => setPage(id)}
              style={{ 
                padding: "7px 16px", 
                borderRadius: 10, 
                border: "none", 
                cursor: "pointer", 
                fontWeight: 600, 
                fontSize: 13,
                background: page === id ? "#eef2ff" : "transparent",
                color: page === id ? "#3d4ef6" : "#6b7280",
                transition: "all 0.15s" 
              }}
            >
              {label}
            </button>
          ))}
        </nav>

        <button 
          onClick={() => setPage("admin")}
          style={{ 
            background: "#3d4ef6", 
            color: "#fff", 
            border: "none", 
            padding: "9px 20px", 
            borderRadius: 12, 
            fontWeight: 700, 
            fontSize: 13, 
            cursor: "pointer" 
          }}
        >
          Post a Job
        </button>
      </div>
    </header>
  );
}