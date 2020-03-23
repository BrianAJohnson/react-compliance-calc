import React, { Fragment } from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  OutlinedInput
} from "@material-ui/core";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

import DateFnsUtils from "@date-io/date-fns";

function YtdData(props) {
  const ytdPay = props.ytdPay;
  const setYtdPay = props.setYtdPay;
  const ytdStart = props.ytdStart;
  const setYtdStart = props.setYtdStart;
  const ytdEnd = props.ytdEnd;
  const setYtdEnd = props.setYtdEnd;

  return (
    <Fragment>
      <Grid item>
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="grossYtdPay">Gross Year to Date Pay</InputLabel>
          <OutlinedInput
            id="grossYtdPay"
            label="Gross Year to Date Pay"
            type="text"
            value={ytdPay}
            onChange={e => setYtdPay(e.target.value)}
          />
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl fullWidth variant="outlined">
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              label="Year to Date Start"
              value={ytdStart}
              onChange={e => setYtdStart(new Date(e))}
            />
          </MuiPickersUtilsProvider>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl fullWidth variant="outlined">
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              label="Year to Date End"
              value={ytdEnd}
              onChange={e => setYtdEnd(e)}
            />
          </MuiPickersUtilsProvider>
        </FormControl>
      </Grid>
    </Fragment>
  );
}

export default YtdData;
