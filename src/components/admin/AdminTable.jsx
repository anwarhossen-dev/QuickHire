'use client';

import { useState } from 'react';
import { TYPE_COLORS } from '@/data/jobs';
import Badge from '@/components/ui/Badge';
import Btn from '@/components/ui/Button';

export default function AdminTable({ jobs, deleteJob }) {
  const [confirmId, setConfirmId] = useState(null);

  return (
    <>
      {confirmId && (
        <div style={{ 
          position: "fixed", 
          inset: 0, 
          zIndex: 200, 
          background: "rgba(0,0,0,0.4)", 
          backdropFilter: "blur(4px)", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          padding: 16 
        }}>
          <div style={{ 
            background: "#fff", 
            borderRadius: 24, 
            padding: 32, 
            maxWidth: 360, 
            width: "100%", 
            textAlign: "center", 
            boxShadow: "0 24px 64px rgba(0,0,0,0.15)" 
          }}>
            <div style={{ 
              width: 52, 
              height: 52, 
              background: "#fef2f2", 
              borderRadius: "50%", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              margin: "0 auto 16px", 
              fontSize: 24 
            }}>
              ⚠️
            </div>
            <h3 style={{ fontWeight: 800, color: "#1a1d3b", marginBottom: 8 }}>
              Delete Job?
            </h3>
            <p style={{ fontSize: 14, color: "#6b7280", marginBottom: 24 }}>
              This action cannot be undone.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              <Btn variant="secondary" onClick={() => setConfirmId(null)} style={{ flex: 1 }}>
                Cancel
              </Btn>
              <button 
                onClick={() => { 
                  deleteJob(confirmId); 
                  setConfirmId(null); 
                }}
                style={{ 
                  flex: 1, 
                  background: "#ef4444", 
                  color: "#fff", 
                  border: "none", 
                  padding: "11px", 
                  borderRadius: 12, 
                  fontWeight: 700, 
                  fontSize: 13, 
                  cursor: "pointer" 
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <div style={{ 
        background: "#fff", 
        borderRadius: 24, 
        border: "1.5px solid #f1f5f9", 
        overflow: "hidden", 
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)" 
      }}>
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "space-between", 
          padding: "18px 24px", 
          borderBottom: "1.5px solid #f8f9ff" 
        }}>
          <span style={{ fontWeight: 800, color: "#1a1d3b" }}>
            All Job Listings
          </span>
          <span style={{ fontSize: 13, color: "#9ca3af" }}>
            {jobs.length} total
          </span>
        </div>

        {jobs.length === 0 ? (
          <div style={{ padding: 64, textAlign: "center" }}>
            <div style={{ fontSize: 40 }}>📋</div>
            <p style={{ color: "#9ca3af", marginTop: 12 }}>
              No jobs posted yet.
            </p>
          </div>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#f8f9ff" }}>
                {["Job", "Category", "Location", "Type", "Posted", "Action"].map(h => (
                  <th 
                    key={h} 
                    style={{ 
                      textAlign: h === "Action" ? "right" : "left", 
                      padding: "10px 20px", 
                      fontSize: 10, 
                      fontWeight: 800, 
                      color: "#9ca3af", 
                      letterSpacing: "0.08em", 
                      textTransform: "uppercase" 
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, i) => {
                const tc = TYPE_COLORS[job.type] || TYPE_COLORS["Full Time"];
                return (
                  <tr 
                    key={job.id} 
                    style={{ 
                      borderTop: "1px solid #f8f9ff", 
                      background: i % 2 === 0 ? "#fff" : "#fafbff" 
                    }}
                  >
                    <td style={{ padding: "14px 20px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ 
                          width: 36, 
                          height: 36, 
                          borderRadius: 10, 
                          background: job.bgColor + "20", 
                          display: "flex", 
                          alignItems: "center", 
                          justifyContent: "center", 
                          fontSize: 18, 
                          flexShrink: 0 
                        }}>
                          {job.logo}
                        </div>
                        <div>
                          <p style={{ fontWeight: 700, fontSize: 13, color: "#1a1d3b" }}>
                            {job.title}
                          </p>
                          <p style={{ fontSize: 11, color: "#9ca3af" }}>
                            {job.company}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: "14px 20px", fontSize: 13, color: "#6b7280" }}>
                      {job.category}
                    </td>
                    <td style={{ padding: "14px 20px", fontSize: 12, color: "#9ca3af" }}>
                      📍 {job.location}
                    </td>
                    <td style={{ padding: "14px 20px" }}>
                      <Badge bg={tc.bg} color={tc.text}>{job.type}</Badge>
                    </td>
                    <td style={{ padding: "14px 20px", fontSize: 12, color: "#9ca3af" }}>
                      {job.postedAt}
                    </td>
                    <td style={{ padding: "14px 20px", textAlign: "right" }}>
                      <button 
                        onClick={() => setConfirmId(job.id)} 
                        style={{ 
                          background: "#fef2f2", 
                          color: "#ef4444", 
                          border: "1.5px solid #fecaca", 
                          padding: "6px 14px", 
                          borderRadius: 10, 
                          fontSize: 12, 
                          fontWeight: 700, 
                          cursor: "pointer" 
                        }}
                      >
                        🗑 Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}