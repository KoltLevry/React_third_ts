import { createContext, useContext, useState, ReactNode } from 'react';

export interface Employee {
  fullName: string;
  surname: string;
  age: number;
  jobPosition: string;
}

interface EmployeeContextProps {
  employees: Employee[];
  addEmployee: (employee: Employee) => void;
  removeEmployee: (index: number) => void;
}

const EmployeeContext = createContext<EmployeeContextProps | undefined>(undefined);

export const useEmployeeContext = () => {
  const context = useContext(EmployeeContext);
  if (!context) {
    throw new Error('useEmployeeContext must be used within an EmployeeProvider');
  }
  return context;
};

interface EmployeeProviderProps {
  children: ReactNode;
}

export const EmployeeProvider = ({ children }: EmployeeProviderProps) => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const addEmployee = (employee: Employee) => {
    setEmployees((prev) => [...prev, employee]);
  };

  const removeEmployee = (index: number) => {
    setEmployees((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee, removeEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};
