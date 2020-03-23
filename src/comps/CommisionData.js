import React, { useState, Fragment } from "react";
import {
  Grid,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Switch,
  InputLabel,
  OutlinedInput
} from "@material-ui/core";

function CommisionData(props) {
  const commisionRate = props.commisionRate;
  const setCommisionRate = props.setCommisionRate;
  const commisionFreq = props.commisionFreq;
  const setCommisionFreq = props.setCommisionFreq;
  const commision = props.commision;
  const setCommision = props.setCommision;

  function usingCommision() {
    if (commision) {
      return (
        <Fragment>
          <Grid item>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="Commision-bonus">
                Commision, Bonus, Tips
              </InputLabel>
              <OutlinedInput
                id="Commision-bonus"
                label="Commision, Bonus, Tips"
                type="text"
                value={commisionRate}
                onChange={e => setCommisionRate(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl>
              <FormLabel align="center">
                Commision, bonus, Tips Frequency
              </FormLabel>
              <RadioGroup
                aria-label="position"
                name="position"
                value={commisionFreq}
                onChange={e => setCommisionFreq(e.target.value)}
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
                  value="monthly"
                  control={<Radio color="primary" />}
                  label="Monthly"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="semiMonthly"
                  control={<Radio color="primary" />}
                  label="Semi-Monthly"
                  labelPlacement="end"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
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
              checked={commision}
              onChange={e => {
                setCommision(e.target.checked);
              }}
              name="overTimeSwitch"
              color="secondary"
            />
          }
          label="Commision, Bonus, Tips"
        />
      </Grid>
      {usingCommision()}
    </Fragment>
  );
}

export default CommisionData;
