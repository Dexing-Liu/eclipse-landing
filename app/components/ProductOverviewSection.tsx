import Image from "next/image";

const specs = [
  { label: "Standard", value: "ISO 12312-2 · CE · FCC" },
  { label: "Filter class", value: "Optical density ≥ 5.0" },
  { label: "Frame", value: "Premium paperboard" },
  { label: "Lead time", value: "4 – 8 weeks branded orders" },
];

export default function ProductOverviewSection() {
  return (
    <section
      id="product"
      style={{
        backgroundColor: "#f7f5f0",
        padding: "8rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "5rem",
          alignItems: "center",
        }}
      >
        {/* Text column */}
        <div>
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.3em",
              color: "#b8924e",
              textTransform: "uppercase" as const,
              marginBottom: "1.25rem",
            }}
          >
            The Product
          </p>

          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 300,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              color: "#141828",
              margin: "0 0 1.5rem",
            }}
          >
            Precision-crafted for
            <br />
            <span style={{ fontWeight: 600 }}>institutional standards.</span>
          </h2>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "#525874",
              marginBottom: "2.75rem",
            }}
          >
            Certified optical protection with a premium wearing experience.
            Institutional supply from 500 to 500,000 units.
          </p>

          {/* Spec grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0",
              borderTop: "1px solid rgba(20, 24, 40, 0.1)",
            }}
          >
            {specs.map((spec) => (
              <div
                key={spec.label}
                style={{
                  padding: "1.25rem 0",
                  borderBottom: "1px solid rgba(20, 24, 40, 0.1)",
                  paddingRight: "1rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.6875rem",
                    letterSpacing: "0.18em",
                    color: "#b8924e",
                    textTransform: "uppercase" as const,
                    marginBottom: "0.35rem",
                  }}
                >
                  {spec.label}
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "#141828",
                    fontWeight: 500,
                  }}
                >
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image column */}
        <div style={{ position: "relative", borderRadius: "6px", overflow: "hidden" }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingBottom: "100%",
              backgroundColor: "#ede9e2",
              borderRadius: "6px",
            }}
          >
            <Image
              src="/assets/images/eclipse-product-clean.png"
              alt="Eclipse Optics solar glasses — clean studio shot"
              fill
              style={{ objectFit: "contain", padding: "2rem" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div
            style={{
              position: "absolute",
              top: "-1px",
              right: "-1px",
              width: "60px",
              height: "60px",
              borderTop: "2px solid rgba(184,146,78,0.5)",
              borderRight: "2px solid rgba(184,146,78,0.5)",
              borderRadius: "0 6px 0 0",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-1px",
              left: "-1px",
              width: "60px",
              height: "60px",
              borderBottom: "2px solid rgba(184,146,78,0.5)",
              borderLeft: "2px solid rgba(184,146,78,0.5)",
              borderRadius: "0 0 0 6px",
            }}
          />
        </div>
      </div>
    </section>
  );
}
