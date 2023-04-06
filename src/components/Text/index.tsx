import React from "react";

const variantClasses = {
  h1: "font-normal text-[8px]",
  h2: "font-medium text-3xl sm:text-[26px] md:text-[28px]",
  h3: "font-medium text-2xl md:text-[22px] sm:text-xl",
  h4: "font-semibold text-xl",
  h5: "text-lg",
  h6: "text-base",
  body1: "text-sm",
  body2: "text-[13px]",
  body3: "text-[11px]",
} as const;

export type TextProps = Partial<{
  className: string;
  variant: keyof typeof variantClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className,
  variant,
  as,
  ...restProps
}) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
