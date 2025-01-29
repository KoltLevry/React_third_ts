import { useState, useEffect } from "react";
import { 
        HwWrapper, 
        BoxContainer, 
        PhotoContainer, 
        ErrorBlock, 
        ResultContainer, 
        SpinnerContainer,
        SimpleText,
        ButtonWrapper,
        ResultBlock,
        ResultBlockImg,
    } from "./styles.ts";
import Input from './../../../Input/Input';
import axios from "axios";
import Spinner from './../../../Spinner/Spinner';
import Button from "../../../Button/Button.tsx";

function Homework10() {
    const [inputValue1, setInputValue1] = useState<string>("");
    const [imgValue, setImgValue] = useState<string>("");
    const [error1, setError1] = useState<string | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [dogPic, setDogPic] = useState<string>("");
    const [dogPicError, setDogPicError] = useState<string | undefined>(undefined);
    const [isLoading2, setIsLoading2] = useState<boolean>(false);
  
    const getImages = async () => {
      const IMG_URL: string = "https://dog.ceo/api/breeds/image/random";
      setError1(undefined);
  
      try {
        setIsLoading(true);
        const result = await axios.get(IMG_URL);
        setInputValue1(result.data.message);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError1(error.message);
        } else {
          setError1("Unknown error");
        }
      } finally {
        setIsLoading(false);
      }
    };
  
    useEffect(() => { 
        getImages() 
        getRandomDogPic()
    }, []);

    useEffect( () => { getImages() }, [imgValue])
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImgValue(e.target.value);
    };

    // like "second input"
    const getRandomDogPic = async () => {
        const DOG_PIC_URL: string = " https://dog.ceo/api/breeds/image/random";
        setDogPicError(undefined);
    
        try {
            setIsLoading2(true);
            const result = await axios.get(DOG_PIC_URL);
            setDogPic(`${result.data.message}`);
    
        } catch(error: unknown) {
          if(error instanceof Error) {
            setDogPicError(error.message);
          } else {
            setDogPicError("Unknown error");
          }
        } finally {
            setIsLoading2(false);
        }
      }
  
    return (
      <HwWrapper>
        <BoxContainer>
          <Input 
            name="FirstApi" 
            value={imgValue} 
            onChange={handleChange} 
          />
          <ResultContainer>
              {error1 && <ErrorBlock>{error1}</ErrorBlock>}
              {!isLoading && !error1 && inputValue1 && (
                  <PhotoContainer src={inputValue1} alt="Dog"></PhotoContainer>
                )}
                <SpinnerContainer>{isLoading && <Spinner />}</SpinnerContainer>
          </ResultContainer>
        </BoxContainer>
        <BoxContainer>
        <SimpleText>
            <ButtonWrapper><Button name="Get random dog pic" onClick={getRandomDogPic} disabled={isLoading2}></Button></ButtonWrapper>
            <ResultBlock>
                <ResultBlockImg src={dogPic}></ResultBlockImg>
                {dogPicError && <ErrorBlock>{dogPicError}</ErrorBlock>}
                <SpinnerContainer>{isLoading2 && <Spinner />}</SpinnerContainer>
            </ResultBlock>
        </SimpleText>
        </BoxContainer>
      </HwWrapper>
    );
  }
  
  export default Homework10;