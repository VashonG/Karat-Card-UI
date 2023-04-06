import React from "react";
import Drawer from "rc-drawer";
import "rc-drawer/assets/index.css";

import { Img, List, Text, Button } from "components";
import PortofolioDetailDetailsCreditcard from "components/PortofolioDetailDetailsCreditcard";
import PortofolioTabs from "components/PortofolioTabs";
import PortofolioDetailTransactionsRow from "components/PortofolioDetailTransactionsRow";
import PortofolioDetailTransactionsRow1 from "components/PortofolioDetailTransactionsRow1";
import PortofolioDetailTransactionsRow2 from "components/PortofolioDetailTransactionsRow2";

const PortofolioDetailTransactionsDrawer = (props) => {
  return (
    <>
      <Drawer placement="right" className="!w-[41%]" {...props}>
        <div>
          <div className="flex font-jetbrainsmono items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[850px] sm:w-full md:w-full">
            <div className="bg-white_A700 flex h-[1024px] md:h-auto items-center justify-start p-8 md:px-5 w-[590px] sm:w-full">
              <div className="flex flex-col gap-5 items-center justify-start w-full">
                <div className="flex items-start justify-start w-full">
                  <Img
                    src="images/img_arrowright_gray_800.svg"
                    className="h-6 w-6"
                    alt="arrowright"
                  />
                </div>
                <div className="flex flex-col gap-12 items-center justify-start w-full">
                  <div className="flex items-center justify-start self-stretch w-auto">
                    <PortofolioDetailDetailsCreditcard
                      className="bg-lime_50 flex flex-col items-end justify-start p-5 rounded-[12px] shadow-bs1 w-full"
                      neerajchinwan="Neeraj Chinwan"
                      language="images/img_.png"
                      zipcode="9303"
                    />
                  </div>
                  <div className="flex flex-col font-inter gap-5 items-start justify-start w-full">
                    <PortofolioTabs
                      className="flex flex-row items-start justify-start w-full"
                      label="Details"
                      label1="Details"
                      labelFive="Details"
                      labelSix="Details"
                    />
                    <List
                      className="flex-col sm:gap-5 grid items-start w-full"
                      orientation="vertical"
                    >
                      <div className="bg-white_A700 flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between my-0 outline outline-[0.5px] outline-gray_100 sm:px-5 px-6 py-4 rounded-bl-none rounded-br-none rounded-tl-[24px] rounded-tr-[24px] w-full">
                        <div className="flex flex-row gap-[50px] items-center justify-start self-stretch w-auto">
                          <div className="flex items-center justify-start w-[89px]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-auto"
                              variant="body1"
                            >
                              Type
                            </Text>
                          </div>
                          <div className="flex items-center justify-start w-20">
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-auto"
                              variant="body1"
                            >
                              Date
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[50px] items-center justify-end sm:pr-5 pr-6 self-stretch w-auto">
                          <div className="flex items-center justify-end w-20">
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-right w-auto"
                              variant="body1"
                            >
                              Amount
                            </Text>
                          </div>
                          <div className="flex items-center justify-start w-20">
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-auto"
                              variant="body1"
                            >
                              Status
                            </Text>
                          </div>
                        </div>
                      </div>
                      <PortofolioDetailTransactionsRow
                        className="bg-white_A700 flex flex-1 flex-row items-center justify-between my-0 outline outline-[0.5px] outline-gray_100 p-6 sm:px-5 w-full"
                        labelOne="Authorization"
                        price="$1.37"
                        priceOne="$1.37"
                      />
                      <PortofolioDetailTransactionsRow1
                        className="bg-white_A700 flex flex-1 flex-row items-center justify-between my-0 outline outline-[0.5px] outline-gray_100 p-6 sm:px-5 w-full"
                        labelOne="Authorization"
                        price="$6.33"
                        priceOne="$6.33"
                      />
                      <PortofolioDetailTransactionsRow1
                        className="bg-white_A700 flex flex-1 flex-row items-center justify-between my-0 outline outline-[0.5px] outline-gray_100 p-6 sm:px-5 w-full"
                        labelOne="Authorization"
                        price="$18.63"
                        priceOne="$18.63"
                      />
                      <PortofolioDetailTransactionsRow2
                        className="bg-white_A700 flex flex-1 flex-row items-center justify-between my-0 outline outline-[0.5px] outline-gray_100 p-6 sm:px-5 rounded-bl-[24px] rounded-br-[24px] rounded-tl-none rounded-tr-none w-full"
                        labelOne="Authorization"
                        price="$7,39"
                        priceOne="$7,39"
                      />
                    </List>
                    <div className="flex flex-row sm:gap-10 gap-[279px] items-center justify-between w-full">
                      <div className="flex items-start justify-start self-stretch w-auto">
                        <div className="flex items-start justify-start px-3 py-2.5 self-stretch w-auto">
                          <Text
                            className="font-normal not-italic text-bluegray_700 text-left w-auto"
                            variant="body1"
                          >
                            Viewing 21–40 of 273 results
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-row gap-3 items-start justify-end w-full">
                        <Button className="bg-white_A700 border border-bluegray_50 border-solid cursor-pointer font-medium min-w-[66px] px-4 py-2.5 rounded-[20px] text-center text-gray_900 text-sm w-auto">
                          Prev.
                        </Button>
                        <Button className="bg-white_A700 border border-bluegray_50 border-solid cursor-pointer font-medium min-w-[64px] px-4 py-2.5 rounded-[20px] text-center text-gray_900 text-sm w-auto">
                          Next
                        </Button>
                      </div>
                    </div>
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

export default PortofolioDetailTransactionsDrawer;
