import { HTMLAttributes, ReactNode } from "react";

export interface PProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  size?: "s" | "m" | "l";
}
