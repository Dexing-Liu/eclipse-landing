export default function Nav() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: "rgba(9, 8, 15, 0.75)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(201, 168, 108, 0.12)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 35% 35%, #c9a86c 0%, #5a3e1b 55%, #1c1810 100%)",
              boxShadow: "0 0 12px rgba(201, 168, 108, 0.45)",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontWeight: 500,
              fontSize: "1rem",
              letterSpacing: "0.18em",
              color: "#f4f1eb",
              textTransform: "uppercase" as const,
            }}
          >
            Eclipse Optics
          </span>
        </div>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <a
            href="#product"
            style={{
              color: "#8e93ad",
              fontSize: "0.875rem",
              letterSpacing: "0.06em",
              textDecoration: "none",
              transition: "color 0.2s",
              display: "none",
            }}
            className="nav-link"
          >
            Product
          </a>
          <a
            href="#institutions"
            style={{
              color: "#8e93ad",
              fontSize: "0.875rem",
              letterSpacing: "0.06em",
              textDecoration: "none",
            }}
          >
            Institutions
          </a>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.5rem 1.25rem",
              border: "1px solid rgba(201, 168, 108, 0.6)",
              borderRadius: "3px",
              color: "#c9a86c",
              fontSize: "0.8125rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textDecoration: "none",
              textTransform: "uppercase" as const,
              transition: "background 0.2s, color 0.2s",
            }}
          >
            Request a Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
