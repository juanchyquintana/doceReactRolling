import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import ListadoNoticia from "./ListadoNoticia";

const Test = () => {
  const [noticias, setNoticias] = useState([]);
  const [pais, setPais] = useState("ar");
  const [categoria, setCategoria] = useState("general");
  const [paises, setPaises] = useState([]);
  const [mensaje, setMensaje] = useState("");
  const apiKey = "de7790c8316344f1aad516564e45553f";

  const CATEGORIAS = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnología" },
  ];

  useEffect(() => {
    const consultarAPI = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=${apiKey}`
        );
        const data = await response.json();
        if (data.articles.length === 0) {
          setMensaje(
            `No hay noticias disponibles.`
          );
        } else {
          setMensaje("");
          setNoticias(data.articles);
        }
      } catch (error) {
        console.error(error);
      }
    };

    const consultarPais = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setPaises(data);
      } catch (error) {
        console.error(error);
      }
    };

    consultarAPI();
    consultarPais();
  }, [pais, categoria, apiKey]);

  return (
    <>
      <h1 className="text-center my-3">Noticias por País y Categoría</h1>
      <Form.Group className="mt-3">
        <Form.Label className="fw-bold">Selecciona un país:</Form.Label>
        <Form.Select
          id="countrySelect"
          value={pais}
          onChange={(e) => setPais(e.target.value)}
        >
          {paises.map((paisInfo) => (
            <option
              key={paisInfo.cca2}
              value={paisInfo.cca2.toLowerCase()}
            >
              {paisInfo.name.common}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mt-3">
        <Form.Label htmlFor="categorySelect">
          Selecciona una categoría:
        </Form.Label>
        <Form.Select
          id="categorySelect"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          {CATEGORIAS.map((categoria) => (
            <option key={categoria.value} value={categoria.value}>
              {categoria.label}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      {mensaje ? (
        <p className="text-center text-uppercase fw-bold mt-5 p-1 bg-warning rounded">{mensaje}</p>
      ) : (
        <ListadoNoticia noticias={noticias} />
      )}
    </>
  );
};

export default Test;
