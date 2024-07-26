import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';



const Container = styled.div`
/* border: 2px solid teal; */
    margin:0;
    width: 100%;
    background: rgb(11,12,16);
background: linear-gradient(261deg, rgba(11,12,16,1) 11%, rgba(31,40,51,1) 77%);
color: #66fcf1;
    

`
const Q = styled.div`
width: 65%;
border: 2px solid  #c5c6c7;
border-radius: 20px;
height: 60px;
display: flex;
align-items: center;
justify-content: space-evenly;
margin: 10px auto 10px auto;
font-size: 25px;


`
const A = styled.div`
    width: 45%;
/* border: 2px solid teal; */
max-height: 0px;
display: flex;
align-items: center;
justify-content: space-evenly;
margin: 0 auto 20px auto;
/* padding: 15px; */
font-size: 20px;
overflow: hidden;
 transition: max-height 0.3s ease, padding 0.3s ease;
 box-shadow: 3px 3px 1px   #c5c6c7 ;
 color: #c5c6c7;
`
const AContent = styled.div`
  width: 100%;
  padding: 0 15px;
`;
const Faqs = () => {
   
   const [activeInd,setActInd] = useState(null);

   const toggleAnswer = (index) =>{
    setActInd(activeInd === index? null:index);
   };

const questions = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit?"
]
const answers = [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, praesentium sit id eaque doloribus ea ut perferendis inventore culpa excepturi illo sed expedita hic quaerat, animi, dolores distinctio reprehenderit unde.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, praesentium sit id eaque doloribus ea ut perferendis inventore culpa excepturi illo sed expedita hic quaerat, animi, dolores distinctio reprehenderit unde.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, praesentium sit id eaque doloribus ea ut perferendis inventore culpa excepturi illo sed expedita hic quaerat, animi, dolores distinctio reprehenderit unde.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, praesentium sit id eaque doloribus ea ut perferendis inventore culpa excepturi illo sed expedita hic quaerat, animi, dolores distinctio reprehenderit unde.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, praesentium sit id eaque doloribus ea ut perferendis inventore culpa excepturi illo sed expedita hic quaerat, animi, dolores distinctio reprehenderit unde.",

]

    return (
       <Container>
              <h1 style={{ textAlign: "center", borderBottom: "2px double gold", width: "60%", margin: "10px auto 20px auto" }}>FAQs</h1>
        {questions.map((question,index)=>(
            <div key={index}>
                <Q>
                    <p>{question}</p>
                    <div onClick={()=> toggleAnswer(index)} style={{cursor:'pointer'}}>
                        {activeInd === index?<KeyboardDoubleArrowUpIcon/>: <KeyboardDoubleArrowDownIcon/>}

                    </div>
                </Q>

                <A style={{maxHeight: activeInd === index ? '100px': '0', padding: activeInd === index ? '15px': '0'}}>
                <AContent>{answers[index]}</AContent>

                </A>
            </div>
        ))}
       </Container>

    );
};

export default Faqs;