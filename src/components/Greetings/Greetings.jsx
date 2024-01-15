import { Box, Typography } from "@mui/material";
import { useGlobalState } from "../GlobalState";
import "./Greetings.scss";

export const Greetings = () => {
  const { userName } = useGlobalState();
  return (
    <Box className="hello_user">
      <Typography variant="h3">Hello {userName} 👋🏼,</Typography>
    </Box>
  );
};
