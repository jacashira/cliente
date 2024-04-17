export const GetApi = (url,callback) => {
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        } // Cuerpo de la solicitud si es necesario
      })
    .then(response => {
        if(response.status === 403){
            localStorage.removeItem('account')
            window.location.replace("/");
        }
        if (response.status === 404) {
            response.json()
            return null
        }
        return response.json()
    })
    .then((data) => {
        callback(data)
    })
}


export const GetAPI2 = async (url) => {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    console.log(url);
    console.log(response.status);
    if(response.status === 403){
        localStorage.removeItem('account')
        window.location.replace("/");
    } else if (response.status === 404) {
        response.json()
        return null
    } else {
        const data = await response.json()
        return data
    }
}

export const PostAPI = async (url,data) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem('jwt'),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    if(response.status === 403){
        localStorage.removeItem('account')
        window.location.replace("/");
    } else if (response.status === 404) {
        response.json()
        return null
    } else {
        const data = await response.json()
        return data
    }
}

export const PostLoginAPI = async (url,data) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    if(response.status === 403){
        localStorage.removeItem('account')
        window.location.replace("/");
    } else if (response.status === 404) {
        response.json()
        return null
    } else {
        const data = await response.json()
        return data
    }
}