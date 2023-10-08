import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fbSignUp } from "../../../config/firebase/firebasemethods";
import InputField from "../../../components/input";
import Button from "../../../components/button/primary-button";
import DropDown from "../../../components/dropdown";
import { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const Roles = [
  { value: "admin", label: "Admin" },
  { value: "institute", label: "Insitute" },
  { value: "student", label: "Student" },
];

export default function Signup() {
  const [model, setModel] = useState<any>({});

  const fillModel = (key: string, val: any) => {
    model[key] = val;
    setModel({ ...model });
  };

  const navigate = useNavigate();

  let signUpUser = () => {
    console.log(model);
    fbSignUp(model)
      .then((res: any) => {
        if (res.role == "admin") {
          navigate("/admin-dashboard");
        }if (res.role == "institute") {
          navigate("/institute-dashboard");
        }if (res.role == "student") {
          navigate("/student-dashboard");
        }
        else {
          navigate("/*");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="bg-indigo h-screen flex justify-center items-center">
        <div className="w-[500px] bg-indigo-500/[.03]  p-10 rounded-lg ">
          <div className="py-3">
            <h1 className="text-3xl font-medium">Sign Up</h1>
          </div>
          <div className="py-3">
            <InputField
              value={model.userName || ""}
              onChange={(e: any) => fillModel("userName", e.target.value)}
              label="User Name"
            />
          </div>
          <div className="py-3">
            <InputField
              value={model.fullname || ""}
              onChange={(e: any) => fillModel("fullname", e.target.value)}
              label="Full Name"
            />
          </div>
          <div className="py-3">
            <InputField
              value={model.email || ""}
              onChange={(e: any) => fillModel("email", e.target.value)}
              label="Email"
            />
          </div>
          <div className="py-3">
            <InputField
              value={model.password || ""}
              onChange={(e: any) => fillModel("password", e.target.value)}
              label="Password"
            />
          </div>
          <div className="py-3">
            <DropDown
              SelectValue={model.role || ""}
              SelectOnChange={(e: any) => fillModel("role", e.target.value)}
            >
              {Roles.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </DropDown>
          </div>
          <div className="py-3">
            <Button onClick={signUpUser} label="Sign Up" />
          </div>
          <div className="py-3">
            <p className="text-white">
              If you have allready login?
              <Link to="/sign-in"> Log in </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
