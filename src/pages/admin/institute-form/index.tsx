import { useState } from "react";
import InputField from "../../../components/input/input-field";
import DropDown from "../../../components/input/dropdown";
import MenuItem from "@mui/material/MenuItem";
import FileUpload from "../../../components/input/file-input";
import Button from "../../../components/button/primary-button";
import { fbAdd } from "../../../config/firebase/firebase-methods";
import { imgDB } from "../../../config/firebase/firebase-methods";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export default function InstituteForm() {
  const [institutemodel, setInstituteModel] = useState<any>({
    logoImage: {},
    instituteName: "",
    instituteShortName: "",
    numberOfCampus: "",
    ownerEmail: "",
    ownerContact: "",
    location: "",
    address: "",
    contact: "",
    institutemodel: "",
  });
  const [campusModel, setCampusModel] = useState<any>({});
  const [campusDetailModel, setCampusDetailModel] = useState<any>([]);

  const fillinstituteModel = (key: string, val: any) => {
    institutemodel[key] = val;
    setInstituteModel({ ...institutemodel });
  };

  const fillCampusModel = (key: string, val: any) => {
    campusModel[key] = val;
    setCampusModel({ ...campusModel });
  };

  const Types = [
    { value: "school", label: "School" },
    { value: "college", label: "College" },
    { value: "university", label: "University" },
    { value: "institute", label: "Institute" },
  ];

  const AddInstitute = () => {
    institutemodel.campusModel = { ...campusModel };
    campusDetailModel.push(campusModel);
    setCampusDetailModel([...campusDetailModel]);
    setCampusDetailModel([]);
    setCampusModel({});
    console.log(institutemodel);
    fbAdd("instituteList", institutemodel)
      .then((res: any) => {
        console.log(res);
        setInstituteModel({
          ...setInstituteModel,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleImageUpload = (e: any) => {
    console.log(e.target.files[0]);
    const imgs = ref(imgDB, `Imgs/${v4()}`);
    uploadBytes(imgs, e.target.files[0]).then((res) => {
      console.log(res, "imgs");
      getDownloadURL(res.ref).then((val) => {
        console.log(val);
        institutemodel.logoImage = val; // Set the image URL here
        setCampusModel({ ...institutemodel });
      });
    });
  };
  // const handleImageUpload = (e: any) => {
  //   console.log(e.target.files[0]);
  //   const imgs = ref(imgDB, `Imgs/${v4()}`);
  //   uploadBytes(imgs, e.target.files[0]).then((res) => {
  //     console.log(res, "imgs");
  //     getDownloadURL(res.ref).then((val) => {
  //       console.log(val);
  //       institutemodel.logoImage = val; // Set the image URL here
  //       setCampusModel({ ...institutemodel });
  //     });
  //   });
  // };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 py-5">
        <div className="col-span-1 lg:col-span-3 ">
          <FileUpload onChange={(e) => handleImageUpload(e)} />
        </div>

        <div className="col-span-1 lg:col-span-3  flex flex-col justify-between">
          <InputField
            value={institutemodel.instituteName || ""}
            onChange={(e: any) =>
              fillinstituteModel("instituteName", e.target.value)
            }
            label="Institute Name"
          />
          <InputField
            value={institutemodel.instituteShortName || ""}
            onChange={(e: any) =>
              fillinstituteModel("instituteShortName", e.target.value)
            }
            label="Institute Short Name"
          />
          <InputField
            value={institutemodel.numberOfCampus || ""}
            onChange={(e: any) =>
              fillinstituteModel("numberOfCampus", e.target.value)
            }
            label="Number Of Campus"
          />
        </div>
      </div>

      <div className="grid col-span-2  md:grid-cols-3 flex items-center justify-center  gap-2 py-5">
        <InputField
          value={campusModel.location || ""}
          onChange={(e: any) => fillCampusModel("location", e.target.value)}
          label="Location"
        />
        <InputField
          value={campusModel.address || ""}
          onChange={(e: any) => fillCampusModel("address", e.target.value)}
          label="Address"
        />
        <InputField
          value={campusModel.contact || ""}
          onChange={(e: any) => fillCampusModel("contact", e.target.value)}
          label="Contact"
        />
        <InputField
          value={campusModel.ownerEmail || ""}
          onChange={(e: any) => fillCampusModel("ownerEmail", e.target.value)}
          label="Owner Email"
        />
        <InputField
          value={campusModel.ownerContact || ""}
          onChange={(e: any) => fillCampusModel("ownerContact", e.target.value)}
          label="Owner Contact"
        />
        <DropDown
          HeaderValue="Type"
          SelectValue={institutemodel.instituteType || ""}
          SelectOnChange={(e: any) =>
            fillinstituteModel("instituteType", e.target.value)
          }
        >
          {Types.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </DropDown>
        <Button label="Add Institute " onClick={AddInstitute} />
      </div>
    </>
  );
}
