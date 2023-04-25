import React from "react";

import { List, Text, Img, Button } from "components";

const BillPayModalPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray_902 flex flex-col font-inter items-center justify-center mx-auto p-20 md:px-10 sm:px-5 w-full">
        <List
          className="sm:flex-col flex-row gap-9 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start max-w-7xl mb-[238px] mt-[235px] mx-auto self-stretch w-full"
          orientation="horizontal"
        >
          <div className="flex flex-col gap-5 items-end justify-start w-[293px]">
            <div className="bg-white_A700 border border-gray_100 border-solid flex flex-col gap-5 items-center justify-center p-8 sm:px-5 rounded-[24px] w-full">
              <div className="flex flex-col items-start justify-between w-full">
                <div className="flex flex-col gap-1 items-center justify-start self-stretch w-auto">
                  <Text
                    className="font-normal not-italic text-bluegray_400 text-left w-auto"
                    variant="body1"
                  >
                    Bill Due
                  </Text>
                  <Text
                    className="text-gray_900 text-left w-auto"
                    as="h2"
                    variant="h2"
                  ></Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col gap-[-1px] items-start justify-start w-full">
                  <div className="border border-bluegray_50 border-solid flex flex-col items-center justify-start px-3.5 py-2.5 rounded-bl-none rounded-br-none rounded-tl-[20px] rounded-tr-[20px] w-full">
                    <Img
                      src="images/img__10x114.png"
                      className="h-2.5 md:h-auto object-cover w-[114px]"
                      alt="Eight"
                    />
                  </div>
                  <div className="flex flex-row gap-[-1px] items-start justify-start w-full">
                    <Text
                      className="border border-bluegray_50 border-solid flex-1 font-normal not-italic px-3.5 py-2.5 rounded-bl-[20px] rounded-br-none rounded-tl-none rounded-tr-none text-bluegray_200 text-left w-full"
                      variant="body1"
                    >
                      MM / YY
                    </Text>
                    <Text
                      className="border border-bluegray_50 border-solid flex-1 font-normal not-italic px-3.5 py-2.5 rounded-bl-none rounded-br-[20px] rounded-tl-none rounded-tr-none text-bluegray_200 text-left w-full"
                      variant="body1"
                    >
                      CVC
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 items-center justify-start w-full">
                <Button
                  className="cursor-pointer font-medium text-center text-lime_50 text-sm w-full"
                  shape="CircleBorder20"
                  size="md"
                  variant="FillDeeporange100"
                >
                  Pay Bill
                </Button>
                <Text
                  className="font-normal not-italic text-bluegray_200 text-left w-auto"
                  variant="body3"
                ></Text>
              </div>
            </div>
            <Button
              className="cursor-pointer font-medium min-w-[73px] text-center text-sm text-white_A700 w-auto"
              shape="CircleBorder20"
              size="md"
              variant="FillYellow900"
            >
              Pay
            </Button>
          </div>
          <div className="flex flex-col gap-5 items-end justify-start w-[293px]">
            <div className="bg-white_A700 border border-gray_100 border-solid flex flex-col gap-5 items-center justify-center p-8 sm:px-5 rounded-[24px] w-full">
              <div className="flex flex-col items-start justify-between w-full">
                <div className="flex flex-col gap-1 items-center justify-start self-stretch w-auto">
                  <Text
                    className="font-normal not-italic text-bluegray_400 text-left w-auto"
                    variant="body1"
                  >
                    Bill Due
                  </Text>
                  <Text
                    className="text-gray_900 text-left w-auto"
                    as="h2"
                    variant="h2"
                  ></Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col gap-[-1px] items-start justify-start w-full">
                  <div className="border border-bluegray_50 border-solid flex flex-row gap-[18px] items-center justify-start px-3.5 py-2.5 rounded-bl-none rounded-br-none rounded-tl-[20px] rounded-tr-[20px] w-full">
                    <Img
                      src="images/img__10x114.png"
                      className="h-2.5 md:h-auto object-cover w-[114px]"
                      alt="Nine"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      6723
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[-1px] items-start justify-start w-full">
                    <Text
                      className="border border-bluegray_50 border-solid flex-1 font-normal not-italic px-3.5 py-2.5 rounded-bl-[20px] rounded-br-none rounded-tl-none rounded-tr-none text-gray_900 text-left w-full"
                      variant="body1"
                    >
                      03 / 23
                    </Text>
                    <Text
                      className="border border-bluegray_50 border-solid flex-1 font-normal not-italic px-3.5 py-2.5 rounded-bl-none rounded-br-[20px] rounded-tl-none rounded-tr-none text-gray_900 text-left w-full"
                      variant="body1"
                    >
                      123
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 items-center justify-start w-full">
                <div className="bg-yellow_900 flex flex-col items-center justify-center px-4 py-2 rounded-[20px] w-full">
                  <Img
                    src="images/img_heroiconsoutli.svg"
                    className="h-6 w-6"
                    alt="heroiconsoutli"
                  />
                </div>
                <Text
                  className="font-normal not-italic text-bluegray_200 text-left w-auto"
                  variant="body3"
                ></Text>
              </div>
            </div>
            <Button
              className="cursor-pointer font-medium min-w-[73px] text-center text-sm text-white_A700 w-auto"
              shape="CircleBorder20"
              size="md"
              variant="FillYellow900"
            >
              Pay
            </Button>
          </div>
          <div className="flex flex-col gap-5 items-end justify-start w-[293px]">
            <div className="bg-white_A700 border border-gray_100 border-solid flex flex-col gap-5 items-center justify-center p-8 sm:px-5 rounded-[24px] w-full">
              <div className="flex flex-col items-start justify-between w-full">
                <div className="flex flex-col gap-1 items-center justify-start self-stretch w-auto">
                  <Text
                    className="font-normal not-italic text-bluegray_400 text-left w-auto"
                    variant="body1"
                  >
                    Bill Due
                  </Text>
                  <Text
                    className="text-gray_900 text-left w-auto"
                    as="h2"
                    variant="h2"
                  ></Text>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                <div className="border border-red_A200 border-solid flex flex-col gap-[-1px] items-start justify-start rounded-[20px] w-[229px]">
                  <div className="border border-bluegray_50 border-solid flex flex-row gap-[18px] items-center justify-start px-3.5 py-2.5 rounded-bl-none rounded-br-none rounded-tl-[20px] rounded-tr-[20px] w-full">
                    <Img
                      src="images/img__10x114.png"
                      className="h-2.5 md:h-auto object-cover w-[114px]"
                      alt="Ten"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      6723
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[-1px] items-start justify-start w-full">
                    <Text
                      className="border border-bluegray_50 border-solid flex-1 font-normal not-italic px-3.5 py-2.5 rounded-bl-[20px] rounded-br-none rounded-tl-none rounded-tr-none text-gray_900 text-left w-full"
                      variant="body1"
                    >
                      03 / 23
                    </Text>
                    <Text
                      className="border border-bluegray_50 border-solid flex-1 font-normal not-italic px-3.5 py-2.5 rounded-bl-none rounded-br-[20px] rounded-tl-none rounded-tr-none text-gray_900 text-left w-full"
                      variant="body1"
                    >
                      123
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-normal not-italic text-center text-red_A200 w-auto"
                  variant="body3"
                >
                  Your card number is incorrect.
                </Text>
              </div>
              <div className="flex flex-col gap-3 items-center justify-start w-full">
                <Button
                  className="cursor-pointer font-medium text-center text-lime_50 text-sm w-full"
                  shape="CircleBorder20"
                  size="md"
                  variant="FillDeeporange100"
                >
                  Pay Bill
                </Button>
                <Text
                  className="font-normal not-italic text-bluegray_200 text-left w-auto"
                  variant="body3"
                ></Text>
              </div>
            </div>
            <Button
              className="cursor-pointer font-medium min-w-[73px] text-center text-sm text-white_A700 w-auto"
              shape="CircleBorder20"
              size="md"
              variant="FillYellow900"
            >
              Pay
            </Button>
          </div>
          <div className="flex flex-col gap-5 items-end justify-start w-[293px]">
            <div className="bg-white_A700 border border-gray_100 border-solid flex flex-col gap-5 items-center justify-center p-8 sm:px-5 rounded-[24px] w-full">
              <div className="flex flex-col items-start justify-between w-full">
                <div className="flex flex-col gap-1 items-center justify-start self-stretch w-auto">
                  <Text
                    className="font-normal not-italic text-bluegray_400 text-left w-auto"
                    variant="body1"
                  >
                    Bill Due
                  </Text>
                  <Text
                    className="text-gray_900 text-left w-auto"
                    as="h2"
                    variant="h2"
                  ></Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col gap-[-1px] items-start justify-start w-full">
                  <div className="border border-bluegray_50 border-solid flex flex-row gap-[18px] items-center justify-start px-3.5 py-2.5 rounded-bl-none rounded-br-none rounded-tl-[20px] rounded-tr-[20px] w-full">
                    <Img
                      src="images/img__10x114.png"
                      className="h-2.5 md:h-auto object-cover w-[114px]"
                      alt="Eleven"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      6724
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[-1px] items-start justify-start w-full">
                    <Text
                      className="border border-bluegray_50 border-solid flex-1 font-normal not-italic px-3.5 py-2.5 rounded-bl-[20px] rounded-br-none rounded-tl-none rounded-tr-none text-gray_900 text-left w-full"
                      variant="body1"
                    >
                      03 / 23
                    </Text>
                    <Text
                      className="border border-bluegray_50 border-solid flex-1 font-normal not-italic px-3.5 py-2.5 rounded-bl-none rounded-br-[20px] rounded-tl-none rounded-tr-none text-gray_900 text-left w-full"
                      variant="body1"
                    >
                      123
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 items-center justify-start w-full">
                <Button
                  className="cursor-pointer font-medium text-center text-sm text-white_A700 w-full"
                  shape="CircleBorder20"
                  size="md"
                  variant="FillYellow900"
                >
                  Pay Bill
                </Button>
                <Text
                  className="font-normal not-italic text-bluegray_200 text-left w-auto"
                  variant="body3"
                ></Text>
              </div>
            </div>
            <Button
              className="cursor-pointer font-medium min-w-[73px] text-center text-sm text-white_A700 w-auto"
              shape="CircleBorder20"
              size="md"
              variant="FillYellow900"
            >
              Pay
            </Button>
          </div>
        </List>
      </div>
    </>
  );
};

export default BillPayModalPage;
