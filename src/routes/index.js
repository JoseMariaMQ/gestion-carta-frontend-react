import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/Login";
import Admin from "../views/Admin";
import FourOFour from "../views/404";
import Provider from "../context/adminPage/Provider";

const Routes = () => {

    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/login" exact>
                    <Login/>
                </Route>
                <Provider>
                    <Route path="/admin" exact>
                        <Admin/>
                    </Route>
                </Provider>
                <Route>
                    <FourOFour/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;