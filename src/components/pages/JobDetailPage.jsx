'use client';

import { useState } from 'react';
import { TYPE_COLORS } from '@/data/jobs';
import Badge from '@/components/ui/Badge';
import ApplyModal from '@/components/jobs/ApplyModal';

export default function JobDetailPage({ job, setPage, jobs }) {
  const [showApply, setShowApply] = useState(false);

  if (!job) return null;

  const related = jobs.filter(j => j.id !== job.id && j.category === job.category).slice(0, 3);
  const tc = TYPE_COLORS[job.type] || TYPE_COLORS["Full Time"];

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px" }}>
      <button 
        onClick={() => setPage("jobs")} 
        style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: 8, 
          fontSize: 13, 
          color: "#6b7280", 
          background: "none", 
          border: "none", 
          cursor: "pointer", 
          marginBottom: 24, 
          fontWeight: 600 
        }}
      >
        ← Back to Jobs
      </button>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "1fr 300px", 
        gap: 24, 
        alignItems: "flex-start" 
      }}>
        {/* Main */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Header card */}
          <div style={{ 
            background: "#fff", 
            borderRadius: 24, 
            padding: 28, 
            border: "1.5px solid #f1f5f9", 
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)" 
          }}>
            <div style={{ 
              display: "flex", 
              alignItems: "flex-start", 
              justifyContent: "space-between", 
              gap: 16, 
              marginBottom: 20 
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ 
                  width: 64, 
                  height: 64, 
                  borderRadius: 18, 
                  background: job.bgColor + "20", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  fontSize: 32, 
                  flexShrink: 0 
                }}>
                  {job.logo}
                </div>
                <div>
                  <h1 style={{ 
                    fontSize: 24, 
                    fontWeight: 900, 
                    color: "#1a1d3b", 
                    lineHeight: 1.2 
                  }}>
                    {job.title}
                  </h1>
                  <p style={{ color: "#6b7280", fontWeight: 600, marginTop: 4 }}>
                    {job.company}
                  </p>
                </div>
              </div>
              <Badge bg={tc.bg} color={tc.text}>{job.type}</Badge>
            </div>

            <div style={{ 
              display: "flex", 
              flexWrap: "wrap", 
              gap: 16, 
              fontSize: 13, 
              color: "#6b7280", 
              marginBottom: 18 
            }}>
              <span>📍 {job.location}</span>
              <span>⏱ {job.type}</span>
              {job.salary && <span>💰 {job.salary}</span>}
              {job.category && <span>🏷 {job.category}</span>}
              {job.postedAt && <span>📅 Posted {job.postedAt}</span>}
            </div>

            {(job.tags || []).length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {job.tags.map(tag => (
                  <span 
                    key={tag} 
                    style={{ 
                      fontSize: 12, 
                      fontWeight: 600, 
                      padding: "5px 14px", 
                      borderRadius: 99, 
                      background: "#eef2ff", 
                      color: "#3d4ef6" 
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Description */}
          <div style={{ 
            background: "#fff", 
            borderRadius: 24, 
            padding: 28, 
            border: "1.5px solid #f1f5f9", 
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)" 
          }}>
            <h2 style={{ 
              fontSize: 18, 
              fontWeight: 800, 
              color: "#1a1d3b", 
              marginBottom: 16 
            }}>
              Job Description
            </h2>
            <div style={{ 
              fontSize: 14, 
              color: "#4b5563", 
              lineHeight: 1.85, 
              whiteSpace: "pre-line" 
            }}>
              {job.description}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Apply card */}
          <div style={{ 
            background: "#fff", 
            borderRadius: 24, 
            padding: 24, 
            border: "1.5px solid #f1f5f9", 
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)", 
            textAlign: "center" 
          }}>
            <div style={{ 
              width: 56, 
              height: 56, 
              borderRadius: 16, 
              background: job.bgColor + "20", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              fontSize: 28, 
              margin: "0 auto 12px" 
            }}>
              {job.logo}
            </div>
            <p style={{ fontWeight: 800, color: "#1a1d3b", fontSize: 15 }}>
              {job.company}
            </p>
            <p style={{ 
              fontSize: 12, 
              color: "#9ca3af", 
              marginTop: 4, 
              marginBottom: 20 
            }}>
              {job.category}
            </p>
            <button 
              onClick={() => setShowApply(true)}
              style={{ 
                width: "100%", 
                background: "#3d4ef6", 
                color: "#fff", 
                border: "none", 
                padding: "13px", 
                borderRadius: 14, 
                fontWeight: 700, 
                fontSize: 14, 
                cursor: "pointer", 
                marginBottom: 10 
              }}
            >
              Apply Now
            </button>
            <button style={{ 
              width: "100%", 
              background: "transparent", 
              color: "#6b7280", 
              border: "none", 
              fontSize: 13, 
              cursor: "pointer" 
            }}>
              🔗 Share Job
            </button>
          </div>

          {/* Overview */}
          <div style={{ 
            background: "#fff", 
            borderRadius: 24, 
            padding: 24, 
            border: "1.5px solid #f1f5f9", 
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)" 
          }}>
            <h3 style={{ 
              fontSize: 14, 
              fontWeight: 800, 
              color: "#1a1d3b", 
              marginBottom: 14 
            }}>
              Job Overview
            </h3>
            {[
              ["Type", job.type],
              ["Location", job.location],
              ["Category", job.category],
              ["Salary", job.salary || "Not specified"],
              ["Posted", job.postedAt]
            ].map(([l, v]) => v && (
              <div 
                key={l} 
                style={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  fontSize: 13, 
                  marginBottom: 10, 
                  alignItems: "flex-start" 
                }}
              >
                <span style={{ color: "#9ca3af" }}>{l}</span>
                <span style={{ 
                  fontWeight: 700, 
                  color: "#374151", 
                  textAlign: "right", 
                  maxWidth: "55%" 
                }}>
                  {v}
                </span>
              </div>
            ))}
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div style={{ 
              background: "#fff", 
              borderRadius: 24, 
              padding: 24, 
              border: "1.5px solid #f1f5f9", 
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)" 
            }}>
              <h3 style={{ 
                fontSize: 14, 
                fontWeight: 800, 
                color: "#1a1d3b", 
                marginBottom: 14 
              }}>
                Similar Jobs
              </h3>
              {related.map(rj => (
                <div 
                  key={rj.id} 
                  style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: 10, 
                    marginBottom: 12, 
                    cursor: "pointer" 
                  }}
                >
                  <div style={{ 
                    width: 36, 
                    height: 36, 
                    borderRadius: 10, 
                    background: rj.bgColor + "20", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    fontSize: 18, 
                    flexShrink: 0 
                  }}>
                    {rj.logo}
                  </div>
                  <div>
                    <p style={{ fontSize: 12, fontWeight: 700, color: "#1a1d3b" }}>
                      {rj.title}
                    </p>
                    <p style={{ fontSize: 11, color: "#9ca3af" }}>
                      {rj.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {showApply && <ApplyModal job={job} onClose={() => setShowApply(false)} />}
    </div>
  );
}