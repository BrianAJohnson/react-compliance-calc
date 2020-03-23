import React, { useState, Fragment } from "react";
import { Paper, Typography, Grid } from "@material-ui/core";

function YTDCalc(props) {
  const getDays = () => {
    const date1 = props.ytdStart;
    const date2 = props.ytdEnd;
    return Math.round((date2 - date1) / (1000 * 3600 * 24));
  };
  const perDay = (props.ytdPay / getDays()).toFixed(2);

  const getYearToDateCalc = () => {
    return ((props.ytdPay / getDays()) * 365).toFixed(2);
  };

  function showYtdCalc() {
    if (getYearToDateCalc() > 0)
      return (
        <Fragment>
          <Grid container direction="row">
            <Grid item xs={6}>
              <Grid container direction="column" align="left">
                <Grid item>YTD</Grid>
                <Grid item>Days</Grid>
                <Grid item>Per Day</Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container direction="column" align="right">
                <Grid item>
                  <Typography>{props.ytdPay} &divide;</Typography>
                  <Typography>{getDays()} =</Typography>
                  <Typography>{perDay} *</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <hr />
          <Grid container direction="row">
            <Grid item xs={6}>
              <Grid container direction="column" align="left">
                <Grid item>Per Day</Grid>
                <Grid item>Days Annualy</Grid>
                <Grid item>Annual Total</Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container direction="column" align="right">
                <Grid item>
                  <Typography>{perDay} *</Typography>
                  <Typography>365 =</Typography>
                  <Typography>{getYearToDateCalc()} *</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Fragment>
      );
  }

  return (
    <Fragment>
      <h3 align="center">YTD From VOE</h3>
      <h4 align="center">Total days for YTD is {getDays()}</h4>
      <Paper
        style={{
          margin: "0 18%",
          padding: "10px",
          background: "#fffde7"
        }}
      >
        {showYtdCalc()}
      </Paper>
    </Fragment>
  );
}

export default YTDCalc;
