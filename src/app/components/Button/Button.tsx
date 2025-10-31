import Image from "next/image";
import RightArrow from "../../public/assets/images/arrow-am-rounded.svg";
import RightArrowBlack from "../../public/assets/images/right-arrow-black.svg";
import styles from "./Button.module.scss";

interface ButtonProps {
  btnClass?:
    | "filledBtn"
    | "whiteBtn"
    | "transparentBtn";
  label: string;
  onClick?: (e: React.MouseEvent) => void;
  enableArrow?: boolean;
  enableArrowBlack?: boolean;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  btnClass = "filledBtn",
  label,
  onClick,
  enableArrow,
  enableArrowBlack,
  disabled,
  className,
}) => {
  return (
    <button
      className={`${styles[btnClass]} ${className || ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label} {enableArrow ? <Image src={RightArrow} alt="Arrow" className="ml-2" /> : ""}{" "}
      {enableArrowBlack ? <Image src={RightArrowBlack} alt="Arrow" /> : ""}
    </button>
  );
};

export default Button;
