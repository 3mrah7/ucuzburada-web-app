import { Routes, Route } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material"; // CssBaseline ekledik
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetail from "./Pages/ProductDetail";
import Cart from "./Pages/cart";

function App() {
  return (
    <Box sx={{ 
      bgcolor: '#0f0f0f', 
      minHeight: '100vh', 
      width: '100vw', // Genişliği tam ekran yaptık
      m: 0, 
      p: 0, 
      overflowX: 'hidden' // Yatay kaydırmayı engelledik
    }}>
      <CssBaseline /> {/* Tarayıcı boşluklarını sıfırlar */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Box>
  );
}

export default App;