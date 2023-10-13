import { useState, useEffect } from "react";
import InputField from "../../../components/input/input-field";
import Button from "../../../components/button/primary-button";
import DropDown from "../../../components/input/dropdown";
import MenuItem from "@mui/material/MenuItem";
import { fbAdd, fbGet } from "../../../config/firebase/firebase-methods";
import DatePickerValue from "../../../components/date-picker";
import SwitchLabels from "../../../components/switch";

export default function StudentForm() {
  const [model, setModel] = useState<any>({});
  const [maleChecked, setMaleChecked] = useState(false);
  const [femaleChecked, setFemaleChecked] = useState(false);
  const [courseList, setCourseList] = useState<any>([]);

  const handleMaleChange = () => {
    setMaleChecked(!maleChecked);
    setFemaleChecked(false);
  };

  const handleFemaleChange = () => {
    setFemaleChecked(!femaleChecked);
    setMaleChecked(false);
  };

  const fillModel = (key: string, val: any) => {
    model[key] = val;
    setModel({ ...model });
  };

  let StudentAdd = () => {
    setModel({});
    console.log(model);
    fbAdd("studentList", model)
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

  const Qualfication = [
    { value: "matric", label: "Matric" },
    { value: "Intermediate", label: "Intermediate" },
    { value: "bachelor", label: "Bachelor" },
    { value: "master", label: "Master" },
    { value: "mphil", label: "Mphil" },
  ];

  const Section = [
    { value: "a", label: "A" },
    { value: "b", label: "B" },
    { value: "c", label: "C" },
    { value: "d", label: "D" },
  ];

  const City = [
    { value: "islamabad", label: "Islamabad" },
    { value: "newyork", label: "New York" },
    { value: "losangeles", label: "Los Angeles" },
    { value: "chicago", label: "Chicago" },
    { value: "miami", label: "Miami" },
    { value: "houston", label: "Houston" },
    { value: "san-francisco", label: "San Francisco" },
    { value: "seattle", label: "Seattle" },
  ];

  const Country = [
    { value: "pakistan", label: "Pakistan" },
    { value: "usa", label: "United States" },
    { value: "canada", label: "Canada" },
    { value: "uk", label: "United Kingdom" },
    { value: "australia", label: "Australia" },
    { value: "germany", label: "Germany" },
    { value: "france", label: "France" },
    { value: "japan", label: "Japan" },
    { value: "china", label: "China" },
    { value: "brazil", label: "Brazil" },
  ];

  return (
    <>
      <div className="grid grid-cols-1 gap-4 py-5">
        <div className="grid col-span-1  md:grid-cols-4  flex items-end justify-center  gap-2 ">
          <InputField
            value={model.studentName || ""}
            onChange={(e: any) => fillModel("studentName", e.target.value)}
            label="StudentName"
          />

          <InputField
            value={model.fatherName || ""}
            onChange={(e: any) => fillModel("fatherName", e.target.value)}
            label="Father Name"
          />

          <InputField
            value={model.contact || ""}
            onChange={(e: any) => fillModel("contact", e.target.value)}
            label="Contact"
          />

          <InputField
            value={model.cnic || ""}
            onChange={(e: any) => fillModel("cnic", e.target.value)}
            label="Cnic"
          />

          <DropDown
            HeaderValue="Last Qualfication"
            SelectValue={model.lastQualfication || ""}
            SelectOnChange={(e: any) =>
              fillModel("lastQualfication", e.target.value)
            }
          >
            {Qualfication.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </DropDown>

          <DropDown
            HeaderValue="Course"
            SelectValue={model.course || ""}
            SelectOnChange={(e: any) => fillModel("course", e.target.value)}
          >
            {courseList && courseList.length > 0
              ? courseList.map((course: any, i: number) => (
                  <MenuItem key={i} value={course.courseName}>
                    {course.courseName}
                  </MenuItem>
                ))
              : null}
          </DropDown>

          <InputField
            value={model.Institute || ""}
            onChange={(e: any) => fillModel("institute", e.target.value)}
            label="institute"
            disabled={true}
          />

          <DropDown
            HeaderValue="Section"
            SelectValue={model.section || ""}
            SelectOnChange={(e: any) => fillModel("section", e.target.value)}
          >
            {Section.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </DropDown>

          <InputField
            value={model.email || ""}
            onChange={(e: any) => fillModel("email", e.target.value)}
            label="Email"
          />

          <InputField
            value={model.password || ""}
            onChange={(e: any) => fillModel("password", e.target.value)}
            label="Password"
          />

          <DropDown
            HeaderValue="City"
            SelectValue={model.city || ""}
            SelectOnChange={(e: any) => fillModel("city", e.target.value)}
          >
            {City.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </DropDown>

          <DropDown
            HeaderValue="Country"
            SelectValue={model.country || ""}
            SelectOnChange={(e: any) => fillModel("country", e.target.value)}
          >
            {Country.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </DropDown>

          <InputField
            value={model.address || ""}
            onChange={(e: any) => fillModel("address", e.target.value)}
            label="Address"
          />
        </div>
        <div className="grid col-span-1  md:grid-cols-4 flex items-center justify-center  gap-2 ">
          <div className="grid col-span-1">
            <SwitchLabels
              label="male"
              checked={maleChecked}
              onChange={handleMaleChange}
            />
            <SwitchLabels
              label="female"
              checked={femaleChecked}
              onChange={handleFemaleChange}
            />
          </div>
        </div>
        <div className="grid col-span-1  md:grid-cols-4 flex items-center justify-center  gap-2 ">
          <DatePickerValue label="Date Of Birth" />
        </div>

        <div className="grid col-span-1  md:grid-cols-4 flex items-center justify-center  gap-2 ">
          <Button label="course Add" onClick={StudentAdd} />
        </div>
      </div>
    </>
  );
}
