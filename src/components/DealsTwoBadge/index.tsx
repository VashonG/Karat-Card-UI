import React from "react";

import { Text } from "components";

type DealsTwoBadgeProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{ labelFour: string }>;

const DealsTwoBadge: React.FC<DealsTwoBadgeProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
          <div className="bg-bluegray_200 h-1.5 rounded-[50%] w-1.5"></div>
          <Text
            className="font-inter font-medium text-bluegray_700 text-left w-auto"
            variant="body2"
          >
            {props?.labelFour}
          </Text>
        </div>
      </div>
    </>
  );
};

DealsTwoBadge.defaultProps = { labelFour: "Underwriting" };

export default DealsTwoBadge;
