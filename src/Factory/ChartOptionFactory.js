import Highcharts from 'highcharts';

const ChartOptionFactory = (type, val) => {
    switch(type) {
        case 'TaxComparisonOption':
            return createTaxComparisonOption(val);
        case 'IncomeVsTaxOption':
            return createIncomeVsTaxOption(val);
        default:
            return null;
    }
};

const createIncomeVsTaxOption = (val) => {
    return {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Income vs Tax',
            style: {
                fontWeight: 'bold'
            }
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
                name: 'Income',
                y: val.taxAmount,
                sliced: true,
                selected: true
            }, {
                name: 'Tax',
                y: val.socialSecurityTax
            }
            ]
        }]
    };
}

const createTaxComparisonOption = (val) => {
    return {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Tax Breakdown',
            style: {
                fontWeight: 'bold'
            }
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
                y: val.taxAmount,
                sliced: true,
                selected: true
            }, {
                name: 'Social Security Tax',
                y: val.socialSecurityTax
            }, {
                name: 'Medicare Tax',
                y: val.medicareTax
            }
            ]
        }]
    };
}

export default ChartOptionFactory;