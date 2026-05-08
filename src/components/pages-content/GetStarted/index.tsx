import styles from "./styles/index.module.css";

export const GetStarted = () => {
  return (
    <section id="get-started" className={styles.getStarted}>
        <div className={styles.container}>
          <div className={styles.content}>
              <h1 className={styles.title}>Цифровые камеры</h1>
              <p className={styles.description}>Отечественный разработчик камер с техническим зрением для дроносферы и робототехники, а также обучающих наборов.</p>
              <ul className={styles.buttons}>
                  <li><a className={styles.button} href="#connection">Связаться с нами</a></li>
                  <li><a className={`${styles.button} ${styles.buttonTransparent}`} href="#advantages">Узнать больше</a></li>
              </ul>
          </div>

          <div className={styles.image}>
              <img src="/images/emblem.png" alt="Эмблема компании" loading="eager" fetchPriority="high" />
          </div>
        </div>
    </section>
  );
};