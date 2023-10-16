import { useState, useEffect } from "react";
import InputField from "../../../components/input/input-field";
import Button from "../../../components/button/primary-button";
import { fbAdd, fbGet } from "../../../config/firebase/firebase-methods";
import DropDown from "../../../components/input/dropdown";
import MenuItem from "@mui/material/MenuItem";

export default function CourseForm() {
  const [model, setModel] = useState<any>({});
  const [teacherList, setTeacherList] = useState<any>([]);

  const fillModel = (key: string, val: any) => {
    model[key] = val;
    setModel({ ...model });
  };

  let courseAdd = () => {
    setModel({});
    console.log(model);
    fbAdd("courseList", model)
      .then((res: any) => {
        console.log(res);
        setModel({
          ...setModel,
        });
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const GetteacherList = () => {
    fbGet("users")
      .then((res: any) => {
        console.log("Fetched User Data:", { ...res });
        setTeacherList([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    GetteacherList();
  }, []);

  console.log("Teacher List:", teacherList);

  const IsEqual = "teacher";

  return (
    <>
      <div className="grid grid-cols-1 gap-4 py-5">
        <div className="grid col-span-1  md:grid-cols-2  flex items-center justify-center  gap-2 ">
          <InputField
            value={model.courseName || ""}
            onChange={(e: any) => fillModel("courseName", e.target.value)}
            label="Course Name"
          />

          <InputField
            value={model.duration || ""}
            onChange={(e: any) => fillModel("duration", e.target.value)}
            label="Duration"
          />

          <InputField
            value={model.fee || ""}
            onChange={(e: any) => fillModel("fee", e.target.value)}
            label="Fee"
          />

          <DropDown
            HeaderValue="Teacher"
            SelectValue={model.teacher || ""}
            SelectOnChange={(e: any) => fillModel("teacher", e.target.value)}
          >
            {teacherList && teacherList.length > 0
              ? teacherList.map((institute: any, i: number) =>
                  IsEqual === institute.role ? (
                    <MenuItem key={i} value={institute.userName}>
                      {institute.userName}
                    </MenuItem>
                  ) : null
                )
              : null}
          </DropDown>
        </div>
        <div className="grid col-span-1  md:grid-cols-3 flex items-center justify-center  gap-2 ">
          <Button label="course Add" onClick={courseAdd} />
        </div>
      </div>
    </>
  );
}
