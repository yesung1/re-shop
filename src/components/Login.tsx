// src/components/Login.tsx
import React, { useState } from "react";
import { Button, TextField, Grid, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 로그인 로직: 입력한 이메일과 비밀번호가 로컬 스토리지에 저장된 값과 일치하는지 확인합니다.
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (
      formData.email === storedEmail &&
      formData.password === storedPassword
    ) {
      // 로그인 성공: 성공 메시지를 표시하고, 사용자를 메인 페이지로 리다이렉트합니다.
      toast.success("로그인에 성공하였습니다!");
      navigate("/");
    } else {
      // 로그인 실패: 오류 메시지를 표시합니다.
      toast.error("이메일 또는 비밀번호가 잘못되었습니다.");
    }
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
        Log in
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
          Log In
        </Button>
      </form>
    </Grid>
  );
}

export default Login;
