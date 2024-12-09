import { FC, PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  theme: "light" | "dark";
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ theme, onClick, children }) => {
  return (
    <button onClick={onClick}>
      [{theme}] {children}
    </button>
  );
};

export default Button;
