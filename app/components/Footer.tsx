export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "#0e1120",
        borderTop: "1px solid rgba(244, 241, 235, 0.09)",
        padding: "3rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap" as const,
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
        }}
      >
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span
            style={{
              display: "inline-block",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 35% 35%, #c9a86c 0%, #5a3e1b 55%, #1c1810 100%)",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: "0.8125rem",
              fontWeight: 500,
              letterSpacing: "0.2em",
              color: "#8e93ad",
              textTransform: "uppercase" as const,
            }}
          >
            Eclipse Optics
          </span>
        </div>

        {/* Links */}
        <div
          style={{
            display: "flex",
            gap: "2rem",
            flexWrap: "wrap" as const,
          }}
        >
          {["Product", "Institutions", "Inquiry"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                fontSize: "0.8125rem",
                color: "#8e93ad",
                textDecoration: "none",
                letterSpacing: "0.05em",
              }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div
          style={{
            display: "flex",
            flexDirection: "column" as const,
            gap: "0.25rem",
            alignItems: "flex-end" as const,
          }}
        >
          <a
            href="mailto:inquiries@eclipseoptics.com"
            style={{
              fontSize: "0.8125rem",
              color: "#c9a86c",
              textDecoration: "none",
              letterSpacing: "0.03em",
            }}
          >
            inquiries@eclipseoptics.com
          </a>
          <span
            style={{
              fontSize: "0.75rem",
              color: "rgba(142, 147, 173, 0.5)",
              letterSpacing: "0.03em",
            }}
          >
            © {year} Eclipse Optics. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
