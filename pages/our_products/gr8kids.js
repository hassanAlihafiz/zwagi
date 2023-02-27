import Layout from 'components/layouts/layout'
import Link from 'next/link'

export default function OurProductPage(props) {
  return (
    <Layout pageTitle={'GR 8 KIDS'}>
      <section id="product-cart">
        <div className="container">
          <div className="row">
            <div className="col-md-5 align-self-center">
              <div className="products-images">
                <img src="/images/product3.png"/>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6"> 
            <h3>GR<span className="yellow">8</span> KIDS</h3>
              <h5>$69.95</h5>
              <p>GR8 KIDS is great for everyone…kids and adults! Zero sugar, zero calories, and packed with nutrients in convenient straight-to-mouth stick packs, it’s perfect for a daily supplement, healthy snack, or micro nutrition. Plus, it’s an easy, fun way to introduce and sustain healthy nutritional habits for everyone in the family, young and old.</p>
              <ul className="nav nav-tabs">
                <li><a className="active" data-toggle="tab" href="#home">Benefits</a></li>
                <li><a data-toggle="tab" href="#menu1">Details</a></li> 
              </ul>

              <div className="tab-content">
                <div id="home" className="tab-pane fade show active">
                <ul>
                  <li><img src="/images/Icon25.png" /> <span>Delicious and Nutrition; Contains 0 Sugar and 0 Calories </span></li>     
                  <li><img src="/images/Icon25.png" /> <span>Two Great Flavors: Fruity Blast and Rockin’ Berry </span></li>     
                  <li><img src="/images/Icon25.png" /> <span>Perfect for a Daily Supplement, Healthy Snack, or Micro Nutrition </span></li>
                  <li><img src="/images/Icon25.png" /> <span>Easy Way to Introduce and Sustain Healthy Nutritional Habits </span></li>
                  </ul>
                </div>
                <div id="menu1" className="tab-pane fade">
                <ul>
                  <li><img src="/images/Icon25.png" /> <span>Convenient Straight-To-Mouth Sticks (no water needed)</span></li>     
                  <li><img src="/images/Icon25.png" /> <span>Packed with All-Natural, Bioavailable Vitamins and Minerals</span></li>     
                  <li><img src="/images/Icon25.png" /> <span>100% Natural Whole Food Fruit and Vegetable Blend</span></li>      
                  <li><img src="/images/Icon25.png" /> <span>Nutritionally Dense and High Uptake of Nutrients</span></li>        
                </ul>
              </div>
            </div>
            <div className="cart-butn">
              <Link href="/shop" style={ {margin: '0px'} }>Start Now</Link>
            </div>
          </div>
        </div>
      </div>
    </section> 
    <section id="product-enroll">
      <div className="container">
        <div className="row">
          <div className="col-md-5 align-self-center">
            <h3><span className="yellow">I</span> Product Details</h3>
            <p>Power up your work, study, sports, and play with nutritious, delicious GR8 KIDS. Bursting with fruity flavor and loaded with vitamins from fresh fruits and vegetables, it’s the ultimate super food for all ages. It provides all the health benefits of fruits and veggies without all the sugar.</p>
            <p>GR8 KIDS is nutritionally dense and has a high uptake into the body. Each stick pack contains 4.5 servings worth of 100% natural whole food phytonutrients and is fortified with trace minerals. The whole food derived vitamins in GR8 KIDS are in their complete form making them substantially more bioavailable and usable by the body than synthetic vitamins.</p>
            <a href="https://be-epic.s3.amazonaws.com/Gr8+Kids+Product+Details+(optimized).pdf" target="_blank" className="yellow">view product details</a>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6 align-self-center">
            <div className="about-life-iframe" style={{ position:'relative'}}>
              <iframe src="https://player.vimeo.com/video/397541181?title=0&byline=0&portrait=0" style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>  
    <section id="container-enroll">
      <div className="container">
        <div className="col-sm-12">
          <h3>You May Also Like</h3>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="pro-box">
              <img src="/images/pro1.png" />
              <h5>Synergistic, Natural Weight Management and Sleep Combo</h5> 
              <Link href="/our_products/acceler8">SHOP NOW</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="pro-box">
              <img src="/images/pro2.png" />
              <h5>Fast-Acting, Naturally Infused, Aromatic Adhesive Touch Pads</h5>
              <Link href="/our_products/allevi8">SHOP NOW</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="pro-box">
              <img src="/images/pro3.png" />
              <h5>African Mango Weight-Loss Water Enhancer Tablets</h5>
              <Link href="/our_products/bslim">SHOP NOW</Link>
            </div>
          </div> 
        </div>
      </div>
    </section>
  </Layout>
  )
}