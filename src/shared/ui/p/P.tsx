import { FC, memo } from "react";
import { PProps } from "./P.props";
import cn from "classnames";

import styles from "./P.module.scss";

export const P: FC<PProps> = memo(
  ({ children, className, size = "m", ...props }) => {
    return (
      <p className={cn(styles["p"], className, styles[size])} {...props}>
        {children}
      </p>
    );
  }
);
