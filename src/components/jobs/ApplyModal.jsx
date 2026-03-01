'use client';

import { useState } from 'react';
import Field, { inputStyle } from '@/components/ui/Field';
import Btn from '@/components/ui/Button';

export default function ApplyModal({ job, onClose }) {
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    resumeUrl: "", 
    coverNote: "" 
  });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k, v) => { 
    setForm(f => ({ ...f, [k]: v })); 
    setErrors(e => ({ ...e, [k]: "" })); 
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.resumeUrl.trim()) e.resumeUrl = "Resume URL is required";
    else if (!/^https?:\/\//.test(form.resumeUrl)) e.resumeUrl = "Must start with https://";
    if (!form.coverNote.trim()) e.coverNote = "Cover note is required";
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
    await new Promise(r => setTimeout(r, 900));
    setLoading(false);
    setDone(true);
  };

  return (
    <div style={{ 
      position: "fixed", 
      inset: 0, 
      zIndex: 200, 
      background: "rgba(0,0,0,0.5)", 
      backdropFilter: "blur(4px)", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      padding: 16 
    }}>
      <div style={{ 
        background: "#fff", 
        borderRadius: 28, 
        width: "100%", 
        maxWidth: 480, 
        maxHeight: "90vh", 
        overflowY: "auto", 
        boxShadow: "0 32px 80px rgba(0,0,0,0.2)" 
      }}>
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "space-between", 
          padding: "24px 24px 16px", 
          borderBottom: "1.5px solid #f1f5f9" 
        }}>
          <div>
            <h2 style={{ fontWeight: 900, color: "#1a1d3b", fontSize: 18 }}>
              Apply Now
            </h2>
            <p style={{ fontSize: 13, color: "#9ca3af", marginTop: 2 }}>
              {job.title} · {job.company}
            </p>
          </div>
          <button 
            onClick={onClose} 
            style={{ 
              width: 32, 
              height: 32, 
              borderRadius: "50%", 
              background: "#f3f4f6", 
              border: "none", 
              cursor: "pointer", 
              fontSize: 16, 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center" 
            }}
          >
            ×
          </button>
        </div>

        {done ? (
          <div style={{ padding: "48px 24px", textAlign: "center" }}>
            <div style={{ 
              width: 64, 
              height: 64, 
              background: "#f0fdf4", 
              borderRadius: "50%", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              margin: "0 auto 16px", 
              fontSize: 28 
            }}>
              ✅
            </div>
            <h3 style={{ 
              fontSize: 18, 
              fontWeight: 800, 
              color: "#1a1d3b", 
              marginBottom: 8 
            }}>
              Application Sent!
            </h3>
            <p style={{ 
              fontSize: 14, 
              color: "#6b7280", 
              maxWidth: 280, 
              margin: "0 auto 24px" 
            }}>
              Your application for <strong>{job.title}</strong> at <strong>{job.company}</strong> has been submitted. Good luck!
            </p>
            <Btn onClick={onClose}>Close</Btn>
          </div>
        ) : (
          <form 
            onSubmit={submit} 
            style={{ 
              padding: 24, 
              display: "flex", 
              flexDirection: "column", 
              gap: 16 
            }}
          >
            <Field label="Full Name *" error={errors.name}>
              <input 
                value={form.name} 
                onChange={e => set("name", e.target.value)} 
                placeholder="Jane Smith" 
                style={inputStyle(errors.name)} 
              />
            </Field>

            <Field label="Email Address *" error={errors.email}>
              <input 
                type="email" 
                value={form.email} 
                onChange={e => set("email", e.target.value)} 
                placeholder="jane@example.com" 
                style={inputStyle(errors.email)} 
              />
            </Field>

            <Field label="Resume / Portfolio URL *" error={errors.resumeUrl}>
              <input 
                value={form.resumeUrl} 
                onChange={e => set("resumeUrl", e.target.value)} 
                placeholder="https://drive.google.com/your-resume" 
                style={inputStyle(errors.resumeUrl)} 
              />
            </Field>

            <Field label="Cover Note *" error={errors.coverNote}>
              <textarea 
                value={form.coverNote} 
                onChange={e => set("coverNote", e.target.value)} 
                placeholder="Tell us why you're a great fit..." 
                rows={5} 
                style={{ ...inputStyle(errors.coverNote), resize: "none" }} 
              />
            </Field>

            <div style={{ display: "flex", gap: 10, paddingTop: 4 }}>
              <Btn variant="secondary" onClick={onClose} style={{ flex: 1 }}>
                Cancel
              </Btn>
              <Btn type="submit" disabled={loading} style={{ flex: 1 }}>
                {loading ? "Submitting…" : "Submit Application"}
              </Btn>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}