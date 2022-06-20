import { Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import Cart from "./Screen/Cart";
import Detail from "./Screen/Detail";
import Home from "./Screen/Home";
import NotFound from "./Screen/NotFound";
import Search from "./Screen/Search";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/producto/:id" element={<Detail />} />
        <Route path="/productos" element={<Search />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
