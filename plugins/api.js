export default function ({ $axios }, inject) {
    // Create a custom axios instance
    const api = $axios.create({
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
            common: {
                Accept: 'text/plain, */*'
            }
        }
    })

    // Set baseURL to something different
    api.setBaseURL('https://api.discortics.com')

    // Inject to context as $api
    inject('api', api)
}
