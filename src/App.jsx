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
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
