import styles from "./styles/index.module.css";

export const GetStarted = () => {
  return (
    <section id="get-started" className={styles.getStarted}>
        <div className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Цифровые камеры</h1>
            <p className={styles.description}>Отечественный разработчик камер с техническим зрением для дроносферы и робототехники, а также обучающих наборов.</p>
            <ul className={styles.buttons}>
                <li><button className={styles.button}>Связаться с нами</button></li>
                <li><button className={styles.button}>Узнать больше</button></li>
            </ul>
        </div>

        <div className={styles.img}>
            <img src="./public/images/get-started.png" alt="Эмблема компании" />
        </div>
        </div>
    </section>
  );
};