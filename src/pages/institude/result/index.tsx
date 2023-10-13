import React, { useState, useEffect } from "react";
import DropDown from "../../../components/input/dropdown";
import MenuItem from "@mui/material/MenuItem";
import { fbGet } from "../../../config/firebase/firebase-methods";
import CustomTableRow from "../../../components/table/table-row";
import CustomTableContainer from "../../../components/table/table-container";

export default function Result() {
  const [model, setModel] = useState<any>({
    quizName: "",
    count: "",
    questionCount: "",
  });
  const [resultList, setResultList] = useState<any>([]);
  const [selectedRollNumber, setSelectedRollNumber] = useState("");

  const GetresultList = () => {
    fbGet("ResultList")
      .then((res: any) => {
        setResultList([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const findStudentByRollNumber = (rollNumber: string) => {
    return resultList.find((quiz: any) => quiz.id === rollNumber);
  };

  useEffect(() => {
    GetresultList();
  }, []);

  const totalMarks: any = model.questionCount
    ? `${model.questionCount * 10} / ${model.count * 10}`
    : "";

  return (
    <div className="grid grid-cols-1 gap-4 py-5">
      <div className="grid col-span-1  md:grid-cols-3 flex items-center justify-center  gap-2 ">
        <DropDown
          HeaderValue="All Quiz"
          SelectValue={selectedRollNumber}
          SelectOnChange={(e: any) => {
            const rollNumber = e.target.value;
            setSelectedRollNumber(rollNumber);
            const quiz = findStudentByRollNumber(rollNumber);
            if (quiz) {
              setModel({
                ...model,
                quizName: quiz.quizName,
                count: quiz.count,
                questionCount: quiz.questionCount,
              });
            } else {
              setModel({
                ...model,
                quizName: "",
                count: "",
                questionCount: "",
              });
            }
          }}
        >
          {resultList && resultList.length > 0
            ? resultList.map((quiz: any, i: number) => (
                <MenuItem key={i} value={quiz.id}>
                  {quiz.quizName}
                </MenuItem>
              ))
            : null}
        </DropDown>
      </div>
      {model.quizName && (
        <CustomTableContainer
          cols={[
            
            {
              heading: "Quiz",
              key: "quiz",
            },
            {
              heading: "Point",
              key: "point",
            },
            {
              heading: "Total",
              key: "total",
            },

          ]}
        >
          <CustomTableRow
            key={model.id}
            column1={model.quizName}
            column2={model.count}
            column3={totalMarks}
          />
        </CustomTableContainer>
      )}
    </div>
  );
}
