import React, { useEffect, useState } from 'react';
import '../Invetsment/Investment.css';

const Invetment = () => {
  const [investment, setInvestment] = useState();
  const [monthlyInvestment, setmonthlyInvestment] = useState();
  const [year, seYear] = useState();
  const [graphData, setGraphData] = useState([
    {
      SnP_perf: '',
      cd_perf: '',
    },
  ]);

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
      console.log('okkkk');
    });
  };
  const handleClick = async () => {
    fetch('/api/graph/')
      .then((res) => res.json())
      .then((data) => {
        setGraphData({
          graphData: data,
        });
        console.log(graphData);
      });
  };

  return (
    <section className="invetmentPage">
      <div className="contactUs">
        <h1 className="contactTitle_invetment">Check your investment </h1>
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
