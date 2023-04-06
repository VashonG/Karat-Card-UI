import React from "react";
import Drawer from "rc-drawer";
import "rc-drawer/assets/index.css";

import { Img, Text, Line } from "components";
import DealsFourBadge from "components/DealsFourBadge";
import PortofolioTabs from "components/PortofolioTabs";
import PortofolioDetailDetailsReadonlyform from "components/PortofolioDetailDetailsReadonlyform";

const DealsFourDrawer = (props) => {
  return (
    <>
      <Drawer placement="right" className="!w-1/2" {...props}>
        <div>
          <div className="flex font-inter items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[731px] sm:w-full md:w-full">
            <div className="bg-white_A700 flex h-[1024px] md:h-auto items-center justify-start max-w-[709px] p-8 md:px-5 w-full">
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
                        <DealsFourBadge
                          className="bg-red-100 flex flex-col items-start justify-start px-2 py-[3px] rounded-[11px] self-stretch w-auto sm:w-full"
                          labelTwo="Need more info"
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
                    <div className="flex items-start justify-start w-full">
                      <PortofolioDetailDetailsReadonlyform
                        className="flex-col grid items-start outline outline-[0.5px] outline-gray_100 py-4 rounded-[24px] w-full"
                        status="First Name"
                        status1="First Name"
                        status2="First Name"
                        status3="First Name"
                        status4="First Name"
                        status5="First Name"
                        status6="First Name"
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

export default DealsFourDrawer;
