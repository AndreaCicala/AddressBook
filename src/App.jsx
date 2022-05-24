import AddContact from "./components/AddContact";
import ContactsList from "./components/ContactList/ContactList";
import FilterList from "./components/FilterList/Filter";
import styles from "./App.module.scss";

function App() {

  return (
    <div className={styles.App}>
      <AddContact />
      <FilterList />
      <ContactsList />
    </div>
  );
}



export default App;