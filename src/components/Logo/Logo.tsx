import { FC } from "react";

interface ILogo {
  logoImg: string;
}

const Logo: FC<ILogo> = ({ logoImg }) => {
  return (
    <>
      <img src={logoImg} alt="Logo" />
    </>
  );
};

export default Logo;
