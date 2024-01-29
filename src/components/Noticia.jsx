import { Card } from "react-bootstrap";

const Noticia = ({ noticia }) => {
  const { urlToImage, url, title, description, source } = noticia;

  return (

        <Card className="w-50">
          {urlToImage && (
            <Card.Img
              variant="top"
              src={urlToImage}
              height={"250"}
              alt={`Imagen de la noticia ${title}`}
              className="img-fluid"
            />
          )}

          <Card.Body>
            <Card.Title className="text-warning py-2">{title}</Card.Title>
            <Card.Subtitle className="pb-2">{source.name}</Card.Subtitle>
            <Card.Text>{description}</Card.Text>
          </Card.Body>

          <Card.Footer>
            <a
              className="btn btn-outline-warning w-100 text-uppercase fw-bold"
              href={url}
              target="_blank"
            >
              Leer Noticia
            </a>
          </Card.Footer>
        </Card>

  );
};

export default Noticia;
