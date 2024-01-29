import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import ListadoNoticia from "./ListadoNoticia";

const FormularioNoticias = () => {

    const [categoria, setCategoria] = useState('general')
    const [noticias, setNoticias] = useState([])

    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=de7790c8316344f1aad516564e45553f`

    useEffect(() => {
        const consultarAPI = async () => {
            const respuesta = await fetch(url)
            const data = await respuesta.json()
            
            setNoticias(data.articles)
        }
        consultarAPI()
    }, [categoria])

    const CATEGORIAS = [
        { value: 'general', label: 'General'},
        { value: 'business', label: 'Negocios'},
        { value: 'entertainment', label: 'Entretenimiento'},
        { value: 'health', label: 'Salud'},
        { value: 'science', label: 'Ciencia'},
        { value: 'sports', label: 'Deportes'},
        { value: 'technology', label: 'Tecnología'},
    ]

  return (
    <>
      <Form.Group className="mt-5">
        <Form.Label className="fw-bold">Busca por Categoría:</Form.Label>
        <Form.Select
            value={categoria}
            onChange={e => setCategoria(e.target.value)}
        >
          {CATEGORIAS.map(categoria => (
            <option
                key={categoria.value}
                value={categoria.value}
            >{categoria.label}</option>
          ))}
        </Form.Select>
      </Form.Group>

      <ListadoNoticia
        noticias={noticias}
      />
    </>
  );
};

export default FormularioNoticias;
