import React from "react";
import Drawer from "rc-drawer";
import "rc-drawer/assets/index.css";

import { Img, Text, List, Button } from "components";
import DealsThreeBadge from "components/DealsThreeBadge";
import PortofolioTabs from "components/PortofolioTabs";
import DealsThreeAccount from "components/DealsThreeAccount";
import DealsThreeAccount1 from "components/DealsThreeAccount1";
import PortofolioDetailDetailsReadonlyform from "components/PortofolioDetailDetailsReadonlyform";
import PortofolioDetailTransactionsRow from "components/PortofolioDetailTransactionsRow";
import PortofolioDetailTransactionsRow1 from "components/PortofolioDetailTransactionsRow1";
import PortofolioDetailTransactionsRow2 from "components/PortofolioDetailTransactionsRow2";
import DealsThreeBars from "components/DealsThreeBars";

const DealsThreeDrawer = (props) => {
  return (
    <>
      <Drawer placement="right" className="!w-1/2" {...props}>
        <div>
          <div className="flex font-inter items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[731px] sm:w-full md:w-full">
            <div className="bg-white_A700 flex h-[1538px] md:h-auto items-center justify-start max-w-[709px] p-8 md:px-5 w-full">
              <div className="flex flex-col gap-5 items-center justify-start w-full">
                <div className="flex items-start justify-start w-full">
                  <Img
                    src="images/img_arrowright_gray_800.svg"
                    className="h-6 w-6"
                    alt="arrowright"
                  />
                </div>
                <div className="flex flex-col gap-12 items-start justify-start w-full">
                  <div className="flex items-center justify-start w-full">
                    <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                      <div className="flex flex-row gap-4 items-center justify-start self-stretch w-auto">
                        <div className="flex items-center justify-center self-stretch w-auto">
                          <Text
                            className="text-center text-gray_900 w-auto"
                            as="h3"
                            variant="h3"
                          >
                            Cazba LLC
                          </Text>
                        </div>
                        <DealsThreeBadge
                          className="bg-green_50 flex flex-col items-start justify-start px-2 py-[3px] rounded-[11px] self-stretch w-auto sm:w-full"
                          labelTwo="Sent"
                        />
                      </div>
                      <div className="flex items-start justify-start self-stretch w-auto">
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-center w-auto"
                          variant="body2"
                        >
                          CCA202207405
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-8 items-start justify-start w-full">
                    <PortofolioTabs
                      className="flex flex-row flex-wrap items-start justify-start max-w-[677px] w-full"
                      label="Business Info."
                      label1="Business Info."
                      labelFive="Business Info."
                      labelSix="Business Info."
                    />
                    <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto md:w-full">
                      <Text
                        className="font-semibold text-center text-gray_900 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Accounts
                      </Text>
                      <List
                        className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[645px] w-full"
                        orientation="horizontal"
                      >
                        <DealsThreeAccount
                          className="bg-lime_50 border-2 border-solid border-yellow_900 flex flex-1 flex-col items-start justify-start p-4 rounded-[12px] w-full"
                          account="Account"
                          zipcode="3190"
                          savings="IRA"
                          three="$"
                          p13839="138.39"
                        />
                        <DealsThreeAccount1
                          className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-start justify-start p-4 rounded-[12px] w-full"
                          account="Account"
                          zipcode="4445"
                          savings="Savings"
                          five="$"
                          p13839="0.00"
                        />
                        <DealsThreeAccount1
                          className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-start justify-start p-4 rounded-[12px] w-full"
                          account="Account"
                          zipcode="7422"
                          savings="Checking"
                          five="$"
                          p13839="93.98"
                        />
                      </List>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="font-semibold text-center text-gray_900 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Decision Data
                      </Text>
                      <PortofolioDetailDetailsReadonlyform className="flex flex-col items-start justify-start outline outline-[0.5px] outline-gray_100 py-4 rounded-[24px] w-full" />
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="font-semibold text-center text-gray_900 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Transactions
                      </Text>
                      <List
                        className="flex-col md:gap-5 grid items-start w-full"
                        orientation="vertical"
                      >
                        <div className="bg-white_A700 flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between my-0 outline outline-[0.5px] outline-gray_100 sm:px-5 px-6 py-4 rounded-bl-none rounded-br-none rounded-tl-[24px] rounded-tr-[24px] w-full">
                          <div className="flex flex-row gap-[50px] items-center justify-start self-stretch w-auto">
                            <div className="flex items-center justify-start w-[200px]">
                              <Text
                                className="font-normal not-italic text-bluegray_400 text-left w-auto"
                                variant="body1"
                              >
                                Description
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
                          <div className="flex flex-row gap-[50px] items-center justify-end self-stretch w-auto">
                            <div className="flex items-center justify-end w-20">
                              <Text
                                className="font-normal not-italic text-bluegray_400 text-right w-auto"
                                variant="body1"
                              >
                                Amount
                              </Text>
                            </div>
                            <div className="flex items-center justify-end w-20">
                              <Text
                                className="font-normal not-italic text-bluegray_400 text-right w-auto"
                                variant="body1"
                              >
                                Balance
                              </Text>
                            </div>
                          </div>
                        </div>
                        <PortofolioDetailTransactionsRow
                          className="bg-white_A700 flex flex-1 flex-row items-center justify-between my-0 outline outline-[0.5px] outline-gray_100 p-6 sm:px-5 w-full"
                          labelOne="Feb 28, 2023"
                          price="$0.05"
                          priceOne="$0.05"
                        />
                        <PortofolioDetailTransactionsRow1
                          className="bg-white_A700 flex flex-1 flex-row items-center justify-between my-0 outline outline-[0.5px] outline-gray_100 p-6 sm:px-5 w-full"
                          labelOne="Feb 28, 2023"
                          price="$0.05"
                          priceOne="$0.05"
                        />
                        <PortofolioDetailTransactionsRow2
                          className="bg-white_A700 flex flex-1 flex-row items-center justify-between my-0 outline outline-[0.5px] outline-gray_100 p-6 sm:px-5 rounded-bl-[24px] rounded-br-[24px] rounded-tl-none rounded-tr-none w-full"
                          labelOne="Feb 28, 2023"
                          price="$0.05"
                          priceOne="$0.05"
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
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="font-semibold text-center text-gray_900 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Expenses by Category
                      </Text>
                      <DealsThreeBars
                        className="flex flex-col items-start justify-start max-w-[645px] w-full"
                        atmcashwithdrawOne="ATM/Cash Withdrawals"
                        thirtyseven="37%"
                        fourteen="14%"
                        frameninetynineOne="Gasoline/Fuel"
                        eight="8%"
                        travel="Travel"
                        four="4%"
                        one="1%"
                      />
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

export default DealsThreeDrawer;
