import { Card } from "react-bootstrap";

const Noticia = ({ noticia }) => {
  const { urlToImage, url, title, description, source } = noticia;

  return (

    <>
      <Card className="cardsNoticia">
        <Card.Img variant="top" src={urlToImage} />

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="my-2 text-warning">{source.name}</Card.Subtitle>
          <Card.Text>{description}</Card.Text>
        </Card.Body>

        <Card.Footer>
          <a href={url} className="btn btn-warning text-white w-100 ">
            Ver
          </a>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Noticia;
