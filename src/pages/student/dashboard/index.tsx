import { Route, Routes, useNavigate } from "react-router-dom";
import DashboardLayout from "../../../components/layout/dashboard-layout";
import { useSelector, useDispatch } from "react-redux";
import RegistrationForm from "../registration-form";
import Result from "../result";
import Login from "../login";

type Page = {
  name: string;
  route: string;
  icon?: React.ReactNode;
};

const pagesArr: Page[] = [
  {
    name: "Registration Form",
    route: "registration-form",
    // icon: <TiHomeOutline />,
  },
  {
    name: "Result",
    route: "result",
    // icon: <BsListColumnsReverse />,
  },
  // {
  //   name: "Login",
  //   route: "login",
  //   // icon: <BsPeople />,
  // },
];

export default function StudentDashboard() {
  const navigate = useNavigate();
  const userData = useSelector((a: any) => a.user);
  console.log(userData);

  return (
    <DashboardLayout
      RouteContent={
        <Routes>
          <Route path="" element={<RegistrationForm />} />
          <Route path="result" element={<Result />} />
          {/* <Route path="login" element={<Login />} /> */}
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
