import styles from "./ErrorMessage.module.css";

export function ErrorMessage({ title = "Erreur", message, onRetry }) {
  return (
    <div className={styles.box} role="alert">
      <div className={styles.head}>
        <strong>{title}</strong>
        {onRetry ? (
          <button className={styles.retry} type="button" onClick={onRetry}>
            Réessayer
          </button>
        ) : null}
      </div>
      {message ? <p className={styles.msg}>{message}</p> : null}
    </div>
  );
}
