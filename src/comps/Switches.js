import React, { Fragment } from "react";

import { Grid, FormControlLabel, Switch } from "@material-ui/core";

function Switches(props) {
  const shiftDiff = props.shiftDiff;
  const setShiftDiff = props.setShiftDiff;
  const overTime = props.overTime;
  const setOverTime = props.setOverTime;
  const commision = props.commision;
  const setCommision = props.setCommision;
  const payChange = props.payChange;
  const setPayChange = props.setPayChange;

  return (
    <Fragment>
      <Grid item style={{ margin: "1rem" }}>
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
      </Grid>

      <Grid item style={{ margin: "1rem" }}>
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
      </Grid>

      <Grid item style={{ margin: "1rem" }}>
        <FormControlLabel
          control={
            <Switch
              checked={commision}
              onChange={e => {
                setCommision(e.target.checked);
              }}
              name="overTimeSwitch"
              color="primary"
            />
          }
          label="Commision, Bonus, Tips"
        />
      </Grid>

      <Grid item style={{ margin: "1rem" }}>
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
      </Grid>
    </Fragment>
  );
}

export default Switches;
