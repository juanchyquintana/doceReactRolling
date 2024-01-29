import Noticia from './Noticia'

const ListadoNoticia = ({noticias}) => {

  return (
    <>
        <h2 className='text-center fw-bold pt-5'>Últimas Noticias</h2>

        <div className='my-5 d-flex flex-wrap gap-3 justify-content-center'>
            {noticias.map( noticia => (
                <Noticia 
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </div>
    </>
  )
}

export default ListadoNoticia