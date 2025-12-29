import styles from "./App.module.css";
import { AddressSearchPage } from "../views/addressSearch/AddressSearchPage.jsx";

export function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>Recherche d'adresses</h1>
        <p className={styles.subtitle}>
          API Base Adresse Nationale (BAN) — recherche par ville, rue, code postal…
        </p>
      </header>

      <main className={styles.main}>
        <AddressSearchPage />
      </main>

      <footer className={styles.footer}>
        <span>React + Vite + JavaScript</span>
      </footer>
    </div>
  );
}
