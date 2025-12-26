import { useContext } from "react";
import { Container, Typography, Box, Paper, IconButton, Button, Divider, Grid } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from "../Context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  if (cart.length === 0) return (
    <Container sx={{ textAlign: 'center', pt: 15 }}>
      <Typography variant="h5" sx={{ color: '#ccc' }}>Your cart is empty!</Typography>
    </Container>
  );

  return (
    <Container sx={{ pt: 8 }}>
      <Typography variant="h4" sx={{ color: '#ff9800', mb: 4, fontWeight: 'bold' }}>Shopping Cart</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          {cart.map(item => (
            <Paper key={item.id} sx={{ p: 2, mb: 2, display: 'flex', alignItems: 'center', bgcolor: '#1a1a1a', border: '1px solid rgba(255,152,0,0.1)' }}>
              <Box component="img" src={item.image} sx={{ width: 80, borderRadius: 2, mr: 2 }} />
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ color: '#fff' }}>{item.name}</Typography>
                <Typography sx={{ color: '#ff9800' }}>${item.price} x {item.quantity}</Typography>
              </Box>
              <IconButton onClick={() => removeFromCart(item.id)} sx={{ color: '#ff4444' }}><DeleteIcon /></IconButton>
            </Paper>
          ))}
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, bgcolor: '#1e1e1e', border: '2px solid #ff9800' }}>
            <Typography variant="h5" sx={{ color: '#fff', mb: 3 }}>Total: ${totalPrice}</Typography>
            <Button variant="contained" fullWidth sx={{ bgcolor: '#ff9800' }}>CHECKOUT</Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Cart;