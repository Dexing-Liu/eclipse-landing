export default function FinalCTASection() {
  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#f7f5f0",
        padding: "8rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "5rem",
          alignItems: "start",
        }}
      >
        {/* Left: headline + bullet list */}
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
            Work With Us
          </p>

          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "#141828",
              margin: "0 0 1.5rem",
            }}
          >
            Ready to equip your
            <br />
            <span style={{ fontWeight: 600 }}>next event?</span>
          </h2>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "#525874",
              marginBottom: "2.5rem",
            }}
          >
            From a few hundred visitors to nationwide outreach — specification
            to delivery, with dedicated account support.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column" as const,
              gap: "0.75rem",
              fontSize: "0.875rem",
              color: "#525874",
            }}
          >
            {[
              "Institutional bulk orders",
              "Distribution partnerships",
              "Corporate event packages",
            ].map((item) => (
              <div
                key={item}
                style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    backgroundColor: "#b8924e",
                    flexShrink: 0,
                  }}
                />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Right: inquiry form — dark card on light bg */}
        <div>
          <div
            style={{
              backgroundColor: "#141828",
              border: "1px solid rgba(244,241,235,0.07)",
              borderRadius: "8px",
              padding: "2.5rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: 500,
                color: "#f4f1eb",
                margin: "0 0 2rem",
                letterSpacing: "-0.01em",
              }}
            >
              Send an Inquiry
            </h3>

            <form
              style={{
                display: "flex",
                flexDirection: "column" as const,
                gap: "1.25rem",
              }}
            >
              <div
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
              >
                <div>
                  <label style={labelStyle}>Name</label>
                  <input type="text" placeholder="Jane Smith" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Organization</label>
                  <input
                    type="text"
                    placeholder="Institution or Company"
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Email</label>
                <input
                  type="email"
                  placeholder="jane@institution.org"
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Estimated quantity</label>
                <select style={{ ...inputStyle, color: "#8e93ad" }}>
                  <option value="">Select range</option>
                  <option>500 – 2,000 units</option>
                  <option>2,000 – 10,000 units</option>
                  <option>10,000 – 50,000 units</option>
                  <option>50,000+ units</option>
                </select>
              </div>

              <div>
                <label style={labelStyle}>Message</label>
                <textarea
                  placeholder="Tell us about your event or program…"
                  rows={4}
                  style={{ ...inputStyle, resize: "vertical" as const, height: "auto" }}
                />
              </div>

              <button
                type="submit"
                style={{
                  padding: "0.9375rem",
                  backgroundColor: "#c9a86c",
                  color: "#09080f",
                  border: "none",
                  borderRadius: "4px",
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase" as const,
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                Submit Inquiry
              </button>

              <p
                style={{
                  fontSize: "0.75rem",
                  color: "#8e93ad",
                  textAlign: "center" as const,
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                We respond to institutional inquiries within 2 business days.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.6875rem",
  fontWeight: 500,
  letterSpacing: "0.15em",
  color: "#8e93ad",
  textTransform: "uppercase",
  marginBottom: "0.5rem",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.75rem 1rem",
  backgroundColor: "#1c2135",
  border: "1px solid rgba(244, 241, 235, 0.1)",
  borderRadius: "4px",
  color: "#f4f1eb",
  fontSize: "0.9375rem",
  fontFamily: "var(--font-geist-sans)",
  outline: "none",
  boxSizing: "border-box",
};
