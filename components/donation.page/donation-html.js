import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { causeList, cycleList, priceList } from "utils/var/payment";
import { useRouter } from "next/router";

export default function CausesHtml(props) {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(10);
  const [cycle, setCycle] = useState(1);
  const [productId, setProductId] = useState(1);
  const [productTitle, setProductTitle] = useState(
    "Fighting Human Trafficking"
  );
  const router = useRouter();
  const [error, setError] = useState(false);
  const orderDetails = useSelector((state) => state.checkout.orderDetails);

  useEffect(() => {
    if (router && router.query && router.query.id) {
      setProductId(router.query.id);
      causeList &&
        causeList.map((el) => {
          if (el.value == router.query.id) {
            setProductTitle(el.key);
          }
        });
    }
  }, []);

  const donateNow = () => {
    if (!amount) {
      setError(true);
      return;
    }
    let cart_quantity = 0;
    for (let item of orderDetails) {
      if (item.product.id == productId) {
        cart_quantity = item.quantity;
        break;
      }
    }
    if (productId == 5) {
      let donations = [
        {
          id: 1,
          title: "Human Trafficking",
        },
        {
          id: 2,
          title: "Feeding Children",
        },
        {
          id: 3,
          title: "Supporting Veterans",
        },
        {
          id: 4,
          title: "Protecting The Environment",
        },
      ];
      donations.map((el) => {
        dispatch({
          type: "ADD_CART",
          payload: {
            product: {
              id: el.id,
              title: el.title,
              image:
                el.id == 1
                  ? "/images/cau2.png"
                  : el.id == 2
                  ? "/images/cau3.png"
                  : el.id == 3
                  ? "/images/cau1.png"
                  : "/images/cau4.png",
              price: amount,
            },
            quantity: 1,
            amount,
            cycle,
          },
        });
      });
    } else {
      dispatch({
        type: "ADD_CART",
        payload: {
          product: {
            id: productId,
            title: productTitle,
            image:
              productId == 1
                ? "/images/cau2.png"
                : productId == 2
                ? "/images/cau3.png"
                : productId == 3
                ? "/images/cau1.png"
                : "/images/cau4.png",
            price: amount,
          },
          quantity: 1,
          amount,
          cycle,
        },
      });
    }

    setTimeout(() => {
      dispatch({
        type: "OPEN_SIDE_CART",
      });
    }, 1000);
  };
  return (
    <>
      <div class="inner-pages" style={{ background: "#F9F9F9" }}>
        <div class="inner-banner">
          <img src="images/Group8.jpg" />
          <h2>Make a difference, make a donation.</h2>
        </div>
        <div class="col-donate">
          <div class="inner-wrapper">
            <div class="row">
              <div class="col-md-6 col-lg-3">
                <img src="images/Group254.png" />
              </div>
              <div class="col-md-6 col-lg-5">
                <h6>YOU ARE DONATING TO:</h6>
                <h3>Zwagil Foundation</h3>
                <p>
                  Every donation, no matter how small or big, can make a huge
                  difference. Remember, pick the cause you’re most passionate
                  about! The Internal Revenue Service (IRS) recognizes the
                  Zwagil Foundation as a private foundation, exempt from federal
                  income tax under Internal Revenue Code Section 501(c)(3).
                  Contributions to the Zwagil Foundation are eligible for tax
                  deduction in the US.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="partnersdonate">
          <div class="inner-wrapper">
            <div class="row">
              <div class="col-md-6 col-lg-8">
                <h3>Our Partners</h3>
                <ul class="ctr">
                  <li>
                    <img src="images/p1.png" />
                  </li>
                  <li>
                    <img src="images/p2.png" />
                  </li>
                  <li>
                    <img src="images/p3.png" />
                  </li>
                  <li>
                    <img src="images/p4.png" />
                  </li>
                  <li>
                    <img src="images/p5.png" />
                  </li>
                </ul>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="dontae-box">
                  <h4>Select Donation Amount</h4>
                  <ul class="dolr" id="myDIV">
                    {priceList.map((el) => {
                      return (
                        <li
                          class={`btn ${amount == el.value ? "act-dr" : ""}`}
                          onClick={() => {
                            setError(false);
                            setAmount(el.value);
                          }}
                        >
                          {el.label}
                        </li>
                      );
                    })}
                  </ul>
                  <input
                    type="number"
                    placeholder="Other Amount (USD)"
                    value={amount}
                    onChange={(e) => {
                      setError(false);
                      setAmount(e.target.value);
                    }}
                  />
                  {error && <span style={{ color: "red" }}>Required</span>}
                  <div class="foundation-head">
                    <h6>FREQUENCY</h6>
                    <ul class="week" id="mylist">
                      {cycleList.map((el) => {
                        return (
                          <li
                            class={`btn ${cycle == el.value ? "act-wee" : ""}`}
                            onClick={() => setCycle(el.value)}
                          >
                            {el.label}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div class="foundation-head">
                    <h6>SELECT A CAUSE</h6>
                    <select
                      value={productId}
                      onChange={(e) => {
                        causeList &&
                          causeList.map((el) => {
                            if (el.value == e.target.value) {
                              setProductTitle(el.label);
                            }
                          });
                        setProductId(e.target.value);
                      }}
                    >
                      {causeList.map((el) => {
                        return <option value={el.value}>{el.label}</option>;
                      })}
                    </select>
                    <button style={{ cursor: "pointer" }} onClick={donateNow}>
                      DONATE NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
