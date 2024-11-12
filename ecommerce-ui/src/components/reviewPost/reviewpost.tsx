import React from "react";
import { StarBorder } from "@mui/icons-material";
import { Avatar, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { ReviewProps } from "../../Interfaces/interface";

function ReviewPost({ name, image, message }: ReviewProps) {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          marginBottom: "20px",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "80%",
            backgroundColor: "#FAFAFA",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "200px",
              paddingBottom: "20px",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Box
              sx={{
                marginTop: "10px",
              }}
            >
              <Avatar
                sx={{ width: 60, height: 60, objectFit: "contain" }}
                alt="Remy Sharp"
                src={image}
              />
            </Box>

            <Box
              sx={{
                width: "90%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "90%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <h2>{name}</h2>
                  <p style={{ opacity: "40%" }}>24 January,2023</p>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    marginTop: "10px",
                  }}
                >
                  <StarIcon sx={{ color: "#FFB547" }} />
                  <StarIcon sx={{ color: "#FFB547" }} />
                  <StarIcon sx={{ color: "#FFB547" }} />
                  <StarIcon sx={{ color: "#FFB547" }} />
                  <StarBorder sx={{ color: "#FFB547" }} />
                </Box>

                <Box
                  sx={{
                    marginTop: "10px",
                  }}
                >
                  <p>
                    {message}
                  </p>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ReviewPost;
