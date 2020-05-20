import React from "react"
import "../styles/styles.scss"
import { Link } from "gatsby"
import Header from "../components/header"
import Title from "../components/title"
import { ViewportProvider } from "../components/viewport"

const IndexPage = () => (
  <ViewportProvider>
    {/* <Header /> */}
    <Title />
  </ViewportProvider>
);

export default IndexPage
