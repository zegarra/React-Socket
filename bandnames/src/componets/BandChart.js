import React, { useEffect } from "react";
import { Chart } from 'chart.js';


const BandChart = () => {
        useEffect(()=>{
            const ctx = document.getElementById("myChart");
            var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                      stacked:true
                        
                    }]
                }
            }
        });

        },[])
    
  return( 
    <canvas id='myChart' ></canvas>
    )
};
export default BandChart;
