import React from "react";

import { Text, Img } from "components";

type DealsThreeAccountProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    account: string;
    zipcode: string;
    savings: string;
    three: string;
    p13839: string;
  }>;

const DealsThreeAccount: React.FC<DealsThreeAccountProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-3 items-center justify-between w-full">
          <Text
            className="font-inter font-normal not-italic text-gray_900 text-left w-auto"
            variant="body1"
          >
            {props?.account}
          </Text>
          <div className="flex flex-row gap-2 items-center justify-end self-stretch w-auto">
            <Img
              src="images/img__11x33.png"
              className="h-[11px] md:h-auto object-cover w-[33px]"
              alt="Two"
            />
            <Text
              className="font-inter font-normal not-italic text-gray_900 text-left w-auto"
              variant="body1"
            >
              {props?.zipcode}
            </Text>
          </div>
        </div>
        <div className="flex flex-row gap-2.5 items-start justify-start w-full">
          <div className="flex flex-1 items-start justify-start w-full">
            <Text
              className="font-inter font-normal not-italic text-bluegray_400 text-left w-auto"
              variant="body2"
            >
              {props?.savings}
            </Text>
          </div>
          <div className="flex flex-row gap-[3px] items-start justify-start self-stretch w-auto">
            <Text
              className="font-inter font-normal not-italic text-bluegray_200 text-right w-auto"
              variant="body2"
            >
              {props?.three}
            </Text>
            <Text
              className="font-inter font-normal not-italic text-bluegray_400 text-right w-auto"
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

DealsThreeAccount.defaultProps = {
  account: "Account",
  zipcode: "3190",
  savings: "IRA",
  three: "$",
  p13839: "138.39",
};

export default DealsThreeAccount;
