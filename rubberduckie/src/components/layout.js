/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";

import "./layout.css";

import Navbar from "./Navbar";
import Container from "./Container";
import Social from "./Social";

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1600,
          height: "100vh",
          padding: `0 1.45rem`,
        }}
      >
        <main>
          <Navbar />
          <Container>{children}</Container>
          <Social />
        </main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
