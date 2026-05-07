import styles from "./styles/index.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainRow}>
          <div className={styles.brandBlock}>
            <div className={styles.brand}><img src="/images/logo.png" alt="Логотип компании" /></div>
            <p className={styles.description}>
              Отечественный разработчик цифровых камер
              <br />
              для БАС и робототехники
            </p>

            <a className={styles.contactLink} href="tel:+79956301425">
              +7 (995) 630-14-25
            </a>
            <a className={styles.contactLink} href="mailto:baskomplekt@yandex.ru">
              baskomplekt@yandex.ru
            </a>

            <div className={styles.socials}>
              <a className={styles.social} href="https://t.me/BASkomplekt" aria-label="Telegram">
                <img src="/images/telegram.png" alt="Telegram" />
              </a>
              <a className={styles.social} href="https://vk.com/baskomplekt" aria-label="VK">
                <img src="/images/vk.png" alt="VK" />
              </a>
              <a className={styles.social} href="https://dzen.ru/baskomplekt" aria-label="Dzen">
                <img src="/images/yandex.png" alt="Dzen" />
              </a>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.list}>
              <a className={styles.item} href="#get-started">
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