import { useCallback, useRef, useState } from "react";
import { MIN_QUERY_LENGTH } from "../shared/config/constants.js";
import { searchAddresses } from "../services/banAddressService.js";
import { normalizeAddress } from "../models/address/normalizeAddress.js";

function getFriendlyErrorMessage(err) {
  if (err?.name === "AbortError") return null;
  if (err?.name === "HttpError") return "L'API a répondu avec une erreur. Réessaye.";
  return "Impossible de contacter l'API (réseau ?). Réessaye.";
}

/**
 * Controller (hook) : gère l'état et l'orchestration API pour la recherche BAN.
 */
export function useAddressSearchController() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const abortRef = useRef(null);

  const search = useCallback(async (query) => {
    const trimmed = query.trim();
    setErrorMessage(null);

    if (trimmed.length < MIN_QUERY_LENGTH) {
      setResults([]);
      return;
    }

    // Annule la requête précédente (évite les "races" si l'utilisateur tape vite)
    if (abortRef.current) abortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setIsLoading(true);

    try {
      const data = await searchAddresses(trimmed, { signal: controller.signal });
      const features = Array.isArray(data?.features) ? data.features : [];
      setResults(features.map(normalizeAddress));
    } catch (err) {
      const msg = getFriendlyErrorMessage(err);
      if (msg) setErrorMessage(msg);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    if (abortRef.current) abortRef.current.abort();
    setResults([]);
    setErrorMessage(null);
    setIsLoading(false);
  }, []);

  return { results, isLoading, errorMessage, search, reset };
}
