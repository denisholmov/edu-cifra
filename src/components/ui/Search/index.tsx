import { Autocomplete } from "@mantine/core";

import type { SearchProps } from "./types";

import { SearchIcon } from "../icons/SearchIcon";
import styles from "./styles/index.module.css";

export function Search({
  suggestions = [],
  withIcon = true,
  variant = "default",
  className = "",
  placeholder = "Поиск...",
  radius = "md",
  size = "md",
  value = "", // ← добавляем value
  onChange, // ← onChange вместо onSearchChange
  ...props
}: SearchProps) {
  return (
    <Autocomplete
      className={`${styles.search} ${styles[variant]} ${className}`}
      placeholder={placeholder}
      leftSection={
        withIcon ? <SearchIcon className={styles.searchIcon} /> : null
      }
      data={suggestions}
      radius={radius}
      size={size}
      value={value} // ← передаём value
      onChange={onChange} // ← onChange
      {...props}
    />
  );
}
