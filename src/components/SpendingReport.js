import { useEffect, useState, useContext } from 'react';
import Chart from 'react-apexcharts'
import BalanceData from './BalanceData';

const SpendingReport = () => {

    const [chartData, setChartData] = useState([])
    // let [seriesArray, setSerriesArray] = useState([])
    // const [labelsArray, setLabelsArray] = useState([])

    // const chartInfo = () => {
    //     // setIsLoading(true)
    //     fetch('http://localhost:3000/logs')
    //         .then(response => response.json())
    //         .then(data => setChartData(data))
    // }

    const { logData } = useContext(BalanceData)

    let labelArray = ['Food', 'Rent', 'Groceries', 'Transportation', 'Bills', 'Entertainment', 'Miscellaneous']

    // labelArray.forEach(category => {

    // })

    // useEffect(chartInfo)

    return (
        <>
            <div className="donut">
                <Chart
                    series={[44, 55, 41, 17, 15, 18, 30]}
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