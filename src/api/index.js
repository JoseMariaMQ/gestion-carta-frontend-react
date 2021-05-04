const apiCall = async ({
    url,
    method = 'get',
    body,
    headers = {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('jwtToken')
    }
                 }) => {
    try {
        const response = await fetch(url, {
            method,
            body,
            headers
        })

        return response.json()
    } catch (e) {
        await Promise.reject(e)
    }

}

export default apiCall