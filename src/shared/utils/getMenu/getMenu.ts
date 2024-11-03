import { API } from "@/shared/api/api";
import { MenuItem } from "@/shared/types/menu";

export const getMenu = async (firstCategory: number): Promise<MenuItem[]> => {
  const res = await fetch(API.topPage.find, {
    method: "POST",
    body: JSON.stringify({
      firstCategory,
    }),
    headers: new Headers({ "content-type": "application/json" }),
    next: {
      revalidate: 10,
    },
  });
  console.log("revalidating getMenu");
  return res.json();
};
