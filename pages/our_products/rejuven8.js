import Layout from 'components/layouts/layout'
import Link from 'next/link'

export default function OurProductPage(props) {
  return (
    <Layout pageTitle={'REJUVEN 8'}>
      <section id="product-cart">
        <div className="container">
          <div className="row">
            <div className="col-md-5 align-self-center">
              <div className="products-images">
                <img src="/images/product2.png"/>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6"> 
              <h3>REJUVEN<span className="pink"> 8</span> </h3>
              <h5>$69.95</h5>
              <p>Your skin will look and feel its best ever! REJUVEN8 is an innovative skin care product that revitalizes and protects the delicate stem cells in our skin against premature aging and sun-damage. The potent, lightweight daily serum is so eﬀective that you can expect to see noticeable results within just 30-45 days of regular use.</p>
              <ul className="nav nav-tabs">
                <li><a className="active" data-toggle="tab" href="#home">Benefits</a></li>
                <li><a data-toggle="tab" href="#menu1">Details</a></li> 
              </ul>

              <div className="tab-content">
                <div id="home" className="tab-pane fade show active">
                <ul>
                  <li><img src="/images/Icon25.png" /> <span>Boosts Collagen and Elastin in the Skin </span></li>     
                  <li><img src="/images/Icon25.png" /> <span>Minimizes Fine Wrinkles and Deeper Lines </span></li>    
                  <li><img src="/images/Icon25.png" /> <span>Lifts and Firms Up Skin to Visibly Reduce Sagging </span></li>     
                  <li><img src="/images/Icon25.png" /> <span>Moisturizes, Softens, and Soothes Dry Skin </span></li>     
                  <li><img src="/images/Icon25.png" /> <span>Increases Vitality and Longevity of Skin Cells </span></li>     
                  </ul>
                </div>
                <div id="menu1" className="tab-pane fade">
                <ul>
                  <li><img src="/images/Icon25.png" /> <span>Advanced, Daily Skin Care / Rejuvenation Serum</span></li>     
                  <li><img src="/images/Icon25.png" /> <span>Powered by Proprietary Goji Stem Cell Extract Technology</span></li>     
                  <li><img src="/images/Icon25.png" /> <span>Proven Formula Backed by Clinical Studies</span></li>      
                  <li><img src="/images/Icon25.png" /> <span>Silky Soft; Great for Face, Neck, and More</span></li>        
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
            <h3><span className="pink">I</span> Product Details</h3>
            <p>The proprietary formula is backed by real research, real studies, and real results. REJUVEN8 is powered by an advanced Goji stem cell extract technology that has been found in multiple studies to signiﬁcantly strengthen, repair, and reﬁne the skin – resulting in improved skin appearance, condition, and vitality.</p>
            <p>Restore and pamper beautiful, younger-looking, healthy skin with REJUVEN8. The deeply penetrating formulation has powerful skin rejuvenating and anti-aging eﬀects. In clinical studies, it has been shown to significantly improve collagen and elastin production in the skin. The results are amazing! It visibly ﬁrms and lifts sagging skin as well as diminishes ﬁne wrinkles and deeper lines. Plus, it is naturally moisturizing and softens dry, damaged skin.</p>
            <a href="https://be-epic.s3.amazonaws.com/Rejuven8+Product+Details+(optimized).pdf" target="_blank" className="pink">view product details</a>
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