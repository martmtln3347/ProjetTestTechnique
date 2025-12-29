import { useEffect, useMemo, useState } from "react";
import styles from "./SearchForm.module.css";
import { debounce } from "../../../shared/utils/debounce.js";

export function SearchForm({ onSearch, isLoading }) {
  const [query, setQuery] = useState("");

  const debouncedSearch = useMemo(() => debounce(onSearch, 350), [onSearch]);

  useEffect(() => {
    // Recherche "au fil de la frappe" (debounce), plus confortable.
    debouncedSearch(query);
  }, [query, debouncedSearch]);

  function onSubmit(e) {
    e.preventDefault();
    onSearch(query);
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label className={styles.label} htmlFor="q">
        Recherche
      </label>

      <div className={styles.row}>
        <input
          id="q"
          name="q"
          className={styles.input}
          value={query}
          placeholder="Ex: Bordeaux, 33000, 10 rue de la paix…"
          onChange={(e) => setQuery(e.target.value)}
          autoComplete="off"
        />
        <button className={styles.button} type="submit" disabled={isLoading}>
          {isLoading ? "…" : "Chercher"}
        </button>
      </div>

      <p className={styles.hint}>
        Astuce : la recherche se met aussi à jour automatiquement pendant la saisie.
      </p>
    </form>
  );
}
