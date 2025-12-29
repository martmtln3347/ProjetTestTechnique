/**
 * Transforme un item "feature" (GeoJSON) de la BAN en un objet "Adresse" simple.
 * Doc BAN: https://api-adresse.data.gouv.fr/
 */
export function normalizeAddress(feature) {
  const p = feature?.properties ?? {};
  return {
    id: feature?.properties?.id ?? feature?.id ?? crypto.randomUUID(),
    label: p.label ?? "",
    city: p.city ?? "",
    postcode: p.postcode ?? "",
    context: p.context ?? "",
    type: p.type ?? "",
    score: typeof p.score === "number" ? p.score : null,
  };
}
