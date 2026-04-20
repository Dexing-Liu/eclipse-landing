"use client";

import { useState, FormEvent } from "react";

const CONTACT_EMAIL = "info@eclipseview.eu";

interface FormState {
  name: string;
  organization: string;
  email: string;
  quantity: string;
  message: string;
}

const empty: FormState = {
  name: "",
  organization: "",
  email: "",
  quantity: "",
  message: "",
};

export default function FinalCTASection() {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): Partial<FormState> {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.organization.trim()) e.organization = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Required";
    return e;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    const subject = encodeURIComponent(
      `Inquiry from ${form.name} — ${form.organization}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Organization: ${form.organization}`,
        `Email: ${form.email}`,
        form.quantity ? `Estimated quantity: ${form.quantity}` : "",
        "",
        form.message,
      ]
        .filter((l) => l !== undefined)
        .join("\n")
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setForm(empty);
    setErrors({});
  }

  return (
    <section
      id="contact"
      style={{ backgroundColor: "#f7f5f0", padding: "8rem 2rem" }}
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
        {/* Left */}
        <div>
          <p style={eyebrowStyle}>Work With Us</p>

          <h2 style={headingStyle}>
            Ready to equip your
            <br />
            <span style={{ fontWeight: 600 }}>next event?</span>
          </h2>

          <p style={bodyStyle}>
            From a few hundred visitors to nationwide outreach — specification
            to delivery, with dedicated account support.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.875rem", color: "#525874" }}>
            {["Institutional bulk orders", "Distribution partnerships", "Corporate event packages"].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ display: "inline-block", width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#b8924e", flexShrink: 0 }} />
                {item}
              </div>
            ))}
          </div>

          <div style={{ marginTop: "2.5rem" }}>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              style={{
                fontSize: "0.875rem",
                color: "#b8924e",
                textDecoration: "none",
                letterSpacing: "0.03em",
              }}
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        {/* Right: form card */}
        <div>
          <div style={cardStyle}>
            <h3 style={cardHeadingStyle}>Send an Inquiry</h3>

            {submitted ? (
              <div style={successBoxStyle}>
                <p style={{ margin: "0 0 0.5rem", fontWeight: 600, color: "#e8cc96" }}>
                  Your email client should have opened.
                </p>
                <p style={{ margin: 0, fontSize: "0.875rem", color: "#9099b8", lineHeight: 1.6 }}>
                  If it didn&apos;t open automatically, email us directly at{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "#c9a86c", textDecoration: "none" }}>
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{ ...ghostButtonStyle, marginTop: "1.25rem" }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={labelStyle}>Name *</label>
                    <input
                      name="name"
                      type="text"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handleChange}
                      style={{ ...inputStyle, ...(errors.name ? errorBorderStyle : {}) }}
                    />
                    {errors.name && <span style={errorTextStyle}>{errors.name}</span>}
                  </div>
                  <div>
                    <label style={labelStyle}>Organization *</label>
                    <input
                      name="organization"
                      type="text"
                      placeholder="Institution or Company"
                      value={form.organization}
                      onChange={handleChange}
                      style={{ ...inputStyle, ...(errors.organization ? errorBorderStyle : {}) }}
                    />
                    {errors.organization && <span style={errorTextStyle}>{errors.organization}</span>}
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Email *</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="jane@institution.org"
                    value={form.email}
                    onChange={handleChange}
                    style={{ ...inputStyle, ...(errors.email ? errorBorderStyle : {}) }}
                  />
                  {errors.email && <span style={errorTextStyle}>{errors.email}</span>}
                </div>

                <div>
                  <label style={labelStyle}>Estimated quantity</label>
                  <select
                    name="quantity"
                    value={form.quantity}
                    onChange={handleChange}
                    style={{ ...inputStyle, color: form.quantity ? "#f4f1eb" : "#8e93ad" }}
                  >
                    <option value="">Select range</option>
                    <option>500 – 2,000 units</option>
                    <option>2,000 – 10,000 units</option>
                    <option>10,000 – 50,000 units</option>
                    <option>50,000+ units</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Message *</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your event or program…"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      height: "auto",
                      ...(errors.message ? errorBorderStyle : {}),
                    }}
                  />
                  {errors.message && <span style={errorTextStyle}>{errors.message}</span>}
                </div>

                <button type="submit" style={submitButtonStyle}>
                  Submit Inquiry
                </button>

                <p style={{ fontSize: "0.75rem", color: "#8e93ad", textAlign: "center", margin: 0, lineHeight: 1.6 }}>
                  We respond to institutional inquiries within 2 business days.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Styles ─────────────────────────────────────────────────────────── */

const eyebrowStyle: React.CSSProperties = {
  fontSize: "0.7rem",
  fontWeight: 500,
  letterSpacing: "0.3em",
  color: "#b8924e",
  textTransform: "uppercase",
  marginBottom: "1.25rem",
};

const headingStyle: React.CSSProperties = {
  fontSize: "clamp(2rem, 4vw, 3rem)",
  fontWeight: 300,
  lineHeight: 1.15,
  letterSpacing: "-0.02em",
  color: "#141828",
  margin: "0 0 1.5rem",
};

const bodyStyle: React.CSSProperties = {
  fontSize: "1rem",
  lineHeight: 1.8,
  color: "#525874",
  marginBottom: "2.5rem",
};

const cardStyle: React.CSSProperties = {
  backgroundColor: "#141828",
  border: "1px solid rgba(244,241,235,0.07)",
  borderRadius: "8px",
  padding: "2.5rem",
};

const cardHeadingStyle: React.CSSProperties = {
  fontSize: "1.125rem",
  fontWeight: 500,
  color: "#f4f1eb",
  margin: "0 0 2rem",
  letterSpacing: "-0.01em",
};

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

const errorBorderStyle: React.CSSProperties = {
  border: "1px solid rgba(220, 100, 80, 0.6)",
};

const errorTextStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.6875rem",
  color: "#e07060",
  marginTop: "0.35rem",
  letterSpacing: "0.03em",
};

const submitButtonStyle: React.CSSProperties = {
  padding: "0.9375rem",
  backgroundColor: "#c9a86c",
  color: "#09080f",
  border: "none",
  borderRadius: "4px",
  fontFamily: "var(--font-geist-sans)",
  fontSize: "0.8125rem",
  fontWeight: 600,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  cursor: "pointer",
  width: "100%",
};

const successBoxStyle: React.CSSProperties = {
  padding: "1.5rem",
  backgroundColor: "rgba(201,168,108,0.08)",
  border: "1px solid rgba(201,168,108,0.2)",
  borderRadius: "6px",
};

const ghostButtonStyle: React.CSSProperties = {
  background: "transparent",
  border: "1px solid rgba(244,241,235,0.2)",
  borderRadius: "3px",
  color: "#8e93ad",
  fontSize: "0.75rem",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  padding: "0.5rem 1rem",
  cursor: "pointer",
  fontFamily: "var(--font-geist-sans)",
};
