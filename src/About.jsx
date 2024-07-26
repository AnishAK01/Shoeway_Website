import React from 'react';
import styled from 'styled-components';
const AboutSec = styled.div`
    text-align: center;
    display: flex;
flex-direction: column;
align-items: center;
background: rgb(11,12,16);
background: linear-gradient(261deg, rgba(11,12,16,1) 11%, rgba(31,40,51,1) 77%);
color: #66fcf1;
margin-top: 10px;
font-size: 20px;
    h1{
    text-align: center;
    border-bottom: double gold 2px;
    margin: 0;
    width: 170px;
    padding: 0;
    margin: 5px;
}
`
const Details = styled.div`
/* border: 2px solid black; */
text-align: center;

div{
    display: flex;
    margin: 10px;
}
img{
margin: 10px;
}

`
const About = ({text}) => {
    return (
        <AboutSec className='about' id='about'>
            <h1>{text}</h1>
            <Details>
                <div><img src="./assets/gif1.gif" alt="" style={{ height: '250px', }} />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime ducimus, commodi expedita vel laborum blanditiis porro asperiores! Ipsa quisquam cumque neque nostrum molestias laboriosam libero, eligendi voluptas eaque distinctio rem!</p></div>


                <div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime ducimus, commodi expedita vel laborum blanditiis porro asperiores! Ipsa quisquam cumque neque nostrum molestias laboriosam libero, eligendi voluptas eaque distinctio rem!</p>
                    <img src="./assets/gif2.gif" alt="" style={{ height: '250px' }} />

                </div>
            </Details>
        </AboutSec>

    );
};

export default About;