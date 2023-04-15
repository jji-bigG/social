import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NextLink from "next/link";
import { NoSSRHOC } from "~/wrappers/NoSSR";
import { Controller, useForm } from "react-hook-form";

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            label="Email"
            required
            fullWidth
            {...register("email", {
              required: "Required",
            })}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            {...register("password", {
              required: "Required",
            })}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <FormControlLabel
            control={
              <Controller
                control={control}
                name="remember"
                defaultValue={true}
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isDirty, isTouched, error },
                }) => {
                  return (
                    <Checkbox
                      onBlur={onBlur}
                      onChange={onChange}
                      checked={value}
                      inputRef={ref}
                    />
                  );
                }}
              />
            }
            label="Remember me"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/forgotpwd" component={NextLink} variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" component={NextLink} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default NoSSRHOC(SignIn);
