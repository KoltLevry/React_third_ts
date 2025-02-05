import React, { useState } from 'react';
import { useEmployeeContext } from './EmployeeContext';
import { Employee } from './EmployeeContext';
import { Button, Input, FormContainer, Title } from './styles';

const EmployeeForm = () => {
  const { addEmployee } = useEmployeeContext();
  const [fullName, setFullName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState<number>(18);
  const [jobPosition, setJobPosition] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEmployee: Employee = { fullName, surname, age, jobPosition };
    addEmployee(newEmployee);
    setFullName('');
    setSurname('');
    setAge(18);
    setJobPosition('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>Create Employee</Title>
      <Input
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder="Full Name"
      />
      <Input
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        placeholder="Surname"
      />
      <Input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder="Age"
      />
      <Input
        value={jobPosition}
        onChange={(e) => setJobPosition(e.target.value)}
        placeholder="Job Position"
      />
      <Button type="submit">Create</Button>
    </FormContainer>
  );
};

export default EmployeeForm;
