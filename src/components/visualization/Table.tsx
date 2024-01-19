import { IProduct, ISale } from '@/types/products';
import { formatDateToLocaleString, formatNumberToUsDollar } from '@/utils/formatter';

interface ITable {
    product: IProduct;
}

type KeyType = keyof ISale;

const Table: React.FC<ITable> = ({ product }) => {
    const tableHeaders = [
        'Week Ending',
        'Retail Sales',
        'Wholesale Sales',
        'Units Sold',
        'Retailer Margin',
    ];
    const weeklySales = product.sales;

    return (
        <figure>
            <table>
                <thead>
                    <tr>
                        {tableHeaders.map((header) => (
                            <th key={`${header}-header`}>{header.toUpperCase()}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {weeklySales.map((week) => {
                        const rowData = [];
                        const keys = Object.keys(week) as KeyType[];
                        for (const key of keys) {
                            let value = week[key];
                            if (typeof value === 'string') {
                                value = formatDateToLocaleString(value, 'en-us', {});
                            } else if (key !== 'unitsSold') {
                                value = formatNumberToUsDollar(value);
                            }
                            rowData.push(<td key={`${value}-data`}>{value}</td>);
                        }
                        return <tr key={`${week.weekEnding}-row`}>{rowData}</tr>;
                    })}
                </tbody>
            </table>
        </figure>
    );
};

export default Table;
