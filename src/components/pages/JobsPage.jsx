'use client';

import { useState, useMemo } from 'react';
import { CATEGORIES, LOCATIONS, JOB_TYPES, TYPE_COLORS } from '@/data/jobs';
import Badge from '@/components/ui/Badge';

function JobCard({ job, onClick }) {
  const tc = TYPE_COLORS[job.type] || TYPE_COLORS["Full Time"];
  
  return (
    <div 
      onClick={onClick} 
      style={{ 
        background: "#fff", 
        borderRadius: 20, 
        padding: 20, 
        border: "1.5px solid #f1f5f9", 
        cursor: "pointer", 
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)", 
        transition: "all 0.2s", 
        display: "flex", 
        flexDirection: "column" 
      }}
      onMouseEnter={e => { 
        e.currentTarget.style.transform = "translateY(-3px)"; 
        e.currentTarget.style.boxShadow = "0 12px 32px rgba(61,78,246,0.10)"; 
        e.currentTarget.style.borderColor = "#c7d2fe"; 
      }}
      onMouseLeave={e => { 
        e.currentTarget.style.transform = "translateY(0)"; 
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)"; 
        e.currentTarget.style.borderColor = "#f1f5f9"; 
      }}
    >
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "flex-start", 
        marginBottom: 14 
      }}>
        <Badge bg={tc.bg} color={tc.text}>{job.type}</Badge>
        <span style={{ fontSize: 16, cursor: "pointer", color: "#d1d5db" }}>🔖</span>
      </div>
      
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
        <div style={{ 
          width: 44, 
          height: 44, 
          borderRadius: 12, 
          background: job.bgColor + "20", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          fontSize: 22, 
          flexShrink: 0 
        }}>
          {job.logo}
        </div>
        <div style={{ minWidth: 0 }}>
          <div style={{ 
            fontWeight: 800, 
            fontSize: 14, 
            color: "#1a1d3b", 
            lineHeight: 1.3 
          }}>
            {job.title}
          </div>
          <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 2 }}>
            {job.company}
          </div>
        </div>
      </div>
      
      <div style={{ 
        display: "flex", 
        gap: 12, 
        fontSize: 11, 
        color: "#9ca3af", 
        marginBottom: 12 
      }}>
        <span>📍 {job.location}</span>
      </div>
      
      {(job.tags || []).length > 0 && (
        <div style={{ 
          display: "flex", 
          flexWrap: "wrap", 
          gap: 6, 
          paddingTop: 12, 
          borderTop: "1.5px solid #f8f9ff", 
          marginTop: "auto" 
        }}>
          {job.tags.slice(0, 3).map(tag => (
            <span 
              key={tag} 
              style={{ 
                fontSize: 10, 
                fontWeight: 600, 
                padding: "3px 8px", 
                borderRadius: 99, 
                background: "#f8f9ff", 
                color: "#6b7280", 
                border: "1px solid #f1f5f9" 
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      
      {job.salary && (
        <div style={{ 
          fontSize: 13, 
          fontWeight: 800, 
          color: "#3d4ef6", 
          marginTop: 10 
        }}>
          {job.salary}
        </div>
      )}
    </div>
  );
}

export default function JobsPage({ jobs, setSelectedJob, setPage }) {
  const [filters, setFilters] = useState({ 
    search: "", 
    category: "", 
    location: "", 
    type: "" 
  });

  const filtered = useMemo(() => jobs.filter(j => {
    const q = filters.search.toLowerCase();
    if (q && !j.title.toLowerCase().includes(q) && 
        !j.company.toLowerCase().includes(q) && 
        !(j.tags || []).some(t => t.toLowerCase().includes(q))) return false;
    if (filters.category && j.category !== filters.category) return false;
    if (filters.location && j.location !== filters.location) return false;
    if (filters.type && j.type !== filters.type) return false;
    return true;
  }), [jobs, filters]);

  const set = (k, v) => setFilters(f => ({ ...f, [k]: v }));
  const reset = () => setFilters({ search: "", category: "", location: "", type: "" });
  const hasActive = Object.values(filters).some(Boolean);

  const inputStyle = (err) => ({
    width: "100%",
    padding: "11px 14px",
    borderRadius: 12,
    border: `1.5px solid ${err ? "#fca5a5" : "#e5e7eb"}`,
    fontSize: 13,
    outline: "none",
    boxSizing: "border-box",
    background: err ? "#fef2f2" : "#fff",
    color: "#1f2937"
  });

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px" }}>
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 28, fontWeight: 900, color: "#1a1d3b" }}>
          Find Your Dream Job
        </h1>
        <p style={{ color: "#9ca3af", fontSize: 14, marginTop: 4 }}>
          {filtered.length} job{filtered.length !== 1 ? "s" : ""} available
        </p>
        {hasActive && (
          <div style={{ 
            display: "flex", 
            gap: 8, 
            marginTop: 12, 
            flexWrap: "wrap", 
            alignItems: "center" 
          }}>
            {Object.entries(filters).filter(([, v]) => v).map(([k, v]) => (
              <span 
                key={k} 
                style={{ 
                  background: "#eef2ff", 
                  color: "#3d4ef6", 
                  fontSize: 12, 
                  fontWeight: 600, 
                  padding: "5px 12px", 
                  borderRadius: 99, 
                  display: "flex", 
                  alignItems: "center", 
                  gap: 6 
                }}
              >
                {v}
                <button 
                  onClick={() => set(k, "")} 
                  style={{ 
                    background: "none", 
                    border: "none", 
                    cursor: "pointer", 
                    color: "#3d4ef6", 
                    fontWeight: 900, 
                    fontSize: 14, 
                    lineHeight: 1, 
                    padding: 0 
                  }}
                >
                  ×
                </button>
              </span>
            ))}
            <button 
              onClick={reset} 
              style={{ 
                fontSize: 12, 
                color: "#9ca3af", 
                background: "none", 
                border: "none", 
                cursor: "pointer" 
              }}
            >
              Clear all
            </button>
          </div>
        )}
      </div>

      <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
        {/* Filters sidebar */}
        <aside style={{ 
          width: 240, 
          flexShrink: 0, 
          background: "#fff", 
          borderRadius: 20, 
          border: "1.5px solid #f1f5f9", 
          padding: 20, 
          position: "sticky", 
          top: 80, 
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)" 
        }}>
          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            marginBottom: 16 
          }}>
            <span style={{ fontWeight: 800, color: "#1a1d3b", fontSize: 14 }}>
              Filters
            </span>
            {hasActive && (
              <button 
                onClick={reset} 
                style={{ 
                  fontSize: 11, 
                  color: "#3d4ef6", 
                  background: "none", 
                  border: "none", 
                  cursor: "pointer" 
                }}
              >
                Clear all
              </button>
            )}
          </div>

          {/* Search */}
          <div style={{ position: "relative", marginBottom: 14 }}>
            <span style={{ 
              position: "absolute", 
              left: 10, 
              top: "50%", 
              transform: "translateY(-50%)", 
              fontSize: 14 
            }}>
              🔍
            </span>
            <input 
              value={filters.search} 
              onChange={e => set("search", e.target.value)} 
              placeholder="Search jobs..."
              style={{ ...inputStyle(false), paddingLeft: 32, fontSize: 13 }} 
            />
          </div>

          {/* Location */}
          <div style={{ marginBottom: 14 }}>
            <div style={{ 
              fontSize: 10, 
              fontWeight: 800, 
              color: "#9ca3af", 
              letterSpacing: "0.08em", 
              textTransform: "uppercase", 
              marginBottom: 8 
            }}>
              Location
            </div>
            <select 
              value={filters.location} 
              onChange={e => set("location", e.target.value)} 
              style={{ ...inputStyle(false), fontSize: 13, cursor: "pointer" }}
            >
              <option value="">All Locations</option>
              {LOCATIONS.map(l => <option key={l}>{l}</option>)}
            </select>
          </div>

          {/* Category */}
          <div style={{ marginBottom: 14 }}>
            <div style={{ 
              fontSize: 10, 
              fontWeight: 800, 
              color: "#9ca3af", 
              letterSpacing: "0.08em", 
              textTransform: "uppercase", 
              marginBottom: 8 
            }}>
              Category
            </div>
            {CATEGORIES.map(cat => (
              <button 
                key={cat} 
                onClick={() => set("category", filters.category === cat ? "" : cat)}
                style={{ 
                  display: "block", 
                  width: "100%", 
                  textAlign: "left", 
                  padding: "8px 12px", 
                  borderRadius: 10, 
                  border: "none", 
                  cursor: "pointer", 
                  fontSize: 13, 
                  fontWeight: filters.category === cat ? 700 : 400,
                  background: filters.category === cat ? "#eef2ff" : "transparent", 
                  color: filters.category === cat ? "#3d4ef6" : "#6b7280", 
                  marginBottom: 2, 
                  transition: "all 0.1s" 
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Type */}
          <div>
            <div style={{ 
              fontSize: 10, 
              fontWeight: 800, 
              color: "#9ca3af", 
              letterSpacing: "0.08em", 
              textTransform: "uppercase", 
              marginBottom: 8 
            }}>
              Job Type
            </div>
            {JOB_TYPES.map(t => (
              <button 
                key={t} 
                onClick={() => set("type", filters.type === t ? "" : t)}
                style={{ 
                  display: "block", 
                  width: "100%", 
                  textAlign: "left", 
                  padding: "8px 12px", 
                  borderRadius: 10, 
                  border: "none", 
                  cursor: "pointer", 
                  fontSize: 13, 
                  fontWeight: filters.type === t ? 700 : 400,
                  background: filters.type === t ? "#eef2ff" : "transparent", 
                  color: filters.type === t ? "#3d4ef6" : "#6b7280", 
                  marginBottom: 2, 
                  transition: "all 0.1s" 
                }}
              >
                {t}
              </button>
            ))}
          </div>

          <div style={{ 
            borderTop: "1.5px solid #f1f5f9", 
            marginTop: 16, 
            paddingTop: 12, 
            fontSize: 11, 
            color: "#9ca3af", 
            textAlign: "center" 
          }}>
            {filtered.length} result{filtered.length !== 1 ? "s" : ""}
          </div>
        </aside>

        {/* Job grid */}
        <main style={{ flex: 1, minWidth: 0 }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 24px" }}>
              <div style={{ fontSize: 48 }}>🔍</div>
              <h3 style={{ 
                fontSize: 18, 
                fontWeight: 800, 
                color: "#1a1d3b", 
                marginTop: 12 
              }}>
                No jobs found
              </h3>
              <p style={{ color: "#9ca3af", fontSize: 14, marginTop: 6 }}>
                Try adjusting your filters.
              </p>
            </div>
          ) : (
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", 
              gap: 16 
            }}>
              {filtered.map(job => (
                <JobCard 
                  key={job.id} 
                  job={job} 
                  onClick={() => { 
                    setSelectedJob(job); 
                    setPage("detail"); 
                  }} 
                />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}