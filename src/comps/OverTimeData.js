import React, { useState, Fragment } from "react";

import {
  Grid,
  FormControl,
  FormControlLabel,
  Switch,
  InputLabel,
  OutlinedInput
} from "@material-ui/core";

function OverTimeData(props) {
  const overTimeRate = props.overTimeRate;
  const setOverTimeRate = props.setOverTimeRate;
  const avgOverTimeHours = props.avgOverTimeHours;
  const setAvgOverTimeHours = props.setAvgOverTimeHours;
  const overTime = props.overTime;
  const setOverTime = props.setOverTime;

  function usingOverTime() {
    if (overTime) {
      return (
        <Fragment>
          <Grid item>
            <FormControl variant="outlined">
              <InputLabel htmlFor="otRate">Overtime Rate</InputLabel>
              <OutlinedInput
                id="otRate"
                label="Overtime Rate"
                type="text"
                value={overTimeRate}
                onChange={e => setOverTimeRate(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl variant="outlined">
              <InputLabel htmlFor="avg-ot">Avg OT Hours Per Week</InputLabel>
              <OutlinedInput
                id="avg-ot"
                label="Avg OT Hours Per Week"
                type="text"
                value={avgOverTimeHours}
                onChange={e => setAvgOverTimeHours(e.target.value)}
              />
            </FormControl>
          </Grid>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <Grid item></Grid>
          <Grid item></Grid>
        </Fragment>
      );
    }
  }

  return (
    <Fragment>
      <Grid item md={3}>
        <FormControlLabel
          control={
            <Switch
              checked={overTime}
              onChange={e => {
                setOverTime(e.target.checked);
              }}
              name="overTimeSwitch"
              color="secondary"
            />
          }
          label="Over Time"
        />
      </Grid>
      {usingOverTime()}
    </Fragment>
  );
}

export default OverTimeData;
