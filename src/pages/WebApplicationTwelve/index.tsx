import React from "react";

import { Img, List, Line, Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const WebApplicationTwelvePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-auto p-[100px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col gap-8 items-center justify-start max-w-screen-sm mb-[564px] w-full">
          <div className="flex items-center justify-center w-full">
            <Img
              src="images/img_k21.png"
              className="h-[50px] md:h-auto object-cover w-[150px]"
              alt="k21"
            />
          </div>
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <div className="bg-white_A700 border border-gray_100 border-solid flex flex-col gap-12 items-start justify-center p-8 sm:px-5 rounded-[24px] w-full">
              <List
                className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 grid-cols-4 justify-start w-full"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <div className="h-1.5 relative w-full">
                    <Line className="bg-bluegray_50 h-1.5 m-auto rounded-[3px] w-full" />
                    <Line className="absolute bg-yellow_900 h-1.5 inset-[0] justify-center m-auto rounded-[3px] w-full" />
                  </div>
                  <Text
                    className="font-medium text-gray_800 text-left w-auto"
                    variant="body3"
                  >
                    Application type
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <div className="h-1.5 relative w-[94%]">
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
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <div className="h-1.5 relative w-[94%]">
                    <Line className="bg-bluegray_50 h-1.5 m-auto rounded-[3px] w-full" />
                    <Line className="absolute bg-yellow_900 h-1.5 inset-[0] justify-center m-auto rounded-[3px] w-full" />
                  </div>
                  <Text
                    className="font-medium text-gray_800 text-left w-auto"
                    variant="body3"
                  >
                    Officer Information
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <div className="h-1.5 relative w-[94%]">
                    <Line className="bg-bluegray_50 h-1.5 m-auto rounded-[3px] w-full" />
                    <Line className="absolute bg-yellow_900 h-1.5 inset-[0] justify-center m-auto rounded-[3px] w-full" />
                  </div>
                  <Text
                    className="font-medium text-gray_800 text-left w-auto"
                    variant="body3"
                  >
                    Beneficial Owners{" "}
                  </Text>
                </div>
              </List>
              <div className="flex flex-col gap-5 items-center justify-center w-full">
                <div className="flex items-start justify-start pb-4 w-full">
                  <Text
                    className="font-medium text-gray_900 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Confirm Application
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-3 items-start justify-start w-full">
                  <div className="flex items-start justify-start pt-0.5 self-stretch w-auto">
                    <Img
                      src="images/img_file_white_a700.svg"
                      className="h-4 w-4"
                      alt="file"
                    />
                  </div>
                  <Text
                    className="flex-1 font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                    variant="body1"
                  >
                    <>
                      By providing the information above, I hereby certify, to
                      the best of my knowledge, that the information provided
                      above is complete and correct.
                      <br />I agree to the KAPED Privacy Policy, Consent to
                      Electronic Disclosures, Deposit Terms & Conditions, Client
                      Terms of Service.
                    </>
                  </Text>
                </div>
                <Text
                  className="font-normal leading-[14.00px] md:max-w-full max-w-xl not-italic text-bluegray_200 text-left"
                  variant="body3"
                >
                  KAPED is a financial technology company and is not a bank.
                  Banking services provided by Blue Ridge Bank; Member FDIC.
                </Text>
              </div>
            </div>
            <div className="flex flex-row sm:gap-10 items-center justify-between pl-1.5 w-full">
              <div className="h-10 relative w-[79px]">
                <Img
                  src="images/img_arrowleft.svg"
                  className="absolute h-5 inset-y-[0] left-[0] my-auto w-5"
                  alt="arrowleft"
                />
                <div className="absolute flex h-full inset-y-[0] items-center justify-center my-auto px-4 py-2.5 right-[0] rounded-lg self-stretch w-auto">
                  <Text
                    className="font-medium text-bluegray_400 text-left w-auto"
                    variant="body1"
                  >
                    Back
                  </Text>
                </div>
              </div>
              <div className="flex items-center justify-start self-stretch w-auto">
                <Button
                  className="common-pointer bg-yellow_900 cursor-pointer font-medium min-w-[80px] px-4 py-2.5 rounded-[20px] text-center text-sm text-white_A700 w-auto"
                  onClick={() => navigate("/")}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebApplicationTwelvePage;
