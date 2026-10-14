let form = document.querySelector('form')
let button = document.querySelector('button')

function submitData () {
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        data = Object.fromEntries(new FormData(form))
        console.log(data)
        form.reset();
    })
}

submitData()