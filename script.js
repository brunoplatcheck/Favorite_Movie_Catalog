var favoriteMovieList = [];
var favoriteMovieTrailerList = [];

function addMovie(){
  var favoriteMovie = document.getElementById('movie').value;
  var favoriteMovieTrailer = document.getElementById('trailer').value;
  
    if(( favoriteMovie.endsWith('jpg') ) || ( favoriteMovie.endsWith('jpeg') )){
      
      document.getElementById('errorMessage').innerHTML = '';
      favoriteMovieList.push(favoriteMovie);
      favoriteMovieTrailerList.push(favoriteMovieTrailerList);
      
      cleanSpace();
      rechargeMovie();
      
    } else {
      
      document.getElementById('mensagemDeErro').innerHTML = 'Invalid image address, please try again';
      cleanSpace();
      
    }
  }

function rechargeMovie(){
 
  var movieListElement = document.getElementById('movieList');
  movieListElement.innerHTML = '';
  for(i=0; i < favoriteMovieList.length ; i++){
    movieListElement.innerHTML += `<a href=" ${favoriteMovieTrailerList[i]} "><img src=" ${favoriteMovieList[i]} "></a>`;
    
  }
}

function cleanSpace(){
   document.getElementById('movie').value = '';
   document.getElementById('trailer').value = '';
}