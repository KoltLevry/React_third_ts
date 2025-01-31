import {
  UserListWrapper,
  ButtonWrapper,
  ResultBlock,
  ErrorBlock,
} from "./styles";

import Button from "../../../../Button/Button";
import axios from "axios";
import { useState } from "react";

interface User {
    id: number;
    name: string;
    phone: string;
    company: {name: string};
}

function UserList() {
  const [, setAllusers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [userListError, setUserListError] = useState<string | undefined>(undefined);

  const getUserList = async () => {
    const USER_LIST_URL: string = "https://jsonplaceholder.typicode.com/users";
    setUserListError(undefined);

    try {
      const result = await axios.get<User[]>(USER_LIST_URL);
      setAllusers(result.data);
      selectRandomUser(result.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setUserListError(error.message);
      } else {
        setUserListError("Unknown error!");
      }
    }
  };

  const selectRandomUser = (users: User[]) => {
    if(users.length === 0) return;
    const randomIndex = Math.floor(Math.random() * users.length);
    setSelectedUser(users[randomIndex]);
  }

  return (
    <>
       <UserListWrapper>
        <ButtonWrapper>
          <Button name="Get random user" onClick={getUserList}></Button>
        </ButtonWrapper>
        <ResultBlock>
          {selectedUser ? (
            <div>
              <strong>{selectedUser.name}</strong> ({selectedUser.company.name}) -{" "}
              {selectedUser.phone}
            </div>
          ) : (
            <p>No user selected</p>
          )}
        </ResultBlock>
        {userListError && <ErrorBlock>{userListError}</ErrorBlock>}
      </UserListWrapper>
    </>
  );
}

export default UserList;
