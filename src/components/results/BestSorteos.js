import { Grid } from "@mui/material";

export default function BestSorteos({ bestSorteos }) {
  return (
    <Grid sx={{ marginBottom: 3 }}>
      <h3>
        {bestSorteos?.length === 1 ? "O sorteo" : "Os sorteos"} con mellor
        premio por acertar{" "}
        <i>
          {" "}
          {bestSorteos[0]?.aciertos}{" "}
          {bestSorteos[0]?.aciertos === 1 ? "número" : "números"}
        </i>{" "}
        e{" "}
        <i>
          {bestSorteos[0]?.estrellas}{" "}
          {bestSorteos[0]?.estrellas === 1 ? "estrela" : "estrelas"}
        </i>{" "}
        {bestSorteos?.length === 1 ? "foi o día:" : "foron os días:"}
      </h3>
      {bestSorteos.map((item, index) => (
        <li key={index}>{item.sorteo.FECHA}</li>
      ))}
    </Grid>
  );
}
