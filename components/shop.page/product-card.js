import { useSelector,useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { asPrice } from "utils/text";
import Cookies from "universal-cookie";

export default function ProductCard(props) {
  const cookies = new Cookies();
  const userType = cookies.get("bepicUserType");
  const dispatch = useDispatch();
  const teamDetails = useSelector((state) => state.checkout.teamDetails);
  const router = useRouter();

  const clearCart=()=>{
    dispatch({
      type: 'CLEAR_CART',
    });
  }

  const goProductDetail = () => {
    if (!!teamDetails) {
      clearCart();
    }
    router.push(`/product/${props.product.id}`);
    window.scroll(0,0)
  };

  return (
    <div class="col-sm-4" style={{ display: "flex", justifyContent: "center" }}>
      <a
        href={"javascript:void(0)"}
        onClick={goProductDetail}
        class="products-box"
      >
        <div style={{width: '100%', height: 200}}>
          <img
            src={props.product.image}
            style={{
              width: "auto",
              maxWidth: "100%",
              height: "auto",
              maxHeight: "100%",
            }}
          />
        </div>
        <div class="products-heading">
          <h4>{props.product.title}</h4>
          <strong>{asPrice(props.product.price)}</strong>
        </div>
      </a>
    </div>
  );
}
