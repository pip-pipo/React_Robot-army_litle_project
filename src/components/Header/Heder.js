import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
background-color: #282c34;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
width: 100%;
`;
const Logo = styled.img`
  height: 64px;
  pointer-events: none;
`;

const Header =()=>(
    <HeaderWrapper>
        <Logo src={`https://robohash.org/7?size=200x200`} alt='logo'/>
<h1>My Robot army</h1>
    </HeaderWrapper>
)

export default Header