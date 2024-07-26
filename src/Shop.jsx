import React from 'react';
import styled
    from 'styled-components';
import Navbar
    from './Navbar';
import Sidebar from './Sidebar';
import FilterBrand from "./FilterBrand"
import Card from './Card';
import Carddata from './Carddata';
import { Link } from 'react-router-dom';

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
background-color: aliceblue;
border-radius: 30px;
/* padding:15px 0 5px 0 ; */
box-shadow: 1px 2px 15px 5px gray inset;

&::-webkit-scrollbar{
  display: none;
    
}

h1{
border-bottom: 2px dotted cornflowerblue;
text-align: center;

}

/*  */

`

const Filter = styled.div`
    margin: 10px;

`

const Shop = () => {
    return (
        <div >
            <nav><Navbar /></nav>

            <div>
                <Sidebar />
                <Container>
                    {/* <h1>We Have what you feel....</h1> */}

                    <Carddata />


                </Container>
            </div>

        </div>
    );
};

export default Shop;