export default function Btn({ 
  children, 
  onClick, 
  variant = "primary", 
  style = {}, 
  disabled = false, 
  type = "button" 
}) {
  const styles = {
    primary: { background: "#3d4ef6", color: "#fff", border: "none" },
    secondary: { background: "#fff", color: "#374151", border: "1.5px solid #e5e7eb" },
    danger: { background: "#fef2f2", color: "#ef4444", border: "1.5px solid #fecaca" },
    ghost: { background: "transparent", color: "#3d4ef6", border: "none" }
  };

  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled}
      style={{ 
        ...styles[variant], 
        padding: "10px 20px", 
        borderRadius: 12, 
        fontWeight: 700, 
        fontSize: 13, 
        cursor: disabled ? "not-allowed" : "pointer", 
        opacity: disabled ? 0.6 : 1, 
        transition: "all 0.15s", 
        ...style 
      }}
    >
      {children}
    </button>
  );
}