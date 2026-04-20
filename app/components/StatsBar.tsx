const stats = [
  { value: "ISO 12312-2", label: "Certified Standard" },
  { value: "500k+", label: "Units Deployed" },
  { value: "CE · FCC", label: "International Compliance" },
  { value: "4–8 wk", label: "Branded Lead Time" },
];

export default function StatsBar() {
  return (
    <div
      style={{
        backgroundColor: "#f7f5f0",
        borderBottom: "1px solid rgba(20,24,40,0.08)",
        padding: "2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            style={{
              display: "flex",
              flexDirection: "column" as const,
              alignItems: "center",
              textAlign: "center" as const,
              padding: "0.75rem 1rem",
            }}
          >
            <span
              style={{
                fontSize: "1.375rem",
                fontWeight: 600,
                color: "#b8924e",
                letterSpacing: "-0.01em",
                marginBottom: "0.3rem",
              }}
            >
              {stat.value}
            </span>
            <span
              style={{
                fontSize: "0.7rem",
                color: "#7a7f99",
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
              }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
