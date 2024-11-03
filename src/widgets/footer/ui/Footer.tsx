import { FC } from "react";
import cn from "classnames";
import { format } from "date-fns";
import { FooterProps } from "./Footer.props";

import styles from "./Footer.module.scss";

export const Footer: FC<FooterProps> = ({ className }) => {
  return (
    <div className={cn(styles["footer"], className)}>
      <div>OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены</div>
      <a href="#" target="_blank">
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank">
        Политика конфиденциальности
      </a>
    </div>
  );
};
