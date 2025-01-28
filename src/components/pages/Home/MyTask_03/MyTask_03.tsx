import Button from "../../../Button/Button";
import { ButtonWrapper } from './styles';

function MyTask_03() {


    return(
        <>
        <ButtonWrapper>
            <Button 
                name="Type - First"
                variant="primaryFirst"/>
            <Button
                name="Type - Second"
                variant="secondarySecond"/>
        </ButtonWrapper>
        </>
    )
}

export default MyTask_03;