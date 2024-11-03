import { API } from "@/shared/api/api";
import { MenuItem } from "@/shared/types/menu";
import axios from "axios";

export const getMenu = async (firstCategory: number): Promise<MenuItem[]> => {
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  });

  return menu;
};
