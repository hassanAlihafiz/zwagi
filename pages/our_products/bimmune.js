import Layout from 'components/layouts/layout'
import Link from 'next/link'

export default function OurProductPage(props) {
  return (
    <Layout pageTitle={'B-IMMUNE+'}>
      <section id="product-cart">
        <div className="container">
          <div className="row">
            <div className="col-md-5 align-self-center">
              <div className="products-images">
                <img src="/images/product10.png"/>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6"> 
            <h3>B-<span className="orgpin">IMMUNE+</span></h3>
              <h5>$69.95</h5>
              <p>Naturally boost your immune system! B-IMMUNE+ supports a healthy immune response as well as provides fast relief when you’re not feeling well. Our all-natural turmeric curcumin supplement quickly and effectively boosts immunity and reduces symptoms.</p>
              <p>For best results, take B-IMMUNE+ on a daily basis to support a robust immune system and maintain a healthy anti-inflammatory response. To combat illness and inflammation, increase the dosage when you first begin experiencing symptoms in order to help you feel better faster.</p>
              <ul className="nav nav-tabs">
                <li><a className="active" data-toggle="tab" href="#home">Benefits</a></li>
                <li><a data-toggle="tab" href="#menu1">Details</a></li> 
              </ul>

              <div className="tab-content">
                <div id="home" className="tab-pane fade show active">
                <ul>
                  <li><img src="/images/Icon25.png" /> <span>All-Natural Immune Support Supplement</span></li>     
                  <li><img src="/images/Icon25.png" /> <span>Take Daily for Maintenance; Increase Dosage for Therapy</span></li>     
                  <li><img src="/images/Icon25.png" /> <span>Contains BioBDMC™ – a Patented Turmeric Curcumin Extract</span></li>
                  <li><img src="/images/Icon25.png" /> <span>Contains Proprietary ImmuniBoost™ Herbal Blend Rich in Antioxidants</span></li>      
                </ul>
                </div>
                <div id="menu1" className="tab-pane fade">
                <ul>
                  <li><img src="/images/Icon25.png" /> <span>Support Healthy Immune and Anti-Inflammatory Responses</span></li>     
                  <li><img src="/images/Icon25.png" /> <span>Provide Fast Relief from Symptoms</span></li>     
                  <li><img src="/images/Icon25.png" /> <span>Boost Immune System and Improve Immunity</span></li>      
                  <li><img src="/images/Icon25.png" /> <span>Reduce Inflammation, Including Aches and Pains</span></li>        
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
            <h3><span className="orgpin">I</span> Product Details</h3>
            <p>B-IMMUNE+ is powered by BioBDMC™ – a patented turmeric curcumin extract that is clinically proven to support immune system efficiency; support healthier inflammatory activity; and provide relief from pain, swelling, and other common ailments associated with systemic inflammation.</p>
            <p>It also contains ImmuniBoost™, which is made of potent healing herbal extracts and medicinal mushrooms. This proprietary blend is rich in antioxidants and contains natural ingredients with strong evidence for boosting the immune system, reducing inflammation, and fighting viral infections.</p>
            <a href="https://be-epic.s3.amazonaws.com/B-Immune%2B+Product+Details.pdf" target="_blank" className="orgpin">view product details</a>
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