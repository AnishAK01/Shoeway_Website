import React from 'react';
import styled from 'styled-components';
import ContinuousSlider from './Slider'



const Container = styled.div`
    display: flex;
 
    align-items: center;
    text-align: center;
    height: 480px;
    justify-content: space-around;
    width: 100%;
/* border: 5px solid yellow; */

background: rgb(11,12,16);
background: linear-gradient(261deg, rgba(11,12,16,1) 11%, rgba(31,40,51,1) 77%);
`
const Details = styled.div`
width: 40%;
padding: 20px;
color: #66fcf1;
font-size: 30px;
`

function Carousel(props) {
    return (
        <Container>
            
            <ContinuousSlider  />
            <Details>
              <h1>SHOES</h1>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quasi accusamus illo, voluptate laborum eius quod. Voluptas modi quo eum autem quasi assumenda veniam unde odio, nulla totam rem dolorem!
              </div>
            </Details>
                
            
        </Container>
    );
}

export default Carousel;