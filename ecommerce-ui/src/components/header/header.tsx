import {
  FavoriteBorderOutlined,
  PersonOutlineOutlined,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Box } from "@mui/material";

function Header() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "90px",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: "100%",
            width: "50%",
            alignItems: "center",
            justifyContent: "center",
            gap: "50px",
          }}
        >
          <h1>Cyber</h1>
          <Box
            sx={{
              width: "50%",
              height: "70%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#F5F5F5",
                padding: "12px",
                width: "100%",
                height:"50%",
                borderRadius: "8px",
                justifyContent: "space-between",
              }}
            >
              <Search fontSize="small" style={{ color: "#989898" }} />
              <input
                placeholder="Search"
                style={{
                  height: "80%",
                  width: "100%",
                  outline: "none",
                  border: "none",
                  backgroundColor: "#F5F5F5",
                  margin: "10px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  background: "#F5F5F5",
                  opacity: "50%",
                }}
              />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: "50%",
            height: "100%",
          }}
        >
          <Box
            sx={{
              width: "70%",
              display: "flex",
              alignItems: "center",
              height: "100%",
              justifyContent: "space-between",
              fontSize:"20px"
            }}
          >
            <p>Home</p>
            <p style ={{opacity:"50%"}}>About</p>
            <p style ={{opacity:"50%"}}>Contact Us</p>
            <p style ={{opacity:"50%"}}>Blog</p>

            <Box sx={{
                display:"flex",
                justifyContent:"center",
                gap:"20px"
            }}
            >
              <FavoriteBorderOutlined />
              <ShoppingCartOutlined />
              <PersonOutlineOutlined />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Header;
