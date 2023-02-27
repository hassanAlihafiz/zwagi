import Layout from 'components/layouts/layout'
import Link from 'next/link'

export default function OurProductPage(props) {
  return (
    <Layout pageTitle={'ELEV 8'}>
      <section id="product-cart">
        <div className="container">
          <div className="row">
            <div className="col-md-5 align-self-center">
              <div className="products-images">
                <img src="/images/product7.png"/>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6"> 
            <h3>ELEV<span className="green"> 8</span></h3>
              <h5>$69.95</h5>
              <p>Unlock ancient medicinal secrets for optimal health and functioning! ELEV8 is a little green super pill scientifically designed to help you perform mentally and physically at a high level without the brain fog, moodiness, or other negative side effects from sugary, over-caffeinated energy drinks. Each capsule is packed with potent, pure herbal, mushroom, and whole food extracts that are rich in bioavailable essential nutrients and powerful nootropic and adaptogenic properties.</p>
              <ul className="nav nav-tabs">
                <li><a className="active" data-toggle="tab" href="#home">Benefits</a></li>
                <li><a data-toggle="tab" href="#menu1">Details</a></li> 
              </ul>

              <div className="tab-content">
                <div id="home" className="tab-pane fade show active">
                <ul>
                  <li><img src="/images/Icon25.png" /> <span>Naturally Increases Energy and Stamina </span></li>    
                  <li><img src="/images/Icon25.png" /> <span>Boosts Cognitive and Physical Performance </span></li>  
                  <li><img src="/images/Icon25.png" /> <span>Enhances Mental Clarity, Focus, and Memory </span></li>     
                  <li><img src="/images/Icon25.png" /> <span>Combats Physical and Mental Fatigue </span></li>      
                  <li><img src="/images/Icon25.png" /> <span>Helps Improve Mood and Alleviate Stress </span></li>       
                  </ul>
                </div>
                <div id="menu1" className="tab-pane fade">
                <ul>
                  <li><img src="/images/Icon25.png" /> <span>Advanced Performance Health Supplement</span></li>     
                  <li><img src="/images/Icon25.png" /> <span>Made with Whole Food, Medicinal Mushroom, and Herbal Extracts</span></li>     
                  <li><img src="/images/Icon25.png" /> <span>Provides 100% Natural, Bioavailable Phytonutrients</span></li>      
                  <li><img src="/images/Icon25.png" /> <span>Contains approximately 150 mg of Caﬀeine per Serving</span></li>        
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
            <h3><span className="green">I</span> Product Details</h3>
            <p>The Nature’s Energy & Clarity Blend in ELEV8 has powerful nootropic herbs and B vitamins known to naturally increase energy and stamina as well as enhance mental clarity, alertness, memory, and mood. The Adaptogen Super Blend contains medicinal mushrooms and super herbs shown to boost cognitive performance and combat the effects of physical and mental fatigue and stress.</p>
            <p>The Whole Food Nutrient Blend is made from real fruits and vegetables and is loaded with 100% natural, bioavailable phytonutrients (plant-derived vitamins) essential for overall health.</p>
            <a href="https://be-epic.s3.amazonaws.com/Elev8+Product+Details+(optimized).pdf" target="_blank" className="green">view product details</a>
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