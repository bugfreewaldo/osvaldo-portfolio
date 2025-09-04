export default function robots() {
  const base = "https://osvaldorestrepo.dev"; // change to your real domain after deploy

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
