import { alignProperty } from '@mui/material/styles/cssUtils';
import { useRef, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import XIcon from '@mui/icons-material/X';
import GoogleIcon from '@mui/icons-material/Google';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Homefile from "./Home";


const styletabs = {
    width: "65%",
    textAlign: "center",
    padding: "15px 0 15px 0",
    cursor: "pointer"
}
const StyledIcon = styled.div`
    font-size: 30px;
    transition: font-size 0.3s ease, transform 0.5s ease;
    /* border: 1px solid black; */
    
   
    &:hover {
        font-size: 50px;
        transform: scale(1.25);
  

    }
`;

const Container = styled.div`
    /* border: 1px solid black; */
    width: 250px;
    height: 480px;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-around;
    margin: 20px;
    margin-left: 0px;
    z-index: 2;
    position: absolute;
color: #66fcf1;
    div{
      
    /* border: 1px solid black; */
    border-radius: 15px 0 0 15px;

    }
`

const Home = styled.div`
 font-size: 1.6rem;

`
const About = styled.div`
 font-size: 1.6rem;`
const Shop = styled.div`
 font-size: 1.6rem;`
const FAQs = styled.div`
 font-size: 1.6rem;`
const Contact = styled.div`
 font-size: 1.6rem;`
const SocialHandles = styled.div`
    /* border: 1px solid black; */

    border-radius: 15px 10px 10px 15px;
    width: 75%;
 
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    /* align-items: center; */
span{
   height: 50%;
    display: flex;
    justify-content: space-evenly;
    /* border: 1px solid black; */

}

`







const Sidebar = () => {
    const [Style, setStyle] = useState({
        home: { backgroundColor: "white", boxShadow: "1px 2px 15px 5px gray inset", borderRight: "none", color: "#0b0c10" },
        contact: { backgroundColor: "", borderRight: "" },
        faq: { backgroundColor: "", borderRight: "" },
        shop: { backgroundColor: "", borderRight: "" },
        about: { backgroundColor: "", borderRight: "" }
    });






    const homeClick = () => {
        setStyle({
            home: { backgroundColor: "white", boxShadow: "1px 2px 15px 5px gray inset", borderRight: "none", color: "#0b0c10" },
            contact: { backgroundColor: "", borderRight: "" },
            faq: { backgroundColor: "", borderRight: "" },
            shop: { backgroundColor: "", borderRight: "" },
            about: { backgroundColor: "", borderRight: "" }
        });


        // return(
        //     {Homefile}

        // )

    }



    const aboutClick = () => {
        setStyle({
            home: { backgroundColor: "", borderRight: "" },
            contact: { backgroundColor: "", borderRight: "" },
            faq: { backgroundColor: "", borderRight: "" },
            shop: { backgroundColor: "", borderRight: "" },
            about: { backgroundColor: "white", boxShadow: "1px 2px 15px 5px gray inset", borderRight: "none", color: "#0b0c10" }
        });
    }
    const faqClick = () => {
        setStyle({
            home: { backgroundColor: "", borderRight: "" },
            contact: { backgroundColor: "", borderRight: "" },
            faq: { backgroundColor: "white", boxShadow: "1px 2px 15px 5px gray inset", borderRight: "none", color: "#0b0c10" },
            shop: { backgroundColor: "", borderRight: "" },
            about: { backgroundColor: "", borderRight: "" }
        });
    }
    const contactClick = () => {
        setStyle({
            home: { backgroundColor: "", borderRight: "" },
            contact: { backgroundColor: "white", boxShadow: "1px 2px 15px 5px gray inset", borderRight: "none", color: "#0b0c10" },
            faq: { backgroundColor: "", borderRight: "" },
            shop: { backgroundColor: "", borderRight: "" },
            about: { backgroundColor: "", borderRight: "" }
        });
    }
    const shopClick = () => {
        setStyle({
            home: { backgroundColor: "", borderRight: "" },
            contact: { backgroundColor: "", borderRight: "" },
            faq: { backgroundColor: "", borderRight: "" },
            shop: { backgroundColor: "white", boxShadow: "1px 2px 15px 5px gray inset", borderRight: "none", color: "#0b0c10" },
            about: { backgroundColor: "", borderRight: "" }
        });
    }
    // setAboutbg("");
    // setContactbg("");
    //  setFaqbg("");
    // setShopbg("");


    return (
        <Container>
            <Home className='tab' style={{ ...styletabs, ...Style.home }} onClick={homeClick}> Home</Home>


            <About className='tab' style={{ ...styletabs, ...Style.about }} onClick={aboutClick}>About</About>



            <Link to="/shop" style={{ ...styletabs, ...Style.shop }}>
                <Shop onClick={shopClick} className='tab' style={{ ...styletabs, ...Style.shop }}>

                    Shop
                </Shop>
                </Link>

            <FAQs className='tab' onClick={faqClick} style={{ ...styletabs, ...Style.faq }}>FAQs</FAQs>
            <Contact className='tab' onClick={contactClick} style={{ ...styletabs, ...Style.contact }}>Contact</Contact>
            <SocialHandles>
                <span>
                    <StyledIcon><FacebookRoundedIcon /></StyledIcon>
                    <StyledIcon><XIcon /></StyledIcon>
                    <StyledIcon><InstagramIcon /></StyledIcon>
                </span><br />
                <span>
                    <StyledIcon><GoogleIcon /></StyledIcon>
                    <StyledIcon><WhatsAppIcon /></StyledIcon>
                </span>
            </SocialHandles>

        </Container>
    );
};



export default Sidebar;