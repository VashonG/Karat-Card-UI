import React from "react";

import { Line, Img, Text } from "components";

type PortofolioDetailDetailsCreditcardProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{ neerajchinwan: string; language: string; zipcode: string }>;

const PortofolioDetailDetailsCreditcard: React.FC<
  PortofolioDetailDetailsCreditcardProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-[95%] md:w-full">
          <div className="flex flex-row items-start justify-between w-full">
            <div className="bg-orange_50 flex items-center justify-start mt-[39px] rounded-lg w-[19%]">
              <div className="flex flex-row items-end justify-evenly w-full">
                <div className="flex flex-col gap-3 h-4 items-center justify-start my-[13px] w-4">
                  <Line className="bg-white_A700 h-0.5 rotate-[180deg] w-full" />
                  <Line className="bg-white_A700 h-0.5 rotate-[180deg] w-full" />
                </div>
                <Line className="bg-white_A700 h-[43px] w-0.5" />
                <div className="h-[29px] md:h-[43px] mt-3.5 relative w-[31%]">
                  <Line className="absolute bg-white_A700 h-0.5 inset-[0] justify-center m-auto rotate-[180deg] w-full" />
                  <Img
                    src="images/img_mobile.svg"
                    className="absolute h-[29px] inset-[0] justify-center m-auto w-auto"
                    alt="mobile"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start md:pl-10 sm:pl-5 pl-[47px] w-[107px]">
              <Img
                src="images/img_untitleddesign.png"
                className="h-10 md:h-auto object-cover w-[60px]"
                alt="untitleddesign"
              />
            </div>
          </div>
          <Text
            className="font-jetbrainsmono font-normal mt-4 not-italic text-left text-lime_800 w-auto"
            as="h6"
            variant="h6"
          >
            {props?.neerajchinwan}
          </Text>
          <div className="flex flex-row gap-3 items-start justify-start mt-0.5 self-stretch w-auto">
            {!!props?.language ? (
              <Text
                className="font-jetbrainsmono not-italic text-deep_orange_100 text-left tracking-[-0.20px] w-auto"
                as="h1"
                variant="h1"
              >
                {props?.language}
              </Text>
            ) : null}
            <Text
              className="font-jetbrainsmono font-normal not-italic text-center text-lime_800 w-auto"
              as="h6"
              variant="h6"
            >
              {props?.zipcode}
            </Text>
          </div>
          <Img
            src="images/img_visainclogo1.svg"
            className="h-7 md:ml-[0] ml-[204px] mt-0.5 w-auto"
            alt="visainclogoOne"
          />
        </div>
      </div>
    </>
  );
};

PortofolioDetailDetailsCreditcard.defaultProps = {
  neerajchinwan: "Neeraj Chinwan",
  zipcode: "9303",
};

export default PortofolioDetailDetailsCreditcard;
