import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}
