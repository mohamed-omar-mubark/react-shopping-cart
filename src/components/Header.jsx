// lib components
import { Button } from "primereact/button";

// react router nav link
import { NavLink } from "react-router-dom";

const Header = ({ cartItemsCount }) => {
  return (
    <header className="py-3 px-4 bg-white">
      <div className="container flex-between-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-2xl font-bold text-primary"
              : "text-2xl font-bold text-gray-500"
          }>
          Shop
        </NavLink>

        <ul className="flex-center gap-4">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-primary"
                  : "font-semibold text-gray-500"
              }>
              About
            </NavLink>
          </li>
        </ul>

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
