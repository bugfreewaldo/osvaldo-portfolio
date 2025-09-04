export default function robots() {
  const base = "http://localhost:3000"; // change to your real domain after deploy

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
