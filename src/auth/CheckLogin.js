import {Redirect} from 'react-router-dom'

const CheckLogin = (props) => {
    const Component = props.component
    const isAuthenticated = localStorage.getItem('jwtToken')
    const tokenExpires = new Date(localStorage.getItem('tokenExpires')).getTime() > Date.now()

    return (
        <>
            {
                !isAuthenticated || !tokenExpires ? (
                        <Component/>
                    ) :
                    (
                        <Redirect to={{pathname: '/admin'}}/>
                    )

            }
        </>
    )
}

export default CheckLogin