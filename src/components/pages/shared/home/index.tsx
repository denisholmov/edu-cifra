import { useEffect, useState } from "react";
import { AppHeader } from "@/components/features/AppHeader";

import { GetStarted } from "@/components/pages-content/GetStarted";
import { Advantages } from "@/components/pages-content/Advantages";
import { LevelEducation } from "@/components/pages-content/LevelEducation";
import { Equipment } from "@/components/pages-content/Equipment";
import { ContentWorkshop } from "@/components/pages-content/ContentWorkshop";



import styles from "./styles/index.module.css";
import { Demo } from "@/components/pages-content/Demo";
import { CifraMini } from "@/components/pages-content/CifraMini";
import { AdvantagesCifraMini } from "@/components/pages-content/AdvantagesCifraMini";
import { Characteristics } from "@/components/pages-content/Characteristics";
import { Development } from "@/components/pages-content/Development";
import { Connection } from "@/components/pages-content/Connection";
import { Team } from "@/components/pages-content/Team";
import { Footer } from "@/components/pages-content/Footer";


export const HomePage = () => {
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const firstBlock = document.getElementById("get-started");
      const triggerPoint = firstBlock
        ? firstBlock.offsetTop + firstBlock.offsetHeight
        : window.innerHeight;

      setIsScrollTopVisible(window.scrollY > triggerPoint);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.wrapper}>
      <AppHeader />
      <main className={styles.main}>
          <GetStarted />
          <Advantages />
          <LevelEducation />
          <Equipment />
          <ContentWorkshop />
          <Demo />
          <CifraMini />
          <AdvantagesCifraMini/>
          <Characteristics />
          <Development />
          <Connection />
          <Team />
      </main>
      <Footer />
      <button
        type="button"
        className={`${styles.scrollTopButton} ${isScrollTopVisible ? styles.scrollTopButtonVisible : ""}`}
        onClick={handleScrollTop}
        aria-label="Прокрутить наверх"
      >
        <img src="/images/arrow.png" alt="" />
      </button>
    </div>
  );
};