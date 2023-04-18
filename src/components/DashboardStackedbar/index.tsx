import React from "react";

import { Text, Img, List, Line } from "components";

type DashboardStackedbarProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    totalapplicatioOne: string;
    thismonthOne: string;
    business: string;
    six: string;
    consumer: string;
    three: string;
    total: string;
    nine: string;
  }>;

const DashboardStackedbar: React.FC<DashboardStackedbarProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-1 items-start justify-start self-stretch w-auto">
          <Text
            className="font-inter font-medium text-gray_900 text-left w-auto"
            variant="body1"
          >
            {props?.totalapplicatioOne}
          </Text>
          <Text
            className="font-inter font-normal not-italic text-bluegray_200 text-left w-auto"
            variant="body2"
          >
            {props?.thismonthOne}
          </Text>
        </div>
        <div className="flex flex-col gap-8 items-start justify-start w-full">
          <Img
            src="images/img_frame103.svg"
            className="h-3.5 w-full"
            alt="frame103"
          />
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <List
              className="flex-col gap-2 grid items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-row items-start justify-between w-full">
                <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                  <div className="bg-lime_800 h-3.5 rounded-[50%] w-3.5"></div>
                  <Text
                    className="font-inter font-normal not-italic text-gray_900 text-left w-auto"
                    variant="body1"
                  >
                    {props?.business}
                  </Text>
                </div>
                <Text
                  className="font-inter font-medium text-gray_900 text-right w-auto"
                  variant="body1"
                >
                  {props?.six}
                </Text>
              </div>
              <Line className="self-center h-px bg-gray_100 w-full" />
              <div className="flex flex-1 flex-row items-start justify-between w-full">
                <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                  <div className="bg-orange_50 h-3.5 rounded-[50%] w-3.5"></div>
                  <Text
                    className="font-inter font-normal not-italic text-gray_900 text-left w-auto"
                    variant="body1"
                  >
                    {props?.consumer}
                  </Text>
                </div>
                <Text
                  className="font-inter font-medium text-gray_900 text-right w-auto"
                  variant="body1"
                >
                  {props?.three}
                </Text>
              </div>
            </List>
            <div className="flex flex-row items-start justify-between w-full">
              <div className="flex flex-col items-center justify-start self-stretch w-auto">
                <Text
                  className="font-inter font-normal not-italic text-gray_900 text-left w-auto"
                  variant="body1"
                >
                  {props?.total}
                </Text>
              </div>
              <Text
                className="font-inter font-medium text-gray_900 text-right w-auto"
                variant="body1"
              >
                {props?.nine}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DashboardStackedbar.defaultProps = {
  totalapplicatioOne: "Total Applications",
  thismonthOne: "This month",
  business: "Business",
  six: "6",
  consumer: "Consumer",
  three: "3",
  total: "Total",
  nine: "9",
};

export default DashboardStackedbar;
