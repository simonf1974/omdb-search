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
  let html: string = "";
  movies.forEach(movie => {
    const img = movie.Poster.includes("http") ? movie.Poster : "./assets/movie-placeholder.png";
    html += `<div class="col-sm"><div class="card"><div class="card-body">
    <img src="${img}" class="card-img-top" alt="...">
    <h5 class="card-title">${movie.Title}</h5>
    <p class="card-text">(${movie.Year})</p>
    </div></div></div>`;
  });
  console.log(html);
  document.getElementById("list").innerHTML = html;
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
      console.log(data);
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
