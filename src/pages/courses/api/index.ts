import { API } from "@/shared/api/api";
import { TopPageModel } from "@/shared/types/page";
import { ProductModel } from "@/shared/types/product";
import axios from "axios";

export const getPage = async (alias: string): Promise<TopPageModel> => {
  const { data: page } = await axios.get<TopPageModel>(
    API.topPage.byAlias + alias
  );
  return page;
};

export const getProducts = async (
  category: string
): Promise<ProductModel[]> => {
  const { data: products } = await axios.post<ProductModel[]>(
    API.product.find,
    {
      category,
      limit: 10,
    }
  );
  return products;
};
