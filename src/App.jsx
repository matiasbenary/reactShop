import { Route, Routes } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./Layout";
import Cart from "./Screen/Cart";
import Detail from "./Screen/Detail";
import Home from "./Screen/Home";
import NotFound from "./Screen/NotFound";
import Orders from "./Screen/Orders";
import Profile from "./Screen/Profile";
import Search from "./Screen/Search";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/producto/:id" element={<Detail />} />
        <Route path="/productos" element={<Search />} />
        <Route path="/carrito" element={<Cart />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/perfil" element={<Profile />} />
          <Route path="/pedidos" element={<Orders />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
