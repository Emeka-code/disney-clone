import React from 'react'
import styled from 'styled-components'
import {GoThreeBars} from "react-icons/go"
import {GiCancel} from "react-icons/gi"
const Header = () => {
    const [Toggle, setToggle]=React.useState(false)

    const toggleChange =()=>{
        setToggle(!Toggle);
        
    };
  return (
      
    <Container>
        <Wrapper>
                <Logodiv>
                    <Logo src="/Assets/images/logo.svg" alt =""/>
                </Logodiv>
            <Navigation>
               
                <NavHold>
                    <Nav>
                        <Icon src="/Assets/images/home-icon.svg" alt =""/>
                        <span>Home</span>
                    </Nav>
                    <Nav>
                        <Icon src="/Assets/images/movie-icon.svg"/>
                        <span>Movie</span>
                    </Nav>
                    <Nav>
                        <Icon src="/Assets/images/series-icon.svg" alt =""/>
                        <span>Series</span>
                    </Nav>
                    <Nav>
                        <Icon src="/Assets/images/watchlist-icon.svg" alt =""/>
                        <span>Watched</span>
                    </Nav>
                    {/* <Nav>
                        <Icon src="/Assets/images/favicon.svg" alt =""/>
                        <span>Favorite</span>
                    </Nav> */}
                    <Nav>
                        <Icon src="/Assets/images/search-icon.svg" alt =""/>
                        <span>Search</span>
                    </Nav>
                </NavHold>
                <ButtonWrap>
                    <span>Log In</span>
                </ButtonWrap>
            </Navigation>
            <BurgerHold>
                {Toggle?
                <GoThreeBars onClick={toggleChange} size="30px" color = "white"/>:
                <GiCancel onClick={toggleChange} size="25px" color ="#fff"/>
                }
            </BurgerHold>
            
        </Wrapper>
    </Container>
    
  )
}

export default Header;
const Container= styled.div`
width: 100%;
height: 70px;
background-color: #090b13;
display: flex;
justify-content: center;
align-items: center;
`
const Wrapper= styled.div`
width: 90%;
height: 100%;
display: flex;
justify-content: space-between;
align-items:center;
@media screen and (max-width: 768px){
    display: none;
}
`;
const Logodiv= styled.div`
margin-right:40px;
`
const Logo= styled.img`
width: 100px;
`
const Navigation= styled.div`
display: flex;
/* background: hotpink; */
justify-content: space-between;
width: 950px;
`
const NavHold= styled.div`
display: flex;
align-items: center;
width: 580px;
/* background: greenyellow; */
justify-content: space-between;
`
const Nav= styled.div`
display: flex;
align-items: center;

span{
    font-size: 20px;
    font-weight: 700;
    margin-left:3px;
    color:#fff;
    cursor:pointer;
    position:relative;

    ::after{
        content:'';
        position:absolute;
        height:2px;
        background-color:#fff;
        left:0;
        right:0;
        bottom:-7px;
        opacity: 0;
        transition:all 350ms
    }
    :hover{
        transform:scale(1.1);
        ::after{
            opacity:1;
        }
    }
}
`;
const Icon= styled.img`
width: 25px;
/* height:  50px; */
margin-right: 3px;
`

const BurgerHold= styled.div`
display: none;
@media screen and (max-width: 768px) {
    display: block;
}

`

const ButtonWrap = styled.button`
font-family: Georgia;
font-weight: 600;
padding: 5px 25px;
outline: none;
border: 1px solid white;
background-color: transparent;
border-radius: 2px;
display: flex;
color:white;
`;


