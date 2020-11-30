import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../Pages/Home'
import Movies from '../Pages/Movies'
import About from '../Pages/About'

function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path = '/' exact component = {Home} />
                <Route path = '/movies'component = {Movies} />
                <Route path = '/about' component = {About} />
            </Switch>
        </BrowserRouter>
    )

}

export default Routes