import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

function NavBar() {
  return (
    <>
      <li className={styles.listItem}>
        <a href='https://digital-lawyers.ru/how-it-was/'
          className={styles.link}
        >
          Как это было
        </a>
      </li>
      <li className={styles.listItem}>
        {" "}
        <a 
        href='https://digital-lawyers.ru/nominations/'
          className={styles.link}
        >
          Номинации
        </a>
      </li>
      <li className={styles.listItem}>
        {" "}
        <a
        href='https://digital-lawyers.ru/narodnoe-golosovanie/'
          className={styles.link}
        >
          Народное голосование
        </a>
      </li>
      <li className={styles.listItem}>
        {" "}
        <a href='https://digital-lawyers.ru/category/news/'
          className={styles.link}
        >
          Новости
        </a>
      </li>
      <li className={styles.listItem}>
        {" "}
        <a
        href='https://digital-lawyers.ru/partners/'
          className={styles.link}
        >
          Наши партнеры
        </a>
      </li>
    </>
  );
}

export default NavBar;
