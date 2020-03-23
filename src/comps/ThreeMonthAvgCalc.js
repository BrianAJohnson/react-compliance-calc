import React, { Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import { Typography, Grid } from "@material-ui/core";

function ThreeMonthAvgCalc(props) {
  const checksForAverage = props.checksForAverage;
  const checksPerYear = {
    weekly: 52,
    biWeekly: 36,
    monthly: 12,
    semiMonthly: 24,
    yearly: 1
  };

  let payCheckSum = 0;

  function getPayCheckAvg() {
    return (
      (payCheckSum / checksForAverage[props.payFreq]) *
      checksPerYear[props.payFreq]
    ).toFixed(2);
  }

  const showThreeMonthAvg = () => {
    const checks = props.grossPayChecks.map((check, index) => {
      if (index >= props.checksForAverage[props.payFreq]) return;
      else {
        payCheckSum += parseFloat(check);
        return (
          <Grid container direction="row">
            <Grid item xs={6}>
              <Grid container direction="column" align="left">
                <Grid item>Check#{index + 1}</Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container direction="column" align="right">
                <Grid item>
                  <Typography>{parseFloat(check).toFixed(2)} +</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        );
      }
    });

    const avgPayCheck = payCheckSum / checksForAverage[props.payFreq];

    if (getPayCheckAvg() > 0)
      return (
        <Fragment>
          {checks}
          <Grid container direction="row">
            <Grid item xs={6}>
              <Grid container direction="column" align="left">
                <Grid item>Checks Sum</Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container direction="column" align="right">
                <Grid item>
                  <Typography>{payCheckSum.toFixed(2)} *</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <hr />
          <Grid container direction="row">
            <Grid item xs={6}>
              <Grid container direction="column" align="left">
                <Grid item>Check Sum</Grid>
                <Grid item># of Checks</Grid>
                <Grid item>Check Avg</Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container direction="column" align="right">
                <Grid item>
                  <Typography>{payCheckSum.toFixed(2)} &divide;</Typography>
                  <Typography>{checksForAverage[props.payFreq]} =</Typography>
                  <Typography>{avgPayCheck.toFixed(2)} *</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <hr />
          <Grid container direction="row">
            <Grid item xs={6}>
              <Grid container direction="column" align="left">
                <Grid item>Check Avg</Grid>
                <Grid item>Checks per Yr.</Grid>
                <Grid item>Annual Total</Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container direction="column" align="right">
                <Grid item>
                  <Typography>{avgPayCheck.toFixed(2)} x</Typography>
                  <Typography>{checksPerYear[props.payFreq]} =</Typography>
                  <Typography>{getPayCheckAvg()} *</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Fragment>
      );
  };

  return (
    <Fragment>
      <h3 align="center">3 Month Average</h3>
      <h4 align="center">
        There are {checksForAverage[props.payFreq]} checks needed for the
        average.{" "}
      </h4>
      <Paper
        style={{
          margin: "0 20%",
          padding: "10px",
          background: "#fffde7"
        }}
      >
        {showThreeMonthAvg()}
      </Paper>
    </Fragment>
  );
}

export default ThreeMonthAvgCalc;
