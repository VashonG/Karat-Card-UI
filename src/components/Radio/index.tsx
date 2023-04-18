import React from "react";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  OutlineBluegray10082:
    "bg-white_A700_82 border border-bluegray_100_82 border-solid",
  OutlineYellow900: "bg-white_A700 border-4 border-solid border-yellow_900",
} as const;

const sizes = { sm: "" } as const;

export type RadioProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    inputClassName: string;
    className: string;
    name: string;
    label: string;
    checked: boolean;
    errors: string[];
    onChange: Function;
    id: string;

    variant: keyof typeof variants;
    size: keyof typeof sizes;
  }>;

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      inputClassName = "",
      className = "",
      name = "",
      children,
      label = "",
      checked = false,
      errors = [],
      onChange,
      variant = "",
      size = "",
      id = "radio_id",
      ...restProps
    },
    ref
  ) => {
    const [value, setValue] = React.useState(checked);

    const handleChange = (event) => {
      setValue(event.target.checked);
      if (onChange) onChange(!!event?.target?.checked);
    };

    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName} ${(size && sizes[size]) || ""} ${
              (variant && variants[variant]) || ""
            }`}
            ref={ref}
            type="radio"
            name={name}
            aria-checked={!!value}
            checked={!!value}
            onChange={handleChange}
            {...restProps}
            id={id}
          />
          <label htmlFor={id}>{label}</label>
        </div>
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);

export { Radio };
