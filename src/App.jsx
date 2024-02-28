import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemDetailContainer } from "./components/pages/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";
import CartWidget from "./components/common/CartWidget";
import { Navbar } from "./components/layout/Navbar";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartWidget />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
