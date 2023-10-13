import { useState, useEffect } from "react";
import CustomTableConatiner from "../../../components/table/table-container";
import { fbGet } from "../../../config/firebase/firebase-methods";
import CustomTableRow from "../../../components/table/table-row";
import IsOpenModal from "../../../components/isopen-modal";
import CourseForm from "../course-form";

export default function CourseList() {
  const [courseList, setCourseList] = useState<any>([]);

  const GetcourseList = () => {
    fbGet("courseList")
      .then((res: any) => {
        console.log(res);
        setCourseList([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    GetcourseList();
  }, []);

  return (
    <>
      <div className="grid justify-items-end">
        <IsOpenModal label="Course Form">
          <CourseForm />
        </IsOpenModal>
      </div>
      <CustomTableConatiner
        cols={[
          {
            heading: "Id",
            key: "id",
          },
          {
            heading: "Course Name",
            key: "courseName",
          },
          {
            heading: "Duration",
            key: "duration",
          },

          {
            heading: "Fee",
            key: "fee",
          },
        ]}
      >
        {courseList && courseList.length > 0
          ? courseList.map((course: any, i: number) => (
              <CustomTableRow
                key={i}
                column1={i + 1}
                column2={course.courseName}
                column3={course.duration}
                column4={course.fee}
              />
            ))
          : null}
      </CustomTableConatiner>
    </>
  );
}
