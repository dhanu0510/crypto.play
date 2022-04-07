import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CoinItem from "./CoinItem";

const CoinSelector = ({
  setAction,
  sanityTokens,
  walletAddress,
  thirdWebTokens,
  selectedToken,
  setSelectedToken,
}) => {
   const [sender] = useState(walletAddress)
  return (
    <Wrapper>
      <Title>Select Asset</Title>
      <CoinList>
              {sanityTokens.map((token, index) => (
          <CoinItem
            key={index}
            token={token}
            sender={sender}
            selectedToken={selectedToken}
            setAction={setAction}
            setSelectedToken={setSelectedToken}
            sanityTokens={sanityTokens}
            thirdWebTokens={thirdWebTokens}
          />
              ))}
      </CoinList>
    </Wrapper>
  );
};

export default CoinSelector;

const Wrapper = styled.div``;
const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;
const CoinList = styled.div`
  display: flex;
  flex-direction: column;
`;
