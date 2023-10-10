import { Route, Routes, useNavigate } from "react-router-dom";
import DashboardLayout from "../../../components/layout/dashboard-layout";
import { useSelector, useDispatch } from "react-redux";
import CourseList from "../course-list";
import CourseForm from "../course-form";
import RegistrationControl from "../registration-control";
import Result from "../result";
import StudentList from "../student-list";
import StudentDetail from "../student-detail";
import StudentForm from "../student-form";
import Quiz from "../quiz";
import AddQuiz from "../add-quiz";
import NotFound from "../../not-found";

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
    name: "Course Form",
    route: "course-form",
    // icon: <BsListColumnsReverse />,
  },
  {
    name: "Registration Control",
    route: "registration-control",
    // icon: <BsPeople />,
  },
  {
    name: "Result",
    route: "result",
    // icon: <SiSimpleanalytics />,
  },
  {
    name: "Student List",
    route: "student-list",
    // icon: <BiPencil />,
  },
  {
    name: "Student Detail",
    route: "student-detail",
    // icon: <BiPencil />,
  },
  {
    name: "Student Form",
    route: "student-form",
    // icon: <BiPencil />,
  },
  {
    name: "Quiz",
    route: "quiz",
    // icon: <BiPencil />,
  },
  {
    name: "Add Quiz",
    route: "add-quiz",
    // icon: <BiPencil />,
  },
];

export default function InstituteDashboard() {
  const navigate = useNavigate();
  const userData = useSelector((a: any) => a.user);
  console.log(userData);

  return (
    <DashboardLayout
      RouteContent={
        <Routes>
          <Route path="" element={<CourseList />} />
          <Route path="course-form" element={<CourseForm />} />
          <Route
            path="registration-control"
            element={<RegistrationControl />}
          />
          <Route path="result" element={<Result />} />
          <Route path="student-list" element={<StudentList />} />
          <Route path="student-detail" element={<StudentDetail />} />
          <Route path="student-form" element={<StudentForm />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="add-quiz" element={<AddQuiz />} />
          <Route path="*" element={<NotFound />} />
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
