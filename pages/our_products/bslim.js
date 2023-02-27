import Layout from 'components/layouts/layout'
import Link from 'next/link'

export default function OurProductPage(props) {
  return (
    <Layout pageTitle={'B-Slim'}>
      <section id="product-cart">
        <div className="container">
          <div className="row">
            <div className="col-md-5 align-self-center">
              <div className="products-images">
                <img src="/images/product1.jpg"/>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6"> 
              <h3><span className="org">B</span>-SLIM</h3>
              <h5>$69.95</h5>
              <p>Create a refreshing weight-loss water in seconds! B-SLIM African Mango Weight-Loss Water Enhancer tablets are powered by two potent, proven natural ingredients: African Mango for weight loss and Ashwagandha for stress relief.</p>
              <ul className="nav nav-tabs">
                <li><a className="active" data-toggle="tab" href="#home">Benefits</a></li>
                <li><a data-toggle="tab" href="#menu1">Details</a></li> 
              </ul>

              <div className="tab-content">
                <div id="home" className="tab-pane fade show active">
                  <ul>
                    <li><img src="/images/Icon25.png"/> <span>Promote Weight Loss and Healthy Weight Management</span></li>    
                    <li><img src="/images/Icon25.png"/> <span>Reduce Appetite and Food Cravings</span></li>    
                    <li><img src="/images/Icon25.png"/> <span>Relieve Feelings of Stress; Calming Effect</span></li>     
                    <li><img src="/images/Icon25.png"/> <span>Improve Mood, Focus, and Sleep</span></li>    
                  </ul>
                </div>
                <div id="menu1" className="tab-pane fade">
                <ul>
                  <li><img src="/images/Icon25.png"/> <span>Easy-To-Use Water Enhancer Tablets; Just Drop & Drink!</span></li>    
                  <li><img src="/images/Icon25.png"/> <span>Contains a Patented, Clinically Proven Dose of African Mango Extract</span></li>    
                  <li><img src="/images/Icon25.png"/> <span>Also Contains the Most Potent Ashwagandha on the Market Today</span></li>
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
            <h3><span className="org">I</span> Product Details</h3>
            <p>African Mango (Irvingia gabonensis) seed extract has long been used to promote weight loss and healthy weight management. It has also been found to be effective at helping reduce hunger and body fat. B-SLIM contains a patented, clinically proven Irvingia seed extract for weight loss. The ingredient has substantiated claims for appetite control, satiety, thermogenesis, weight management, and metabolic wellness.</p>
            <p>Ashwagandha is an ancient herb known for its calming, adaptogenic properties. Studies have shown it can help increase resistance to stress and fatigue while promoting vigor, vitality, and well-being. B-SLIM contains Sensoril® – the most potent Ashwagandha on the market. In clinical trials, it demonstrated its ability to help shield the body against the negative effects of stress by balancing and harmonizing the body’s systems.</p>
            <a href="https://be-epic.s3.amazonaws.com/B-Slim+Tablets+Product+Details.pdf" target='_blank' className="org">view product details</a>
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
              <img src="/images/pro9.png" />
              <h5>Boost the Immune System, Reduce inflammation, and Fight Viral Infections.</h5>
              <Link href="/our_products/bimmune">SHOP NOW</Link>
            </div>
          </div> 
        </div>
      </div>
    </section> 
  </Layout>
  )
}