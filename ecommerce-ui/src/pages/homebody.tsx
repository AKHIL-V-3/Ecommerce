import { Box, Button } from "@mui/material";
import ProductCard from "../components/productCard/ProductCard";

function HomeBody() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          marginBottom: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "80%",
            height: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              fontSize: "23px",
              marginTop:"20px",
              marginBottom:"20px"
            }}
          >
            <p style={{ borderBottom: "2px solid", padding: "0px", margin:"0" }}>
              New Arrival
            </p>
            <p style={{ color: "#8B8B8B",padding:"0",margin:"0" }}>Bestseller</p>
            <p style={{ color: "#8B8B8B",padding:"0",margin:"0" }}>Featured Products</p>
          </Box>

          <Box
            sx={{
              width: "100%",
              height: "auto",
              paddingBottom: "10px",
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "auto",
          marginTop: "50px",
          marginBottom: "10px",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "25%",
            height: "630px",
            padding: "20px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "50%",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <img
              style={{
                width: "280px",
                height: "290px",
                position: "absolute",
                left: "10px",
                top: "50px",
                objectFit: "contain",
                transform: "rotate(0deg)",
              }}
              src="/hawai.png"
              alt=""
            />
            <img
              style={{
                width: "164px",
                height: "186px",
                position: "absolute",
                left: "100px",
                top: "115px",
                transform: "rotate(0deg)",
              }}
              src="/watch.png"
              alt=""
            />
          </Box>

          <Box
           sx={{
             width:"90%",
             display:'flex',
             flexDirection:"column",
             gap:"16px",
             marginTop:"20px"
           }}
          >
            <h1 style={{ fontSize: "35px",margin:"0",padding:"0"}}>Popular Products</h1>
            <p style={{ color: "#909090", }}>
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>

            <Button
              variant="outlined"
              sx={{
                width: "200px",
                color: "black",
                padding: "10px",
                border: "2px solid black",
                textAlign: "center",
                borderRadius: "6px",
              }}
            >
              Shop Now
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            width: "25%",
            height: "630px",
            backgroundColor: "#F9F9F9",
            padding: "20px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "50%",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src="/ipad pro.png"
              alt=""
            />
          </Box>

          <Box
            sx={{
              width:"90%",
              display:'flex',
              flexDirection:"column",
              gap:"16px",
              marginTop:"20px"
            }}
          >
            <h1 style={{ fontSize: "35px",margin:"0",padding:"0" }}>Ipad Pro</h1>
            <p style={{ color: "#909090" }}>
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>

            <Button
              variant="outlined"
              sx={{
                width: "200px",
                color: "black",
                padding: "10px",
                border: "2px solid black",
                textAlign: "center",
                borderRadius: "6px",
              }}
            >
              Shop Now
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            width: "25%",
            height: "630px",
            backgroundColor: "#EAEAEA",
            padding: "20px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "50%",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src="/samsung galaxy.png"
              alt=""
            />
          </Box>

          <Box
           sx={{
            width:"90%",
            display:'flex',
            flexDirection:"column",
            gap:"16px",
            marginTop:"20px"
          }}
          >
            <h1 style={{ fontSize: "35px",margin:"0",padding:"0" }}>Samsung Galaxy</h1>
            <p style={{ color: "#909090"}}>
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>

            <Button
              variant="outlined"
              sx={{
                width: "200px",
                color: "black",
                padding: "10px",
                border: "2px solid black",
                textAlign: "center",
                borderRadius: "6px",
              }}
            >
              Shop Now
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            width: "25%",
            height: "630px",
            backgroundColor: "#2C2C2C",
            padding: "20px",
            color: "white",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "50%",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src="/Macbook 1.png"
              alt=""
            />
          </Box>

          <Box
            sx={{
              width:"90%",
              display:'flex',
              flexDirection:"column",
              gap:"16px",
              marginTop:"20px"
            }}
          >
            <h1 style={{ fontSize: "35px",margin:"0",padding:"0" }}>Macbook Pro</h1>
            <p style={{ color: "#909090"}}>
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>

            <Button
              variant="outlined"
              sx={{
                width: "200px",
                color: "white",
                padding: "10px",
                border: "2px solid white",
                textAlign: "center",
                borderRadius: "6px",
              }}
            >
              Shop Now
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "auto",
          paddingBottom: "30px",
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "80%",
          }}
        >
          <h1 style={{marginBottom:"20px"}}>Discounts up to -50%</h1>

          <Box
            sx={{
              display: "flex",
              gap: "11px",
            }}
          >
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          marginTop:"30px",
          marginBottom:"0",
          paddingBottom:"0",
        }}
      >
        <img style={{ width: "100%" }} src="/banner 2.png" alt="" />
      </Box>
    </>
  );
}

export default HomeBody;
