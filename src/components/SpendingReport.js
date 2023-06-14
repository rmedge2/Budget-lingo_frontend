import { useEffect, useState, useContext } from 'react';
import Chart from 'react-apexcharts'
import BalanceData from './BalanceData';

const SpendingReport = () => {

    const [chartData, setChartData] = useState([])

    const { baseLink } = useContext(BalanceData)

    // const loadChart = () => {
    //     // setIsLoading(true)
    //     fetch(`${baseLink}logs`)
    //         .then(response => response.json())
    //         .then(data => setChartData(data))
    // }

    const { logData, showData } = useContext(BalanceData)

    let labelArray = ['Food', 'Rent', 'Groceries', 'Transportation', 'Bills', 'Entertainment', 'Miscellaneous']
    let serriesArray = []
    labelArray.forEach(category => {
        let indexSum = 0
        if (category != 'Miscellaneous'){
            for(let i = 0; i < logData.length; i++){
                if (logData[i].userId = 2 && logData[i].amount < 0 && logData[i].expenseCategory === category){
                    let expenseAmount = logData[i].amount * (-1);
                    console.log(logData[i].name)
                    console.log(logData[i].expenseCategory)
                    console.log(expenseAmount)
                    indexSum = indexSum + expenseAmount
                    console.log(indexSum)
                    console.log(logData[i].userId)
                } 
            }
            serriesArray.push(indexSum)
        }
        else if (category === 'Miscellaneous'){
            for(let i = 0; i < logData.length; i++){
                if (logData[i].amount < 0 && (logData[i].expenseCategory === category || logData[i].expenseCategory === '')){
                    let expenseAmount = logData[i].amount * (-1);
                    console.log(logData[i].name)
                    console.log(logData[i].expenseCategory)
                    console.log(expenseAmount)
                    indexSum = indexSum + expenseAmount
                    console.log(indexSum)
                    console.log(logData[i].userId)
                } 
            }
            serriesArray.push(indexSum)
        }
    })
    console.log(serriesArray)
    useEffect(() => { showData() }, [])

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