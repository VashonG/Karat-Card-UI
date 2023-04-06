import React from "react";

import { Text, Line, Img } from "components";

type DashboardGraph1lineProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    annualspend: string;
    thismonthThree: string;
    price: string;
    priceOne: string;
    mar12023One: string;
    mar312023One: string;
    marcounterOne: string;
    priceTwo: string;
  }>;

const DashboardGraph1line: React.FC<DashboardGraph1lineProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-1 items-start justify-start self-stretch w-auto">
          <Text
            className="font-inter font-medium text-gray_900 text-left w-auto"
            variant="body1"
          >
            {props?.annualspend}
          </Text>
          <Text
            className="font-inter font-normal not-italic text-bluegray_200 text-left w-auto"
            variant="body2"
          >
            {props?.thismonthThree}
          </Text>
        </div>
        <div className="h-[153px] md:h-[158px] relative w-full">
          <div className="absolute flex flex-col gap-1.5 h-full inset-[0] items-start justify-center m-auto w-[99%]">
            <Text
              className="font-inter font-normal not-italic text-gray_900 text-left w-auto"
              variant="body3"
            >
              {props?.price}
            </Text>
            <div className="h-[106px] relative w-full">
              <Text
                className="absolute bottom-[6%] font-inter font-normal h-3.5 left-[0] not-italic text-gray_900 text-left w-auto"
                variant="body3"
              >
                {props?.priceOne}
              </Text>
              <div className="absolute flex flex-col inset-[0] justify-center m-auto w-full">
                <Line className="bg-gray_300 h-px mt-[-NaNpx] mx-auto w-full z-[1]" />
                <Img
                  src="images/img_vector1_yellow_900.svg"
                  className="h-[106px] mb-auto ml-auto mt-[-0.5px] w-auto z-[1]"
                  alt="vectorOne_One"
                />
              </div>
            </div>
            <div className="flex flex-col items-end justify-start w-full">
              <Line className="bg-gray_300 h-px w-full" />
              <div className="flex flex-col gap-1.5 items-center justify-start w-[86%] md:w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Line className="bg-gray_300 h-[5px] rotate-[-90deg] w-px" />
                  <Line className="bg-gray_300 h-[5px] rotate-[-90deg] w-px" />
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="font-inter font-normal not-italic text-gray_900 text-left w-auto"
                    variant="body3"
                  >
                    {props?.mar12023One}
                  </Text>
                  <Text
                    className="font-inter font-normal not-italic text-gray_900 text-right w-auto"
                    variant="body3"
                  >
                    {props?.mar312023One}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-row items-start justify-evenly right-[0] top-[12%] w-[43%]">
            <div className="h-[106px] relative w-[10%]">
              <Line className="absolute bg-bluegray_400 h-[106px] inset-y-[0] left-1/4 my-auto w-px" />
              <Img
                src="images/img_group.svg"
                className="absolute bottom-[30%] h-[15px] inset-x-[0] mx-auto w-auto"
                alt="group_One"
              />
            </div>
            <div className="bg-white_A700_e5 flex flex-row gap-5 items-start justify-between mb-[50px] mt-[30px] px-2 py-1.5 rounded-lg shadow-bs w-[117px]">
              <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                <div className="bg-yellow_900 h-2.5 rounded-[50%] w-2.5"></div>
                <Text
                  className="font-inter font-normal not-italic text-bluegray_700 text-right w-auto"
                  variant="body3"
                >
                  {props?.marcounterOne}
                </Text>
              </div>
              <Text
                className="font-inter font-normal not-italic text-gray_900 text-right w-auto"
                variant="body3"
              >
                {props?.priceTwo}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DashboardGraph1line.defaultProps = {
  annualspend: "Annual Spend",
  thismonthThree: "This month",
  price: "$5,274",
  priceOne: "$0",
  mar12023One: "Mar 1, 2023",
  mar312023One: "Mar 31, 2023",
  marcounterOne: "Mar 17",
  priceTwo: "$628",
};

export default DashboardGraph1line;
