import { Lesson10Wrapper, ButtonWrapper, ResultBlock, TitleFirst, JokeImage } from "./styles";

import jokeImg from "../../../../assets/jokes/joke-1.png";
import Button from './../../../Button/Button';
import { useState } from "react";

function Lesson10() {

    const [joke, setJoke] = useState<string>("");
    
    const fetchJokeData = async () => {
        const JOKE_URL: string = 'https://official-joke-api.appspot.com/jokes/random';

        try {
            const response = await fetch(JOKE_URL);    
            const result = await response.json();   

            if(response.ok) {
                setJoke(`${result.setup} - ${result.punchline}`)
            } else {
                throw new Error("API Error: -_-")
            }
        } catch(error)  {
            console.log(error.messsage);
        } finally {
            console.log("End")
        }

    }

  return (
    <>
        <Lesson10Wrapper>
            <ButtonWrapper>
                <Button name="Click me to get JOKE!" onClick={fetchJokeData}/>
            </ButtonWrapper>
            <ResultBlock>Text: {joke}</ResultBlock>
        </Lesson10Wrapper>
        <Lesson10Wrapper>
            <TitleFirst>Funny jokes!</TitleFirst>
            <JokeImage src={jokeImg} alt="Funny joke"></JokeImage>
        </Lesson10Wrapper>
    </>
  );
}

export default Lesson10;
