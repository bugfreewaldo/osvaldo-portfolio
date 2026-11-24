// Ping IndexNow (Bing, Yandex, Seznam, Naver…) with every URL in the live sitemap.
// Bing's index feeds ChatGPT search and Copilot. Run after a deploy:
//   node scripts/indexnow.mjs
import fs from "node:fs";

const HOST = "www.osvaldorestrepo.dev";
const key = fs.readdirSync("public").find((f) => /^[0-9a-f]{32}\.txt$/.test(f))?.replace(".txt", "");
if (!key) throw new Error("IndexNow key file missing in /public");

const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const res = await fetch("https://www.bing.com/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key, keyLocation: `https://${HOST}/${key}.txt`, urlList }),
});
console.log(`IndexNow: submitted ${urlList.length} URLs → HTTP ${res.status}`);
