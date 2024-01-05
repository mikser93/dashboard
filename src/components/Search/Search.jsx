// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import { SearchIcon } from "../Icons/icons";

// export default function Search() {
//   return (
//     <Box
//       component="form"
//       sx={{
//         "& > :not(style)": { m: 1, width: "25ch" },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField id="outlined-basic" label="Search" variant="outlined" />
//     </Box>
//   );
// }

import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { SearchIcon } from "../Icons/icons";

export default function Search() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        variant="outlined"
        placeholder="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{
          margin: 0,
          width: 0,
          "& .MuiOutlinedInput-root": {
            borderRadius: "10px",
            "& fieldset": {
              border: "none",
            },
            "& input::placeholder": {
              textAlign: "left",
              color: "#B5B7C0",
              fontFamily: "Poppins",
              fontSize: "12px",
            },
            backgroundColor: "#F9FBFF",
            width: "216px",
            height: "38px",
          },
        }}
      />
    </Box>
  );
}
