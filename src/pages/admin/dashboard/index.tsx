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
    // route: "institute",
    route: "",
    // icon: <TiHomeOutline />,
  },
  {
    name: "Institute Form",
    route: "institute-form",
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
          <Route path="" element={<Institute />} />
          <Route path="institute-form" element={<InstituteForm />} />
          <Route path="user-registration" element={<UserRegistration />} />
          <Route path="*" element={<NotFound />} />
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
