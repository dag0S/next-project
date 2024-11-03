import { FC } from "react";
import { SidebarProps } from "./Sidebar.props";
import { Menu } from "@/shared/ui";

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  return (
    <div className={className}>
      <Menu />
    </div>
  );
};
