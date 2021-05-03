import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/Login";
import Admin from "../views/Admin";
import FourOFour from "../views/404";
import Provider from "../context/adminPage/Provider";
import ProtectedRoute from "../auth";

const Routes = () => {

    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>

                <Provider>
                    <Route path="/login" exact>
                        <Login/>
                    </Route>

                    <ProtectedRoute path="/admin" exact component={Admin}>
                        {/*<Admin/>*/}
                    </ProtectedRoute>
                </Provider>

                <Route>
                    <FourOFour/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;