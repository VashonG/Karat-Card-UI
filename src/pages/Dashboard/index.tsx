import React from "react";

import DashboardMenu from "components/DashboardMenu";
import { Text, SelectBox, Img } from "components";
import DashboardMetrics from "components/DashboardMetrics";
import DashboardStackedbar from "components/DashboardStackedbar";
import DashboardGraph2lines from "components/DashboardGraph2lines";
import DashboardGraph1line from "components/DashboardGraph1line";
import DashboardTable from "components/DashboardTable";

const DashboardPage: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[34px] items-center justify-between max-w-[1408px] mx-auto md:px-5 w-full">
          <DashboardMenu className="bg-white_A700 flex flex-col h-[1235px] md:hidden justify-start outline outline-gray_100 w-[278px]" />
          <div className="flex flex-1 flex-col gap-5 items-center justify-start w-full">
            <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1096px] w-full">
              <Text
                className="font-semibold text-black_900 text-left w-auto"
                as="h5"
                variant="h5"
              >
                Your overview
              </Text>
              <div className="flex sm:flex-1 flex-col items-start justify-start w-[134px] sm:w-full">
                <SelectBox
                  className="font-medium text-gray_900 text-left text-sm w-full"
                  placeholderClassName="text-gray_900"
                  name="input"
                  placeholder="This month"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-5 w-5"
                      alt="arrow_down"
                    />
                  }
                  shape="CircleBorder20"
                  size="sm"
                  variant="White"
                ></SelectBox>
              </div>
            </div>
            <div className="flex flex-col gap-5 items-start justify-start self-stretch w-auto md:w-full">
              <DashboardMetrics
                className="bg-white_A700 flex flex-col items-start justify-start max-w-[1096px] outline outline-[0.5px] outline-gray_100 p-6 sm:px-5 rounded-[24px] w-full"
                wallet="Wallet"
                thismonth="This month"
                eight="8"
                badge="+28%"
                totalcards="Total Cards"
                six="6"
                badge1="-19%"
                activecards="Active Cards"
                two="2"
                badge2="+6%"
                suspendedcards="Suspended Cards"
                price="$236"
                badge3="+6%"
                totalcommissionOne="Total Commission"
              />
              <div className="flex md:flex-col flex-row gap-5 items-start justify-start self-stretch w-auto md:w-full">
                <DashboardStackedbar
                  className="bg-white_A700 flex flex-col h-[273px] md:h-auto items-start justify-start outline outline-[0.5px] outline-gray_100 p-6 sm:px-5 rounded-[24px] w-[352px] sm:w-full"
                  totalapplicatioOne="Total Applications"
                  thismonthOne="This month"
                  business="Business"
                  six="6"
                  consumer="Consumer"
                  three="3"
                  total="Total"
                  nine="9"
                />
                <DashboardGraph2lines
                  className="bg-white_A700 flex flex-col items-start justify-start outline outline-[0.5px] outline-gray_100 p-6 sm:px-5 rounded-[24px] w-[352px] sm:w-full"
                  approvalsrejectOne="Approvals & Rejections"
                  thismonthTwo="This month"
                  ten="10"
                  zero="0"
                  marcounter="Mar 9"
                  approved="Approved"
                  two="2"
                  rejected="Rejected"
                  zeroOne="0"
                  mar12023="Mar 1, 2023"
                  mar312023="Mar 31, 2023"
                />
                <DashboardGraph1line
                  className="bg-white_A700 flex flex-col items-start justify-start outline outline-[0.5px] outline-gray_100 p-6 sm:px-5 rounded-[24px] w-[352px] sm:w-full"
                  annualspend="Annual Spend"
                  thismonthThree="This month"
                  price="$5,274"
                  priceOne="$0"
                  mar12023One="Mar 1, 2023"
                  mar312023One="Mar 31, 2023"
                  marcounterOne="Mar 17"
                  priceTwo="$628"
                />
              </div>
              <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto md:w-full">
                <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1096px] w-full">
                  <Text
                    className="font-medium text-gray_900 text-left w-auto"
                    variant="body1"
                  >
                    Credit Applications
                  </Text>
                  <div className="flex relative w-[91px]">
                    <div className="flex flex-col items-center justify-center my-auto px-4 py-2.5 rounded-lg self-stretch w-auto">
                      <Text
                        className="font-medium text-gray_900 text-left w-auto"
                        variant="body1"
                      >
                        See all
                      </Text>
                    </div>
                    <Img
                      src="images/img_arrowright.svg"
                      className="h-5 ml-[-6px] my-auto w-5 z-[1]"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <DashboardTable
                  className="flex flex-col items-start justify-start max-w-[1096px] rounded-[24px] w-full"
                  label="Name"
                  labelOne="Name"
                  label1="Balance"
                  labelOne1="Name"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
