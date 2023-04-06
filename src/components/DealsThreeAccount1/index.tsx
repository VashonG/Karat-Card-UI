import React from "react";

import { Text, Img } from "components";

type DealsThreeAccount1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    account: string;
    zipcode: string;
    savings: string;
    five: string;
    p13839: string;
  }>;

const DealsThreeAccount1: React.FC<DealsThreeAccount1Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-3 items-center justify-between w-full">
          <Text
            className="font-inter font-normal not-italic text-bluegray_700 text-left w-auto"
            variant="body1"
          >
            {props?.account}
          </Text>
          <div className="flex flex-row gap-2 items-center justify-end self-stretch w-auto">
            <Img
              src="images/img__1.png"
              className="h-[11px] md:h-auto object-cover w-[33px]"
              alt="Four"
            />
            <Text
              className="font-inter font-normal not-italic text-bluegray_700 text-left w-auto"
              variant="body1"
            >
              {props?.zipcode}
            </Text>
          </div>
        </div>
        <div className="flex flex-row gap-2.5 items-start justify-start w-full">
          <div className="flex flex-1 items-start justify-start w-full">
            <Text
              className="font-inter font-normal not-italic text-bluegray_200 text-left w-auto"
              variant="body2"
            >
              {props?.savings}
            </Text>
          </div>
          <div className="flex flex-row gap-[3px] items-start justify-start self-stretch w-auto">
            <Text
              className="font-inter font-normal not-italic text-gray_300 text-right w-auto"
              variant="body2"
            >
              {props?.five}
            </Text>
            <Text
              className="font-inter font-normal not-italic text-bluegray_200 text-right w-auto"
              variant="body2"
            >
              {props?.p13839}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

DealsThreeAccount1.defaultProps = {
  account: "Account",
  zipcode: "4445",
  savings: "Savings",
  five: "$",
  p13839: "0.00",
};

export default DealsThreeAccount1;
