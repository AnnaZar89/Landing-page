import { FC } from "react";
import Heading from "../../typography/Heading/Heading";
import Paragraph from "../../typography/Paragraph/Paragraph";

interface IBottomBox {
  personalData: string;
  profession: string;
}

const BottomBox: FC<IBottomBox> = ({ personalData, profession }) => {
  return (
    <div>
      <Heading text={personalData} color="black" />
      <Paragraph text={profession} />
    </div>
  );
};

export default BottomBox;
