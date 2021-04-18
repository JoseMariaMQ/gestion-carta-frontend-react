import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../views/Home";
import FourOFour from "../views/404";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route>
                    <FourOFour/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;