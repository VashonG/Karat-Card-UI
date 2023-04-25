import React from "react";

import { Img, List, Line, Text } from "components";
import WebApplicationTwoInput from "components/WebApplicationTwoInput";
import { useNavigate } from "react-router-dom";

const WebApplicationSevenPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-auto p-[100px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col gap-8 items-center justify-start max-w-screen-sm mb-[180px] w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <Img
              src="images/img_k21.png"
              className="h-[50px] md:h-auto object-cover w-[150px]"
              alt="k21"
            />
          </div>
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <div className="bg-white_A700 border border-gray_100 border-solid flex flex-col gap-12 items-start justify-center p-8 sm:px-5 rounded-[24px] w-full">
              <div className="flex sm:flex-col flex-row gap-8 items-center justify-start w-full">
                <List
                  className="sm:flex-1 sm:flex-col flex-row gap-8 grid sm:grid-cols-1 grid-cols-3 w-[74%] sm:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
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
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <div className="h-1.5 relative w-full">
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
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <div className="h-1.5 relative w-full">
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
                </List>
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Line className="bg-bluegray_50 h-1.5 rounded-[3px] w-full" />
                  <Text
                    className="font-normal not-italic text-bluegray_400 text-left w-auto"
                    variant="body3"
                  >
                    Beneficial Owners{" "}
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-5 items-center justify-center w-full">
                <div className="flex flex-col gap-2 items-start justify-start pb-4 w-full">
                  <Text
                    className="font-medium text-gray_900 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Business contact
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_200 text-left w-auto"
                    variant="body1"
                  >
                    Next, we will need information about one officer at the
                    business
                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <div className="flex sm:flex-col flex-row gap-6 items-start justify-start w-full">
                    <WebApplicationTwoInput
                      className="flex flex-1 flex-col items-start justify-start w-full"
                      emailEight="First Name"
                    />
                    <WebApplicationTwoInput
                      className="flex flex-1 flex-col items-start justify-start w-full"
                      emailEight="Last Name"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <WebApplicationTwoInput
                        className="flex flex-col items-start justify-start w-full"
                        emailEight="Email"
                      />
                    </div>
                  </div>
                  <WebApplicationTwoInput
                    className="flex flex-col items-start justify-start w-full"
                    emailEight="Phone Number"
                    description="This phone number is the primary contact number, and will occasionally be used to verify your identity and protect your account"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row sm:gap-10 items-center justify-between px-1.5 w-full">
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
              <div
                className="common-pointer flex relative w-[78px]"
                onClick={() => navigate("/webapplicationeight")}
              >
                <div className="flex flex-col items-center justify-center my-auto px-4 py-2.5 rounded-lg self-stretch w-auto">
                  <Text
                    className="font-medium text-gray_900 text-left w-auto"
                    variant="body1"
                  >
                    Next
                  </Text>
                </div>
                <Img
                  src="images/img_arrowright.svg"
                  className="h-5 ml-[-6px] my-auto w-5 z-[1]"
                  alt="arrowright"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebApplicationSevenPage;
