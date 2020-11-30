import movies from '../Services/data'
import '../Styles/Pages/movies.css'
import Sidebar from '../Components/Sidebar'
import { useState, useEffect } from 'react'

const Movies = () => {

    const [filtroFilmes, setFiltro] = useState([])
    const [buscaFilmes, setBusca] = useState('')

    // console.log(movies)

    useEffect(() => {

        setFiltro(
            movies.filter(movie => {
                return movie.nome.includes(buscaFilmes)
            })
        )

    }, [buscaFilmes])

    return (

        <>

            <Sidebar />

            <div id='search-box'>
                <h1>Total de Filmes: {movies.length}</h1>
                <input
                    type='text'
                    placeholder='Pesquise um filme aqui'
                    onChange={e => { setBusca(e.target.value.toLowerCase()) }}
                />
            </div>

            <div className='container'>
                {
                    filtroFilmes.map(movie => {
                        return (

                            <div key={movie.id} className='card'>
                                <h3>{movie.nome}</h3>
                                <p>Gênero: {movie.genero}</p>
                                <p>Ano: {movie.ano}</p>
                                <img src={movie.capa} alt='capa do filme' />
                            </div>

                        )

                    })

                }
            </div>


            <div className='container'>
                {
                    movies.map(movie => {
                        return <div key={movie.id} className='card'>
                            <h3>{movie.nome}</h3>
                            <p>Gênero: {movie.genero}</p>
                            <p>Ano: {movie.ano}</p>
                            <img src={movie.capa} alt='capa do filme' />
                        </div>
                    })
                }
            </div>
        </>

    )

}

export default Movies