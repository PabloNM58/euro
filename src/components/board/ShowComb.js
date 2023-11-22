import { Chip } from "@mui/material";

export default function ShowComb({ comb, combStars }) {
  const combSort = comb.sort(function (a, b) {
    return a - b;
  });
  const combStarsSort = combStars.sort(function (a, b) {
    return a - b;
  });

  return (
    <>
      {combSort.map((item, index) => (
        <Chip
          key={index}
          label={item}
          color="info"
          sx={{ width: "50px", marginLeft: 3, marginTop: 5 }}
        />
      ))}
      {combStarsSort.map((item, index) => (
        <Chip
          key={index}
          label={item}
          color="error"
          sx={{ width: "50px", marginLeft: 3, marginTop: 5 }}
        />
      ))}
    </>
  );
}
