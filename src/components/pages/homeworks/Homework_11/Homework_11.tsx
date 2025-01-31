import { useState, useEffect } from "react";
import axios from "axios";
import { 
        HederBox,
        HwWrapper, 
        GreetingText,
        CardsContainer,
        CatCard,
        ErrorBlock,
    } from "./styles.ts";
import Spinner from './../../../Spinner/Spinner';
import Button from "../../../Button/Button.tsx";
// import { v4 as uuid } from "uuid";

function Homework_11() {

    const [catFacts, setCatFacts] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<undefined | string>(undefined);

    const getCatFact = async () => {
        const CAT_FACT_URL: string = "https://catfact.ninja/fact";
        setError(undefined);
        setIsLoading(true);

        try {
            const result = await axios.get(CAT_FACT_URL);
            // setCatFacts(result.data.fact);
            setCatFacts( (prevFacts) => [...prevFacts, result.data.fact]);
        } catch(error: unknown) {
            if(error instanceof Error) {
                setError(error.message);
            } else {
                setError("Unknown error!")
            }
        } finally {
            setIsLoading(false);
        }
    };

    const deleteAllFacts = () => {
        setCatFacts([]);
    };

    useEffect( () => {
        getCatFact();
    }, [])

    const factItems = catFacts.map((fact) => (
      <CatCard key={uuidv4()}>{fact}</CatCard>
    ));
   
    return (
      <>
          <HwWrapper>

           <HederBox>
                <Button 
                    name="DELETE ALL DATA"
                    onClick={deleteAllFacts}
                    disabled={catFacts.length === 0}
                ></Button>
                <GreetingText>Cats Facts</GreetingText>
                <Button 
                    name="GET MORE INFO"
                    onClick={getCatFact}
                ></Button>

            </HederBox>
          
            { catFacts.length > 0 && (
                <CardsContainer>{factItems}</CardsContainer>
            )}

            {isLoading &&  <Spinner></Spinner>}
            {error && <ErrorBlock>{error}</ErrorBlock>}              

          </HwWrapper>
      </>
    );
  }
  
  export default Homework_11;

function uuidv4(): import("react").Key | null | undefined {
  throw new Error("Function not implemented.");
}
