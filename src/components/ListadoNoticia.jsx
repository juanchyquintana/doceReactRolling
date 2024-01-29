import Noticia from "./Noticia";

const ListadoNoticia = ({ noticias }) => {
  return (
    <>
      <h2 className="text-center fw-bold pt-5">Últimas Noticias</h2>

      <div className="m-5 d-flex flex-wrap gap-3 justify-content-between">
        {noticias.map((noticia, index) => (
          <Noticia key={index} noticia={noticia} />
        ))}
      </div>
    </>
  );
};

export default ListadoNoticia;
