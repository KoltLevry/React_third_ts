import { Lesson10Wrapper, ButtonWrapper, ResultBlock, TitleFirst, JokeImage } from "./styles";

import jokeImg from "../../../../assets/jokes/joke-1.png";
import Button from './../../../Button/Button';
import Spinner from "../../../Spinner/Spinner";
import { useState } from "react";
import axios from "axios";

function Lesson10() {
    
    const [joke, setJoke] = useState<string>("");
    const [error, setError] = useState<undefined | string>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    //  fetch
    
    // const fetchJokeData = async () => {
    //     const JOKE_URL: string = 'https://official-joke-api.appspot.com/jokes/random';

    //     try {
    //         const response = await fetch(JOKE_URL);    
    //         const result = await response.json();   

    //         if(response.ok) {
    //             setJoke(`${result.setup} - ${result.punchline}`)
    //         } else {
    //             throw new Error("API Error: -_-")
    //         }
    //     } catch(error)  {
    //         console.log(error.messsage);
    //     } finally {
    //         console.log("End")
    //     }

    // }

    // axios

    const fetchJokeData = async () => {
        const JOKE_URL: string = 'https://official-joke-api.appspot.com/jokes/random';
        setJoke("");
        setError(undefined);

        try {
            setIsLoading(true);
            const result = await axios(JOKE_URL);  
            const data = result.data;
            setJoke(`${data.setup} - ${data.punchline}`)
        } catch(error: any)  {
            setError(error.message)
        } finally {
            setIsLoading(false);
        }

    }

  return (
    <>
        <Lesson10Wrapper>
            <ButtonWrapper>
                <Button name="Click me to get JOKE!" onClick={fetchJokeData}/>
            </ButtonWrapper>
            {/* <ResultBlock>Text: {joke}</ResultBlock> */}
            {joke &&  <ResultBlock>{joke}</ResultBlock>}
            {isLoading && <Spinner/>}
        </Lesson10Wrapper>
        <Lesson10Wrapper>
            <TitleFirst>Funny jokes!</TitleFirst>
            <JokeImage src={jokeImg} alt="Funny joke"></JokeImage>
        </Lesson10Wrapper>
    </>
  );
}

export default Lesson10;
