import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Navbar from "./components/navbar/Navbar";
import PageContainer from "./containers/PageContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from "../src/pages/Detail"
import Cart from "../src/pages/Cart"
import Search from "./pages/Search";

function App() {
  return (
    <div>
      <PageContainer>
      <Router>
    <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Detail />}  />
          <Route path="/cart" element={<Cart />}  />
          <Route path="/products/:search" element={<Search />}  />
        </Routes>
      </Router>
      </PageContainer>
    </div>
  );
}

export default App;
