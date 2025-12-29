import styles from "./AddressList.module.css";
import { AddressItem } from "./AddressItem.jsx";

export function AddressList({ items }) {
  if (!items.length) {
    return (
      <div className={styles.empty}>
        <p>Aucun résultat pour le moment.</p>
        <p className={styles.small}>Tape au moins 3 caractères.</p>
      </div>
    );
  }

  return (
    <ul className={styles.list}>
      {items.map((a) => (
        <AddressItem key={a.id} address={a} />
      ))}
    </ul>
  );
}
