import React from "react";
import { NotFoundImage } from "../../assets";
import Button from "../../components/button/primary-button";
export default function NotFound() {
  return (
    <div className="grid-cols-1 h-[80vh] flex items-center justify-center">
      <div className="grid grid-span-1 flex items-center justify-center text-center  gap-4 h-[65%]">
        <div>
          <img
            src={NotFoundImage}
            style={{
              height: "29rem",
            }}
          />
        </div>
        <div>
          <h1>Sorry! this page was not found</h1>
        </div>
        <Button label="Back"/>
      </div>
    </div>
  );
}
