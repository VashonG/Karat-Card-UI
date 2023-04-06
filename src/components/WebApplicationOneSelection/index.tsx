import React from "react";

import { Radio, Text } from "components";

type WebApplicationOneSelectionProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{ descriptioninon: string }>;

const WebApplicationOneSelection: React.FC<WebApplicationOneSelectionProps> = (
  props
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-1 items-start justify-start self-stretch w-auto">
          <Radio
            value="Individual"
            className="font-inter font-medium text-gray_900 text-left text-sm"
            inputClassName="bg-white_A700_82 border border-bluegray_100_82 border-solid h-4 mr-[5px] w-4"
            checked={false}
            name="label"
            label="Individual"
            id="Individual"
          ></Radio>
          <div className="flex items-start justify-start sm:pl-5 pl-7 self-stretch w-auto">
            <Text
              className="font-inter font-normal leading-[18.00px] max-w-[162px] md:max-w-full not-italic text-bluegray_400 text-left"
              variant="body2"
            >
              {props?.descriptioninon}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

WebApplicationOneSelection.defaultProps = {
  descriptioninon: "The account will be used for your personal finances",
};

export default WebApplicationOneSelection;
