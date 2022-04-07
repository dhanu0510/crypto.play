import React, { useState } from "react";
import styled from "styled-components";
import CoinSelector from "./CoinSelector";
// components
import Transfer from "./Transfer";
import Receive from './Receive'

const transferModal = ({ thirdWebToken, sanityTokens, walletAddress }) => {
  const [action, setAction] = useState("send");
  const [selectedToken, setSelectedToken] = useState(sanityTokens[2]);
  console.log(sanityTokens);
  const selectedStyle = {
    color: "#3773f5",
  };
  const unSelectStyle = {
    border: "1px solid #282b2f",
  };

  const selectedModel = (option) => {
    switch (option) {
      case "send":
        return (
          <Transfer
            selectedToken={selectedToken}
            walletAddress={walletAddress}
            thirdWebTokens={thirdWebToken}
            sanityTokens={sanityTokens}
            setAction={setAction}
          />
        );
      case "receive":
        return (
          <Receive
          setAction={setAction}
          selectedToken={selectedToken}
          walletAddress={walletAddress}
          />
            
         
        )

      case "select":
        return (
          <CoinSelector
            sanityTokens={sanityTokens}
            setSelectedToken={setSelectedToken}
            walletAddress={walletAddress}
            thirdWebTokens={thirdWebToken}
            setAction={setAction}
            selectedToken={selectedToken}
          />
        );
      case "transferring":
       return (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '1.5rem',
            }}
          >
            Transfer in progress...
          </div>
        );

      case "transferred":
        return (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '1.5rem',
              color: 'green'
            }}
          >
            transferred
          </div>
        )
      default:
        return <h2>send</h2>;
    }
  };

  return (
    <Wrapper>
      <Selector>
        <Option
          style={action == "send" ? selectedStyle : unSelectStyle}
          onClick={() => {
            setAction("send");
          }}
        >
          <p>send</p>
        </Option>
        <Option
          style={action == "receive" ? selectedStyle : unSelectStyle}
          onClick={() => {
            setAction("receive");
          }}
        >
          <p>Receive</p>
        </Option>
      </Selector>
      <ModalMain>{selectedModel(action)}</ModalMain>
    </Wrapper>
  );
};

export default transferModal;

const Wrapper = styled.div`
  height: 35rem;
  width: 27rem;
  color: white;
  border: 1px solid #282b2f;
  display: flex;
  flex-direction: column;
`;
const Selector = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 5rem;
`;

const Option = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    background-color: #111214;
  }
`;

const ModalMain = styled.div`
  padding: 1rem;
  flex: 1;
`;
