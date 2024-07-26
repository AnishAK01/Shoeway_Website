import React from 'react';

import styled from "styled-components"
import SearchIcon from '@mui/icons-material/Search';
import PlaceTwoToneIcon from '@mui/icons-material/PlaceTwoTone';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import CustomizedBadges from './CartIcon';
import Badge from '@mui/material/Badge';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
    /* border: 1.5px solid black   ; */
    /* background-color: lightblue; */
    justify-content: space-between;
    align-items: center;
    height: 80px;
    width: 100%;
    margin-bottom: 5px;
    color: #66fcf1;
   
`
const Logo = styled.div`
 width: 75%;
 height: 100%;
 margin: 0px auto 0px auto;
 display: flex;
 justify-content: space-around;
 align-items: center;
`
const Logoimage = styled.div`
    /* border: 1.5px solid black; */
    width: 33%;
    height: 99%;
    border-radius: 50%;
    background-color: black;
    z-index: 2;
   
    img{
        /* border: 1.5px solid black; */
        /* width: 100%; */
        height: 110%;
      

    }

`
const Logoname = styled.h4`
  margin-left: -28px;
  padding: 5px 8px 5px 20px ;
  /* border: 1.5px  solid white; */
border-radius: 0 20px 20px 0px;
  border-left: none;
  /* border-bottom: 0.1px; */
  background-color: #000000;
  color: #66fcf1;

  font-size: 20px;
z-index: 1;
  
`
const Left = styled.div`
    /* border: 1.5px solid black; */
    width:20%;
    height:80%;
    display:flex;

`
const Right = styled.div`
    /* border: 1.5px solid black; */
 /* border: 1.5px solid black; */
    width:33.33%;
    height:80%;
    display: flex;
    justify-content: space-around;
`
const Logbtns = styled.div`
display: flex;
    width: 50%;
align-items: center;
text-align: center;

span{
    /* border: 1.5px solid black; */
position: absolute;
width: 85px;
border-radius: 20px;
right: 200px;
background-color: aliceblue;
display: flex;
    align-items: center;
justify-content:center;
height:40px;
transition: 1s ease-in-out;
}
`
const Login = styled.div`
    display: flex;
    align-items: center;
justify-content:center;
    /* border: 1.5px solid black; */
height: 80%;
border-right: none;
width: 50%;
border-radius: 10px 2px 2px 10px;
`
const Signup = styled.div`
border-radius: 2px 10px 10px 2px;

display: flex;
    align-items: center;
justify-content:center;
width: 50%;
/* border: 1.5px solid black; */
border-left: none;

height: 80%;

`
const Cart = styled.div`
display: flex;
    align-items: center;
justify-content:center;
`
const Menu = styled.div`
    display: flex;
    align-items: center;
justify-content:center;
`

const Center = styled.div`
    /* border: 1.5px solid black; */
 /* border: 1.5px solid black; */
    width:33.33%;
    display: flex;
align-items: center;
    height:80%;
`
const SearchInput = styled.div`
width: 100%;
height: 70%;
display: flex;
align-items: center;
justify-content:space-around;

input{
    width: 80%;
    height: 80%;
    border-radius: 25px;
    border: 1px solid gray;
    outline: none;
    padding-left: 10px;
    background-color: #0b0c10;
    color: #66fcf1;
    border: 1px solid #66fcf1 ;
}
i{
    /* margin-left: -70px; */
    font-size: 30px;
    margin-left: 10px;
}
    
`
const styleMenu = {
    fontSize: "40px"
}

function Navbar() {
    // let slider = document.getElementsByTagName("span");
    // const  BtnLogHover=()=>{
    //     slider.style.right = "308px";
    //     slider.style.transition = "ease-in-out 1s" 
    //     }

 

    return (
        <Container>
            <Left>
                <Logo>
                    <Logoimage >
                        <img src="https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-3d/256/Running-Shoe-3d-icon.png" alt="" />
                    </Logoimage>
                    <Logoname>Something</Logoname>
                </Logo>
            </Left>
            <Center>
                <SearchInput>
                    <input type="text" placeholder='Type' />
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <PlaceTwoToneIcon style={styleMenu}></PlaceTwoToneIcon>

                </SearchInput>
            </Center>
            <Right>
            <Logbtns>
                {/* <span>
                    fe
                </span> */}
                <Login className='login' >Login</Login>
                <Signup className='signup' >Signup</Signup>
            </Logbtns>
            <Cart
              >
            <CustomizedBadges  />
           
         
                {/* <LocalMallRoundedIcon style={styleMenu}></LocalMallRoundedIcon> */}
            </Cart>
            <Menu>
               
               <WidgetsRoundedIcon style={styleMenu}></WidgetsRoundedIcon>
              
            </Menu>
            </Right>
        </Container>

       
    );
}

export default Navbar;