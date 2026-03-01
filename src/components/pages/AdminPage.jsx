'use client';

import { useState } from 'react';
import AdminTable from '@/components/admin/AdminTable';
import AdminForm from '@/components/admin/AdminForm';

export default function AdminPage({ jobs, addJob, deleteJob }) {
  const [tab, setTab] = useState("listings");

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px" }}>
      {/* Header */}
      <div style={{ 
        background: "#fff", 
        borderRadius: 24, 
        border: "1.5px solid #f1f5f9", 
        padding: "24px 28px", 
        marginBottom: 24, 
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)" 
      }}>
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "space-between", 
          marginBottom: 20 
        }}>
          <div>
            <h1 style={{ fontSize: 24, fontWeight: 900, color: "#1a1d3b" }}>
              Admin Dashboard
            </h1>
            <p style={{ color: "#9ca3af", fontSize: 14, marginTop: 4 }}>
              Manage your job listings
            </p>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            {[
              ["💼", jobs.length + " Jobs", "#eef2ff", "#3d4ef6"],
              ["📝", "12 Apps", "#f0fdf4", "#22c55e"],
              ["👁", "1.2k Views", "#fff7ed", "#f97316"]
            ].map(([ico, val, bg, col]) => (
              <div 
                key={val} 
                style={{ 
                  background: bg, 
                  color: col, 
                  padding: "8px 16px", 
                  borderRadius: 12, 
                  fontWeight: 700, 
                  fontSize: 13, 
                  display: "flex", 
                  alignItems: "center", 
                  gap: 6 
                }}
              >
                {ico} {val}
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 2, borderBottom: "1.5px solid #f1f5f9" }}>
          {[
            ["listings", "📋 All Listings"],
            ["add", "➕ Post New Job"]
          ].map(([id, label]) => (
            <button 
              key={id} 
              onClick={() => setTab(id)}
              style={{ 
                padding: "10px 20px", 
                fontSize: 13, 
                fontWeight: 700, 
                border: "none", 
                cursor: "pointer", 
                borderBottom: `2.5px solid ${tab === id ? "#3d4ef6" : "transparent"}`, 
                color: tab === id ? "#3d4ef6" : "#6b7280", 
                background: "transparent", 
                transition: "all 0.15s", 
                marginBottom: -1.5 
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {tab === "listings" ? (
        <AdminTable jobs={jobs} deleteJob={deleteJob} />
      ) : (
        <AdminForm addJob={addJob} onSuccess={() => setTab("listings")} />
      )}
    </div>
  );
}