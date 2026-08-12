import {
  Badge,
  Button,
  Dropdown,
  DropdownItem,
  Transition,
} from "@windmill/react-ui";
import { useCart } from "context/CartContext";
import { useUser } from "context/UserContext";
import { useState } from "react";
import { LogOut, ShoppingCart, User } from "react-feather";
import { useNavigate, Link } from "react-router-dom";

const Nav = () => {
  const { cartTotal } = useCart();
  const { isLoggedIn, userData, logout } = useUser();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const goTo = (path) => {
    setIsDropdownOpen(false);
    navigate(path);
  };

  const handleLogout = () => {
    setIsDropdownOpen(false);
    logout();
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between px-2 lg:px-36 py-2 shadow-lg fixed w-full bg-white top-0 z-10">
      <Link
        to="/"
        className="text-gray-700 text-2xl font-bold dark:text-gray-400"
      >
        <h1>PERN Store</h1>
      </Link>

      <ul className="flex space-x-4">
        {/* Logged out */}
        {!isLoggedIn && (
          <>
            <li>
              <Link
                to="/login"
                className="text-sm font-medium hover:text-blue-600"
              >
                Login
              </Link>
            </li>

            <li>
              <Link to="/cart" className="flex items-center">
                <span className="lg:block hidden">Cart</span>
                <ShoppingCart className="lg:hidden" />

                <Badge className="ml-2" type="danger">
                  {cartTotal}
                </Badge>
              </Link>
            </li>
          </>
        )}

        {/* Logged in */}
        {isLoggedIn && (
          <>
            <li>
              <Link to="/cart" className="flex items-center">
                <span className="lg:block hidden">Cart</span>
                <ShoppingCart className="lg:hidden" />

                <Badge className="ml-2" type="danger">
                  {cartTotal}
                </Badge>
              </Link>
            </li>

            <li className="relative">
              <Button
                layout="link"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
              >
                <span className="lg:block hidden">Account</span>
                <User className="lg:hidden" />
              </Button>

              <Transition
                show={isDropdownOpen}
                enter="transition ease-out duration-150 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dropdown
                  align="right"
                  isOpen={isDropdownOpen}
                  onClose={() => setIsDropdownOpen(false)}
                  className="z-10"
                >
                  <DropdownItem className="cursor-default text-gray-400 border-b flex flex-col items-start justify-start">
                    <p className="self-start">
                      {userData?.fullname}
                    </p>

                    <p className="self-start">
                      @{userData?.username}
                    </p>
                  </DropdownItem>

                  <DropdownItem onClick={() => goTo("/profile")}>
                    Profile
                  </DropdownItem>

                  <DropdownItem onClick={() => goTo("/orders")}>
                    Orders
                  </DropdownItem>

                  <DropdownItem
                    className="border-t"
                    onClick={handleLogout}
                  >
                    <div className="flex items-center">
                      <LogOut className="mr-2" size={18} />
                      Logout
                    </div>
                  </DropdownItem>
                </Dropdown>
              </Transition>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Nav;