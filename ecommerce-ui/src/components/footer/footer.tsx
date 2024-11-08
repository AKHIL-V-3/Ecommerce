import { Box } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor: "black",
          margin: "0",
          color: "#CFCFCF",
          padding: "0",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "80%",
            display: "flex",
            margin: "0",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "80%",
              marginTop: "100px",
            }}
          >
            <Box
              sx={{
                width: "30%",
                height: "80%",
              }}
            >
              <h1 style={{ color: "white" }}>Cyber</h1>
              <p style={{ marginTop: "20px" }}>
                We are a residential interior design firm located in Portland.
                Our boutique-studio offers more than
              </p>
            </Box>
            <Box
              sx={{
                width: "30%",
                height: "80%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                gap: "20px",
              }}
            >
              <h1 style={{ padding: "0", margin: "0", color: "white" }}>
                Services
              </h1>
              <p style={{ padding: "0", margin: "0" }}>Bonus program</p>
              <p style={{ padding: "0", margin: "0" }}>Gift cards</p>
              <p style={{ padding: "0", margin: "0" }}>Credit and payment</p>
              <p style={{ padding: "0", margin: "0" }}>Service contracts</p>
              <p style={{ padding: "0", margin: "0" }}>Non-cash account</p>
              <p style={{ padding: "0", margin: "0" }}>Payment</p>
            </Box>

            <Box
              sx={{
                width: "30%",
                height: "80%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                gap: "20px",
              }}
            >
              <h1 style={{ padding: "0", margin: "0", color: "white" }}>
                Assistance to the buyer
              </h1>
              <p style={{ padding: "0", margin: "0" }}>Find an order</p>
              <p style={{ padding: "0", margin: "0" }}>Terms of delivery</p>
              <p style={{ padding: "0", margin: "0" }}>
                Exchange and return of goods
              </p>
              <p style={{ padding: "0", margin: "0" }}>Guarantee</p>
              <p style={{ padding: "0", margin: "0" }}>
                Frequently asked questions
              </p>
              <p style={{ padding: "0", margin: "0" }}>
                Terms of use of the site
              </p>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "80%",
            height: "20%",
            display: "flex",
            justifyContent: "start",
            paddingBottom: "40px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              margin: "0",
              padding: "0",    
            }}
          >
            <Box
             sx={{
               width:"75%",
               display:"flex",
               gap: "20px",
             }}
            >
              <XIcon />
              <FacebookIcon />
              <LinkedInIcon />
              <InstagramIcon />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
