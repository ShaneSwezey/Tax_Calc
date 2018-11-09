import Highcharts from 'highcharts';

const options = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Income Tax Breakdown'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    credits: {
        enabled: false,
    },
    series: [{
        name: 'Tax',
        colorByPoint: true,
        data: [{
            name: 'Income Tax',
            y: this.props.taxAmount,
            sliced: true,
            selected: true
        }, {
            name: 'Social Security Tax',
            y: this.props.socialSecurityTax
        }, {
            name: 'Medicare Tax',
            y: this.props.medicareTax
        }
        ]
    }]
};