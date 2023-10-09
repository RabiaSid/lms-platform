import { institute1 } from "../../../assets";
import CustomizedTable from "../../../components/table";

export default function Institute() {

  let data = [
    {
      postId: 1,
      id: 1,
      Logo: "159",
      InstituteName: "Frozen yoghurt",
      NumberOfCampus: "6.0",
      Active:"yes",
    },
    {
      postId: 1,
      id: 2,
      Logo: "237",
      InstituteName: "Ice cream sandwich",
      NumberOfCampus: "9.0",
      Active:"no",
    },
    {
      postId: 1,
      id: 3,
      Logo: <img src={institute1} 
      style={{
        maxWidth:"32px"
      }}
        />,
      InstituteName: "Eclair",
      NumberOfCampus: "16.0",
      Active:"yes",
    },
    {
      postId: 1,
      id: 4,
      Logo: "305",
      InstituteName: "Cupcake",
      NumberOfCampus: "3.7",
      Active:"yes",
    },
    {
      postId: 1,
      id: 5,
      Logo: "356",
      InstituteName: "Gingerbread",
      NumberOfCampus: "16.0",
      Active:"no",
    },
    {
      postId: 1,
      id: 6,
      Logo: "159",
      InstituteName: "Frozen yoghurt",
      NumberOfCampus: "6.0",
      Active:"no",
    },
    {
      postId: 1,
      id: 7,
      Logo: "237",
      InstituteName: "Ice cream sandwich",
      NumberOfCampus: "9.0",
      Active:"yes",
    },
    {
      postId: 1,
      id: 8,
      Logo: "262",
      InstituteName: "Eclair",
      NumberOfCampus: "16.0",
      Active:"yes",
    },
    

  ];
  
  return (
    <>
      <CustomizedTable
        label="Testing data"
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
            key: "Active",         },
        ]}
        datasourse={data}
      />
    </>
  );
}
