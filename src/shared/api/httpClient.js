/**
 * Petit client HTTP basé sur fetch.
 * - gère les erreurs HTTP (statut != 2xx)
 * - supporte AbortController (via signal)
 */
export class HttpError extends Error {
  constructor(message, { status, url }) {
    super(message);
    this.name = "HttpError";
    this.status = status;
    this.url = url;
  }
}

export async function getJson(url, { signal } = {}) {
  const res = await fetch(url, { method: "GET", signal });

  if (!res.ok) {
    throw new HttpError("Erreur HTTP lors de l'appel API", {
      status: res.status,
      url,
    });
  }

  return res.json();
}
