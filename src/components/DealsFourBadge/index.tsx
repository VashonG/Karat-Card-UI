import React from "react";

import { Text } from "components";

type DealsFourBadgeProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{ labelTwo: string }>;

const DealsFourBadge: React.FC<DealsFourBadgeProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
          <div className="bg-red_300 h-1.5 rounded-[50%] w-1.5"></div>
          <Text
            className="font-inter font-medium text-left text-red_500 w-auto"
            variant="body2"
          >
            {props?.labelTwo}
          </Text>
        </div>
      </div>
    </>
  );
};

DealsFourBadge.defaultProps = { labelTwo: "Denied" };

export default DealsFourBadge;
