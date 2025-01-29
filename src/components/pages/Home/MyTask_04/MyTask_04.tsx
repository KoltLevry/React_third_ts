import { useEffect, useState, SetStateAction } from "react";
import axios from "axios";

import {
  MyTakWrapper,
  SimpleText,
  TitleSecond,
  Text,
  List,
  ListItem,
  TitleFirst,
  TryCodeBlock,
} from "./styles";

function MyTask_04() {
  //   useEffect(() => {
  //     console.log("Mountained");
  //   }, []);
  
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response: { data: SetStateAction<null>; }) => setData(response.data))
      .catch((error: { data: SetStateAction<null>; })  => console.error("Помилка запиту:", error));
  }, []);

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
      </MyTakWrapper>
    </>
  );
}

export default MyTask_04;
