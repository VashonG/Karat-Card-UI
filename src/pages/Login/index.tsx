import React from "react";

import { Img } from "components";
import LoginLogin from "components/LoginLogin";

const LoginPage: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-auto p-[200px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col gap-8 items-center justify-start mb-40 self-stretch w-auto">
          <div className="flex flex-col items-center justify-start self-stretch w-auto">
            <Img
              src="images/img_k21.png"
              className="h-[50px] md:h-auto object-cover w-[150px]"
              alt="k21"
            />
          </div>
          <LoginLogin
            className="bg-white_A700 border border-gray_100 border-solid flex flex-col items-center justify-center p-8 sm:px-5 rounded-[24px] w-80 sm:w-full"
            login="Login"
            emailTwo="Password"
            forgotpassword="Forgot password?"
            loginOne="Login"
          />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
