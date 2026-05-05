// SectorsUI.tsx
import { Container, Title, Loader, Text } from "@mantine/core";

import type { SectorsUIProps } from "./types";

import styles from "./styles/index.module.css";

export const SectorsUI = ({
  sectors,
  isLoading,
  selectedSector,
  onSelectSector,
}: SectorsUIProps) => {
  if (isLoading) {
    return (
      <section className={styles.root}>
        <Container size="lg">
          <div className={styles.loading}>
            <Loader size="lg" />
            <Text mt="md">Загружаем сектора...</Text>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className={styles.root}>
      <Container size="lg">
        <Title order={2} className={styles.title}>
          Каталог секторов
        </Title>
        <Text className={styles.subtitle} mb="xl">
          Выберите интересующий вас сектор
        </Text>

        <div className={styles.grid}>
          {sectors.map((sector) => (
            <button
              key={sector.id}
              className={`${styles.item} ${
                selectedSector === sector.id ? styles.selected : ""
              }`}
              onClick={() => onSelectSector(sector.id)}
            >
              <span className={styles.icon}>{sector.icon}</span>
              <Text fw={500} size="sm" mt="xs">
                {sector.name}
              </Text>
              <Text size="xs" c="dimmed">
                Количество: {sector.count}
              </Text>
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
};
