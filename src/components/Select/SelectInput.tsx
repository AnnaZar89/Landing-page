import Select, { GroupBase, Props } from "react-select";
import styles from "./Select.module.scss";

function SelectInput<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: Props<Option, IsMulti, Group> & {
    variant?: "text";
    className?: string;
  }
) {
  // const style = {
  //   control: (base: any) => ({
  //     ...base,
  //     border: 0,
  //     backgroundColor: "#14212",
  //     color: "white",
  //     boxShadow: "none",
  //     "&:hover": {
  //       color: "#ff4815",
  //       cursor: "pointer",
  //     },
  //   }),
  //   dropdownIndicator: (base: any) => ({
  //     ...base,
  //     color: "inherit",
  //     padding: 0,
  //     "&:hover": {
  //       color: "#ff4815",
  //       cursor: "pointer",
  //     },
  //   }),
  //   singleValue: (base: any) => ({
  //     ...base,
  //     color: "inherit",
  //   }),
  //   valueContainer: (base: any) => ({
  //     ...base,
  //     padding: 0,
  //   }),
  // };
  return (
    // <Select
    //   {...props}
    //   theme={(theme) => ({ ...theme, borderRadius: 0 })}
    //   styles={style}
    // />
    <Select
      {...props}
      theme={(theme) => ({ ...theme, borderRadius: 0 })}
      components={{
        IndicatorSeparator: () => null,
      }}
      className={styles.element}
      styles={{
        control: (base) => ({
          ...base,
          border: 0,
          backgroundColor: "#14212",
          color: "white",
          boxShadow: "none",
          display: "flex",
          "&:hover": {
            color: "#ff4815",
            cursor: "pointer",
          },
        }),
        dropdownIndicator: (base) => ({
          ...base,
          color: "inherit",

          padding: "5px 0",
          "&:hover": {
            color: "#ff4815",
            cursor: "pointer",
          },
        }),
        singleValue: (base) => ({
          ...base,
          color: "inherit",
        }),
        valueContainer: (base) => ({
          ...base,
          padding: 0,
        }),

        option: (base, { data, isDisabled, isFocused, isSelected }) => ({
          ...base,
          backgroundColor: isFocused
            ? "#999999"
            : "" || isSelected
            ? "#ff4815"
            : "",
          color: isSelected ? "white" : "#333333",
          fontSize: "13px",
        }),
      }}
    />
  );
}

export default SelectInput;
