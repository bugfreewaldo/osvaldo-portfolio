export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main className="max-w-xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-slate-600 mt-2">
        The fastest way to reach me is email. I’m open to full-time remote roles and select consulting.
      </p>

      <div className="mt-6 space-y-3">
        <a
          href="mailto:bugfreewaldo@gmail.com"
          className="inline-block w-full text-center px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-700"
        >
          Email me
        </a>

        <a
          href="https://www.linkedin.com/in/osvaldorestrepo/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full text-center px-4 py-2 rounded-xl ring-1 ring-slate-300 hover:bg-slate-100"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/bugfreewaldo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full text-center px-4 py-2 rounded-xl ring-1 ring-slate-300 hover:bg-slate-100"
        >
          GitHub
        </a>
      </div>

      <p className="mt-6 text-sm text-slate-500">
        Or copy my address: <span className="font-mono">bugfreewaldo@gmail.com</span>
      </p>
    </main>
  );
}
