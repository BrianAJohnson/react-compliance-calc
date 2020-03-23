import React, { useState } from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import { Grid, Container, InputLabel, Input, Paper } from "@material-ui/core";

import YTDCalc from "./comps/YtdCalc";
import ThreeMonthAvgCalc from "./comps/ThreeMonthAvgCalc";
import HourlyCalc from "./comps/HourlyCalc";
import WageInfo from "./comps/HourlyData";
import YtdData from "./comps/YtdData";
import OverTimeData from "./comps/OverTimeData";
import PayChangeData from "./comps/PayChangeData";
import CommisionCalc from "./comps/CommisionData";
import ShiftDiffData from "./comps/ShiftDiffData";

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
    <ThemeProvider>
      <div className="App">
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
  const [currentWage, setCurentWage] = useState(14.0);
  const [hoursPerWeek, setHoursPerWeek] = useState(40);
  const [wageType, setWageType] = useState(wageTypes.hourly);
  const [payFreq, setPayFreq] = useState("monthly");
  const [ytdPay, setYtdPay] = useState(31231.0);
  const [ytdStart, setYtdStart] = useState(
    new Date(new Date().getFullYear(), 0, 1)
  );
  const [ytdEnd, setYtdEnd] = useState(new Date());
  const [overTimeRate, setOverTimeRate] = useState(16.0);
  const [avgOverTimeHours, setAvgOverTimeHours] = useState(6);
  const [overTime, setOverTime] = useState(false);
  const [shiftDiff, setShiftDiff] = useState(false);
  const [shiftDiffRate, setShiftDiffRate] = useState(15.0);
  const [shiftDiffHours, setShiftDiffHours] = useState(6);
  const [commision, setCommision] = useState(false);
  const [commisionRate, setCommisionRate] = useState(100.0);
  const [commisionFreq, setCommisionFreq] = useState("weekly");

  const [payChange, setPayChange] = useState(false);
  const [payChangeRate, setPayChangeRate] = useState(14.5);
  const [payChangeDate, setPayChangeDate] = useState(
    new Date(new Date().getFullYear(), 0, 1)
  );
  const [seasonalDays, setSeasonalDays] = useState();
  const [grossPayChecks, setGrossPayChecks] = useState(Array(13).fill(0));

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
      <h1 align="center">
        Current Wage is ${currentWage} paid {wageType}. Paydays are {payFreq}
      </h1>

      {/* // Wage Data Input // */}

      <Grid container justify="center" spacing={6}>
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

      <Grid container justify="center" spacing={6}>
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

      <Grid container spacing={6}>
        <OverTimeData
          overTimeRate={overTimeRate}
          setOverTimeRate={setOverTimeRate}
          avgOverTimeHours={avgOverTimeHours}
          setAvgOverTimeHours={setAvgOverTimeHours}
          overTime={overTime}
          setOverTime={setOverTime}
        />
      </Grid>

      {/* --  Shift Diff Data Input -- */}

      <Grid container spacing={6}>
        <ShiftDiffData
          shiftDiff={shiftDiff}
          setShiftDiff={setShiftDiff}
          shiftDiffRate={shiftDiffRate}
          setShiftDiffRate={setShiftDiffRate}
          shiftDiffHours={shiftDiffHours}
          setShiftDiffHours={setShiftDiffHours}
        />
      </Grid>

      {/* -- Commision Data Input -- */}

      <Grid container spacing={6}>
        <CommisionCalc
          commision={commision}
          setCommision={setCommision}
          commisionRate={commisionRate}
          setCommisionRate={setCommisionRate}
          commisionFreq={commisionFreq}
          setCommisionFreq={setCommisionFreq}
        />
      </Grid>

      {/* -- Pay Change Input -- */}

      <Grid container spacing={6}>
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
      </Grid>
      <hr />

      {/* -- Pay Stub Data -- */}

      <Grid container justify="center" spacing={6}>
        {grossPayChecks.map((check, index) => {
          if (index >= checksForAverage[payFreq]) {
            return;
          }
          return (
            <Grid item key={index}>
              <Paper style={{ padding: "20px", background: "#efe" }}>
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
      <Grid container spacing={3}>
        {/*  --  YTD Calc  --  */}

        <Grid item xs={12} sm={6} lg={4}>
          <YTDCalc ytdStart={ytdStart} ytdEnd={ytdEnd} ytdPay={ytdPay} />
        </Grid>

        {/*  --  Three Month Average Calc --  */}

        <Grid item xs={12} sm={6} lg={4}>
          <ThreeMonthAvgCalc
            payFreq={payFreq}
            grossPayChecks={grossPayChecks}
            checksForAverage={checksForAverage}
          />
        </Grid>

        {/*  --  Hourly Calc  -- */}

        <Grid item xs={12} sm={6} lg={4}>
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
