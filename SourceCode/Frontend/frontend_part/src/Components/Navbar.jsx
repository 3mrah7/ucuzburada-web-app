import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Badge,
  InputBase
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const totalItems = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const handleSearch = (e) => {
    if (e.key === "Enter" && search.trim()) {
      navigate(`/products?search=${search}`);
      setSearch("");
    }
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#111",
        borderBottom: "2px solid #ff9800",
        boxShadow: "0px 4px 20px rgba(255, 152, 0, 0.4)"
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LOGO */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            color: "#ff9800",
            textDecoration: "none",
            fontWeight: "bold",
            textShadow: "0 0 12px rgba(255, 152, 0, 0.7)"
          }}
        >
          UCUZBURADA
        </Typography>

        {/* SEARCH */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#1a1a1a",
            border: "1px solid #ff9800",
            borderRadius: "999px",
            px: 2,
            py: 0.5,
            width: 280,
            transition: "0.3s",
            "&:focus-within": {
              boxShadow: "0 0 12px rgba(255,152,0,0.7)"
            }
          }}
        >
          <SearchIcon sx={{ color: "#ff9800", mr: 1 }} />
          <InputBase
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearch}
            sx={{
              color: "white",
              width: "100%",
              fontSize: "0.95rem"
            }}
          />
        </Box>

        {/* LINKS */}
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Button
            color="inherit"
            component={Link}
            to="/products"
            sx={{ "&:hover": { color: "#ff9800" } }}
          >
            Products
          </Button>

          <Button color="inherit" component={Link} to="/cart">
            <Badge
              badgeContent={totalItems}
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#ff9800",
                  color: "#000"
                }
              }}
            >
              <ShoppingCartIcon sx={{ color: "#ff9800" }} />
            </Badge>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
