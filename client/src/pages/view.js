import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import LineChart from 'react-google-charts'

const Views = () => {
    const [integers, setIntegers] = useState([]) //Will hold the data points from the SQL Database
    const [count, setCount] = useState(1)
    const [dateCount, setDateCount] = useState(50); //Debugging - API calls are behind despite async set up
    const [chartData, setChartData] = useState([]) //Handles graph updates
    const [date, setDate] = useState([]);

    useEffect(() => { //Handles the render update of our calls
        const fetchdata = async () => {
            const getInteger = await axios.get("http://localhost:8800/data/" + count); 
            const getDate = await axios.get("http://localhost:8800/date/" + dateCount);
    
            axios.all([getInteger, getDate]).then( //Handle all axios call in one function. Originally had them seperated, but decided this might of been better practice
                axios.spread((...allData) => {

                    setIntegers(allData[0].data);
                    setDate(allData[1].data);

                    const data = [['MHZ', 'dBM']]
                    let startingMHZ = 850;

                    for (let i = 0; i < integers.length; i++){
                        data.push([startingMHZ, integers[i]])
                        startingMHZ += (0.5)
                    }

                    setChartData(data);
                    if (count === 50){
                        setCount(1)
                    } else {
                    setCount(count + 1);
                    }

                    if (dateCount === 50){ 
                        setDateCount(1)
                    } else {
                    setDateCount(dateCount + 1);
                    }

                })
            )
        }

        setTimeout(() => {
            fetchdata();
        }, 1000)
    })

    const options = { //Chart Options that can be changed as needed.
        title: 'LP Technologies Graph',
        curveType: 'function',
        legend: {position: 'bottom'},
        vAxis: {
            title: 'MHZ',
        }
    }
    return (
        <div>  
            <h2>{date.trace_time}</h2>
            {chartData.length > 1 && (
            <LineChart
                chartType = "LineChart"
                data = {chartData}
                options = {options}
                width="100%"
                height="400px"
                />
            )}
        </div>
    )
}

export default Views;