import { Route, Routes } from "react-router-dom";
// layouts
import Main from "@layouts/main/main";
// components
import NoMatchRoute from "@components/common/rout/no-match";

export default function AppRoutes() {
  const routes = [{ id: 1, path: "/", element: <Main /> }];

  return (
    <Routes>
      <Route path="*" element={<NoMatchRoute />} />

      {routes.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}
