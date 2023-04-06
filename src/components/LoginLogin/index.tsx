import React from "react";

import { Text, Input, Button } from "components";

type LoginLoginProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    login: string;
    email: string;
    emailTwo: string;
    forgotpassword: string;
    loginOne: string;
  }>;

const LoginLogin: React.FC<LoginLoginProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-inter font-medium text-gray_900 text-left w-auto"
          as="h5"
          variant="h5"
        >
          {props?.login}
        </Text>
        <div className="flex flex-col gap-5 items-center justify-start self-stretch w-auto">
          <div className="flex flex-col gap-2 items-start justify-start w-[272px]">
            <Text
              className="font-inter font-normal not-italic text-bluegray_700 text-left w-auto"
              variant="body2"
            >
              {props?.email}
            </Text>
            <Input
              wrapClassName="border border-bluegray_50 border-solid px-3.5 py-2.5 rounded-[20px] w-full"
              className="font-inter font-normal not-italic p-0 placeholder:text-gray_900 text-gray_900 text-left text-sm w-full"
              name="email_One"
              placeholder="vashon@kaped.io"
            ></Input>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start w-[272px]">
            <Text
              className="font-inter font-normal not-italic text-bluegray_700 text-left w-auto"
              variant="body2"
            >
              {props?.emailTwo}
            </Text>
            <Input
              wrapClassName="border border-bluegray_50 border-solid px-3.5 py-2.5 rounded-[20px] w-full"
              className="font-inter font-normal not-italic p-0 placeholder:text-bluegray_200 text-bluegray_200 text-left text-sm w-full"
              name="input"
              placeholder="Placeholder"
            ></Input>
          </div>
          <Text
            className="font-inter font-normal not-italic text-bluegray_200 text-left w-auto"
            variant="body2"
          >
            {props?.forgotpassword}
          </Text>
          <Button className="bg-yellow_900 cursor-pointer font-inter font-medium px-4 py-2.5 rounded-[20px] text-center text-sm text-white_A700 w-full">
            {props?.loginOne}
          </Button>
        </div>
      </div>
    </>
  );
};

LoginLogin.defaultProps = {
  login: "Login",
  email: "Email",
  emailTwo: "Password",
  forgotpassword: "Forgot password?",
  loginOne: "Login",
};

export default LoginLogin;
