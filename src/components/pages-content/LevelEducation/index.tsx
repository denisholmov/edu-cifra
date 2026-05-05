import styles from "./styles/index.module.css";

export const LevelEducation = () => {
  return (
    <section id="level-education" className={styles.levelEducation}>
      <div className={styles.container}>
        <h2 className={styles.title}>Для любого уровня образования</h2>
        <ul className={styles.list}>
            <li className={styles.item}>
                <h3 className={styles.itemTitle}>Вузы и сузы</h3>
                <p className={styles.itemDescription}>Для развития инноватики и инженерной культуры по актуальным направлениям: робототехники и беспилотных систем</p>
            </li>
            <li className={styles.item}>
                <h3 className={styles.itemTitle}>Колледжи и техникумы</h3>
                <p className={styles.itemDescription}>Для получения реальных практических навыков эксплуатации и разработки в дроносфере и роботизированных систем</p></li>
            <li className={styles.item}>
                <h3 className={styles.itemTitle}>Школы</h3>
                <p className={styles.itemDescription}>Для популяризации технических направлений среди школьников и обучения базовым навыкам программирования и работы с нейросетями</p>
            </li>
            <li>
                <h3 className={styles.itemTitle}>Дополнительное образование</h3>
                <p className={styles.itemDescription}>Для формирования интереса к сфере БАС и роботов, развития инженерного мышления и соревновательной культуры</p>
            </li>
        </ul>
      </div>
    </section>
  );
};