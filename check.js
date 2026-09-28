#!/usr/bin/env node
/**
 * Nazha Free Lavalink — live health check
 * Usage: node check.js
 */
const https = require("https");

const NODES = [
  { id: "sg-1", host: "sg-1.nazha.online", auth: "https://discord.gg/XeSCnk57ZF" },
  { id: "sg-2", host: "sg-2.nazha.online", auth: "https://discord.gg/XeSCnk57ZF" },
  { id: "sg-3", host: "sg-3.nazha.online", auth: "https://discord.gg/XeSCnk57ZF" },
  { id: "main", host: "lavalink.nazha.online", auth: "nazhafreelava" },
];

function check(node) {
  return new Promise((resolve) => {
    const req = https.request(
      {
        hostname: node.host,
        path: "/v4/info",
        method: "GET",
        headers: { Authorization: node.auth, "User-Agent": "nazha-check" },
        timeout: 10000,
      },
      (res) => {
        let body = "";
        res.on("data", (d) => (body += d));
        res.on("end", () => {
          let info = {};
          try { info = JSON.parse(body); } catch {}
          resolve(
            `${res.statusCode === 200 ? "🟢" : "🔴"} ${node.id.padEnd(6)}` +
            ` ${res.statusCode}  v${info.version?.semver ?? "?"}  ${info.sourceManagers?.length ?? 0} sources  (${node.host})`
          );
        });
      }
    );
    req.on("error", () => resolve(`🔴 ${node.id.padEnd(6)} ERR (${node.host})`));
    req.on("timeout", () => { req.destroy(); resolve(`🔴 ${node.id.padEnd(6)} TIMEOUT (${node.host})`); });
    req.end();
  });
}

(async () => {
  console.log("\n  Nazha Free Lavalink — node health\n");
  const results = await Promise.all(NODES.map(check));
  results.forEach((r) => console.log("  " + r));
  console.log("");
})();