import Layout from 'components/layouts/layout'
import Link from 'next/link'

export default function OurProductPage(props) {
  return (
    <Layout pageTitle={'ACCELER 8'}>
      <section id="product-cart">
        <div className="container">
          <div className="row">
            <div className="col-md-5 align-self-center">
              <div className="products-images">
                <img src="/images/product6.png"/>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6"> 
              <h3>ACCELER<span className="perple"> 8</span> </h3>
              <h5>$69.95</h5>
              <p>Lose weight naturally and eﬀortlessly while fast asleep! ACCELER8 is a unique combo pack of two advanced health supplements (RESTORE and SLEEP) that work synergistically to support the body in naturally restoring and maintaining a holistic healthy state. Both supplements are made with potent, natural ingredients selected for their known health-enhancing properties, including aiding weight loss, weight management, relaxation, and sleep.</p>
              <ul className="nav nav-tabs">
                <li><a className="active" data-toggle="tab" href="#home">Benefits</a></li>
                <li><a data-toggle="tab" href="#menu1">Details</a></li> 
              </ul>

              <div className="tab-content">
                <div id="home" className="tab-pane fade show active">
                <ul>
                  <li><img src="/images/Icon25.png" /> <span>Supports Healthy Weight Loss and Weight Management </span></li>    
                  <li><img src="/images/Icon25.png" /> <span>Naturally Cleanses and Detoxifies the Body  </span></li>  
                  <li><img src="/images/Icon25.png" /> <span>Replenishes Healthy Bacteria in Gut Microbiome </span></li>     
                  <li><img src="/images/Icon25.png" /> <span>Promotes Mental and Physical Relaxation </span></li>      
                  <li><img src="/images/Icon25.png" /> <span>Aid in Falling Asleep Faster and Sleeping More Soundly </span></li> 
                  </ul>
                </div>
                <div id="menu1" className="tab-pane fade">
                <ul>
                  <li><img src="/images/Icon25.png" /> <span>Combo of Two Synergistic Health Supplements</span></li>     
                  <li><img src="/images/Icon25.png" /> <span>ACCELER8 RESTORE Contains Prebiotics, Probiotics, and Enzymes</span></li>     
                  <li><img src="/images/Icon25.png" /> <span>ACCELER8 SLEEP (white capsule) Contains Herbal Extracts and Other Natural Substances</span></li>      
                  <li><img src="/images/Icon25.png" /> <span>Made with Natural Ingredients with Health-Enhancing Properties</span></li>        
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
            <h3><span className="perple">I</span> Product Details</h3>
            <p>The ACCELER8 RESTORE purple capsule has a gentle detoxing effect that naturally cleanses the body, so it is better empowered to restore itself to an optimal balance. It is also packed with beneficial bacteria to help replenish the gut microbiome, which is vital for overall health and strong digestive and immune systems.</p>
            <p>The ACCELER8 SLEEP white capsule has a natural soothing effect that helps the body fall asleep faster, sleep more soundly, and wake without grogginess. It contains natural substances that help lower cortisol and balance serotonin levels, which causes the body and mind feel more relaxed and promotes improved sleep quality.</p>
            <a href="https://be-epic.s3.amazonaws.com/Acceler8+Product+Details+(optimized).pdf" target="_blank" className="perple">view product details</a>
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
              <img src="/images/pro9.png" />
              <h5>Boost the Immune System, Reduce inflammation, and Fight Viral Infections.</h5> 
              <Link href="/our_products/bimmune">SHOP NOW</Link>
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