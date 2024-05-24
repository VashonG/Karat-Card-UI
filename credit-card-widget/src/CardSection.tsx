import * as React from "react";
import CreditCard from "./CreditCard";


interface CardMemberProps {
  balance: string | number;
  status: boolean;
  notificationCount: number;
  imageUrl: string;
}

const CardMember: React.FC<CardMemberProps> = ({
  balance,
  status,
  notificationCount,
  imageUrl,
}) => {
  return (
    <div className="flex gap-5 justify-between px-5 py-4 mt-4 bg-white rounded-xl shadow max-md:flex-wrap max-md:pl-5">
      <CreditCard/>
      <div className="flex flex-col grow shrink-0 py-0.5 basis-0 w-fit max-md:max-w-full">
        <div className="flex gap-5 justify-between py-0.5 max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto text-base font-semibold leading-5 text-black">
            Balance
          </div>
          <div className="flex flex-col justify-center self-start text-xs font-bold tracking-wide leading-4 text-white whitespace-nowrap bg-red-700 rounded-xl">
            <div className="justify-center px-3 py-0.5 rounded-xl border border-white border-solid">
              {notificationCount}
            </div>
          </div>
        </div>
        <div className="z-10 text-sm leading-5 text-zinc-600 max-md:max-w-full">
          {balance}
        </div>
        <div className="flex gap-2.5 self-start px-2 py-1 mt-3.5 text-xs font-semibold leading-4 whitespace-nowrap rounded-xl bg-zinc-100 text-zinc-600">
          <div className="shrink-0 my-auto w-2 h-2 rounded bg-zinc-500" />
          <div className="grow">{status ? "On Time" : "Late"}</div>
        </div>
      </div>
    </div>
  );
};


const CardSection: React.FC = () => {
  const CardMembers: CardMemberProps[] = [
    {
      balance: "$100.00/$10,000.00",
      status: true,
      notificationCount: 2,
      imageUrl: "https://vashong.github.io/widgets/images/icons/support.svg",
    },
    // Add more Card members here
  ];

  return (
    <div className="flex flex-col grow px-2 pt-2 pb-1 w-full rounded-xl bg-neutral-100 bg-opacity-90 max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://vashong.github.io/widgets/images/icons/support.svg"
          alt="Card icon"
          className="shrink-0 w-10 aspect-square"
        />
        <div className="flex-auto my-auto max-md:max-w-full">Your Card</div>

      {CardMembers.map((member, index) => (
        <CardMember
          key={index}
          balance={member.balance}
          status={member.status}
          notificationCount={member.notificationCount}
          imageUrl={member.imageUrl}
        />
      ))}
    </div>
  );
};

export default CardSection;