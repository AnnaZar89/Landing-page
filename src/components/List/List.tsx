import { FC } from "react";
import { ReactComponent as Check } from "../../assets/icons/check-list.svg";
import { ContactBoxT } from "../../views/Footer/mockData";

interface IList {
  // data?: string | ContactBoxT | undefined;
  data?: any;
  Icon?: React.FunctionComponent;
}
const List: FC<IList> = ({ data, Icon }) => {
  return (
    <li>
      {Icon && <Check />}
      {data}
    </li>

    // <>
    //   {typeof data === "string" ? (
    //     <li>{data}</li>
    //   ) : (
    //     <>
    //       <li>{data.firstItem}</li>
    //       <li>{data.secondItem}</li>
    //     </>
    //   )}
    // </>
  );
};

export default List;
