import React from 'react'
import styled from 'styled-components';
import { useParams,Link } from 'react-router-dom';
import data from '../Data.json'


const Detail = () => {
  const { id } = useParams();
  console.log(data[id - 1]);
  const newId = data[id - 1];
  console.log(newId)
  return (
    <Container>
     {
       <div>
         <BackGround>
           <img src = {newId.backgroundImg} alt='loading'/>
         </BackGround>
        <Content>
        <TitleImg>
           <img src={newId.titleImg} alt='loading'/>
         </TitleImg>
         <Control>
         <Play>
            <Icon src="/Assets/images/play-icon-black.png"  />
           <Text>Play</Text>
          </Play>
          <Trailer>
            <Icon src="/Assets/images/play-icon-white.png"  />
            <Text>Trailer</Text>
          </Trailer>
          <GroupIcon>
            <Icon src="/Assets/images/watchlist-icon.svg"  />
            </GroupIcon>
            <GroupIcon>
              <Icon src="/Assets/images/group-icon.png"  />
          </GroupIcon>
         </Control>
         <SubTitle>{newId.subTitle}</SubTitle>
         <Description>{newId.description}</Description>
        </Content>
        <Link to="/">
          <Back>
            <img src="/Assets/images/backward.svg"  />
          </Back>
       </Link>
       </div>
     }
      
    </Container>
  );
};

export default Detail;

const Container = styled.div`
height:85vh;
width:100%;
position: relative;
color:white;

`;

const BackGround = styled.div`
/* padding:24px;
padding-bottom:24px;
width:100%; */
position: absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index: -1;
    opacity:0.7;

    img{
        width:100%;
        object-fit:cover;
        height:100%;
    } 
`;

const TitleImg = styled.div`
img{
  width:300px;
  height:300px;
}
`;

const SubTitle = styled.div`
margin-top: 30px;
`;

const Description = styled.div`
margin-top: 30px;
    font-weight:500px;
`;

const Content = styled.div`
    width: 600px; 
    display:flex;
    flex-direction: column;
    margin: 0px 50px;
`;

const Control = styled.div`
 display:flex;
    align-items: center;
    margin-top: 30px;
`;

const Play = styled.div`
width: 120px;
    height:40px;
    background-color:#fff;
    color:black;
    display:flex;
    align-items: center;
    border-radius:5px;
    border: 2px solid #fff;
    justify-content: center;
    cursor:pointer;
    margin-right:10px;
`;

const Text = styled.div`
    font-weight:500;
`
const Icon = styled.img``;

const Trailer = styled.div`
    width: 120px;
    height:40px;
    border: 2px solid #fff;
    border-radius:5px;
    color:white;
    display:flex;
    align-items: center;
    margin: 0px 10px;
    justify-content: center;
    cursor:pointer;

`
const GroupIcon = styled.div`
    cursor:pointer;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    display:flex;
    justify-content: center;
    margin: 0px 10px;
    align-items: center;
    border:2px solid #fff;
`

const Back = styled.div`
    width: 50px;
    height:50px;
    display:flex;
    background-color: white;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    margin-top: 30px;
    position: absolute;
    bottom: 40px;
    right: 50px;
    cursor:pointer;


    img{
      width: 100%;
      height: 100%;
  
    }
`

