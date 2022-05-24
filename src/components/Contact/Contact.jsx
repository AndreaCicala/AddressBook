import { useDispatch } from "react-redux";

import styles from "./index.module.scss";

function Contact({ contactData }) {
  const dispatch = useDispatch();

  return (
    <div
      className={styles.contactData}
      onClick={() => dispatch({type:'DELETE_CONTACT', payload:contactData.name})}
    >
      <p>
        {contactData.name} {contactData.surname}
      </p>
      <p>{contactData.phone}</p>
    </div>
  );
}

export default Contact;