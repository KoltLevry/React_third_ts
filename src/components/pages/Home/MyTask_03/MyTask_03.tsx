import Button from "../../../Button/Button";
import { MyTakWrapper, ButtonWrapper, CardWraper } from './styles';
import AnimalCard from './../../../AnimalCard/AnimalCard';

function MyTask_03() {


    return(
        <>
        <MyTakWrapper>
            <ButtonWrapper>
                <Button 
                    name="Type - First"
                    variant="primaryFirst"/>
                <Button
                    name="Type - Second"
                    variant="secondarySecond"/>
                <Button
                    name="Click me!"
                    isToggled={true}
                   />
            </ButtonWrapper>
            <CardWraper>
                <AnimalCard 
                    animalName="Ricco"
                    animalSpecies="Penguin"
                    animalImg="src\assets\happy-cartoon-penguin-on-ice-vector.jpg"
                    title="Pilot"
                    content="Just smile and wave boys!"
                    highlighted = {true}
                />
                <AnimalCard 
                    animalName="Skiper"
                    animalSpecies="Penguin"
                    animalImg="src\assets\happy-cartoon-penguin-on-ice-vector.jpg"
                    title="Capitan"
                    content="Just smile and wave boys!"
                    highlighted = {false}
                />
            </CardWraper>
        </MyTakWrapper>
        </>
    )
}

export default MyTask_03;