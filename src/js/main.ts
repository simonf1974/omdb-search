const constructUrl = () => {
  const movieSearch: string = $("#movie")
    .val()
    .toString();
  const year: string = $("#year")
    .val()
    .toString();
  const page: string = $("#page")
    .val()
    .toString();
  let url: string = `http://www.omdbapi.com/?apikey=5aede68a&s=${movieSearch}&page=${page}&type=movie`;
  if (year.length === 4) url += `&y=${year}`;

  return url;
};

const displayMovies = movies => {
  if (movies === undefined) return;
  const ul = $("#list");
  ul.empty();
  movies.forEach(movie => {
    let li = document.createElement("li");
    const img = movie.Poster.includes("http") ? movie.Poster : "./assets/movie-placeholder.png";
    li.innerHTML = `<p class="title">${movie.Title} (${movie.Year})<p><img src="${img}" alt="">`;
    ul.append(li);
  });
};

const populatePages = (numOfMovies: number) => {
  const pagesCombo = $("#page");
  const currentPage: string = pagesCombo.val().toString();
  pagesCombo.empty();
  const pages = numOfMovies / 10 + 1;
  for (let i: number = 1; i <= pages; i++) {
    pagesCombo.append(new Option(i.toString(), i.toString()));
  }
  pagesCombo.val(currentPage);
};

const getMovieData = () => {
  fetch(constructUrl())
    .then(response => response.json())
    .then(data => {
      populatePages(data.totalResults);
      displayMovies(data.Search);
    });
};

const initPages = () => {
  const pagesCombo = $("#page");
  pagesCombo.empty();
  pagesCombo.append(new Option("1", "1"));
  pagesCombo.val("1");
};

$("#movie").change(function() {
  initPages();
});

$("#year").change(function() {
  initPages();
});

$("#page").change(function() {
  getMovieData();
});

$(document).ready(function() {
  $(document).on("submit", "#form", () => {
    getMovieData();
    return false;
  });
});
