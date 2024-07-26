import React from 'react';
import Carousel from './Carousel';
import styled from 'styled-components';
import AutoScrollingWelcome from './ScrollingWelcome';
import About from './About';
import Faqs from './Faqs';
import Footer from './Footer';

const Banner = styled.div`
/* border-bottom: 2px solid cyan; */
    height: 100px;

    overflow-x:auto;
    overflow-y: hidden;
   
    &::-webkit-scrollbar{
  display: none;
    
}
`
const Carouseldiv = styled.div`

height: 480px;
/* width: 99.6%; */
    
`

const Container = styled.div`
border: 01px solid #45a29e;
height: 500px;
width: 78%;
position: absolute;
top: 85px;
left: 248px;
overflow: scroll;
overflow-x: hidden;
/* overflow-y: hidden; */
z-index: 1;
background-color: #c5c6c7;
border-radius: 30px;
box-shadow: 1px 2px 15px 5px gray inset;

&::-webkit-scrollbar{
  display: none;
    
}


`
const SectionHome = styled.div`
    
`
const SectionAbout = styled.div`
    /* text-align: center;
    display: flex;
flex-direction: column;
align-items: center;
    h1{
    text-align: center;
    border-bottom: double gold 2px;
    margin: 0;
    width: 170px;
    padding: 0;
    margin: 5px;
} */
`
const SectionFaq = styled.div`
    
`
const SectionContact = styled.div`
    
`
const Details = styled.div`
/* border: 2px solid black; */
/* text-align: center;

div{
    display: flex;
    margin: 10px;
}
img{
margin: 10px;
} */

`
function Maincontent(props) {


    
    return (
        <Container>
            <SectionHome>
                <Carouseldiv>
                    <Carousel />
                </Carouseldiv>
                <Banner>
                    <AutoScrollingWelcome />
                </Banner>
            </SectionHome>
        <SectionAbout>
           <About text = "About!!!"/>
        </SectionAbout>
          

            <SectionFaq>
            <Faqs/>
            </SectionFaq>
            <Footer >
        <Footer/>
        </Footer>
        </Container>



    );
}

export default Maincontent;