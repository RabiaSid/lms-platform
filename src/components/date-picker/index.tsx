import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

type DatePickerProps = {
  label: string;
};

export default function DatePickerValue(props: DatePickerProps) {
  const { label } = props
  const [val, setVal] = React.useState<Dayjs | null>(dayjs('2022-04-17'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} 
    // style={{width:'100%'}} 
    >
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <DatePicker
        //  className="ms-2 DatepickerWidth w-full"
         className="p-3 border-2 border-cyan-700 focus:border-cyan-300 w-full outline-none rounded my-1 "
          label={label}
          value={val}
          onChange={(newValue) => setVal(newValue)}
        
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
