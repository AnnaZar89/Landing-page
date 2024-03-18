import { FC } from "react";
import Select from "react-select";
import styles from "./Select.module.scss";

type Options = {
  label: string;
  value: string;
};

interface ISelectInput {
  options: Options[];
}

const SelectInput: FC<ISelectInput> = ({ options }) => {
  const style = {
    control: (base: any) => ({
      ...base,
      border: 0,
      backgroundColor: "#14212",
      color: "white",
      boxShadow: "none",
      "&:hover": {
        color: "#ff4815",
        cursor: "pointer",
      },
    }),
    dropdownIndicator: (base: any) => ({
      ...base,
      color: "inherit",
      padding: 0,
      "&:hover": {
        color: "#ff4815",
        cursor: "pointer",
      },
    }),
    singleValue: (base: any) => ({
      ...base,
      color: "inherit",
    }),
    valueContainer: (base: any) => ({
      ...base,
      padding: 0,
    }),
  };

  return (
    <Select
      options={options}
      defaultValue={options[0]}
      className={styles.element}
      styles={style}
      components={{
        IndicatorSeparator: () => null,
      }}
    />
  );
};

export default SelectInput;
