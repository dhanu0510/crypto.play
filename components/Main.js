import React from 'react'
import styled from 'styled-components';

// components
import Portfolio from './Portfolio'
import Promos from './Promos';

const Main = ({thirdWebToken , sanityTokens , walletAddress}) => {
  return (
      <Wrapper>
      <Portfolio
          walletAddress={ walletAddress }
          sanityToken={ sanityTokens }
        thirdWebToken={ thirdWebToken } />
      
      {/* <Promos/> */}
    </Wrapper>
  )
}

export default Main

const Wrapper = styled.div`
    height : 100%;
    display: flex;
    max-height: calc(100vh - 64px);
    overflow: hidden;
    & div {
        border-radius: 0.4rem;
    }
`
