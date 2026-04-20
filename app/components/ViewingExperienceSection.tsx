import Image from "next/image";

export default function ViewingExperienceSection() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Image
        src="/assets/images/eclipse-lifestyle-single.png"
        alt="Person watching a solar eclipse through certified eclipse glasses"
        fill
        style={{ objectFit: "cover", objectPosition: "center 30%" }}
        sizes="100vw"
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(9,8,15,0.88) 0%, rgba(9,8,15,0.5) 55%, rgba(9,8,15,0.05) 100%)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(9,8,15,0.25) 0%, rgba(9,8,15,0) 30%, rgba(9,8,15,0) 70%, rgba(9,8,15,0.55) 100%)",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "6rem 2rem",
          width: "100%",
        }}
      >
        <div style={{ maxWidth: "500px" }}>
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
            The Experience
          </p>

          <h2
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "#f4f1eb",
              margin: "0 0 1.5rem",
            }}
          >
            Clarity at the moment
            <br />
            <span style={{ fontWeight: 600 }}>that matters most.</span>
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              color: "rgba(244, 241, 235, 0.72)",
            }}
          >
            The optics people look through at that moment define their memory
            of it — ours deliver a clean, undistorted view every time.
          </p>
        </div>
      </div>
    </section>
  );
}
