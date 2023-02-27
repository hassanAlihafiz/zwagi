import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { asPrice, asNumber, asDate } from "utils/text";
import { varLabel } from "utils/var";
import { Table } from "antd";
import { countryByCode } from "utils/var/country";
export default function Confirmation(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [productNames, setProductNames] = useState("");
  const [donateNames, setDonateNames] = useState("");
  const [subtotalPrice, setSubtotalPrice] = useState(0);
  const [subtotalDMPrice, setSubtotalDMPrice] = useState(0);

  const [productData, setProduct] = useState(undefined);
  const [donateData, setdonate] = useState(undefined);
  const teamDetails = useSelector((state) => state.checkout.teamDetails);

  const columns = [
    {
      title: "Title",
      key: "title",
      dataIndex: "title",
    },
    {
      title: "Quantity",
      key: "quantity",
      dataIndex: "quantity",
    },
    {
      title: "Unit price",
      key: "unit_price",
      dataIndex: "unit_price",
      render: (text) => <>{asPrice(text)}</>,
    },
    {
      title: "Shipping Price",
      key: "shipping_price",
      dataIndex: "shipping_price",
      render: (text) => <>{asPrice(text)}</>,
    },
    {
      title: "Price",
      key: "price",
      dataIndex: "price",
      render: (text) => <>{asPrice(text)}</>,
    },
  ];
  const columnsD = props.isRegisterTeam ? [
    {
      title: "Title",
      key: "title",
      dataIndex: "title",
    },
    {
      title: "Price",
      key: "price",
      dataIndex: "price",
      render: (text) => <>{asPrice(text)}</>,
    },
    {
      title: "Frequency",
      key: "cycle",
      dataIndex: "cycle",
      render: (text) => (
        <>{text === 1 ? "One-Time" : text === 2 ? "Weekly" : "Monthly"}</>
      ),
    },
  ] : [
    {
      title: "Title",
      key: "title",
      dataIndex: "title",
    },
    {
      title: "Price",
      key: "price",
      dataIndex: "price",
      render: (text) => <>{asPrice(text)}</>,
    },
  ];

  const [tableData, setTableData] = useState([]);
  const [tableDData, setTableDData] = useState([]);

  useEffect(() => {
    if (props.confirmResult) {
      let subtotalDMPrice_ = 0;
      let subtotalPrice_ = 0;
      props.confirmResult.orders &&
        props.confirmResult.orders.length > 0 &&
        props.confirmResult.orders.map((el) => {
          subtotalDMPrice_ += Number(el.order_total_amount);
          if (el.is_donate === 1) {
            setdonate(el);
            const orderDetails = el.details;
            let tData = [];
            orderDetails.map((el) => {
              subtotalPrice_ += el.price * el.quantity;
              tData.push({
                title: el.product.title,
                cycle: el.cycle,
                price: el.total_amount,
              });
            });
            setTableDData(tData);
          } else {
            const orderDetails = el.details;
            const productNames = orderDetails
              .map(
                (el) =>
                  `${el.product.title} (${
                    el.product.variant == 1
                      ? "SM"
                      : el.product.variant == 2
                      ? "M"
                      : el.product.variant == 3
                      ? "L"
                      : el.product.variant == 4
                      ? "XL"
                      : el.product.variant == 5
                      ? "2XL"
                      : "3XL"
                  })`
              )
              .join(", ");
            let tData = [];
            orderDetails.map((el) => {
              subtotalPrice_ += el.product.price * el.quantity;
              tData.push({
                title: `${el.product.title} (${
                  el.product.variant == 1
                    ? "SM"
                    : el.product.variant == 2
                    ? "M"
                    : el.product.variant == 3
                    ? "L"
                    : el.product.variant == 4
                    ? "XL"
                    : el.product.variant == 5
                    ? "2XL"
                    : "3XL"
                })`,
                quantity: el.quantity,
                unit_price: el.price,
                shipping_price: el.shipping_price,
                price: el.total_amount,
              });
            });
            setProductNames(productNames);
            setTableData(tData);
          }
        });
      setSubtotalPrice(subtotalPrice_);
      setSubtotalDMPrice(subtotalDMPrice_);
    }
  }, [props.confirmResult]);

  useEffect(() => {
    dispatch({
      type: "CLEAR_CART",
    });
  }, []);

  const goHome = () => {
    router.push("/");
    window.scroll(0, 0);
  };
  const goBackoffice = () => {
    const { username } = props.confirmResult.user;
    const password = btoa(props.rawPassword);
    window.location = `${process.env.NEXT_PUBLIC_BACKOFFICE}/login?autologin=${username}&token=${password}`;
    // window.open(`${process.env.NEXT_PUBLIC_BACKOFFICE}`, '_blank')
  };

  return (
    <div className="wrapper order-completion">
      <div className="d-flex flex-column align-items-center">
        {props.confirmResult && (
          <>
            {props.confirmResult.orders[0]?.is_flagged === 1 && (
              <>
                <img
                  src={"/images/check-failed.svg"}
                  className="confirmed-img"
                />
                <h2>We have detected fraud activity.</h2>
                <p>
                  Please go to your account and upload picture of your identity
                  card and credit card.
                </p>
              </>
            )}
            {props.confirmResult.orders[0]?.is_flagged === 2 && (
              <>
                <img
                  src={"/images/check-confirmed.svg"}
                  className="confirmed-img"
                />
                <h2>Your order is complete!</h2>
                <p className="order-complete-label">
                  Welcome to the Zwagil Foundation We’ll take it from here.
                  <br />
                  We’ve sent a confirmation email to{" "}
                  <strong>{props.confirmResult.user.email}</strong>
                </p>
              </>
            )}
            <div style={{ width: "100%" }}>
              <h4>Details</h4>
              {productNames && (
                <p>
                  You purchased the <strong>{productNames}</strong>
                </p>
              )}
              {donateData &&
                donateData.details &&
                donateData.details.length > 0 &&
                donateData.details.map((el) => {
                  return (
                    props.isRegisterTeam ? <p>
                      You donated <strong>{asPrice(el.price)}</strong> to{" "}
                      <strong>{el.title}</strong> as{" "}
                      <strong>
                        {el.cycle === 1
                          ? "One-Time"
                          : el.cycle === 2
                          ? "Weekly"
                          : "Monthly"}
                      </strong>
                    </p> : 
                    <p>
                    You have created a team <strong>{teamDetails.team_name}</strong> with{" "}
                    <strong>{teamDetails.team_size}</strong> members
                  </p>
                  );
                })}
              <p>
                You will be charged <strong>{asPrice(subtotalDMPrice)}</strong>
              </p>
              <div className="confirm-box confirm-box-2">
                <div className="d-flex justify-content-between">
                  <div className="col-sm-12 col-md-12 customer-container">
                    <p>
                      <strong>Customer Information</strong>
                    </p>
                    <p>
                      {props.confirmResult.user.first_name +
                        " " +
                        props.confirmResult.user.last_name}
                    </p>
                    <p>
                      {props.confirmResult.user.billing_detail.billing_address}
                    </p>
                    <p>
                      {
                        props.confirmResult.user.billing_detail
                          .billing_address_line2
                      }
                    </p>
                    <p>{`${
                      props.confirmResult.user.billing_detail.billing_city
                    }, ${
                      props.confirmResult.user.billing_detail.billing_state
                    } ${
                      props.confirmResult.user.billing_detail.billing_zipcode
                    }, ${countryByCode(
                      props.confirmResult.user.billing_detail.billing_country
                    )}`}</p>
                  </div>
                </div>
              </div>

              <div className="confirm-box">
                <p>
                  <strong>Payment Method</strong>
                </p>
                <p>
                  {varLabel(
                    "payment.method",
                    props.confirmResult.user.billing_detail.cc_type
                  )}{" "}
                  ending in{" "}
                  <strong>
                    {props.confirmResult.user.billing_detail &&
                    props.confirmResult.user.billing_detail.last_cc_4
                      ? props.confirmResult.user.billing_detail.last_cc_4
                      : props.confirmResult.user.billing_detail?.cc_number?.slice(
                          props.confirmResult.user.billing_detail.cc_number
                            .length - 4
                        )}
                  </strong>
                </p>
              </div>
              {tableData && tableData.length > 0 && (
                <div className="confirm-box">
                  <p>
                    <strong>Merchandise Items</strong>
                  </p>
                  <Table
                    className="table-line-items"
                    columns={columns}
                    dataSource={tableData}
                    pagination={false}
                  />
                </div>
              )}

              {tableDData && tableDData.length > 0 && (
                <div className="confirm-box">
                  <p>
                    <strong>Donate Items</strong>
                  </p>
                  <Table
                    className="table-line-items"
                    columns={columnsD}
                    dataSource={tableDData}
                    pagination={false}
                  />
                </div>
              )}
              <div className="d-flex justify-content-between">
                <p>Order Number</p>
                <p>{props.confirmResult.orders[0]?.order_number}</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Order Date</p>
                <p>{asDate(props.confirmResult.orders[0]?.created_at)}</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Subtotal</p>
                <p>{asPrice(subtotalPrice)}</p>
              </div>
              {props.isRegisterTeam &&
              <div className="d-flex justify-content-between">
                <p>Shipping</p>
                <p>{asPrice(props.confirmResult.orders[0]?.shipping_price)}</p>
              </div>
              }
              <div className="d-flex justify-content-between">
                <p>Tax</p>
                <p>{asPrice(props.confirmResult.orders[0]?.tax_amount)}</p>
              </div>
              {props.confirmResult.promotion && (
                <div className="d-flex justify-content-between">
                  <p>Promotion Code</p>
                  <p>{props.confirmResult.promotion.discount_code}</p>
                </div>
              )}
              {props.confirmResult.orders[0]?.order_total_discount &&
                Number(props.confirmResult.orders[0]?.order_total_discount) >
                  0 && (
                  <div className="d-flex justify-content-between">
                    <p>Discount Amount</p>
                    <p>
                      -
                      {asPrice(
                        props.confirmResult.orders[0]?.order_total_discount
                      )}
                    </p>
                  </div>
                )}
              <div className="d-flex justify-content-between total-price">
                <p>Total</p>
                <p>{asPrice(subtotalDMPrice)}</p>
              </div>
              <div className="d-flex justify-content-center buttons-content">
                <button className="btn btn-seconFry btn-back" onClick={goHome}>
                  Return to Homepage
                </button>
                {!props.isGuest && (
                  <button className="btn btn-primary" onClick={goBackoffice}>
                    Access My Account
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
      <style jsx>{`
        .wrapper {
          width: 700px;
          margin: 30px auto;
        }
        @media (max-width: 700px) {
          .wrapper {
            width: calc(100% - 20px);
            margin-left: 10px;
          }
          .confirm-box .d-flex {
            flex-direction: column;
          }
        }
        @media (max-width: 768px) {
          .confirm-box-2 .d-flex {
            flex-direction: column;
          }
        }
        h2 {
          color: #1a4798;
          font-size: 24px;
          margin-top: 12px;
        }
        h4 {
          color: #1a4798;
          font-size: 20px;
          margin-top: 24px;
        }
        .confirmed-img {
          width: 60px;
          height: 60px;
        }
        .btn-checkout {
          margin: 0 8px;
        }
        .confirm-box {
          border: 1px solid #e2e2e2;
          box-sizing: border-box;
          border-radius: 4px;
          padding: 24px;
          margin: 20px 0;
        }
        .total-price {
          font-size: 16px;
          font-weight: 700;
          color: #000;
        }
        .btn-checkout {
          width: 180px;
        }
        .btn-back {
          margin-right: 12px;
        }
        .customer-container {
          max-width: 100%;
        }
        .buttons-content button {
          max-width: 170px;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
}
