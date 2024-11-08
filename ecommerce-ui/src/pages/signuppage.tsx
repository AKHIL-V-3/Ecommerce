import {
  Box,
  Button,
  TextField,
  IconButton,
  InputAdornment,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {signUpUser} from "../apis/apis";

const validationSchema = yup.object({
  username: yup.string().required("username is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
  retypepassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("password is required"),
});

function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      retypepassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setFieldError }) => {
      setIsLoading(true);
      setAccountCreated(false);
      setTimeout(async () => {
        try {
          await signUpUser(values);
          setAccountCreated(true);
          setTimeout(() => {
            setIsLoading(false);
            navigate("/signin");
          }, 2000);
        } catch (error) {
          if (error) setFieldError("email", "This email is already Exists");
        } finally {
          setIsLoading(false);
        }
      }, 2000);
    },
  });

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowRetypePassword = () =>
    setShowRetypePassword(!showRetypePassword);

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
            width: "65%",
            height: "93%",
            display: "flex",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              width: "50%",
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
              width: "50%",
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
              <h1>Register</h1>

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
                  label="Username"
                  variant="outlined"
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.username && Boolean(formik.errors.username)
                  }
                  helperText={formik.touched.username && formik.errors.username}
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
                />

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
                <TextField
                  label="Confirm Password"
                  variant="outlined"
                  type={showRetypePassword ? "text" : "password"}
                  name="retypepassword"
                  value={formik.values.retypepassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.retypepassword &&
                    Boolean(formik.errors.retypepassword)
                  }
                  helperText={
                    formik.touched.retypepassword &&
                    formik.errors.retypepassword
                  }
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
                            onClick={toggleShowRetypePassword}
                            sx={{ color: "white" }}
                          >
                            {showRetypePassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                />

                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      // backgroundColor: "#F8F9FA",
                      backgroundColor: "transparent",
                      border: "1px solid white",
                      width: "345px",
                      height: "50px",
                      fontSize: "20px",
                      fontWeight: "normal",
                      color: "white",
                      textTransform: "none",
                      marginTop: "20px",
                    }}
                    // disabled={isLoading}
                    startIcon={
                      isLoading ? (
                        <CircularProgress sx={{ color: "white" }} size={20} />
                      ) : null
                    }
                  >
                    {isLoading ? "Creating Account..." : "Register"}
                  </Button>
                  {accountCreated && (
                    <Typography
                      variant="body1"
                      sx={{ mt: 2, color: "#66bb6a" }}
                    >
                      Account created successfully! Redirecting...
                    </Typography>
                  )}
                </Box>

                <Box>
                  <p>
                    Already have an account? &nbsp;{" "}
                    <Link
                      style={{
                        color: "#007bff",
                        textDecoration: "none",
                        fontWeight: "bold",
                      }}
                      to="/signin"
                    >
                      Login
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

export default SignUpPage;
