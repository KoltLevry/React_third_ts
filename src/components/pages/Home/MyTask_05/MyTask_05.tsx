import { useState, useEffect } from "react";
import axios from "axios";

// import Button from "../../../Button/Button";
import Button from "components/Button/Button";

import Spinner from "components/Spinner/Spinner";
// import Spinner from './../../../Spinner/Spinner';

import {
  MyTakWrapper,
  SimpleText,
  TitleSecond,
  ResultBlock,
  ButtonWrapper,
  ResultBlockImg,
  ErrorBlock,
  // UserName,
  // UserPhone,
  // UserCompany,
  // ListItem,
  // ExtraSpinner,
} from "./styles";
import UserList from "./UserList/UserList";
// Написання функції для отримання жарту
function MyTask_04() {

    const [fact, setFact] = useState<string>("");
    const [joke, setJoke] = useState<string>("");
    const [dogPic, setDogPic] = useState<string>("");
    
    // errors
    const [factError, setFactError] = useState<string | undefined>(undefined);
    const [jokeError, setJokeError] = useState<string | undefined>(undefined);
    const [dogPicError, setDogPicError] = useState<string | undefined>(undefined);
    // В JavaScript undefined означає, що змінна існує, але не має значення.
    // spinner
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isLoadingJoke, setIsLoadingJoke] = useState<boolean>(false);

    // Важливо! undefined ≠ null. null – це спеціальне значення, яке означає "нічого", а undefined – відсутність значення.

  // Викликаємо функцію при першому завантаженні компонента
  useEffect( () => {
    getRandomFact();
    getRandomJoke();
    getRandomDogPic();
  }, [])


  const getRandomFact = async () => {
    const FACT_URL: string = 'https://uselessfacts.jsph.pl/api/v2/facts/random?language=en';
    setFact("");
    setFactError(undefined); // Очищаємо попередню помилку 

    try {
      setIsLoading(true); // Перед запитом вмикаємо індикатор завантаження
        const result = await axios.get(FACT_URL);
        setFact(result.data.text);
    } catch(error: unknown) {
      if(error instanceof Error) {
        setFactError(error.message)
      } else {
        setFactError("Unknown error");
      }
    } finally {
      setIsLoading(false); // Вимикаємо індикатор завантаження після запиту
    }
  }

  const getRandomJoke = async () => {
    const JOKE_URL: string = "https://official-joke-api.appspot.com/jokes/random";
    setJokeError(undefined);

    try {
      setIsLoadingJoke(true);
        const result = await axios.get(JOKE_URL);
        setJoke(`${result.data.setup} - ${result.data.punchline}`);

    } catch (error: unknown) {
      if (error instanceof Error) {
        setJokeError(error.message);
      } else {
        setJokeError("Unknown error");
      }
    } finally {
      setIsLoadingJoke(false);
    }
    
    
  }

  const getRandomDogPic = async () => {
    const DOG_PIC_URL: string = " https://dog.ceo/api/breeds/image/random";
    setDogPicError(undefined);

    try {
        const result = await axios.get(DOG_PIC_URL);
        console.log(result);
        setDogPic(`${result.data.message}`);

    } catch(error: unknown) {
      if(error instanceof Error) {
        setDogPicError(error.message);
      } else {
        setDogPicError("Unknown error");
      }
    }
  }

  return (
    <>
      <MyTakWrapper>

        <SimpleText>
        <TitleSecond>1. Get random fact</TitleSecond>
            <ButtonWrapper>
              <Button name="Get random fact" onClick={getRandomFact} disabled={isLoading}></Button>
            </ButtonWrapper>
            <ResultBlock>{fact}</ResultBlock>
           {isLoading &&  <Spinner />} 
           {factError && <ErrorBlock>{factError}</ErrorBlock>}
           {/* conditional rendering */}
        </SimpleText>
        <SimpleText>
        <TitleSecond>2: Отримати випадковий жарт.</TitleSecond>
            <ButtonWrapper><Button name="Get random joke" onClick={getRandomJoke}></Button></ButtonWrapper>
            <ResultBlock>{joke}</ResultBlock>
            {isLoadingJoke && <Spinner/>}
            {jokeError && <ErrorBlock>{jokeError}</ErrorBlock>}
        </SimpleText>
        <SimpleText>
        <TitleSecond>3: Отримати випадкову картинку собаки.</TitleSecond>
            <ButtonWrapper><Button name="Get random dog pic" onClick={getRandomDogPic}></Button></ButtonWrapper>
            <ResultBlock>
                <ResultBlockImg src={dogPic}></ResultBlockImg>
                {dogPicError && <ErrorBlock>{dogPicError}</ErrorBlock>}
            </ResultBlock>
        </SimpleText>
        <SimpleText>
        <TitleSecond>4: Отримати випадковий список користувачів.</TitleSecond>
           <UserList></UserList>
        </SimpleText>
        
      </MyTakWrapper>
    </>
  );
}

export default MyTask_04;
