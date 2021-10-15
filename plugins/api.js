export default function ({ store, $axios }, inject) {
    // Create a custom axios instance
    const api = $axios.create({
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${store.state.dash.token}`,
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
