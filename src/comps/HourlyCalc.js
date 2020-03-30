import React, { Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const commisionsPerYear = {
  weekly: 52,
  biWeekly: 36,
  monthly: 12,
  semiMonthly: 24,
  yearly: 1
};

function getDays(date1, date2) {
  return Math.round((date2 - date1) / (1000 * 3600 * 24));
}

function getWeeks(days, weeks) {
  const first = (days / 7).toFixed(2);
  const last = Math.abs(first - weeks);
  return [first, last];
}

function formatMoney(amt) {
  return amt.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

function HourlyCalc(props) {
  // -- Hourly Variables -- //
  const currentWage = props.currentWage
    ? parseFloat(props.currentWage).toFixed(2)
    : "0.00";
  const hoursPerWeek = props.hoursPerWeek ? props.hoursPerWeek : 0;
  const weeklyWage = (currentWage * hoursPerWeek).toFixed(2);
  const weeksPerYear = props.payChange
    ? getWeeks(getDays(props.moveInDate, props.payChangeDate).toFixed(2), 52)[0]
    : props.weeksPerYear;
  const annualWage = (weeklyWage * weeksPerYear).toFixed(2);
  // -- Pay Change Variables -- //
  const payChange = props.payChange;
  const payChangeRate = props.payChangeRate;
  const payChangeDate = props.payChangeDate;
  const moveInDate = props.moveInDate;
  const payChangeDays = getDays(moveInDate, payChangeDate).toFixed(2);
  const payChangeWeeks = getWeeks(payChangeDays, 52);
  const payChangeWeekly = (payChangeRate * hoursPerWeek).toFixed(2);
  const payChangeTotal = (payChangeWeekly * payChangeWeeks[1]).toFixed(2);
  // -- OT Variables -- //
  const overTime = props.overTime;
  const overTimeRate = props.overTimeRate;
  const avgOverTimeHours = props.avgOverTimeHours;
  const weeklyOt = (overTimeRate * avgOverTimeHours).toFixed(2);
  const annualOt = (weeklyOt * 52).toFixed(2);
  // -- Shift Diff Variables -- //
  const shiftDiff = props.shiftDiff;
  const shiftDiffRate = props.shiftDiffRate;
  const shiftDiffHours = props.shiftDiffHours;
  const shiftDiffWeekly = (shiftDiffRate * shiftDiffHours).toFixed(2);
  const shiftDiffTotal = (shiftDiffWeekly * 52).toFixed(2);
  // -- Commision Variables -- //
  const commision = props.commision;
  const commisionRate = props.commisionRate;
  const commisionFreq = props.commisionFreq;
  const commisionTotal = (
    commisionRate * commisionsPerYear[commisionFreq]
  ).toFixed(2);

  let grandTotal = 0;

  function showWeeksCalc() {
    if (payChange)
      return (
        <Fragment>
          <Grid container direction="row">
            <Grid item xs={7}>
              <Grid container direction="column" align="left">
                <Grid item>Days</Grid>
                <Grid item>1 Week</Grid>
                <Grid item>Wks Current pay</Grid>
              </Grid>
            </Grid>
            <Grid item xs={5}>
              <Grid container direction="column" align="right">
                <Grid item>
                  <Typography>{payChangeDays} &divide;</Typography>
                  <Typography>{7} =</Typography>
                  <Typography>{payChangeWeeks[0]} *</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <br />
          <Grid container direction="row">
            <Grid item xs={7}>
              <Grid container direction="column" align="left">
                <Grid item>Wks Current</Grid>
                <Grid item>1 year</Grid>
                <Grid item>Wks New Pay</Grid>
              </Grid>
            </Grid>
            <Grid item xs={5}>
              <Grid container direction="column" align="right">
                <Grid item>
                  <Typography>{payChangeWeeks[0]} +</Typography>
                  <Typography>{52} -</Typography>
                  <Typography>{payChangeWeeks[1]} *</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <hr />
        </Fragment>
      );
  }

  function showHourlyCalc() {
    if (annualWage > 0) grandTotal += parseFloat(annualWage);
    return (
      <Fragment>
        <Grid container direction="row">
          <Grid item xs={7}>
            <Grid container direction="column" align="left">
              <Grid item>Wage</Grid>
              <Grid item>Hours</Grid>
              <Grid item>Weekly</Grid>
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <Grid container direction="column" align="right">
              <Grid item>
                <Typography>{currentWage} x</Typography>
                <Typography>{hoursPerWeek} =</Typography>
                <Typography>{weeklyWage} *</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <br />
        <Grid container direction="row">
          <Grid item xs={7}>
            <Grid container direction="column" align="left">
              <Grid item>Weekly</Grid>
              <Grid item>Weeks per Yr.</Grid>
              <Grid item>Annual Hourly</Grid>
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <Grid container direction="column" align="right">
              <Grid item>
                <Typography>{weeklyWage} x</Typography>
                <Typography>{weeksPerYear} =</Typography>
                <Typography>{annualWage} *</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );
  }

  function showPayChangeCalc() {
    if (payChange) {
      grandTotal += parseFloat(payChangeTotal);
      return (
        <Fragment>
          <hr />
          <Fragment>
            <Grid container direction="row">
              <Grid item xs={7}>
                <Grid container direction="column" align="left">
                  <Grid item>Pay Change</Grid>
                  <Grid item>Hrs per Week</Grid>
                  <Grid item>Weekly</Grid>
                </Grid>
              </Grid>
              <Grid item xs={5}>
                <Grid container direction="column" align="right">
                  <Grid item>
                    <Typography>{payChangeRate} x</Typography>
                    <Typography>{hoursPerWeek} =</Typography>
                    <Typography>{payChangeWeekly} *</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <br />
            <Grid container direction="row">
              <Grid item xs={7}>
                <Grid container direction="column" align="left">
                  <Grid item>Weekly</Grid>
                  <Grid item>Weeks per Yr.</Grid>
                  <Grid item>Total pay</Grid>
                </Grid>
              </Grid>
              <Grid item xs={5}>
                <Grid container direction="column" align="right">
                  <Grid item>
                    <Typography>{payChangeWeekly} x</Typography>
                    <Typography>{payChangeWeeks[1]} =</Typography>
                    <Typography>{payChangeTotal} *</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Fragment>
        </Fragment>
      );
    }
  }

  function showOverTimeCalc() {
    if (overTime) {
      grandTotal += parseFloat(annualOt);
      return (
        <Fragment>
          <hr />
          <Grid container direction="row">
            <Grid item xs={7}>
              <Grid container direction="column" align="left">
                <Grid item>OT Rate</Grid>
                <Grid item>OT Hours</Grid>
                <Grid item>OT Weekly</Grid>
              </Grid>
            </Grid>
            <Grid item xs={5}>
              <Grid container direction="column" align="right">
                <Grid item>
                  <Typography>{overTimeRate} x</Typography>
                  <Typography>{avgOverTimeHours} =</Typography>
                  <Typography>{weeklyOt} *</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <br />
          <Grid container direction="row">
            <Grid item xs={7}>
              <Grid container direction="column" align="left">
                <Grid item>OT Weekly</Grid>
                <Grid item>Weeks per Year</Grid>
                <Grid item>OT Total</Grid>
              </Grid>
            </Grid>
            <Grid item xs={5}>
              <Grid container direction="column" align="right">
                <Grid item>
                  <Typography>{weeklyOt} x</Typography>
                  <Typography>{52} =</Typography>
                  <Typography>{annualOt} *</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Fragment>
      );
    }
  }

  function showShiftDiffCalc() {
    if (shiftDiff) {
      grandTotal += parseFloat(shiftDiffTotal);
      return (
        <Fragment>
          <hr />
          <Grid container direction="row">
            <Grid item xs={7}>
              <Grid container direction="column" align="left">
                <Grid item>ShiftDiff Rate</Grid>
                <Grid item>ShiftDiff Hours</Grid>
                <Grid item>Per Week</Grid>
              </Grid>
            </Grid>
            <Grid item xs={5}>
              <Grid container direction="column" align="right">
                <Grid item>
                  <Typography>{shiftDiffRate} x</Typography>
                  <Typography>{shiftDiffHours} =</Typography>
                  <Typography>{shiftDiffWeekly} *</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <br />
          <Grid container direction="row">
            <Grid item xs={7}>
              <Grid container direction="column" align="left">
                <Grid item>per Week</Grid>
                <Grid item>Weeks per Year</Grid>
                <Grid item>ShiftDiff Total</Grid>
              </Grid>
            </Grid>
            <Grid item xs={5}>
              <Grid container direction="column" align="right">
                <Grid item>
                  <Typography>{shiftDiffWeekly} x</Typography>
                  <Typography>{52} =</Typography>
                  <Typography>{shiftDiffTotal} *</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Fragment>
      );
    }
  }

  function showCommisionCalc() {
    if (commision) {
      grandTotal += parseFloat(commisionTotal);
      return (
        <Fragment>
          <hr />
          <Grid container direction="row">
            <Grid item xs={7}>
              <Grid container direction="column" align="left">
                <Grid item>Commision</Grid>
                <Grid item>Times per Year</Grid>
                <Grid item>Total</Grid>
              </Grid>
            </Grid>
            <Grid item xs={5}>
              <Grid container direction="column" align="right">
                <Grid item>
                  <Typography>{commisionRate} x</Typography>
                  <Typography>{commisionsPerYear[commisionFreq]} =</Typography>
                  <Typography>{commisionTotal} *</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Fragment>
      );
    }
  }

  function showTotal() {
    if (true) {
      return (
        <Fragment>
          <hr />
          {payChange || overTime || shiftDiff || commision ? (
            <Typography>{formatMoney(annualWage)} +</Typography>
          ) : null}
          {payChange ? (
            <Typography>{formatMoney(payChangeTotal)} +</Typography>
          ) : null}
          {overTime ? <Typography>{formatMoney(annualOt)} +</Typography> : null}
          {shiftDiff ? (
            <Typography>{formatMoney(shiftDiffTotal)} +</Typography>
          ) : null}
          {commision ? (
            <Typography>{formatMoney(commisionTotal)} +</Typography>
          ) : null}
          {payChange || overTime || shiftDiff || commision ? (
            <Typography>{formatMoney(grandTotal.toFixed(2))} *</Typography>
          ) : (
            <Typography>{formatMoney(annualWage)} *</Typography>
          )}
        </Fragment>
      );
    }
  }

  console.log(commision);
  return (
    <Fragment>
      <h3 align="center">Hourly Calculations</h3>
      <h4 align="center">
        ${currentWage} per hour - {hoursPerWeek} hours per week
      </h4>
      <Paper
        align="right"
        style={{
          margin: "0 18%",
          padding: "10px",
          background: "#fffde7"
        }}
      >
        {annualWage > 0 ? (
          <Fragment>
            {showWeeksCalc()}
            {showHourlyCalc()}
            {showPayChangeCalc()}
            {showOverTimeCalc()}
            {showShiftDiffCalc()}
            {showCommisionCalc()}
            {showTotal()}
          </Fragment>
        ) : null}
      </Paper>
    </Fragment>
  );
}

export default HourlyCalc;
