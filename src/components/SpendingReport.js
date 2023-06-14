import { useEffect, useState, useContext } from 'react';
import Chart from 'react-apexcharts'
import BalanceData from './BalanceData';

const SpendingReport = () => {

    const [chartData, setChartData] = useState([])

    const { baseLink } = useContext(BalanceData)

    const loadChart = () => {
        // setIsLoading(true)
        fetch(`${baseLink}logs`)
            .then(response => response.json())
            .then(data => setChartData(data))
    }

    const { logData } = useContext(BalanceData)

    let labelArray = ['Food', 'Rent', 'Groceries', 'Transportation', 'Bills', 'Entertainment', 'Miscellaneous']
    let serriesArray = []
    labelArray.forEach(category => {
        let indexSum = 0
        for(let i = 0; i < chartData.length; i++){
            if (chartData[i].userId = 2 && chartData[i].amount < 0 && chartData[i].expenseCategory === category){
                let expenseAmount = chartData[i].amount * (-1);
                console.log(chartData[i].name)
                console.log(chartData[i].expenseCategory)
                console.log(expenseAmount)
                indexSum = indexSum + expenseAmount
                console.log(indexSum)
                console.log(chartData[i].userId)
            }
            
        }
        serriesArray.push(indexSum)
    })
    console.log(serriesArray)
    useEffect(() => { loadChart() }, [])

    return (
        <>
            <div className="donut">
                <Chart
                    series={serriesArray}
                    type="donut"
                    width="480"
                    options={{
                        labels: labelArray
                    }}
                />
            </div>
        </>
    );
}

export default SpendingReport;