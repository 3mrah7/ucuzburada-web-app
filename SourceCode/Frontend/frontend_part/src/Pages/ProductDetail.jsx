import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Typography, Box, Container, Grid, Button, Divider } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { CartContext } from "../Context/CartContext";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error("Loading error:", err));
  }, [id]);

  if (!product) return null;

  return (
    <Container maxWidth="md" sx={{ pt: 4, pb: 10 }}>
      {/* 1. TURN BACK BUTTON */}
      <Button 
        startIcon={<ArrowBackIosNewIcon />} 
        onClick={() => navigate(-1)} 
        sx={{ color: '#ff9800', mb: 3, fontWeight: '700' }}
      >
        BACK TO SHOPPING
      </Button>

      <Grid container spacing={4} sx={{ bgcolor: '#1a1a1a', borderRadius: 4, p: 4, border: '1px solid rgba(255,255,255,0.05)' }}>
        
        {/* LEFT SIDE: PRODUCT IMAGE */}
        <Grid item xs={12} md={5}>
          <Box sx={{ bgcolor: 'white', borderRadius: 3, p: 3, height: 350, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box component="img" src={product.image} sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
          </Box>
        </Grid>

        {/* RIGHT SIDE: PRODUCT DETAILS */}
        <Grid item xs={12} md={7}>
          <Typography variant="h4" sx={{ fontWeight: '800', color: 'white', mb: 1 }}>
            {product.name}
          </Typography>

          {/* 2. SHORT INFO (DATABASE'DEN GELEN) */}
          <Box sx={{ mb: 2, p: 1.5, bgcolor: 'rgba(255,152,0,0.05)', borderLeft: '4px solid #ff9800', borderRadius: '0 8px 8px 0' }}>
            <Typography variant="body1" sx={{ color: '#ff9800', fontWeight: '500', fontStyle: 'italic' }}>
              "{product.shortInfo || "Premium quality product."}" 
            </Typography>
          </Box>
          
          <Typography variant="h3" sx={{ color: 'white', fontWeight: '900', mb: 2 }}>
            ${product.price}
          </Typography>

          <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)', mb: 3 }} />

          <Typography variant="body2" sx={{ color: '#aaa', mb: 4, lineHeight: 1.8 }}>
            {product.description}
          </Typography>

          <Button 
            variant="contained" 
            fullWidth 
            onClick={() => addToCart(product)}
            sx={{ bgcolor: '#ff9800', color: '#000', fontWeight: '900', py: 2 }}
          >
            ADD TO CART
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductDetail;