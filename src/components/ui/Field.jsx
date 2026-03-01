export default function Field({ label, error, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {label && (
        <label style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>
          {label}
        </label>
      )}
      {children}
      {error && (
        <span style={{ fontSize: 11, color: "#ef4444" }}>
          {error}
        </span>
      )}
    </div>
  );
}

export const inputStyle = (err) => ({
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