import './LineGraph.css'
import Chart from "react-apexcharts";
import { useEffect, useState } from 'react';

const LineGraph = () => {

    const [graphData, setGraphData]=useState({})

    const data = {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          }
        ]
    };
    
    useEffect(() => {
        setGraphData(data)
    }, [])
    
    return (
        <div>
            <Chart
              options={graphData.options}
              series={graphData.series}
              type="bar"
              width="500"
            />
        </div>
    )
}
export default LineGraph