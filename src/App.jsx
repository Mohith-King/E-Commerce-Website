import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./Pages/Navbar";
import Landing from "./Pages/Landing";
import Products from "./Pages/Products";
import BrowseCategory from "./Pages/BrowseCategory";
import NewArrivals from "./Pages/NewArrivals";
import Signup from "./Pages/Signup";
import Topselling from "./Pages/Topselling";
import { Toaster } from "react-hot-toast";
import Cart from "./Components/Cart";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const cachedProducts = localStorage.getItem("products");

        if (cachedProducts) {
          setProducts(JSON.parse(cachedProducts));
          setLoading(false);
          return;
        }

        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products",
        );

        const data = await response.json();

        setProducts(data);
        localStorage.setItem("products", JSON.stringify(data));
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Router>
      <div>
        <Toaster />
      </div>
      <main className="min-h-screen w-full overflow-x-hidden">
        <Navbar />

        <Routes>
          <Route path="/" element={<Landing products={products} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/browse" element={<BrowseCategory />} />

          <Route
            path="/new-arrivals"
            element={<NewArrivals products={products} loading={loading} />}
          />

          <Route
            path="/topselling"
            element={<Topselling products={products} loading={loading} />}
          />

          <Route
            path="/cart"
            element={<Cart products={products} loading={loading} />}
          />

          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
