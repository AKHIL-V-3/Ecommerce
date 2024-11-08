import { Box, Button } from "@mui/material";

function Banner() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "600px",
          backgroundColor: "#211C24",
          color: "white",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "50%",
            height: "100%",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "80%",
              height: "50%",
              display: "flex",
              flexDirection: "column",
              gap: "22px",
            }}
          >
            <h5 style={{ fontSize: "30px", padding: "0px", margin: "0px" }}>
              Pro.Beyond.
            </h5>
            <p
              style={{
                fontSize: "80px",
                padding: "0px",
                margin: "0px",
                fontWeight: "lighter",
              }}
            >
              IPhone 14 <span style={{ fontWeight: "bold" }}>Pro</span>{" "}
            </p>
            <p style={{ fontSize: "18px", padding: "0px", margin: "0px" }}>
              Created to change everything for the better. For everyone
            </p>

            <Button
              variant="outlined"
              sx={{
                width: "150px",
                color: "white",
                padding: "10px",
                border: "1px solid white",
              }}
            >
              Shop Now
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            width: "50%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            style={{ width: "50%", height: "100%" }}
            src="/public/iphone image.png"
            alt=""
          />
        </Box>
      </Box>
    </>
  );
}

export default Banner;
