import { BAN_ENDPOINT, DEFAULT_LIMIT } from "../shared/config/constants.js";
import { getJson } from "../shared/api/httpClient.js";

/**
 * Recherche d'adresses via BAN
 * Endpoint: https://api-adresse.data.gouv.fr/search/?q=...&limit=...
 */
export async function searchAddresses(query, { limit = DEFAULT_LIMIT, signal } = {}) {
  const url = new URL(BAN_ENDPOINT);
  url.searchParams.set("q", query);
  url.searchParams.set("limit", String(limit));

  return getJson(url.toString(), { signal });
}
