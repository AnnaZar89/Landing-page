import React, { FC, ReactElement } from "react";
import { TypographyPropsType, TypographyTags } from "./types";

const Typography: FC<TypographyPropsType> = ({
  classname,
  children,
  onClick,
  color,
  tag,
}): ReactElement => {
  const htmlTag = () => {
    if (tag === "h6" || "h5") {
      return "p";
    }
    if (tag === "span") {
      return "span";
    }
    return tag ? TypographyTags[tag] || TypographyTags.a : TypographyTags.tag;
  };
  return React.createElement(htmlTag, children);
};
export default Typography;
