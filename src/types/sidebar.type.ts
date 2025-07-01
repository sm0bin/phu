import type { ReactNode } from "react";

export type TUserPath = {
  name?: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
};

export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TSidebarItem =
  | {
      key: string;
      icon?: ReactNode;
      label: string;
      children?: TSidebarItem[];
    }
  | undefined;
