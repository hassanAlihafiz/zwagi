import { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { callPostApi } from "utils/api";
import { message, Spin } from "antd";
import { asNumber, asPrice } from "utils/text";
import Cookies from "universal-cookie";

export default function SideCart(props) {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const userType = cookies.get("bepicUserType");
  const orderDetails = useSelector((state) => state.checkout.orderDetails);
  const [promotionCode, setPromotionCode] = useState("");
  const [totalItems, setTotalItems] = useState(0);
  const [totalPv, setTotalPv] = useState(0);
  const [totalCv, setTotalCv] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const router = useRouter();
  const { page } = router.query;
  const changeAble =
    props.step == "choose-type" ||
    props.step == "info-form" ||
    props.step == "shipping-form";
  useEffect(() => {
    let totalItems = 0,
      totalPv = 0,
      totalCv = 0,
      totalPrice = 0;
    for (let item of orderDetails) {
      totalItems += item.quantity * 1;
      totalPv += item.product.pv * item.quantity;
      totalCv += item.product.cv * item.quantity;
      totalPrice += item.product.price * item.quantity;
    }
    totalPrice -= props.discountAmount;
    totalPrice += props.shippingPrice ? props.shippingPrice * 1 : 0;
    totalPrice += props.tax ? props.tax * 1 : 0;
    setTotalItems(totalItems);
    setTotalPv(totalPv);
    setTotalCv(totalCv);
    setTotalPrice(totalPrice);
  }, [orderDetails, props.shippingPrice, props.tax, props.discountAmount]);
  const checkPromotion = () => {
    if (!promotionCode) {
      message.error("Please input Promotion Code.");
      return;
    }
    let data = {
      userType: userType,
      promoCode: promotionCode,
    };
    let orderDetails_ = [];
    for (let item of orderDetails) {
      orderDetails_.push({
        product_id: item.product.id,
        quantity: item.quantity,
      });
    }
    data["orderDetails"] = orderDetails_;
    setIsLoading(true);
    callPostApi("check/promo_code", data, onSuccessPromotion, onFailPromotion);
  };
  const onSuccessPromotion = (data) => {
    setIsLoading(false);
    props.setConfirmedPromotion({
      discountAmount: data.data.orderTotalDiscount,
      promotionCode,
    });
  };
  const onFailPromotion = (errMessage) => {
    setIsLoading(false);
    message.error(errMessage);
  };

  const subtraction = (product) => {
    dispatch({
      type: "ADD_CART",
      payload: {
        product: product,
        quantity: -1,
      },
    });
  };

  const addition = (product) => {
    dispatch({
      type: "ADD_CART",
      payload: {
        product: product,
        quantity: 1,
      },
    });
  };
  return (
    <>
      <div className={`sidebar-cart`}>
        <h4>Order Summary</h4>
        {orderDetails.map((el, index) => (
          <div
            className="d-flex justify-content-between product-item"
            key={index}
            style={{ marginBottom: 15 }}
          >
            <div className="image-section">
              <div
                style={{
                  width: 90,
                  height: 90,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={el.product.image}
                  style={{
                    width: "auto",
                    maxWidth: "100%",
                    height: "auto",
                    maxHeight: "100%",
                  }}
                />
              </div>
            </div>
            <div className="desc-section">
              <div className="d-flex justify-content-between">
                <p className="product-title">
                  {page == "registerteam" ? "" : "Donation -"} {el.product["title"]}
                </p>
                <p className="product-price text-right">
                  <span>{asPrice(el.product["price"])}</span>
                </p>
              </div>
              {el.cycle ? (
                <div className="d-flex justify-content-between">
                  <p className="qty">
                    FREQUENCY -{" "}
                    {el.cycle === 1
                      ? "ONE-TIME"
                      : el.cycle === 2
                        ? "WEEKLY"
                        : el.cycle === 3
                          ? "MONTHLY"
                          : ""}
                  </p>
                  <p className="product-volume"> </p>
                </div>
              ) : (
                  <div className="d-flex justify-content-between">
                    <p className="qty">QTY:&nbsp;{el.quantity}</p>
                    {el.size && (
                      <p className="product-volume">
                        Size: {' '}{el.size === 1
                          ? "SM"
                          : el.size === 2
                            ? "M"
                            : el.size === 3
                              ? "L"
                              : el.size === 4
                                ? "XL"
                                : el.size === 5
                                  ? "2XL"
                                  : "3XL"}
                      </p>
                    )}
                  </div>
                )}
            </div>
          </div>
        ))}
        <div className="line" />
        {/* {props.tax === undefined && (
          <>
            <p>Discount Code</p>
            <div className="d-flex">
              <input
                type="text"
                value={promotionCode}
                onChange={(e) => setPromotionCode(e.target.value)}
              />
              <button
                className="btn btn-primary"
                onClick={checkPromotion}
                style={{ marginLeft: 12 }}
              >
                Apply
              </button>
            </div>
            <div className="line" />
          </>
        )} */}
        <div className="order-summary">
          <div className="d-flex justify-content-between">
            <p>Items</p>
            <p>{totalItems}</p>
          </div>
          {/* <div className="d-flex justify-content-between">
            <p>CV</p>
            <p>{totalBv}</p>
          </div> */}
          {props.promotionCode ? (
            <div className="d-flex justify-content-between">
              <p>Applied Code</p>
              <p>{props.promotionCode}</p>
            </div>
          ) : (
              ""
            )}

          {props.shippingPrice != undefined ? (
            <div className="d-flex justify-content-between">
              <p>Shipping Price</p>
              <p>{asPrice(props.shippingPrice)}</p>
            </div>
          ) : (
              ""
            )}
          {props.tax != undefined ? (
            <div className="d-flex justify-content-between">
              <p>Tax</p>
              <p>{asPrice(props.tax)}</p>
            </div>
          ) : (
              ""
            )}
          <div className="d-flex justify-content-between">
            <p className="total-text">Total</p>
            <p className="total-text">
              <strong>{asPrice(totalPrice)}</strong>
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .sidebar-cart {
          width: 374px;
          background-color: #fff;
          z-index: 71;
          padding: 60px 30px 30px 30px;
          box-shadow: 1px 0px 5px 0px rgba(224, 224, 224, 0.5);
        }
        @media (max-width: 1000px) {
          .sidebar-cart {
            width: 100%;
          }
        }
        .product-thumb {
          width: 90px;
          height: 110px;
        }
        p {
          margin-bottom: 8px;
          opacity: 0.5;
        }
        .product-item {
          margin-bottom: 6px;
        }
        .image-section {
        }
        .desc-section {
          width: calc(100% - 100px);
        }
        .product-title {
          font-weight: bold;
          opacity: 1;
        }
        .product-price {
          margin-left: 12px;
          opacity: 1;
        }
        .qty {
          font-size: 11px;
        }
        .line {
          background-color: #c4c4c4;
          height: 1px;
          width: 100%;
          margin: 24px 0;
        }
        .justify-content-between {
          justify-content: space-between;
        }
        .justify-content-end {
          justify-content: flex-end;
        }
        .checkout-btn {
          margin-top: 24px;
          width: 138px;
          height: 36px;
          background: #1a4798;
          border-radius: 4px;
          color: #fff;
          border: 0 none;
        }
        .total-price p {
          color: #000;
          font-size: 16px;
          opacity: 1;
          font-size: 400;
        }
        .total-text {
          font-size: 16px;
          color: #000;
          font-weight: 700;
          opacity: 1;
        }
      `}</style>
    </>
  );
}
