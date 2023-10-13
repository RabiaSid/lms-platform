import { useState, useEffect } from "react";
import CustomTableConatiner from "../../../components/table/table-container";
import { fbGet } from "../../../config/firebase/firebase-methods";
import CustomTableRow from "../../../components/table/table-row";

export default function Quiz() {
  const [quizList, setQuizList] = useState<any>([]);

  const GetTask = () => {
    fbGet("quiz")
      .then((res: any) => {
        console.log(res);
        setQuizList([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    GetTask();
  }, []);

  return (
    <>
      <CustomTableConatiner
        cols={[
          {
            heading: "Quiz Name",
            key: "QuizName",
          },
          {
            heading: "Time Duration",
            key: "TimeDuration",
          },

          {
            heading: "Secret Key",
            key: "SecretKey",
          },
          
          {
            heading: "Number of Question",
            key: "NumberOfQuestions",
          },
        ]}
      >
        {quizList && quizList.length > 0
          ? quizList.map((quiz: any, i: number) => (
              <CustomTableRow
                key={i}
                column1={quiz.quizName}
                column2={quiz.quizDurationInmin}
                column3={quiz.secretKey}
                column4={quiz.questions.length}
              />
            ))
          : null}
      </CustomTableConatiner>
    </>
  );
}

// import React, { useEffect, useState } from "react";
// import { fbGet } from "../../../config/firebase/firebase-methods";

// export default function Quiz() {
//   const [quizList, setQuizList] = useState<any>({});

// const GetTask = () => {
//   fbGet("quiz")
//     .then((res: any) => {
//       console.log(res);
//       setQuizList([...res]);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// useEffect(() => {
//   GetTask();
// }, []);

//   return (
//     <>
//       {quizList && quizList.length > 0
//         ? quizList.map((x: any, i: number) => (
//             <div key={i}>
//               <h1 className="text-3xl font-medium">{x.quizName}</h1>
//               <h1 className="text-3xl font-medium">{x.quizName}</h1>
//               <h1 className="text-3xl font-medium">{x.quizName}</h1>
//               <h1 className="text-3xl font-medium">{x.quizName}</h1>
//               <h1 className="text-3xl font-medium">{x.quizName}</h1>

//             </div>
//           ))
//         : null}
//     </>
//   );
// }
