import { useState, useEffect } from "react";
import CustomTableConatiner from "../../../components/table/table-container";
import { fbGet } from "../../../config/firebase/firebase-methods";
import CustomTableRow from "../../../components/table/table-row";

export default function Institute() {
  // const [institutemodel, setInstituteModel] = useState<any>({});
  const [instituteList, setInstituteList] = useState<any>([]);

  // const fillModel = (key: string, val: any) => {
  //   institutemodel[key] = val;
  //   setInstituteModel({ ...institutemodel });
  // };

  const GetinstituteList = () => {
    fbGet("instituteList")
      .then((res: any) => {
        console.log(res);
        setInstituteList([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    GetinstituteList();
  }, []);

  
  return (
    <>
      <CustomTableConatiner
        cols={[
          {
            heading: "Id",
            key: "id",
          },
          {
            heading: "Logo",
            key: "Logo",
          },
          {
            heading: "Institute Name",
            key: "InstituteName",
          },
          
          {
            heading: "Number Of Campus",
            key: "NumberOfCampus",
          },
          {
            heading: "Active",
            key: "Active",         
          },
        ]}
      >
        {instituteList && instituteList.length > 0
          ? instituteList.map((institute: any, i: number) => (  
            <CustomTableRow 
            key={i} 
            instituteId={i}
            instituteLogo={institute.instituteLogo}
            instituteName={institute.instituteName}
            instituteNumber={institute.numberOfCampus}
            instituteActive="yes"
            />  
        )):null}
      </CustomTableConatiner>
    </>
  );
}
