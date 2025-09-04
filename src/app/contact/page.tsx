"use client";

import { useState } from "react";
import Script from "next/script";

// Tell TypeScript that window.hcaptcha can exist
declare global {
  interface Window {
    hcaptcha?: { reset: () => void };
  }
}

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Require captcha token before submitting
    const token = data.get("h-captcha-response");
    if (!token) {
      setStatus("idle");
      setError("Please complete the captcha.");
      return;
    }

    try {
      const res = await fetch("https://formspree.io/f/mzzakedj", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
        // Safely reset the hCaptcha widget if present (no ts-ignore needed)
        if (typeof window !== "undefined") {
          window.hcaptcha?.reset();
        }
      } else {
        const body = await res.json().catch(() => ({} as any));
        setError((body as any)?.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setError("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <main className="max-w-xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold">Thanks!</h1>
        <p className="text-slate-600 mt-2">Your message was sent. I’ll reply to you soon.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 px-4 py-2 rounded-xl ring-1 ring-slate-300 hover:bg-slate-100"
        >
          Send another message
        </button>
      </main>
    );
  }

  return (
    <main className="max-w-xl mx-auto px-4 py-12">
      {/* hCaptcha script */}
      <Script src="https://hcaptcha.com/1/api.js" async defer />

      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-slate-600 mt-2">Send me a message. I’ll get an email instantly.</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        {/* Email */}
        <label className="block">
          <span className="text-sm font-medium">Your email</span>
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="mt-1 w-full rounded-xl ring-1 ring-slate-300 px-3 py-2"
          />
        </label>

        {/* Message */}
        <label className="block">
          <span className="text-sm font-medium">Message</span>
          <textarea
            name="message"
            required
            rows={6}
            placeholder="How can I help?"
            className="mt-1 w-full rounded-xl ring-1 ring-slate-300 px-3 py-2"
          />
        </label>

        {/* Honeypot (spam trap) */}
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />

        {/* Optional subject */}
        <input type="hidden" name="_subject" value="Portfolio Contact" />

        {/* hCaptcha widget (use your real Site Key) */}
        <div className="h-captcha mt-2" data-sitekey="YOUR_HCAPTCHA_SITE_KEY_HERE" />

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full px-4 py-2 rounded-xl bg-sla
