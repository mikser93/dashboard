import { Greetings } from "../Greetings";
import { Box } from "@mui/material";
import "./Layout.scss";

export const Layout = ({ children }) => {
  return (
    <Box>
      <Greetings />
      <Box className="table_wraper">{children}</Box>
    </Box>
  );
};
