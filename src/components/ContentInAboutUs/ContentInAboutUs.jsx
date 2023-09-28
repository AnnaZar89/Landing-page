import styles from "./ContentInAboutUs.module.scss";
import Paragraph from "../../typography/Paragraph/Paragraph";
import Heading from "../../typography/HeadingH2/HeadingH2";
import Button from "../Button/Button";
import ListBoxContainer from "../ListBoxContainer/ListBoxContainer";
import { ReactComponent as Check } from "../../assets/icons/check-list.svg";
import Typogr from "../../typography/TypographyFeatures";
// import theme from "../../typography/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    p: {
      fontSize: "15px",
    },
    h2: {
      fontSize: "20px",
    },
  },
});

const ContentInAboutUs = () => {
  return (
    <div className={styles.element}>
      {/* <Heading text="about us" color="orange" /> */}
      {/* <Paragraph text="About us" size="large" variant="semiBold" /> */}
      <ThemeProvider theme={theme}>
        <Typogr
          text="About us"
          size="large"
          variant="h2"
          color="orange"
          fontFamily="poppins"
          weight="semiBold"
        />

        {/* <Heading
          text="Aliquam id est ullamcorper dictu arcu sed"
          className
          color="black"
          additionalText=" Your Business"
        /> */}
        <Typogr
          text="Aliquam id est ullamcorper dictu arcu sed"
          size="extraExtraExtraLarge"
          className
          variant="h2"
          color="black"
          additionalText=" Your Business"
          weight="bold"
          // fontFamily=""
        />
        {/* <Paragraph
          text="There are many variations of passages of Lorem Ipsum available, but the
      some suffered alteration in some form, by injected humour suffered
      alteration in by injected humour majority"
          size="medium"
        /> */}
        <Typogr
          text="There are many variations of passages of Lorem Ipsum available, but the
      some suffered alteration in some form, by injected humour suffered
      alteration in by injected humour majority"
          size="medium"
          variant="p"
          color="grey"
          fontFamily="noto"
          // weight="bold"
        />
        <ListBoxContainer
          listData={[
            "There are many variations of passages of Lorem Ipsum available",
            "Passages of Lorem Ipsum available",
            "Many variations of passages of Lorem Ipsum available",
            "Variations of passages of Lorem Ipsum available",
          ]}
          // Icon={Check}
          icon={<Check />}
        />
        <Button text="Read More" classAdd="btnInContent" />
      </ThemeProvider>
    </div>
  );
};

export default ContentInAboutUs;
