import { FC } from "react";
import { HeaderProps } from "./Header.props";

export const Header: FC<HeaderProps> = ({ className }) => {
  return <div className={className}>Header</div>;
};
