import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { callPostApi } from "utils/api";
import { message, Modal } from "antd";
import { useRouter } from "next/router";
import moment from "moment";
import Layout from "components/layouts/layout";
import ConfirmEnrollerModal from "components/checkout.module/confirm-enroller-modal";
import StepBar from "components/checkout.module/step-bar";
import SideCart from "components/checkout.module/side-cart";
import ChooseTypeSection from "components/checkout.module/choose-type-section";
import InfoForm from "components/checkout.module/info-form";
import ShippingForm from "components/checkout.module/shipping-form";
import BillingForm from "components/checkout.module/billing-form";
import Confirmation from "components/checkout.module/confirmation";
import Cookies from "universal-cookie";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Spin } from "antd";

export default function Checkout() {
  const router = useRouter();
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const orderDetails = useSelector((state) => state.checkout.orderDetails);
  const teamDetails = useSelector((state) => state.checkout.teamDetails);
  const distCenter = useSelector((state) => state.mlm.distCenter);
  const yourCountry = useSelector((state) => state.mlm.yourCountry);
  const [step, setStep] = useState("info-form"); // choose-type, info-form, credit-form, billing-form, confirmation
  // const [userType, setUserType] = useState(0)
  const userType = cookies.get("bepicUserType");
  const referer = useSelector((state) => state.mlm.referer);
  const defaultReferer = useSelector((state) => state.mlm.defaultReferer);
  const [isOnlyDonate, setIsOnlyDonate] = useState(false)
  const isConfirmedReferer = useSelector(
    (state) => state.mlm.isConfirmedReferer
  );
  const [personalData, setPersonalData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    username: "",
    ownership_name: "",
    password: "",
    passwordConfirm: "",
  });
  const [billingData, setBillingData] = useState({
    billing_address: "",
    billing_address_line2: "",
    billing_city: "",
    billing_state: "",
    billing_zipcode: "",
    billing_country: "US",
    cc_name: "",
    cc_type: "",
    cc_number: "",
    cc_cvv: "",
    cc_expiry_month: "",
    cc_expiry_year: "",
  });
  const [shippingData, setShippingData] = useState({
    shipping_address: "",
    shipping_address_line2: "",
    shipping_city: "",
    shipping_state: "",
    shipping_zipcode: "",
    shipping_country: "US",
  });
  const [payType, setPayType] = useState(1); // cc, cash
  const [promotionCode, setPromotionCode] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [tax, setTax] = useState(undefined);
  const [shippingPrice, setShippingPrice] = useState(undefined);
  const [isSameAddress, setIsSameAddress] = useState(false);
  const [isGuest, setIsGuest] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isAutoship, setIsAutoship] = useState(false);
  const [autoshipData, setAutoshipData] = useState({
    day_of_month: "",
  });
  const [confirmResult, setConfirmResult] = useState(undefined);
  const { page } = router.query;
  const isShipping = page == "registerteam" ? false : true;
  
  /*
  useEffect(() => {
    if (distCenter && orderDetails.length>0 ) {
      getShippingPrice()
    }
  }, [distCenter, orderDetails, shippingData])
  */

  useEffect(() => {
    if (orderDetails?.length > 0) {
      let isProduct = false
      orderDetails?.map((item) => {
        if (!item.cycle) {
          isProduct = true
        }
      })
      setIsOnlyDonate(!isProduct)
    }
    if(!isShipping) {
      setTax(0);
    }
  }, [orderDetails])

  const getShippingPrice = () => {
    setShippingPrice(0);
    let data = {
      shippingDetail: {
        ...shippingData,
        dist_center_id: distCenter.id,
      },
      orderDetails: orderDetails.map((el) => ({
        product_id: el.product.id,
        quantity: el.quantity,
      })),
    };
    setIsLoading(true);
    callPostApi(
      `check/shipping_price`,
      data,
      onGetShippingPrice,
      onFailShippingPrice
    );
  };
  const onGetShippingPrice = (data) => {
    setIsLoading(false);
    checkTax(data.data.shippingPrice);
    setShippingPrice(data.data.shippingPrice);
  };
  const onFailShippingPrice = () => {
    setIsLoading(false);
  };
  const handleCheckout = () => {
    let data = {
      user: {
        type: userType,
        first_name: personalData["first_name"],
        last_name: personalData["last_name"],
        email: personalData["email"].toLowerCase().trim(),
        phone: personalData["phone"],
        username: isGuest ? "" : personalData["username"].toLowerCase().trim(),
        // ownership_name: personalData['ownership_name'].trim(),
        password: isGuest ? "" : personalData["password"],
        team: teamDetails
        // sponsor_id: referer.id,
      },
      shippingDetail: {
        ...shippingData,
        dist_center_id: distCenter.id,
        digital_dist_center_id: 1,
      },
      billingDetail: {
        cc_name: billingData["cc_name"].trim(),
        cc_type: billingData["cc_type"],
        cc_number: billingData["cc_number"],
        cc_cvv: billingData["cc_cvv"],
        cc_exp_date:
          billingData["cc_expiry_month"] + "/" + billingData["cc_expiry_year"],
        billing_address: !isSameAddress
          ? billingData.billing_address
          : shippingData.shipping_address,
        billing_address_line2: !isSameAddress
          ? billingData.billing_address_line2
          : shippingData.shipping_address_line2,
        billing_city: !isSameAddress
          ? billingData.billing_city
          : shippingData.shipping_city,
        billing_state: !isSameAddress
          ? billingData.billing_state
          : shippingData.shipping_state,
        billing_zipcode: !isSameAddress
          ? billingData.billing_zipcode
          : shippingData.shipping_zipcode,
        billing_country: !isSameAddress
          ? billingData.billing_country
          : shippingData.shipping_country,
      },
      payType: payType,
    };
    let orderDetails_ = [];
    for (let item of orderDetails) {
      if (item.cycle) {
        orderDetails_.push({
          product_id: item.product.id,
          quantity: item.quantity,
          amount: item.amount,
          cycle: item.cycle,
        });
      } else if (item.amount) {
        orderDetails_.push({
          product_id: item.product.id,
          quantity: item.quantity,
          amount: item.amount
        });
      } else {
        orderDetails_.push({
          product_id: item.product.id,
          quantity: item.quantity,
        });
      }
    }
    data["orderDetails"] = orderDetails_;
    if (promotionCode) data["promoCode"] = promotionCode;
    if (isAutoship) {
      data["autoship"] = autoshipData;
    }
    setIsSubmiting(true);
    callPostApi(`checkout`, data, onSuccessCheckout, onFailCheckout);
  };
  const onSuccessCheckout = (data) => {
    setIsSubmiting(false);
    setStep("confirmation");
    setConfirmResult(data.data);
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
  const setConfirmedPromotion = ({ discountAmount, promotionCode }) => {
    setPromotionCode(promotionCode);
    setDiscountAmount(discountAmount);
  };
  const goProducts = () => {
    router.push("/shop");
    window.scroll(0, 0)

  };
  const checkTax = (shippingPrice_) => {
    let orderDetails_ = [];
    for (let item of orderDetails) {
      orderDetails_.push({
        product_id: item.product.id,
        quantity: item.quantity,
      });
    }
    const data = {
      user: {
        type: userType || 1,
      },
      shippingDetail: {
        ...shippingData,
        dist_center_id: distCenter.id,
      },
      orderDetails: orderDetails_,
      order: {
        shipping_price: shippingPrice_,
      },
    };
    callPostApi(`check/tax`, data, onGetTax, onFailTax);
  };
  const handleConfirm = () => {
    setStep("billing-form");
  };
  const confirmToBilling = () => {
    setStep("billing-form");

    // Modal.confirm({
    //   title: "You will not change cart items anymore.",
    //   icon: <ExclamationCircleOutlined />,
    //   onOk: handleConfirm,
    //   centered: true,
    // });
  };

  const onGetTax = (data) => {
    setTax(data.data.taxAmount);
    message.success({
      content: `Your tax amount is $${data.data.taxAmount}`,
      style: {
        marginTop: "0px",
      },
    });
    confirmToBilling();
  };
  const onFailTax = (errorMessage) => {
    message.error({
      content: errorMessage,
      style: {
        marginTop: "0px",
      },
    });
  };
  const clearPromotionCode = () => {
    setPromotionCode("");
    setDiscountAmount(0);
  };

  useEffect(() => {
    if (
      !confirmResult &&
      shippingPrice !== undefined &&
      step == "shipping-form"
    ) {
      // checkTax();
    }
  }, [shippingPrice]);

  useEffect(() => {
    if (yourCountry) {
      setBillingData({
        ...billingData,
        billing_country: yourCountry,
      });
      setShippingData({
        ...shippingData,
        shipping_country: yourCountry,
      });
    }
  }, [yourCountry]);

  useEffect(() => {
    window.scroll(0, 0);
    dispatch({
      type: "HIDE_SIDE_CART",
    });
  });

  if (!confirmResult && orderDetails.length == 0) {
    return (
      <Layout pageTitle="Checkout" style={{ background: "#F9F9F9" }}>
        <div style={{ background: "#F9F9F9" }}>
          <div className="container">
            <div style={{ padding: "160px 0" }}>
              <p className="text-center">There are no items.</p>
              <div className="d-flex justify-content-center">
                <button className="btn btn-primary" onClick={goProducts}>
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout pageTitle="Checkout">
      <div className="checkout-wrapper" style={{ background: "#F9F9F9" }}>
        {step != "confirmation" && (
          <>
            <div
              className="left-section checkout-section"
              style={{ padding: "0px 35px" }}
            >
              <div className="main-content">
                <h2>CHECKOUT</h2>
                <StepBar step={step} isOnlyDonate={isOnlyDonate} isShipping={isShipping} />
                <div className="check-steps-details">
                  {/* {step=='choose-type' && 
                  <ChooseTypeSection 
                    userType={userType}
                    setStep={setStep}
                  />
                } */}
                  {step == "info-form" && (
                    <InfoForm
                      personalData={personalData}
                      setPersonalData={setPersonalData}
                      setStep={setStep}
                      isGuest={isGuest}
                      setIsGuest={setIsGuest}
                      isShipping={isShipping}
                    />
                  )}
                  {step == "shipping-form" && page!="registerteam" && (
                    <ShippingForm
                      shippingData={shippingData}
                      setShippingData={setShippingData}
                      setStep={setStep}
                      getShippingPrice={getShippingPrice}
                      isLoading={isLoading}
                      isOnlyDonate={isOnlyDonate}
                    />
                  )}
                  {step == "billing-form" && (
                    <BillingForm
                      payType={payType}
                      setPayType={setPayType}
                      billingData={billingData}
                      setBillingData={setBillingData}
                      userType={userType}
                      isSameAddress={isSameAddress}
                      setIsSameAddress={setIsSameAddress}
                      handleCheckout={handleCheckout}
                      isAutoship={isAutoship}
                      setIsAutoship={setIsAutoship}
                      autoshipData={autoshipData}
                      setAutoshipData={setAutoshipData}
                      setStep={setStep}
                      tax={tax}
                      isSubmiting={isSubmiting}
                      isRegisterTeam={isShipping}
                    />
                  )}
                </div>
              </div>
            </div>
            <SideCart
              checkoutCart={true}
              promotionCode={promotionCode}
              userType={userType}
              discountAmount={discountAmount}
              shippingPrice={shippingPrice}
              tax={tax}
              isSameAddress={isSameAddress}
              setConfirmedPromotion={setConfirmedPromotion}
              clearPromotionCode={clearPromotionCode}
              step={step}
            />
          </>
        )}
        {step == "confirmation" && (
          <Confirmation
            confirmResult={confirmResult}
            rawPassword={personalData["password"]}
            isGuest={isGuest}
            isRegisterTeam={isShipping}
          />
        )}

        {!isConfirmedReferer && defaultReferer ? <ConfirmEnrollerModal /> : ""}
        <style jsx>{``}</style>
      </div>
    </Layout>
  );
}
