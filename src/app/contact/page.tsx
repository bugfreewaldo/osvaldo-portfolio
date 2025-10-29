"use client";

import { useState } from "react";
import Script from "next/script";

// Type window.hcaptcha so we don't need ts-ignore
declare global {
  interface Window {
    hcaptcha?: { reset: () => void };
  }
}

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
  e.preventDefault();
  setStatus("sending");
  setError(null);

  const form = e.currentTarget;
  const data = new FormData(form);

  // Create a nicer subject line using the name field
  const rawName = data.get("name");
  const name =
    typeof rawName === "string" && rawName.trim() ? rawName.trim() : "Website contact";
  data.set("_subject", `Portfolio Contact — ${name}`);

  // Require hCaptcha token before submitting
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
      if (typeof window !== "undefined") window.hcaptcha?.reset();
      return;
    }

    // Try to extract a helpful error message from Formspree
    let message = "Something went wrong. Please try again.";
    try {
      const body: unknown = await res.json();
      if (typeof body === "object" && body && "error" in body) {
        const err = (body as { error?: unknown }).error;
        if (typeof err === "string" && err.trim()) message = err;
      }
    } catch {
      /* ignore JSON parse errors */
    }
    setError(message);
    setStatus("error");
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

        {/* Name */}
        <label className="block">
        <span className="text-sm font-medium">Your name</span>
        <input
            type="text"
            name="name"
            required
            placeholder="Jane Doe"
            className="mt-1 w-full rounded-xl ring-1 ring-slate-300 px-3 py-2"
        />
        </label>

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

        {/* hCaptcha widget */}
        <div className="h-captcha mt-2" data-sitekey="6f145462-4a76-4c5a-9de8-fb5c5d4e5cda" />

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-700 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <p className="mt-2 text-xs text-slate-500">Spam protection: honeypot + hCaptcha enabled.</p>
      </form>
    </main>
  );
}
