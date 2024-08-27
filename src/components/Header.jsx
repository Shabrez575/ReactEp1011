import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// Header component
const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  console.log("Header2");

  // If no dependency array is passed, useEffect will run on every render
  /*
  useEffect(() => {
    console.log("useEffect Called Header");
  });
*/
  // If dependency array is passed but empty, then useEffect will run only on initial render
  /*
  useEffect(() => {
    console.log("useEffect Called Header");
  }, []);
*/
  // If dependency array is passed and contains some value, then useEffect will run only on initial render and on every re-render when the value of the dependency array changes.

  useEffect(() => {
    console.log("useEffect Called Header");
  }, [btnNameReact]);

  return (
    <div className="navbar sticky-top navbar-light bg-light d-flex shadow-lg p-1 justify-content-between">
      <div className="logo-container">
        <img className="w-25 m-4" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul className="d-flex p-5">
          <li className="px-2 list-unstyled">
            Online Status:{useOnlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-2 list-unstyled  link-underline-opacity-0">
            <Link className="text-decoration-none" to="/">
              Home
            </Link>
          </li>
          {/* In this case whole page is load */}
          {/* <li>
            <a href="/about">About</a>
          </li> */}
          {/* In this case the whole is not laod  it will only load the particular component only  */}
          <li className="px-2 list-unstyled">
            <Link className="text-decoration-none" to="/about">
              About
            </Link>
          </li>
          <li className="px-2 list-unstyled">
            <Link className="text-decoration-none" to="/contact">
              Contact
            </Link>
          </li>
          <li className="px-2 list-unstyled ">Cart</li>
          <li className="px-2 list-unstyled">
            <Link className="text-decoration-none" to="/grocery">
              Grocery
            </Link>
          </li>
          <li
            className="px-4
            list-unstyled"
          >
            <button
              className="btn btn-dark"
              onClick={() => {
                if (btnNameReact === "Login") {
                  setbtnNameReact("Logout");
                  console.log(btnNameReact);
                } else {
                  setbtnNameReact("Login");
                  console.log(btnNameReact);
                }
              }}
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
