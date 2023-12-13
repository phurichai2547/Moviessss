// 65130500065 Phuri Chainikhom

class Movies {
  //your code here...
  constructor() {
    this.movies = []
  }
  getAllMovies() {
    return this.movies
  }
  addMovie(title, director, year, genre) {
    if (!title || !director || !year || !genre) {
      return undefined
    }
    // this.movies = 
    // title and direc duplicate return unde
    for (const movie of this.movies) {
      if (movie.title.toLowerCase() === title.toLowerCase() &&
        movie.director.toLowerCase() === director.toLowerCase()) {
        console.log(movie);
        return undefined;
        //   }
        // }
        //this.movies.forEach((movie) => {
        // if (movie.title.toLowerCase() === title.toLowerCase() && 
        //movie.director.toLowerCase() === director.toLowerCase()) {
        //console.log(movie);
        //return undefined;
      }
    }
    const movie = {
      title, director, year, genre
    }
    this.movies.push(movie)
    return movie
  }
  updateMovie(title, updateDetails) {
    const findMovie = this.movies.findIndex((movie) => movie.title.toLowerCase() == title.toLowerCase())
    if (findMovie === -1) {
      return undefined
    }
    return Object.assign(this.movies[findMovie], updateDetails)
  }
  deleteMovieByTitle(title) {
    this.movies = this.movies.filter((movie) => movie.title.toLowerCase() !== title.toLowerCase())
  }
}

module.exports = Movies