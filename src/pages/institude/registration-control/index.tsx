import { useState } from "react";
import SwitchLabels from "../../../components/switch";

export default function RegistrationControl() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="grid grid-cols-1 gap-4 py-5">
      <div className="grid col-span-1  md:grid-cols-4 flex items-end justify-center text-center gap-4">
        <div className="grid col-span-1  border p-5 rounded flex items-end justify-center text-center shadow-sm shadow-black/30 dark:shadow-black/50">
          <h1 className="text-3xl font-medium text-black">
            Learning Management System
          </h1>
          <SwitchLabels
            label={checked ? "Open" : "Close"}
            checked={checked}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
