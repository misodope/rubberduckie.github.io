import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import RubberDuck from "../components/RubberDuck";
import RubberDuck2 from "../components/RubberDuck2";

const IndexPage = () => (
  <Layout>
    <SEO title="Rubber Duckie" description="Rubber Duck Debugging" />
    <RubberDuck2 />
  </Layout>
);

export default IndexPage;
