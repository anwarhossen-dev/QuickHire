export default function Badge({ children, bg = "#eef2ff", color = "#3d4ef6" }) {
  return (
    <span 
      style={{ 
        backgroundColor: bg, 
        color, 
        fontSize: 10, 
        fontWeight: 700, 
        padding: "3px 9px", 
        borderRadius: 99, 
        letterSpacing: "0.04em", 
        textTransform: "uppercase" 
      }}
    >
      {children}
    </span>
  );
}