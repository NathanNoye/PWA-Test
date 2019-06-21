if("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js")
    .then(registration => {
        console.log(registration)
    })
    .catch(err => console.error(err));
} else {
    console.log('service workers are not available in your browser')
}