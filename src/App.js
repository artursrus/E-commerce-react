import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./AppRoutes";
import { Header } from "./components/Header";


export const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <AppRoutes />
    </BrowserRouter>

  );
}
