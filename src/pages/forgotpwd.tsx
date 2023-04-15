import {
  CssBaseline,
  Box,
  Avatar,
  Typography,
  Grid,
  Container,
  Link,
} from "@mui/material";
import NextLink from "next/link";

import React from "react";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { NoSSRHOC } from "~/wrappers/NoSSR";
import ResetForm from "~/components/Auth/ResetForm";

export default NoSSRHOC(function ForgotPassword() {
  const handleSubmit = () => {};

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
          Password Reset
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <ResetForm />

          <Grid container>
            <Grid item xs>
              <NextLink href="/signin">
                <Link variant="body2">Sign in instead</Link>
              </NextLink>
            </Grid>
            <Grid item>
              <NextLink href="/signup">
                <Link variant="body2">{"Don't have an account? Sign Up"}</Link>
              </NextLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
});
