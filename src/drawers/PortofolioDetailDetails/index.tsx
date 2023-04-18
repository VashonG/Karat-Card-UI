import React from "react";
import Drawer from "rc-drawer";
import "rc-drawer/assets/index.css";

import { Img, Input } from "components";
import PortofolioDetailDetailsCreditcard from "components/PortofolioDetailDetailsCreditcard";
import PortofolioTabs from "components/PortofolioTabs";
import PortofolioDetailDetailsReadonlyform from "components/PortofolioDetailDetailsReadonlyform";

const PortofolioDetailDetailsDrawer = (props) => {
  return (
    <>
      <Drawer placement="right" className="!w-[41%]" {...props}>
        <div>
          <div className="flex flex-col font-jetbrainsmono items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[850px] sm:w-full md:w-full">
            <div className="bg-white_A700 flex flex-col h-[1024px] md:h-auto items-center justify-start p-8 md:px-5 w-[590px] sm:w-full">
              <div className="flex flex-col gap-5 items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Img
                    src="images/img_arrowright_gray_800.svg"
                    className="h-6 w-6"
                    alt="arrowright"
                  />
                </div>
                <div className="flex flex-col gap-12 items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start self-stretch w-auto">
                    <PortofolioDetailDetailsCreditcard
                      className="bg-lime_50 flex flex-col items-end justify-start p-5 rounded-[12px] shadow-bs1 w-full"
                      neerajchinwan="Neeraj Chinwan"
                      language="● ● ● ●   ● ● 1● ●   ● ● ● ●"
                      zipcode="9303"
                    />
                  </div>
                  <div className="flex flex-col font-inter gap-5 items-start justify-start w-full">
                    <PortofolioTabs
                      className="flex flex-row items-start justify-start w-full"
                      label="Transactions"
                      label1="Transactions"
                      labelFive="Transactions"
                      labelSix="Transactions"
                    />
                    <Input
                      wrapClassName="flex w-full"
                      className="font-medium p-0 placeholder:text-red_500 text-[13px] text-left text-red_500 w-full"
                      name="duration"
                      placeholder="This account is 14 days past due"
                      prefix={
                        <Img
                          src="images/img_warning.svg"
                          className="mr-2.5 my-auto"
                          alt="warning"
                        />
                      }
                      shape="RoundedBorder12"
                      size="md"
                      variant="FillGray50"
                    ></Input>
                    <PortofolioDetailDetailsReadonlyform
                      className="flex flex-col items-start justify-start outline outline-[0.5px] outline-gray_100 py-4 rounded-[24px] w-full"
                      status="Status"
                      status1="Status"
                      status2="Status"
                      status3="Status"
                      status4="Status"
                      status5="Status"
                      status6="Status"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default PortofolioDetailDetailsDrawer;
