import React from "react";

import Sidebar from "components/Sidebar";
import PortofolioTabs from "components/PortofolioTabs";
import { Input, Button, Text } from "components";
import DashboardTable from "components/DashboardTable";

const DealsOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[34px] items-start justify-between max-w-[1408px] mx-auto md:px-5 w-full">
          <Sidebar className="bg-white_A700 flex flex-col h-[1024px] md:hidden justify-start outline outline-gray_100 w-[278px]" />
          <div className="flex flex-1 flex-col items-center justify-start md:mt-0 mt-8 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1096px] w-full">
              <PortofolioTabs
                className="flex sm:flex-1 flex-row items-start justify-between self-stretch w-auto sm:w-full"
                label="Consumer Deals"
                label1="Consumer Deals"
                labelFive="Consumer Deals"
                labelSix="Consumer Deals"
              />
              <div className="flex sm:flex-1 sm:flex-col flex-row gap-3 items-start justify-end self-stretch w-auto sm:w-full">
                <div className="flex flex-col items-start justify-start w-60 sm:w-full">
                  <Input
                    wrapClassName="w-full"
                    className="font-normal not-italic p-0 placeholder:text-bluegray_200 text-bluegray_200 text-left text-sm w-full"
                    name="input"
                    placeholder="Search"
                    shape="CircleBorder20"
                    size="md"
                    variant="OutlineBluegray50"
                  ></Input>
                </div>
                <Button
                  className="cursor-pointer font-medium min-w-[66px] text-center text-gray_900 text-sm w-auto"
                  shape="CircleBorder20"
                  size="md"
                  variant="White"
                >
                  Filter
                </Button>
                <Button
                  className="cursor-pointer font-medium min-w-[121px] text-center text-sm text-white_A700 w-auto"
                  shape="CircleBorder20"
                  size="md"
                  variant="FillYellow900"
                >
                  Submit Deals
                </Button>
              </div>
            </div>
            <DashboardTable
              className="flex flex-col items-start justify-start max-w-[1096px] mt-5 rounded-[24px] w-full"
              label="Applications"
              labelOne="Applications"
              labelOne1="Applications"
            />
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1096px] mt-2.5 w-full">
              <div className="flex flex-col items-start justify-start self-stretch w-auto">
                <div className="flex flex-col items-start justify-start px-3 py-2.5 self-stretch w-auto">
                  <Text
                    className="font-normal not-italic text-bluegray_700 text-left w-auto"
                    variant="body1"
                  >
                    Viewing 21–40 of 273 results
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-row gap-3 items-start justify-end w-full">
                <Button
                  className="cursor-pointer font-medium min-w-[66px] text-center text-gray_900 text-sm w-auto"
                  shape="CircleBorder20"
                  size="md"
                  variant="White"
                >
                  Prev.
                </Button>
                <Button
                  className="cursor-pointer font-medium min-w-[64px] text-center text-gray_900 text-sm w-auto"
                  shape="CircleBorder20"
                  size="md"
                  variant="White"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealsOnePage;
