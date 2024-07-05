import { useState } from "react";
import Cart from "../components/Cart";
import Header from "../components/Header";

const App = () => {
  const initialCart = [
    {
      id: 1,
      name: "Burger",
      image:
        "https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quantity: 0,
    },
    {
      id: 2,
      name: "Fries",
      image:
        "https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quantity: 0,
    },
    {
      id: 3,
      name: "Apple",
      image:
        "https://images.pexels.com/photos/162709/apple-red-fruit-fruits-162709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quantity: 0,
    },
  ];

  const [shoppingCart, setShoppingCart] = useState(initialCart);

  const increaseQuantity = (id) => {
    setShoppingCart(
      shoppingCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setShoppingCart(
      shoppingCart.map((item) =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setShoppingCart(shoppingCart.filter((item) => item.id !== id));
  };

  const resetQuantities = () => {
    setShoppingCart(shoppingCart.map((item) => ({ ...item, quantity: 0 })));
  };

  const cartItemsCount = shoppingCart.reduce(
    (count, item) => count + item.quantity,
    0
  );

  return (
    <div>
      <Header cartItemsCount={cartItemsCount} />
      <Cart
        shoppingCart={shoppingCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeItem={removeItem}
        resetQuantities={resetQuantities}
      />
    </div>
  );
};

export default App;
