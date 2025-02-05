import { Link } from "react-router-dom";
import { Title, ClientsPage } from "./styles";

function Clients() {
  return (
    <ClientsPage>
      <Title>Select a company</Title>
      <Link to="facebook">Go to Facebook page</Link>
      <Link to="google">Go to Google page</Link>
      <Link to="microsoft">Go to Microsoft page</Link>
    </ClientsPage>
  );
}

export default Clients;
