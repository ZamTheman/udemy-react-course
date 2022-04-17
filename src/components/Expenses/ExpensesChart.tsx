import React from "react";
import { ExpenseData } from "../../Types/CommonExpeseTypes";
import Chart from "../Chart/Chart";
import { DataPoint } from "../Chart/ChartBar";

interface Props {
    expenses: ExpenseData[];
}

const ExpensesChart: React.FC<Props> = ({expenses}) => {
    const chartDataPoints: DataPoint[] = [
        { Label: 'Jan', Key: 'Jan', Value: 0 },
        { Label: 'Feb', Key: 'Feb', Value: 0 },
        { Label: 'Mar', Key: 'Mar', Value: 0 },
        { Label: 'Apr', Key: 'Apr', Value: 0 },
        { Label: 'May', Key: 'May', Value: 0 },
        { Label: 'Jun', Key: 'Jun', Value: 0 },
        { Label: 'Jul', Key: 'Jul', Value: 0 },
        { Label: 'Aug', Key: 'Aug', Value: 0 },
        { Label: 'Sep', Key: 'Sep', Value: 0 },
        { Label: 'Oct', Key: 'Oct', Value: 0 },
        { Label: 'Nov', Key: 'Nov', Value: 0 },
        { Label: 'Dec', Key: 'Dec', Value: 0 },
    ]

    for (const expense of expenses) {
        const expenseMonth = expense.Date.getMonth();
        chartDataPoints[expenseMonth].Value += expense.Amount;
    }

    return <Chart dataPoints={chartDataPoints} />
}

export default ExpensesChart;