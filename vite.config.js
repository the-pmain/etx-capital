import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const root = path.dirname(fileURLToPath(import.meta.url));

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8").replace(/^\uFEFF/, "")));
    req.on("error", reject);
  });
}

function leadApiPlugin() {
  const handler = async (req, res, next) => {
    const url = req.url?.split("?")[0];
    if (url !== "/api/lead" || req.method !== "POST") return next();

    let body = {};
    try {
      const raw = await readBody(req);
      body = JSON.parse(raw || "{}");
    } catch {
      res.statusCode = 422;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ ok: false, error: "validation_failed" }));
      return;
    }

    if (!String(body.name || "").trim() || !String(body.phone || "").trim()) {
      res.statusCode = 422;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ ok: false, error: "validation_failed" }));
      return;
    }

    console.info("[lead]", {
      name: body.name,
      phone: body.phone,
      email: body.email,
      purpose: body.purpose,
      experience: body.experience,
      languages: body.languages,
      preferredTime: body.preferredTime,
      consentVersion: body.consentVersion,
      consentAcceptedAt: body.consentAcceptedAt,
      sourceIp: req.socket.remoteAddress,
      locale: body.locale,
      page: body.page,
    });

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ ok: true }));
  };

  return {
    name: "etx-lead-api",
    configureServer(server) {
      server.middlewares.stack.unshift({ route: "", handle: handler });
    },
    configurePreviewServer(server) {
      server.middlewares.stack.unshift({ route: "", handle: handler });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), leadApiPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(root, "src"),
    },
  },
  server: {
    port: 5173,
    open: false,
  },
});
