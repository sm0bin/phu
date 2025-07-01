import type { TRoute, TUserPath } from "../types/sidebar.type";

export const generateRoutes = (items: TUserPath[]) => {
  const routes = items.reduce((acc: TRoute[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }

    if (item.children && item.children.length > 0) {
      item.children.forEach((child) => {
        if (child.path && child.element) {
          acc.push({
            path: child.path,
            element: child.element,
          });
        }
      });
    }

    return acc;
  }, []);

  return routes;
};
