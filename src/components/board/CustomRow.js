import { createTheme } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
import { useEffect, useState } from "react";

export default function CustomRow(a, b, selectNumbers, comb, index, start) {
  const [numbers, setNumbers] = useState([]);
  let arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  useEffect(() => setNumbers(arr), []);

  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: "#f44336",
      },
    },
  });
  const selectColor = start ? "error" : "info";
  return (
    <Stack direction="row" spacing={2} sx={{ marginTop: 1 }} key={index}>
      {numbers.length !== 0 &&
        numbers.map((number, index) => (
          <Chip
            onClick={() => selectNumbers(number)}
            label={number}
            key={index}
            sx={{ width: "50px" }}
            color={
              comb?.length !== 0 && comb?.includes(number)
                ? selectColor
                : theme.primary
            }
          />
        ))}
    </Stack>
  );
}
