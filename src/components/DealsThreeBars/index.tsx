import React from "react";

import { Text, Input, Button, Switch } from "components";

type DealsThreeBarsProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    atmcashwithdrawOne: string;
    thirtyseven: string;
    fourteen: string;
    frameninetynineOne: string;
    eight: string;
    travel: string;
    four: string;
    one: string;
  }>;

const DealsThreeBars: React.FC<DealsThreeBarsProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-between max-w-[645px] pr-2.5 w-full">
          <div className="bg-lime_50 flex flex-row gap-2.5 items-start justify-start max-w-[645px] px-2.5 py-1.5 rounded-lg w-full">
            <Text
              className="font-inter font-medium text-gray_900 text-left w-auto"
              variant="body1"
            >
              {props?.atmcashwithdrawOne}
            </Text>
            <Text
              className="font-inter font-medium text-gray_900 text-right w-auto"
              variant="body1"
            >
              {props?.thirtyseven}
            </Text>
          </div>
        </div>
        <div className="flex flex-row sm:gap-10 items-center justify-between max-w-[645px] pr-2.5 w-full">
          <Input
            wrapClassName="w-auto"
            className="font-inter font-medium p-0 placeholder:text-gray_900 text-gray_900 text-left text-sm w-full"
            name="frameNinetyNine"
            placeholder="Credit Card Payments"
            shape="RoundedBorder8"
            size="sm"
            variant="FillLime50"
          ></Input>
          <Text
            className="font-inter font-medium text-gray_900 text-right w-auto"
            variant="body1"
          >
            {props?.fourteen}
          </Text>
        </div>
        <div className="flex flex-row sm:gap-10 items-center justify-between max-w-[645px] pr-2.5 w-full">
          <Text
            className="bg-lime_50 font-inter font-medium px-2.5 py-1.5 rounded-lg text-gray_900 text-left w-[149px]"
            variant="body1"
          >
            {props?.frameninetynineOne}
          </Text>
          <Text
            className="font-inter font-medium text-gray_900 text-right w-auto"
            variant="body1"
          >
            {props?.eight}
          </Text>
        </div>
        <div className="flex flex-row sm:gap-10 items-center justify-between max-w-[645px] pr-2.5 w-full">
          <Button
            className="cursor-pointer font-inter font-medium text-center text-gray_900 text-sm w-[70px]"
            shape="RoundedBorder8"
            size="sm"
            variant="FillLime50"
          >
            {props?.travel}
          </Button>
          <Text
            className="font-inter font-medium text-gray_900 text-right w-auto"
            variant="body1"
          >
            {props?.four}
          </Text>
        </div>
        <div className="flex flex-row sm:gap-10 items-center justify-between max-w-[645px] pr-2.5 w-full">
          <Switch
            onColor=""
            offColor=""
            onHandleColor=""
            offHandleColor=""
            value={false}
            className="gap-2.5 px-2.5 py-1.5 w-[41px]"
          />
          <Text
            className="font-inter font-medium text-gray_900 text-right w-auto"
            variant="body1"
          >
            {props?.one}
          </Text>
        </div>
      </div>
    </>
  );
};

DealsThreeBars.defaultProps = {
  atmcashwithdrawOne: "ATM/Cash Withdrawals",
  thirtyseven: "37%",
  fourteen: "14%",
  frameninetynineOne: "Gasoline/Fuel",
  eight: "8%",
  travel: "Travel",
  four: "4%",
  one: "1%",
};

export default DealsThreeBars;
