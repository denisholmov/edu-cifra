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
          <CifraMini />
          <AdvantagesCifraMini/>
          <Characteristics />
          <Development />
          <Connection />
      </main>
    </div>
  );
};