import { useEffect, useState } from 'react'
import Layout from 'components/layouts/layout'
import ShopBanner from 'components/shop.page/shop-banner'
import ProductCard from 'components/our_products.page/product-card'

export default function OurProduct() {
  const ourProducts = [
    { image: '/images/product1.jpg', title: 'B-SLIM', path: 'bslim' },
    { image: '/images/product2.png', title: 'REJUVEN8', path:'rejuven8' },
    { image: '/images/product3.png', title: 'GR8 KIDS', path:'gr8kids' },
    { image: '/images/product4.png', title: 'REGENER8', path:'regener8' },
    { image: '/images/product5.png', title: 'ALLEVI8', path:'allevi8' },
    { image: '/images/product6.png', title: 'ACCELER8', path:'acceler8' },
    { image: '/images/product7.png', title: 'ELEV8', path:'elev8' },
    { image: '/images/product9.png', title: 'HYDR8', path:'hydr8' },
    { image: '/images/product10.png', title: 'B-IMMUNE+', path:'bimmune' },
  ]

  return (
    <Layout pageTitle="Our Products">
      <ShopBanner />
      <section id="container-enroll">
        <div className="container">
          <h3>Make Every Day Epic</h3>
          <p>Make every day epic with B-Epic’s premier line of high-performance lifestyle products. Experience the life-changing benefits for yourself! We invite you to try our products risk-free backed by our B-Epic 30-Day Money Back Guarantee.
          To bring you the most innovative, high-quality products on the market today, we’ve sourced the most powerful, proven natural ingredients used in traditional medicines and holistic practices around the world for centuries and enhanced them through modern extract and supplementation technology.</p>
        </div>
        <div className='container'>
          <div className='row p-0' style={{ minHeight: 250 }}>
            {ourProducts.map((product, index) => 
              <ProductCard product={product} key={index}
              />
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}
