// import { useState, useEffect } from "react";
import { 
        HwWrapper, 
        GreetingText,
        CardsContainer,
        CatCard,
    } from "./styles.ts";
// import Input from './../../../Input/Input';
// import axios from "axios";
// import Spinner from './../../../Spinner/Spinner';
// import Button from "../../../Button/Button.tsx";

function Homework_11() {

  
   
    return (
      <>
          <HwWrapper>
           <GreetingText>Cats Facts</GreetingText>
           <CardsContainer>
                <CatCard>
                    <p>Text</p>
                    <p>Image</p>
                </CatCard>
                <CatCard>
                    <p>Text 1</p>
                    <p>Image 1</p>
                </CatCard>
                <CatCard>
                    <p>Text 1</p>
                    <p>Image 1</p>
                </CatCard>
                <CatCard>
                    <p>Text 1</p>
                    <p>Image 1</p>
                </CatCard>
                <CatCard>
                    <p>Text 1</p>
                    <p>Image 1</p>
                </CatCard>
           </CardsContainer>
          </HwWrapper>
      </>
    );
  }
  
  export default Homework_11;