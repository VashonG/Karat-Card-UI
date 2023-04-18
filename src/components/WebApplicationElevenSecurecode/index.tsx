import React from "react";

import { Text, Button } from "components";

type WebApplicationElevenSecurecodeProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    securecode: string;
    seven: string;
    eight: string;
    zero: string;
    zeroOne: string;
    zeroTwo: string;
    zeroThree: string;
  }>;

const WebApplicationElevenSecurecode: React.FC<
  WebApplicationElevenSecurecodeProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-inter font-normal not-italic text-bluegray_700 text-left w-auto"
          variant="body2"
        >
          {props?.securecode}
        </Text>
        <div className="flex sm:flex-col flex-row gap-2 items-start justify-start self-stretch w-auto md:w-full">
          <Button
            className="cursor-pointer font-inter font-normal h-14 not-italic text-3xl sm:text-[26px] md:text-[28px] text-center text-gray_900 w-14"
            shape="CircleBorder20"
            size="md"
            variant="OutlineBluegray50"
          >
            {props?.seven}
          </Button>
          <Button
            className="cursor-pointer font-inter font-normal h-14 not-italic text-3xl sm:text-[26px] md:text-[28px] text-center text-gray_900 w-14"
            shape="CircleBorder20"
            size="md"
            variant="OutlineBluegray50"
          >
            {props?.eight}
          </Button>
          <Button
            className="cursor-pointer font-inter font-normal h-14 not-italic text-3xl sm:text-[26px] md:text-[28px] text-center text-gray_300 w-14"
            shape="CircleBorder20"
            size="md"
            variant="OutlineBluegray50"
          >
            {props?.zero}
          </Button>
          <Button
            className="cursor-pointer font-inter font-normal h-14 not-italic text-3xl sm:text-[26px] md:text-[28px] text-bluegray_50 text-center w-14"
            shape="CircleBorder20"
            size="md"
            variant="OutlineBluegray50"
          >
            {props?.zeroOne}
          </Button>
          <Button
            className="cursor-pointer font-inter font-normal h-14 not-italic text-3xl sm:text-[26px] md:text-[28px] text-bluegray_50 text-center w-14"
            shape="CircleBorder20"
            size="md"
            variant="OutlineBluegray50"
          >
            {props?.zeroTwo}
          </Button>
          <Button
            className="cursor-pointer font-inter font-normal h-14 not-italic text-3xl sm:text-[26px] md:text-[28px] text-bluegray_50 text-center w-14"
            shape="CircleBorder20"
            size="md"
            variant="OutlineBluegray50"
          >
            {props?.zeroThree}
          </Button>
        </div>
      </div>
    </>
  );
};

WebApplicationElevenSecurecode.defaultProps = {
  securecode: "Secure Code",
  seven: "7",
  eight: "8",
  zero: "0",
  zeroOne: "0",
  zeroTwo: "0",
  zeroThree: "0",
};

export default WebApplicationElevenSecurecode;
