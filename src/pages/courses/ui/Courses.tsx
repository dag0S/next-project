import { FC } from "react";
import { CoursePageProps } from "./CoursePage.props";
import { getPage, getProducts } from "../api";
import { getMenu } from "@/pages/home/api";

export const generateStaticParams = async () => {
  const menu = await getMenu(0);
  return menu.flatMap((item) =>
    item.pages.map((page) => ({ alias: page.alias }))
  );
};

const CoursePage: FC<CoursePageProps> = async ({ params }) => {
  const { alias } = await params;
  const page = await getPage(alias);
  const products = await getProducts(page.category);

  return <div>CoursePage {products.length}</div>;
};

export default CoursePage;
