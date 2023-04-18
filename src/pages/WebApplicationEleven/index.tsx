import React from "react";

import { Img, Text, Line, List, Button } from "components";
import WebApplicationElevenSecurecode from "components/WebApplicationElevenSecurecode";
import { useNavigate } from "react-router-dom";

const WebApplicationElevenPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-auto p-[100px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col gap-8 items-center justify-start max-w-[720px] mb-[316px] w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <Img
              src="images/img_k21.png"
              className="h-[50px] md:h-auto object-cover w-[150px]"
              alt="k21"
            />
          </div>
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <div className="bg-white_A700 border border-gray_100 border-solid flex flex-col gap-12 items-start justify-center p-8 sm:px-5 rounded-[24px] w-full">
              <div className="flex md:flex-col flex-row gap-8 items-center justify-start w-full">
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Img
                    src="images/img_group3.svg"
                    className="h-1.5 w-full"
                    alt="groupThree"
                  />
                  <Text
                    className="font-medium text-gray_800 text-left w-auto"
                    variant="body3"
                  >
                    Application type
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <div className="h-1.5 relative w-[96%]">
                    <Line className="bg-bluegray_50 h-1.5 m-auto rounded-[3px] w-full" />
                    <Line className="absolute bg-yellow_900 h-1.5 inset-[0] justify-center m-auto rounded-[3px] w-full" />
                  </div>
                  <Text
                    className="font-medium text-gray_800 text-left w-auto"
                    variant="body3"
                  >
                    Business Information
                  </Text>
                </div>
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-[31px] grid grid-cols-3 w-[58%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Line className="bg-yellow_900 h-1.5 rounded-[3px] w-full" />
                    <Text
                      className="font-medium text-gray_800 text-left w-auto"
                      variant="body3"
                    >
                      Officer Information
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Line className="bg-bluegray_50 h-1.5 rounded-[3px] w-full" />
                    <Text
                      className="font-medium text-gray_800 text-left w-auto"
                      variant="body3"
                    >
                      Phone Verification
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Line className="bg-bluegray_50 h-1.5 rounded-[3px] w-full" />
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body3"
                    >
                      Beneficial Owners{" "}
                    </Text>
                  </div>
                </List>
              </div>
              <div className="flex flex-col gap-5 items-center justify-center w-full">
                <div className="flex flex-col gap-2 items-start justify-start pb-4 w-full">
                  <Text
                    className="font-medium text-gray_900 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Phone Verification
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_200 text-left w-auto"
                    variant="body1"
                  >
                    We sent you an SMS verification code to: +1 202 555 0150
                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <WebApplicationElevenSecurecode
                    className="flex flex-col items-start justify-start self-stretch w-auto sm:w-full"
                    securecode="Secure Code"
                    seven="7"
                    eight="8"
                    zero="0"
                    zeroOne="0"
                    zeroTwo="0"
                    zeroThree="0"
                  />
                  <div className="flex flex-row gap-3 items-start justify-start self-stretch w-auto">
                    <Button
                      className="common-pointer cursor-pointer font-medium min-w-[72px] text-center text-sm text-white_A700 w-auto"
                      onClick={() => navigate("/webapplicationtwelve")}
                      shape="CircleBorder20"
                      size="md"
                      variant="FillYellow900"
                    >
                      Verify
                    </Button>
                    <div className="flex flex-col items-center justify-center px-4 py-2.5 rounded-lg self-stretch w-auto">
                      <Text
                        className="font-medium text-gray_900 text-left w-auto"
                        variant="body1"
                      >
                        Resend
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start px-1.5 w-full">
              <div className="h-10 md:h-[37px] relative w-[79px]">
                <Img
                  src="images/img_arrowleft.svg"
                  className="absolute h-5 inset-y-[0] left-[0] my-auto w-5"
                  alt="arrowleft"
                />
                <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-center my-auto px-4 py-2.5 right-[0] rounded-lg self-stretch w-auto">
                  <Text
                    className="font-medium text-bluegray_400 text-left w-auto"
                    variant="body1"
                  >
                    Back
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

export default WebApplicationElevenPage;
