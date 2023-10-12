import axios from "axios"

async function sendForm(value) {
    return axios.post("https://lmstestapi.reezonly.com/v1/user/signup", value)
}

export { sendForm }
