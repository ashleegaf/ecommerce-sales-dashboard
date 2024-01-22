'use client';

import { useRef } from 'react';
import Highcharts from 'highcharts';
import highchartsAccessibility from "highcharts/modules/accessibility";
import HighchartsReact from 'highcharts-react-official';
import { IProduct } from '@/types/products';

interface IChart {
    product: IProduct;
}

const Chart: React.FC<IChart> = ({ product }) => {
    highchartsAccessibility(Highcharts);
    const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

    const retailSales = Array.from({ length: 12 }, () => 0);
    const wholesaleSales = Array.from({ length: 12 }, () => 0);
    const weeklySales = product.sales;

    for (const week of weeklySales) {
        const monthNumber = Number(week.weekEnding.split('-')[1]);
        retailSales[monthNumber - 1] += week.retailSales;
        wholesaleSales[monthNumber - 1] += week.wholesaleSales;
    }

    const MONTHS_LIST = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];

    const options: Highcharts.Options = {
        accessibility: {
            enabled: true,
        },
        title: {
            text: 'Retail vs. Wholesale Sales',
            align: 'left',
            style: { fontSize: '1rem', fontWeight: '500' }
        },
        xAxis: {
            categories: MONTHS_LIST,
            labels: { style: { color: '#a5a7aa' } },
        },
        series: [
            {
                type: 'line',
                data: retailSales,
                name: 'Retail Sales',
            },
            {
                type: 'line',
                data: wholesaleSales,
                name: 'Wholesale Sales',
            },
        ],
        chart: {
            spacing: [30, 20, 20, 30],
            height: 550,
        },
    };

    return <HighchartsReact highcharts={Highcharts} options={options} ref={chartComponentRef} />;
};

export default Chart;
