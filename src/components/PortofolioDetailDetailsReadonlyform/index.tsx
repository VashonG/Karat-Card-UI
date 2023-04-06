import React from "react";

import { List, Line, Text } from "components";

type PortofolioDetailDetailsReadonlyformProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    status: string;
    ellipseone: string;
    label: string;
    status1: string;
    ellipseone1: string;
    label1: string;
    status2: string;
    ellipseone2: string;
    label2: string;
    status3: string;
    ellipseone3: string;
    label3: string;
    status4: string;
    ellipseone4: string;
    label4: string;
    status5: string;
    ellipseone5: string;
    label5: string;
    status6: string;
    ellipseone6: string;
    label6: string;
  }>;

const PortofolioDetailDetailsReadonlyform: React.FC<
  PortofolioDetailDetailsReadonlyformProps
> = (props) => {
  return (
    <>
      <List className={props.className} orientation="vertical">
        <div className="flex flex-1 flex-row gap-2 items-center justify-start my-0 sm:px-5 px-6 w-full">
          {!!props?.status6 ? (
            <Text
              className="flex-1 font-inter font-normal not-italic text-bluegray_400 text-left w-auto"
              variant="body1"
            >
              {props?.status6}
            </Text>
          ) : null}
          <div className="flex flex-1 items-start justify-start w-full">
            <div className="bg-green_50 flex items-start justify-start px-2 py-[3px] rounded-[11px] self-stretch w-auto">
              <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                {!!props?.ellipseone5 ? (
                  <div className="bg-green_300 h-1.5 rounded-[50%] w-1.5"></div>
                ) : null}
                {!!props?.label5 ? (
                  <Text
                    className="font-inter font-medium text-green_500 text-left w-auto"
                    variant="body2"
                  >
                    {props?.label5}
                  </Text>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <Line className="self-center sm:flex-col bg-gray_100 w-[45%] flex flex-row" />
        <div className="flex flex-1 flex-row gap-2 items-center justify-start my-0 sm:px-5 px-6 w-full">
          {!!props?.status6 ? (
            <Text
              className="flex-1 font-inter font-normal not-italic text-bluegray_400 text-left w-auto"
              variant="body1"
            >
              {props?.status6}
            </Text>
          ) : null}
          <div className="flex flex-1 items-start justify-start w-full">
            <div className="bg-green_50 flex items-start justify-start px-2 py-[3px] rounded-[11px] self-stretch w-auto">
              <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                {!!props?.ellipseone5 ? (
                  <div className="bg-green_300 h-1.5 rounded-[50%] w-1.5"></div>
                ) : null}
                {!!props?.label5 ? (
                  <Text
                    className="font-inter font-medium text-green_500 text-left w-auto"
                    variant="body2"
                  >
                    {props?.label5}
                  </Text>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <Line className="self-center sm:flex-col bg-gray_100 w-[45%] flex flex-row" />
        <div className="flex flex-1 flex-row gap-2 items-center justify-start my-0 sm:px-5 px-6 w-full">
          {!!props?.status6 ? (
            <Text
              className="flex-1 font-inter font-normal not-italic text-bluegray_400 text-left w-auto"
              variant="body1"
            >
              {props?.status6}
            </Text>
          ) : null}
          <div className="flex flex-1 items-start justify-start w-full">
            <div className="bg-red-100 flex items-start justify-start px-2 py-[3px] rounded-[11px] self-stretch w-auto">
              <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                {!!props?.ellipseone6 ? (
                  <div className="bg-red_300 h-1.5 rounded-[50%] w-1.5"></div>
                ) : null}
                {!!props?.label6 ? (
                  <Text
                    className="font-inter font-medium text-left text-red_500 w-auto"
                    variant="body2"
                  >
                    {props?.label6}
                  </Text>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <Line className="self-center sm:flex-col bg-gray_100 w-[45%] flex flex-row" />
        <div className="flex flex-1 flex-row gap-2 items-center justify-start my-0 sm:px-5 px-6 w-full">
          {!!props?.status6 ? (
            <Text
              className="flex-1 font-inter font-normal not-italic text-bluegray_400 text-left w-auto"
              variant="body1"
            >
              {props?.status6}
            </Text>
          ) : null}
          <div className="flex flex-1 items-start justify-start w-full">
            <div className="bg-orange_51 flex items-start justify-start px-2 py-[3px] rounded-[11px] self-stretch w-auto">
              <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                {!!props?.ellipseone3 ? (
                  <div className="bg-orange_A200 h-1.5 rounded-[50%] w-1.5"></div>
                ) : null}
                {!!props?.label3 ? (
                  <Text
                    className="font-inter font-medium text-left text-orange_800 w-auto"
                    variant="body2"
                  >
                    {props?.label3}
                  </Text>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <Line className="self-center sm:flex-col bg-gray_100 w-[45%] flex flex-row" />
        <div className="flex flex-1 flex-row gap-2 items-center justify-start my-0 sm:px-5 px-6 w-full">
          {!!props?.status6 ? (
            <Text
              className="flex-1 font-inter font-normal not-italic text-bluegray_400 text-left w-auto"
              variant="body1"
            >
              {props?.status6}
            </Text>
          ) : null}
          <div className="flex flex-1 items-start justify-start w-full">
            <div className="bg-red-100 flex items-start justify-start px-2 py-[3px] rounded-[11px] self-stretch w-auto">
              <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                {!!props?.ellipseone6 ? (
                  <div className="bg-red_300 h-1.5 rounded-[50%] w-1.5"></div>
                ) : null}
                {!!props?.label6 ? (
                  <Text
                    className="font-inter font-medium text-left text-red_500 w-auto"
                    variant="body2"
                  >
                    {props?.label6}
                  </Text>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <Line className="self-center sm:flex-col bg-gray_100 w-[45%] flex flex-row" />
        <div className="flex flex-1 flex-row gap-2 items-center justify-start my-0 sm:px-5 px-6 w-full">
          {!!props?.status6 ? (
            <Text
              className="flex-1 font-inter font-normal not-italic text-bluegray_400 text-left w-auto"
              variant="body1"
            >
              {props?.status6}
            </Text>
          ) : null}
          <div className="flex flex-1 items-start justify-start w-full">
            <div className="bg-green_50 flex items-start justify-start px-2 py-[3px] rounded-[11px] self-stretch w-auto">
              <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                {!!props?.ellipseone5 ? (
                  <div className="bg-green_300 h-1.5 rounded-[50%] w-1.5"></div>
                ) : null}
                {!!props?.label5 ? (
                  <Text
                    className="font-inter font-medium text-green_500 text-left w-auto"
                    variant="body2"
                  >
                    {props?.label5}
                  </Text>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <Line className="self-center sm:flex-col bg-gray_100 w-[45%] flex flex-row" />
        <div className="flex flex-1 flex-row gap-2 items-center justify-start my-0 sm:px-5 px-6 w-full">
          {!!props?.status6 ? (
            <Text
              className="flex-1 font-inter font-normal not-italic text-bluegray_400 text-left w-auto"
              variant="body1"
            >
              {props?.status6}
            </Text>
          ) : null}
          <div className="flex flex-1 items-start justify-start w-full">
            <div className="bg-red-100 flex items-start justify-start px-2 py-[3px] rounded-[11px] self-stretch w-auto">
              <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                {!!props?.ellipseone6 ? (
                  <div className="bg-red_300 h-1.5 rounded-[50%] w-1.5"></div>
                ) : null}
                {!!props?.label6 ? (
                  <Text
                    className="font-inter font-medium text-left text-red_500 w-auto"
                    variant="body2"
                  >
                    {props?.label6}
                  </Text>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </List>
    </>
  );
};

PortofolioDetailDetailsReadonlyform.defaultProps = {};

export default PortofolioDetailDetailsReadonlyform;
