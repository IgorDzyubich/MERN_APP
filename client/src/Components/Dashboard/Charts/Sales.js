import React, { Component } from "react";
import Chart from "chart.js/auto";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  colors,
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

export default class Sales extends Component {
  chartRef = React.createRef();
  
  data = {
    datasets: [
      {
        backgroundColor: colors.indigo[500],
        // borderColor: colors.indigo[900],
        // borderWidth: 2,
        // borderRadius: 20,
        data: [18, 5, 19, 27, 29, 19, 20],
        label: "This year"
      },
      {
        backgroundColor: colors.grey[200],
        // borderColor: colors.grey[600],
        // borderWidth: 2,
        // borderRadius: 20,
        data: [11, 20, 12, 29, 30, 25, 13],
        label: "Last year"
      },
      {
        backgroundColor: colors.grey[500],
        // borderColor: colors.grey[900],
        // borderWidth: 2,
        // borderRadius: 20,
        data: [10, 10, 15, 24, 27, 20, 17],
        label: "Next year"
      },
    ],
    labels: ["1 Aug", "2 Aug", "3 Aug", "4 Aug", "5 Aug", "6 Aug"],
  };

  options = {
    // plugins: {
    //   legend: true,
    // },
    animation: false,
    cornerRadius: '20px',
    layout: { padding: '0' },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          barThickness: 12,
          maxBarThickness: 10,
          barPercentage: 0.5,
          categoryPercentage: 0.5,
          ticks: {
            fontColor: colors.indigo[500]
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            fontColor: colors.indigo[500],
            beginAtZero: true,
            min: 0,
          },
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: colors.indigo[500],
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor: colors.indigo[500]
          },
        },
      ],
    },
    // tooltips: {
    //   backgroundColor: colors.indigo[500],
    //   bodyFontColor: colors.indigo[500],
    //   borderColor: colors.indigo[500],
    //   borderWidth: 1,
    //   enabled: true,
    //   footerFontColor: colors.indigo[500],
    //   intersect: false,
    //   mode: "index",
    //   titleFontColor: colors.indigo[500]
    // },
  };
  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "bar",
      data: this.data,
      options: this.options,
    });
  }
  render() {
    return (
      <Card >
        <CardHeader
          action={
            <Button endIcon={<ArrowDropDownIcon />} size="small" variant="text">
              Last 7 days
            </Button>
          }
          title="Latest Sales"
        />
        <Divider />
        <CardContent>
          <Box
            style={{
              height: "400px",
              position: "relative",
            }}
          >
            <canvas id="myChart" ref={this.chartRef} />
          </Box>
        </CardContent>
        <Divider />
        <Box
          style={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button
            color="primary"
            endIcon={<ArrowRightIcon />}
            size="small"
            variant="text"
          >
            Overview
          </Button>
        </Box>
      </Card>
    );
  }
}
