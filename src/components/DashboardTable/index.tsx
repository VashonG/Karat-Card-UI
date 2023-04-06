import React from "react";

import { List, Text, Img } from "components";

type DashboardTableProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    label: string;
    labelOne: string;
    label1: string;
    labelOne1: string;
    label2: string;
    secondlabel: string;
    labelOne2: string;
    price: string;
    ellipseone: string;
    labelTwo: string;
    label3: string;
    secondlabel1: string;
    lightbulb: string;
    labelOne3: string;
    price1: string;
    ellipseone1: string;
    labelTwo1: string;
    label4: string;
    secondlabel2: string;
    labelOne4: string;
    price2: string;
    labelTwo2: string;
    label5: string;
    secondlabel3: string;
    labelOne5: string;
    price3: string;
    labelTwo3: string;
    label6: string;
    secondlabel4: string;
    labelOne6: string;
    price4: string;
    ellipseone2: string;
    labelTwo4: string;
    label7: string;
    secondlabel5: string;
    labelOne7: string;
    price5: string;
    labelTwo5: string;
  }>;

const DashboardTable: React.FC<DashboardTableProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <List
          className="bg-white_A700 sm:flex-col flex-row md:gap-10 grid md:grid-cols-1 grid-cols-2 justify-between outline outline-[0.5px] outline-gray_100 sm:px-5 px-6 py-4 rounded-bl-none rounded-br-none rounded-tl-[24px] rounded-tr-[24px] w-full"
          orientation="horizontal"
        >
          <div className="flex sm:flex-1 flex-row gap-24 items-center justify-start self-stretch w-auto sm:w-full">
            <div className="flex items-center justify-start w-[200px]">
              <Text
                className="font-inter font-normal not-italic text-bluegray_400 text-left w-auto"
                variant="body1"
              >
                {props?.labelOne1}
              </Text>
            </div>
            <div className="flex items-center justify-start w-20">
              <Text
                className="font-inter font-normal not-italic text-bluegray_400 text-left w-auto"
                variant="body1"
              >
                {props?.labelOne1}
              </Text>
            </div>
          </div>
          <div className="flex flex-row gap-24 items-center justify-end md:pr-10 sm:pr-5 pr-[100px] self-stretch w-auto">
            <div className="flex items-center justify-end w-20">
              {!!props?.label1 ? (
                <Text
                  className="font-inter font-normal not-italic text-bluegray_400 text-right w-auto"
                  variant="body1"
                >
                  {props?.label1}
                </Text>
              ) : null}
            </div>
            <div className="flex items-center justify-start w-20">
              <Text
                className="font-inter font-normal not-italic text-bluegray_400 text-left w-auto"
                variant="body1"
              >
                {props?.labelOne1}
              </Text>
            </div>
          </div>
        </List>
        <List
          className="flex-col gap-px grid items-center w-full"
          orientation="vertical"
        >
          <div className="bg-white_A700 flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between outline outline-[0.5px] outline-gray_100 p-6 sm:px-5 w-full">
            <div className="flex sm:flex-1 flex-row gap-24 items-center justify-start self-stretch w-auto sm:w-full">
              <div className="flex items-center justify-start w-[200px]">
                <div className="flex flex-col gap-1 items-start justify-start self-stretch w-auto">
                  <Text
                    className="font-inter font-medium text-gray_900 text-left w-auto"
                    variant="body1"
                  >
                    {props?.label7}
                  </Text>
                  <Text
                    className="font-inter font-normal not-italic text-bluegray_400 text-left w-auto"
                    variant="body2"
                  >
                    {props?.secondlabel5}
                  </Text>
                </div>
              </div>
              <div className="flex items-center justify-start w-20">
                <Text
                  className="font-inter font-normal not-italic text-gray_900 text-left w-auto"
                  variant="body1"
                >
                  {props?.labelOne7}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-24 items-center justify-start md:pr-10 sm:pr-5 pr-[100px] self-stretch w-auto">
              <div className="flex items-center justify-end w-20">
                {!!props?.price5 ? (
                  <Text
                    className="font-inter font-medium text-gray_900 text-right w-auto"
                    variant="body1"
                  >
                    {props?.price5}
                  </Text>
                ) : null}
              </div>
              <div className="flex items-start justify-start w-[81px]">
                <div className="bg-orange_51 flex items-start justify-start px-2 py-[3px] rounded-[11px] self-stretch w-auto">
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                    {!!props?.ellipseone2 ? (
                      <div className="bg-orange_A200 h-1.5 rounded-[50%] w-1.5"></div>
                    ) : null}
                    {!!props?.labelTwo4 ? (
                      <Text
                        className="font-inter font-medium text-left text-orange_800 w-auto"
                        variant="body2"
                      >
                        {props?.labelTwo4}
                      </Text>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray_51 flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between outline outline-[0.5px] outline-gray_100 p-6 sm:px-5 w-full">
            <div className="flex sm:flex-1 flex-row gap-24 items-center justify-start self-stretch w-auto sm:w-full">
              <div className="flex relative w-[55%]">
                <div className="flex items-center justify-start ml-[undefinedpx] mr-auto my-auto w-[200px] z-[1]">
                  <div className="flex flex-col gap-1 items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-inter font-medium text-gray_900 text-left w-auto"
                      variant="body1"
                    >
                      {props?.label7}
                    </Text>
                    <Text
                      className="font-inter font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body2"
                    >
                      {props?.secondlabel5}
                    </Text>
                  </div>
                </div>
                {!!props?.lightbulb ? (
                  <Img
                    src={props?.lightbulb}
                    className="h-4 ml-[-6px] my-auto w-3 z-[1]"
                    alt="lightbulb"
                  />
                ) : null}
              </div>
              <div className="flex items-center justify-start w-20">
                <Text
                  className="font-inter font-normal not-italic text-gray_900 text-left w-auto"
                  variant="body1"
                >
                  {props?.labelOne7}
                </Text>
              </div>
            </div>
            <div className="flex items-start justify-start self-stretch w-auto">
              <div className="flex items-start justify-start self-stretch w-auto">
                <div className="flex flex-row gap-24 items-center justify-start self-stretch w-auto">
                  <div className="flex items-center justify-end w-20">
                    {!!props?.price5 ? (
                      <Text
                        className="font-inter font-medium text-gray_900 text-right w-auto"
                        variant="body1"
                      >
                        {props?.price5}
                      </Text>
                    ) : null}
                  </div>
                  <div className="flex items-start justify-start w-20">
                    <div className="bg-red-100 flex items-start justify-start px-2 py-[3px] rounded-[11px] self-stretch w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                        {!!props?.ellipseone1 ? (
                          <div className="bg-red_300 h-1.5 rounded-[50%] w-1.5"></div>
                        ) : null}
                        {!!props?.labelTwo1 ? (
                          <Text
                            className="font-inter font-medium text-left text-red_500 w-auto"
                            variant="body2"
                          >
                            {props?.labelTwo1}
                          </Text>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between outline outline-[0.5px] outline-gray_100 p-6 sm:px-5 w-full">
            <div className="flex sm:flex-1 flex-row gap-24 items-center justify-start self-stretch w-auto sm:w-full">
              <div className="flex items-center justify-start w-[200px]">
                <div className="flex flex-col gap-1 items-start justify-start self-stretch w-auto">
                  <Text
                    className="font-inter font-medium text-gray_900 text-left w-auto"
                    variant="body1"
                  >
                    {props?.label7}
                  </Text>
                  <Text
                    className="font-inter font-normal not-italic text-bluegray_400 text-left w-auto"
                    variant="body2"
                  >
                    {props?.secondlabel5}
                  </Text>
                </div>
              </div>
              <div className="flex items-center justify-start w-20">
                <Text
                  className="font-inter font-normal not-italic text-gray_900 text-left w-auto"
                  variant="body1"
                >
                  {props?.labelOne7}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-24 items-center justify-start md:pr-10 sm:pr-5 pr-[100px] self-stretch w-auto">
              <div className="flex items-center justify-end w-20">
                {!!props?.price5 ? (
                  <Text
                    className="font-inter font-medium text-gray_900 text-right w-auto"
                    variant="body1"
                  >
                    {props?.price5}
                  </Text>
                ) : null}
              </div>
              <div className="flex items-start justify-start w-[104px]">
                <div className="bg-green_50 flex items-start justify-start px-2 py-[3px] rounded-[11px] self-stretch w-auto">
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                    <div className="bg-bluegray_200 h-1.5 rounded-[50%] w-1.5"></div>
                    <Text
                      className="font-inter font-medium text-bluegray_700 text-left w-auto"
                      variant="body2"
                    >
                      {props?.labelTwo5}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between outline outline-[0.5px] outline-gray_100 p-6 sm:px-5 w-full">
            <div className="flex sm:flex-1 flex-row gap-24 items-center justify-start self-stretch w-auto sm:w-full">
              <div className="flex items-center justify-start w-[200px]">
                <div className="flex flex-col gap-1 items-start justify-start self-stretch w-auto">
                  <Text
                    className="font-inter font-medium text-gray_900 text-left w-auto"
                    variant="body1"
                  >
                    {props?.label7}
                  </Text>
                  <Text
                    className="font-inter font-normal not-italic text-bluegray_400 text-left w-auto"
                    variant="body2"
                  >
                    {props?.secondlabel5}
                  </Text>
                </div>
              </div>
              <div className="flex items-center justify-start w-20">
                <Text
                  className="font-inter font-normal not-italic text-gray_900 text-left w-auto"
                  variant="body1"
                >
                  {props?.labelOne7}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-24 items-center justify-start md:pr-10 sm:pr-5 pr-[100px] self-stretch w-auto">
              <div className="flex items-center justify-end w-20">
                {!!props?.price5 ? (
                  <Text
                    className="font-inter font-medium text-gray_900 text-right w-auto"
                    variant="body1"
                  >
                    {props?.price5}
                  </Text>
                ) : null}
              </div>
              <div className="flex items-start justify-start w-[104px]">
                <div className="bg-green_50 flex items-start justify-start px-2 py-[3px] rounded-[11px] self-stretch w-auto">
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                    <div className="bg-bluegray_200 h-1.5 rounded-[50%] w-1.5"></div>
                    <Text
                      className="font-inter font-medium text-bluegray_700 text-left w-auto"
                      variant="body2"
                    >
                      {props?.labelTwo5}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between outline outline-[0.5px] outline-gray_100 p-6 sm:px-5 w-full">
            <div className="flex sm:flex-1 flex-row gap-24 items-center justify-start self-stretch w-auto sm:w-full">
              <div className="flex items-center justify-start w-[200px]">
                <div className="flex flex-col gap-1 items-start justify-start self-stretch w-auto">
                  <Text
                    className="font-inter font-medium text-gray_900 text-left w-auto"
                    variant="body1"
                  >
                    {props?.label7}
                  </Text>
                  <Text
                    className="font-inter font-normal not-italic text-bluegray_400 text-left w-auto"
                    variant="body2"
                  >
                    {props?.secondlabel5}
                  </Text>
                </div>
              </div>
              <div className="flex items-center justify-start w-20">
                <Text
                  className="font-inter font-normal not-italic text-gray_900 text-left w-auto"
                  variant="body1"
                >
                  {props?.labelOne7}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-24 items-center justify-start md:pr-10 sm:pr-5 pr-[100px] self-stretch w-auto">
              <div className="flex items-center justify-end w-20">
                {!!props?.price5 ? (
                  <Text
                    className="font-inter font-medium text-gray_900 text-right w-auto"
                    variant="body1"
                  >
                    {props?.price5}
                  </Text>
                ) : null}
              </div>
              <div className="flex items-start justify-start w-[81px]">
                <div className="bg-orange_51 flex items-start justify-start px-2 py-[3px] rounded-[11px] self-stretch w-auto">
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                    {!!props?.ellipseone2 ? (
                      <div className="bg-orange_A200 h-1.5 rounded-[50%] w-1.5"></div>
                    ) : null}
                    {!!props?.labelTwo4 ? (
                      <Text
                        className="font-inter font-medium text-left text-orange_800 w-auto"
                        variant="body2"
                      >
                        {props?.labelTwo4}
                      </Text>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between outline outline-[0.5px] outline-gray_100 p-6 sm:px-5 rounded-bl-[24px] rounded-br-[24px] rounded-tl-none rounded-tr-none w-full">
            <div className="flex sm:flex-1 flex-row gap-24 items-center justify-start self-stretch w-auto sm:w-full">
              <div className="flex items-center justify-start w-[200px]">
                <div className="flex flex-col gap-1 items-start justify-start self-stretch w-auto">
                  <Text
                    className="font-inter font-medium text-gray_900 text-left w-auto"
                    variant="body1"
                  >
                    {props?.label7}
                  </Text>
                  <Text
                    className="font-inter font-normal not-italic text-bluegray_400 text-left w-auto"
                    variant="body2"
                  >
                    {props?.secondlabel5}
                  </Text>
                </div>
              </div>
              <div className="flex items-center justify-start w-20">
                <Text
                  className="font-inter font-normal not-italic text-gray_900 text-left w-auto"
                  variant="body1"
                >
                  {props?.labelOne7}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-24 items-center justify-start md:pr-10 sm:pr-5 pr-[100px] self-stretch w-auto">
              <div className="flex items-center justify-end w-20">
                {!!props?.price5 ? (
                  <Text
                    className="font-inter font-medium text-gray_900 text-right w-auto"
                    variant="body1"
                  >
                    {props?.price5}
                  </Text>
                ) : null}
              </div>
              <div className="flex items-start justify-start w-[152px]">
                <div className="bg-gray_100 flex items-start justify-start px-2 py-[3px] rounded-[11px] self-stretch w-auto">
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                    <div className="bg-bluegray_200 h-1.5 rounded-[50%] w-1.5"></div>
                    <Text
                      className="font-inter font-medium text-bluegray_700 text-left w-auto"
                      variant="body2"
                    >
                      {props?.labelTwo5}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

DashboardTable.defaultProps = {
  label: "Status",
  labelOne: "Status",
  labelOne1: "Status",
  label2: "Salma Hernandez",
  secondlabel: "CCA202209591",
  labelOne2: "Consumer",
  label3: "Salma Hernandez",
  secondlabel1: "CCA202209591",
  labelOne3: "Consumer",
  label4: "Salma Hernandez",
  secondlabel2: "CCA202209591",
  labelOne4: "Consumer",
  labelTwo2: "Information needed",
  label5: "Salma Hernandez",
  secondlabel3: "CCA202209591",
  labelOne5: "Consumer",
  labelTwo3: "Information needed",
  label6: "Salma Hernandez",
  secondlabel4: "CCA202209591",
  labelOne6: "Consumer",
  label7: "Salma Hernandez",
  secondlabel5: "CCA202209591",
  labelOne7: "Consumer",
  labelTwo5: "Information needed",
};

export default DashboardTable;
