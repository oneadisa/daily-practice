class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(newStatus) {
    this._isCheckedOut = newStatus;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  getAverageRating() {
    let ratingsSum = this._ratings.reduce(
      (currentSum, rating) => currentSum + rating,
      0
    );
    const lengthOfRatingsArray = this._ratings.length;

    return ratingsSum / lengthOfRatingsArray;
  }

  addRating(rating) {
    this._ratings.push(rating);
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runtime) {
    super(title);
    this._director = director;
    this._runtime = runtime;
  }

  get director() {
    return this._director;
  }

  get runtime() {
    return this._runtime;
  }
}

class CD extends Media {
  constructor(title, songs) {
    super(title);
    this._songs = songs;
  }

  get songs() {
    return this._songs;
  }

  shuffle() {
    let shuffledSongs = [];

    let randomSong = Math.floor(Math.random() * this._songs.length);

    for (let i = 0; i < this._songs.length; i++) {
      shuffledSongs.push(this._songs[i]);
    }
    return shuffledSongs;
  }
}

const historyOfEverything = new Book(
  "Bill Bryson",
  "A Short Historty of Nearly Everything",
  554
);

historyOfEverything.toggleCheckOutStatus();

console.log(historyOfEverything.title);

console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4, 5, 5);

console.log(historyOfEverything.getAverageRating());

const speed = new Movie("Jan de Bont", "Speed", 116);

speed.toggleCheckOutStatus();

console.log(speed.title);

console.log(speed.isCheckedOut);

speed.addRating(1, 1, 5);

console.log(speed.getAverageRating());
