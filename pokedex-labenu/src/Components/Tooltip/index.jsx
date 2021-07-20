import React from "react";
import { ToolTipContainer } from "./style";

export default function Tooltip({ content, children }) {
  return <ToolTipContainer content={content}>{children}</ToolTipContainer>;
}
