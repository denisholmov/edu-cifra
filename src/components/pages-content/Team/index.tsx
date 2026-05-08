import { useEffect, useRef, useState } from "react";
import styles from "./styles/index.module.css";

export const Team = () => {
  const listRef = useRef<HTMLUListElement | null>(null);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (!listRef.current) {
        return;
      }

      setShowControls(listRef.current.scrollWidth > listRef.current.clientWidth + 1);
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  const scrollCards = (direction: "prev" | "next") => {
    if (!listRef.current) {
      return;
    }

    const firstCard = listRef.current.querySelector(`.${styles.member}`) as HTMLElement | null;
    const gap = Number.parseFloat(window.getComputedStyle(listRef.current).gap || "0");
    const step = (firstCard?.getBoundingClientRect().width || listRef.current.clientWidth) + gap;
    const maxScrollLeft = listRef.current.scrollWidth - listRef.current.clientWidth;
    const currentScrollLeft = listRef.current.scrollLeft;

    let targetScrollLeft = currentScrollLeft + (direction === "next" ? step : -step);

    if (direction === "next" && currentScrollLeft >= maxScrollLeft - step / 2) {
      targetScrollLeft = 0;
    }

    if (direction === "prev" && currentScrollLeft <= step / 2) {
      targetScrollLeft = maxScrollLeft;
    }

    listRef.current.scrollTo({
      left: targetScrollLeft,
      behavior: "smooth",
    });
  };

  return (
    <section id="team" className={styles.team}>
      <div className={styles.container}>
        <h2 className={styles.title}>Команда</h2>
        <div className={styles.slider}>
          <ul className={styles.list} ref={listRef}>
            <li className={styles.member}>
              <div className={styles.image}>
                <img src="/images/Raf.jpg" alt="Рафаэль Кильметов" loading="eager" decoding="async" />
              </div>
              <h3 className={styles.name}>Рафаэль Кильметов</h3>
              <p className={styles.role}>Генеральный директор</p>
              <p className={styles.description}>10 лет опыта R&D в дроносфере и робототехнике</p>
            </li>
            <li className={styles.member}>
              <div className={styles.image}>
                <img src="/images/Den.jpg" alt="Денис Холмов" loading="eager" decoding="async" />
              </div>
              <h3 className={styles.name}>Денис Холмов</h3>
              <p className={styles.role}>Программист</p>
              <p className={styles.description}>5 лет опыта в разработке цифровых платформ и преподавании</p>
            </li>
            <li className={styles.member}>
              <div className={styles.image}>
                <img src="/images/Anton.jpg" alt="Антон Дойников" loading="eager" decoding="async" />
              </div>
              <h3 className={styles.name}>Антон Дойников</h3>
              <p className={styles.role}>Конструктор</p>
              <p className={styles.description}>5 лет опыта в промышленном проектировании</p>
            </li>
            <li className={styles.member}>
              <div className={styles.image}>
                <img src="/images/Anna.jpg" alt="Анна Холмова" loading="eager" decoding="async" />
              </div>
              <h3 className={styles.name}>Анна Холмова</h3>
              <p className={styles.role}>Методист</p>
              <p className={styles.description}>3 года опыта в разработке образовательных программ</p>
            </li>
          </ul>

          <div className={`${styles.controls} ${showControls ? styles.controlsVisible : ""}`}>
            <button
              type="button"
              className={styles.controlButton}
              aria-label="Предыдущий участник"
              onClick={() => scrollCards("prev")}
            >
              ←
            </button>
            <button
              type="button"
              className={styles.controlButton}
              aria-label="Следующий участник"
              onClick={() => scrollCards("next")}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};