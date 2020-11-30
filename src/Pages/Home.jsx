import { Link } from 'react-router-dom'
import { CgGirl } from 'react-icons/cg'
import { MdMovieFilter } from 'react-icons/md'
import '../Styles/Pages/home.css'

const Home = () => {

    return (

        <div id='page-landing'>

            <div className='content-wrapper'>
                <main>
                    <h1>Meu hobbie favorito para procrastinar</h1>
                    <p>Listei alguns filmes que adoro reassistir no meu tempo livre &lt;3</p>
                </main>
                <Link to='/movies' className='enter-app'>
                    <MdMovieFilter size={25} color='#fff' />                
                </Link>
                <Link to='/about' className='enter-app-bio'>
                    <CgGirl size={25} color='#fff' />                
                </Link>

            </div>

        </div>
    )

}

export default Home