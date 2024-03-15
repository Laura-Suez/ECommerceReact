import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemDetailContainer } from "./components/pages/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";
import { CartContainer } from "./components/pages/Cart/CartContainer";
import { Layout } from "./components/layout/Layout";
import { CheckoutContainer } from "./components/pages/Cart/Checkout/CheckoutContainer";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<CheckoutContainer />} />
          <Route path="*" element={<h1>404 not found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
