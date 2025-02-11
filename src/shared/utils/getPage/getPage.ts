import { API } from "@/shared/api/api";
import { TopPageModel } from "@/shared/types/page";

export const getPage = async (alias: string): Promise<TopPageModel | null> => {
  const res = await fetch(API.topPage.byAlias + alias, {
    next: {
      revalidate: 10,
    },
  });
  console.log("revalidating getPage");
  if (!res.ok) {
    return null;
  }
  return res.json();
};
