import Image from "next/image";
import Link from "next/link";
import { AlertCircle, Info, Lightbulb, AlertTriangle } from "lucide-react";

interface CalloutProps {
  type?: "info" | "warning" | "tip" | "danger";
  title?: string;
  children: React.ReactNode;
}

function Callout({ type = "info", title, children }: CalloutProps) {
  const styles = {
    info: {
      wrapper: "bg-blue-50 dark:bg-blue-950/50 border-l-4 border-blue-500",
      icon: Info,
      iconColor: "text-blue-600 dark:text-blue-400",
      title: "text-blue-900 dark:text-blue-100",
      text: "text-blue-800 dark:text-blue-200",
    },
    warning: {
      wrapper: "bg-amber-50 dark:bg-amber-950/50 border-l-4 border-amber-500",
      icon: AlertTriangle,
      iconColor: "text-amber-600 dark:text-amber-400",
      title: "text-amber-900 dark:text-amber-100",
      text: "text-amber-800 dark:text-amber-200",
    },
    tip: {
      wrapper: "bg-emerald-50 dark:bg-emerald-950/50 border-l-4 border-emerald-500",
      icon: Lightbulb,
      iconColor: "text-emerald-600 dark:text-emerald-400",
      title: "text-emerald-900 dark:text-emerald-100",
      text: "text-emerald-800 dark:text-emerald-200",
    },
    danger: {
      wrapper: "bg-red-50 dark:bg-red-950/50 border-l-4 border-red-500",
      icon: AlertCircle,
      iconColor: "text-red-600 dark:text-red-400",
      title: "text-red-900 dark:text-red-100",
      text: "text-red-800 dark:text-red-200",
    },
  };

  const style = styles[type];
  const Icon = style.icon;

  return (
    <div className={`my-6 p-4 rounded-r-lg ${style.wrapper}`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 mt-0.5 ${style.iconColor} flex-shrink-0`} />
        <div className="flex-1 min-w-0">
          {title && (
            <p className={`font-semibold ${style.title} mb-1 text-sm uppercase tracking-wide`}>
              {title}
            </p>
          )}
          <div className={`${style.text} text-sm leading-relaxed [&>p]:m-0 [&>p:not(:last-child)]:mb-2`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function MDXImage({
  src,
  alt,
  caption,
  ...props
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="my-8">
      <Image
        src={src}
        alt={alt}
        width={800}
        height={450}
        className="rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm"
        {...props}
      />
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-slate-500 dark:text-slate-400 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function YouTube({ id }: { id: string }) {
  return (
    <div className="my-8 relative aspect-video rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}

function LinkCard({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="block my-6 p-5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 bg-white dark:bg-slate-900/50 hover:shadow-md transition-all duration-200 group no-underline"
    >
      <p className="font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors m-0">
        {title}
      </p>
      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1.5 m-0 leading-relaxed">
        {description}
      </p>
    </Link>
  );
}

// Table components with proper styling
function Table({ children, ...props }: React.HTMLAttributes<HTMLTableElement>) {
  return (
    <div className="my-6 overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
      <table className="w-full text-sm" {...props}>
        {children}
      </table>
    </div>
  );
}

function TableHead({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead className="bg-slate-50 dark:bg-slate-800/50" {...props}>
      {children}
    </thead>
  );
}

function TableBody({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <tbody className="divide-y divide-slate-200 dark:divide-slate-700" {...props}>
      {children}
    </tbody>
  );
}

function TableRow({ children, ...props }: React.HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors" {...props}>
      {children}
    </tr>
  );
}

function TableHeader({ children, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700"
      {...props}
    >
      {children}
    </th>
  );
}

function TableCell({ children, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td className="px-4 py-3 text-slate-700 dark:text-slate-300" {...props}>
      {children}
    </td>
  );
}

export const mdxComponents = {
  Callout,
  Image: MDXImage,
  YouTube,
  LinkCard,
  // Table components
  table: Table,
  thead: TableHead,
  tbody: TableBody,
  tr: TableRow,
  th: TableHeader,
  td: TableCell,
  a: ({
    href,
    children,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isExternal = href?.startsWith("http");
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href || "#"} {...props}>
        {children}
      </Link>
    );
  },
};
