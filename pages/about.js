import Layout from "components/layouts/layout";
import AboutHtml from "components/about.page/about-html";
import { useEffect } from 'react'

export default function AboutPage() {

  useEffect(() => {
    document.getElementsByTagName('body')[0].scrollTo(0,0)
  })

  return (
    <Layout pageTitle='About Us'>
      <AboutHtml />
    </Layout>
  );
}
