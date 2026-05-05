import { Outlet } from "react-router-dom";

import { AppHeader } from "../AppHeader";

export const AppWrapper = () => {
  return (
    <div>
      <AppHeader /> {/* Общий хедер для всех страниц */}
      <main>
        <Outlet /> {/* Сюда рендерятся дочерние страницы */}
      </main>
      {/* <AppFooter /> Общий футер */}
    </div>
  );
};
