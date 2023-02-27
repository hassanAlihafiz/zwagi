import Layout from 'components/layouts/layout'
import Link from 'next/link'

export default function OurProductPage(props) {
  return (
    <Layout pageTitle={'REGENER 8'}>
      <section id="product-cart">
        <div className="container">
          <div className="row">
            <div className="col-md-5 align-self-center">
              <div className="products-images">
                <img src="/images/product4.png"/>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6"> 
            <h3>REGENER<span className="yellow2">8</span></h3>
              <h5>$69.95</h5>
              <p>Enhance your health and longevity with every delicious sip! REGENER8 is a research-supported, turmeric curcumin chai tea that not only helps you look and feel great but also tastes amazing. The proprietary blend is fast acting (works in hours, not days), highly bioavailable for the body, and has proven anti-aging and anti-inflammation properties.</p>
              <ul className="nav nav-tabs">
                <li><a className="active" data-toggle="tab" href="#home">Benefits</a></li>
                <li><a data-toggle="tab" href="#menu1">Details</a></li> 
              </ul>

              <div className="tab-content">
                <div id="home" className="tab-pane fade show active">
                <ul>
                  <li><img src="/images/Icon25.png" /> <span>Supports Anti-Aging and Immune System Efficiency </span></li>     
                  <li><img src="/images/Icon25.png" /> <span>Relieves Achy Joints and Chronic Inflammation </span></li>    
                  <li><img src="/images/Icon25.png" /> <span>Helps Preserve Healthy Bones and Joints </span></li>    
                  <li><img src="/images/Icon25.png" /> <span>Strengthens Skin, Hair, Nails, and Connective Tissue </span></li>     
                  <li><img src="/images/Icon25.png" /> <span>Supports Appetite Control and Blood Sugar Control </span></li>
                  </ul>
                </div>
                <div id="menu1" className="tab-pane fade">
                <ul>
                  <li><img src="/images/Icon25.png" /> <span>Chai Flavored, Turmeric Curcumin Collagen Drink</span></li>     
                  <li><img src="/images/Icon25.png" /> <span>Only 5 Calories per Serving; Sugar-Free, Gluten-Free, Caffeine-Free</span></li>     
                  <li><img src="/images/Icon25.png" /> <span>Fast-Acting and Bioavailable; Works in Hours (not days)</span></li>      
                  <li><img src="/images/Icon25.png" /> <span>Contains Proven, Patented Turmeric Curcumin Extract</span></li>        
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
            <h3><span className="yellow2">I</span> Product Details</h3>
            <p>REGENER8 is powered by BioBDMC™ – a patented, potent, naturally extracted turmeric curcumin extract that has been shown to provide relief from aches, pain, swelling, and other common ailments associated with systemic inflammation. It is also made with high-quality collagen protein for added, restorative health benefits, including improving the overall health and look of skin, hair, and nails and promoting bone, joint, and tendon health.</p>
            <p>Healthy as well as delicious, REGENER8 has only 5 calories per serving and is 100% sugar-free and gluten-free. As an added bonus, it is sweetened by Glyvia™ – a natural, zero-carbohydrate sweetener that tastes like sugar (but without the calories and blood sugar spike) and has been found to help curb appetite and carb consumption. Even better, REGENER8 tastes great served warm or cold.</p>
            <a href="https://be-epic.s3.amazonaws.com/Regener8+Product+Details+(optimized).pdf" target="_blank" className="yellow2">view product details</a>
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