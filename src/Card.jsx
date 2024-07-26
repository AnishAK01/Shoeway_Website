import React from 'react';
import styled from 'styled-components';
// import Carddata from './Carddata';
import { useState } from 'react';
import CustomizedBadges from './CartIcon';
// import Homefile from './Home';

const Container = styled.div`
border: 0.2px solid #66fcf1;
/* height: 390px; */
/*   #0b0c10
           #1f2833
           #c5c6c7
           #66fcf1
           #45a29e */
width: 30%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-color:    #1f2833;
/* overflow-y: hidden; */
color: #45a29e;
border-radius: 30px;

img{
    width: 100%;
background-color: darkseagreen;
height: auto;
border-radius: 30px;



}
h3,h4{
margin: 5px;
/* border: 2px solid black; */
width: 90%;
font-size: 28px;
}

&:hover{
    box-shadow: 1px 2px 25px black;
    transition: box-shadow 0.3s ease-in;
}

`



const  SizeOptions = styled.div`
    display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 10px 0;

  label {
    margin: 0 10px;
    cursor: pointer;
  }
  input[type="radio"] {
    display: none;
  }
  input[type="radio"] + span {
    padding: 5px 10px;
    border: 2px solid black;
    border-radius: 5px;
  }
  input[type="radio"]:checked + span {
    background-color:black;
    
    color: white;
  }
`
const Button = styled.div`
    display: flex;
    /* background-color: red; */
    width: 80%;
    justify-content: space-evenly;

    button{
        height: 40px;
        width: 100px;
        margin: 5px;
        background-color: lightblue;
       border-top: 4px solid black;
       border-left: 4px solid black ;
       border-right: none;
       border-bottom: none;
       color: gray;
       transition: border-bottom 0.4s ease-in-out,border-bottom 0.4s ease-in-out,border-left 0.4s ease-in-out,border-top 0.4s ease-in-out;
      
      
    }

    button:hover{
        border-top: none  ;
       border-left: none  ;
       border-right: 4px solid ;
       border-bottom: 4px solid;
         /* transition: border-left 0.4s ease-in-out,border-top 0.4s ease-in-out; */
         color: black;
    }
`
const Card = ({image,name,price, selectedSize, onSizeChange }) => {

   

    const handleSizeChange = (e) => {
        setSelectedSize(e.target.value);
      };

    return (
       <Container>
     
        <img src={image}alt={name} />
        
        <h3>{name}</h3>
        <SizeOptions>
        <label>
          <input
            type="radio"
            value="S"
            checked={selectedSize === 'S'}
            onChange={() => onSizeChange('S')}
          />
          <span>S</span>
        </label>
        <label>
          <input
            type="radio"
            value="M"
            checked={selectedSize === 'M'}
            onChange={() => onSizeChange('M')}
          />
          <span>M</span>
        </label>
        <label>
          <input
            type="radio"
            value="L"
            checked={selectedSize === 'L'}
            onChange={() => onSizeChange('L')}
          />
          <span>L</span>
        </label>
        <label>
          <input
            type="radio"
            value="XL"
            checked={selectedSize === 'XL'}
            onChange={() => onSizeChange('XL')}
          />
          <span>XL</span>
        </label>
      </SizeOptions>
        <h4 style={{fontSize:"23px"}}>{price} </h4>
        <Button>
            <button >Add to cart</button>
            <button>Buy Now</button>
        </Button>
     
       </Container>
    );
};

export default Card;

