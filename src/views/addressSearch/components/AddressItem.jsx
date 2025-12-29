import styles from "./AddressItem.module.css";

export function AddressItem({ address }) {
  return (
    <li className={styles.item}>
      <div className={styles.main}>{address.label}</div>
      <div className={styles.meta}>
        <span>{address.postcode}</span>
        <span aria-hidden="true">•</span>
        <span>{address.city}</span>
        {address.score != null ? (
          <>
            <span aria-hidden="true">•</span>
            <span>score {address.score.toFixed(2)}</span>
          </>
        ) : null}
      </div>
    </li>
  );
}
