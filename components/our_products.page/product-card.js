import { useSelector } from 'react-redux'
import Link from 'next/link'
import { asPrice } from 'utils/text'

export default function ProductCard(props) {

  return (
    <div className="col-md-4 col-sm-6 ">
      <div className="pro-box">
        <div className='product-image'>
          <img src={props.product.image} />
        </div>
        <h4>{props.product.title}</h4>
        <Link href={`/our_products/${props.product.path}`}>SHOP NOW</Link>
      </div>
	</div>
  )
}
