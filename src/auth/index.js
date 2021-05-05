import {Redirect} from 'react-router-dom'

const ProtectedRoute = (props) => {
    const Component = props.component
    const isAuthenticated = localStorage.getItem('jwtToken')
    const tokenExpires = new Date(localStorage.getItem('tokenExpires')).getTime() > Date.now()

    return (
        <>
            {
                isAuthenticated && tokenExpires ? (
                    <Component/>
                ) :
                    (
                        <Redirect to={{pathname: '/login'}}/>
                    )

            }
        </>
    )
}

export default ProtectedRoute