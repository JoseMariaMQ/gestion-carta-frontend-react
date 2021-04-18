import {useState, useEffect} from "react";

const Home = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getSections = async () => {
            const response = await fetch("http://127.0.0.1:8000/api/section")
            const data = await response.json()
            setData(data)
        }
        getSections().catch(null)
    }, [])

    return (
        <div>
            <ul>
                <li>{data[0].name}</li>
                <li>{data[1].name}</li>
            </ul>
        </div>
    )
}

export default Home;