import React from "react"
import "../styles/styles.scss"
import styled from "styled-components"
import Title from "../components/title"
import { ViewportProvider } from "../components/viewport"
import * as constants from '../components/constant';

const Page = styled.div`
@media ${constants.device.mobileS} {
  max-width: 300px;
}
@media ${constants.device.mobileM} {
  max-width: 350px;
}
@media ${constants.device.mobileXL} {
  max-width: 475px;
}
@media ${constants.device.tablet} {
  max-width: 700px;
}
display: flex;
align-items: center;
justify-content: center;
`;


const IndexPage = () => (
  <Page>
    <ViewportProvider>
      {/* <Header /> */}
      <Title />
    </ViewportProvider>
  </Page>
);

export default IndexPage
