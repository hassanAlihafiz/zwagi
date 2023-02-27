import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { Spin } from "antd";
import { callGetApi } from "utils/api";
import { asPrice, asNumber } from "utils/text";
import Layout from "components/layouts/layout";
import ProductSection from "components/product.page/product-section";
import ProductDetailSection from "components/product.page/product-detail-section";
import RelatedProductsSection from "components/product.page/related-products-section";
import Cookies from "universal-cookie";
import { variantList } from "utils/var/payment";

export default function ProductDetailPage() {
  const router = useRouter();
  const distCenter = useSelector((state) => state.mlm.distCenter);
  const cookies = new Cookies();
  const userType = cookies.get("bepicUserType");
  const yourCountry = useSelector((state) => state.mlm.yourCountry);
  const dispatch = useDispatch();
  const { path } = router.query;
  const [size, setSize] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(undefined);
  const [productVariant, setProductVariant] = useState(undefined);
  const [productVariantDetails, setProductVariantDetails] = useState(undefined);
  const productList = useSelector((state) => state.products.products);
  const orderDetails = useSelector((state) => state.checkout.orderDetails);
  const [othersProducts, setOtherProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const [disId, setDisId] = useState(null);

  const loadProductDetail = (path) => {
    // setIsLoading(true);
    // // setProduct(undefined);
    // const params = {
    //   dist_center_id: distCenter.id,
    //   country: yourCountry,
    //   user_type: userType,
    // };
    // const q = Object.keys(params)
    //   .map((k) => k + "=" + params[k])
    //   .join("&");
    // callGetApi(`products/${path}?${q}`, onGetProduct, onFailProduct);
  };
  const onGetProduct = (data) => {
    setIsLoading(false);
    // setProduct(data.data);
  };
  const onFailProduct = () => {
    setIsLoading(false);
    // router.push('/')
  };
  useEffect(() => {
    if (!path) return;
    if (userType == undefined || !distCenter) return;
    document.getElementsByTagName("body")[0].scrollTo(0, 0);
    loadProductDetail(path);
  }, [path, userType, distCenter]);

  useEffect(() => {
    let othersProducts_ = [];
    productList &&
      productList.map((el) => {
        if (path == el.id) {
          setProduct(el);
          let variant_ids = [];

          el?.variants?.map((ol, index) => {
            if (index === 0) {
              setSize(ol.variant);
              setProductVariantDetails(ol);
            }
            variant_ids.push(ol.variant);
          });
          setProductVariant(variant_ids);
        } else if (othersProducts_.length <= 2) {
          othersProducts_.push(el);
        }
      });
    setOtherProducts(othersProducts_);
  }, [productList, path]);

  const handleAddCart = () => {
    let cart_quantity = 0;
    for (let item of orderDetails) {
      if (item.product.id == product.id) {
        cart_quantity = item.quantity;
        break;
      }
    }

    dispatch({
      type: "ADD_CART",
      payload: {
        product: {
          ...product,
          id: productVariantDetails.id,
          price: productVariantDetails.price,
          image: productVariantDetails?.image,
        },
        quantity,
        size: size,
      },
    });
    setTimeout(() => {
      dispatch({
        type: "OPEN_SIDE_CART",
      });
    }, 1000);
  };

  // const loadProductInventoryDetail = (path) => {
  //   setIsLoading(true);
  //   callGetApi(`check/valid_inventory_detai`, onGetProductInventory, onFailProductInventory);
  // };
  // const onGetProductInventory = (data) => {
  //   setIsLoading(false);
  // };
  // const onFailProductInventory = () => {
  //   setIsLoading(false);
  // };

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
    if (!distCenter) return;
    if (distCenter && distCenter.id !== disId) {
      setDisId(distCenter.id);
      loadProducts(userType);
    }
  }, [distCenter]);

  return (
    <Layout>
      <div class="inner-pages" style={{ background: "white" }}>
        {isLoading ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              padding: "50px 0px",
            }}
          >
            <Spin size={"large"} />
          </div>
        ) : (
          <div>
            <div class="inner-products-cart">
              <div class="inner-wrapper">
                <div class="row">
                  <div
                    class="col-sm-6"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: 410,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={productVariantDetails?.image}
                        style={{
                          width: "auto",
                          maxWidth: "100%",
                          height: "auto",
                          maxHeight: "100%",
                        }}
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="products-cart">
                      <h2>{product?.title}</h2>
                      <strong>{asPrice(productVariantDetails?.price)}</strong>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: productVariantDetails?.description,
                        }}
                      />
                      <div class="products-size">
                        <h5>Select Size</h5>
                        <div id="myDIV">
                          {variantList.map((el) => {
                            if (
                              productVariant &&
                              productVariant.includes(el.value)
                            ) {
                              return (
                                <button
                                  onClick={() => {
                                    setSize(el.value);
                                    product &&
                                      product.variants?.map((ol) => {
                                        if (el.value === ol.variant) {
                                          setProductVariantDetails(ol);
                                        }
                                      });
                                  }}
                                  class={`btn ${
                                    size === el.value ? "aci" : ""
                                  }`}
                                >
                                  {el.label}
                                </button>
                              );
                            }
                          })}
                        </div>
                      </div>
                      <div class="products-size">
                        <h5>Select Quantity</h5>
                        <select
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                        >
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                        </select>
                      </div>
                      <div class="products-button">
                        <button
                          onClick={handleAddCart}
                          style={{ cursor: "pointer" }}
                        >
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="inner-products-like">
              <div class="inner-wrapper">
                <h3>You May Also Like</h3>
                <div class="row">
                  {othersProducts &&
                    othersProducts.map((el) => {
                      return (
                        <div
                          class="col-sm-4"
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <a
                            href={"javascript:void(0)"}
                            onClick={() => {
                              router.push(`/product/${el.id}`);
                              window.scroll(0, 0);
                            }}
                            class="products-box"
                          >
                            <div style={{ width: "100%", height: 200 }}>
                              <img
                                src={el.image}
                                style={{
                                  width: "auto",
                                  maxWidth: "100%",
                                  height: "auto",
                                  maxHeight: "100%",
                                }}
                              />
                            </div>
                            <div class="products-heading">
                              <h4>{el.title}</h4>
                              <strong>{asPrice(el.price)}</strong>
                            </div>
                          </a>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* {product? 
        <>
          <ProductSection product={product} />
          {product.video_description!='' && 
            <ProductDetailSection product={product} />
          }
          <RelatedProductsSection />
        </>
      :
        <div className='d-flex justify-content-center align-items-center' style={{ height: 450 }}>
          <p>
            <Spin spinning={true} />&nbsp;Loading product...
          </p>
        </div>
      } */}
    </Layout>
  );
}
