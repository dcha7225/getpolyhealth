"use client";

import { useState } from "react";

type DemoRequestPayload = {
  name: string;
  email: string;
  clinicName: string;
  specialty: string;
  monthlyVisits: string;
  notes: string;
};

export default function DemoCTA() {
  const [form, setForm] = useState<DemoRequestPayload>({
    name: "",
    email: "",
    clinicName: "",
    specialty: "",
    monthlyVisits: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/demo-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setSubmitted(true);
    } catch {
      setError("We couldn't save your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="demo" className="section-base">
      <div className="max-w-3xl mx-auto">
        <div
          className="relative rounded-3xl p-12 text-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(45,212,191,0.07) 0%, rgba(99,102,241,0.10) 100%)",
            border: "1px solid rgba(45,212,191,0.15)",
          }}
        >
          {/* Ambient orbs */}
          <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-primary/8 blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-indigo/8 blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <p className="section-label mb-4 block">Get Started</p>
            <h2 className="display-font text-4xl sm:text-5xl text-white tracking-tight mb-4 leading-tight">
              You&apos;re going to{" "}
              <span className="gradient-text">want to see this.</span>
            </h2>
            <p className="text-slate-muted text-lg mb-10 max-w-xl mx-auto">
              Founder-led, 20 minutes, and tailored to your clinic. We&apos;ll
              show the full patient journey from booking to SOAP note to
              discharge.
            </p>

            {submitted ? (
              <div className="flex flex-col items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
                  style={{ background: "rgba(45,212,191,0.12)", border: "1px solid rgba(45,212,191,0.25)" }}
                >
                  ✓
                </div>
                <p className="text-white font-bold text-xl">Request received.</p>
                <p className="text-slate-muted text-sm">
                  We&apos;ll reach out within 24 hours to schedule your demo.
                </p>
              </div>
            ) : (
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:text-left">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-3 max-w-lg mx-auto w-full lg:mx-0"
                >
                  {[
                    { name: "name", placeholder: "Your name", type: "text", required: true },
                    { name: "email", placeholder: "Work email", type: "email", required: true },
                    { name: "clinicName", placeholder: "Clinic or practice name", type: "text", required: true },
                    { name: "specialty", placeholder: "Specialty", type: "text", required: true },
                  ].map((field) => (
                    <input
                      key={field.name}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                      autoComplete={
                        field.name === "name"
                          ? "name"
                          : field.name === "email"
                            ? "email"
                            : "organization"
                      }
                      value={form[field.name as keyof DemoRequestPayload]}
                      onChange={(e) =>
                        setForm((current) => ({
                          ...current,
                          [field.name]: e.target.value,
                        }))
                      }
                      className="px-4 py-3.5 rounded-xl text-white placeholder:text-slate-subtle text-sm transition-colors"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    />
                  ))}

                  <select
                    name="monthlyVisits"
                    value={form.monthlyVisits}
                    onChange={(e) =>
                      setForm((current) => ({
                        ...current,
                        monthlyVisits: e.target.value,
                      }))
                    }
                    className="px-4 py-3.5 rounded-xl text-white text-sm transition-colors"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <option value="" className="bg-surface text-slate-muted">
                      Approximate monthly visit volume
                    </option>
                    <option value="under-100" className="bg-surface">
                      Under 100 visits
                    </option>
                    <option value="100-300" className="bg-surface">
                      100-300 visits
                    </option>
                    <option value="300-600" className="bg-surface">
                      300-600 visits
                    </option>
                    <option value="600-plus" className="bg-surface">
                      600+ visits
                    </option>
                  </select>

                  <textarea
                    name="notes"
                    placeholder="What do you want to see in the demo?"
                    value={form.notes}
                    onChange={(e) =>
                      setForm((current) => ({
                        ...current,
                        notes: e.target.value,
                      }))
                    }
                    rows={4}
                    className="px-4 py-3.5 rounded-xl text-white placeholder:text-slate-subtle text-sm transition-colors resize-none"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary mt-1 text-white disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "Saving request..." : "Request a Demo"}
                  </button>
                  <p className="text-slate-subtle text-xs mt-1">
                    We&apos;ll reach out within 24 hours. No spam, ever.
                  </p>
                  {error ? <p className="text-sm text-rose-300">{error}</p> : null}
                </form>

                <div
                  className="rounded-2xl border border-white/[0.08] bg-[#0f172a]/80 p-6 text-left"
                  style={{ boxShadow: "0 16px 48px rgba(2, 6, 23, 0.35)" }}
                >
                  <p className="section-label mb-3 block">In Your Demo</p>
                  <h3 className="text-white text-2xl font-semibold mb-4">
                    We walk through the exact workflow your clinic would use.
                  </h3>
                  <ul className="space-y-4 text-sm text-slate-muted">
                    <li className="flex gap-3">
                      <span className="mt-1 text-primary">01</span>
                      <span>Patient books and gets contacted automatically for intake.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 text-primary">02</span>
                      <span>Provider joins the visit with a prepared chart and AI-drafted note.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 text-primary">03</span>
                      <span>Discharge, follow-up, and pharmacy coordination happen automatically.</span>
                    </li>
                  </ul>
                  <div className="mt-6 rounded-2xl border border-primary/10 bg-primary/5 px-4 py-4 text-sm text-slate-muted">
                    Best for independent physicians, small group practices, and telehealth-first clinics that want leverage before hiring more staff.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
