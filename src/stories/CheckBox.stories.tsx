import React from "react";
import { CheckBox } from "components";
import { Meta, Story } from "@storybook/react";

export default {
  title: "karat/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox: Story<any> = (args) => <CheckBox {...args} />;

SampleCheckbox.args = { label: "Checkbox", size: "sm", inputClassName: "mr-1" };
