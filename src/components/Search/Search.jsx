import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { SearchIcon } from "../Icons/icons";
import { rows } from "../../database/customerDatabase";
import "./Search.scss";

export const Search = ({ onSearch }) => {
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
    <Box className="search_box" component="form" noValidate autoComplete="off">
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
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </Box>
  );
};
