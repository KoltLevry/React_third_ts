import { Link } from "react-router-dom"
import { ClientsPage } from "./styles"

function Clients() {
  return (
    <ClientsPage>
      {/* <Link to='/users/user'>Go to User page</Link> */}
      <Link to="facebook">Go to Facebook page</Link>
      <Link to="microsoft">Go to Microsoft page</Link>
      <Link to="google">Go to Google page</Link>
    </ClientsPage>
  )
}
// ✅ to="facebook" -> веде на /clients/facebook
// ✅ В App.tsx є <Route path="facebook" element={<Facebook />} />, який відповідає за відображення сторінки.
// ✅ Файл Facebook.tsx містить сам компонент <Facebook />, що рендериться.

export default Clients