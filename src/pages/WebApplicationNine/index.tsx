import React from "react";

import { Img, List, Line, Text, SelectBox, Input } from "components";
import WebApplicationTwoInput from "components/WebApplicationTwoInput";
import { useNavigate } from "react-router-dom";

const WebApplicationNinePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-auto p-[100px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col gap-8 items-center justify-start max-w-screen-sm w-full">
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
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
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
                </List>
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <div className="h-1.5 overflow-hidden relative w-[94%]">
                    <div className="w-full h-full absolute bg-bluegray_50 rounded-[3px]"></div>
                    <div
                      className="h-full absolute bg-yellow_900  rounded-[3px]"
                      style={{ width: "36%" }}
                    ></div>
                  </div>
                  <Text
                    className="font-medium text-gray_800 text-left w-auto"
                    variant="body3"
                  >
                    Beneficial Owners{" "}
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-5 items-center justify-center w-full">
                <div className="flex flex-col items-start justify-start pb-4 w-full">
                  <Text
                    className="font-medium text-gray_900 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Owner 1
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
                  <div className="flex sm:flex-col flex-row gap-6 items-start justify-start w-full">
                    <div className="flex flex-1 flex-col items-start justify-start w-full">
                      <WebApplicationTwoInput
                        className="flex flex-col items-start justify-start w-full"
                        emailEight="Email"
                      />
                    </div>
                    <div className="flex flex-1 flex-col items-start justify-start w-full">
                      <WebApplicationTwoInput
                        className="flex flex-col items-start justify-start w-full"
                        emailEight="Mobile Phone"
                      />
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-6 items-start justify-start w-full">
                    <div className="flex flex-1 flex-col items-start justify-start w-full">
                      <WebApplicationTwoInput
                        className="flex flex-col items-start justify-start w-full"
                        emailEight="Date of Birth"
                      />
                    </div>
                    <div className="flex flex-1 flex-col items-start justify-start w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="font-normal not-italic text-bluegray_700 text-left w-auto"
                          variant="body2"
                        >
                          Nationality
                        </Text>
                        <SelectBox
                          className="font-medium text-gray_900 text-left text-sm w-full"
                          placeholderClassName="text-gray_900"
                          name="input_Three"
                          placeholder="American"
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
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <WebApplicationTwoInput
                      className="flex flex-col items-start justify-start w-full"
                      emailEight="Social Security Number"
                      description={
                        <>
                          To verify the identity, we’ll need to know the
                          officer&#39;s full Social Security number or
                          Individual Taxpayer Identification Number.
                        </>
                      }
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <WebApplicationTwoInput
                      className="flex flex-col items-start justify-start w-full"
                      emailEight="Percentage"
                      inputFive="75"
                    />
                  </div>
                  <div className="flex sm:flex-col flex-row gap-6 items-start justify-start w-full">
                    <WebApplicationTwoInput
                      className="flex flex-1 flex-col items-start justify-start w-full"
                      emailEight="Stree"
                    />
                    <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_700 text-left w-auto"
                        variant="body2"
                      >
                        Apartment, unit, suite, or floor # (Optional)
                      </Text>
                      <Input
                        wrapClassName="flex h-10 px-3.5 py-2.5 w-full"
                        className="p-0 w-full"
                        name="input_Seven"
                        placeholder=""
                        shape="CircleBorder20"
                        variant="OutlineBluegray50"
                      ></Input>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-6 items-start justify-start w-full">
                    <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_700 text-left w-auto"
                        variant="body2"
                      >
                        Country
                      </Text>
                      <SelectBox
                        className="font-medium text-gray_900 text-left text-sm w-full"
                        placeholderClassName="text-gray_900"
                        name="input_Eight"
                        placeholder="United States of America"
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
                    <WebApplicationTwoInput
                      className="flex flex-1 flex-col items-start justify-start w-full"
                      emailEight="City"
                    />
                  </div>
                  <div className="flex sm:flex-col flex-row gap-6 items-start justify-start w-full">
                    <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_700 text-left w-auto"
                        variant="body2"
                      >
                        State
                      </Text>
                      <SelectBox
                        className="font-medium text-gray_900 text-left text-sm w-full"
                        placeholderClassName="text-gray_900"
                        name="input_Ten"
                        placeholder="California"
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
                    <WebApplicationTwoInput
                      className="flex flex-1 flex-col items-start justify-start w-full"
                      emailEight="Zip Code"
                    />
                  </div>
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
                onClick={() => navigate("/webapplicationten")}
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

export default WebApplicationNinePage;
