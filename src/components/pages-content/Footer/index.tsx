import styles from "./styles/index.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainRow}>
          <div className={styles.brandBlock}>
            <div className={styles.brand}><img src="/images/logo.png" alt="Логотип компании" loading="lazy" decoding="async" /></div>
            <p className={styles.description}>
              Отечественный разработчик цифровых камер
              <br />
              для БАС и робототехники
            </p>

            <p className={styles.contactLink}>
              +7 (995) 630-14-25
            </p>
            <p className={styles.contactLink}>
              baskomplekt@yandex.ru
            </p>

            <div className={styles.socials}>
              <a className={styles.social} href="https://t.me/BASkomplekt" aria-label="Telegram">
                <img src="/images/telegram.png" alt="Telegram" loading="lazy" decoding="async" />
              </a>
              <a className={styles.social} href="https://vk.com/baskomplekt" aria-label="VK">
                <img src="/images/vk.png" alt="VK" loading="lazy" decoding="async" />
              </a>
              <a className={styles.social} href="https://dzen.ru/baskomplekt" aria-label="Dzen">
                <img src="/images/yandex.png" alt="Dzen" loading="lazy" decoding="async" />
              </a>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.list}>
              <a className={styles.item} href="#cifra-mini">
                Продукты
              </a>
              <a className={styles.item} href="#team">
                Команда
              </a>
              <a className={styles.item} href="#connection">
                Контакты
              </a>
            </div>

            {/* <div className={styles.copyright}>
              <a className={styles.policy} href="#">
                Политика обработки персональных данных
              </a>
              <span className={styles.copy}>© Все права защищены</span>
            </div> */}
          </div>
        </div>

       
      </div>
    </footer>
  );
};