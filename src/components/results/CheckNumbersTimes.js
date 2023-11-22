import { Button, Divider } from "@mui/material";
import { useEffect, useState } from "react";
import { ROW_DIVIDERS, STARS_DIVIDERS } from "../../constants";
import CustomRow from "../board/CustomRow";
import { WINNING_RESULTS } from "../../data";

export default function CheckNumbersTimes() {
  const [comb, setComb] = useState([]);
  const [appears, setAppears] = useState([]);
  const [numTimes, setNumTimes] = useState();
  const [bestNumber, setBestNumber] = useState();
  const [showResult, setShowResult] = useState(false);

  const selectNumbers = (n) => {
    if (n !== comb[0]) {
      setComb([n]);
      const appears = WINNING_RESULTS.filter((sorteo) =>
        sorteo.COMBGANADORA.includes(n)
      );
      setNumTimes(appears.length);
    }
  };

  console.log(bestNumber);
  console.log(appears);
  const getBestNumber = () => {
    setAppears([]);
    Array.from(Array(51).keys()).map((item) => {
      const results = WINNING_RESULTS.filter((sorteo) =>
        sorteo.COMBGANADORA.includes(item)
      );
      item !== 0 &&
        setAppears((prevState) => [
          ...prevState,
          { num: item, times: results.length },
        ]);
    });
    const arrNumbers = appears.map((item) => item.times);
    const findBestNumber = Math.max(...arrNumbers);
    const findWorstNumber = Math.min(...arrNumbers);
    setBestNumber(findBestNumber);
  };

  useEffect(() => getBestNumber(), []);

  const num_percentage = ((numTimes * 100) / WINNING_RESULTS.length).toFixed(2);
  return (
    <>
      <h3>Comprobar cantas veces aparece un número na lista de premios:</h3>
      <Divider />
      <h4>Selecciona o número que queres comprobar</h4>
      {ROW_DIVIDERS.map((number, index) =>
        CustomRow(number[0], number[1], selectNumbers, comb, index)
      )}
      <h4>Selecciona a estrela que queres comprobar</h4>
      {STARS_DIVIDERS.map((number, index) =>
        CustomRow(number[0], number[1], selectNumbers, comb, index, "start")
      )}
      {comb.length !== 0 && (
        <h2>
          O número {comb[0]} apareceu premiado en {numTimes} sorteos dos últimos{" "}
          {WINNING_RESULTS.length} . Porcentaxe de aparición: {num_percentage} %
        </h2>
      )}
      <Button variant="contained" onClick={() => setShowResult(!showResult)}>
        Números con máis e menos frecuencia:
      </Button>
      {appears.length !== 0 &&
        appears.map((item) => (
          <span>
            <h4>
              número:{item.num} --- veces:{item.times}
            </h4>{" "}
          </span>
        ))}
      {showResult && (
        <>
          <h3>Número que saiu máis veces: {bestNumber} </h3>
          <h3>
            {/* Número que saiu menos veces: {bestNumber && bestNumber.worst}{" "} */}
          </h3>
        </>
      )}
    </>
  );
}
