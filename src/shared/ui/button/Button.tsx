import { FC, memo } from "react";
import cn from "classnames";
import { ButtonProps } from "./Button.props";
import ArrowIcon from "./arrow.svg";

import styles from "./button.module.scss";

export const Button: FC<ButtonProps> = memo(
  ({ children, appearance, className, arrow = "none", ...props }) => {
    return (
      <button
        className={cn(styles["button"], className, styles[appearance])}
        {...props}
      >
        {children}
        {arrow !== "none" && (
          <span className={cn(styles["arrow"], styles[arrow])}>
            <ArrowIcon />
          </span>
        )}
      </button>
    );
  }
);
