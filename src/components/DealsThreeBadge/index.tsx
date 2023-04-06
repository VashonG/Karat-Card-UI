import React from "react";

import { Text } from "components";

type DealsThreeBadgeProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{ labelTwo: string }>;

const DealsThreeBadge: React.FC<DealsThreeBadgeProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
          <div className="bg-green_300 h-1.5 rounded-[50%] w-1.5"></div>
          <Text
            className="font-inter font-medium text-green_500 text-left w-auto"
            variant="body2"
          >
            {props?.labelTwo}
          </Text>
        </div>
      </div>
    </>
  );
};

DealsThreeBadge.defaultProps = { labelTwo: "Card issued" };

export default DealsThreeBadge;
