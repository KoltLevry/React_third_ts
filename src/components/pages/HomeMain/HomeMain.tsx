// import EmployeeForm from "components/EmployeeForm/EmployeeForm";
import EmployeeForm from "components/ait_project/EmployeeForm"
import { HomePage } from "./styles"
import { EmployeeProvider } from "components/ait_project/EmployeeContext";

function HomeMain() {
  return (
  <HomePage>
   <p> Content Home page</p>
  {/* <EmployeeForm/> */}
    <EmployeeProvider>
      <EmployeeForm/>
      <EmployeeList>
    </EmployeeProvider>
  </HomePage>
)
}
export default HomeMain;