import { Box, Typography } from "@mui/material";
import { useGlobalState } from "../GlobalState";

export const Greetings = () => {
  const { userName } = useGlobalState();
  return (
    <Box>
      <Typography
        sx={{
          fontFamily: "Poppins, sans-serif",
          color: "#000",
          fontSize: "24px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "normal",
          margin: "41px 0 50px 0px",
        }}
      >
        Hello {userName} 👋🏼,
      </Typography>
    </Box>
  );
};
