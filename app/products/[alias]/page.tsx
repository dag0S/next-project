import { Metadata } from "next";
import { notFound } from "next/navigation";
import { FC } from "react";
import { getPage } from "@/shared/utils/getPage/getPage";
import { getMenu } from "@/shared/utils/getMenu/getMenu";

export const metadata: Metadata = {
  title: "Страница",
};

export async function generateStaticParams() {
  const menu = await getMenu(0);
  return menu.flatMap((item) =>
    item.pages.map((page) => ({ alias: page.alias }))
  );
}

interface PageProps {
  params: Promise<{ alias: string }>;
}

const Page: FC<PageProps> = async ({ params }) => {
  const { alias } = await params;
  const page = await getPage(alias);

  if (!page) {
    notFound();
  }

  return <div>{page.title}</div>;
};

export default Page;
