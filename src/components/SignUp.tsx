// src/components/SignUp.tsx
import React, { useState } from "react";
import { Button, TextField, Grid, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SignUp() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 회원가입 로직: 입력한 이메일과 비밀번호를 로컬 스토리지에 저장합니다.
    localStorage.setItem("email", formData.email);
    localStorage.setItem("password", formData.password);

    // 성공 메시지를 표시하고, 사용자를 메인 페이지로 리다이렉트합니다.
    toast.success("회원가입에 성공하였습니다!");
    navigate("/");
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      <form noValidate onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={handleChange}
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Sign Up
        </Button>
      </form>
    </Grid>
  );
}

export default SignUp;
