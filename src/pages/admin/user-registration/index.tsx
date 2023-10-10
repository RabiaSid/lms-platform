import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import InputField from "../../../components/input/input-field";
import DropDown from "../../../components/input/dropdown";
import Button from "../../../components/button/primary-button";
import { fbSignUp } from "../../../config/firebase/firebase-methods";

export default function UserRegistration() {
  const [model, setModel] = useState<any>({});

  const fillModel = (key: string, val: any) => {
    model[key] = val;
    setModel({ ...model });
  };

  const Roles = [
    { value: "admin", label: "Admin" },
    { value: "institute", label: "Institute" },
    { value: "teacher", label: "Teacher" },
    { value: "student", label: "Student" },
  ];

  let userRegistered = () => {
    console.log("Model role:", model.role);
    setModel({});
    fbSignUp(model)
      .then((res: any) => {
        alert("user registered!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 py-5">
        <div className="grid col-span-1  md:grid-cols-3  flex items-center justify-center  gap-2 ">
          <InputField
            value={model.userName || ""}
            onChange={(e: any) => fillModel("userName", e.target.value)}
            label="User Name"
          />

          <InputField
            value={model.email || ""}
            onChange={(e: any) => fillModel("email", e.target.value)}
            label="Email"
          />

          <InputField
            value={model.cnic || ""}
            onChange={(e: any) => fillModel("cnic", e.target.value)}
            label="Cnic"
          />

          <InputField
            value={model.password || ""}
            onChange={(e: any) => fillModel("password", e.target.value)}
            label="Password"
          />

          <DropDown
            HeaderValue="Role"
            SelectValue={model.role}
            SelectOnChange={(e: any) => fillModel("role", e.target.value)}
          >
            {Roles.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </DropDown>
        </div>
        <div className="grid col-span-1  md:grid-cols-3  flex items-center justify-center  gap-2 ">
          <Button label="user Registered" onClick={userRegistered} />
        </div>
      </div>
    </>
  );
}
