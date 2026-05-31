import styles from "./styles/index.module.css";
export const HeaderUI = () => {
  return (
    <header className={styles.header}>
     <div className={styles.container}>
     <div className={styles.logo}>
        <img src="/images/logo.png" alt="БАСкомплект — логотип" />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a href="#cifra-mini" className={styles.link}>
              Продукты
            </a>
          </li>
          <li className={styles.item}>
            <a href="#team" className={styles.link}>
              Команда
            </a>
          </li>
          <li className={styles.item}>
            <a href="#connection" className={styles.link}>
              Контакты
            </a>
          </li>
        </ul>
      </nav>
     </div>
    </header>
  );
};