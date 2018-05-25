const url = 'https://pokeapi.co/api/v2/pokemon/7'
const searchForm = document.querySelector('.search-form')
const query = document.querySelector('.query')
const heading = document.querySelector('.heading')
const image = document.querySelector('.image')

// fetch(url)
//     .then((res) => {
//         return res.json()
//     })
//     .then((res) => {
//         console.log('Success!', res)
//     })
//     .catch((err) => {
//         console.log('Whoops', err)
//     })


searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(url + query.value)

    fetch(url + query.value)
        .then(res => res.json())
        .catch(err => console.log('Whoops', err))
        .then(pokemon => {
            heading.innerHTML = pokemon.name
            image.src = pokemon.sprites.front_default
        })
})
