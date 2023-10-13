import { useState, useEffect } from "react";
import CustomTableConatiner from "../../../components/table/table-container";
import { fbGet } from "../../../config/firebase/firebase-methods";
import CustomTableRow from "../../../components/table/table-row";
import IsOpenModal from "../../../components/isopen-modal";
import InstituteForm from "../institute-form";

export default function Institute() {
  const [instituteList, setInstituteList] = useState<any>([]);


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
    <div className="grid justify-items-end">
        <IsOpenModal label="Institute Form">
          <InstituteForm />
        </IsOpenModal>
      </div>
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
                column1={i}
                // instituteLogo={institute.instituteLogo}
                column2="-"
                column3={institute.instituteName}
                column4={institute.numberOfCampus}
                column5="yes"
              />
            ))
          : null}
      </CustomTableConatiner>
    </>
  );
}
