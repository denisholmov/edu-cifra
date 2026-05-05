import styles from "./styles/index.module.css";
export const HeaderUI = () => {
  return (
    <header className={styles.header}>
      <div>
        <img src="./public/images/logo.png" alt="Логотип компании" />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a href="#get-started" className={styles.link}>
              Продукты
            </a>
          </li>
          <li className={styles.item}>
            <a href="#team" className={styles.link}>
              Команда
            </a>
          </li>
          <li className={styles.item}>
            <a href="#contacts" className={styles.link}>
              Контакты
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};