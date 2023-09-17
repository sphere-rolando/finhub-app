import React, { useEffect, useState } from 'react';
import '../Invetsment/Investment.css';

import { defaults, Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const Invetment = () => {
  const [investment, setInvestment] = useState();
  const [monthlyInvestment, setmonthlyInvestment] = useState();
  const [year, seYear] = useState();
  const [graphData, setGraphData] = useState([
    {
      SnP_perf: [],
      cd_perf: [],
    },
  ]);

  useEffect(() => {
    console.log(graphData);
    
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      init_amt: investment,
      monthly_amt: monthlyInvestment,
      time_pd: year,
    };
    fetch('/api/graph/', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data),
    }).then(() => {
      console.log('Success');
    });
  };
  const handleClick = async () => {
    const data = {
      init_amt: investment,
      monthly_amt: monthlyInvestment,
      time_pd: year,
    };
    fetch('/api/graph/', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setGraphData(data);
      });

      console.log(graphData)
  };

  

  return (
    <section className="invetmentPage">
      <h1 className="contactTitle_invetment">Check your investment </h1>
      <div className="chart">
        <Line
          data={{
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [
              {
                label: '# of votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
              },
              // {
              //   label: 'Quantity',
              //   data: [47, 52, 67, 58, 9, 50],
              //   backgroundColor: 'orange',
              //   borderColor: 'red',
              // },
            ],
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 25,
              },
            },
          }}
        />
      </div>
      <div className="contactUs">
        <span className="contactText_landing"></span>
        <form
          method="post"
          onSubmit={handleSubmit}
          action=""
          className="conatactForm"
          style={{ display: 'block', alignItems: 'center' }}
        >
          <input
            type="number"
            className="Initial_investment"
            placeholder="Initial investment $"
            value={investment}
            onChange={(e) => setInvestment(e.target.value)}
          />
          <input
            type="number"
            className="Monthly_saving"
            placeholder="Monthly saving $"
            value={monthlyInvestment}
            onChange={(e) => setmonthlyInvestment(e.target.value)}
          />
          <input
            type="number"
            className="time"
            placeholder="Time in years  (e.g. 1, 3)"
            value={year}
            onChange={(e) => seYear(e.target.value)}
          />
          <div style={{ alignItems: 'center' }}>
            <button
              className="invetmentButton"
              type="submit"
              onClick={handleClick}
            >
              Check
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Invetment;
