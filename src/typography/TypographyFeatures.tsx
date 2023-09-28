// import { FC } from "react";

// interface IVariant {
//   variant: string;
// }
// const Typography: FC<IVariant> = ({ variant }) => {
//   return <></>;
// };

// export default Typography;
import { FC } from "react";
import { Typography, TypographyTypeMap } from "@mui/material";

// import styles from "./HeadingH2.module.scss";
// import styles from "../typography/HeadingH2/HeadingH2.module.scss";
import styles from "../typography/TypographyFeatures.module.scss";
import cn from "classnames";

export enum SizeType {
  SMALL = "small",
  MEDIUM = "medium",
  STANDARD = "standard",
  LARGE = "large",
  EXTRA_LARGE = "extraLarge",
  EXTRA_Extra_LARGE = "extraExtraLarge",
}

interface IVariant {
  text: string;
  color: "white" | "orange" | "black";
  variant: TypographyTypeMap["props"]["variant"];
  className?: string;
  additionalText?: string;
  size?: SizeType;
  weight?: "regular" | "semiBold" | "bold";

  fontFamily?: "poppins" | "noto";
}
const TypographyFeatures: FC<IVariant> = ({
  text,
  className,
  color = "white",
  additionalText,
  size,
  weight,
  variant,
  fontFamily,
}) => {
  return (
    <>
      <Typography
        variant={variant}
        className={cn(
          styles.element,
          className,
          styles[`hasColor-${color}`],
          styles[`hasSize-${size}`],
          styles[`hasWeight-${weight}`],
          styles[`hasFont-${fontFamily}`]
        )}
      >
        {text}
      </Typography>
      {additionalText && (
        <Typography
          variant={variant}
          className={cn(styles.element, styles.additionalText)}
        >
          {additionalText}
        </Typography>
      )}
    </>
  );
};

export default TypographyFeatures;
// customized theme to create your custom
//design for typography component
// const theme = createTheme({
//   components: {
//     MuiTypography: {
//       defaultProps: {
//         variantMapping: {
//           h1: "h1",
//           h2: "h2",
//           h3: "h3",
//           h4: "h1",
//           h5: "h1",
//           h6: "h1",
//           subtitle1: "h2",
//           subtitle2: "h2",
//           body1: "span",
//           body2: "span",
//         },
//       },
//     },
//   },

//   typography: {
//     h2: {
//       fontSize: "20px",
//     },
//     h3: {
//       fontSize: "30px",
//     },
//     h5: {
//       fontSize: "20px",
//     },
//     subtitle1: {
//       fontSize: "15px",
//     },
//   },
// });
