import { Container } from "react-bootstrap";
import FormularioNoticias from "./components/FormularioNoticias";
import './App.css'

function App() {
  return (
    <>
      <h1 className="text-center text-uppercase fw-bold bg-warning py-3 border-bottom border-black shadow">
        Rolling Noticias
      </h1>

      <Container>
        <FormularioNoticias />
      </Container>
    </>
  );
}

export default App;
