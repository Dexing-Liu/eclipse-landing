import Image from "next/image";

const highlights = [
  {
    heading: "Event-scale supply",
    body: "From hundreds to hundreds of thousands — consistent quality across every unit.",
  },
  {
    heading: "Dedicated logistics",
    body: "Delivery schedules aligned to your event calendar, with flexible lead-time options.",
  },
];

export default function GroupUseSection() {
  return (
    <section
      id="institutions"
      style={{
        backgroundColor: "#f4f1eb",
        padding: "8rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "5rem", maxWidth: "640px" }}>
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
            Group &amp; Bulk Programs
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 300,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              color: "#141828",
              margin: 0,
            }}
          >
            Built for the scale of{" "}
            <span style={{ fontWeight: 600 }}>major events.</span>
          </h2>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "5rem",
            alignItems: "center",
          }}
        >
          {/* Image */}
          <div style={{ position: "relative", borderRadius: "6px", overflow: "hidden" }}>
            <div style={{ position: "relative", width: "100%", paddingBottom: "70%" }}>
              <Image
                src="/assets/images/eclipse-product-bulk.png"
                alt="Multiple solar eclipse glasses arranged for group or event distribution"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(20,24,40,0.25) 0%, rgba(20,24,40,0) 50%)",
                }}
              />
            </div>
          </div>

          {/* Feature list */}
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "0" }}>
            {highlights.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: "2rem 0",
                  borderBottom: "1px solid rgba(20, 24, 40, 0.1)",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem" }}>
                  <span
                    style={{
                      display: "inline-block",
                      flexShrink: 0,
                      marginTop: "0.35rem",
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "#b8924e",
                    }}
                  />
                  <div>
                    <h3
                      style={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "#141828",
                        margin: "0 0 0.5rem",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {item.heading}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        lineHeight: 1.7,
                        color: "#525874",
                        margin: 0,
                      }}
                    >
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div style={{ paddingTop: "2.5rem" }}>
              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "0.875rem 2rem",
                  backgroundColor: "transparent",
                  border: "1px solid rgba(184,146,78,0.6)",
                  borderRadius: "3px",
                  color: "#b8924e",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textDecoration: "none",
                  textTransform: "uppercase" as const,
                }}
              >
                Discuss Your Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
