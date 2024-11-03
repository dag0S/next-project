import { FC, memo } from "react";
import cn from "classnames";
import { TagProps } from "./Tag.props";

import styles from "./Tag.module.scss";

export const Tag: FC<TagProps> = memo(({
  children,
  className,
  size = "m",
  color = "ghost",
  href,
  ...props
}) => {
  return (
    <div
      className={cn(styles["tag"], className, styles[size], styles[color])}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
});
