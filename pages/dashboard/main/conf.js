export default {
    chart: {
        background: 'transparent',
        sparkline: {
          enabled: true,
        },
      },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    theme: {
        mode: 'dark'
    },
    yaxis: {
        min: 0,
    },
    colors: ['#1b55e2'],
    tooltip: {
        fillSeriesColor: true,
        x: {
            show: false,
        },
    },
    fill: {
        type: 'gradient',
        gradient: {
            type: 'vertical',
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: 0.4,
            opacityTo: 0.05,
            stops: [45, 100],
        },
    },
}