import React, { useEffect, useState } from "react";
import { fbAdd, fbGet } from "../../../config/firebase/firebase-methods";
import Button from "../../../components/button/primary-button";
import InputField from "../../../components/input/input-field";
import DisableInput from "../../../components/input/disable-input";

export default function Quiz() {
  const [quizList, setQuizList] = useState<any>([]);
  const [questionList, setQuestionList] = useState<any>([]);
  const [totalMarks, setTotalMarks] = useState<any>([]);
  const [activeQuiz, setActiveQuiz] = useState<any>(null);
  const [isTrue, setIsTrue] = useState(true);
  const [model, setModel] = useState<any>({}); 
  const [Addmodel, setAddModel] = useState<any>({}); 
  const [answered, setAnswered] = useState<any>([]);
  const [count, setCount] = useState<any>(0);
  const [answerSelected, setAnswerSelected] = useState<any>(false);
  const [showSelected, setShowSelected] = useState<any>(false);
  const [disable, setDisable] = useState(false);

  const fillModel = (key: string, val: any) => {
    model[key] = val;
    setModel({ ...model });
  };
  const fillAddmodel = (key: string, val: any) => {
    Addmodel[key] = val;
    setAddModel({ ...Addmodel });
  };

  // let ResultAdd = () => {
  //   setAddModel({});
    
  //   console.log(Addmodel);
  //   fbAdd("ResultList", Addmodel)
  //     .then((res: any) => {
  //       console.log(res);
  //       setAddModel({
  //         ...Addmodel,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const ResultAdd = () => {
    const updatedAddModel = {
      ...Addmodel, 
      count: count, 
      quizName: activeQuiz.quizName, 
      questionCount: questionList.length,
    };
  
    console.log(updatedAddModel);
    fbAdd("ResultList", updatedAddModel)
      .then((res: any) => {
        console.log(res);
        setAddModel(updatedAddModel);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  

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

  const handleSecretKeySubmit = (secretKey: string) => {
    const quizToShow = quizList.find(
      (quiz: any) => quiz.secretKey === secretKey
    );

    if (quizToShow) {
      setActiveQuiz(quizToShow);
      setQuestionList([...quizToShow.questions]);
      setIsTrue(false);
    } else {
      setActiveQuiz(null);
    }
  };

  const setResult = () => {
    setAnswerSelected(false);
    alert("Quiz submitted");
    setShowSelected(true);
    setDisable(true);
    console.log(count);
    setCount(count);
    ResultAdd();
  };

  const showResult = () => {
    setShowSelected(true);
  };

  // const totalMarks = questionList.length * 10;

  return (
    <>
      {isTrue ? (
        <div className="bg-primary  flex justify-center items-center">
          <div className="w-[500px] bg-[rgba(255,255,255,.2)] p-10 rounded-lg">
            <InputField
              value={model.secretInput}
              onChange={(e: any) => fillModel("secretInput", e.target.value)}
              label="secretInput"
            />
            <Button
              label="check"
              onClick={() => {
                handleSecretKeySubmit(model.secretInput);
              }}
            />
          </div>
        </div>
      ) : (
        activeQuiz && (
          <div className="bg-primary m-0 p-0 grid grid-cols-1 ">
            <div key={activeQuiz.id} className="grid grid-cols-1  ">
              <div className="grid grid-cols-4 gap-4 bg-[#202124] rounded px-4 py-2">
                <DisableInput 
                value={activeQuiz.quizName } 
                onChange={(e: any) => fillAddmodel("quizName", e.target.value)}
                />
                <DisableInput value={activeQuiz.quizDurationInmin} />
                <DisableInput value={activeQuiz.quizOpen} />
                <DisableInput value={activeQuiz.description} />
              </div>

              {answerSelected && (
                <div className="grid grid-cols-3 mt-2">
                  <Button onClick={setResult} label="submit" />
                </div>
              )}
              {showSelected && (
                <div className="grid grid-cols-4 my-2">
                  <h3 className="text-dark text-medium text-bold text-1xl"> points : {count}</h3>
                </div>
              )}
            </div>

            <div className="flex justify-center  grid grid-cols-2 py-2 gap-4">
              {questionList && questionList.length > 0
                ? questionList.map((question: any, i: number) => (
                    <div className="grid grid-cols-1  py-2 " key={i}>
                      <div className="grid grid-cols-1">
                        <h3 className="italic text-dark ps-2">
                          Question{i + 1}
                        </h3>
                        <h3
                          className="text-2xl text-dark ps-2"
                          style={{ fontWeight: "bold" }}
                        >
                          {question.question}
                        </h3>
                      </div>
                      {question.option && question.option.length > 0
                        ? question.option.map((option: string, j: number) => (
                            <div className="grid grid-cols-1  m-0" key={j}>
                              <Button
                                label={option}
                                disabled={disable}
                                onClick={() => {
                                  if (question.correctOption !== option) {
                                    console.log("wrong answer");
                                  } else {
                                    if (!answered[i]) {
                                      setCount(count + 1);
                                      console.log(count);
                                      const confirmAnswer = [...answered];
                                      confirmAnswer[i] = true;
                                      setAnswered(confirmAnswer);
                                      console.log("correct answer");
                                    }
                                    setAnswerSelected(true);
                                  }
                                }}
                              />
                            </div>
                          ))
                        : null}
                    </div>
                  ))
                : null}
            </div>
          </div>
        )
      )}
    </>
  );
}
