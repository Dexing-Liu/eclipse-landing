import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <Image
        src="/assets/images/eclipse-hero-main.png"
        alt="Solar eclipse — totality moment"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center" }}
        sizes="100vw"
      />

      {/* Gradient overlays */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(9,8,15,0.45) 0%, rgba(9,8,15,0.15) 40%, rgba(9,8,15,0.65) 80%, rgba(9,8,15,0.95) 100%)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, rgba(9,8,15,0) 30%, rgba(9,8,15,0.5) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 2rem",
          textAlign: "center",
          paddingTop: "8rem",
          paddingBottom: "6rem",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-geist-sans)",
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.3em",
            color: "#c9a86c",
            textTransform: "uppercase" as const,
            marginBottom: "1.75rem",
          }}
        >
          ISO 12312-2 Certified · CE Compliant
        </p>

        <h1
          style={{
            fontFamily: "var(--font-geist-sans)",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#f4f1eb",
            margin: "0 0 1.5rem",
          }}
        >
          Engineered for the
          <br />
          <em
            style={{
              fontStyle: "normal",
              fontWeight: 600,
              color: "#e8cc96",
            }}
          >
            Extraordinary Moment.
          </em>
        </h1>

        <p
          style={{
            fontFamily: "var(--font-geist-sans)",
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            fontWeight: 300,
            lineHeight: 1.7,
            color: "rgba(244, 241, 235, 0.75)",
            maxWidth: "580px",
            margin: "0 auto 3rem",
          }}
        >
          ISO-certified solar eclipse glasses for museums, observatories,
          science centers, and large-scale public events.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap" as const,
          }}
        >
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.875rem 2.25rem",
              backgroundColor: "#c9a86c",
              color: "#09080f",
              fontFamily: "var(--font-geist-sans)",
              fontWeight: 600,
              fontSize: "0.875rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase" as const,
              textDecoration: "none",
              borderRadius: "3px",
              transition: "background 0.2s",
            }}
          >
            Request a Quote
          </a>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.875rem 2.25rem",
              backgroundColor: "transparent",
              border: "1px solid rgba(244, 241, 235, 0.35)",
              color: "#f4f1eb",
              fontFamily: "var(--font-geist-sans)",
              fontWeight: 400,
              fontSize: "0.875rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase" as const,
              textDecoration: "none",
              borderRadius: "3px",
              transition: "border-color 0.2s",
            }}
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column" as const,
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span
          style={{
            fontSize: "0.625rem",
            letterSpacing: "0.25em",
            color: "rgba(201, 168, 108, 0.6)",
            textTransform: "uppercase" as const,
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background:
              "linear-gradient(to bottom, rgba(201,168,108,0.6), rgba(201,168,108,0))",
          }}
        />
      </div>
    </section>
  );
}
