import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { fbAdd, fbSignout } from "../../../config/firebase/firebase-methods";
import Button from "../../../components/button/primary-button";
import InputField from "../../../components/input/input-field";

export default function AddQuiz() {
  const navigate = useNavigate();
  const [disable, setDisable] = useState(false);
  const [optionList, setoptionList] = useState<any>([]);
  const [correctOption, setCorrectOption] = useState<any>();
  const [option, setoption] = useState<any>("");
  const [questionModel, setQuestionModel] = useState<any>({});
  const [questions, setQuestions] = useState<any>([]);
  const [quizModel, setquizModel] = useState<any>({
    quizName: "",
    quizDurationInmin: "",
    secretKey: "",
    quizOpen: "",
    description: "",
    questions: [],
  });

  const fillQuizModel = (key: string, val: any) => {
    quizModel[key] = val;
    setquizModel({ ...quizModel });
  };
  const fillQuestionModel = (key: string, val: any) => {
    questionModel[key] = val;
    setQuestionModel({ ...questionModel });
  };

  const addOption = () => {
    optionList.push(option);
    setoptionList([...optionList]);
    setoption("");
  };
  const logOut = () => {
    fbSignout().then(() => {
      navigate("/sign-in");
    });
  };

  const AddQuiz = () => {
    quizModel.questions = [...questions];
    console.log(quizModel);
    setDisable(false);
    fbAdd("quiz", quizModel)
      .then((res: any) => {
        console.log(res);
        setquizModel({
          ...quizModel,
          quizName: "",
          quizDurationInmin: "",
          secretKey: "",
          quizOpen: "",
          description: "",
          questions: [],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addQuestion = () => {
    questionModel.option = [...optionList];
    questionModel.correctOption = correctOption;
    console.log(questionModel);
    questions.push(questionModel);
    setQuestions([...questions]);
    setQuestionModel({});
    setCorrectOption("");
    setoptionList([]);
    setoption("");
  };

  return (
    <>
      <div className="grid grid-cols-1 ">
        
        <div className="p-10 col-span-3">
          <div className="grid grid-cols-4 ">
            <div className="col-span-3 pe-2">
              <h1 className="text-3xl font-medium">Add Quiz</h1>
            </div>
            <Button onClick={AddQuiz} label="Save" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="py-2">
              <InputField
                value={quizModel.quizName || ""}
                onChange={(e: any) => fillQuizModel("quizName", e.target.value)}
                disabled={disable}
                label="Quiz Name"
              />
            </div>
            <div className="py-2">
              <InputField
                value={quizModel.quizDurationInmin || ""}
                onChange={(e: any) =>
                  fillQuizModel("quizDurationInmin", e.target.value)
                }
                label="Quiz Duration In min"
                disabled={disable}
              />
            </div>
            <div className="py-2">
              <InputField
                value={quizModel.secretKey || ""}
                onChange={(e: any) =>
                  fillQuizModel("secretKey", e.target.value)
                }
                label="Secret Key"
                disabled={disable}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="py-2">
              <InputField
                value={quizModel.quizOpen || ""}
                onChange={(e: any) => fillQuizModel("quizOpen", e.target.value)}
                label="Quiz Open"
                disabled={disable}
              />
            </div>
            <div className="py-2">
              <InputField
                value={quizModel.description || ""}
                onChange={(e: any) =>
                  fillQuizModel("description", e.target.value)
                }
                label="Description"
                disabled={disable}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="py-2">
              <Button onClick={() => setDisable(true)} label="Lock Quiz" />
            </div>
          </div>
          <div className="py-2">
            <InputField
              value={questionModel.question || ""}
              onChange={(e: any) =>
                fillQuestionModel("question", e.target.value)
              }
              label="Question"
            />
          </div>

          <div className="grid grid-cols-4 ">
            <div className="col-span-3 pe-2">
              <InputField
                value={option}
                onChange={(e) => {
                  setoption(e.target.value);
                }}
                label="Option"
              />
            </div>
            <Button label="Add More Option" onClick={addOption} />
          </div>

          <div className="grid grid-cols-4 py-2">
            <div className="col-span-3 pe-2">
              {optionList.map((x: any, i: any) => (
                <Button
                  key={i}
                  label={x}
                  onClick={() => {
                    setCorrectOption(x);
                  }}
                />
              ))}
            </div>
            {correctOption && <Button label={correctOption} />}
          </div>
          <div className="grid grid-cols-4 ">
            <Button label="Save Question" onClick={addQuestion} />
          </div>
          {questions && questions.length > 0
            ? questions.map((x: any, i: number) => (
                <div key={i}>
                  <div className="grid grid-cols-1">
                    <div className="grid grid-cols-1">
                    <h1 className="text-base italic py-1">{x.question}</h1>
                    </div>

                    <div className="grid grid-cols-4">
                      {x.option && x.option.length > 0
                        ? x.option.map((option: string, j: number) => (
                            <h1 className="text-base italic py-1" key={j}>
                              {option}
                            </h1>
                          ))
                        : null}
                    </div>
                    <div className="grid grid-cols-10">
                      <div className="me-3">
                        <CiEdit size={25} color="green" />
                        {/* <Button label="Edit" /> */}
                      </div>
                      <div>
                        <MdOutlineDeleteSweep size={25} color="red" />
                        {/* <Button label="Delete" /> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
}
