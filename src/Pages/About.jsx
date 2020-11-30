import '../Styles/Pages/about.css'
import { Link } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'

const About = () => {

    return (
        <>

            <div id='img-box'>
                <img src="https://avatars2.githubusercontent.com/u/60146477?s=460&u=15f058c58c330a547f8b08fdc8d7308584f790f3&v=4"
                    alt="minha foto de perfil" />
            </div>

            <div id='name'>
                <h1>Ana Luiza Costa Lima</h1>
            </div>

            <div id='description'>
                <p>
                    Sou formada em biologia mas sou também apaixonada por tecnologia e inovação!<br />
                Busco crescer pessoalmente e profissionalmente na carreira de TI, como desenvolvedora, além de buscar incentivar mais mulheres a construírem suas carreiras também nessa área.
                </p>
                <a href="https://www.linkedin.com/in/anamlcl/">LinkedIn | </a>
                <a href="https://github.com/anamlcl">Github | </a>
                <Link to='/' className='enter-app-home'>
                    <AiOutlineHome size={23} color='#3b308c' />
                </Link>
            </div>



        </>
    )

}

export default About