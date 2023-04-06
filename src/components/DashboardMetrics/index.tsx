import React from "react";

import { Text, List } from "components";

type DashboardMetricsProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    wallet: string;
    thismonth: string;
    eight: string;
    badge: string;
    totalcards: string;
    six: string;
    badge1: string;
    activecards: string;
    two: string;
    badge2: string;
    suspendedcards: string;
    price: string;
    badge3: string;
    totalcommissionOne: string;
  }>;

const DashboardMetrics: React.FC<DashboardMetricsProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-1 items-start justify-start self-stretch w-auto">
          <Text
            className="font-inter font-medium text-gray_900 text-left w-auto"
            variant="body1"
          >
            {props?.wallet}
          </Text>
          <Text
            className="font-inter font-normal not-italic text-bluegray_200 text-left w-auto"
            variant="body2"
          >
            {props?.thismonth}
          </Text>
        </div>
        <List
          className="sm:flex-col flex-row md:gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-between w-full"
          orientation="horizontal"
        >
          <div className="flex items-start justify-start self-stretch w-auto">
            <div className="flex flex-col gap-0.5 items-start justify-start self-stretch w-auto">
              <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                <Text
                  className="font-inter text-gray_900 text-left w-auto"
                  as="h4"
                  variant="h4"
                >
                  {props?.eight}
                </Text>
                <Text
                  className="bg-green_50 font-inter font-normal justify-center not-italic px-1.5 py-0.5 rounded-[9px] self-stretch text-green_500 text-left w-auto"
                  variant="body3"
                >
                  {props?.badge}
                </Text>
              </div>
              <Text
                className="font-inter font-normal not-italic text-bluegray_400 text-left w-auto"
                variant="body1"
              >
                {props?.totalcards}
              </Text>
            </div>
          </div>
          <div className="flex items-start justify-start self-stretch w-auto">
            <div className="flex flex-col gap-0.5 items-start justify-start self-stretch w-auto">
              <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                <Text
                  className="font-inter text-gray_900 text-left w-auto"
                  as="h4"
                  variant="h4"
                >
                  {props?.six}
                </Text>
                <Text
                  className="bg-red-100 font-inter font-normal justify-center not-italic px-1.5 py-0.5 rounded-[9px] self-stretch text-left text-red_500 w-auto"
                  variant="body3"
                >
                  {props?.badge1}
                </Text>
              </div>
              <Text
                className="font-inter font-normal not-italic text-bluegray_400 text-left w-auto"
                variant="body1"
              >
                {props?.activecards}
              </Text>
            </div>
          </div>
          <div className="flex items-start justify-start self-stretch w-auto">
            <div className="flex flex-col gap-0.5 items-start justify-start self-stretch w-auto">
              <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                <Text
                  className="font-inter text-gray_900 text-left w-auto"
                  as="h4"
                  variant="h4"
                >
                  {props?.two}
                </Text>
                <Text
                  className="bg-green_50 font-inter font-normal justify-center not-italic px-1.5 py-0.5 rounded-[9px] self-stretch text-green_500 text-left w-auto"
                  variant="body3"
                >
                  {props?.badge2}
                </Text>
              </div>
              <Text
                className="font-inter font-normal not-italic text-bluegray_400 text-left w-auto"
                variant="body1"
              >
                {props?.suspendedcards}
              </Text>
            </div>
          </div>
          <div className="flex items-start justify-start self-stretch w-auto">
            <div className="flex flex-col gap-0.5 items-start justify-start self-stretch w-auto">
              <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                <Text
                  className="font-inter text-gray_900 text-left w-auto"
                  as="h4"
                  variant="h4"
                >
                  {props?.price}
                </Text>
                <Text
                  className="bg-green_50 font-inter font-normal justify-center not-italic px-1.5 py-0.5 rounded-[9px] self-stretch text-green_500 text-left w-auto"
                  variant="body3"
                >
                  {props?.badge3}
                </Text>
              </div>
              <Text
                className="font-inter font-normal not-italic text-bluegray_400 text-left w-auto"
                variant="body1"
              >
                {props?.totalcommissionOne}
              </Text>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

DashboardMetrics.defaultProps = {
  wallet: "Wallet",
  thismonth: "This month",
  eight: "8",
  badge: "+28%",
  totalcards: "Total Cards",
  six: "6",
  badge1: "-19%",
  activecards: "Active Cards",
  two: "2",
  badge2: "+6%",
  suspendedcards: "Suspended Cards",
  price: "$236",
  badge3: "+6%",
  totalcommissionOne: "Total Commission",
};

export default DashboardMetrics;
