import { callExpression } from "@babel/types";

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
  let url: string = `https://www.omdbapi.com/?apikey=5aede68a&s=${movieSearch}&page=${page}&type=movie`;
  if (year.length === 4) url += `&y=${year}`;

  console.log(url);
  return url;
};

const displayMovies = movies => {
  if (movies === undefined) return;
  let html: string = "";
  movies.forEach(movie => {
    const img = movie.Poster.includes("http") ? movie.Poster : "./assets/movie-placeholder.png";
    html += `
    <div class="col m-3">
      <div class="card h-100">
        <img src="${img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${movie.Title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${movie.Year} </h6>
        </div>
      </div>
    </div>`;
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
  console.log("get movies");

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

$(document).ready(() => {
  $(document).on("submit", "#form", () => {
    getMovieData();
    return false;
  });

  $("#movie").change(() => {
    initPages();
  });

  $("#year").change(() => {
    initPages();
  });

  $("#page").change(() => {
    getMovieData();
  });

  console.log("startup");

  // $("button").on("click", event => {
  //   const id = event.target.id;
  //   if (id === "mybutton") {
  //     $("#exampleModal").modal("show");
  //   }
  // });
});
