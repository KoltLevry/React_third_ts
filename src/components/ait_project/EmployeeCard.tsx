import { useEmployeeContext } from './EmployeeContext';
import { Employee } from './EmployeeContext';
import { CardContainer, Button } from './styles';

interface EmployeeCardProps {
  index: number;
  employee: Employee;
}

const EmployeeCard = ({ index, employee }: EmployeeCardProps) => {
  const { removeEmployee } = useEmployeeContext();

  return (
    <CardContainer>
      <h3>{employee.fullName} {employee.surname}</h3>
      <p>Age: {employee.age}</p>
      <p>Position: {employee.jobPosition}</p>
      <Button onClick={() => removeEmployee(index)} red>Delete</Button>
    </CardContainer>
  );
};

export default EmployeeCard;
