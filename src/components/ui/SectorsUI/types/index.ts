export type SectorsUIProps = {
  sectors: SectorUI[];
  isLoading: boolean;
  selectedSector: string | null;
  onSelectSector: (id: string) => void;
};

export type SectorUI = {
  id: string;
  name: string;
  icon: string;
  count: number;
};
