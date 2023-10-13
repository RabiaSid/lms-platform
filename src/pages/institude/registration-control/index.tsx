import { useState, useEffect } from "react";
import SwitchLabels from "../../../components/switch";
import { fbGet } from "../../../config/firebase/firebase-methods";

export default function RegistrationControl() {
  const [model, setModel] = useState<any>({});
  const [courseList, setCourseList] = useState<any>([]);
  const [courseStates, setCourseStates] = useState<{
    [courseName: string]: boolean;
  }>({});

  const fillModel = (key: string, val: any) => {
    model[key] = val;
    setModel({ ...model });
  };

  const toggleCourseState = (courseName: string) => {
    setCourseStates((prevStates) => ({
      ...prevStates,
      [courseName]: !prevStates[courseName],
    }));
  };

  const GetcourseList = () => {
    fbGet("courseList")
      .then((res: any) => {
        console.log("Fetched User Data:", { ...res });
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
    <div className="grid grid-cols-1 gap-4 py-5">
      <div className="grid col-span-1  md:grid-cols-4 flex items-end justify-center text-center gap-4">
        {courseList && courseList.length > 0
          ? courseList.map((course: any, i: number) => (
              <div
                key={i}
                className="grid col-span-1  border p-5 rounded flex items-end justify-center text-center shadow-sm shadow-black/30 dark:shadow-black/50"
              >
                <h1 className="text-3xl font-medium text-black">
                  {course.courseName}
                </h1>
                <h1 className="py-3 px-5 text-black">{course.teacher}</h1>
                <SwitchLabels
                  label={courseStates[course.courseName] ? "Open" : "Close"}
                  checked={courseStates[course.courseName]}
                  onChange={() => toggleCourseState(course.courseName)}
                />
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
