import React from "react";

import { Text, Line, Img } from "components";

type DashboardGraph2linesProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    approvalsrejectOne: string;
    thismonthTwo: string;
    ten: string;
    zero: string;
    marcounter: string;
    approved: string;
    two: string;
    rejected: string;
    zeroOne: string;
    mar12023: string;
    mar312023: string;
  }>;

const DashboardGraph2lines: React.FC<DashboardGraph2linesProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex items-start justify-start w-[304px]">
          <div className="flex flex-col gap-1 items-start justify-start self-stretch w-auto">
            <Text
              className="font-inter font-medium text-gray_900 text-left w-auto"
              variant="body1"
            >
              {props?.approvalsrejectOne}
            </Text>
            <Text
              className="font-inter font-normal not-italic text-bluegray_200 text-left w-auto"
              variant="body2"
            >
              {props?.thismonthTwo}
            </Text>
          </div>
        </div>
        <div className="flex items-start justify-start self-stretch w-auto">
          <div className="flex flex-col gap-[7px] items-start justify-start w-full">
            <Text
              className="font-inter font-normal not-italic text-gray_900 text-left w-auto"
              variant="body3"
            >
              {props?.ten}
            </Text>
            <div className="h-[106px] relative w-full">
              <Text
                className="absolute bottom-[6%] font-inter font-normal left-[0] not-italic text-gray_900 text-left w-auto"
                variant="body3"
              >
                {props?.zero}
              </Text>
              <div className="absolute h-[106px] inset-[0] justify-center m-auto w-full">
                <div className="h-[106px] md:h-[99px] m-auto w-full">
                  <div className="absolute flex flex-col inset-x-[0] mx-auto top-[0] w-full">
                    <Line className="bg-gray_300 h-px mt-[-NaNpx] mx-auto w-full z-[1]" />
                    <Img
                      src="images/img_vector1.svg"
                      className="h-[99px] mb-auto ml-auto mt-[-0.5px] w-auto z-[1]"
                      alt="vectorOne"
                    />
                  </div>
                  <Img
                    src="images/img_vector2.svg"
                    className="absolute bottom-[0] h-[26px] right-[0] w-auto"
                    alt="vectorTwo"
                  />
                </div>
                <div className="absolute flex flex-row h-full inset-y-[0] items-start justify-center my-auto right-[19%] w-[43%]">
                  <div className="h-[106px] relative w-[10%]">
                    <Line className="absolute bg-bluegray_400 h-[106px] inset-y-[0] left-1/4 my-auto w-px" />
                    <Img
                      src="images/img_group.svg"
                      className="absolute bottom-[9%] h-[15px] inset-x-[0] mx-auto w-auto"
                      alt="group"
                    />
                  </div>
                  <div className="bg-white_A700_e5 flex flex-col gap-2 items-start justify-start mb-7 mt-2 px-2 py-1.5 rounded-lg self-stretch shadow-bs w-auto">
                    <Text
                      className="font-inter font-normal not-italic text-bluegray_700 text-right w-auto"
                      variant="body3"
                    >
                      {props?.marcounter}
                    </Text>
                    <div className="flex flex-row gap-5 items-start justify-between w-[101px]">
                      <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                        <div className="bg-green_400 h-2.5 rounded-[50%] w-2.5"></div>
                        <Text
                          className="font-inter font-normal not-italic text-bluegray_700 text-right w-auto"
                          variant="body3"
                        >
                          {props?.approved}
                        </Text>
                      </div>
                      <Text
                        className="font-inter font-normal not-italic text-gray_900 text-right w-auto"
                        variant="body3"
                      >
                        {props?.two}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-5 items-start justify-between w-[101px]">
                      <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                        <div className="bg-red_A200 h-2.5 rounded-[50%] w-2.5"></div>
                        <Text
                          className="font-inter font-normal not-italic text-bluegray_700 text-right w-auto"
                          variant="body3"
                        >
                          {props?.rejected}
                        </Text>
                      </div>
                      <Text
                        className="font-inter font-normal not-italic text-gray_900 text-right w-auto"
                        variant="body3"
                      >
                        {props?.zeroOne}
                      </Text>
                    </div>
                  </div>
                </div>
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
                    {props?.mar12023}
                  </Text>
                  <Text
                    className="font-inter font-normal not-italic text-gray_900 text-right w-auto"
                    variant="body3"
                  >
                    {props?.mar312023}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DashboardGraph2lines.defaultProps = {
  approvalsrejectOne: "Approvals & Rejections",
  thismonthTwo: "This month",
  ten: "10",
  zero: "0",
  marcounter: "Mar 9",
  approved: "Approved",
  two: "2",
  rejected: "Rejected",
  zeroOne: "0",
  mar12023: "Mar 1, 2023",
  mar312023: "Mar 31, 2023",
};

export default DashboardGraph2lines;
