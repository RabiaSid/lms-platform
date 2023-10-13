import { useState, useEffect } from "react";
import { fbGet } from "../../../config/firebase/firebase-methods";
import CustomTableRow from "../../../components/table/table-row";
import CustomTableContainer from "../../../components/table/table-container";

export default function Result() {
  const [resultList, setResultList] = useState<any>([]);

  const GetresultList = () => {
    fbGet("ResultList")
      .then((res: any) => {
        console.log("Fetched User Data:", { ...res });
        setResultList([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    GetresultList();
  }, []);

  return (
    <>
      <CustomTableContainer
        cols={[
          {
            heading: "No",
            key: "id",
          },
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
        {resultList && resultList.length > 0
          ? resultList.map((result: any, i: number) => {
              const totalMarks : any =  `${result.questionCount * 10} / ${result.count * 10}`;
              return (
                <CustomTableRow
                  key={i}
                  column1={i + 1}
                  column2={result.quizName}
                  column3={result.count}
                  column5={totalMarks}
                />
              );
            })
          : null}
      </CustomTableContainer>
    </>
  );
}
