import React from "react"
import "../styles/styles.scss"
import styled from "styled-components"
import Title from "../components/title"
import { ViewportProvider } from "../components/viewport"
import * as constants from '../components/constant';

const Page = styled.div`
@media ${constants.device.mobileS} {
  max-width: 305px;
}
@media ${constants.device.mobileM} {
  max-width: 350px;
}
@media ${constants.device.mobileXL} {
  max-width: 635;
}
@media ${constants.device.tablet} {
  max-width: 753px;
}
display: flex;
align-items: center;
justify-content: center;

@media ${constants.device.mobileXL} {
  justify-content: left;
}
/* position: absolute;
top: 0; right: 0; bottom: 0; left: 0; */
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
