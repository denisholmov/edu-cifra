import styles from "./styles/index.module.css";

export const CifraMini = () => {
    return (
        <section id="cifra-mini" className={styles.cifraMini}>
            <div className={styles.container}>
                <h2 className={styles.title}>Цифра Мини</h2>
                <div className={styles.content}>
                    <p className={styles.description}>Базовая модель камеры предназначена для решения задач видеозахвата и обработки цифрового изображения.</p>

                    <div className={styles.image}>
                        <img src="/images/cifra-mini-2.png" alt="CifraMini" />
                    </div>  
                </div>
            </div>
        </section>
    )
}