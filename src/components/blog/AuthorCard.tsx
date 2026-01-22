import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default function AuthorCard() {
  return (
    <div className="mt-12 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
          OR
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-slate-900 dark:text-white">
            Osvaldo Restrepo
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Senior Full Stack AI & Software Engineer. Building production AI
            systems that solve real problems.
          </p>
          <div className="flex items-center gap-3 mt-3">
            <a
              href="https://github.com/bugfreewaldo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/osvaldorestrepo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <Link
              href="/contact"
              className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline ml-auto"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
