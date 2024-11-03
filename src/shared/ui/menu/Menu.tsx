import { FC } from "react";
import cn from "classnames";
import Link from "next/link";
import { FirstLevelMenuItem } from "./Menu.props";
import { getMenu } from "@/shared/utils/getMenu/getMenu";
import CoursesIcon from "@/shared/assets/svg/courses.svg";
import ServicesIcon from "@/shared/assets/svg/services.svg";
import BooksIcon from "@/shared/assets/svg/books.svg";
import ProductsIcon from "@/shared/assets/svg/products.svg";
import { TopLevelCategory } from "@/shared/types/page";
import { PageItem } from "@/shared/types/menu";

import styles from "./Menu.module.scss";

const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Сервисы",
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: "books",
    name: "Книги",
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Продукты",
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
  },
];

export const Menu: FC = async () => {
  const firstCategory = 0;
  const menu = await getMenu(0);

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((m) => (
          <div key={m.route}>
            <Link href={`/${m.route}`}>
              <div
                className={cn(styles["first-level"], {
                  [styles["first-level--active"]]: m.id === firstCategory,
                })}
              >
                {m.icon}
                <span>{m.name}</span>
              </div>
            </Link>
            {m.id === firstCategory && buildSecondLevel(m)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles["second-block"]}>
        {menu.map((m) => (
          <div key={m._id.secondCategory}>
            <div className={styles["second-level"]}>{m._id.secondCategory}</div>
            <div
              className={cn(styles["second-level-block"], {
                [styles["second-level-block--opened"]]: m.isOpened,
              })}
            >
              {buildThirdLevel(m.pages, menuItem.route)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <Link
        className={cn(styles["third-level"], {
          [styles["third-level--active"]]: false,
        })}
        href={`/${route}/${p.alias}`}
        key={p._id}
      >
        {p.category}
      </Link>
    ));
  };

  return <div className={styles["menu"]}>{buildFirstLevel()}</div>;
};
