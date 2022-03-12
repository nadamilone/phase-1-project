const filmsUrl = "https://ghibliapi.herokuapp.com/films";
const firstfilmUrl =
  "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe";

fetch(firstfilmUrl)
  .then((response) => response.json())
  .then((dataFirst) => filmListDetails(dataFirst));

fetch(filmsUrl)
  .then((response) => response.json())
  .then((data) => renderFilmArray(data));

function renderFilmArray(films) {
  films.forEach((film) => {
    const movieContainer = document.querySelector("#movie-list");
    const li = document.createElement("li");
    li.textContent = film.title;
    li.addEventListener("click", () => filmListDetails(film));
    movieContainer.append(li);
  });
}
const likeButton = document.querySelector("#like-button");

const currentCommentsObj = {};
const currentLikesObj = {};
let currentId = null;

function filmListDetails(film) {
  console.log(film);
  const movieBanner = document.querySelector("#Movie-banner");
  movieBanner.src = film.image;

  const movieTitle = document.querySelector("#Movie-name");
  movieTitle.textContent = film.title;

  const japanName = document.querySelector("#Japanese-name");
  japanName.textContent = film.original_title;

  const movieScore = document.querySelector("#Score");
  movieScore.textContent = film.rt_score;

  const movieDescription = document.querySelector("#add-description");
  movieDescription.textContent = film.description;

  currentId = film.id;
  if (currentLikesObj[currentId]) {
    likes.textContent = currentLikesObj[currentId];
  } else {
    currentLikesObj[currentId] = 0;
    likes.textContent = 0;
  }

  const commentUl = document.querySelector("#comments-container");
  commentUl.innerHTML = "";
  if (currentCommentsObj[currentId]) {
    currentCommentsObj[currentId].forEach((comment) => {
      const commentLi = document.createElement("li");
      commentLi.textContent = comment;
      commentUl.append(commentLi);
    });
  } else {
    currentCommentsObj[currentId] = [];
  }
}

likeButton.addEventListener("click", () => {
  let likes = document.querySelector("#likes");
  likes.textContent = ++currentLikesObj[currentId];
});

const commentBox = document.querySelector("#comment-box");

commentBox.addEventListener("submit", (e) => {
  e.preventDefault();
  const newComment = document.querySelector("#new-comment").value;
  const commentUl = document.querySelector("#comments-container");
  const commentLi = document.createElement("li");
  commentLi.textContent = newComment;
  commentUl.append(commentLi);
  currentCommentsObj[currentId].push(newComment);
  commentBox.reset();
});
