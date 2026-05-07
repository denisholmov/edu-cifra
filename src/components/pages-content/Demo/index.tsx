import styles from "./styles/index.module.css";

export const Demo = () => {
    return (
        <section id="demo" className={styles.demo}>
            <div className={styles.container}>
                <p className={styles.title}>Практикум научит применять  алгоритмы для детекции объектов, писать оптимизированный код для устройств с ограниченными вычислительными ресурсами, а также применять нейросети в практических задачах.</p>
                <button className={styles.button}>Получить <br />
                демонстрационный урок</button>
            </div>
        </section>
    )
}