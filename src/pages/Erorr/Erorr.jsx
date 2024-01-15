import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import "./Erorr.scss";

export const Erorr = () => {
  return (
    <Box className="erorr_box">
      <Typography variant="h3">This Page Isn’t Available Right Now</Typography>
      <Typography variant="h5">
        This may be because of a technical error that we’re working to get
        fixed.
      </Typography>
    </Box>
  );
};
