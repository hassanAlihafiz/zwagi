import Layout from 'components/layouts/layout'
import Link from 'next/link'

export default function OurProductPage(props) {
  return (
    <Layout pageTitle={'HYDR 8'}>
      <section id="product-cart">
        <div className="container">
          <div className="row">
            <div className="col-md-5 align-self-center">
              <div className="products-images">
                <img src="/images/product9.png"/>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6"> 
            <h3>HYDR<span className="blue"> 8</span></h3>
              <h5>$69.95</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate pulvinar consectetur lorem platea amet habitant gravida lectus. Aliquam ac eros, mattis tellus integer libero. Elit at tortor vestibulum elit mauris, nec dolor felis. Turpis quis tincidunt donec vel elementum elementum. Turpis quis tincidunt donec vel elementum elementum.</p>
              <ul className="nav nav-tabs">
                <li><a className="active" data-toggle="tab" href="#home">Benefits</a></li>
                <li><a data-toggle="tab" href="#menu1">Details</a></li> 
              </ul>

              <div className="tab-content">
                <div id="home" className="tab-pane fade show active">
                <ul>
                  <li><img src="/images/Icon25.png" /> <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit </span></li>     
                  <li><img src="/images/Icon25.png" /> <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit </span></li>     
                  <li><img src="/images/Icon25.png" /> <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit </span></li>      
                  <li><img src="/images/Icon25.png" /> <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit </span></li> 
                  </ul>
                </div>
                <div id="menu1" className="tab-pane fade">
                <ul>
                  <li><img src="/images/Icon25.png" /> <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit </span></li>     
                  <li><img src="/images/Icon25.png" /> <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit </span></li>     
                  <li><img src="/images/Icon25.png" /> <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit </span></li>      
                  <li><img src="/images/Icon25.png" /> <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit </span></li>        
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
            <h3><span className="blue">I</span> Product Details</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem aliquam ut rhoncus ut elementum dolor pellentesque viverra. Tempor ut laoreet dictum id. Accumsan amet pellentesque odio urna enim metus felis in fermentum. Sed amet, pharetra commodo lacus nunc, amet. In lectus nisl tellus, at eu. Justo, nunc convallis venenatis id vitae, leo, nunc. At semper ultrices pellentesque quisque. Elementum praesent malesuada egestas lectus sed facilisis morbi. Aliquet aliquam pretium cursus eget lectus risus. Nunc pretium suspendisse nibh vulputate.</p>
            <p>At semper ultrices pellentesque quisque. Elementum praesent malesuada egestas lectus sed facilisis morbi. Aliquet aliquam pretium cursus eget lectus risus. Nunc pretium suspendisse nibh vulputate. Cras ullamcorper lectus nulla maecenas elit tellus consequat,  aliquam pretium cursus eget lectus sagittis.</p>
            <a href="#" target="_blank" className="blue">view product details</a>
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