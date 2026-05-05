// src/components/ui/Header/Header.tsx
import { Container, Group, Text } from "@mantine/core";
import { Link } from "react-router-dom";


import styles from "./styles/index.module.css";
export const HeaderUI = () => {
  return (
    <header className={styles.header}>
      <div>
        <img src="./public/images/logo.png" alt="Логотип компании" />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}><a href="#" target="_blank" className={styles.link}>Продукты</a></li>
          <li className={styles.item}><a href="#" target="_blank" className={styles.link}>Команда</a></li>
          <li className={styles.item}><a href="#" target="_blank" className={styles.link}>Контакты</a></li>
        </ul>
      </nav>      
    </header>
  );
};