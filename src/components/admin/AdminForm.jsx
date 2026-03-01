'use client';

import { useState } from 'react';
import { CATEGORIES, LOCATIONS, JOB_TYPES } from '@/data/jobs';
import Field, { inputStyle } from '@/components/ui/Field';
import Btn from '@/components/ui/Button';

const EMOJIS = ["💼", "🎨", "💻", "📊", "🔧", "🚀", "🎵", "📱", "🌐", "⚡", "🎯", "🔮"];
const COLORS = ["#3d4ef6", "#22c55e", "#f97316", "#a855f7", "#ec4899", "#0ea5e9", "#14b8a6", "#cc0000"];

export default function AdminForm({ addJob, onSuccess }) {
  const empty = { 
    title: "", 
    company: "", 
    logo: "💼", 
    bgColor: "#3d4ef6", 
    location: "", 
    type: "Full Time", 
    category: "", 
    salary: "", 
    tags: "", 
    description: "" 
  };
  
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k, v) => { 
    setForm(f => ({ ...f, [k]: v })); 
    setErrors(e => ({ ...e, [k]: "" })); 
  };

  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title = "Required";
    if (!form.company.trim()) e.company = "Required";
    if (!form.location) e.location = "Required";
    if (!form.category) e.category = "Required";
    if (!form.description.trim()) e.description = "Required";
    return e;
  };

  const submit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { 
      setErrors(errs); 
      return; 
    }
    setLoading(true);
    await new Promise(r => setTimeout(r, 700));
    addJob({ 
      ...form, 
      tags: form.tags.split(",").map(t => t.trim()).filter(Boolean) 
    });
    setLoading(false);
    setDone(true);
    setTimeout(() => { 
      setDone(false); 
      setForm(empty); 
      onSuccess(); 
    }, 1500);
  };

  return (
    <div style={{ 
      background: "#fff", 
      borderRadius: 24, 
      border: "1.5px solid #f1f5f9", 
      padding: 28, 
      boxShadow: "0 2px 8px rgba(0,0,0,0.04)" 
    }}>
      <h2 style={{ fontSize: 18, fontWeight: 900, color: "#1a1d3b", marginBottom: 4 }}>
        Post a New Job
      </h2>
      <p style={{ fontSize: 13, color: "#9ca3af", marginBottom: 24 }}>
        Fill in the details to add a new job listing.
      </p>

      {done && (
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: 10, 
          background: "#f0fdf4", 
          border: "1.5px solid #bbf7d0", 
          color: "#16a34a", 
          borderRadius: 14, 
          padding: "12px 16px", 
          marginBottom: 20, 
          fontSize: 14, 
          fontWeight: 600 
        }}>
          ✅ Job posted successfully! Redirecting…
        </div>
      )}

      <form 
        onSubmit={submit} 
        style={{ display: "flex", flexDirection: "column", gap: 18 }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <Field label="Job Title *" error={errors.title}>
            <input 
              value={form.title} 
              onChange={e => set("title", e.target.value)} 
              placeholder="e.g. Senior Designer" 
              style={inputStyle(errors.title)} 
            />
          </Field>
          <Field label="Company *" error={errors.company}>
            <input 
              value={form.company} 
              onChange={e => set("company", e.target.value)} 
              placeholder="e.g. Spotify" 
              style={inputStyle(errors.company)} 
            />
          </Field>
        </div>

        <Field label="Company Logo (pick emoji)">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {EMOJIS.map(em => (
              <button 
                key={em} 
                type="button" 
                onClick={() => set("logo", em)}
                style={{ 
                  width: 40, 
                  height: 40, 
                  borderRadius: 12, 
                  fontSize: 20, 
                  cursor: "pointer", 
                  border: `2px solid ${form.logo === em ? "#3d4ef6" : "#e5e7eb"}`, 
                  background: form.logo === em ? "#eef2ff" : "#fff", 
                  transition: "all 0.15s" 
                }}
              >
                {em}
              </button>
            ))}
          </div>
        </Field>

        <Field label="Brand Color">
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {COLORS.map(c => (
              <button 
                key={c} 
                type="button" 
                onClick={() => set("bgColor", c)}
                style={{ 
                  width: 32, 
                  height: 32, 
                  borderRadius: "50%", 
                  background: c, 
                  border: `3px solid ${form.bgColor === c ? "#374151" : "#fff"}`, 
                  boxShadow: `0 0 0 2px ${form.bgColor === c ? c : "transparent"}`, 
                  cursor: "pointer", 
                  transition: "all 0.15s" 
                }} 
              />
            ))}
          </div>
        </Field>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <Field label="Location *" error={errors.location}>
            <select 
              value={form.location} 
              onChange={e => set("location", e.target.value)} 
              style={{ ...inputStyle(errors.location), cursor: "pointer" }}
            >
              <option value="">Select location</option>
              {LOCATIONS.map(l => <option key={l}>{l}</option>)}
            </select>
          </Field>
          <Field label="Job Type">
            <select 
              value={form.type} 
              onChange={e => set("type", e.target.value)} 
              style={{ ...inputStyle(false), cursor: "pointer" }}
            >
              {JOB_TYPES.map(t => <option key={t}>{t}</option>)}
            </select>
          </Field>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <Field label="Category *" error={errors.category}>
            <select 
              value={form.category} 
              onChange={e => set("category", e.target.value)} 
              style={{ ...inputStyle(errors.category), cursor: "pointer" }}
            >
              <option value="">Select category</option>
              {CATEGORIES.map(c => <option key={c}>{c}</option>)}
            </select>
          </Field>
          <Field label="Salary Range">
            <input 
              value={form.salary} 
              onChange={e => set("salary", e.target.value)} 
              placeholder="e.g. $80k–$100k" 
              style={inputStyle(false)} 
            />
          </Field>
        </div>

        <Field label="Tags (comma-separated)">
          <input 
            value={form.tags} 
            onChange={e => set("tags", e.target.value)} 
            placeholder="e.g. React, Figma, Python" 
            style={inputStyle(false)} 
          />
        </Field>

        <Field label="Job Description *" error={errors.description}>
          <textarea 
            value={form.description} 
            onChange={e => set("description", e.target.value)} 
            placeholder="Describe the role, responsibilities, and requirements..." 
            rows={6} 
            style={{ ...inputStyle(errors.description), resize: "none" }} 
          />
        </Field>

        <div>
          <Btn type="submit" disabled={loading} style={{ padding: "13px 36px" }}>
            {loading ? "Posting…" : "Post Job"}
          </Btn>
        </div>
      </form>
    </div>
  );
}