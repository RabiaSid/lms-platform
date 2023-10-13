import { useState, useEffect } from "react";
import CustomTableConatiner from "../../../components/table/table-container";
import { fbGet } from "../../../config/firebase/firebase-methods";
import CustomTableRow from "../../../components/table/table-row";
import { useNavigate } from "react-router-dom";
import StudentForm from "../student-form";
import IsOpenModal from "../../../components/isopen-modal";

export default function StudentList() {
  const [studentList, setStudentList] = useState<any>([]);
  const navigate = useNavigate();

  const GetstudentList = () => {
    fbGet("studentList")
      .then((res: any) => {
        console.log(res);
        setStudentList([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    GetstudentList();
  }, []);

  const clickCard = (id: number) => {
    navigate(`${id}`);
  };

  return (
    <>
      <div className="grid justify-items-end ">
        <IsOpenModal label="Student Form">
          <StudentForm />
        </IsOpenModal>
      </div>

      <CustomTableConatiner
        cols={[
          {
            heading: "Id",
            key: "id",
          },
          {
            heading: "Student Name",
            key: "studentName",
          },
          {
            heading: "Father Name",
            key: "fatherName",
          },

          {
            heading: "Course",
            key: "Course",
          },
        ]}
      >
        {studentList && studentList.length > 0
          ? studentList.map((student: any, i: number) => (
              <CustomTableRow
                key={i}
                column1={i + 1}
                column2={student.studentName}
                column3={student.fatherName}
                column4={student.cource}
                column5={() => clickCard(student.id)}
              />
            ))
          : null}
      </CustomTableConatiner>
    </>
  );
}
