type propsType = {
    label?: string;
    onChange?: (...args: any[]) => any;
    type?: string;
    value?: any;
    disabled?:any;
  };
  
  export default function InputField(props: propsType) {
    const { label, onChange, type, value, disabled } = props;
    return (
      <input
        className="p-3 border-2 border-cyan-700 focus:border-cyan-300 w-full outline-none rounded my-1 "
        placeholder={label}
        value={value}
        onChange={onChange}
        type={type ?? "text"}
        disabled={disabled}
      />
    );
  }