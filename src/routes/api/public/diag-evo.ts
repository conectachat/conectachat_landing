import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/public/diag-evo")({
  server: {
    handlers: {
      GET: async () => {
        const url = process.env.EVOLUTION_API_URL;
        const key = process.env.EVOLUTION_API_KEY;
        const out: any = {
          urlSet: !!url,
          urlHost: url ? (() => { try { return new URL(url).host; } catch { return "INVALID_URL"; } })() : null,
          urlHasTrailingSlash: url ? /\/$/.test(url) : null,
          keySet: !!key,
          keyLen: key?.length ?? 0,
        };
        if (!url || !key) return new Response(JSON.stringify(out), { status: 200 });
        const u = url.replace(/\/+$/, "");
        try {
          const r = await fetch(`${u}/instance/fetchInstances`, { headers: { apikey: key } });
          const txt = await r.text();
          out.fetchInstancesStatus = r.status;
          out.fetchInstancesBody = txt.slice(0, 400);
        } catch (e: any) {
          out.fetchError = String(e?.message || e);
        }
        return new Response(JSON.stringify(out, null, 2), {
          status: 200,
          headers: { "content-type": "application/json" },
        });
      },
    },
  },
});
