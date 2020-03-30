import React, { useState, Fragment } from "react";
import {
  FormControl,
  FormControlLabel,
  Switch,
  InputLabel,
  OutlinedInput,
  Grid
} from "@material-ui/core";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

import DateFnsUtils from "@date-io/date-fns";

function PayChangeData(props) {
  const payChange = props.payChange;
  const setPayChange = props.setPayChange;
  const payChangeRate = props.payChangeRate;
  const setPayChangeRate = props.setPayChangeRate;
  const payChangeDate = props.payChangeDate;
  const setPayChangeDate = props.setPayChangeDate;
  const moveInDate = props.moveInDate;
  const setMoveInDate = props.setMoveInDate;

  function usingPayChange() {
    if (payChange) {
      return (
        <Fragment>
          <Grid item className="item-margin">
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="payRateChange">
                Anticipated Pay Change
              </InputLabel>
              <OutlinedInput
                id="payRateChange"
                label="Anticipated Pay Change"
                type="text"
                value={payChangeRate}
                onChange={e => setPayChangeRate(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item className="item-margin">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                label="Move In / Recert Date"
                value={moveInDate}
                onChange={e => setMoveInDate(e)}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item className="item-margin">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                label="New Pay Rate Effective"
                value={payChangeDate}
                onChange={e => setPayChangeDate(e)}
              />
            </MuiPickersUtilsProvider>
          </Grid>
        </Fragment>
      );
    }
  }

  return (
    <Fragment>
      {/* <Grid item md={3}>
        <FormControlLabel
          control={
            <Switch
              checked={payChange}
              onChange={e => {
                setPayChange(e.target.checked);
              }}
              name="overTimeSwitch"
              color="primary"
            />
          }
          label="Anticipated Pay Change"
        />
      </Grid> */}
      {usingPayChange()}
    </Fragment>
  );
}

export default PayChangeData;
