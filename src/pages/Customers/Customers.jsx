import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import { rows as customerRows } from "../../database/customerDatabase";
import { Search } from "../../components/Search";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "../../theme/Theme2";
import { Layout } from "../../components/Layout";
import { Box, Typography } from "@mui/material";
import "./Customers.scss";

export const Customers = () => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredRows, setFilteredRows] = useState(customerRows);

  const handleSearch = (filteredRows) => {
    setFilteredRows(filteredRows);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredRows.slice(indexOfFirstItem, indexOfLastItem);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const entriesText = (indexOfFirstItem, indexOfLastItem, filteredRows) => {
    return `Showing data ${Math.min(
      indexOfFirstItem + 1,
      filteredRows.length
    )} to ${Math.min(indexOfLastItem, filteredRows.length)} of ${
      filteredRows.length
    } entries`;
  };

  return (
    <Layout>
      <ThemeProvider theme={Theme}>
        <TableContainer component={Paper}>
          <Box className="table_head">
            <Box className="table_name">
              <Typography className="table_name_main" variant="h2">
                All Customers
              </Typography>
              <Typography variant="subtitle2">Active Members</Typography>
            </Box>
            <Search onSearch={handleSearch} />
          </Box>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Customer Name</TableCell>
                <TableCell>Company</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Country</TableCell>
                <TableCell className="table_cell_status">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentItems.map((row) => (
                <TableRow className="table_row" key={row.customerName}>
                  <TableCell className="table_cell">
                    {row.customerName}
                  </TableCell>
                  <TableCell className="table_cell">{row.company}</TableCell>
                  <TableCell className="table_cell">
                    {row.phoneNumber}
                  </TableCell>
                  <TableCell className="table_cell">{row.email}</TableCell>
                  <TableCell className="table_cell">{row.country}</TableCell>
                  <TableCell className="table_cell_status">
                    <Box
                      className={`table_status ${
                        row.status === "Active" ? "actives" : "inactives"
                      }`}
                      variant="outlined"
                    >
                      {row.status}
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Box className="table_footer">
            <Typography variant="body2">
              {entriesText(indexOfFirstItem, indexOfLastItem, filteredRows)}
            </Typography>
            <Pagination
              siblingCount={1}
              count={Math.ceil(filteredRows.length / itemsPerPage)}
              page={currentPage}
              onChange={handleChangePage}
              variant="outlined"
              shape="rounded"
            />
          </Box>
        </TableContainer>
      </ThemeProvider>
    </Layout>
  );
};
