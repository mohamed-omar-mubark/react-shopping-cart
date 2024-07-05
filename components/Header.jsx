// lib components
import { Button } from "primereact/button";

const Header = ({ cartItemsCount }) => {
  return (
    <header className="py-3 px-4 bg-white">
      <div className="container flex-between-center">
        <h1 className="text-2xl font-bold">React Shopping Cart</h1>
        <div className="shopping-cart-btn">
          <Button
            icon="pi pi-shopping-cart"
            rounded
            text
            size="large"
            severity="secondary"
            className="hover:text-primary"
          />
          <span className="cart-items-count flex-center bg-primary text-white">
            {cartItemsCount}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
