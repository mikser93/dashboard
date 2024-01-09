import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

export const Erorr = () => {
  return (
    <Box sx={{ textAlign: "center", marginTop: "200px" }}>
      <Typography variant="h3" sx={{ fontFamily: "Poppins" }}>
        This Page Isn’t Available Right Now
      </Typography>
      <Typography variant="h5" sx={{ fontFamily: "Poppins" }}>
        This may be because of a technical error that we’re working to get
        fixed.
      </Typography>
    </Box>
  );
};
