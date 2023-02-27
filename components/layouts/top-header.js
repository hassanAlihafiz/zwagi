import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactCountryFlag from "react-country-flag";
import Link from "next/link";
import { useRouter } from "next/router";
import { countryCodeByName } from "utils/var/country";
import { callGetApi } from "utils/api";
import Cookies from "universal-cookie";

export default function TopHeader() {
  const cookies = new Cookies();
  const [country, setCountry] = useState("US");
  const dispatch = useDispatch();

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
    fetch('https://extreme-ip-lookup.com/json')
    .then( res => res.json())
    .then(res => {
      let country = countryCodeByName(res.country);
      setCountry(country)
      dispatch({
        type: 'SET_COUNTRY',
        payload: country
      })      
    })
    .catch((data, status) => {
      console.log('Request failed');
    })
  }, [])

  const openEnroller = () => {
    setIsOpenedEnroller(true);
  };

  return (
    <div className="top-header">
      <div className="container-full d-flex justify-content-between">
        <ul className="nav navbar-nav navbar-left">
          <li style={{ marginTop: 3 }}>
            <a
              href="#"
              style={{
                border: "none",
                display: "flex",
                alignItems: "center",
                marginTop: 2,
              }}
            >
              <ReactCountryFlag
                countryCode={country}
                svg
                style={{ width: 35, height: 20, marginLeft: 10 }}
              />
            </a>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right ">
          <li>
            <a href={process.env.NEXT_PUBLIC_BACKOFFICE}>
              <i className="fa fa-user" /> Member Login
            </a>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .top-header {
          height: 30px;
          background: #3AC7FF;
          position: fixed;
          z-index: 8888;
          top: 0;
          left: 0;
          width: 100%;
        }

        .top-header .navbar-left li a {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 1px;
          padding: 0 0 9px 30px;
          margin: 9px 30px 0 0;
          color: #fff;
        }

        .top-header .navbar-left li a:hover {
          background: none;
          border-bottom: 2px solid #dba453;
        }

        .top-header .navbar-left li {
        }

        .top-header .navbar-left {
          margin: 0;
        }

        .top-header .navbar-right li a {
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 1px;
          padding: 0 30px 9px;
          margin: 9px 0 0 15px;
          color: #bff0ff;
        }

        .top-header .navbar-right li a img {
          width: 18px;
        }

        .top-header .navbar-right li a span {
          width: 12px;
          height: 12px;
          background: #99dbf4;
          display: inline-block;
          border-radius: 20px;
          font-size: 10px;
          line-height: 12px;
          text-align: center;
          position: absolute;
          color: #fff;
        }

        .top-header .navbar-right li {
          display: inline;
        }

        .top-header .navbar-right {
          margin: 1px 0 0 0;
          display: inline;
        }
      `}</style>
    </div>
  );
}
