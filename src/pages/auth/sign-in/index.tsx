import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../../../config/redux/reducers/userSlice";
import InputField from "../../../components/input";
import Button from "../../../components/button/primary-button";
import { fbLogin } from "../../../config/firebase/firebase-methods";

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [model, setModel] = useState<any>({
    email: "",
    password: "",
    // role:""
  });

  const fillModel = (key: string, val: any) => {
    model[key] = val;
    setModel({ ...model });
  };

  let LoginUser = () => {
    console.log(model);
    fbLogin(model)
      .then((res: any) => {
        // console.log(res)
        // dispatch(add({...res}))
        // console.log(add({...res}))
        // navigate("/student")
        if (res.role === "admin") {
          dispatch(add({ ...res }));
          console.log(add({ ...res }));
          navigate("/admin-dashboard");
        } else if (res.role === "institute") {
          dispatch(add({ ...res }));
          console.log(add({ ...res }));
          navigate("/institute-dashboard");
        } else if (res.role === "student") {
          dispatch(add({ ...res }));
          console.log(add({ ...res }));
          navigate("/student-dashboard");
        } else {
          dispatch(add({ ...res }));
          console.log(add({ ...res }));
          navigate("/*");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="bg-primary h-screen flex justify-center items-center">
        <div className="w-[500px] bg-[rgba(255,255,255,.2)] p-10 rounded-lg">
          <div className="py-3">
            <h1 className="text-3xl font-medium">Login</h1>
          </div>

          <div className="py-3">
            <InputField
              value={model.email}
              onChange={(e: any) => fillModel("email", e.target.value)}
              label="Email"
            />
          </div>
          <div className="py-3">
            <InputField
              value={model.password}
              onChange={(e: any) => fillModel("password", e.target.value)}
              label="Password"
            />
          </div>

          <div className="py-3">
            <Button onClick={LoginUser} label="Sign in" />
          </div>
          <div className="py-3">
            <p className="text-white">
              not account?
              <Link to="/"> Sign up </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
