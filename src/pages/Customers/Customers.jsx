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
import Search from "../../components/Search/Search";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "../../theme/Theme2";
import { Layout } from "../../components/Layout";
import { Box, Typography } from "@mui/material";

export const Customers = () => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredRows, setFilteredRows] = useState(customerRows);

  const handleSearch = (filteredRows) => {
    setFilteredRows(filteredRows);
    setCurrentPage(1); // При зміні результатів пошуку переходимо на першу сторінку.
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredRows.slice(indexOfFirstItem, indexOfLastItem);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Layout>
      <ThemeProvider theme={Theme}>
        <TableContainer component={Paper}>
          <Box
            sx={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              padding: "30px 0 22px 19px",
            }}
          >
            <Box sx={{ display: "block" }}>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "22px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                  letterSpacing: "-0.22px",
                  paddingBottom: "5px",
                }}
              >
                All Customers
              </Typography>
              <Typography
                sx={{
                  color: "#16c098",
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                  letterSpacing: "-0.14px",
                }}
              >
                Active Members
              </Typography>
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
                <TableCell sx={{ paddingLeft: "32px" }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentItems.map((row) => (
                <TableRow
                  key={row.customerName}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    height: "68.5px",
                  }}
                >
                  <TableCell
                    sx={{ paddingBottom: "22px", paddingLeft: "22px" }}
                  >
                    {row.customerName}
                  </TableCell>
                  <TableCell
                    sx={{ paddingBottom: "22px", paddingLeft: "22px" }}
                  >
                    {row.company}
                  </TableCell>
                  <TableCell
                    sx={{ paddingBottom: "22px", paddingLeft: "22px" }}
                  >
                    {row.phoneNumber}
                  </TableCell>
                  <TableCell
                    sx={{ paddingBottom: "22px", paddingLeft: "22px" }}
                  >
                    {row.email}
                  </TableCell>
                  <TableCell
                    sx={{ paddingBottom: "22px", paddingLeft: "22px" }}
                  >
                    {row.country}
                  </TableCell>
                  <TableCell sx={{ paddingBottom: "22px" }}>
                    <Box
                      variant="outlined"
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "normal",
                        letterSpacing: "-0.14px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "29px",
                        width: "80px",
                        borderRadius: "4px",
                        border:
                          row.status === "Active"
                            ? "1px solid #00B087"
                            : "1px solid #DF0404",
                        background:
                          row.status === "Active"
                            ? "rgba(22, 192, 152, 0.38)"
                            : "#FFC5C5",
                        color: row.status === "Active" ? "#008767" : "#DF0404",
                      }}
                    >
                      {row.status}
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "30px 20px 40px 19px",
            }}
          >
            <Typography
              sx={{
                color: "#b5b7c0",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal",
                letterSpacing: "-0.14px",
              }}
            >
              Showing data {Math.min(indexOfFirstItem + 1, filteredRows.length)}{" "}
              to {Math.min(indexOfLastItem, filteredRows.length)} of{" "}
              {filteredRows.length} entries
            </Typography>
            <Pagination
              siblingCount={1}
              count={Math.ceil(filteredRows.length / itemsPerPage)}
              page={currentPage}
              onChange={handleChangePage}
              variant="outlined"
              shape="rounded"
              sx={{
                "& .MuiPaginationItem-root": {
                  marginRight: "6px",
                  marginLeft: "6px",
                  fontSize: "12px",
                  minWidth: "25px",
                  height: "24px",
                  "&:hover": {
                    background: "#5932EA",
                    color: "#fff",
                  },
                },
                "& .Mui-selected.MuiPaginationItem-root": {
                  background: "#5932EA",
                  color: "#fff",
                  "&:hover": {
                    background: "#5932EA",
                    color: "#fff",
                  },
                },
              }}
            />
          </Box>
        </TableContainer>
      </ThemeProvider>
    </Layout>
  );
};
