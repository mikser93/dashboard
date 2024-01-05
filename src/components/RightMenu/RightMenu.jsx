import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ListItemText from "@mui/material/ListItemText";
import Pagination from "@mui/material/Pagination";
import { rows as customerRows } from "../../database/customerDatabase";
import Search from "../Search/Search";
import "./RightMenu.scss";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "../../theme/Theme2";

export const RightMenu = () => {
  return (
    <div>
      <p className="greetings">Hello Evano 👋🏼,</p>
      <div className="table_data">
        <ThemeProvider theme={Theme}>
          <TableContainer component={Paper}>
            <div className="table_head">
              <ListItemText
                primary="All Customers"
                secondary="Active Members"
              />
              <Search />
            </div>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Customer Name</TableCell>
                  <TableCell align="left">Company</TableCell>
                  <TableCell align="left">Phone Number</TableCell>
                  <TableCell align="left">Email</TableCell>
                  <TableCell align="left">Country</TableCell>
                  <TableCell align="left">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {customerRows.map((row) => (
                  <TableRow
                    key={row.customerName}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      height: "68.5px",
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row.customerName}
                    </TableCell>
                    <TableCell align="left">{row.company}</TableCell>
                    <TableCell align="left">{row.phoneNumber}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">{row.country}</TableCell>
                    <TableCell align="left">{row.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="table_data_footer">
              <p className="table_data_footer_count">
                Showing data 1 to 8 of ??? entries
              </p>
              <Pagination
                siblingCount={1}
                count={40}
                variant="outlined"
                shape="rounded"
                sx={{
                  "& .MuiPaginationItem-root": {
                    border: "1px solid #EEE",
                    background: "#F5F5F5",
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
                  "& .Mui-selected": {
                    backgroundColor: "#5932EA",
                    color: "#fff",
                  },
                }}
              />
            </div>
          </TableContainer>
        </ThemeProvider>
      </div>
    </div>
  );
};
