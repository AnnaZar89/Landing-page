import { FC } from "react";
import styles from "./Toggle.module.scss";
import cn from "classnames";

interface IToggle {
  onChange: () => void;
  checked: boolean;
}

const Toggle: FC<IToggle> = ({ onChange, checked }) => {
  return (
    <label className={styles.element}>
      <input
        className={styles.input}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />

      <span className={cn(styles.toggle, checked && styles.isChecked)} />
    </label>
  );
};

export default Toggle;
