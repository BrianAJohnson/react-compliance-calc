import React, { Fragment } from "react";
import {
  Grid,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  InputLabel,
  OutlinedInput,
  FormLabel
} from "@material-ui/core";

function WageInfo(props) {
  const currentWage = props.currentWage;
  const setCurentWage = props.setCurentWage;
  const hoursPerWeek = props.hoursPerWeek;
  const setHoursPerWeek = props.setHoursPerWeek;
  const payFreq = props.payFreq;
  const setPayFreq = props.setPayFreq;

  return (
    <Fragment>
      <Grid item className="item-margin">
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="current-wages">Current Wage</InputLabel>
          <OutlinedInput
            id="current-wages"
            label="Current Wages"
            type="text"
            value={currentWage}
            onChange={e => setCurentWage(e.target.value)}
          />
        </FormControl>
      </Grid>
      <Grid item className="item-margin">
        <FormControl fullWidth variant="outlined">
          <InputLabel>Average Hours Per Week</InputLabel>
          <OutlinedInput
            label="Average Hours per Week"
            type="text"
            value={hoursPerWeek}
            onChange={e => setHoursPerWeek(e.target.value)}
          />
        </FormControl>
      </Grid>
      <Grid item className="item-margin">
        <FormControl>
          <FormLabel align="center">Pay Frequency</FormLabel>
          <RadioGroup
            value={payFreq}
            onChange={e => setPayFreq(e.target.value)}
            row
          >
            <FormControlLabel
              value="weekly"
              control={<Radio color="primary" />}
              label="Weekly"
              labelPlacement="end"
            />
            <FormControlLabel
              value="biWeekly"
              control={<Radio color="primary" />}
              label="Bi-Weekly"
              labelPlacement="end"
            />
            <FormControlLabel
              value="semiMonthly"
              control={<Radio color="primary" />}
              label="Semi-Monthly"
              labelPlacement="end"
            />
            <FormControlLabel
              value="monthly"
              control={<Radio color="primary" />}
              label="Monthly"
              labelPlacement="end"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
    </Fragment>
  );
}

export default WageInfo;
