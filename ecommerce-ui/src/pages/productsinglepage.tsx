import React, { useEffect, useState } from "react";
import Header from "../components/header/header";
import { Box, Button, TextField } from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import StarIcon from "@mui/icons-material/Star";
import LinearProgress from "@mui/material/LinearProgress";
import ReviewPost from "../components/reviewPost/reviewpost";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import ProductCard from "../components/productCard/ProductCard";
import Footer from "../components/footer/footer";
import { getProductDetails } from "../apis/apis";
import { useParams } from "react-router-dom";
import { IProduct, ProductImages } from "../Interfaces/interface";

function ProductSinglePage() {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [mainImage, setMainImage] = useState("");
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const { id } = useParams<{ id: string | undefined }>();

  useEffect(() => {
    if (product && product?.Images.length > 0) {
      setMainImage(product?.Images[0]?.Image);
    }
  }, [product]);

  useEffect(() => {
    if (id) {
      const productId = parseInt(id);
      if (!isNaN(productId)) {
        const fetchProductDetails = async () => {
          const response = await getProductDetails(productId);
          setProduct(response.data)
        };
  
        fetchProductDetails();
      } else {
        console.error("Invalid product ID");
      }
    } else {
      console.error("Product ID is undefined");
    }
  }, [id]);

  const changeImage = (imageUrl: string) => {
    setMainImage(imageUrl);
    setActiveImage(imageUrl);
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          borderTop: "2px solid #A4A4A4",
          width: "100%",
          height: "100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "80%",
            height: "100%",
            display: "flex",
            justifyContent: "start",
            gap: "10px",
            alignItems: "center",
            opacity: "0.6",
          }}
        >
          <p>Home</p>
          <ArrowForwardIosOutlinedIcon fontSize="small" />
          <p>Smartphone</p>
          <ArrowForwardIosOutlinedIcon fontSize="small" />
          <p>Apple</p>
          <ArrowForwardIosOutlinedIcon fontSize="small" />
          <p style={{ opacity: "0.9" }}>Iphone 14</p>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "80%",
            display: "flex",
            marginTop: "100px",
          }}
        >
          <Box
            sx={{
              width: "50%",
              height: "100%",
              display: "flex",
              // alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "20%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginTop: "10px",
                cursor: "pointer",
              }}
            >
              {product?.Images?.map((productImage:ProductImages) => (
                <Box
                  onClick={() => changeImage(productImage.Image)}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "transform 0.3s, opacity 0.3s",
                  }}
                >
                  <img
                    style={{
                      width: "85%",
                      transform:
                        activeImage === productImage?.Image
                          ? "scale(1.2)"
                          : "scale(1)", // Zoom in the clicked image
                      opacity: activeImage === productImage?.Image ? 1 : 0.6, // Reduce opacity of other images
                      transition: "transform 0.3s, opacity 0.3s",
                    }}
                    src={productImage.Image}
                    alt=""
                  />
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                width: "80%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                style={{ width: "100%", height: "500px" }}
                src={mainImage}
                alt=""
              />
            </Box>
          </Box>

          <Box
            sx={{
              width: "50%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              marginLeft: "20px",
            }}
          >
            <h1 style={{ fontSize: "43px" }}>{product?.Productname}</h1>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                fontSize: "20px",
              }}
            >
              <h2>₹{product?.Price}</h2>{" "}
              <h3 style={{ opacity: "0.7", fontSize: "20px" }}>
                <s>₹120,000</s>{" "}
              </h3>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <p>Select Color :</p>
              <Box
                sx={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "100%",
                  backgroundColor: "black",
                }}
              ></Box>
              <Box
                sx={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "100%",
                  backgroundColor: "#781DBC",
                }}
              ></Box>
              <Box
                sx={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "100%",
                  backgroundColor: "#E10000",
                }}
              ></Box>
              <Box
                sx={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "100%",
                  backgroundColor: "#E1B000",
                }}
              ></Box>
              <Box
                sx={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "100%",
                  backgroundColor: "#E8E8E8",
                }}
              ></Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginTop: "10px",
              }}
            >
              <Box
                sx={{
                  width: "110px",
                  height: "45px",
                  borderRadius: "8px",
                  backgroundColor: "transparent",
                  border: "1px solid #D5D5D5",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "20px",
                  fontWeight: "500",
                  opacity: "0.5",
                  color: "#6F6F6F",
                  cursor: "pointer",
                }}
              >
                128GB
              </Box>

              <Box
                sx={{
                  width: "110px",
                  height: "45px",
                  borderRadius: "8px",
                  backgroundColor: "transparent",
                  border: "1px solid #D5D5D5",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "20px",
                  fontWeight: "500",
                  opacity: "0.5",
                  color: "#6F6F6F",
                  cursor: "pointer",
                }}
              >
                256GB
              </Box>

              <Box
                sx={{
                  width: "110px",
                  height: "45px",
                  borderRadius: "8px",
                  backgroundColor: "transparent",
                  border: "1px solid #D5D5D5",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "20px",
                  fontWeight: "500",
                  opacity: "0.5",
                  color: "#6F6F6F",
                  cursor: "pointer",
                }}
              >
                512GB
              </Box>

              <Box
                sx={{
                  width: "110px",
                  height: "45px",
                  borderRadius: "8px",
                  backgroundColor: "transparent",
                  border: "1px solid black",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "20px",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
              >
                1TB
              </Box>
            </Box>

            <Box
              sx={{
                color: "#6C6C6C",
                marginTop: "20px",
                width: "85%",
              }}
            >
              <p>
                Enhanced capabilities thanks toan enlarged display of 6.7
                inchesand work without rechargingthroughout the day. Incredible
                photosas in weak, yesand in bright lightusing the new systemwith
                two cameras more...
              </p>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: "20px",
                marginTop: "60px",
              }}
            >
              <Button
                sx={{
                  backgroundColor: "transparent",
                  color: "black",
                  borderRadius: "6px",
                  height: "60px",
                  width: "245px",
                  borderColor: "black",
                  fontSize: "16px",
                  fontWeight: "600",
                  textTransform: "none",
                }}
                variant="outlined"
              >
                Add to Whishlist
              </Button>
              <Button
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "6px",
                  height: "60px",
                  width: "245px",
                  fontSize: "16px",
                  fontWeight: "600",
                  textTransform: "none",
                }}
                variant="contained"
              >
                Add to Cart
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "80%",
            height: "100%",
          }}
        >
          <h1 style={{ fontWeight: "500" }}>Reviews</h1>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "20%",
                height: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "184px",
                  height: "192px",
                  backgroundColor: "#FAFAFA",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "25px",
                }}
              >
                <Box
                  sx={{
                    textAlign: "center",
                    height: "80%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <h1 style={{ fontSize: "60px", fontWeight: "600" }}>4.8</h1>
                  <p style={{ fontSize: "16px", opacity: "30%" }}>
                    of 128 reviews
                  </p>
                  <Box
                    sx={{
                      marginTop: "10px",
                    }}
                  >
                    <StarIcon sx={{ color: "#FFB547" }} />
                    <StarIcon sx={{ color: "#FFB547" }} />
                    <StarIcon sx={{ color: "#FFB547" }} />
                    <StarIcon sx={{ color: "#FFB547" }} />
                    <StarIcon sx={{ color: "#FFB547" }} />
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                width: "80%",
                height: "192px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  gap: "5px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    width: "20%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
                    }}
                  >
                    <p style={{ fontSize: "20px", fontWeight: "500" }}>
                      Excellent
                    </p>
                    <p style={{ fontSize: "20px", fontWeight: "500" }}>Good</p>
                    <p style={{ fontSize: "20px", fontWeight: "500" }}>
                      Average
                    </p>
                    <p style={{ fontSize: "20px", fontWeight: "500" }}>
                      Below Average
                    </p>
                    <p style={{ fontSize: "20px", fontWeight: "500" }}>Poor</p>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "38px",
                    alignItems: "center",
                    height: "100%",
                    width: "80%",
                  }}
                >
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress
                      sx={{
                        height: "6px",
                        backgroundColor: "#D9D9D9",
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: "#FFB547",
                        },
                        borderRadius: "16px",
                      }}
                      variant="determinate"
                      value={80}
                    />
                  </Box>

                  <Box sx={{ width: "100%" }}>
                    <LinearProgress
                      sx={{
                        height: "6px",
                        backgroundColor: "#D9D9D9",
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: "#FFB547",
                        },
                        borderRadius: "16px",
                      }}
                      variant="determinate"
                      value={80}
                    />
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress
                      sx={{
                        height: "6px",
                        backgroundColor: "#D9D9D9",
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: "#FFB547",
                        },
                        borderRadius: "16px",
                      }}
                      variant="determinate"
                      value={80}
                    />
                  </Box>

                  <Box sx={{ width: "100%" }}>
                    <LinearProgress
                      sx={{
                        height: "6px",
                        backgroundColor: "#D9D9D9",
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: "#FFB547",
                        },
                        borderRadius: "16px",
                      }}
                      variant="determinate"
                      value={80}
                    />
                  </Box>

                  <Box sx={{ width: "100%" }}>
                    <LinearProgress
                      sx={{
                        height: "6px",
                        backgroundColor: "#D9D9D9",
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: "#FFB547",
                        },
                        borderRadius: "16px",
                      }}
                      variant="determinate"
                      value={80}
                    />
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    opacity: "40%",
                    height: "100%",
                  }}
                >
                  <p style={{ fontSize: "20px", fontWeight: "500" }}>100</p>
                  <p style={{ fontSize: "20px", fontWeight: "500" }}>11</p>
                  <p style={{ fontSize: "20px", fontWeight: "500" }}>4</p>
                  <p style={{ fontSize: "20px", fontWeight: "500" }}>8</p>
                  <p style={{ fontSize: "20px", fontWeight: "500" }}>2</p>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "80%",
            paddingBottom: "50px",
          }}
        >
          <TextField
            sx={{
              width: "100%",
              borderRadius: "7px",
              borderColor: "#CECECE",
              opacity: "80%",
            }}
            placeholder="Leave Comment"
          />
        </Box>
      </Box>

      <Box>
        <ReviewPost
          name="Grace Carey"
          image="/public/reviewUser1.png"
          message="I was a bit nervous to be buying a secondhand phone from
                    Amazon, but I couldn’t be happier with my purchase!! I have
                    a pre-paid data plan so I was worried that this phone
                    wouldn’t connect with my data plan, since the new phones
                    don’t have the physical Sim tray anymore, but couldn’t have
                    been easier! I bought an Unlocked black iPhone 14 Pro Max in
                    excellent condition and everything is PERFECT. It was super
                    easy to set up and the phone works and looks great. It truly
                    was in excellent condition. Highly recommend!!!🖤"
        />
        <ReviewPost
          name="Ronald Richards"
          image="/public/reviewUser2.png"
          message="This phone has 1T storage and is durable. Plus all the new iPhones have a C port! Apple is phasing out the current ones! (All about the Benjamin’s) So if you want a phone that’s going to last grab an iPhone 14 pro max and get several cords and plugs."
        />
        <ReviewPost
          name="Darcy King"
          image="/public/reviewUser3.png"
          message="I might be the only one to say this but the camera is a little funky. Hoping it will change with a software update: otherwise, love this phone! Came in great condition"
        />
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "auto",
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "80%",
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <Button
            sx={{
              borderRadius: "8px",
              width: "200px",
              height: "50px",
              gap: "10px",
              textTransform: "none",
              textAlign: "center",
              color: "black",
              border: "1px solid #545454",
            }}
            variant="outlined"
          >
            View More
            <KeyboardArrowDownIcon />
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
          marginBottom: "100px",
        }}
      >
        <Box
          sx={{
            width: "80%",
            height: "100%",
          }}
        >
          <Box>
            <h1>Related Products</h1>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: "20px",
              marginTop: "40px",
            }}
          >
            {/* <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
             */}
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default ProductSinglePage;
