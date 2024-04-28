import Select, { GroupBase, Props } from "react-select";

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
  return (
    <Select
      {...props}
      theme={(theme) => ({ ...theme, borderRadius: 0 })}
      components={{
        IndicatorSeparator: () => null,
      }}
      styles={{
        control: (base) => ({
          ...base,
          border: 0,
          backgroundColor: "#14212",
          color: "white",
          boxShadow: "none",
          display: "flex",
          fontFamily: "Poppins",
          margin: "0 35px 0 0",
          minHeight: "25px",
          height: "25px",
          "&:hover": {
            color: "#ff4815",
            cursor: "pointer",
          },
        }),
        menuPortal: (styles) => ({ ...styles, zIndex: 999 }),
        dropdownIndicator: (base) => ({
          ...base,
          color: "inherit",
          padding: "3px 5px",
          "&:hover": {
            color: "#ff4815",
            cursor: "pointer",
          },
        }),
        indicatorsContainer: (base) => ({
          height: "25px",
        }),
        singleValue: (base) => ({
          ...base,
          color: "inherit",
          padding: 0,
          margin: 0,
        }),
        valueContainer: (base) => ({
          ...base,
          padding: 0,
          height: "25px",
        }),
        input: (provided) => ({
          ...provided,
          margin: "0px",
          padding: "0px",
        }),
        option: (base, { isSelected }) => ({
          ...base,
          cursor: "pointer",
          padding: "12px 5px",
          fontSize: "15px",
          backgroundColor: isSelected ? "#ff4815" : "",
          color: isSelected ? "white" : "black",
          "&:hover": {
            backgroundColor: "rgba(255, 72, 21, 0.3)",
            color: "black",
          },
        }),
      }}
      menuPortalTarget={document.body}
    />
  );
}

export default SelectInput;
