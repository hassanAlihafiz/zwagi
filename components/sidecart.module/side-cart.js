import { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { asPrice } from "utils/text";
import Cookies from "universal-cookie";
import { callPostApi } from "utils/api";
import { message, Spin } from "antd";

export default function SideCart(props) {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const router = useRouter();
  const isOpened = useSelector((state) => state.ui.isOpenedSideCart);
  const wrapperRef = useRef(null);
  const orderDetails = useSelector((state) => state.checkout.orderDetails);
  const distCenter = useSelector((state) => state.mlm.distCenter);
  const userType = cookies.get("bepicUserType");
  const [totalItems, setTotalItems] = useState(0);
  const [totalPv, setTotalPv] = useState(0);
  const [totalCv, setTotalCv] = useState(0);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      dispatch({
        type: "HIDE_SIDE_CART",
      });
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });
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
    setTotalItems(totalItems);
    setTotalPv(totalPv);
    setTotalCv(totalCv);
    setTotalPrice(totalPrice);
  }, [orderDetails]);

  const goCheckout = () => {
    router.push("/checkout");
    window.scroll(0, 0);
  };

  const checkInventory = () => {
    setIsSubmiting(true);
    let orderDetails_ = [];
    for (let item of orderDetails) {
      if (item.cycle) {
        orderDetails_.push({
          product_id: item.product.id,
          quantity: item.quantity,
          amount: item.amount,
          cycle: item.cycle,
        });
      } else {
        orderDetails_.push({
          product_id: item.product.id,
          quantity: item.quantity,
        });
      }
    }
    let data = {
      dist_center_id: distCenter.id,
    };
    data["orderDetails"] = orderDetails_;
    callPostApi(
      `check/valid_inventory_detail`,
      data,
      onSuccessCheckout,
      onFailCheckout
    );
  };

  const onSuccessCheckout = (data) => {
    setIsSubmiting(false);
    goCheckout();
  };
  const onFailCheckout = (errMessage) => {
    setIsSubmiting(false);
    message.error({
      content: typeof errMessage === "object" ? errMessage.message : errMessage,
      style: {
        marginTop: "0px",
      },
    });
  };

  const handleCloseSideCart = () => {
    dispatch({
      type: "HIDE_SIDE_CART",
    });
  };
  const handleRemoveCart = (product_id) => {
    dispatch({
      type: "REMOVE_CART",
      payload: { product_id },
    });
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
      <div
        className={`sidebar-cart ${isOpened ? "opened" : ""}`}
        ref={wrapperRef}
      >
        <h4>Your Cart</h4>
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
                  Donation - {el.product["title"]}
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
                      Size:{" "}
                      {el.size === 1
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
              <div className="d-flex">
                <p
                  className="remove-cart"
                  onClick={() => handleRemoveCart(el.product.id)}
                >
                  Remove
                </p>
              </div>
            </div>
          </div>
        ))}
        {orderDetails.length == 0 ? (
          <div className="d-flex">
            <p>There are no items.</p>
          </div>
        ) : (
          ""
        )}
        <div className="line" />
        <h4>Order Summary</h4>
        <div className="order-summary">
          <div className="d-flex justify-content-between">
            <p>Items</p>
            <p>{totalItems}</p>
          </div>
          {/* <div className="d-flex justify-content-between">
            <p>CV</p>
            <p>{totalBv}</p>
          </div> */}
          <div className="d-flex justify-content-between">
            <p>Total</p>
            <p>
              <strong>{asPrice(totalPrice)}</strong>
            </p>
          </div>
          <div className="d-flex justify-content-between action-row">
            <button className="btn btn-secondary" onClick={handleCloseSideCart}>
              Continue Shopping
            </button>
            <Spin spinning={isSubmiting}>
              <button
                onClick={checkInventory}
                className="btn btn-primary"
                disabled={orderDetails.length == 0}
              >
                Checkout
              </button>
            </Spin>
          </div>
        </div>
      </div>
      {isOpened && <div className="opacity-bg" />}
      <style jsx>{`
        .sidebar-cart {
          position: fixed;
          right: -374px;
          top: 0;
          height: 100vh;
          width: 374px;
          background-color: #fff;
          z-index: 171;
          padding-top: 111px;
          padding: 140px 30px 30px 30px;
          box-shadow: 1px 0px 5px 0px rgba(224, 224, 224, 0.5);
          overflow-y: auto;
        }
        .sidebar-cart.opened {
          transition: all 0.3s ease-in-out;
          right: 0;
        }
        .opacity-bg {
          position: fixed;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          z-index: 70;
          opacity: 0.25;
          background: #000;
        }
        .image-section {
        }
        .product-item {
          margin-bottom: 6px;
        }
        .desc-section {
          width: calc(100% - 100px);
        }
        .product-thumb {
          width: 90px;
          height: 90px;
        }
        p {
          margin-bottom: 8px;
          opacity: 0.5;
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
        .remove-cart {
          font-size: 10px;
          color: #ff0000;
          opacity: 0.5;
          cursor: pointer;
        }
        .line {
          background-color: #c4c4c4;
          height: 1px;
          width: 100%;
          margin: 24px 0;
        }
        .action-row {
          margin-top: 24px;
        }
      `}</style>
    </>
  );
}
