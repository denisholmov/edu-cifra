export type ProfessionUI = {
  id: number;
  name: string;
  sectorId: string;
  sectorName: string;
  sectorIcon?: string | null;
  keyFunctionId: string;
  description: string;
  demand: "high" | "medium" | "low";
  is_remote?: boolean;
  icon?: string | null;
};

export type ProfessionsUIProps = {
  professions: ProfessionUI[];
  isLoading: boolean;
  selectedSector: string | null;
  selectedKeyFunction: string | null;
  onSelectProfession?: (id: number) => void;
  onLoadMore?: () => void;
  isLoadMoreLoading?: boolean; // ← ДОБАВЛЯЕМ для состояния загрузки "ещё"
};
