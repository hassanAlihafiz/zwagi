import Layout from "components/layouts/layout";
import OpportuntiyHtml from 'components/opportunity.page/opportunity-html'
import { useEffect } from 'react'

export default function OpportunityPage (props) {

  useEffect(() => {
    document.getElementsByTagName('body')[0].scrollTo(0,0)
  })

  return (
    <Layout pageTitle='Opportunity'>
      <OpportuntiyHtml />
    </Layout>
  )
}