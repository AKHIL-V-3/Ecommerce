import { Box, Button } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { ProductCardProps} from "../../Interfaces/interface";

function ProductCard({product}: ProductCardProps) {
  console.log(product?.Images[0].Image, "ccccccc");

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
          borderRadius: "9px",
          cursor:"pointer"
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
              marginRight: "25px",
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
          <img style={{width:"100%",height:"170px"}} src={product?.Images[0].Image} alt="" />
          {/* <img style={{}} src="/public/iphone 14 pro 1.png" alt="" /> */}
        </Box>
        <Box
          sx={{
            width: "80%",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          <p style={{ fontSize: "20px", fontWeight: "-moz-initial" }}>
            {product?.Productname}{" "}
          </p>
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
