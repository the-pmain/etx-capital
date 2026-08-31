export async function submitLead(payload) {
  const endpoint = import.meta.env.VITE_LEAD_ENDPOINT || "/api/lead";

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await response.json().catch(() => null);

    if (response.ok && data?.ok === true) return { ok: true };
    if (response.status === 429 || data?.error === "rate_limited") {
      return { ok: false, error: "rate_limited" };
    }
    if (response.status === 503 || data?.error === "not_configured") {
      return { ok: false, error: "not_configured" };
    }
    if (response.status === 422 || data?.error === "validation_failed") {
      return { ok: false, error: "validation" };
    }
    return { ok: false, error: "delivery_failed" };
  } catch {
    return { ok: false, error: "network" };
  }
}
