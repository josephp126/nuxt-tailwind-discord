export default function ({ store, $axios }, inject) {
    // Create a custom axios instance
    const api = $axios.create({
        headers: {
            "Authorization": localStorage.getItem('sessionToken'),
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
