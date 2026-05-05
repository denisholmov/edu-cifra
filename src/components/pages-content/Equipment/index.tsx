import styles from "./styles/index.module.css";

export const Equipment = () => {
  return (
    <section id="equipment" className={styles.equipment}>
      <div className={styles.container}>
        <h2 className={styles.title}>Комплектация</h2>
        <ul className={styles.list}>
            <li className={styles.item}>
                <h3 className={styles.itemTitle}>Умная камера</h3>
                <p className={styles.itemDescription}>«Цифра Мини» – система видеозахвата со встроенным вычислительным блоком. Записывает, обрабатывает и передает видеопоток на ПК обучающегося в режиме реального времени.</p>
            </li>
            <li className={styles.item}>
                <h3 className={styles.itemTitle}>Софт</h3>
                <p className={styles.itemDescription}>Настроенное Linux-окружение – готовая к работе инженерная экосистема, позволяющая приступить к программированию проектов сразу «из коробки» без дополнительных настроек.</p>
            </li>
            <li className={styles.item}>
                <h3 className={styles.itemTitle}>Реквизит</h3>
                <p className={styles.itemDescription}>Набор физических объектов для выполнения лабораторных работ: трехмерные разноцветные фигуры (кубы, пирамиды и шары) для трекинга, карточки с QR-кодами и навигационные маркеры ArUco.</p>
            </li>
            <li className={styles.item}>
                <h3 className={styles.itemTitle}>Практикум</h3>
                <p className={styles.itemDescription}>Пошаговое руководство с подробным описанием 
                20 лабораторных работ с объяснением алгоритмов, разбором функций и описанием ожидаемого результата.</p>
            </li>

            <li className={styles.item}>
                <h3 className={styles.itemTitle}>Периферия</h3>
                <p className={styles.itemDescription}>Комплект коммутации, в составе которого – кабель USB Type-C для отладки, кабель Ethernet для настройки локальной сети и прямой трансляции видеопотока на ПК учащегося, штатив для камеры.</p>
            </li>
        </ul>
      </div>
    </section>
  );
};