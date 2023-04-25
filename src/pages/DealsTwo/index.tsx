import React from "react";

import Sidebar from "components/Sidebar";
import PortofolioTabs from "components/PortofolioTabs";
import { Input, Button, Img, Text } from "components";
import DashboardTable from "components/DashboardTable";
import DealsTwoBadge from "components/DealsTwoBadge";
import PortofolioDetailDetailsReadonlyform from "components/PortofolioDetailDetailsReadonlyform";

const DealsTwoPage: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 flex sm:flex-col md:flex-col flex-row font-inter gap-[34px] items-center mx-auto w-full">
        <Sidebar className="bg-white_A700 flex flex-col h-[1024px] md:hidden justify-start outline outline-gray_100 md:px-5 w-[278px]" />
        <div className="flex-1 h-[1024px] md:h-[786px] md:px-5 relative w-full">
          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[3%] w-[98%]">
            <div className="flex flex-col gap-5 items-center justify-start w-full">
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
                className="flex flex-col items-start justify-start max-w-[1096px] rounded-[24px] w-full"
                label="Applications"
                labelOne="Applications"
                labelOne1="Applications"
              />
            </div>
          </div>
          <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[63%]">
            <div className="bg-white_A700 flex flex-col h-[1024px] md:h-auto items-center justify-start max-w-[709px] p-8 sm:px-5 w-full">
              <div className="flex flex-col gap-5 items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Img
                    src="images/img_arrowright_gray_800.svg"
                    className="h-6 w-6"
                    alt="arrowright"
                  />
                </div>
                <div className="flex flex-col gap-12 items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                      <div className="flex flex-row gap-4 items-center justify-start self-stretch w-auto">
                        <div className="flex flex-col items-center justify-center self-stretch w-auto">
                          <Text
                            className="text-center text-gray_900 w-auto"
                            as="h3"
                            variant="h3"
                          >
                            Cazba LLC
                          </Text>
                        </div>
                        <DealsTwoBadge
                          className="bg-gray_100 flex flex-col items-start justify-start px-2 py-[3px] rounded-[11px] self-stretch w-auto sm:w-full"
                          labelFour="Underwriting"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start self-stretch w-auto">
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-center w-auto"
                          variant="body2"
                        >
                          CCA202207405
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <PortofolioTabs
                      className="flex flex-row flex-wrap items-start justify-start max-w-[677px] w-full"
                      label="Personal Info."
                      label1="Personal Info."
                      labelFive="Personal Info."
                      labelSix="Personal Info."
                    />
                    <PortofolioDetailDetailsReadonlyform className="flex flex-col items-start justify-start outline outline-[0.5px] outline-gray_100 py-4 rounded-[24px] w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealsTwoPage;
