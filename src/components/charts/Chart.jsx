import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Chart = ({ options }) => (
    <div>
        <HighchartsReact 
            highcharts={Highcharts}
            options={options}
        />
    </div>
);

export default Chart;