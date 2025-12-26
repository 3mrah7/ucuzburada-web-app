import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../Components/ProductCard";
import { Grid, Container, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    if (search) {
      axios
        .get(`http://localhost:8080/api/products/search?q=${search}`)
        .then((res) => setProducts(res.data));
    } else {
      axios
        .get("http://localhost:8080/api/products")
        .then((res) => setProducts(res.data));
    }
  }, [search]);

  return (
    <Container maxWidth="lg" sx={{ pt: 6 }}>
      <Typography variant="h4" sx={{ mb: 4, textAlign: "center" }}>
        PRODUCTS
      </Typography>

      <Grid container spacing={3}>
        {products.map((p) => (
          <Grid item xs={6} sm={4} md={3} key={p.id}>
            <ProductCard product={p} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Products;
