import styles from "./styles/index.module.css";
export const Advantages = () => {
  return (
    <section id="advantages" className={styles.advantages}>
      <div className={styles.container}>
        <h2 className={styles.title}>EDUцифра</h2>

        <div className={styles.content}>
            <div className={styles.image}>
                <img src="./public/images/cifra-mini.png" alt="Обучающий набор" />
            </div>
            <p>Обучающий набор для получения практических навыков 
интеграции технического зрения в реальное «железо».</p>
        </div>

        <ul className={styles.list}>
            <li className={styles.item}>
                <div className={styles.icon}>
                    <img src="./public/images/book.png" alt="Методическое сопровождение" />
                </div>
                <h3>Методическое сопровождение</h3>
                <p>Интересная обучающая программа, поддержка преподавателей и быстрое внедение в учебный процесс.</p>
            </li>
            <li className={styles.item}>
                <div className={styles.icon}>
                    <img src="./public/images/cup.png" alt="Рыночная ценность" />
                </div>
                <h3>Рыночная ценность</h3>
                <p>Привлекательные для молодежи современные технологии с мотивирующим наглядным результатом.</p>
            </li>
            <li className={styles.item}>
                <div className={styles.icon}>
                    <img src="./public/images/tools.png" alt="Востребованный стек" />
                </div>
                <h3>Востребованный стек</h3>
                <p>Обучение строится на мировых индустриальных стандартах – Linux, Python, OpenCV. </p>
            </li>
            <li className={styles.item}>
                <div className={styles.icon}>
                    <img src="./public/images/neurons.png" alt="Готовая образовательная среда" />
                </div>
                <h3>Готовая образовательная среда</h3>
                <p>Система развернута, драйвера установлены, библиотека собрана – студентам осталось только творить.</p>
            </li>
        </ul>
      </div>
    </section>
  );
};