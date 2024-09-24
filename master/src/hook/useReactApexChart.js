import ReactApexChart from "react-apexcharts";


const useReactApexChart = () => {

    let chartSeries = [{
        name: "This month",
        data: [10, 20, 12, 30, 14, 35, 16, 32, 14, 25, 13, 28]
    }]

    let chartOptions = {

        chart: {
            height: 264,
            type: 'line',
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            },
            dropShadow: {
                enabled: false,
                top: 6,
                left: 0,
                blur: 4,
                color: "#000",
                opacity: 0.1,
            },
        },

        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0,
                opacityTo: 0,
                stops: [0, 90, 100]
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            colors: ['#487FFF'], // Specify the line color here
            width: 3

        },
        markers: {
            size: 0,
            strokeWidth: 3,
            hover: {
                size: 8
            }
        },
        tooltip: {
            enabled: true,
            x: {
                show: true,
            },
            y: {
                show: false,
            },
            z: {
                show: false,
            }
        },
        grid: {
            row: {
                colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
            borderColor: '#D1D5DB',
            strokeDashArray: 3,
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return "$" + value + "k";
                },
                style: {
                    fontSize: "14px"
                }
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            tooltip: {
                enabled: false
            },
            labels: {
                formatter: function (value) {
                    return value;
                },
                style: {
                    fontSize: "14px"
                }
            },
            axisBorder: {
                show: false
            },
            crosshairs: {
                show: true,
                width: 20,
                stroke: {
                    width: 0
                },
                fill: {
                    type: 'solid',
                    color: '#487FFF40',
                },
            }
        }
    };

    let barChartSeries = [{
        name: "Sales",
        data: [{
            x: 'Sun',
            y: 15,
        }, {
            x: 'Mon',
            y: 12,
        }, {
            x: 'Tue',
            y: 18,
        }, {
            x: 'Wed',
            y: 20,
        }, {
            x: 'Thu',
            y: 13,
        }, {
            x: 'Fri',
            y: 16,
        }, {
            x: 'Sat',
            y: 6,
        }]
    }]

    let barChartOptions = {

        chart: {
            type: 'bar',
            height: 264,
            toolbar: {
                show: false
            },
        },
        plotOptions: {
            bar: {
                borderRadius: 6,
                horizontal: false,
                columnWidth: 24,
                columnWidth: '52%',
                endingShape: 'rounded',
            }
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            type: 'gradient',
            colors: ['#dae5ff'], // Set the starting color (top color) here
            gradient: {
                shade: 'light', // Gradient shading type
                type: 'vertical',  // Gradient direction (vertical)
                shadeIntensity: 0.5, // Intensity of the gradient shading
                gradientToColors: ['#dae5ff'], // Bottom gradient color (with transparency)
                inverseColors: false, // Do not invert colors
                opacityFrom: 1, // Starting opacity
                opacityTo: 1,  // Ending opacity
                stops: [0, 100],
            },
        },
        grid: {
            show: false,
            borderColor: '#D1D5DB',
            strokeDashArray: 4, // Use a number for dashed style
            position: 'back',
            padding: {
                top: -10,
                right: -10,
                bottom: -10,
                left: -10
            }
        },
        xaxis: {
            type: 'category',
            categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        },
        yaxis: {
            show: false,

        },

    };


    let donutChartSeries = [500, 500, 500];
    let donutChartOptions = {

        colors: ['#FF9F29', '#487FFF', '#45B369'],
        labels: ['Active', 'New', 'Total'],
        legend: {
            show: false
        },
        chart: {
            type: 'donut',
            height: 270,
            sparkline: {
                enabled: true // Remove whitespace
            },
            margin: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        },
        stroke: {
            width: 0,
        },
        dataLabels: {
            enabled: false
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }],
    };


    let paymentStatusChartSeries = [{
        name: 'Net Profit',
        data: [20000, 16000, 14000, 25000, 45000, 18000, 28000, 11000, 26000, 48000, 18000, 22000]
    },

    {
        name: 'Revenue',
        data: [15000, 18000, 19000, 20000, 35000, 20000, 18000, 13000, 18000, 38000, 14000, 16000]
    }]

    let paymentStatusChartOptions = {

        colors: ['#487FFF', '#FF9F29'],
        labels: ['Active', 'New', 'Total'],
        legend: {
            show: false
        },

        grid: {
            show: true,
            borderColor: '#D1D5DB',
            strokeDashArray: 4, // Use a number for dashed style
            position: 'back',
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                columnWidth: 10,
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        yaxis: {
            categories: ['0', '5000', '10,000', '20,000', '30,000', '50,000', '60,000', '60,000', '70,000', '80,000', '90,000', '100,000'],
        },
        fill: {
            opacity: 1,
            width: 18,
        },
    };

    let createChart = (chartColor) => {

        let currentYear = new Date().getFullYear();

        let series = [
            {
                name: 'series1',
                data: [35, 45, 38, 41, 36, 43, 37, 55, 40],
            },
        ]

        var options = {

            chart: {
                type: 'area',
                width: 80,
                height: 42,
                sparkline: {
                    enabled: true // Remove whitespace
                },

                toolbar: {
                    show: false
                },
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 2,
                colors: [chartColor],
                lineCap: 'round'
            },
            grid: {
                show: true,
                borderColor: 'transparent',
                strokeDashArray: 0,
                position: 'back',
                xaxis: {
                    lines: {
                        show: false
                    }
                },
                yaxis: {
                    lines: {
                        show: false
                    }
                },
                row: {
                    colors: undefined,
                    opacity: 0.5
                },
                column: {
                    colors: undefined,
                    opacity: 0.5
                },
                padding: {
                    top: -3,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
            },
            fill: {
                type: 'gradient',
                colors: [chartColor], // Set the starting color (top color) here
                gradient: {
                    shade: 'light', // Gradient shading type
                    type: 'vertical',  // Gradient direction (vertical)
                    shadeIntensity: 0.5, // Intensity of the gradient shading
                    gradientToColors: [`${chartColor}00`], // Bottom gradient color (with transparency)
                    inverseColors: false, // Do not invert colors
                    opacityFrom: .75, // Starting opacity
                    opacityTo: 0.3,  // Ending opacity
                    stops: [0, 100],
                },
            },
            // Customize the circle marker color on hover
            markers: {
                colors: [chartColor],
                strokeWidth: 2,
                size: 0,
                hover: {
                    size: 8
                }
            },
            xaxis: {
                labels: {
                    show: false
                },
                categories: [`Jan ${currentYear}`, `Feb ${currentYear}`, `Mar ${currentYear}`, `Apr ${currentYear}`, `May ${currentYear}`, `Jun ${currentYear}`, `Jul ${currentYear}`, `Aug ${currentYear}`, `Sep ${currentYear}`, `Oct ${currentYear}`, `Nov ${currentYear}`, `Dec ${currentYear}`],
                tooltip: {
                    enabled: false,
                },
            },
            yaxis: {
                labels: {
                    show: false
                }
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        };


        return (
            <ReactApexChart options={options} series={series} type="area" height={42} width={80} />
        )

    }

    let createChartTwo = (chartColor, height) => {

        let series = [
            {
                name: 'This Day',
                data: [4, 18, 13, 40, 30, 50, 30, 60, 40, 75, 45, 90],
            },
        ]

        let options = {

            chart: {
                type: 'area',
                width: '100%',
                height: 162,
                sparkline: {
                    enabled: false // Remove whitespace
                },
                toolbar: {
                    show: false
                },
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 4,
                colors: [chartColor],
                lineCap: 'round'
            },
            grid: {
                show: true,
                borderColor: 'red',
                strokeDashArray: 0,
                position: 'back',
                xaxis: {
                    lines: {
                        show: false
                    }
                },
                yaxis: {
                    lines: {
                        show: false
                    }
                },
                row: {
                    colors: undefined,
                    opacity: 0.5
                },
                column: {
                    colors: undefined,
                    opacity: 0.5
                },
                padding: {
                    top: -30,
                    right: 0,
                    bottom: -10,
                    left: 0
                },
            },
            fill: {
                type: 'gradient',
                colors: [chartColor], // Set the starting color (top color) here
                gradient: {
                    shade: 'light', // Gradient shading type
                    type: 'vertical',  // Gradient direction (vertical)
                    shadeIntensity: 0.5, // Intensity of the gradient shading
                    gradientToColors: [`${chartColor}00`], // Bottom gradient color (with transparency)
                    inverseColors: false, // Do not invert colors
                    opacityFrom: .6, // Starting opacity
                    opacityTo: 0.3,  // Ending opacity
                    stops: [0, 100],
                },
            },
            // Customize the circle marker color on hover
            markers: {
                colors: [chartColor],
                strokeWidth: 3,
                size: 0,
                hover: {
                    size: 10
                }
            },
            xaxis: {
                labels: {
                    show: false
                },
                categories: [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`],
                tooltip: {
                    enabled: false,
                },
                tooltip: {
                    enabled: false
                },
                labels: {
                    formatter: function (value) {
                        return value;
                    },
                    style: {
                        fontSize: "14px"
                    }
                },
            },
            yaxis: {
                labels: {
                    show: false
                },
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        };

        return (
            <ReactApexChart options={options} series={series} type="area" height={height} />
        )

    }

    let createChartThree = (chartColor) => {
        let currentYear = new Date().getFullYear();
        let series = [
            {
                name: 'series1',
                data: [31, 24, 30, 25, 32, 28, 40, 32, 42, 38, 40, 32, 38, 35, 45],
            },
        ]
        let options = {

            chart: {
                type: 'area',


                sparkline: {
                    enabled: true // Remove whitespace
                },

                toolbar: {
                    show: false
                },
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                },

            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 2,
                colors: [chartColor],
                lineCap: 'round'
            },
            grid: {
                show: true,
                borderColor: 'transparent',
                strokeDashArray: 0,
                position: 'back',
                xaxis: {
                    lines: {
                        show: false
                    }
                },
                yaxis: {
                    lines: {
                        show: false
                    }
                },
                row: {
                    colors: undefined,
                    opacity: 0.5
                },
                column: {
                    colors: undefined,
                    opacity: 0.5
                },
                padding: {
                    top: -3,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
            },
            fill: {
                type: 'gradient',
                colors: [chartColor], // Set the starting color (top color) here
                gradient: {
                    shade: 'light', // Gradient shading type
                    type: 'vertical',  // Gradient direction (vertical)
                    shadeIntensity: 0.5, // Intensity of the gradient shading
                    gradientToColors: [`${chartColor}00`], // Bottom gradient color (with transparency)
                    inverseColors: false, // Do not invert colors
                    opacityFrom: .7, // Starting opacity
                    opacityTo: 0.3,  // Ending opacity
                    stops: [0, 100],
                },
            },
            // Customize the circle marker color on hover
            markers: {
                colors: [chartColor],
                strokeWidth: 2,
                size: 0,
                hover: {
                    size: 8
                }
            },
            xaxis: {
                labels: {
                    show: false
                },
                categories: [`Jan ${currentYear}`, `Feb ${currentYear}`, `Mar ${currentYear}`, `Apr ${currentYear}`, `May ${currentYear}`, `Jun ${currentYear}`, `Jul ${currentYear}`, `Aug ${currentYear}`, `Sep ${currentYear}`, `Oct ${currentYear}`, `Nov ${currentYear}`, `Dec ${currentYear}`],
                tooltip: {
                    enabled: false,
                },
            },
            yaxis: {
                labels: {
                    show: false
                }
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        };

        return <ReactApexChart options={options} series={series} type="area" width={130}
            height={50} />

    }

    let createChartFour = (chartColor, height, width) => {
        let currentYear = new Date().getFullYear();


        let series = [
            {
                name: 'series1',
                data: [35, 45, 38, 41, 36, 43, 37, 55, 40],
            },
        ]
        let options = {

            chart: {
                type: 'area',
                width: 100,
                height: 42,
                sparkline: {
                    enabled: true // Remove whitespace
                },

                toolbar: {
                    show: false
                },
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 2,
                colors: [chartColor],
                lineCap: 'round'
            },
            grid: {
                show: true,
                borderColor: 'transparent',
                strokeDashArray: 0,
                position: 'back',
                xaxis: {
                    lines: {
                        show: false
                    }
                },
                yaxis: {
                    lines: {
                        show: false
                    }
                },
                row: {
                    colors: undefined,
                    opacity: 0.5
                },
                column: {
                    colors: undefined,
                    opacity: 0.5
                },
                padding: {
                    top: -3,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
            },
            fill: {
                type: 'gradient',
                colors: [chartColor], // Set the starting color (top color) here
                gradient: {
                    shade: 'light', // Gradient shading type
                    type: 'vertical',  // Gradient direction (vertical)
                    shadeIntensity: 0.5, // Intensity of the gradient shading
                    gradientToColors: [`${chartColor}00`], // Bottom gradient color (with transparency)
                    inverseColors: false, // Do not invert colors
                    opacityFrom: .75, // Starting opacity
                    opacityTo: 0.3,  // Ending opacity
                    stops: [0, 100],
                },
            },
            // Customize the circle marker color on hover
            markers: {
                colors: [chartColor],
                strokeWidth: 2,
                size: 0,
                hover: {
                    size: 8
                }
            },
            xaxis: {
                labels: {
                    show: false
                },
                categories: [`Jan ${currentYear}`, `Feb ${currentYear}`, `Mar ${currentYear}`, `Apr ${currentYear}`, `May ${currentYear}`, `Jun ${currentYear}`, `Jul ${currentYear}`, `Aug ${currentYear}`, `Sep ${currentYear}`, `Oct ${currentYear}`, `Nov ${currentYear}`, `Dec ${currentYear}`],
                tooltip: {
                    enabled: false,
                },
            },
            yaxis: {
                labels: {
                    show: false
                }
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        };


        return <ReactApexChart options={options} series={series} type="area" width={width}
            height={height} />
    }

    let barChartSeriesTwo = [{
        name: "Sales",
        data: [{
            x: 'Jan',
            y: 85000,
        }, {
            x: 'Feb',
            y: 70000,
        }, {
            x: 'Mar',
            y: 40000,
        }, {
            x: 'Apr',
            y: 50000,
        }, {
            x: 'May',
            y: 60000,
        }, {
            x: 'Jun',
            y: 50000,
        }, {
            x: 'Jul',
            y: 40000,
        }, {
            x: 'Aug',
            y: 50000,
        }, {
            x: 'Sep',
            y: 40000,
        }, {
            x: 'Oct',
            y: 60000,
        }, {
            x: 'Nov',
            y: 30000,
        }, {
            x: 'Dec',
            y: 50000,
        }]
    }]

    let barChartOptionsTwo = {

        chart: {
            type: 'bar',
            height: 310,
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: false,
                columnWidth: '23%',
                endingShape: 'rounded',
            }
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            type: 'gradient',
            colors: ['#487FFF'], // Set the starting color (top color) here
            gradient: {
                shade: 'light', // Gradient shading type
                type: 'vertical',  // Gradient direction (vertical)
                shadeIntensity: 0.5, // Intensity of the gradient shading
                gradientToColors: ['#487FFF'], // Bottom gradient color (with transparency)
                inverseColors: false, // Do not invert colors
                opacityFrom: 1, // Starting opacity
                opacityTo: 1,  // Ending opacity
                stops: [0, 100],
            },
        },
        grid: {
            show: true,
            borderColor: '#D1D5DB',
            strokeDashArray: 4, // Use a number for dashed style
            position: 'back',
        },
        xaxis: {
            type: 'category',
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return (value / 1000).toFixed(0) + 'k';
                }
            }
        },
        tooltip: {
            y: {
                formatter: function (value) {
                    return value / 1000 + 'k';
                }
            }
        }
    };

    let donutChartSeriesTwo = [500, 500, 500]
    let donutChartOptionsTwo = {

        colors: ['#45B369', '#FF9F29', '#487FFF'],
        labels: ['Active', 'New', 'Total'],
        legend: {
            show: false
        },
        chart: {
            type: 'donut',
            height: 300,
            sparkline: {
                enabled: true // Remove whitespace
            },
            margin: {
                top: -100,
                right: -100,
                bottom: -100,
                left: -100
            },
            padding: {
                top: -100,
                right: -100,
                bottom: -100,
                left: -100
            }
        },
        stroke: {
            width: 0,
        },
        dataLabels: {
            enabled: false
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }],
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 90,
                offsetY: 10,
                customScale: 0.8,
                donut: {
                    size: '70%',
                    labels: {
                        show: true,
                        total: {
                            showAlways: true,
                            show: true,
                            label: 'Customer Report',
                            // formatter: function (w) {
                            //     return w.globals.seriesTotals.reduce((a, b) => {
                            //         return a + b;
                            //     }, 0);
                            // }
                        }
                    },
                }
            }
        },
    };


    let paymentStatusChartSeriesTwo = [{
        name: 'Net Profit',
        data: [44, 100, 40, 56, 30, 58, 50]
    }, {
        name: 'Revenue',
        data: [90, 140, 80, 125, 70, 140, 110]
    }, {
        name: 'Free Cash',
        data: [60, 120, 60, 90, 50, 95, 90]
    }]
    let paymentStatusChartOptionsTwo = {

        colors: ['#45B369', '#144bd6', '#FF9F29'],
        labels: ['Active', 'New', 'Total'],

        legend: {
            show: false
        },
        chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: false
            },
        },
        grid: {
            show: true,
            borderColor: '#D1D5DB',
            strokeDashArray: 4, // Use a number for dashed style
            position: 'back',
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                columnWidth: 8,
            },
        },
        dataLabels: {
            enabled: false
        },
        states: {
            hover: {
                filter: {
                    type: 'none'
                }
            }
        },
        stroke: {
            show: true,
            width: 0,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
        },
        yaxis: {
            categories: ['0', '10,000', '20,000', '30,000', '50,000', '1,00,000', '1,00,000'],
        },
        fill: {
            opacity: 1,
            width: 18,
        },
    };

    let paymentStatusChartSeriesThree = [{
        name: 'Net Profit',
        data: [20000, 16000, 14000, 25000, 45000, 18000, 28000, 11000, 26000, 48000, 18000, 22000]
    }, {
        name: 'Revenue',
        data: [15000, 18000, 19000, 20000, 35000, 20000, 18000, 13000, 18000, 38000, 14000, 16000]
    }]

    let paymentStatusChartOptionsThree = {

        colors: ['#487FFF', '#FF9F29'],
        labels: ['Active', 'New', 'Total'],
        legend: {
            show: false
        },
        chart: {
            type: 'bar',
            height: 250,
            toolbar: {
                show: false
            },
        },
        grid: {
            show: true,
            borderColor: '#D1D5DB',
            strokeDashArray: 4, // Use a number for dashed style
            position: 'back',
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                columnWidth: 10,
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        yaxis: {
            categories: ['0', '5000', '10,000', '20,000', '30,000', '50,000', '60,000', '60,000', '70,000', '80,000', '90,000', '100,000'],
        },
        fill: {
            opacity: 1,
            width: 18,
        },
    };


    let statisticsDonutChartSeries = [30, 25]

    let statisticsDonutChartOptions = {

        colors: ['#FF9F29', '#487FFF'],
        labels: ['Female', 'Male'],
        legend: {
            show: false
        },
        chart: {
            type: 'donut',
            height: 230,
            sparkline: {
                enabled: true // Remove whitespace
            },
            margin: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        },
        stroke: {
            width: 0,
        },
        dataLabels: {
            enabled: false
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }],
    };
    let candleStickChartSeries = [{
        data: [{
            x: new Date(1538778600000),
            y: [6629.81, 6650.5, 6623.04, 6633.33]
        },
        {
            x: new Date(1538780400000),
            y: [6632.01, 6643.59, 6620, 6630.11]
        },
        {
            x: new Date(1538782200000),
            y: [6630.71, 6648.95, 6623.34, 6635.65]
        },
        {
            x: new Date(1538784000000),
            y: [6635.65, 6651, 6629.67, 6638.24]
        },
        {
            x: new Date(1538785800000),
            y: [6638.24, 6640, 6620, 6624.47]
        },
        {
            x: new Date(1538787600000),
            y: [6624.53, 6636.03, 6621.68, 6624.31]
        },
        {
            x: new Date(1538789400000),
            y: [6624.61, 6632.2, 6617, 6626.02]
        },
        {
            x: new Date(1538791200000),
            y: [6627, 6627.62, 6584.22, 6603.02]
        },
        {
            x: new Date(1538793000000),
            y: [6605, 6608.03, 6598.95, 6604.01]
        },
        {
            x: new Date(1538794800000),
            y: [6604.5, 6614.4, 6602.26, 6608.02]
        },
        {
            x: new Date(1538796600000),
            y: [6608.02, 6610.68, 6601.99, 6608.91]
        },
        {
            x: new Date(1538798400000),
            y: [6608.91, 6618.99, 6608.01, 6612]
        },
        {
            x: new Date(1538800200000),
            y: [6612, 6615.13, 6605.09, 6612]
        },
        {
            x: new Date(1538802000000),
            y: [6612, 6624.12, 6608.43, 6622.95]
        },
        {
            x: new Date(1538803800000),
            y: [6623.91, 6623.91, 6615, 6615.67]
        },
        {
            x: new Date(1538805600000),
            y: [6618.69, 6618.74, 6610, 6610.4]
        },
        {
            x: new Date(1538807400000),
            y: [6611, 6622.78, 6610.4, 6614.9]
        },
        {
            x: new Date(1538809200000),
            y: [6614.9, 6626.2, 6613.33, 6623.45]
        },
        {
            x: new Date(1538811000000),
            y: [6623.48, 6627, 6618.38, 6620.35]
        },
        {
            x: new Date(1538812800000),
            y: [6619.43, 6620.35, 6610.05, 6615.53]
        },
        {
            x: new Date(1538814600000),
            y: [6615.53, 6617.93, 6610, 6615.19]
        },
        {
            x: new Date(1538816400000),
            y: [6615.19, 6621.6, 6608.2, 6620]
        },
        {
            x: new Date(1538818200000),
            y: [6619.54, 6625.17, 6614.15, 6620]
        },
        {
            x: new Date(1538820000000),
            y: [6620.33, 6634.15, 6617.24, 6624.61]
        },
        {
            x: new Date(1538821800000),
            y: [6625.95, 6626, 6611.66, 6617.58]
        },
        {
            x: new Date(1538823600000),
            y: [6619, 6625.97, 6595.27, 6598.86]
        },
        {
            x: new Date(1538825400000),
            y: [6598.86, 6598.88, 6570, 6587.16]
        },
        {
            x: new Date(1538827200000),
            y: [6588.86, 6600, 6580, 6593.4]
        },
        {
            x: new Date(1538829000000),
            y: [6593.99, 6598.89, 6585, 6587.81]
        },
        {
            x: new Date(1538830800000),
            y: [6587.81, 6592.73, 6567.14, 6578]
        },
        {
            x: new Date(1538832600000),
            y: [6578.35, 6581.72, 6567.39, 6579]
        },
        {
            x: new Date(1538834400000),
            y: [6579.38, 6580.92, 6566.77, 6575.96]
        },
        {
            x: new Date(1538836200000),
            y: [6575.96, 6589, 6571.77, 6588.92]
        },
        {
            x: new Date(1538838000000),
            y: [6588.92, 6594, 6577.55, 6589.22]
        },
        {
            x: new Date(1538839800000),
            y: [6589.3, 6598.89, 6589.1, 6596.08]
        },
        {
            x: new Date(1538841600000),
            y: [6597.5, 6600, 6588.39, 6596.25]
        },
        {
            x: new Date(1538843400000),
            y: [6598.03, 6600, 6588.73, 6595.97]
        },
        {
            x: new Date(1538845200000),
            y: [6595.97, 6602.01, 6588.17, 6602]
        },
        {
            x: new Date(1538847000000),
            y: [6602, 6607, 6596.51, 6599.95]
        },
        {
            x: new Date(1538848800000),
            y: [6600.63, 6601.21, 6590.39, 6591.02]
        },
        {
            x: new Date(1538850600000),
            y: [6591.02, 6603.08, 6591, 6591]
        },
        {
            x: new Date(1538852400000),
            y: [6591, 6601.32, 6585, 6592]
        },
        {
            x: new Date(1538854200000),
            y: [6593.13, 6596.01, 6590, 6593.34]
        },
        {
            x: new Date(1538856000000),
            y: [6593.34, 6604.76, 6582.63, 6593.86]
        },
        {
            x: new Date(1538857800000),
            y: [6593.86, 6604.28, 6586.57, 6600.01]
        },
        {
            x: new Date(1538859600000),
            y: [6601.81, 6603.21, 6592.78, 6596.25]
        },
        {
            x: new Date(1538861400000),
            y: [6596.25, 6604.2, 6590, 6602.99]
        },
        {
            x: new Date(1538863200000),
            y: [6602.99, 6606, 6584.99, 6587.81]
        },
        {
            x: new Date(1538865000000),
            y: [6587.81, 6595, 6583.27, 6591.96]
        },
        {
            x: new Date(1538866800000),
            y: [6591.97, 6596.07, 6585, 6588.39]
        },
        {
            x: new Date(1538868600000),
            y: [6587.6, 6598.21, 6587.6, 6594.27]
        },
        {
            x: new Date(1538870400000),
            y: [6596.44, 6601, 6590, 6596.55]
        },
        {
            x: new Date(1538872200000),
            y: [6598.91, 6605, 6596.61, 6600.02]
        },
        {
            x: new Date(1538874000000),
            y: [6600.55, 6605, 6589.14, 6593.01]
        },
        {
            x: new Date(1538875800000),
            y: [6593.15, 6605, 6592, 6603.06]
        },
        {
            x: new Date(1538877600000),
            y: [6603.07, 6604.5, 6599.09, 6603.89]
        },
        {
            x: new Date(1538879400000),
            y: [6604.44, 6604.44, 6600, 6603.5]
        },
        {
            x: new Date(1538881200000),
            y: [6603.5, 6603.99, 6597.5, 6603.86]
        },
        {
            x: new Date(1538883000000),
            y: [6603.85, 6605, 6600, 6604.07]
        },
        {
            x: new Date(1538884800000),
            y: [6604.98, 6606, 6604.07, 6606]
        },
        ]
    }]

    let candleStickChartOptions = {


        plotOptions: {
            candlestick: {
                colors: {
                    upward: '#487FFF',  // Color for bullish candles (green)
                    downward: '#C0D9FD',  // Color for bearish candles (red)
                    downward: '#FF9F29'  // Color for bearish candles (red)
                },
                wick: {
                    useFillColor: true  // Use the same color as the candle body for the wick
                },
            }
        },

        chart: {
            type: 'candlestick',
            height: 350,
            toolbar: {
                show: false
            }
        },
        xaxis: {
            type: 'datetime'
        },
        yaxis: {
            tooltip: {
                enabled: true
            }
        }
    };



    return { chartSeries, chartOptions, barChartSeries, barChartOptions, donutChartSeries, donutChartOptions, paymentStatusChartSeries, paymentStatusChartOptions, barChartSeriesTwo, barChartOptionsTwo, donutChartSeriesTwo, donutChartOptionsTwo, paymentStatusChartSeriesTwo, paymentStatusChartOptionsTwo, createChart, createChartTwo, createChartThree, createChartFour, paymentStatusChartSeriesThree, paymentStatusChartOptionsThree, statisticsDonutChartSeries, statisticsDonutChartOptions, candleStickChartSeries, candleStickChartOptions };
};

export default useReactApexChart;
