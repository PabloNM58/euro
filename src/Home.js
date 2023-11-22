import { useEffect, useState } from "react";
import Board from "./components/board/Board";
import Statistics from "./components/results/Statistics";
import DataTable from "./components/results/DataTable";
import { Divider, Grid } from "@mui/material";
import { WINNING_RESULTS } from "./data";
import { REWARDS } from "./constants";

export default function Home() {
  const [comb, setComb] = useState([]);
  const [combStars, setcombStars] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [winners, setWinners] = useState([]);
  const [ganancias, setGanancias] = useState(0);

  const cleanComb = () => {
    setComb([]);
    setcombStars([]);
    setWinners([]);
    setShowResults(false);
    setGanancias(0);
  };

  const selectNumbers = (n) => {
    if (comb.includes(n)) {
      const desmark = comb.filter((item) => item !== n);
      setComb(desmark);
    } else {
      comb.length < 5 && setComb([...comb, n]);
    }
  };

  const selectStars = (n) => {
    if (combStars.includes(n)) {
      const desmark = combStars.filter((item) => item !== n);
      setcombStars(desmark);
    } else {
      combStars.length < 2 && setcombStars([...combStars, n]);
    }
  };

  const getEarns = () => {
    const asignReward = winners.map((item) =>
      REWARDS.filter((prize) => prize.categorie === item.categoria)
    );
    asignReward.map((item) =>
      setGanancias((prevState) => prevState + item[0].prize)
    );
  };

  useEffect(() => {
    getEarns();
  }, [winners]);
  return (
    <>
      <Board
        comb={comb}
        combStars={combStars}
        selectNumbers={selectNumbers}
        selectStars={selectStars}
        showResults={showResults}
        setWinners={setWinners}
        setShowResults={setShowResults}
        cleanComb={cleanComb}
      />
      {/* <Divider sx={{ marginTop: 3 }} /> */}
      {showResults && (
        <>
          <h3>
            Analizados {WINNING_RESULTS.length} sorteos dende o 30/8/2011 ata o{" "}
            {WINNING_RESULTS[0].FECHA}. Obtívose premio en {winners.length}{" "}
            sorteos.
          </h3>
          <Divider />
        </>
      )}
      {showResults && ganancias !== 0 && (
        <Statistics winners={winners} ganancias={ganancias} />
      )}
      {showResults && winners.length > 0 ? (
        <>
          <Divider />
          <Grid sx={{ display: "flex", justifyContent: "center" }}>
            <h2>LISTA DE SORTEOS NOS QUE HOUBO ALGÚN PREMIO</h2>
          </Grid>
          <DataTable winners={winners} />
        </>
      ) : (
        showResults && <h1>no suerte</h1>
      )}
    </>
  );
}
