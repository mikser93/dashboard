import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { SearchIcon } from "../Icons/icons";
import { rows } from "../../database/customerDatabase";

export default function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(
      rows.filter((row) =>
        Object.values(row).some(
          (value) =>
            typeof value === "string" &&
            value.toLowerCase().includes(term.toLowerCase())
        )
      )
    );
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSearch(
        rows.filter((row) =>
          Object.values(row).some(
            (value) =>
              typeof value === "string" &&
              value.toLowerCase().includes(searchTerm.toLowerCase())
          )
        )
      );
    }
  };

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
        variant="outlined"
        type="search"
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
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </Box>
  );
}
