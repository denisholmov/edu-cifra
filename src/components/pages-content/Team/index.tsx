import styles from "./styles/index.module.css";

export const Team = () => {
  return (
    <section id="team" className={styles.team}>
      <div className={styles.container}>
        <h2 className={styles.title}>Команда</h2>
        <ul className={styles.list}>
          <li className={styles.member}>
            <div className={styles.image}>
              <img src="/images/Raf.jpg" alt="Рафаэль Кильметов" />
            </div>
            <h3 className={styles.name}>Рафаэль Кильметов</h3>
            <p className={styles.role}>Генеральный директор</p>
            <p className={styles.description}>10 лет опыта R&D в дроносфере и робототехнике</p>
          </li>
          <li className={styles.member}>
            <div className={styles.image}>
              <img src="/images/Den.jpg" alt="Денис Холмов" />
            </div>
            <h3 className={styles.name}>Денис Холмов</h3>
            <p className={styles.role}>Программист</p>
            <p className={styles.description}>5 лет опыта в разработке цифровых платформ и преподавании</p>
          </li>
          <li className={styles.member}>
            <div className={styles.image}>
              <img src="/images/Anton.jpg" alt="Антон Дойников" />
            </div>
            <h3 className={styles.name}>Антон Дойников</h3>
            <p className={styles.role}>Конструктор</p>
            <p className={styles.description}>5 лет опыта в промышленном проектировании</p>
          </li>
          <li className={styles.member}>
            <div className={styles.image}>
              <img src="/images/Anna.jpg" alt="Анна Холмова" />
            </div>
            <h3 className={styles.name}>Анна Холмова</h3>
            <p className={styles.role}>Методист</p>
            <p className={styles.description}>3 года опыта в разработке образовательных программ</p>
          </li>
        </ul>
      </div>
    </section>
  );
};