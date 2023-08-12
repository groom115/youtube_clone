import React from "react";
import { Box, CircularProgress, Stack } from "@mui/material";

const Loader = () => (
  <Box
    minHeight="95vh"
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      height="80vh"
    >
      <CircularProgress />
    </Stack>
  </Box>
);

export default Loader;
