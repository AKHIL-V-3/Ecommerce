import { Box, Button } from "@mui/material";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import WatchOutlinedIcon from '@mui/icons-material/WatchOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';
import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';
function Categories() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "600px",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "50%",
            height: "100%",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "50%",
              display: "flex",
            }}
          >
            <Box
              sx={{
                width: "40%",
                height: "100%",
              }}
            >
              <img
                style={{ height: "100%" }}
                src="public/PlayStation.png"
                alt=""
              />
            </Box>
            <Box
              sx={{
                width: "60%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <h1 style={{ fontSize: "60px", padding: "0", margin: "0",marginBottom:"20px" }}>
                  Playstation 5
                </h1>
                <p style={{ width: "80%", color: "#909090",margin:"0",padding:"0" }}>
                  Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                  will redefine your PlayStation experience.
                </p>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              width: "100%",
              height: "50%",
              display: "flex",
            }}
          >
            <Box
              sx={{
                width: "50%",
                height: "100%",
                backgroundColor: "#EDEDED",
                display: "flex",
              }}
            >
              <Box
                sx={{
                  width: "40%",
                  height: "100%",
                }}
              >
                <img
                  style={{ height: "100%" }}
                  src="public/headphone.png"
                  alt=""
                />
              </Box>

              <Box
                sx={{
                  width: "60%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    marginLeft: "10px",
                  }}
                >
                  <h2
                    style={{
                      width: "60%",
                      fontSize: "40px",
                      fontWeight: "lighter",
                      padding: "0",
                      margin: "0",
                      marginBottom:"20px"
                    }}
                  >
                    Apple AirPods{" "}
                    <span style={{ fontWeight: "bold" }}>Max</span>
                  </h2>
                  <p
                    style={{
                      width: "70%",
                      color: "#909090",
                      padding: "0",
                      margin: "0",
                    }}
                  >
                    Computational audio. Listen, it's powerful
                  </p>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                width: "50%",
                height: "100%",
                backgroundColor: "#353535",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "45%",
                  height: "100%",
                }}
              >
                <img
                  style={{ height: "60%", width: "90%", marginTop: "60px" }}
                  src="public/applevisionpro.png"
                  alt=""
                />
              </Box>

              <Box
                sx={{
                  width: "40%",
                  marginLeft: "10px",
                }}
              >
                <h2
                  style={{
                    width: "100%",
                    fontSize: "30px",
                    fontWeight: "lighter",
                    padding: "0",
                    margin: "0",
                    color: "white",
                  }}
                >
                  Apple <br /> Vision{" "}
                  <span style={{ fontWeight: "bold" }}>Pro</span>
                </h2>
                <p
                  style={{
                    width: "100%",
                    color: "#909090",
                    padding: "0",
                    margin: "10px",
                  }}
                >
                  An immersive way to experience entertainment
                </p>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: "50%",
            height: "100%",
            backgroundColor: "#EDEDED",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "60%",
              paddingLeft: "40px",
            }}
          >
            <h1
              style={{
                width: "100%",
                fontSize: "60px",
                fontWeight: "lighter",
                padding: "0",
                margin: "0",
              }}
            >
              Macbook <br />
              <span style={{ fontWeight: "bold" }}>Air</span>
            </h1>
            <p
              style={{
                width: "85%",
                color: "#909090",
                padding: "0",
                margin:"0",
                marginTop: "20px",
                marginBottom:"20px"
              }}
            >
              The new 15‑inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina <br /> display.
            </p>
            <Button
              variant="outlined"
              sx={{
                width: "150px",
                color: "black",
                padding: "10px",
                border: "1px solid black",
              }}
            >
              Shop Now
            </Button>
          </Box>
          <Box
            sx={{
              width: "40%",
            }}
          >
            <img
              style={{ height: "80%", marginRight: "0px" }}
              src="public/MacBook Pro 14.png"
              alt=""
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "350px",
          backgroundColor: "#FAFAFA",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "80%",
            height: "55%",
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "30%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2 style={{ fontSize: "30px",padding:"0",margin:"0" }}>Browse By Category</h2>
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                margin:"0",
                padding:"0"
              }}
            >
              <ArrowBackIosNewOutlinedIcon sx={{margin:"0",padding:"0"}} fontSize="large" />
              <ArrowForwardIosOutlinedIcon sx={{margin:"0",padding:"0"}} fontSize="large" />
            </Box>
          </Box>

          <Box
            sx={{
              width: "100%",
              height: "70%",
              marginTop:"10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              opacity:"85%"
            }}
          >
            <Box
              sx={{
                width: "15%",
                height: "100%",
                backgroundColor: "#EDEDED",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign:"center"
              }}
            >
              <Box>
                <PhoneIphoneOutlinedIcon style={{fontSize:"50px",margin:"0",padding:"0"}} />
                <p style={{fontSize:"20px",margin:"0",padding:"0"}}>Phones</p>
              </Box>

            </Box>

            <Box
              sx={{
                width: "15%",
                height: "100%",
                backgroundColor: "#EDEDED",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign:"center"
              }}
            >
              <Box>
                <WatchOutlinedIcon style={{fontSize:"50px",margin:"0",padding:"0"}} />
                <p style={{fontSize:"20px",margin:"0",padding:"0"}}>Smart Watches</p>
              </Box>

            </Box>

            <Box
              sx={{
                width: "15%",
                height: "100%",
                backgroundColor: "#EDEDED",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign:"center"
              }}
            >
              <Box>
                <CameraAltOutlinedIcon style={{fontSize:"50px",margin:"0",padding:"0"}} />
                <p style={{fontSize:"20px",margin:"0",padding:"0"}}>Cameras</p>
              </Box>

            </Box>

            <Box
              sx={{
                width: "15%",
                height: "100%",
                backgroundColor: "#EDEDED",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign:"center"
              }}
            >
              <Box>
                <HeadphonesOutlinedIcon style={{fontSize:"50px",margin:"0",padding:"0"}} />
                <p style={{fontSize:"20px",margin:"0",padding:"0"}}>Headphones</p>
              </Box>

            </Box>

            <Box
              sx={{
                width: "15%",
                height: "100%",
                backgroundColor: "#EDEDED",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign:"center"
              }}
            >
              <Box>
                <DvrOutlinedIcon style={{fontSize:"50px",margin:"0",padding:"0"}} />
                <p style={{fontSize:"20px",margin:"0",padding:"0"}}>Computers</p>
              </Box>

            </Box>

            <Box
              sx={{
                width: "15%",
                height: "100%",
                backgroundColor: "#EDEDED",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign:"center"
              }}
            >
              <Box>
                <VideogameAssetOutlinedIcon style={{fontSize:"50px",margin:"0",padding:"0"}} />
                <p style={{fontSize:"20px",margin:"0",padding:"0"}}>Gaming</p>
              </Box>

            </Box>


          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Categories;
