import React, { Component } from "react";
import Chart from "chart.js/auto";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
} from '@material-ui/core';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import PhoneIcon from '@material-ui/icons/Phone';
import TabletIcon from '@material-ui/icons/Tablet';

export default class TrafficByDevice extends Component {
    chartRef = React.createRef();

  data = {
    datasets: [
      {
        data: [63, 15, 22],
        backgroundColor: [
          colors.indigo[500],
          colors.red[600],
          colors.orange[600]
        ],
        borderWidth: 8,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white
      }
    ],
    labels: ['Desktop', 'Tablet', 'Mobile']
  };

  options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
    //   backgroundColor: colors.indigo[500],
    //   bodyFontColor: theme.palette.text.secondary,
    //   borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
    //   footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
    //   titleFontColor: theme.palette.text.primary
    }
  };

  devices = [
    {
      title: 'Desktop',
      value: 63,
      icon: LaptopMacIcon,
      color: colors.indigo[500]
    },
    {
      title: 'Tablet',
      value: 15,
      icon: TabletIcon,
      color: colors.red[600]
    },
    {
      title: 'Mobile',
      value: 23,
      icon: PhoneIcon,
      color: colors.orange[600]
    }
  ];
  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "doughnut",
      data: this.data,
      options: this.options,
    });
  }
  render() {
    return (
        <Card>
        <CardHeader title="Traffic by Device" />
        <Divider />
        <CardContent>
            <Box
            style={{
                height: '300px',
                position: 'relative'
            }}
            >
            <canvas id="myChart1" ref={this.chartRef} />
            </Box>
            <Box
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                pt: '2px'
            }}
            >
            {this.devices.map(({
                color,
                icon: Icon,
                title,
                value
            }) => (
                <Box
                key={title}
                style={{
                    p: '1',
                    textAlign: 'center'
                }}
                >
                <Icon color="action" />
                <Typography
                    color="textPrimary"
                    variant="body1"
                >
                    {title}
                </Typography>
                <Typography
                    style={{ color }}
                    variant="h2"
                >
                    {value}
                    %
                </Typography>
                </Box>
            ))}
            </Box>
        </CardContent>
        </Card>
    );
    }
};

