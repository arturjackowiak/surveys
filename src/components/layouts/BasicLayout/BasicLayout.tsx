import { ReactElement } from "react";

import { BasicLayoutWrapper } from "./BasicLayout.style";

interface IBasicLayoutProps {
  children: ReactElement;
}

const BasicLayout = ({ children }: IBasicLayoutProps) => (
  <BasicLayoutWrapper>{children}</BasicLayoutWrapper>
);

export default BasicLayout;
