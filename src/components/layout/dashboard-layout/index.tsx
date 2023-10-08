import { ReactNode } from "react";
import { profile } from "../../../assets";
import Button from "../../button/primary-button";

type DashboardLayoutProps = {
  userName?: string;
  children: ReactNode;
};

export default function DashboardLayout(props: DashboardLayoutProps) {
  const { userName, children } = props;

  return (
    <div className="grid-cols-1 h-screen">
      <div className="grid grid-cols-2 border col-span-1 lg:col-span-12 h-[8%] bg-[#202124] flex items-center">
        <div className="grid grid-cols-1 border">
          <h1 className="text-3xl font-medium text-white ps-3">Learning Management System</h1>
        </div>
        <div className="grid grid-cols-2 border justify-self-end text-right">
          <h3 className="text-white py-3 px-5">{userName}</h3>
          <img src={profile} style={{ width: "3rem" }} className="rounded-full ms-5" />
        </div>
      </div>
      <div className="grid grid-cols-6 h-[92%]">
        <div className="grid grid-rows-5 grid-flow-col bg-[#000000] p-5">
          <div className="row-span-4  h-[95%] justify-start">
            {children}
          </div>
          <div className="row-span-1 h-[5%] items-end  justify-end ">
            <Button label="Sign out" />
          </div>
        </div>
        <div className="grid grid-cols-11 sm:grid-cols-9 mds:grid-cols-8 bg-[#ffffff]">
          <div className="grid grid-cols-1 p-5"></div>
        </div>
      </div>
    </div>
  );
}
