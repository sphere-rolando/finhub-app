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

  // useEffect(() => {
  //   console.log(graphData);

  // });

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

    console.log(graphData);
  };

  return (
    <section className="invetmentPage">
      <h1 className="contactTitle_invetment">Check your investment </h1>
      <div className="chart">
        <Line
          data={{
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            datasets: [
              {
                label: 'SnP_perf',
                data: graphData.SnP_perf,

                backgroundColor: ['rgba(72, 169, 65,1)', 'rgba(191, 52, 94,1)'],
                borderColor: ['rgba(72, 169, 65,1)', 'rgba(191, 52, 94,1)'],
                borderWidth: 2,
              },
              {
                label: 'cd_perf',
                data: graphData.cd_perf,
                backgroundColor: 'pink',
                borderColor: 'pink',
              },
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
