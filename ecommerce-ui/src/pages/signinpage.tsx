import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { signInUser } from "../apis/apis";
import { AxiosError } from "axios";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
});

function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setFieldError }) => {
      try {
        const res = await signInUser(values);
        console.log(res);

        navigate("/");
      } catch (error) {
        if (error instanceof AxiosError && error.response) {
          const { message } = error.response.data;
          if (message === "Incorrect email") {
            setFieldError("email", message);
          } else if (message === "Incorrect Password") {
            setFieldError("password", message);
          }
        } else {
          console.error("An unexpected error occurred:", error);
        }
      }
    },
  });

  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          background: "linear-gradient(to top, #05050D, #2A2E45)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "55%",
            height: "70%",
            display: "flex",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              width: "45%",
              height: "100%",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                backgroundSize: "contain",
                borderBottomLeftRadius: "10px",
                borderTopLeftRadius: "10px",
              }}
              src="/signiniphone.jpg"
              alt=""
            />
          </Box>

          <Box
            sx={{
              width: "60%",
              height: "100%",
              backgroundColor: "#05050D",
              color: "white",
              textAlign: "center",
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          >
            <Box
              sx={{
                marginTop: "30px",
              }}
            >
              <h1>SignIn</h1>

              <Box
                component="form"
                onSubmit={formik.handleSubmit}
                sx={{
                  marginTop: "30px",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <TextField
                  label="Email"
                  variant="outlined"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  sx={{
                    fontSize: "20px",
                    width: "70%",
                    borderRadius: "10px",
                    // backgroundColor: "#1A1A28",
                    backgroundColor: "transparent",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white",
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
                      },
                      "& .MuiInputBase-input": {
                        color: "white",
                        border: "none",
                        outline: "none",
                        "&::placeholder": {
                          color: "white",
                        },
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "white",
                    },
                    "& .MuiInputBase-root": {
                      color: "white",
                    },
                  }}
                />

                <TextField
                  label="Password"
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                  sx={{
                    fontSize: "20px",
                    width: "70%",
                    borderRadius: "10px",
                    backgroundColor: "transparent",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white",
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
                      },
                      "& .MuiInputBase-input": {
                        color: "white",
                        border: "none",
                        outline: "none",
                        "&::placeholder": {
                          color: "white",
                        },
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "white",
                    },
                    "& .MuiInputBase-root": {
                      color: "white",
                    },
                  }}
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={toggleShowPassword}
                            sx={{ color: "white" }}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                    width: "70%",
                    padding: "0",
                    margin: "0",
                  }}
                >
                  <p style={{ padding: "0", margin: "0", cursor: "pointer" }}>
                    Forgot Password
                  </p>
                </Box>

                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    type="submit"
                    sx={{
                      // backgroundColor: "#F8F9FA",
                      backgroundColor: "transparent",
                      border: "1px solid white",
                      width: "350px",
                      height: "50px",
                      fontSize: "20px",
                      fontWeight: "normal",
                      color: "white",
                      textTransform: "none",
                    }}
                  >
                    SignIn
                  </Button>
                </Box>

                <Box>
                  <p>
                    Are you new here? &nbsp;{" "}
                    <Link
                      style={{
                        color: "#007bff",
                        textDecoration: "none",
                        fontWeight: "bold",
                      }}
                      to="/register"
                    >
                      Register
                    </Link>
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

export default SignInPage;
