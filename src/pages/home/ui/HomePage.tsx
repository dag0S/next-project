import { FC } from "react";
import { Button, HTag } from "@/shared/ui";

const HomePage: FC = () => {
  return (
    <div>
      <HTag tag="h1">text</HTag>
      <Button appearance="primary" arrow="down">
        Click button
      </Button>
      <Button appearance="ghost" arrow="right">
        Click button
      </Button>
    </div>
  );
};

export default HomePage;
