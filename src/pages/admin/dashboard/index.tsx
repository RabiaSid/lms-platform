import { Route, Routes, useNavigate } from "react-router-dom";
import DashboardLayout from "../../../components/layout/dashboard-layout";
import { useSelector, useDispatch } from "react-redux";
import UserRegistration from "../user-registration";
import NotFound from "../../not-found";
import Institute from "../institute";
import InstituteForm from "../institute-form";

type Page = {
  name: string;
  route: string;
  icon?: React.ReactNode;
};

const pagesArr: Page[] = [
  {
    name: "Institute",
    route: "",
    // icon: <TiHomeOutline />,
  },
  {
    name: "User Registration",
    route: "user-registration",
    // icon: <BsPeople />,
  },
];

export default function AdminDashboard() {
  const navigate = useNavigate();
  const userData = useSelector((a: any) => a.user);
  console.log(userData);

  return (
    <DashboardLayout
      RouteContent={
        <Routes>
          <Route path="" element={<Institute />} />
          <Route path="user-registration" element={<UserRegistration />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="registraform/:id" element={<NotFound />} /> //*/}
        </Routes>
      }
      userName={userData.userName}
    >
      {pagesArr.map((x, index) => (
        <div
          key={index}
          className="flex items-center justify-center my-2 p-[0.8px] rounded bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hoverborder "
        >
          <div
            key={index}
            className="text-white w-full h-[6vh] rounded bg-[#000000] flex items-center justify-center "
            onClick={() => navigate(x.route)}
          >
            <h1 className="text-base">{x.name}</h1>
          </div>
        </div>
      ))}
    </DashboardLayout>
  );
}
