import { Button } from "@mui/material";
import { ASIGN_CATEGORY, ROW_DIVIDERS, STARS_DIVIDERS } from "../../constants";
import CustomRow from "./CustomRow";
import { WINNING_RESULTS } from "../../data";
import ShowComb from "./ShowComb";

export default function Board({
  comb,
  combStars,
  showResults,
  setShowResults,
  setWinners,
  selectStars,
  selectNumbers,
  cleanComb,
}) {
  const checkNumbers = () => {
    setShowResults(true);
    WINNING_RESULTS.map((sorteo) => {
      let matchNumbers = 0;
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
          if (comb[i] === sorteo.COMBGANADORA[j]) matchNumbers++;
        }
      }
      let matchStars = 0;
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
          if (combStars[i] === sorteo.ESTRELLAS[j]) matchStars++;
        }
      }

      if ((matchNumbers === 1 && matchStars === 2) || matchNumbers > 1) {
        const calculateCategorie = ASIGN_CATEGORY.filter(
          (item) => item.num === matchNumbers && item.star === matchStars
        );
        setWinners((prevState) => [
          ...prevState,
          {
            sorteo: sorteo,
            aciertos: matchNumbers,
            estrellas: matchStars,
            categoria: calculateCategorie[0].cat,
          },
        ]);
      }
    });
  };
  return showResults ? (
    <>
      <Button
        sx={{ marginTop: 5 }}
        variant="contained"
        onClick={() => cleanComb()}
      >
        Proba outra combinación
      </Button>
      <ShowComb comb={comb} combStars={combStars} />
    </>
  ) : (
    <>
      <h3>Números</h3>
      {ROW_DIVIDERS.map((number, index) =>
        CustomRow(number[0], number[1], selectNumbers, comb, index)
      )}
      <h3>Estrelas</h3>
      {STARS_DIVIDERS.map((number, index) =>
        CustomRow(number[0], number[1], selectStars, combStars, index, "start")
      )}
      <Button
        sx={{ marginTop: 5 }}
        variant="contained"
        disabled={comb.length !== 5 || combStars.length !== 2}
        onClick={() => checkNumbers()}
      >
        Comprobar
      </Button>
      <ShowComb comb={comb} combStars={combStars} />
    </>
  );
}
