import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fbGet } from "../../../config/firebase/firebase-methods";

export default function StudentDetail() {
  const { id } = useParams<{ id: string }>();
  const [model, setModel] = useState<any[]>([]);

  const GetStudentList = () => {
    fbGet(`studentList/${id}`)
      .then((res: any) => {
        console.log("Data from Firebase:", res);

        if (Array.isArray(res) && res.length > 0) {
          const objectData = res.reduce((acc, item, index) => {
            const key = `key${index}`;
            acc[key] = item;
            return acc;
          }, {});

          setModel(objectData);
        } else {
          console.error("Invalid data structure or empty array.");
        }
      })
      .catch((err) => {
        console.error("Error fetching student data:", err);
      });
  };

  useEffect(() => {
    GetStudentList();
  }, [id]);

  return (
    <div className="grid grid-cols-1 gap-4 py-5">
      <div className="grid grid-cols-1 gap-4 py-5">
        <div className="grid col-span-1 md:grid-cols-4 flex items-end justify-center gap-2">
          {Object.keys(model).map((key: any) => {
            const item = model[key];
            return (
              <div key={key}>
                <h1 className="text-black">{item}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
