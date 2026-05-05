import styles from "./styles/index.module.css";

export const Advantages = () => {
  return (
    <section id="advantages" className={styles.advantages}>
      <div className={styles.container}>
        <h2 className={styles.title}>EDUцифра</h2>

        <div className={styles.content}>
            <div className={styles.image}>
                <img src="/images/cifra-mini.png" alt="Обучающий набор" />
            </div>
            <p className={styles.description}>Обучающий набор для получения практических навыков 
интеграции технического зрения в <br /> реальное «железо».</p>
        </div>

        <ul className={styles.list}>
            <li className={styles.item}>
                <div className={styles.icon}>
                    <img src="/images/book.png" alt="Методическое сопровождение" />
                </div>
               <div className={styles.itemContent}>
               <h3>Методическое сопровождение</h3>
               <p>Интересная обучающая программа, поддержка преподавателей и быстрое внедение в учебный процесс.</p>
               </div>
            </li>
            <li className={styles.item}>
                <div className={styles.icon}>
                    <img src="/images/cup.png" alt="Рыночная ценность" />
                </div>
                <div className={styles.itemContent}>
                <h3>Рыночная ценность</h3>
                <p>Привлекательные для молодежи современные технологии с мотивирующим наглядным результатом.</p>
                </div>
            </li>
            <li className={styles.item}>
                <div className={styles.icon}>
                    <img src="/images/tools.png" alt="Востребованный стек" />
                </div>
                <div className={styles.itemContent}>
                <h3>Востребованный стек</h3>
                <p>Обучение строится на мировых индустриальных стандартах – Linux, Python, OpenCV. </p>
                </div>
            </li>
            <li className={styles.item}>
                <div className={styles.icon}>
                    <img src="/images/neurons.png" alt="Готовая образовательная среда" />
                </div>
                <div className={styles.itemContent}>
                <h3>Готовая образовательная среда</h3>
                <p>Система развернута, драйвера установлены, библиотека собрана – студентам осталось только творить.</p>
                </div>
            </li>
        </ul>
      </div>
    </section>
  );
};