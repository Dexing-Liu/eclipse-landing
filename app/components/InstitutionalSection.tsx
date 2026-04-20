import Image from "next/image";

const partners = [
  "Natural History Museums",
  "Science & Technology Centers",
  "Observatories & Planetariums",
  "School Districts & Universities",
  "Tourism Boards & Travel Agencies",
  "Corporate Events & Sponsorships",
  "Public Libraries & Community Orgs",
  "Government Outreach Programs",
];

export default function InstitutionalSection() {
  return (
    <section
      style={{
        backgroundColor: "#131929",
        padding: "8rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 80% 50%, rgba(201,168,108,0.05) 0%, transparent 55%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.3em",
              color: "#c9a86c",
              textTransform: "uppercase" as const,
              marginBottom: "1.25rem",
            }}
          >
            Institutional Programs
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 300,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              color: "#f4f1eb",
              margin: "0 auto 1.25rem",
              maxWidth: "600px",
            }}
          >
            Where science meets{" "}
            <span style={{ fontWeight: 600 }}>the public stage.</span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.75,
              color: "#9099b8",
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            From star parties to national eclipse corridors — at the scale
            and standard public programs demand.
          </p>
        </div>

        {/* Full-width event image */}
        <div
          style={{
            position: "relative",
            width: "100%",
            borderRadius: "8px",
            overflow: "hidden",
            marginBottom: "4.5rem",
          }}
        >
          <div style={{ position: "relative", width: "100%", paddingBottom: "52%" }}>
            <Image
              src="/assets/images/eclipse-event-scene.png"
              alt="Solar eclipse viewing event with institutional setup and audience"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              sizes="(max-width: 1280px) 100vw, 1200px"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, rgba(9,8,15,0.08) 0%, rgba(9,8,15,0.45) 100%)",
              }}
            />
          </div>

          <div
            style={{
              position: "absolute",
              bottom: "2rem",
              left: "2rem",
              zIndex: 1,
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "0.4rem 0.9rem",
                backgroundColor: "rgba(201, 168, 108, 0.15)",
                border: "1px solid rgba(201, 168, 108, 0.35)",
                borderRadius: "3px",
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                color: "#e8cc96",
                textTransform: "uppercase" as const,
              }}
            >
              Event-ready deployment
            </span>
          </div>
        </div>

        {/* Partner type grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "1px",
            backgroundColor: "rgba(244, 241, 235, 0.06)",
            border: "1px solid rgba(244, 241, 235, 0.06)",
            borderRadius: "6px",
            overflow: "hidden",
          }}
        >
          {partners.map((partner) => (
            <div
              key={partner}
              style={{
                padding: "1.375rem 1.75rem",
                backgroundColor: "#131929",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(201, 168, 108, 0.65)",
                }}
              />
              <span style={{ fontSize: "0.875rem", color: "#9099b8", lineHeight: 1.4 }}>
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
