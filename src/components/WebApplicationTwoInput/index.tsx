import React from "react";

import { Text, Input } from "components";

type WebApplicationTwoInputProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{ emailEight: string; inputFive: string; description: string }>;

const WebApplicationTwoInput: React.FC<WebApplicationTwoInputProps> = (
  props
) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-inter font-normal not-italic text-bluegray_700 text-left w-auto"
          variant="body2"
        >
          {props?.emailEight}
        </Text>
        {!!props?.inputFive ? (
          <Input
            value={props?.inputFive}
            wrapClassName="border border-bluegray_50 border-solid px-3.5 py-2.5 rounded-[20px] w-full"
            className="font-inter font-normal not-italic p-0 placeholder:text-gray_900 text-gray_900 text-left text-sm w-full"
            name="input_Five"
            placeholder="721-07-4426"
          ></Input>
        ) : null}
        {!!props?.description ? (
          <Text
            className="font-inter font-normal leading-[14.00px] md:max-w-full max-w-xl not-italic text-bluegray_400 text-left"
            variant="body3"
          >
            {props?.description}
          </Text>
        ) : null}
      </div>
    </>
  );
};

WebApplicationTwoInput.defaultProps = { emailEight: "Social Security Number" };

export default WebApplicationTwoInput;
