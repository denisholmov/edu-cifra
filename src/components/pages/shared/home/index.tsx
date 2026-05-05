import { AppHeader } from "@/components/features/AppHeader";

import styles from "./styles/index.module.css";
import { GetStarted } from "@/components/pages-content/GetStarted";

export const HomePage = () => {
 

  return (
    <div className={styles.wrapper}>
      <AppHeader />
      <main className={styles.main}>
          <GetStarted />
        <section id="team">секция 2</section>
        <section id="contacts">секция 3</section>
      </main>
    </div>
  );
};