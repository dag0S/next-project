import { TopLevelCategory } from "@/shared/types/page";
import { ReactNode } from "react";

export interface FirstLevelMenuItem {
  route: string;
  name: string;
  icon: ReactNode;
  id: TopLevelCategory;
}
