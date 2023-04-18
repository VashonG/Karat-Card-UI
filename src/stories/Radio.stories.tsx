import React from "react";
import { Radio } from "components";
import { Meta, Story } from "@storybook/react";

export default {
  title: "karat/Radio",
  component: Radio,
};

export const SampleRadio: Story<any> = (args) => <Radio {...args} />;

SampleRadio.args = {
  label: "Radio",
  variant: "OutlineBluegray10082",
  size: "sm",
  inputClassName: "mr-1",
};
