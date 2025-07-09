import { NavLink } from "react-router-dom";
import type { TUserPath } from "../types/sidebar.type";
import type { JSX } from "react";

type SidebarItem = {
  key: string;
  label: JSX.Element;
};

export const generateSidebarItems = (
  routes: TUserPath[],
  role: string
): SidebarItem[] => {
  const sidebarItems = routes.reduce<SidebarItem[]>((acc, route) => {
    if (route.path && route.name) {
      acc.push({
        key: route.name,
        label: <NavLink to={`/${role}/${route.path}`}>{route.name}</NavLink>,
      });
    }

    if (route.children && route.children.length > 0) {
      acc.push({
        key: route.name!,
        label: route.name,
        children: route.children.map((child) => {
          if (child.name) {
            return {
              key: child.name,
              label: (
                <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>
              ),
            };
          }
        }),
      });
    }

    return acc;
  }, []);

  return sidebarItems;
};
