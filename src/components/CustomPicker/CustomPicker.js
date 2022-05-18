import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib

import {
  KeyboardDatePicker, MuiPickersUtilsProvider,
} from "@material-ui/pickers";


export default function App() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        label = "Opening Date"
        fullWidth
        clearable
        value={selectedDate}
        placeholder="10/10/2018"
        onChange={date => handleDateChange(date)}
        minDate={new Date()}
        format="MM/dd/yyyy"
      />
    </MuiPickersUtilsProvider>
  );
}