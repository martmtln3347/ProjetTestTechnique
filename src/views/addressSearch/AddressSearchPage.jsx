import styles from "./AddressSearchPage.module.css";
import { useAddressSearchController } from "../../controllers/useAddressSearchController.js";
import { SearchForm } from "./components/SearchForm.jsx";
import { AddressList } from "./components/AddressList.jsx";
import { Spinner } from "../../shared/ui/Spinner.jsx";
import { ErrorMessage } from "../../shared/ui/ErrorMessage.jsx";

export function AddressSearchPage() {
  const { results, isLoading, errorMessage, search } = useAddressSearchController();

  return (
    <section className={styles.section}>
      <SearchForm onSearch={search} isLoading={isLoading} />

      <div className={styles.results}>
        {errorMessage ? <ErrorMessage title="Oups" message={errorMessage} /> : null}

        {isLoading ? <Spinner /> : null}

        <AddressList items={results} />
      </div>
    </section>
  );
}
