import type { AutocompleteProps } from "@mantine/core";

export type SearchProps = {
  suggestions?: string[];
  withIcon?: boolean;
  variant?: "default" | "compact";
  value?: string; // ← добавляем
  onChange?: (value: string) => void; // ← onChange
} & Omit<AutocompleteProps, "data" | "value" | "onChange">;
