import {useForm} from "react-hook-form";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useContext} from "react";
import AdminPageContext from "../../../context/adminPage";
import Admin from "../../Admin";
import ProtectedRoute from "../../../auth";
import {Redirect} from "react-router-dom";

const LoginForm = () => {
    const {register, handleSubmit} = useForm();
    const {getUserLogin} = useContext(AdminPageContext)

    const onSubmit = (credentials) => {
        getUserLogin(credentials)
    }
    console.log(Date.now(), new Date(localStorage.getItem('tokenExpires')).getTime())
    if (localStorage.getItem('jwtToken')) {
        return /*<Redirect to={{pathname: '/admin'}}/>*/ <ProtectedRoute path="/admin" exact component={Admin}/>
    }
    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-center min-vh-100">
                    <div className="card">
                        <div className="card-header">
                            <h3>Sign In</h3>
                            <div className="d-flex justify-content-end title-login">
                            <span className="font-weight-bolder">
                                CUKY'S
                            </span>
                            </div>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><FontAwesomeIcon icon={["fas", "user"]}/></span>
                                    </div>
                                    <input
                                        type="text"
                                        name="email"
                                        className="form-control"
                                        placeholder="email"
                                        {...register("email", {required: true})}
                                    />

                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><FontAwesomeIcon icon={["fas", "key"]}/></span>
                                    </div>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="password"
                                        {...register("password", {required: true})}
                                    />
                                </div>
                                <div className="row align-items-center remember">
                                    <input type="checkbox"/>Remember Me
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Login" className="btn float-right login_btn"/>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            {/*<div className="d-flex justify-content-center links">
                            Don't have an account?<a href="#">Sign Up</a>
                        </div>*/}
                            <div className="d-flex justify-content-center">
                                <a href="#">Forgot your password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginForm