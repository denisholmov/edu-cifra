import { AppHeader } from "@/components/features/AppHeader";

import styles from "./styles/index.module.css";
import { GetStarted } from "@/components/pages-content/GetStarted";

export const HomePage = () => {
 

  return (
    <div className={styles.wrapper}>
      <AppHeader />
      <main className={styles.main}>
        <GetStarted />
        секция 2
        секция 3
      </main>
    </div>
  );
};