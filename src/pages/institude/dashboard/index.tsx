import DashboardLayout from "../../../components/layout/dashboard-layout";
import {useSelector, useDispatch} from "react-redux"

type Page = {
  name: string;
  route: string;
  icon?: React.ReactNode;
};

const pagesArr: Page[] = [
  {
    name: "Course List",
    route: "",
    // icon: <TiHomeOutline />,
  },
  {
    name: "Course form",
    route: "order-list-page",
    // icon: <BsListColumnsReverse />,
  },
  {
    name: "Registration Control",
    route: "customer-page",
    // icon: <BsPeople />,
  },
  {
    name: "Result",
    route: "analytics-page",
    // icon: <SiSimpleanalytics />,
  },
  {
    name: "Students List ",
    route: "reviews-page",
    // icon: <BiPencil />,
  },
  {
    name: "Students detail",
    route: "reviews-page",
    // icon: <BiPencil />,
  },
  {
    name: "Student form",
    route: "reviews-page",
    // icon: <BiPencil />,
  },
  {
    name: "Quiz",
    route: "reviews-page",
    // icon: <BiPencil />,
  },
  {
    name: "Add Quiz",
    route: "reviews-page",
    // icon: <BiPencil />,
  },
];


export default function InstituteDashboard() {
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

