import { ImUpload } from "react-icons/im";

type FileUploadProps = {
  onChange?: (...args: any[]) => any;
  value?: any;
};

export default function FileUpload(props: FileUploadProps) {
  const { onChange, value } = props;
  return (
    <div className="flex items-center justify-center w-full">
      <label
        className="flex flex-col items-center justify-center w-full h-64 border-dashed border-2 border-sky-500 
        rounded-lg cursor-pointer 
        "
      >
        <div>
          <ImUpload className="text-sky-500" size={36} />
        </div>
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          accept=".svg, .png, .jpg, .jpeg, .gif"
        />
      </label>
    </div>
  );
}
