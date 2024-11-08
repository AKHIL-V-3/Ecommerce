import { Box, Button } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

function ProductCard() {
  return (
    <>
      <Box
        sx={{
          width: "293px",
          height: "420px",
          backgroundColor: "#F6F6F6",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius:"9px"
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "right",
          }}
        >
          <FavoriteBorderOutlinedIcon
            fontSize="large"
            sx={{
              marginTop: "30px",
              marginRight: "10px",
              color: "#909090",
              marginBottom: "20px",
            }}
          />
        </Box>

        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img style={{}} src="public/iphone 14 pro 1.png" alt="" />
        </Box>
        <Box
          sx={{
            width: "80%",
            textAlign: "center",
            marginTop:"20px"
          }}
        >
          <p style={{fontSize:"20px",fontWeight:"-moz-initial"}}>Apple iPhone 14 Pro Max 128GB Deep Purple </p>
          <h2 style={{ margin: "10px", padding: "0" }}>$900</h2>
          <Button
            sx={{
              width: "150px",
              color: "white",
              padding: "10px",
              backgroundColor: "#000000",
              borderRadius: "8px",
            }}
            variant="contained"
          >
            Buy Now
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default ProductCard;
