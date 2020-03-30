import React, { useState } from "react";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import {
  Grid,
  Container,
  InputLabel,
  Input,
  Paper,
  AppBar,
  Toolbar,
  Typography
} from "@material-ui/core";

import { teal } from "@material-ui/core/colors";

import "./App.css";

import YTDCalc from "./comps/YtdCalc";
import ThreeMonthAvgCalc from "./comps/ThreeMonthAvgCalc";
import HourlyCalc from "./comps/HourlyCalc";
import WageInfo from "./comps/HourlyData";
import YtdData from "./comps/YtdData";
import OverTimeData from "./comps/OverTimeData";
import PayChangeData from "./comps/PayChangeData";
import CommisionCalc from "./comps/CommisionData";
import ShiftDiffData from "./comps/ShiftDiffData";
import Switches from "./comps/Switches";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1b7f66"
    }
  }
});

const checksForAverage = {
  weekly: 13,
  biWeekly: 7,
  monthly: 3,
  semiMonthly: 6,
  yearly: 1
};

const wageTypes = {
  hourly: "hourly",
  salary: "salary"
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppBar position="static" align="right">
          <Toolbar variant="dense">
            {/* <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" color="inherit">
              I-Calc
            </Typography>
          </Toolbar>
        </AppBar>
        <h1 align="center">Estimated Annual Income Calculator</h1>
        <Data />
      </div>
    </ThemeProvider>
  );
}

function Data() {
  const [moveInDate, setMoveInDate] = useState(
    new Date(new Date().getFullYear(), 0, 1)
  );
  const [currentWage, setCurentWage] = useState();
  const [hoursPerWeek, setHoursPerWeek] = useState();
  const [wageType, setWageType] = useState(wageTypes.hourly);
  const [payFreq, setPayFreq] = useState("monthly");
  const [ytdPay, setYtdPay] = useState();
  const [ytdStart, setYtdStart] = useState(
    new Date(new Date().getFullYear(), 0, 1)
  );
  const [ytdEnd, setYtdEnd] = useState(new Date());
  const [overTimeRate, setOverTimeRate] = useState();
  const [avgOverTimeHours, setAvgOverTimeHours] = useState();
  const [overTime, setOverTime] = useState(false);
  const [shiftDiff, setShiftDiff] = useState(false);
  const [shiftDiffRate, setShiftDiffRate] = useState();
  const [shiftDiffHours, setShiftDiffHours] = useState();
  const [commision, setCommision] = useState(false);
  const [commisionRate, setCommisionRate] = useState();
  const [commisionFreq, setCommisionFreq] = useState("weekly");

  const [payChange, setPayChange] = useState(false);
  const [payChangeRate, setPayChangeRate] = useState(14.5);
  const [payChangeDate, setPayChangeDate] = useState(
    new Date(new Date().getFullYear(), 0, 1)
  );
  const [seasonalDays, setSeasonalDays] = useState();
  const [grossPayChecks, setGrossPayChecks] = useState(Array(13).fill(""));

  const updatePayChecksNeeded = (evt, index) => {
    const checks = grossPayChecks.slice();
    const newValue =
      evt.target.value || checks[index] == 0 ? evt.target.value : 0;
    checks[index] = newValue;
    console.log("Check[index] " + checks[index]);
    setGrossPayChecks(checks);
  };

  return (
    <Container maxWidth="lg">
      {/* // -- Switches -- // */}

      <Grid container justify="center">
        <Switches
          overTime={overTime}
          setOverTime={setOverTime}
          payChange={payChange}
          setPayChange={setPayChange}
          commision={commision}
          setCommision={setCommision}
          shiftDiff={shiftDiff}
          setShiftDiff={setShiftDiff}
        />
      </Grid>

      {/* // -- Wage Data Input -- // */}

      <Grid container justify="center">
        <WageInfo
          currentWage={currentWage}
          setCurentWage={setCurentWage}
          hoursPerWeek={hoursPerWeek}
          setHoursPerWeek={setHoursPerWeek}
          payFreq={payFreq}
          setPayFreq={setPayFreq}
        />
      </Grid>

      {/* // YTD Data Input  */}

      <Grid container justify="center">
        <YtdData
          ytdPay={ytdPay}
          setYtdPay={setYtdPay}
          ytdStart={ytdStart}
          setYtdStart={setYtdStart}
          ytdEnd={ytdEnd}
          setYtdEnd={setYtdEnd}
        />
      </Grid>

      {/* --  OverTime Data Input -- */}

      <Grid container justify="center">
        {overTime ? (
          <OverTimeData
            overTimeRate={overTimeRate}
            setOverTimeRate={setOverTimeRate}
            avgOverTimeHours={avgOverTimeHours}
            setAvgOverTimeHours={setAvgOverTimeHours}
            overTime={overTime}
            setOverTime={setOverTime}
          />
        ) : null}
      </Grid>

      {/* --  Shift Diff Data Input -- */}
      <Grid container justify="center">
        {shiftDiff ? (
          <ShiftDiffData
            shiftDiff={shiftDiff}
            setShiftDiff={setShiftDiff}
            shiftDiffRate={shiftDiffRate}
            setShiftDiffRate={setShiftDiffRate}
            shiftDiffHours={shiftDiffHours}
            setShiftDiffHours={setShiftDiffHours}
          />
        ) : null}
      </Grid>

      {/* -- Commision Data Input -- */}
      <Grid container justify="center">
        {commision ? (
          <CommisionCalc
            commision={commision}
            setCommision={setCommision}
            commisionRate={commisionRate}
            setCommisionRate={setCommisionRate}
            commisionFreq={commisionFreq}
            setCommisionFreq={setCommisionFreq}
          />
        ) : null}
      </Grid>

      {/* -- Pay Change Input -- */}
      <Grid container justify="center">
        {payChange ? (
          <PayChangeData
            payChange={payChange}
            setPayChange={setPayChange}
            payChangeRate={payChangeRate}
            setPayChangeRate={setPayChangeRate}
            payChangeDate={payChangeDate}
            setPayChangeDate={setPayChangeDate}
            moveInDate={moveInDate}
            setMoveInDate={setMoveInDate}
          />
        ) : null}
      </Grid>
      {/* -- Pay Stub Data -- */}

      <Grid container justify="center">
        {grossPayChecks.map((check, index) => {
          if (index >= checksForAverage[payFreq]) {
            return null;
          }
          return (
            <Grid item key={index}>
              <Paper
                className="item-margin"
                style={{ padding: "20px", background: "#efe" }}
              >
                <InputLabel>
                  <span>Paycheck #{index + 1}: </span>
                  <Input
                    type="text"
                    value={grossPayChecks[index]}
                    onChange={e => updatePayChecksNeeded(e, index)}
                  />
                </InputLabel>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
      <br />
      <hr />
      <Grid container>
        {/*  --  YTD Calc  --  */}

        <Grid item xs={12} sm={6} lg={4} className="calc">
          <YTDCalc ytdStart={ytdStart} ytdEnd={ytdEnd} ytdPay={ytdPay} />
        </Grid>

        {/*  --  Three Month Average Calc --  */}

        <Grid item xs={12} sm={6} lg={4} className="calc">
          <ThreeMonthAvgCalc
            payFreq={payFreq}
            grossPayChecks={grossPayChecks}
            checksForAverage={checksForAverage}
          />
        </Grid>

        {/*  --  Hourly Calc  -- */}

        <Grid item xs={12} sm={6} lg={4} className="calc">
          <HourlyCalc
            currentWage={currentWage}
            hoursPerWeek={hoursPerWeek}
            wageType={wageType}
            weeksPerYear={52}
            overTime={overTime}
            overTimeRate={overTimeRate}
            avgOverTimeHours={avgOverTimeHours}
            commision={commision}
            commisionRate={commisionRate}
            commisionFreq={commisionFreq}
            shiftDiff={shiftDiff}
            shiftDiffRate={shiftDiffRate}
            shiftDiffHours={shiftDiffHours}
            payChange={payChange}
            payChangeRate={payChangeRate}
            payChangeDate={payChangeDate}
            moveInDate={moveInDate}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
