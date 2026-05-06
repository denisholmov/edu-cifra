import { AppHeader } from "@/components/features/AppHeader";

import { GetStarted } from "@/components/pages-content/GetStarted";
import { Advantages } from "@/components/pages-content/Advantages";
import { LevelEducation } from "@/components/pages-content/LevelEducation";
import { Equipment } from "@/components/pages-content/Equipment";
import { ContentWorkshop } from "@/components/pages-content/ContentWorkshop";


import styles from "./styles/index.module.css";
import { Demo } from "@/components/pages-content/Demo";


export const HomePage = () => {
 

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
      </main>
    </div>
  );
};