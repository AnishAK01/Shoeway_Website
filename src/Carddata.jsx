
import React from 'react';
import Card from './Card';
import styled from 'styled-components';
import { useState } from 'react';
import CustomizedBadges from './CartIcon';
import Homefile from './Home';
const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  /* background-color: aquamarine; */
  /* padding-bottom: 20px; */
  /* box-shadow: 1px 2px 15px 5px gray inset; */
  width: 100%;
  height: auto;
  padding: 10px;
background-color: #0b0c10;

`;

const Carddata = () => {
  const cardsData = [
    {
      image: 'assets/Cardimg/card1.webp',
      name: 'Bacca Bucci',
      price: '₹2345',
    },
    {
      image: 'assets/Cardimg/card2.webp',
      name: 'Nike',
      price: '₹2345',
    },
    {
      image: 'assets/Cardimg/card3.webp',
      name: 'Nike',
      price: '₹1345',
    },
    {
      image: 'assets/Cardimg/card4.webp',
      name: 'Nike',
      price: '₹1999',
    },
    {
      image: 'assets/Cardimg/card5.webp',
      name: 'Puma',
      price: '₹1589',
    },
    {
      image: 'assets/Cardimg/card6.webp',
      name: 'Puma',
      price: '₹1200',
    },
    {
      image: 'assets/Cardimg/card7.webp',
      name: 'Puma',
      price: '₹1499',
    },
    {
      image: 'assets/Cardimg/card8.webp',
      name: 'Red Tape',
      price: '₹2300',
    },
    {
      image: 'assets/Cardimg/card9.webp',
      name: 'Red Tape',
      price: '₹1457',
    },
    {
      image: 'assets/Cardimg/card10.webp',
      name: 'Sparx',
      price: '₹1100',
    },
    {
      image: 'assets/Cardimg/card11.webp',
      name: 'Sparx',
      price: '₹2999',
    },
    {
      image: 'assets/Cardimg/card12.webp',
      name: 'Asian',
      price: '₹1500',
    },
    {
      image: 'assets/Cardimg/card13.webp',
      name: 'Asian',
      price: '₹1799',
    },
    {
      image: 'assets/Cardimg/card14.webp',
      name: 'Asian',
      price: '₹1380',
    },
    {
      image: 'assets/Cardimg/card15.webp',
      name: 'Bacca Bucci',
      price: '₹2500',
    },
  ];
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
 

  const handleSizeChange = (index, size) => {
    setSelectedCardIndex(index);
    setSelectedSize(size);
  };
  return (
    <>
    
    {/* <CustomizedBadges badgeValue={badgeValue} /> */}
    <CardsContainer>
      {cardsData.map((card, index) => (
        <Card 
        key={index} 
        image={card.image} 
        name={card.name}
         price={card.price}
        selectedSize={selectedCardIndex === index ? selectedSize : ''}
        onSizeChange={(size) => handleSizeChange(index, size)}
        />
      ))}
    </CardsContainer>
    {/* <ListContainer>
      {cardsData.map((card,index)=>(
        
      ))}

    </ListContainer> */}
    </>
  );
};

export default Carddata;

