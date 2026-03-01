'use client';

import { useState } from 'react';
import { SEED_JOBS, nextId as initialNextId } from '@/data/jobs';
import AppNavbar from '@/components/common/AppNavbar';
import HomePage from '@/components/pages/HomePage';
import JobsPage from '@/components/pages/JobsPage';
import JobDetailPage from '@/components/pages/JobDetailPage';
import AdminPage from '@/components/pages/AdminPage';

export default function App() {
  const [page, setPage] = useState("home");
  const [jobs, setJobs] = useState(SEED_JOBS);
  const [selectedJob, setSelectedJob] = useState(null);
  const [nextId, setNextId] = useState(initialNextId);

  const addJob = (job) => {
    const newJob = { 
      ...job, 
      id: String(nextId + 1), 
      postedAt: new Date().toISOString().split("T")[0] 
    };
    setJobs(prev => [newJob, ...prev]);
    setNextId(prev => prev + 1);
  };

  const deleteJob = (id) => setJobs(prev => prev.filter(j => j.id !== id));

  const navigate = (p) => { 
    setPage(p); 
    window.scrollTo(0, 0); 
  };

  return (
    <div style={{ 
      minHeight: "100vh", 
      background: "#f8f9ff", 
      fontFamily: "system-ui,-apple-system,sans-serif" 
    }}>
      <AppNavbar page={page} setPage={navigate} />
      
      {page === "home" && (
        <HomePage setPage={navigate} setSelectedJob={setSelectedJob} />
      )}
      {page === "jobs" && (
        <JobsPage jobs={jobs} setSelectedJob={setSelectedJob} setPage={navigate} />
      )}
      {page === "detail" && (
        <JobDetailPage job={selectedJob} setPage={navigate} jobs={jobs} />
      )}
      {page === "admin" && (
        <AdminPage jobs={jobs} addJob={addJob} deleteJob={deleteJob} />
      )}

      {/* Footer */}
      <footer style={{ 
        background: "#1a1d2e", 
        color: "#fff", 
        padding: "48px 24px 24px" 
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", 
            gap: 32, 
            marginBottom: 36 
          }}>
            <div>
              <div style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: 8, 
                marginBottom: 12 
              }}>
                <div style={{ 
                  width: 28, 
                  height: 28, 
                  background: "#3d4ef6", 
                  borderRadius: "50%", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  fontWeight: 900, 
                  fontSize: 12 
                }}>
                  Q
                </div>
                <span style={{ fontWeight: 900, fontSize: 16 }}>QuickHire</span>
              </div>
              <p style={{ 
                fontSize: 13, 
                color: "rgba(255,255,255,0.5)", 
                lineHeight: 1.7 
              }}>
                Great platform for job seekers passionate about startups.
              </p>
            </div>
            
            {[
              ["About", ["Companies", "Pricing", "Terms", "Privacy Policy"]],
              ["Resources", ["Help Docs", "Guide", "Contact Us"]]
            ].map(([h, ls]) => (
              <div key={h}>
                <p style={{ fontWeight: 800, fontSize: 13, marginBottom: 14 }}>
                  {h}
                </p>
                {ls.map(l => (
                  <p 
                    key={l} 
                    style={{ 
                      fontSize: 13, 
                      color: "rgba(255,255,255,0.5)", 
                      marginBottom: 8, 
                      cursor: "pointer" 
                    }}
                  >
                    {l}
                  </p>
                ))}
              </div>
            ))}
            
            <div>
              <p style={{ fontWeight: 800, fontSize: 13, marginBottom: 8 }}>
                Get Job Notifications
              </p>
              <p style={{ 
                fontSize: 12, 
                color: "rgba(255,255,255,0.5)", 
                marginBottom: 12 
              }}>
                Latest jobs sent to your inbox weekly.
              </p>
              <div style={{ 
                display: "flex", 
                border: "1.5px solid rgba(255,255,255,0.2)", 
                borderRadius: 12, 
                overflow: "hidden" 
              }}>
                <input 
                  placeholder="Email address" 
                  style={{ 
                    flex: 1, 
                    background: "transparent", 
                    border: "none", 
                    padding: "10px 12px", 
                    color: "#fff", 
                    fontSize: 12, 
                    outline: "none" 
                  }} 
                />
                <button style={{ 
                  background: "#3d4ef6", 
                  color: "#fff", 
                  border: "none", 
                  padding: "10px 14px", 
                  fontSize: 12, 
                  fontWeight: 700, 
                  cursor: "pointer" 
                }}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div style={{ 
            borderTop: "1px solid rgba(255,255,255,0.1)", 
            paddingTop: 20, 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            flexWrap: "wrap", 
            gap: 12 
          }}>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>
              2024 © QuickHire. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {["f", "in", "tw"].map(s => (
                <div 
                  key={s} 
                  style={{ 
                    width: 32, 
                    height: 32, 
                    borderRadius: "50%", 
                    background: "rgba(255,255,255,0.1)", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    fontSize: 12, 
                    cursor: "pointer", 
                    fontWeight: 700 
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}