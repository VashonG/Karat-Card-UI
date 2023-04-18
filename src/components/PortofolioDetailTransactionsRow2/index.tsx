import React from "react";

import { Text } from "components";

type PortofolioDetailTransactionsRow2Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    label: string;
    email: string;
    labelOne: string;
    price: string;
    priceOne: string;
    ellipseone: string;
    labelTwo: string;
  }>;

const PortofolioDetailTransactionsRow2: React.FC<
  PortofolioDetailTransactionsRow2Props
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-24 items-center justify-start self-stretch w-auto sm:w-full">
          <div className="flex flex-col items-center justify-start w-[200px]">
            <div className="flex flex-col gap-1 items-start justify-start self-stretch w-auto">
              {!!props?.label ? (
                <Text
                  className="font-inter font-medium text-gray_900 text-left w-auto"
                  variant="body1"
                >
                  {props?.label}
                </Text>
              ) : null}
              {!!props?.email ? (
                <Text
                  className="font-inter font-normal not-italic text-bluegray_400 text-left w-auto"
                  variant="body2"
                >
                  {props?.email}
                </Text>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[88px]">
            <Text
              className="font-inter font-normal not-italic text-gray_900 text-left w-auto"
              variant="body1"
            >
              {props?.labelOne}
            </Text>
          </div>
        </div>
        <div className="flex flex-row sm:gap-10 gap-24 items-center justify-start md:pr-10 sm:pr-5 pr-[100px] self-stretch w-auto sm:w-full">
          <div className="flex flex-col items-center justify-end w-20">
            {!!props?.priceOne ? (
              <Text
                className="font-inter font-medium text-gray_900 text-right w-auto"
                variant="body1"
              >
                {props?.priceOne}
              </Text>
            ) : null}
          </div>
          <div className="flex flex-col items-center justify-end w-20">
            {!!props?.priceOne ? (
              <Text
                className="font-inter font-medium text-gray_900 text-right w-auto"
                variant="body1"
              >
                {props?.priceOne}
              </Text>
            ) : null}
          </div>
          <div className="flex flex-col items-start justify-start w-20">
            <div className="bg-green_50 flex flex-col items-start justify-start px-2 py-[3px] rounded-[11px] self-stretch w-auto">
              <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                {!!props?.ellipseone ? (
                  <div className="bg-green_300 h-1.5 rounded-[50%] w-1.5"></div>
                ) : null}
                {!!props?.labelTwo ? (
                  <Text
                    className="font-inter font-medium text-green_500 text-left w-auto"
                    variant="body2"
                  >
                    {props?.labelTwo}
                  </Text>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PortofolioDetailTransactionsRow2.defaultProps = { labelOne: "Feb 28, 2023" };

export default PortofolioDetailTransactionsRow2;
