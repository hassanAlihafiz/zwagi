import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Radio, Spin } from "antd";
import Layout from "components/layouts/layout";
import ShopBanner from "components/shop.page/shop-banner";
import ProductCard from "components/shop.page/product-card";
import { callGetApi } from "utils/api";
import SelectUserTypeModal from "components/shop.page/select-user-type-modal";
import Cookies from "universal-cookie";

export default function ShopPage(props) {
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const [userType, setUserType] = useState(cookies.get("bepicUserType"));
  const distCenter = useSelector((state) => state.mlm.distCenter);
  const yourCountry = useSelector((state) => state.mlm.yourCountry);
  const products = useSelector((state) => state.products.products);
  const [isLoading, setIsLoading] = useState(false);
  const [disId, setDisId] = useState(null);

  const onChangeUserType = (userType_) => {
    if (userType != userType_) {
      dispatch({
        type: "CLEAR_CART",
      });
    }
    cookies.set("bepicUserType", userType_, { path: "/", maxAge: 259200 });
    setUserType(userType_);
    loadProducts(userType_);
  };
  const loadProducts = (userType_) => {
    setIsLoading(true);
    dispatch({
      type: "RECEIVE_PRODUCTS",
      payload: [],
    });
    if (!distCenter) return;
    const params = {
      page: 1,
      per_page: 100,
      dist_center_id: distCenter.id,
      user_type: userType_,
      country: yourCountry,
    };
    const q = Object.keys(params)
      .map((k) => k + "=" + params[k])
      .join("&");
    callGetApi(`products?${q}`, onGetProducts, onFailProducts);
  };
  const onGetProducts = (data) => {
    setIsLoading(false);
    dispatch({
      type: "RECEIVE_PRODUCTS",
      payload: data.data?.products,
    });
  };
  const onFailProducts = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    document.getElementsByTagName("body")[0].scrollTo(0, 0);
  });

  useEffect(() => {
    if (!distCenter) return;
    if (distCenter && distCenter.id !== disId) {
      setDisId(distCenter.id);
      loadProducts(userType);
    }
  }, [distCenter]);

  return (
    <Layout pageTitle="Shop">
      <div class="inner-pages" style={{ background: "white" }}>
        <div class="inner-banner">
          <img src="images/Group11.png" />
          <h2>Shop Now</h2>
        </div>
        <div class="inner-heading">
          <div class="inner-wrapper">
            <div class="row">
              <div class="col-sm-4">
                <h3>Merchandise With a Purpose</h3>
              </div>
              <div class="col-sm-8">
                <p>
                  Our merchandise items are stylish, comfortable, and serve a
                  greater purpose than just fashion. Show your support for the
                  Zwagil Foundation with our exclusive hats, hoodies, water
                  bottles and more and know that 100% of our merchandise profits
                  go to supporting our Partner Organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="inner-products">
          <div class="inner-wrapper">
            <div className="p-card">
              <div className="filter-text">Filter By:</div>
              <select>
                <option value={1}>Apparel</option>
              </select>
            </div>
            <div class="row">
              {isLoading ? (
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Spin size={"large"} />
                </div>
              ) : (
                products.map((product, index) => (
                  <ProductCard product={product} key={index} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
