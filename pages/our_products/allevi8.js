import Layout from 'components/layouts/layout'
import Link from 'next/link'

export default function OurProductPage(props) {
  return (
    <Layout pageTitle={'ALLEVI 8'}>
      <section id="product-cart">
        <div className="container">
          <div className="row">
            <div className="col-md-5 align-self-center">
              <div className="products-images">
                <img src="/images/product5.png"/>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6"> 
              <h3>ALLEVI<span className="red"> 8</span> </h3>
              <h5>$69.95</h5>
              <p>Naturally alleviate physical discomfort and stress! ALLEVI8 Touch Pads temporarily relieve and soothe tension, soreness, and stiffness, so you can relax. Our advanced, naturally infused, aromatic adhesive Touch Pads deliver fast-acting, concentrated natural relief and a comforting aroma for up to 10 hours.</p>
              <ul className="nav nav-tabs">
                <li><a className="active" data-toggle="tab" href="#home">Benefits</a></li>
                <li><a data-toggle="tab" href="#menu1">Details</a></li> 
              </ul>

              <div className="tab-content">
                <div id="home" className="tab-pane fade show active">
                <ul>
                  <li><img src="/images/Icon25.png" /> <span>Delivers Fast-Acting, Concentrated Natural Relief </span></li>     
                  <li><img src="/images/Icon25.png" /> <span>Soothes Tense, Tired Muscles and Sore, Stiff Joints </span></li>  
                  <li><img src="/images/Icon25.png" /> <span>Temporarily Relieves Discomfort from Aches and Soreness </span></li>     
                  <li><img src="/images/Icon25.png" /> <span>Promotes Stress Relief, Comfort, and Relaxation </span></li>         
                  </ul>
                </div>
                <div id="menu1" className="tab-pane fade">
                <ul>
                  <li><img src="/images/Icon25.png" /> <span>Fast-Acting, Aromatic Adhesive Touch Pads</span></li>     
                  <li><img src="/images/Icon25.png" /> <span>Each Pad Can Be Used for Up to 10 Hours</span></li>     
                  <li><img src="/images/Icon25.png" /> <span>Infused with Healing Herbs, Aromatics, and Elemental Minerals</span></li>      
                  <li><img src="/images/Icon25.png" /> <span>Easy and Convenient to Use At Home or On The Go</span></li>        
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
            <h3><span className="red">I</span> Product Details</h3>
            <p>Don’t let an achy body slow you down! Get relief when and where you need it most. When applied to the skin, ALLEVI8 Touch Pads provide all-natural, targeted support for muscle and joint tension and can help reduce uncomfortable stiffness and soreness. Plus, their soothing effect helps promote stress relief, comfort, and relaxation.</p>
            <p>ALLEVI8 is specially formulated to provide a safe, all-natural solution for physical discomfort and stress without the negative side effects that come from using products with harmful or toxic ingredients. The biodegradable plant-based adhesive pads are infused with a proprietary blend of healing herbs, aromatics, and elemental minerals with beneficial health properties. ALLEVI8 redirects the body’s own heat and energy to the areas on which the pad is applied, naturally amplifying relief and comfort.</p>
            <a href="https://be-epic.s3.amazonaws.com/Allevi8+Product+Details.pdf" target="_blank" className="red">view product details</a>
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
              <img src="/images/pro6.png" />
              <h5>A Patented, Potent, Naturally Extracted Turmeric Curcumin Extract</h5>
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