import { ReactNode } from "react";
import { profile } from "../../../assets";
import Button from "../../button/primary-button";
import { fbSignout } from "../../../config/firebase/firebase-methods";
import { useNavigate } from "react-router-dom";

type DashboardLayoutProps = {
  userName?: string;
  children: ReactNode;
  RouteContent: ReactNode;
};


export default function DashboardLayout(props: DashboardLayoutProps) {
  const navigate = useNavigate();
  const { userName, children, RouteContent } = props;

  const SignOut = () => {
    fbSignout().then(() => {
      navigate("/sign-in");
    });
  };

  return (
    <div className="grid-cols-1 h-screen">
      <div className="grid grid-cols-2 col-span-1 lg:col-span-12 h-[8%] bg-[#202124] flex items-center">
        <div className="grid grid-cols-1">
          <h1 className="text-3xl font-medium text-white ps-3">Learning Management System</h1>
        </div>
        <div className="grid grid-cols-2 justify-self-end text-right">
          <h3 className="text-white py-3 px-5">{userName}</h3>
          <img src={profile} style={{ width: "3rem" }} className="rounded-full mx-5" />
        </div>
      </div>
      <div className="grid grid-cols-7 md:grid-cols-5 h-[92%]">
        <div className="grid grid-rows-5 grid-flow-col bg-[#000000] p-5">
          <div className="row-span-4  h-[96%] justify-start">
            {children}
          </div>
          <div className="row-span-1 h-[4%] items-end  justify-end ">
            <Button label="Sign out" onClick={SignOut} />
          </div>
        </div>
        <div className="col-span-6 md:col-span-4 bg-[#ffffff]">
          <div className="grid grid-cols-1 p-5">{RouteContent}</div>
        </div>
      </div>
    </div>
  );
}
