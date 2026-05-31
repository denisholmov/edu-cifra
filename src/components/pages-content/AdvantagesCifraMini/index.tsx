import styles from "./styles/index.module.css";

export const AdvantagesCifraMini = () => {
  return (
    <section id="advantages-cifra-mini" className={styles.advantagesCifraMini}>
      <div className={styles.container}>
        <ul className={styles.list}>
            <li className={styles.item}>
                <div className={styles.icon}>
                    <img src="/images/vision.png" alt="Техническое зрение" loading="lazy" decoding="async" />
                </div>
               <div className={styles.itemContent}>
               <h3>Техническое зрение</h3>
               <p>Решение задач компьютерного зрения и автономной навигации с помощью определения объектов, цветов и  меток. </p>
               </div>
            </li>
            <li className={styles.item}>
                <div className={styles.icon}>
                    <img src="/images/setting.png" alt="Открытость и SDK" loading="lazy" decoding="async" />
                </div>
                <div className={styles.itemContent}>
                <h3>Открытость и SDK</h3>
                <p>Интеграция камеры в любую платформу: БАС, робот и даже станок, с инструментарием для разработчика.</p>
                </div>
            </li>
            <li className={styles.item}>
                <div className={styles.icon}>
                    <img src="/images/feather.png" alt="Миниатюрность и легкость" loading="lazy" decoding="async" />
                </div>
                <div className={styles.itemContent}>
                <h3>Миниатюрность и легкость</h3>
                <p>Предоставление максимума 
                возможностей камеры с техническим зрением в корпусе размером с мандарин.</p>
                </div>
            </li>
            <li className={styles.item}>
                <div className={styles.icon}>
                    <img src="/images/frame.png" alt="Качественная картинка" loading="lazy" decoding="async" />
                </div>
                <div className={styles.itemContent}>
                <h3>Качественная картинка</h3>
                <p>Съемка видео с разрешением 2К и передача изображения в реальном времени через Ethernet.</p>
                </div>
            </li>
        </ul>
      </div>
    </section>
  );
};