import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  var [price, setPrice] = useState(0);
  var [amount, setAmount] = useState(0);
  var [twoT, setTwoT] = useState("0");
  var [fiveH, setFiveH] = useState("0");
  var [oneH, setOneH] = useState("0");
  var [twenty, setTwenty] = useState("0");
  var [ten, setTen] = useState("0");
  var [five, setFive] = useState("0");
  var [one, setOne] = useState("0");
  var [returnZero, setReturnZero] = useState("");
  let returnAmount = amount - price;

  var returnHandler = () => {
    if (returnAmount === 0) {
      setReturnZero("No amount to return !!");
    } else if (returnAmount > 0) {
      var two000 = Math.floor(returnAmount / 2000);
      returnAmount -= two000 * 2000;
      setTwoT(two000);

      var five00 = Math.floor(returnAmount / 500);
      returnAmount -= five00 * 500;
      setFiveH(five00);

      var one00 = Math.floor(returnAmount / 100);
      returnAmount -= one00 * 100;
      setOneH(one00);

      var twenty20 = Math.floor(returnAmount / 20);
      returnAmount -= twenty20 * 20;
      setTwenty(twenty20);

      var ten10 = Math.floor(returnAmount / 10);
      returnAmount -= ten10 * 10;
      setTen(ten10);

      var five5 = Math.floor(returnAmount / 5);
      returnAmount -= five5 * 5;
      setFive(five5);

      var one1 = Math.floor(returnAmount / 1);
      setOne(one1);
      returnAmount -= one1 * 2;
    }
  };

  return (
    <div className="App">
      <nav>
        <div
          style={{
            width: "100%",
            padding: "1rem",
            backgroundColor: "#c2d1d1",
            fontWeight: "bold",
            fontSize: "2rem",
            color: "#011854"
          }}
        >
          Cash Register Manager
        </div>
      </nav>
      <small>
        Enter the bill amount and cash given by the customer and know minimum
        number of notes to return
      </small>
      <h2>Enter the Bill Amount</h2>
      <input
        onChange={(event) => {
          setPrice(parseInt(event.target.value));
        }}
      />
      <h2>Enter the Cash Given</h2>
      <input
        onChange={(event) => {
          setAmount(parseInt(event.target.value));
        }}
      />

      <br />
      <br />

      <button onClick={returnHandler}>Check Denomination</button>

      <div className="container">
        <hr />

        <h2> Denomination & Number of notes 👇</h2>

        <table>
          <tr>
            <th>2000</th>
            <th>500</th>
            <th>100</th>
            <th>20</th>
            <th>10</th>
            <th>05</th>
            <th>01</th>
          </tr>
          <tr>
            <td>{twoT}</td>
            <td>{fiveH}</td>
            <td>{oneH}</td>
            <td>{twenty}</td>
            <td>{ten}</td>
            <td>{five}</td>
            <td>{one}</td>
          </tr>
        </table>
      </div>
      <h2>Return Amount: {returnAmount}</h2>
      <p>{returnZero}</p>
    </div>
  );
}
