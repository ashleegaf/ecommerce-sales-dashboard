import { useRef } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { IProduct } from '@/types/products';

interface IChart {
    product: IProduct;
}

const Chart: React.FC<IChart> = ({ product }) => {
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
            text: 'Sales',
            align: 'left',
        },
        xAxis: {
            categories: MONTHS_LIST,
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
    };

    return <HighchartsReact highcharts={Highcharts} options={options} ref={chartComponentRef} />;
};

export default Chart;
