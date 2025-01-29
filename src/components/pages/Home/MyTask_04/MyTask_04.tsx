import { useState } from "react";
import axios from "axios";

import Button from "../../../Button/Button";
import {
  MyTakWrapper,
  SimpleText,
  TitleSecond,
  Text,
  List,
  ListItem,
  TitleFirst,
  TryCodeBlock,
  ResultBlock,
  ButtonWrapper,
  // ExtraSpinner,
} from "./styles";

function MyTask_04() {
  //   useEffect(() => {
  //     console.log("Mountained");
  //   }, []);
  
  const [data, setData] = useState(null);

  // joke – зберігає жарт, який ми отримуємо з API.
  const [joke, setJoke] = useState<string>("");

  const fetchJokeData = async () => {
      const JOKE_URL: string = 'https://official-joke-api.appspot.com/jokes/random';

      try {
        const result = await axios.get(JOKE_URL);
        setJoke(`${result.data.setup} - ${result.data.punchline}`)
      } catch {
        setJoke("Не вдалося отримати жарт 😢");
      }
  }

  return (
    <>
      <MyTakWrapper>

        <TitleFirst>1. fetch vs. axios</TitleFirst>
        <SimpleText>
          <TitleSecond>
            fetch – вбудований у браузер API для запитів HTTP.
          </TitleSecond>
          <List>
            <ListItem>
              Використовує Promise, тому потрібно вручну викликати .json(), щоб
              отримати тіло відповіді.
            </ListItem>
            <ListItem>
              {" "}
              Не обробляє автоматично помилки статусу (404, 500), потрібно
              перевіряти response.ok.
            </ListItem>
            <ListItem>
              Не має вбудованої підтримки тайм-аутів, автоматичних заголовків,
              скасування запитів.
            </ListItem>
          </List>
        </SimpleText>

        <SimpleText>
          <TitleSecond>
            axios – бібліотека для HTTP-запитів, яка спрощує роботу з API.
          </TitleSecond>
          <List>
            <ListItem>Автоматично перетворює відповіді у JSON.</ListItem>
            <ListItem>Обробляє помилки запитів.</ListItem>
            <ListItem>
              Підтримує скасування запитів через AbortController або
              CancelToken.
            </ListItem>
            <ListItem>Легше працювати з заголовками та тайм-аутами.</ListItem>
          </List>
        </SimpleText>

        <TitleFirst>2. useEffect – основи</TitleFirst>
        <SimpleText>
          <Text>
            useEffect використовується для виклику побічних ефектів у
            React-компонентах, наприклад, для виконання HTTP-запитів при
            завантаженні сторінки.
          </Text>
          <TryCodeBlock></TryCodeBlock>
        </SimpleText>

        <TitleFirst>3. Використання axios з useEffect</TitleFirst>
        <SimpleText>
          <Text>При запитах до API важливо:</Text>
          <List>
            <ListItem>
              Виконувати запит у useEffect, щоб він запускався при завантаженні
              компонента.
            </ListItem>
            <ListItem>Обробляти помилки.</ListItem>
            <ListItem>
              Скасовувати запити при розмонтуванні компонента.
            </ListItem>
          </List>
          <Text>{data ? data.title : "Loading..."}</Text>
        </SimpleText>

        <SimpleText>
          <ButtonWrapper><Button name="Get Joke!" onClick={fetchJokeData}></Button></ButtonWrapper>
          <ResultBlock>{joke}</ResultBlock>
          {/* <ButtonWrapper><ExtraSpinner></ExtraSpinner></ButtonWrapper> */}
        </SimpleText>

      </MyTakWrapper>
    </>
  );
}

export default MyTask_04;
