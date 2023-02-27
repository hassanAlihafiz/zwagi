import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { callGetApi } from "utils/api";
import { useDispatch, useSelector } from "react-redux";
import { Badge } from "antd";
import Cookies from "universal-cookie";

export default function Header() {
  const cookies = new Cookies();
  const { pathname } = useRouter();
  const dispatch = useDispatch();
  const [totalItems, setTotalItems] = useState(0);
  const orderDetails = useSelector((state) => state.checkout.orderDetails);
  const [country, setCountry] = useState("US");

  useEffect(() => {
    let totalItems = 0;
    orderDetails.map((el) => {
      totalItems += el.quantity * 1;
    });
    setTotalItems(totalItems);
  }, [orderDetails]);

  const handleOpenSideCart = () => {
    if (pathname == "/checkout") return;
    dispatch({
      type: "OPEN_SIDE_CART",
    });
  };

  const onGetDistCenter = (res) => {
    dispatch({
      type: "FETCH_DISTRIBUTION_CENTER_SUCCESS",
      payload: res.data,
    });
    const cookies = new Cookies();
    cookies.set("bepicCountry", country, { path: "/", maxAge: 2592000 });
    cookies.set("bepicDistCenter", res.data, { path: "/", maxAge: 2592000 });
  };
  const onFailDistCenter = (errMessage) => {
    console.log(
      "No service for this country, Select another country.",
      errMessage
    );
  };
  useEffect(() => {
    if (country)
      callGetApi(`dist_center/${country}`, onGetDistCenter, onFailDistCenter);
  }, [country]);

  useEffect(() => {
    fetch("https://extreme-ip-lookup.com/json")
      .then((res) => res.json())
      .then((res) => {
        setCountryLabel(res.country);
        let country = countryCodeByName(res.country);
        setCountry(country);
        dispatch({
          type: "SET_COUNTRY",
          payload: country,
        });
      })
      .catch((data, status) => {
        console.log("Request failed");
      });
  }, []);
  return (
    <div className="header-full">
      <div className="container">
        <header className="home-header">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <Link href="/">
              <a className="navbar-brand">
                <img src="/images/logo.png" />
              </a>
            </Link>
            <div>
              <span className="nav-disapper">
                <Badge count={totalItems}>
                  <a href="javascript:void(0)" onClick={handleOpenSideCart}>
                    <img src="/images/shopping-cart.png" />
                  </a>
                </Badge>
              </span>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{
                  borderColor: "black !important",
                }}
              >
                <span
                  className="navbar-toggler-icon"
                  style={{
                    backgroundImage: 'url("/images/menu.png")',
                  }}
                ></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav mr-auto ml-auto mt-2 mt-lg-0 nav-rot">
                <li className={`nav-item ${pathname === "/" ? "active" : ""}`}>
                  <Link href="/">
                    <a className="nav-link">Home</a>
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    pathname === "/partners" ? "active" : ""
                  }`}
                >
                  <Link href="/partners">
                    <a className="nav-link">PARTNERS</a>
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    pathname === "/causes" ? "active" : ""
                  }`}
                >
                  <Link href="/causes">
                    <a className="nav-link">CAUSES</a>
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    pathname === "/media" ? "active" : ""
                  }`}
                >
                  <Link href="/media">
                    <a className="nav-link">MEDIA</a>
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    pathname === "/event" ? "active" : ""
                  }`}
                >
                  <Link href="/event">
                    <a className="nav-link">EVENTS</a>
                  </Link>
                </li>
                <li
                  className={`nav-item ${pathname === "/shop" ? "active" : ""}`}
                >
                  <Link href="/shop">
                    <a className="nav-link">SHOP</a>
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    pathname === "/contact" ? "active" : ""
                  }`}
                >
                  <Link href="/contact">
                    <a className="nav-link">CONTACT</a>
                  </Link>
                </li>
              </ul>
              <div className="form-inline my-2 my-lg-0">
                <ul className="navbar-nav mr-auto ml-auto mt-2 mt-lg-0 nav-sqr">
                  {/* <li className="nav-item">
                      <a href="#"><img src="images/search.png" /></a>
                    </li> */}
                  <li className="nav-item nav-appear">
                    <Badge count={totalItems}>
                      <a href="javascript:void(0)" onClick={handleOpenSideCart}>
                        <img src="/images/shopping-cart.png" />
                      </a>
                    </Badge>
                  </li>
                  <li className="nav-item register ">
                    <Link href="/donation">
                      <a>DONATE</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <style jsx>{`
          .nav-disapper {
            display: none;
          }
          .nav-appear {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .nav-disapper {
              display: inline-block;
              width: 20px;
              margin-right: 24px;
            }
            .nav-appear {
              display: none !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
