import {
  Container,
  Grid,
  Title,
  Card,
  Text,
  Badge,
  Loader,
  Button,
  Group,
} from "@mantine/core";

import type { ProfessionsUIProps } from "./types";

import styles from "./styles/index.module.css";

export const ProfessionsUI = ({
  professions,
  isLoading,

  selectedKeyFunction,
  onSelectProfession,
  onLoadMore,
  isLoadMoreLoading = false,
}: ProfessionsUIProps) => {
  const demandColors = {
    high: "green",
    medium: "yellow",
    low: "gray",
  };

  const demandLabels = {
    high: "Высокая",
    medium: "Средняя",
    low: "Низкая",
  };

  // Показываем только начальную загрузку, если нет профессий
  if (isLoading && professions.length === 0) {
    return (
      <section className={styles.root}>
        <Container size="lg">
          <div className={styles.loading}>
            <Loader size="lg" />
            <Text mt="md">Загружаем профессии...</Text>
          </div>
        </Container>
      </section>
    );
  }

  const handleCardClick = (id: number) => {
    if (onSelectProfession) {
      onSelectProfession(id);
    }
  };

  return (
    <section className={styles.root}>
      <Container size="lg">
        <Title order={2} className={styles.title}>
          {selectedKeyFunction
            ? `Востребованные профессии в выбранной ключевой функции (${professions.length})`
            : `Все востребованные профессии (${professions.length})`}
        </Title>

        {professions.length === 0 ? (
          <div className={styles.empty}>
            <Text size="lg">Профессии не найдены</Text>
            <Text c="dimmed">Попробуйте выбрать другую ключевую функцию</Text>
          </div>
        ) : (
          <>
            <Grid gutter="lg" mt="md">
              {professions.map((prof) => (
                <Grid.Col key={prof.id} span={{ base: 12, sm: 6, md: 4 }}>
                  <Card
                    padding="lg"
                    radius="md"
                    withBorder
                    className={styles.card}
                    onClick={() => handleCardClick(prof.id)}
                  >
                    <div className={styles.header}>
                      <Text fw={700} size="lg">
                        {prof.name}
                      </Text>
                      <Badge
                        color={demandColors[prof.demand]}
                        variant="light"
                        size="md"
                      >
                        {demandLabels[prof.demand]} востребованность
                      </Badge>
                    </div>

                    <Text mt="xs" c="dimmed" size="sm" lineClamp={3}>
                      {prof.description}
                    </Text>

                    <div className={styles.footer}>
                      <Group gap="xs" wrap="wrap">
                        <Badge
                          variant="outline"
                          color="blue"
                          className={styles.sectorBadge}
                        >
                          {prof.sectorIcon && (
                            <Text span mr={4}>
                              {prof.sectorIcon}
                            </Text>
                          )}
                          {prof.sectorName}
                        </Badge>

                        {prof.is_remote && (
                          <Badge
                            variant="light"
                            color="green"
                            className={styles.remoteBadge}
                          >
                            Удалённая
                          </Badge>
                        )}
                      </Group>
                    </div>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>

            {/* ПАГИНАЦИЯ */}
            {onLoadMore && (
              <div className={styles.loadMoreContainer}>
                <Button
                  onClick={onLoadMore}
                  loading={isLoadMoreLoading}
                  disabled={isLoadMoreLoading}
                  variant="light"
                  size="lg"
                  className={styles.loadMoreButton}
                >
                  {isLoadMoreLoading ? "Загрузка..." : "Показать ещё профессии"}
                </Button>

                {/* Информация о загрузке если нужно */}
                {isLoadMoreLoading && (
                  <Text size="sm" c="dimmed" mt="md">
                    Загружаем следующие профессии...
                  </Text>
                )}
              </div>
            )}
          </>
        )}
      </Container>
    </section>
  );
};
