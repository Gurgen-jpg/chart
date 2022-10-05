import React from 'react';
import HighchartsReact from "highcharts-react-official";
import Highcharts from 'highcharts';
import {useAppSelector} from "../../redux/store";

const Chart = () => {
    const title = useAppSelector(state => state.chart.chartTitle)
    const data = useAppSelector(state => state.chart.products)

    const format = data && data.map((el) => {
        return [el.title, el.rating]
    })

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={{
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Compare rating'
                    },
                    subtitle: {
                        text: title ? title : 'category'
                    },
                    xAxis: {
                        type: 'category',
                        labels: {
                            rotation: -45,
                            style: {
                                fontSize: '13px',
                                fontFamily: 'Verdana, sans-serif'
                            }
                        }
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'Rating'
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    tooltip: {
                        pointFormat: 'Rating of this model is: <b>{point.y} stars</b>'
                    },
                    series: [{
                        name: 'Model',
                        data: format,
                        dataLabels: {
                            enabled: true,
                            rotation: -90,
                            color: '#FFFFFF',
                            align: 'right',
                            format: '{point.y:.1f}',
                            y: 10,
                            style: {
                                fontSize: '13px',
                                fontFamily: 'Verdana, sans-serif'
                            }
                        }
                    }]
                }}
            />
        </div>
    );
};

export default Chart;