import { Container, Title, Loader, Text } from "@mantine/core";

import type { KeyFunctionsUIProps } from "./types";

import styles from "./styles/index.module.css";

export const KeyFunctionsUI = ({
  keyFunctions,
  isLoading,
  selectedKeyFunction,
  onSelectKeyFunction,
}: KeyFunctionsUIProps) => {
  if (isLoading) {
    return (
      <section className={styles.root}>
        <Container size="lg">
          <div className={styles.loading}>
            <Loader size="lg" />
            <Text mt="md">Загружаем ключевые функции...</Text>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className={styles.root}>
      <Container size="lg">
        <Title order={2} className={styles.title}>
          Каталог ключевых функций
        </Title>
        <Text className={styles.subtitle} mb="xl">
          Выберите интересующую вас ключевую функцию
        </Text>

        <div className={styles.grid}>
          {keyFunctions.map((keyFunction) => (
            <button
              key={keyFunction.id}
              className={`${styles.item} ${
                selectedKeyFunction === keyFunction.id ? styles.selected : ""
              }`}
              onClick={() => onSelectKeyFunction(keyFunction.id)}
            >
              <span className={styles.icon}>{keyFunction.icon}</span>
              <Text fw={500} size="sm" mt="xs">
                {keyFunction.name}
              </Text>
              <Text size="xs" c="dimmed">
                Количество: {keyFunction.count}
              </Text>
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
};
