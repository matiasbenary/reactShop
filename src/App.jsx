import { Route, Routes } from "react-router-dom";

import Layout from "./layout";
import Cart from "./screen/Cart";
import Detail from "./screen/Detail";
import Home from "./screen/Home";
import NotFound from "./screen/NotFound";
import Search from "./screen/Search";

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
