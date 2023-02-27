import Layout from "components/layouts/layout";
import SupportHtml from 'components/support.page/support-html'
import { useEffect } from 'react'

export default function SupportPage (props) {
  
  useEffect(() => {
    document.getElementsByTagName('body')[0].scrollTo(0,0)
  })

  return (
    <Layout pageTitle='Support'>
      <SupportHtml />
    </Layout>
  )
}
