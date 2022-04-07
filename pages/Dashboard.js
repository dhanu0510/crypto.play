import React from "react";
import styled from "styled-components";

// components
import Header from "../components/Header";
import Main from "../components/Main";
//import Promos from '../components/Promos';
import { ethers } from "ethers";
import { ThirdwebSDK } from "@3rdweb/sdk";
import Sidebar from "../components/Sidebar";

let cointsApi =
  "https://jyuy6t2h.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D'coins'%5D%7B%0A%20%20name%2C%0A%20%20usdPrice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D";
const rpc = "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";
const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    process.env.NEXT_PUBLIC_METAMASK_KEY,
    ethers.getDefaultProvider(rpc)
  )
);

const Dashboard = ({ address }) => {
  const [sanityTokens, setSantiyTokens] = React.useState([]);
  const [thirdWebToken, setThirdWebToken] = React.useState([]);

  React.useEffect(() => {
    const getSanityAndThirdWebTokens = async () => {
      const coins = await fetch(cointsApi);
      const sanityTokens = (await coins.json()).result;
      setSantiyTokens(sanityTokens);
      setThirdWebToken(
        sanityTokens.map((tokenItem) => {
          const currentToken = sdk.getTokenModule(tokenItem.contractAddress);
          if (currentToken !== undefined) {
            return currentToken;
          }
        })
      );
    };
    getSanityAndThirdWebTokens();
  }, []);

 // console.log(sanityTokens)

  // console.log(thirdWebToken);
  return (
    <Wrapper>
      <Sidebar />
      <MainContainer>
        <Header
          walletAddress={ address }
          sanityTokens={sanityTokens }
          thirdWebToken={ thirdWebToken }
        />
        <Main 
        walletAddress={ address }
        sanityTokens={ sanityTokens }
        thirdWebToken={thirdWebToken }
        />
      </MainContainer>
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #0a0b0d;
  color: white;
  overflow: hidden;
`;

const MainContainer = styled.div`
  flex: 1;
`;
