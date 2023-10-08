import DashboardLayout from "../../../components/layout/dashboard-layout";
import {useSelector, useDispatch} from "react-redux"

type Page = {
  name: string;
  route: string;
  icon?: React.ReactNode;
};

const pagesArr: Page[] = [
  {
    name: "Institude",
    route: "",
    // icon: <TiHomeOutline />,
  },
  {
    name: "Institudeform",
    route: "order-list-page",
    // icon: <BsListColumnsReverse />,
  },
  {
    name: "User Registration",
    route: "customer-page",
    // icon: <BsPeople />,
  },
];


export default function AdminDashboard() {
  const userData = useSelector((a: any) => a.user)
  console.log(userData)

  return (
   <DashboardLayout 
   userName={userData.userName}
  >
    {pagesArr.map((x, index) => (
        <div key={index} className="text-white w-full h-[6vh] rounded flex items-center justify-center border my-2">
          <h1 className="text-base">{x.name}</h1>
        </div>
        ))}
  </DashboardLayout>
  );
}
