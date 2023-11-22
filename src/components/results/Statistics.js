import { useEffect, useState } from "react";
import { WINNING_RESULTS } from "../../data";
import BestSorteos from "./BestSorteos";
import { Divider } from "@mui/material";

export default function Statistics({ winners, ganancias }) {
  const [balance, setBalance] = useState(0);
  const [maxCategories, setMaxCategories] = useState();
  const [bestSorteos, setBestSorteos] = useState([]);

  const getMaxCategory = () => {
    let categories = winners.map((item) => item.categoria);
    const max = Math.max(...categories);
    setMaxCategories(max);
  };

  const getBestSorteos = () => {
    const best = winners.filter((item) => item.categoria === maxCategories);
    setBestSorteos(best);
  };

  const getBalance = () => {
    setBalance(ganancias - WINNING_RESULTS.length * 2.5);
  };

  useEffect(() => {
    getMaxCategory();
  }, []);

  useEffect(() => {
    getBestSorteos();
  }, [maxCategories]);

  useEffect(() => getBalance(), [ganancias]);

  return (
    <>
      <BestSorteos bestSorteos={bestSorteos} />

      <Divider />
      <h3>Gasto: {WINNING_RESULTS.length * 2.5} €</h3>
      <Divider />
      <h3>Recibido en premios: {ganancias} € </h3>
      <Divider />
      <h2 style={{ color: balance < 0 ? "red" : "green" }}>
        Balance: {balance} €
      </h2>
    </>
  );
}
