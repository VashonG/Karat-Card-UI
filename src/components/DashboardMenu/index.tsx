import React from "react";

import { Img, Text } from "components";

type DashboardMenuProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const DashboardMenu: React.FC<DashboardMenuProps> = (props) => {
  return (
    <>
      <aside className={props.className}>
        <div className="flex flex-col gap-12 items-start justify-start w-full">
          <div className="flex items-center justify-start pl-10 sm:pl-5 pt-8 self-stretch w-auto">
            <div className="flex items-center justify-start self-stretch w-auto">
              <Img
                src="images/img_k21.png"
                className="h-[60px] md:h-auto object-cover w-[180px]"
                alt="k21"
              />
            </div>
          </div>
          <div className="flex items-start justify-start self-stretch w-auto">
            <div className="flex flex-col gap-6 items-start justify-start md:pl-10 pl-12 sm:pl-5 self-stretch w-auto">
              <div className="flex flex-row gap-3 items-center justify-start ml-auto self-stretch w-auto">
                <Img src="images/img_home.svg" className="h-6 w-6" alt="home" />
                <Text
                  className="font-inter font-semibold text-left text-yellow_900 w-auto"
                  variant="body1"
                >
                  Home
                </Text>
              </div>
              <div className="flex flex-row gap-3 items-center justify-start ml-auto self-stretch w-auto">
                <Img
                  src="images/img_computer.svg"
                  className="h-6 w-6"
                  alt="computer"
                />
                <Text
                  className="font-inter font-medium text-gray_800 text-left w-auto"
                  variant="body1"
                >
                  Developers
                </Text>
              </div>
              <div className="flex flex-row gap-3 items-center justify-start self-stretch w-auto">
                <Img src="images/img_menu.svg" className="h-6 w-6" alt="menu" />
                <Text
                  className="font-inter font-medium text-gray_800 text-left w-auto"
                  variant="body1"
                >
                  Developers
                </Text>
              </div>
              <div className="flex flex-row gap-3 items-center justify-start ml-auto self-stretch w-auto">
                <Img
                  src="images/img_trash.svg"
                  className="h-6 w-6"
                  alt="trash"
                />
                <Text
                  className="font-inter font-medium text-gray_800 text-left w-auto"
                  variant="body1"
                >
                  Developers
                </Text>
              </div>
              <div className="flex flex-row gap-3 items-center justify-start ml-auto self-stretch w-auto">
                <Img
                  src="images/img_heroiconsoutlinewindow.svg"
                  className="h-6 w-6"
                  alt="heroiconsoutlin"
                />
                <Text
                  className="font-inter font-medium text-gray_800 text-left w-auto"
                  variant="body1"
                >
                  Developers
                </Text>
              </div>
              <div className="flex flex-row gap-3 items-center justify-start ml-auto self-stretch w-auto">
                <Img src="images/img_user.svg" className="h-6 w-6" alt="user" />
                <Text
                  className="font-inter font-medium text-gray_800 text-left w-auto"
                  variant="body1"
                >
                  Developers
                </Text>
              </div>
              <div className="flex flex-row gap-3 items-center justify-start ml-auto self-stretch w-auto">
                <Img src="images/img_file.svg" className="h-6 w-6" alt="file" />
                <Text
                  className="font-inter font-medium text-gray_800 text-left w-auto"
                  variant="body1"
                >
                  Developers
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-3.5 items-center justify-between outline outline-gray_100 px-10 sm:px-5 py-8 w-full">
          <div className="flex flex-row gap-3.5 items-center justify-start self-stretch w-auto">
            <Img
              src="images/img_ellipse2.png"
              className="h-10 md:h-auto rounded-[50%] w-10"
              alt="ellipseTwo"
            />
            <div className="flex flex-col gap-0.5 items-start justify-start self-stretch w-auto">
              <Text
                className="font-inter font-medium text-gray_900 text-left w-auto"
                variant="body1"
              >
                Vashon G.
              </Text>
              <Text
                className="font-inter font-normal not-italic text-bluegray_200 text-left w-auto"
                variant="body2"
              >
                Partner
              </Text>
            </div>
          </div>
          <Img src="images/img_bag.svg" className="h-6 w-6" alt="bag" />
        </div>
      </aside>
    </>
  );
};

DashboardMenu.defaultProps = {};

export default DashboardMenu;
