"use client";

import { useState } from "react";
import Script from "next/script";
import { motion } from "framer-motion";
import { Mail, Send, User, MessageSquare, Sparkles, CheckCircle, ArrowRight, Github, Linkedin, Instagram } from "lucide-react";

// Type window.hcaptcha so we don't need ts-ignore
declare global {
  interface Window {
    hcaptcha?: { reset: () => void };
  }
}

// Animated background grid
function GridBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
    </div>
  );
}

// Contact methods data
const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "me@osvaldorestrepo.dev",
    href: "mailto:me@osvaldorestrepo.dev",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "osvaldorestrepo",
    href: "https://linkedin.com/in/osvaldorestrepo",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "bugfreewaldo",
    href: "https://github.com/bugfreewaldo",
    gradient: "from-slate-600 to-slate-800",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@waldos.code.lab",
    href: "https://www.instagram.com/waldos.code.lab/",
    gradient: "from-pink-500 to-orange-500",
  },
];

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
      <main className="relative min-h-screen">
        <GridBackground />
        <div className="max-w-xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex p-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 mb-6"
            >
              <CheckCircle className="w-12 h-12 text-white" />
            </motion.div>

            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Message Sent!
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mt-3 text-lg">
              Thanks for reaching out. I&apos;ll get back to you as soon as possible.
            </p>

            <motion.button
              onClick={() => setStatus("idle")}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/25"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send another message
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen">
      <GridBackground />

      {/* hCaptcha script */}
      <Script src="https://hcaptcha.com/1/api.js" async defer />

      {/* Header */}
      <section className="relative pt-16 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
              Get in Touch
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-slate-900 dark:text-white">Let&apos;s </span>
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Connect
            </span>
          </motion.h1>

          <motion.p
            className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have a project in mind? Want to discuss AI solutions for your business?
            Drop me a message and I&apos;ll get back to you promptly.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods + Form Grid */}
      <section className="relative px-4 pb-16">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-5 gap-8">
          {/* Contact Methods Sidebar */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Other ways to connect
            </h2>
            {contactMethods.map((method, i) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.href.startsWith("mailto") ? undefined : "_blank"}
                rel={method.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="group flex items-center gap-4 p-4 rounded-xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${method.gradient}`}>
                  <method.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{method.label}</p>
                  <p className="font-medium text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {method.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="mt-6 p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-green-700 dark:text-green-400">
                  Available for new projects
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Currently accepting freelance and contract work.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                  Send a Message
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    <span className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Your name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    <span className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Your email
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    <span className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Message
                    </span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project, idea, or just say hi..."
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Honeypot (spam trap) */}
                <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />

                {/* Optional subject */}
                <input type="hidden" name="_subject" value="Portfolio Contact" />

                {/* hCaptcha widget */}
                <div className="h-captcha" data-sitekey="6f145462-4a76-4c5a-9de8-fb5c5d4e5cda" data-theme="light" />

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-500 hover:to-purple-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-lg shadow-indigo-500/25"
                  whileHover={{ scale: status === "sending" ? 1 : 1.01 }}
                  whileTap={{ scale: status === "sending" ? 1 : 0.99 }}
                >
                  {status === "sending" ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Error message */}
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg"
                  >
                    {error}
                  </motion.p>
                )}

                {/* Security note */}
                <p className="text-xs text-slate-500 text-center">
                  Protected by hCaptcha. Your data is secure.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
