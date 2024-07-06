// component
import Cart from "../components/Cart";

// useCart
import { useCart } from "../../contexts/CartContext";

const Home = () => {
  const {
    shoppingCart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    resetQuantities,
  } = useCart();

  return (
    <Cart
      shoppingCart={shoppingCart}
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
      removeItem={removeItem}
      resetQuantities={resetQuantities}
    />
  );
};

export default Home;
