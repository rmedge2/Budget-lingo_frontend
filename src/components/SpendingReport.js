import React from 'react';
import Chart from 'react-apexcharts'

const SpendingReport = () => {

    return (
        <div className="donut">
            <Chart
                series={[44, 55, 41, 17, 15]}
                type="donut"
                width="480"
                options={{
                    labels: ['Rent', 'Groceries', 'Transportation', 'Bills', 'Entertainment']
                }
                }
            />
        </div>
    );
}

export default SpendingReport;