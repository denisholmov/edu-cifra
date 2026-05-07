import styles from "./styles/index.module.css";

export const Connection = () => {
  return (
    <section id="connection" className={styles.connection}>
      <div className={styles.container}>
        <ul className={styles.questions}>
          <li>Остались вопросы?</li>
          <li>Нужна консультация?</li>
          <li>Не нашли решение?</li>
        </ul>

        <h2 className={styles.title}>Свяжитесь с нами!</h2>

        <ul className={styles.contacts}>
          <li>
            <a href="tel:+79956301425" className={styles.contact}>
              +7 (995) 630-14-25
            </a>
          </li>
          <li className={styles.separator}>|</li>
          <li>
            <span className={styles.contact}>baskomplekt@yandex.ru</span>
          </li>
        </ul>
      </div>
    </section>
  );
};