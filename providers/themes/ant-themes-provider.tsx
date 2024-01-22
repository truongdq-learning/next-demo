"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { PropsWithChildren } from "react";
import theme from "./themeConfig";

export function AntThemesProvider({ children }: PropsWithChildren) {
  return (
    <AntdRegistry>
      <ConfigProvider theme={theme}>{children}</ConfigProvider>
    </AntdRegistry>
  );
}
