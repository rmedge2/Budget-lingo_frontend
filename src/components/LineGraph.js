import './LineGraph.css'
import Chart from "react-apexcharts";
import { useContext, useEffect, useState } from 'react';
import BalanceData from './BalanceData';

const LineGraph = () => {

    const [graphData, setGraphData] = useState({})
    const [range, setRange] = useState('')
    const [rangeValues, setRangeValues]=useState([])
    
    const {logData, convertDate}=useContext(BalanceData)

    const data = {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: range
          }
        },
        series: [
          {
            name: "series-1",
            data: rangeValues
          }
        ]
    };

    const rangeGenerator = (span) => {
        let d = new Date()
        let dateRange;
        let darr;
        if (span == 'week') {
            dateRange=[[...d.toDateString().split(' ')][0]]
            for (let i = 1; i < 7; i++){
                d.setDate(d.getDate() - 1)
                darr=[...d.toDateString().split(' ')]
                dateRange.unshift(darr[0])
            }
        }
        if (span == 'month') {
            dateRange=[[...d.toDateString().split(' ')][1]+' '+[...d.toDateString().split(' ')][3]]
            for (let i = 1; i < 12; i++){
                d.setMonth(d.getMonth() - 1)
                darr=[...d.toDateString().split(' ')]
                dateRange.unshift(darr[1]+' '+darr[3])
            }
        }
        limitData(dateRange)
        setRange(dateRange)
    }

    const limitData = (rng) => {
        let dee;
        let values = [];
        let periodTotal = 0;

        let firstDate = new Date(rng[0])
        const prevTotal=logData.reduce((sum, l)=>sum+(l.time<firstDate.getTime()?l.amount:0), 0)
        rng.forEach((element, index) => {
            periodTotal = prevTotal;
            if (index > 0)
                    periodTotal = values[index-1];
            logData.forEach((ele, index) => {
                dee = new Date(parseInt(ele.time))
                let deearr = [...dee.toDateString().split(' ')]
                let deestr=`${deearr[1]} ${deearr[3]}`
                if (deestr == element) {
                    periodTotal += parseInt(ele.amount);
                }
                
            })
            values.push(periodTotal)
            
        });
        
        setRangeValues(values)
    }
    
    useEffect(() => {
        rangeGenerator('month')
        setGraphData(data)
    }, [logData])
    
    return (
        <div>
            <Chart
              options={data.options}
              series={data.series}
              type="line"
              width="500"
            />
        </div>
    )
}
export default LineGraph