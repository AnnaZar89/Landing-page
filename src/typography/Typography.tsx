import React, { FC, ReactElement, PropsWithChildren, useMemo } from "react";
import { ComponentBaseType } from "./types";
import cn from "classnames";
import styles from "./Typography.module.scss";

enum TypographyTags {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
  a = "a",
  span = "span",
  tag = "tag",
  p = "p",
}

type TypographyPropsType = PropsWithChildren &
  ComponentBaseType & {
    tag: keyof typeof TypographyTags;
    color?: string;
  };

const Typography: FC<TypographyPropsType> = ({
  className,
  children,
  onClick,
  color,
  tag,
}): ReactElement => {
  const htmlTag = useMemo(
    () =>
      tag
        ? TypographyTags[tag]
        : // ? TypographyTags[tag]
          // : TypographyTags.a
          TypographyTags.tag,
    [tag]
  );

  const componentClassName = useMemo(
    () => cn(styles.element, styles[tag] && styles[tag], className),
    [tag, className]
  );

  return React.createElement(
    htmlTag,
    {
      className: componentClassName,
      onClick,
      style: { color },
    },
    children
  );
};
export default Typography;
