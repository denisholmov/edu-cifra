import styles from "./styles/index.module.css";

export const Characteristics = () => {
  return (
    <section id="characteristics" className={styles.characteristics}>
        <div className={styles.container}>
            <h2 className={styles.title}>Характеристики*</h2>

            <ul className={styles.list}>
                <li className={styles.item}>
                    <h3 className={styles.itemTitle}>Напряжение питания</h3>
                    <p className={styles.itemDescription}>5 В</p>
                </li>
                <li className={styles.item}>
                    <h3 className={styles.itemTitle}>Потребляемая мощность</h3>
                    <p className={styles.itemDescription}>≤1,5 Вт</p>
                </li>
                <li className={styles.item}>
                    <h3 className={styles.itemTitle}>Интерфейсы</h3>
                    <p className={styles.itemDescription}>Ethernet, UART, I2C</p>
                </li>
                <li className={styles.item}>
                    <h3 className={styles.itemTitle}>Разрешение</h3>
                    <p className={styles.itemDescription}>2304×1296</p>
                </li>
                <li className={styles.item}>
                    <h3 className={styles.itemTitle}>Частота кадров</h3>
                    <p className={styles.itemDescription}>30 fps</p>
                </li>
                <li className={styles.item}>
                    <h3 className={styles.itemTitle}>Сенсор</h3>
                    <p className={styles.itemDescription}>CMOS 1/2.8", 3 МП</p>
                </li>
                <li className={styles.item}>
                    <h3 className={styles.itemTitle}>Центральный процессор</h3>
                    <p className={styles.itemDescription}>Cortex-A7, 1.2GHz</p>
                </li>
                <li className={styles.item}>
                    <h3 className={styles.itemTitle}>Нейропроцессор</h3>
                    <p className={styles.itemDescription}>0,5 TOPS</p>
                </li>
                <li className={styles.item}>
                    <h3 className={styles.itemTitle}>Объем встроенной памяти</h3>
                    <p className={styles.itemDescription}>32 ГБ</p>
                </li>
                <li className={styles.item}>
                    <h3 className={styles.itemTitle}>Масса</h3>
                    <p className={styles.itemDescription}>25 г</p>
                </li>
                <li className={styles.item}>
                    <h3 className={styles.itemTitle}>Габариты</h3>
                    <p className={styles.itemDescription}>45*35*35 мм</p>
                </li>
                <li className={styles.item}>
                    <h3 className={styles.itemTitle}>Температурный диапазон</h3>
                    <p className={styles.itemDescription}>-10…+40 °C</p>
                </li>
            </ul>

            <p className={styles.description}>* Данные уточняются. Свяжитесь  с нами, чтобы узнать актуальную информацию!</p>
        </div>
    </section>
  );
};  