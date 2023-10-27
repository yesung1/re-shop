// App.test.js
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import ProductDetail from "./components/ProductDetail";

const store = configureStore({ reducer: rootReducer }); // Redux store를 생성합니다.

jest.mock("./products.json", () => [
  {
    id: 1,
    name: "Test Product",
    price: "100",
    image: "test-image.jpg",
  },
]);

test("renders app correctly", async () => {
  render(<App />);
  const productList = screen.getByRole("list");
  expect(productList).toBeInTheDocument();
});

test('should display "Add to Cart" on product detail page', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/product/1"]}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );

  const addToCartButton = await waitFor(() => screen.getByText("Add to cart"));
  expect(addToCartButton).toBeInTheDocument();
});
