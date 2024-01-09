import { Greetings } from "../Greetings";
import { Box } from "@mui/material";

export const Layout = ({ children }) => {
  return (
    <Box>
      <Greetings />
      <Box sx={{ minWidth: "968px" }}>{children}</Box>
    </Box>
  );
};
