import { createTheme } from "@mui/material/styles";

export const Theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
  components: {
    MuiTableContainer: {
      styleOverrides: {
        root: {
          borderRadius: "30px",
          paddingLeft: "19px",
          paddingRight: "20px",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          margin: 0,
          "& span": {
            paddingBottom: "6px",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: 0,
          width: 0,
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          // width: "967px",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          paddingLeft: "20px",
          // paddingBottom: "94px",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          "& th": {
            color: "#B5B7C0",
          },
          "& th:nth-of-type(1)": {
            width: "180px",
          },
          "& th:nth-of-type(2)": {
            width: "133px",
          },
          "& th:nth-of-type(3)": {
            width: "170px",
          },
          "& th:nth-of-type(4)": {
            width: "208px",
          },
          "& th:nth-of-type(5)": {
            width: "148px",
          },
          "& th:nth-of-type(6)": {
            width: "130px",
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {},
      },
    },
  },
});
