import React, { useState, Fragment } from "react";

import {
  Grid,
  FormControl,
  Fade,
  Slide,
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
    return (
      <Fragment>
        <Slide direction="right" in={overTime} mountOnEnter unmountOnExit>
          <Grid item className="item-margin">
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
        </Slide>

        <Slide direction="left" in={overTime} mountOnEnter unmountOnExit>
          <Grid item className="item-margin">
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
        </Slide>
      </Fragment>
    );
  }

  return (
    <Fragment>
      {/* <Grid item md={3}>
        <FormControlLabel
          control={
            <Switch
              checked={overTime}
              onChange={e => {
                setOverTime(e.target.checked);
              }}
              name="overTimeSwitch"
              color="primary"
            />
          }
          label="Over Time"
        />
      </Grid> */}
      {usingOverTime()}
    </Fragment>
  );
}

export default OverTimeData;
