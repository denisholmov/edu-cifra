import styles from "./styles/index.module.css";

export const Development = () => {
    return (
        <section id="development" className={styles.development}>
            <div className={styles.container}>
                <h2 className={styles.title}>В разработке</h2>

                <div className={styles.products}>
                        <div className={styles.product}>
                            <div className={styles.productImage}>
                                <img src="/images/cifra-midi.png" alt="Цифра Миди" loading="lazy" decoding="async" />
                            </div>
                            <h3 className={styles.productTitle}>Цифра Миди</h3>
                            <p className={styles.productDescription}>Продвинутая модель на базе Цифры Мини со вторым камерным блоком с большим фокусным расстоянием и возможностью переключения между ними. А также с новым вычислительным блоком и гиростабилизированным подвесом.</p>
                        </div>
                        <div className={styles.product}>
                            <div className={styles.productImage}>
                                <img src="/images/cifra-max.png" alt="Цифра Макс" loading="lazy" decoding="async" />
                            </div>
                            <h3 className={styles.productTitle}>Цифра Макс</h3>
                            <p className={styles.productDescription}>Профессиональная модель на базе Цифры Миди с тепловизионным камерным блоком, возможностью переключения между ними и одновременной записью с двух блоков. А также с мощным вычислительным блоком.</p>
                        </div>
                </div>
            </div>
        </section>
    );
};