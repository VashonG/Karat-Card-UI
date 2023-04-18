import React from "react";

const shapes = {
  CircleBorder20: "rounded-[20px]",
  RoundedBorder8: "rounded-lg",
} as const;
const variants = {
  White: "bg-white_A700 border border-bluegray_50 border-solid text-gray_900",
  FillYellow900: "bg-yellow_900 text-white_A700",
  FillDeeporange100: "bg-deep_orange_100 text-lime_50",
  FillLime50: "bg-lime_50",
  OutlineBluegray50: "border border-bluegray_50 border-solid",
} as const;
const sizes = { sm: "p-[7px]", md: "p-[11px]" } as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "",
  size = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
