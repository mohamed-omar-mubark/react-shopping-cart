// components
import Header from "../components/Header";
import Home from "./Home";
import About from "./About";
import Team from "../components/Teams";
import News from "../components/News";

// useCart
import { useCart } from "../../contexts/CartContext";

// react router nav link
import { Route, Routes } from "react-router-dom";

const App = () => {
  const { cartItemsCount } = useCart();

  return (
    <div>
      <Header cartItemsCount={cartItemsCount} />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}>
          <Route path="teams" element={<Team />} />
          <Route path="news" element={<News />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
