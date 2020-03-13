import React, { useState } from "react";
import {
  ThemeProvider,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import {
  Grid,
  FormControl,
  FormControlLabel,
  InputLabel,
  Input,
  OutlinedInput,
  Button,
  Radio,
  RadioGroup,
  FormLabel
} from "@material-ui/core";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

import DateFnsUtils from "@date-io/date-fns";

const checksForAverage = {
  weekly: 13,
  biWeekly: 7,
  monthly: 3,
  semiMonthly: 6,
  yearly: 1
};

const checksPerYear = {
  weekly: 52,
  biWeekly: 36,
  monthly: 12,
  semiMonthly: 24,
  yearly: 1
};

const wageTypes = {
  hourly: "hourly",
  salary: "salary"
};

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        {/* This is a Comment */}
        <h1 align="center">Estimated Annual Income Calculator</h1>

        <Data />
      </div>
    </ThemeProvider>
  );
}

function Data() {
  const [currentWage, setCurentWage] = useState();
  const [hoursPerWeek, setHoursPerWeek] = useState();
  const [wageType, setWageType] = useState(wageTypes.hourly);
  const [payFreq, setPayFreq] = useState("biWeekly");
  const [ytdPay, setYtdPay] = useState(0);
  const [ytdStart, setYtdStart] = useState(
    new Date(new Date().getFullYear(), 0, 1)
  );
  const [ytdEnd, setYtdEnd] = useState(new Date());
  const [overTimeRate, setOverTimeRate] = useState();
  const [avgOverTimeHours, setAvgOverTimeHours] = useState();
  const [shiftDiffRate, setShiftDiffRate] = useState();
  const [shiftDiffHours, setShiftDiffHours] = useState();
  const [commisionRate, setCommisionRate] = useState();
  const [commisionFreq, setCommisionFreq] = useState("weekly");
  const [wageChange, setWageChange] = useState();
  const [wageChangeDate, setWageChangeDate] = useState("1.2.2019");
  const [seasonalDays, setSeasonalDays] = useState();
  const [grossPayChecks, setGrossPayChecks] = useState([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ]);

  const updatePayChecksNeeded = (evt, index) => {
    const checks = grossPayChecks.slice();
    const newValue =
      evt.target.value || checks[index] == 0 ? evt.target.value : 0;
    checks[index] = newValue;
    console.log("Check[index] " + checks[index]);
    setGrossPayChecks(checks);
  };

  return (
    <>
      <h1 align="center">
        Current Wage is ${currentWage} paid {wageType}. Paydays are {payFreq}
      </h1>
      <Grid container justify="center" spacing={6}>
        <Grid item>
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
        <Grid item>
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
        <Grid item>
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
        <Grid item>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="grossYtdPay">
              Gross Year to Date Pay
            </InputLabel>
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
        <Grid item>
          <FormControl fullWidth variant="outlined">
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
          <FormControl fullWidth variant="outlined">
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
        <Grid item>
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
        <Grid item>
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
        <Grid item>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="payRateChange">
              Anticipated Pay Change
            </InputLabel>
            <OutlinedInput
              id="payRateChange"
              label="Anticipated Pay Change"
              type="text"
              value={wageChange}
              onChange={e => setWageChange(e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              label="New Pay Rate Effective"
              value={wageChangeDate}
              onChange={e => setWageChangeDate(e)}
            />
          </MuiPickersUtilsProvider>
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={6}>
        {grossPayChecks.map((check, index) => {
          if (index >= checksForAverage[payFreq]) {
            return;
          }
          return (
            <Grid item key={index}>
              <InputLabel>
                <span>Paycheck #{index + 1}: </span>
                <Input
                  type="text"
                  value={grossPayChecks[index]}
                  onChange={e => updatePayChecksNeeded(e, index)}
                />
              </InputLabel>
            </Grid>
          );
        })}
      </Grid>
      <br />
      <hr />
      <YTDCalc ytdStart={ytdStart} ytdEnd={ytdEnd} ytdPay={ytdPay} />
      <ThreeMonthAvgCalc
        payFreq={payFreq}
        grossPayChecks={grossPayChecks}
        checksForAverage={checksForAverage}
      />
    </>
  );
}

//  --  YTD Calculation  --  //
function YTDCalc(props) {
  const getDays = () => {
    const date1 = props.ytdStart;
    const date2 = props.ytdEnd;
    return Math.round((date2 - date1) / (1000 * 3600 * 24));
  };

  const getYearToDateCalc = () => {
    return ((props.ytdPay / getDays()) * 365).toFixed(2);
  };

  return (
    <>
      <h3 align="center">Total days for YTD is {getDays()}</h3>
      <h3 align="center">YTD Calculation is :{getYearToDateCalc()}</h3>
    </>
  );
}

//  --  Three Month Average

function ThreeMonthAvgCalc(props) {
  const getAverage = () => {
    let payCheckSum = 0;
    let payCheckAverage = 0;
    let calc = "";

    calc = props.grossPayChecks.map((check, index) => {
      if (index >= props.checksForAverage[props.payFreq]) return;
      else {
        payCheckSum += check;
        return (
          <span align="right">
            + {parseFloat(check).toFixed(2)} <br />
          </span>
        );
      }
    });

    console.log(payCheckSum);
    payCheckAverage =
      (payCheckSum / checksForAverage[props.payFreq]) *
      checksPerYear[props.payFreq];

    return (
      <div>
        {calc}
        <p>= {payCheckAverage.toFixed(2)}</p>
      </div>
    );
  };

  return (
    <div align="center">
      <h3> This is the 3 Month Average Section</h3>
      <h4>
        There are {checksForAverage[props.payFreq]} checks needed for the
        average.{" "}
      </h4>
      {getAverage()}
    </div>
  );
}

export default App;
