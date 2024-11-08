import { Box, TextField } from "@mui/material";

function Textfieldtest() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          padding: "100px",
        }}
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Box>
    </>
  );
}

export default Textfieldtest;
