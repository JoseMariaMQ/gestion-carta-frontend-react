import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../views/Home";
import PokemonDetail from '../views/PokemonDetail'
import FourOFour from "../views/404";
// import ScrollToTop from '../components/ScrollToTop'

const Routes = () => {

    return (
        <Router>
            {/*<ScrollToTop/>*/}
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/pokemon/:id">
                    <PokemonDetail/>
                </Route>
                <Route>
                    <FourOFour/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;