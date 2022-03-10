const filmsUrl = 'https://ghibliapi.herokuapp.com/films'

fetch(filmsUrl)
    .then(response => response.json())
    .then(data => renderFilmArray(data))

function renderFilmArray(films) {
    films.forEach((film) => {
        const movieContainer = document.querySelector('#movie-list')
        // console.log(movieContainer)
        const li = document.createElement('li')
        li.textContent = film.title
        li.addEventListener('click', () => filmListDetails(film))
        movieContainer.append(li)
    })
}

function filmListDetails(film) {
    console.log(film)
    const movieBanner = document.querySelector('#Movie-banner')
    movieBanner.src = film.image

    const movieTitle = document.querySelector('#Movie-name')
    movieTitle.textContent = film.title

    const movieScore = document.querySelector('#Score')
    movieScore.textContent = film.rt_score

    const movieDescription = document.querySelector('#add-description')
    movieDescription.textContent = film.description
}

const likeButton = document.querySelector('#like-button')

likeButton.addEventListener('click', () => {
    let likes = document.querySelector('#likes')
    ++likes.textContent
})


const submitButton = document.querySelector('#Submit-btn')
console.log(submitButton)

submitButton.addEventListener('click', () => {
    console.log('I work!')
    const commentBox = document.querySelector('#Comment-box').value
    const commentUl = document.querySelector('ul')
    const commentLi = document.createElement('li')
    commentLi.textContent = commentBox
    commentUl.append(commentLi)

})


