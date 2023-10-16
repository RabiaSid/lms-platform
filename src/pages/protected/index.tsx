import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { loading } from "../../assets";
import { fbAuth } from "../../config/firebase/firebase-methods";



export default function Protected(props: any) {
  const { Screen } = props;
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  let checkAuth = () => {
    setLoader(true);
    fbAuth()
      .then((res) => {
        setTimeout(() => {
        setLoader(false);
        }, 1000);
      })
      .catch((err) => {
        setLoader(false);
        navigate("/sign-in");
      });
  };
  return loader ? (
    <div className="bg-[#1c273a] h-screen flex justify-center items-center">
      <div className="w-[300px] bg-[rgb(28, 39, 58)] p-10 rounded-lg">
        loading
      </div>
    </div>
  ) : (
    <Screen />
  );
}
