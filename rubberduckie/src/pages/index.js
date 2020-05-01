import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RubberDuck from "../components/RubberDuck";

const IndexPage = () => (
  <Layout>
    <SEO title="Rubber Duckie" description="Rubber Duck Debugging"/>
    <RubberDuck/>
  </Layout>
)

export default IndexPage
