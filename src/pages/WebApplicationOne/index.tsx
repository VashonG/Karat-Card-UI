import React from "react";

import { Img, Text, List } from "components";
import WebApplicationOneSelection from "components/WebApplicationOneSelection";
import WebApplicationOneSelection1 from "components/WebApplicationOneSelection1";

const WebApplicationOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-auto p-[100px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col gap-8 items-center justify-start max-w-[792px] mb-[366px] w-full">
          <div className="flex items-center justify-start self-stretch w-auto">
            <Img
              src="images/img_k21.png"
              className="h-[50px] md:h-auto object-cover w-[150px]"
              alt="k21"
            />
          </div>
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <div className="bg-white_A700 border border-gray_100 border-solid flex items-start justify-center p-8 sm:px-5 rounded-[24px] w-full">
              <div className="flex flex-col gap-10 items-start justify-start w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="font-medium text-gray_900 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Application Type
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_200 text-left w-auto"
                    variant="body1"
                  >
                    Before we start we have to make sure what kind of account
                    fits your needs.
                  </Text>
                </div>
                <List
                  className="sm:flex-col flex-row gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
                  orientation="horizontal"
                >
                  <WebApplicationOneSelection
                    className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-start justify-start p-5 rounded-[12px] w-full"
                    descriptioninon="The account will be used for your personal finances"
                  />
                  <WebApplicationOneSelection
                    className="bg-white_A700 border border-bluegray_50 border-solid flex flex-1 flex-col items-start justify-start p-5 rounded-[12px] w-full"
                    descriptioninon="Individual in full ownership of a business"
                  />
                  <WebApplicationOneSelection1
                    className="bg-lime_50 border-2 border-solid border-yellow_900 flex flex-1 flex-col items-start justify-start p-5 rounded-[12px] w-full"
                    descriptioninon="Applying as a corporation, LLC or partnership"
                  />
                </List>
                <Text
                  className="font-normal leading-[14.00px] max-w-[728px] md:max-w-full not-italic text-bluegray_200 text-left"
                  variant="body3"
                ></Text>
              </div>
            </div>
            <div className="flex flex-row sm:gap-10 items-center justify-between px-1.5 w-full">
              <Text
                className="font-normal not-italic text-bluegray_400 text-left w-auto"
                variant="body1"
              >
                Cancel
              </Text>
              <div className="flex relative w-[78px]">
                <div className="flex items-center justify-center my-auto px-4 py-2.5 rounded-lg self-stretch w-auto">
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

export default WebApplicationOnePage;
