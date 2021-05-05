import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/Login";
import Admin from "../views/Admin";
import FourOFour from "../views/404";
import Provider from "../context/adminPage/Provider";
import ProtectedRoute from "../auth";
import CheckLogin from "../auth/CheckLogin";

const Routes = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>

                <Provider>
                    <CheckLogin exact path="/login" component={Login}/>
                    <ProtectedRoute exact path="/admin" component={Admin}/>
                </Provider>

                <Route>
                    <FourOFour/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;