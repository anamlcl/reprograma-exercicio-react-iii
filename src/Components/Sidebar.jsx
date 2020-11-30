import { Link } from 'react-router-dom'
import { CgArrowLeft } from 'react-icons/cg'
import { CgGirl } from 'react-icons/cg'
import { useHistory } from 'react-router-dom'
import '../Styles/Components/sidebar.css'

const Sidebar = () => {

    const { goBack } = useHistory()

    return (
        <aside className='app-sidebar'>
            <footer>
                <button type='button' onClick={goBack}>
                    <CgArrowLeft size={23} color='#fff' />
                </button>
            </footer>

            <footer>
                <Link to='/about' className='enter-app-bio-two'>
                    <CgGirl size={23} color='#fff' />
                </Link>
            </footer>
        </aside>
    )

}

export default Sidebar