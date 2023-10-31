// src/components/MainPage.tsx
import React from "react";
import Header from "./Header.tsx"; // 헤더 컴포넌트
import Footer from "./Footer.tsx"; // 푸터 컴포넌트
import { Container, Typography } from "@material-ui/core";
import ProductList from "./ProductList.tsx";

const MainPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="md">
        <Typography variant="h4" component="h1">
          리스트
        </Typography>
        <ProductList />
      </Container>
      <Footer />
    </div>
  );
};

export default MainPage;
