import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../Components/ProductCard";
import { Grid, Typography, Box, Container } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/products")
      .then(res => setProducts(res.data));
  }, []);

  const bestSeller = products.find(p => p.featured === true);
  const recommended = products.filter(p => p.featured !== true);

  return (
    <Container maxWidth="lg" sx={{ pt: 6, pb: 10 }}>

      {/* HERO */}
      <Grid container spacing={4} alignItems="center">

        {/* LEFT */}
        <Grid item xs={12} md={8}>
          <Typography
            variant="h2"
            sx={{ fontWeight: 900, color: "#ff9800", lineHeight: 1 }}
          >
            UcuzBurada
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "white",
              opacity: 0.8,
              fontStyle: "italic",
              maxWidth: "80%",
            }}
          >
            Better quality, better prices, smarter shopping every day.
          </Typography>
        </Grid>

        {/* RIGHT - BEST SELLER */}
        <Grid item xs={12} md={4}>
          {bestSeller && (
            <Box
              sx={{
                position: "relative",
                maxWidth: 260,
                ml: "auto",   // ⬅ SAĞA DAYAR (en kritik satır)
              }}
            >
              {/* 🔥 BADGE */}
              <Box
                sx={{
                  position: "absolute",
                  top: -10,
                  left: -10,
                  bgcolor: "#ff9800",
                  color: "black",
                  px: 1.2,
                  py: 0.4,
                  borderRadius: 2,
                  fontSize: "0.7rem",
                  fontWeight: "bold",
                  zIndex: 10,
                }}
              >
                🔥 BEST SELLER
              </Box>

              <ProductCard product={bestSeller} />
            </Box>
          )}
        </Grid>

      </Grid>

      {/* RECOMMENDED */}
      <Box sx={{ mt: 8 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 3, gap: 1 }}>
          <StarIcon sx={{ color: "#ff9800" }} />
          <Typography variant="h5" sx={{ color: "white", fontWeight: 700 }}>
            RECOMMENDED FOR YOU
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {recommended.map(product => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>

    </Container>
  );
}

export default Home;
