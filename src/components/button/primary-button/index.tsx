import { ReactNode } from "react";

type propsType = {
  label: string;
  onClick?: any;
  disabled?: any;
  children?: ReactNode
};

export default function Button(props: propsType) {
  const { label, onClick, disabled, children } = props;
  return (
    <button
      onClick={onClick}
      className="bg-cyan-900 p-2 text-white px-8 w-[100%] my-1"
      disabled={disabled}
    >
      {label}{children}
    </button>
  );
}
