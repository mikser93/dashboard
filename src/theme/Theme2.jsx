import { createTheme } from "@mui/material/styles";

export const Theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      color: "#000",
      fontSize: "26px",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "normal",
      letterSpacing: "0.26px",
    },
    h2: {
      fontSize: "22px",
      fontWeight: "600",
      letterSpacing: "-0.22px",
    },
    h3: {
      color: "#000",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "normal",
    },
    subtitle2: {
      color: "#16c098",
      fontSize: "14px",
      letterSpacing: "-0.14px",
    },
    body2: {
      color: "#b5b7c0",
      fontSize: "14px",
      fontWeight: "500",
      lineHeight: "normal",
      letterSpacing: "-0.14px",
    },
    caption: {
      color: "#838383",
      fontSize: "10px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "normal",
      letterSpacing: "-0.1px",
    },
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
    MuiList: {
      styleOverrides: {
        root: {
          padding: "0",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          paddingLeft: "29px",
          paddingTop: "0px",
          paddingBottom: "22px",
          borderRadius: "8px",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          color: "#9197b3",
          fontFamily: "Poppins, sans-serif",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "normal",
          letterSpacing: "-0.14px",
          margin: 0,
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          padding: "0",
          paddingRight: "15px",
          minWidth: "0",
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 42,
          height: 42,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
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
            paddingLeft: "32px",
          },
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
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
        },
      },
    },
  },
});
