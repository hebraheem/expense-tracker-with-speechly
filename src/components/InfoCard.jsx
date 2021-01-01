import React from 'react'

const isIncome = Math.round(Math.random())
const InfoCard = () => {
    return (
      <div style={{ textAlign: "center", padding: "0 10%" }}>
        Try saying: <br></br>
        Add {isIncome ? "Income " : "Expense "}
        for {isIncome ? "$100 " : "$250 "} in category{" "}
        {isIncome ? "Salary " : "Car "} for Monday...
      </div>
    );
}

export default InfoCard
