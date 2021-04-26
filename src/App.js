import Routes from "./routes"
import Provider from './context/clientPage/Provider'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

const App = () => {
    return (
        <Provider>
            <Routes/>
        </Provider>
    )
}

export default App
