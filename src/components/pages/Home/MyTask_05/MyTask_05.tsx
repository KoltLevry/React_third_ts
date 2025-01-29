import { useState } from "react";
import axios from "axios";

import Button from "../../../Button/Button";
import {
  MyTakWrapper,
  SimpleText,
  TitleSecond,
  ResultBlock,
  ButtonWrapper,
  ResultBlockImg,
  // ExtraSpinner,
} from "./styles";

function MyTask_04() {

    const [fact, setFact] = useState<string>("");
    const [joke, setJoke] = useState<string>("");
    const [dogPic, setDogPic] = useState<string>("");

  const getRandomFact = async () => {
    const FACT_URL: string = 'https://uselessfacts.jsph.pl/api/v2/facts/random?language=en';

    try {
        const result = await axios.get(FACT_URL);
        setFact(result.data.text);
    } catch(error) {
        console.log("Error: ", error)
    }
  }

  const getRandomJoke = async () => {
    const JOKE_URL: string = "https://official-joke-api.appspot.com/jokes/random";

    try {
        const result = await axios.get(JOKE_URL);
        console.log(result);
        setJoke(`${result.data.setup} - ${result.data.punchline}`);

    } catch(error) {
        setJoke("Sorry, error. Can non get the joke 😢")
    }
  }

  const getRandomDogPic = async () => {
    const DOG_PIC_URL: string = " https://dog.ceo/api/breeds/image/random";

    try {
        const result = await axios.get(DOG_PIC_URL);
        console.log(result);
        setDogPic(`${result.data.message}`);

    } catch(error) {
        setDogPic("Sorry, error. Can non get the dog pic 😢");
    }
  }

  return (
    <>
      <MyTakWrapper>

        <SimpleText>
        <TitleSecond>1. Get random fact</TitleSecond>
            <ButtonWrapper><Button name="Get random fact" onClick={getRandomFact}></Button></ButtonWrapper>
            <ResultBlock>{fact}</ResultBlock>
        </SimpleText>
        <SimpleText>
        <TitleSecond>2: Отримати випадковий жарт.</TitleSecond>
            <ButtonWrapper><Button name="Get random joke" onClick={getRandomJoke}></Button></ButtonWrapper>
            <ResultBlock>{joke}</ResultBlock>
        </SimpleText>
        <SimpleText>
        <TitleSecond>3: Отримати випадкову картинку собаки.</TitleSecond>
            <ButtonWrapper><Button name="Get random dog pic" onClick={getRandomDogPic}></Button></ButtonWrapper>
            <ResultBlock>
                <ResultBlockImg src={dogPic}></ResultBlockImg>
            </ResultBlock>
        </SimpleText>
        <SimpleText>
        <TitleSecond>4: Отримати випадковий список користувачів.</TitleSecond>
            <ButtonWrapper><Button name="Get random user list" onClick={getRandomFact}></Button></ButtonWrapper>
            <ResultBlock>{}</ResultBlock>
        </SimpleText>
        
      </MyTakWrapper>
    </>
  );
}

export default MyTask_04;
