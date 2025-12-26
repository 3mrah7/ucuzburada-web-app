import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 200,          // 🔥 EN KRİTİK SATIR (DEVASAYI BİTİRİR)
        height: 300,
        mx: "auto",             // ortalar
        bgcolor: "#1a1a1a",
        borderRadius: 2,
        border: "1px solid rgba(255,255,255,0.08)",
        display: "flex",
        flexDirection: "column",
        transition: "0.2s",
        "&:hover": {
          borderColor: "#ff9800",
          transform: "translateY(-2px)",
        },
      }}
    >
      {/* IMAGE */}
      <Box
        onClick={() => navigate(`/product/${product.id}`)}
        sx={{
          width: "100%",
          aspectRatio: "1 / 1",
          cursor: "pointer",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <CardMedia
          component="img"
          image={product.image}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            p: 1,
          }}
        />
      </Box>

      {/* CONTENT */}
      <CardContent
        sx={{
          p: 1,
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        {/* NAME */}
        <Typography
          sx={{
            fontSize: "0.75rem",
            fontWeight: 500,
            color: "white",
            height: 32,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {product.name}
        </Typography>

        {/* PRICE */}
        <Typography
          sx={{
            fontSize: "0.9rem",
            fontWeight: "bold",
            color: "#ff9800",
            mt: 0.5,
          }}
        >
          ${product.price}
        </Typography>

        {/* BUTTON */}
        <Button
          fullWidth
          size="small"
          onClick={() => addToCart(product)}
          sx={{
            mt: "auto",
            bgcolor: "#ff9800",
            color: "black",
            fontSize: "0.65rem",
            fontWeight: "bold",
            minHeight: 30,
            "&:hover": { bgcolor: "#ffa726" },
          }}
        >
          ADD TO CART
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
