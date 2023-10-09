import { Route, Routes, useNavigate } from "react-router-dom";
import DashboardLayout from "../../../components/layout/dashboard-layout";
import { useSelector, useDispatch } from "react-redux";
import Institude from "../institude";
import InstitudeForm from "../institude-form";
import UserRegistration from "../user-registration";

type Page = {
  name: string;
  route: string;
  icon?: React.ReactNode;
};

const pagesArr: Page[] = [
  {
    name: "Institude",
    // route: "institude",
    route: "",
    // icon: <TiHomeOutline />,
  },
  {
    name: "Institude Form",
    route: "institude-form",
    // icon: <BsListColumnsReverse />,
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
          <Route path="" element={<Institude />} />
          <Route path="institude-form" element={<InstitudeForm />} />
          <Route path="user-registration" element={<UserRegistration />} />
        </Routes>
      }
      userName={userData.userName}
    >
      {pagesArr.map((x, index) => (
        <div
          key={index}
          className="text-white w-full h-[6vh] rounded flex items-center justify-center border my-2"
          onClick={() => navigate(x.route)}
        >
          <h1 className="text-base">{x.name}</h1>
        </div>
      ))}
    </DashboardLayout>
  );
}
