import { ReactNode } from "react";

export type item = {
  name: string;
  component: ReactNode;
};

export interface navbarProps {
  list?: item[];
}

export interface tabProps {
  name: string;
  onClick: (tab: string) => void;
  activeTab: string;
}
