import React from 'react';
import styled
    from 'styled-components';
import Navbar
    from './Navbar';
import Sidebar from './Sidebar';
import FilterBrand from "./FilterBrand"
import Card from './Card';
import Carddata from './Carddata';

const Container = styled.div`
border: 2px solid black;
height: 500px;
width: 78%;
position: absolute;
top: 74px;
left: 248px;
overflow: scroll;
overflow-x: hidden;
/* overflow-y: hidden; */
z-index: 1;
border-radius: 30px;
/* padding:15px 0 5px 0 ; */
background-color: #0b0c10;
color:   #66fcf1;
box-shadow: 1px 2px 15px 5px #45a29e  ;

&::-webkit-scrollbar{
  display: none;
    
}

h1{
border-bottom: 2px dotted cornflowerblue;
text-align: center;
margin:220px auto;
}

/*  */

`


const List = styled.li`
    
`
const Img = styled.div`
    
`
const Info = styled.div`
    
`
const Quantity = styled.div`
    
`
const TotalPrice = styled.div`
    
`
const Deletebtn = styled.div`
    
`
const shopCart = ({}) => {
    return (
        <div >
            <nav><Navbar /></nav>

            <div>
                <Sidebar />
                <Container>
                    {/* <h1>Your Cart is Empty</h1> */}
                    <ul>
                    <List>
                    <Img></Img>
                    <Info></Info>
                    <Quantity></Quantity>
                    <TotalPrice></TotalPrice>
                    <Deletebtn></Deletebtn>
                    </List>
                    </ul>

                </Container>
            </div>

        </div>
    );
};

export default shopCart;