"use client";

import { useState } from "react";
import { Mail, CheckCircle, Loader2 } from "lucide-react";

interface NewsletterSignupProps {
  locale?: "en" | "es";
}

export default function NewsletterSignup({ locale = "en" }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const isEs = locale === "es";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/xwpkgvjq", {
        method: "POST",
        body: JSON.stringify({ email, _subject: "New Newsletter Subscriber" }),
        headers: { Accept: "application/json", "Content-Type": "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border border-emerald-200 dark:border-emerald-800">
        <div className="flex items-center gap-3">
          <CheckCircle className="w-6 h-6 text-emerald-500" />
          <div>
            <p className="font-semibold text-emerald-700 dark:text-emerald-300">
              {isEs ? "Listo!" : "You're in!"}
            </p>
            <p className="text-sm text-emerald-600 dark:text-emerald-400">
              {isEs
                ? "Te avisaré cuando publique algo nuevo."
                : "I'll let you know when I publish something new."}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-200 dark:border-indigo-800">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500">
          <Mail className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          {isEs ? "No te pierdas nada" : "Don't miss a post"}
        </h3>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
        {isEs
          ? "Artículos sobre IA, ingeniería y las lecciones que aprendo construyendo cosas. Sin spam, lo prometo."
          : "Articles on AI, engineering, and lessons I learn building things. No spam, I promise."}
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={isEs ? "tu@email.com" : "you@email.com"}
          required
          className="flex-1 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="px-5 py-2.5 text-sm font-medium rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 disabled:opacity-50 transition-all shadow-md shadow-indigo-500/20"
        >
          {status === "sending" ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : isEs ? (
            "Suscribirse"
          ) : (
            "Subscribe"
          )}
        </button>
      </form>
      {status === "error" && (
        <p className="mt-2 text-sm text-red-500">
          {isEs ? "Algo salió mal. Intenta de nuevo." : "Something went wrong. Try again."}
        </p>
      )}
    </div>
  );
}
