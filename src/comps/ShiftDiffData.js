import React, { useState, Fragment } from "react";

import {
  Grid,
  FormControl,
  FormControlLabel,
  Switch,
  InputLabel,
  OutlinedInput
} from "@material-ui/core";

function ShiftDiffData(props) {
  const shiftDiffRate = props.shiftDiffRate;
  const setShiftDiffRate = props.setShiftDiffRate;
  const shiftDiffHours = props.shiftDiffHours;
  const setShiftDiffHours = props.setShiftDiffHours;
  const shiftDiff = props.shiftDiff;
  const setShiftDiff = props.setShiftDiff;

  function usingShiftDiff() {
    if (shiftDiff) {
      return (
        <Fragment>
          <Grid item className="item-margin">
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="shiftDiffRate">
                Shift Differential Rate
              </InputLabel>
              <OutlinedInput
                id="shiftDiffRate"
                label="Shift Differential Rate"
                type="text"
                value={shiftDiffRate}
                onChange={e => setShiftDiffRate(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item className="item-margin">
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="shiftDiffHours">
                Shift Diff Hours Per Week
              </InputLabel>
              <OutlinedInput
                id="shiftDiffHours"
                label="Shift Diff Hours Per Week"
                type="text"
                value={shiftDiffHours}
                onChange={e => setShiftDiffHours(e.target.value)}
              />
            </FormControl>
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
              checked={shiftDiff}
              onChange={e => {
                setShiftDiff(e.target.checked);
              }}
              name="overTimeSwitch"
              color="primary"
            />
          }
          label="Shift Differential"
        />
      </Grid> */}
      {usingShiftDiff()}
    </Fragment>
  );
}

export default ShiftDiffData;
