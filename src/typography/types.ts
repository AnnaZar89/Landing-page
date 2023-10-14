import { PropsWithChildren } from "react";

type ComponentBaseType = {
  classname?: string;
  onClick?: () => void;
};

export enum TypographyTags {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
  a = "a",
  span = "span",
  tag = "tag",
}

export type TypographyPropsType = PropsWithChildren &
  ComponentBaseType & {
    tag: keyof typeof TypographyTags;
    color: string;
  };
